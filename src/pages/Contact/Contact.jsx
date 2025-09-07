import ContactForm from "../../components/ContactForm/ContactForm";
import SectionHero from "../../components/SectionHero/SectionHero";

export default function Contact() {
  return (
    <div>
      <SectionHero title={"Contact"} text={"Get in touch with us today!"} />
      <ContactForm />
    </div>
  );
}
