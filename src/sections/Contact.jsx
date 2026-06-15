import { motion } from "framer-motion";
import ContactForm from "../components/ContactForm";
import SectionHeading from "../components/SectionHeading";
import { contactCards } from "../data/portfolio";

function Contact() {
  return (
    <section id="contact" className="section-space pb-24">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s connect around internships, full-time roles, or collaborative builds."
          description="The contact form is wired for EmailJS, and direct recruiter-friendly links are included for quick outreach."
        />

        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="grid gap-6">
            {contactCards.map(({ label, value, href, icon: Icon }, index) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="section-card flex items-start gap-4 rounded-[28px] p-6 transition hover:-translate-y-1"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-500/15 text-brand-700 dark:text-brand-200">
                  <Icon className="text-xl" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-slate-600 dark:text-slate-400">
                    {label}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-900 dark:text-slate-200">
                    {value}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default Contact;
