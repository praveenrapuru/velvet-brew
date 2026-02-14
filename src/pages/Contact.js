import { useState } from "react";
import { useFormValidation } from "../hooks/useFormValidation";

const rules = {
  name: { required: true },
  email: {
    required: true,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    patternMessage: "Enter a valid email"
  },
  message: {
    required: true,
    minLength: 10
  }
};

function Contact() {
  const [sent, setSent] = useState(false);

  const { values, errors, touched, handleChange, handleBlur, validateAll, reset } = useFormValidation(
    { name: "", email: "", message: "" },
    rules
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateAll()) {
      // would send to backend here
      // console.log(values);
      setSent(true);
      setTimeout(() => {
        setSent(false);
        reset();
      }, 3000);
    }
  };

  const inputClass = (field) => `
    input-field
    ${touched[field] && errors[field] ? "border-red-400" : ""}
  `;

  return (
    <main className="pt-20">
      {/* header */}
      <section className="bg-velvet-800 py-16 text-center">
        <h1 className="font-display text-4xl font-bold text-white mb-2">Contact Us</h1>
        <p className="text-velvet-300">We'd love to hear from you</p>
      </section>

      {/* content */}
      <section className="py-16 bg-velvet-50 dark:bg-velvet-900">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10">

            {/* info */}
            <div>
              <h2 className="font-display text-2xl font-bold text-velvet-800 dark:text-white mb-6">
                Get in Touch
              </h2>

              <div className="space-y-4 text-velvet-600 dark:text-velvet-300">
                <div className="flex gap-3">
                  <span>📍</span>
                  <div>
                    <strong>Address</strong>
                    <p className="text-sm">123 MG Road, Bengaluru 560001</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span>📞</span>
                  <div>
                    <strong>Phone</strong>
                    <p className="text-sm">+91 98765 43210</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span>📧</span>
                  <div>
                    <strong>Email</strong>
                    <p className="text-sm">hello@velvetbrew.in</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span>⏰</span>
                  <div>
                    <strong>Hours</strong>
                    <p className="text-sm">8:00 AM - 10:00 PM (All days)</p>
                  </div>
                </div>
              </div>

                          </div>

            {/* form */}
            <div className="card p-6">
              {sent ? (
                <div className="text-center py-8">
                  <div className="text-4xl mb-3">✅</div>
                  <h3 className="font-semibold text-velvet-800 dark:text-white">Message Sent!</h3>
                  <p className="text-velvet-500 text-sm">We'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-velvet-700 dark:text-velvet-300 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={inputClass("name")}
                      placeholder="Your name"
                    />
                    {touched.name && errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-velvet-700 dark:text-velvet-300 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={inputClass("email")}
                      placeholder="you@example.com"
                    />
                    {touched.email && errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-velvet-700 dark:text-velvet-300 mb-1">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={values.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      rows={4}
                      className={inputClass("message")}
                      placeholder="How can we help?"
                    />
                    {touched.message && errors.message && (
                      <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                    )}
                  </div>

                  <button type="submit" className="btn-primary w-full">
                    Send Message
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;
