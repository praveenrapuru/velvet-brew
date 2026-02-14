import { useState } from "react";
import { useFormValidation } from "../../hooks/useFormValidation";

// form validation
const rules = {
  name: { required: true, requiredMessage: "Name is required" },
  phone: {
    required: true,
    pattern: /^[6-9]\d{9}$/,  // indian mobile numbers
    patternMessage: "Enter valid 10 digit number"
  },
  date: {
    required: true,
    custom: (val) => {
      const selected = new Date(val);
      const today = new Date();
      today.setHours(0,0,0,0);
      return selected < today ? "Select future date" : "";
    }
  },
  time: { required: true },
  guests: { required: true }
};
// might add email field later

function BookingForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    validateAll,
    reset
  } = useFormValidation(
    { name: "", phone: "", date: "", time: "", guests: "2" },
    rules
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateAll()) {
      // console.log("booking data:", values);
      setSubmitted(true);

      // reset after 3 sec
      setTimeout(() => {
        setSubmitted(false);
        reset();
      }, 3000);
    }
  };

  // get today's date for min attribute
  const today = new Date().toISOString().split('T')[0];

  // input class helper
  const inputClass = (field) => `
    input-field
    ${touched[field] && errors[field] ? "border-red-400 focus:border-red-400" : ""}
  `;

  return (
    <section id="booking" className="py-20 bg-white dark:bg-velvet-800">
      <div className="max-w-2xl mx-auto px-4">

        <div className="text-center mb-10">
          <h2 className="section-title">Book a Table</h2>
          <p className="text-velvet-500 dark:text-velvet-400">
            Reserve your spot for a great experience
          </p>
        </div>

        <div className="card p-6 md:p-8">
          {submitted ? (
            // success message
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-velvet-800 dark:text-white mb-2">
                Booking Confirmed!
              </h3>
              <p className="text-velvet-500">We'll send you a confirmation SMS shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">

              {/* name & phone */}
              <div className="grid md:grid-cols-2 gap-4">
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
                    placeholder="Your name"
                    className={inputClass("name")}
                  />
                  {touched.name && errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-velvet-700 dark:text-velvet-300 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={values.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="9876543210"
                    className={inputClass("phone")}
                  />
                  {touched.phone && errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>
              </div>

              {/* date & time */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-velvet-700 dark:text-velvet-300 mb-1">
                    Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={values.date}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    min={today}
                    className={inputClass("date")}
                  />
                  {touched.date && errors.date && (
                    <p className="text-red-500 text-sm mt-1">{errors.date}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-velvet-700 dark:text-velvet-300 mb-1">
                    Time
                  </label>
                  <select
                    name="time"
                    value={values.time}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={inputClass("time")}
                  >
                    <option value="">Select time</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="12:00">12:00 PM</option>
                    <option value="13:00">1:00 PM</option>
                    <option value="14:00">2:00 PM</option>
                    <option value="15:00">3:00 PM</option>
                    <option value="16:00">4:00 PM</option>
                    <option value="17:00">5:00 PM</option>
                    <option value="18:00">6:00 PM</option>
                    <option value="19:00">7:00 PM</option>
                    <option value="20:00">8:00 PM</option>
                  </select>
                  {touched.time && errors.time && (
                    <p className="text-red-500 text-sm mt-1">{errors.time}</p>
                  )}
                </div>
              </div>

              {/* guests */}
              <div>
                <label className="block text-sm font-medium text-velvet-700 dark:text-velvet-300 mb-1">
                  Number of Guests
                </label>
                <select
                  name="guests"
                  value={values.guests}
                  onChange={handleChange}
                  className="input-field"
                >
                  {[1,2,3,4,5,6,7,8].map(n => (
                    <option key={n} value={n}>{n} {n === 1 ? "person" : "people"}</option>
                  ))}
                </select>
              </div>

              <button type="submit" className="btn-primary w-full">
                Confirm Booking
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default BookingForm;
