import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const initialState = {
  user_name: "",
  user_email: "",
  subject: "",
  message: "",
};

function ContactForm() {
  const formRef = useRef(null);
  const [formData, setFormData] = useState(initialState);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus({
        type: "error",
        message:
          "Add your EmailJS credentials in a .env file to activate the contact form.",
      });
      return;
    }

    try {
      setIsSending(true);
      setStatus({ type: "", message: "" });
      await emailjs.sendForm(serviceId, templateId, formRef.current, {
        publicKey,
      });
      setStatus({
        type: "success",
        message: "Message sent successfully. I will get back to you soon.",
      });
      setFormData(initialState);
    } catch (error) {
      setStatus({
        type: "error",
        message: "Something went wrong while sending the message. Please try again.",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <motion.form
      ref={formRef}
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55 }}
      className="section-card rounded-[30px] p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-900 dark:text-slate-200">
            Your Name
          </span>
          <input
            type="text"
            name="user_name"
            value={formData.user_name}
            onChange={handleChange}
            required
            className="w-full rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-500 focus:border-brand-400 dark:border-white/10 dark:bg-white/5 dark:text-slate-100"
            placeholder="Enter your name"
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-900 dark:text-slate-200">
            Email Address
          </span>
          <input
            type="email"
            name="user_email"
            value={formData.user_email}
            onChange={handleChange}
            required
            className="w-full rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-500 focus:border-brand-400 dark:border-white/10 dark:bg-white/5 dark:text-slate-100"
            placeholder="Enter your email"
          />
        </label>
      </div>

      <label className="mt-5 block">
        <span className="mb-2 block text-sm font-medium text-slate-900 dark:text-slate-200">
          Subject
        </span>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-500 focus:border-brand-400 dark:border-white/10 dark:bg-white/5 dark:text-slate-100"
          placeholder="What would you like to discuss?"
        />
      </label>

      <label className="mt-5 block">
        <span className="mb-2 block text-sm font-medium text-slate-900 dark:text-slate-200">
          Message
        </span>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="6"
          className="w-full rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-500 focus:border-brand-400 dark:border-white/10 dark:bg-white/5 dark:text-slate-100"
          placeholder="Share your opportunity, project, or question."
        />
      </label>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={isSending}
          className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-brand-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSending ? "Sending..." : "Send Message"}
        </button>
        {status.message ? (
          <p
            className={`text-sm ${
              status.type === "success"
                ? "text-emerald-700 dark:text-emerald-300"
                : "text-orange-700 dark:text-orange-300"
            }`}
          >
            {status.message}
          </p>
        ) : null}
      </div>
    </motion.form>
  );
}

export default ContactForm;
