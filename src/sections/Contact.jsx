
import { useRef, useState } from "react";
import { motion } from "motion/react";
import emailjs from "@emailjs/browser";

import {
  Mail,
  MapPin,
  Send,
  Code2,
  BriefcaseBusiness,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

function Contact() {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );

      setStatus("success");
      formRef.current.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#0b0718] px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 font-semibold tracking-widest text-purple-400">
            GET IN TOUCH
          </p>

          <h2 className="mb-5 text-4xl font-bold md:text-5xl">
            Let's Work <span className="text-purple-400">Together</span>
          </h2>

          <p className="mx-auto max-w-2xl text-gray-400">
            Have a project idea, opportunity, or just want to connect?
            Feel free to send me a message.
          </p>
        </motion.div>

        <div className="grid gap-10 md:grid-cols-2">

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="mb-4 text-2xl font-semibold">
                Let's talk about your project
              </h3>

              <p className="leading-relaxed text-gray-400">
                I'm always interested in learning new technologies,
                collaborating on interesting projects, and exploring
                opportunities in software development and AI.
              </p>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4">
              <div className="rounded-xl bg-purple-500/10 p-4 text-purple-400">
                <MapPin size={24} />
              </div>

              <div>
                <p className="font-medium">Location</p>
                <p className="text-sm text-gray-400">
                  Matara, Sri Lanka
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4">
              <div className="rounded-xl bg-purple-500/10 p-4 text-purple-400">
                <Mail size={24} />
              </div>

              <div>
                <p className="font-medium">Email</p>
                <p className="text-sm text-gray-400">
                  Send me a message using the contact form.
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="mb-4 font-medium">Connect with me</p>

              <div className="flex gap-4">
                <a
                  href="https://github.com/pramithapreethimal-design"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="rounded-xl border border-white/10 p-3 text-gray-300 transition hover:border-purple-400 hover:text-purple-400"
                >
                  <Code2 size={22} />
                </a>

                <a
                  href="https://www.linkedin.com/in/pramithaliyange/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="rounded-xl border border-white/10 p-3 text-gray-300 transition hover:border-purple-400 hover:text-purple-400"
                >
                  <BriefcaseBusiness size={22} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8"
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              {/* Name */}
              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  Your Name
                </label>

                <input
                  type="text"
                  name="from_name"
                  placeholder="Enter your name"
                  required
                  className="w-full rounded-xl border border-white/10 bg-[#120d22] px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-purple-500"
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  Your Email
                </label>

                <input
                  type="email"
                  name="from_email"
                  placeholder="Enter your email"
                  required
                  className="w-full rounded-xl border border-white/10 bg-[#120d22] px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-purple-500"
                />
              </div>

              {/* Message */}
              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  Your Message
                </label>

                <textarea
                  name="message"
                  rows="5"
                  placeholder="Write your message..."
                  required
                  className="w-full resize-none rounded-xl border border-white/10 bg-[#120d22] px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-purple-500"
                />
              </div>

              {/* Success Message */}
              {status === "success" && (
                <div className="flex items-center gap-2 rounded-lg bg-green-500/10 p-3 text-sm text-green-400">
                  <CheckCircle size={18} />
                  Message sent successfully!
                </div>
              )}

              {/* Error Message */}
              {status === "error" && (
                <div className="flex items-center gap-2 rounded-lg bg-red-500/10 p-3 text-sm text-red-400">
                  <AlertCircle size={18} />
                  Something went wrong. Please try again.
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 font-semibold transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"}

                {!loading && <Send size={18} />}
              </button>

            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <div className="mt-20 border-t border-white/10 pt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Pramitha Preethimal. All rights reserved.
        </div>

      </div>
    </section>
  );
}

export default Contact;
