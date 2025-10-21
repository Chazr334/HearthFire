import type { Metadata } from "next";
import { Section } from "@/components/section";
import { Callout } from "@/components/callout";

export const metadata: Metadata = {
  title: "Field Guide",
  description:
    "Visitor FAQ for Hearthfire gatherings: what to bring, what to wear, and how to join respectfully."
};

export default function FieldGuidePage() {
  return (
    <Section
      id="field-guide"
      title="Visitor Field Guide"
      description="Answering the questions that help first-time guests feel at ease."
    >
      <div className="space-y-8">
        <div>
          <h3 className="font-serif text-2xl text-ember">What to Bring</h3>
          <p>
            Bring a stone or rock from home for the horgr. During ritual we ask
            each person to lay their stone in the shared cairn, offer a blessing
            or silent intention, and then pour a small libation. At the close of
            the rite you reclaim your stone, carrying that blessing back home.
          </p>
          <p>
            Pack water, a chair or blanket, sunscreen, and a potluck dish if you
            are able. Label ingredients clearly, especially potential allergens.
          </p>
        </div>

        <div>
          <h3 className="font-serif text-2xl text-ember">What to Wear</h3>
          <p>
            Dress comfortably and warmly if the weather calls for it. Historical
            garb, renfaire pieces, Skyrim-inspired outfits, or jeans and a tee are
            all at home here. Be yourself, and remember it’s a public park—no
            skyclad.
          </p>
        </div>

        <div>
          <h3 className="font-serif text-2xl text-ember">General Info</h3>
          <ul className="mt-3 space-y-2 text-sm text-bone/85 sm:text-base">
            <li>We run a potluck and grill—coordinate dishes in our volunteer chat or on arrival.</li>
            <li>Arriving 30 minutes early is the easiest way to offer set-up help.</li>
            <li>Clean water is available on site; bring bottles to refill.</li>
          </ul>
        </div>

        <div>
          <h3 className="font-serif text-2xl text-ember">Dogs & Animal Friends</h3>
          <p>
            Dogs are welcome on a sturdy leash no longer than six feet. Please
            mind reactivity, keep pets clear of food tables, and clean up promptly
            so the space stays pleasant for everyone.
          </p>
        </div>

        <div>
          <h3 className="font-serif text-2xl text-ember">Weapons & Substances</h3>
          <Callout title="Respectful Boundaries">
            <p>
              No alcohol or drugs are permitted at Hearthfire events. Firearms
              stay secured within vehicles for the duration of the gathering.
              Ritual blades are allowed when handled responsibly and kept sheathed
              outside ceremonial use. If you have questions, check in with
              leadership before ritual begins.
            </p>
          </Callout>
        </div>
      </div>
    </Section>
  );
}
