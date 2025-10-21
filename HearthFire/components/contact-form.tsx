"use client";

import { ChangeEvent, FormEvent, useMemo, useState } from "react";
import { z } from "zod";
import { contactTopics } from "@/lib/data";
import { cn } from "@/lib/utils";

const contactSchema = z.object({
  name: z.string().min(2, "Please share at least two characters for your name."),
  email: z
    .string()
    .email("We need a valid email address so we can write back."),
  topic: z.string().min(1, "Choose the topic closest to your question."),
  message: z
    .string()
    .min(12, "Let us know a bit more so we can respond with care.")
    .max(1500, "Kindly keep messages under 1500 characters.")
});

type ContactFormState = z.infer<typeof contactSchema>;

const initialState: ContactFormState = {
  name: "",
  email: "",
  topic: contactTopics[0]?.value ?? "",
  message: ""
};

export function ContactForm({ className }: { className?: string }) {
  const [formState, setFormState] = useState<ContactFormState>(initialState);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const errorMessages = useMemo(() => Object.values(errors), [errors]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const parsed = contactSchema.safeParse(formState);

    if (!parsed.success) {
      setStatus("error");
      const fieldErrors: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const path = issue.path[0];
        if (typeof path === "string") {
          fieldErrors[path] = issue.message;
        }
      }
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setStatus("success");
    setFormState(initialState);
  };

  const handleChange = (field: keyof ContactFormState) => {
    return (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setFormState((prev) => ({
        ...prev,
        [field]: event.target.value
      }));
    };
  };

  return (
    <form
      className={cn(
        "space-y-6 rounded-3xl border border-ember/40 bg-charcoal/80 p-8 shadow-inner-ember backdrop-blur",
        className
      )}
      aria-describedby="contact-form-status"
      onSubmit={handleSubmit}
      noValidate
    >
      <div className="space-y-1 text-center sm:text-left">
        <h2 className="font-display text-3xl text-ember">Send a Message</h2>
        <p className="text-sm text-bone/70">
          We typically respond within three evenings. Reach out with questions,
          collaborations, or accessibility requests.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-semibold text-bone">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className="w-full rounded-xl border border-iron/50 bg-charcoal/70 px-4 py-3 text-sm text-bone shadow-inner focus:border-ember focus:outline-none focus:ring-2 focus:ring-amber"
            value={formState.name}
            onChange={handleChange("name")}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name ? (
            <p id="name-error" className="text-sm text-iron">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div className="space-y-2">
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-bone"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="w-full rounded-xl border border-iron/50 bg-charcoal/70 px-4 py-3 text-sm text-bone shadow-inner focus:border-ember focus:outline-none focus:ring-2 focus:ring-amber"
            value={formState.email}
            onChange={handleChange("email")}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email ? (
            <p id="email-error" className="text-sm text-iron">
              {errors.email}
            </p>
          ) : null}
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="topic" className="block text-sm font-semibold text-bone">
          Topic
        </label>
        <select
          id="topic"
          name="topic"
          className="w-full rounded-xl border border-iron/50 bg-charcoal/70 px-4 py-3 text-sm text-bone focus:border-ember focus:outline-none focus:ring-2 focus:ring-amber"
          value={formState.topic}
          onChange={handleChange("topic")}
          aria-invalid={Boolean(errors.topic)}
          aria-describedby={errors.topic ? "topic-error" : undefined}
        >
          {contactTopics.map((topic) => (
            <option key={topic.value} value={topic.value}>
              {topic.label}
            </option>
          ))}
        </select>
        {errors.topic ? (
          <p id="topic-error" className="text-sm text-iron">
            {errors.topic}
          </p>
        ) : null}
      </div>

      <div className="space-y-2">
        <label
          htmlFor="message"
          className="block text-sm font-semibold text-bone"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="w-full rounded-xl border border-iron/50 bg-charcoal/70 px-4 py-3 text-sm text-bone shadow-inner focus:border-ember focus:outline-none focus:ring-2 focus:ring-amber"
          value={formState.message}
          onChange={handleChange("message")}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message ? (
          <p id="message-error" className="text-sm text-iron">
            {errors.message}
          </p>
        ) : null}
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-full border border-iron bg-iron/10 px-6 py-3 text-sm font-semibold text-bone transition hover:border-ember hover:text-ember focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber"
        >
          Send Message
        </button>
        <p className="text-xs text-bone/60">
          This form shares your note with volunteers. Responses come within 72
          hours.
        </p>
      </div>

      <div
        id="contact-form-status"
        className="text-sm text-bone/70"
        aria-live="polite"
      >
        {status === "success"
          ? "Thank you for reaching out. Expect a reply within three evenings."
          : null}
        {status === "error" && errorMessages.length
          ? "Please check the highlighted fields so we can respond properly."
          : null}
      </div>
    </form>
  );
}
