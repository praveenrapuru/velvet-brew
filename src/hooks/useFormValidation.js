import { useState } from "react";

// custom hook for form validation
// took some help from stackoverflow for this one lol

export function useFormValidation(initialValues, rules) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  // validate single field
  function validate(fieldName, value) {
    const fieldRules = rules[fieldName];
    if (!fieldRules) return "";

    // required check
    if (fieldRules.required && !value.trim()) {
      return fieldRules.requiredMessage || "This field is required";
    }

    // pattern check (regex)
    if (fieldRules.pattern && !fieldRules.pattern.test(value)) {
      return fieldRules.patternMessage || "Invalid format";
    }

    // min length
    if (fieldRules.minLength && value.length < fieldRules.minLength) {
      return `Minimum ${fieldRules.minLength} characters required`;
    }

    // custom validation function
    if (fieldRules.custom) {
      return fieldRules.custom(value);
    }

    return ""; // no error
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));

    // validate on change only if already touched
    if (touched[name]) {
      const error = validate(name, value);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  }

  function handleBlur(e) {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));

    const error = validate(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  }

  // validate all fields at once (for submit)
  function validateAll() {
    const newErrors = {};
    let isValid = true;

    Object.keys(rules).forEach(fieldName => {
      const error = validate(fieldName, values[fieldName] || "");
      if (error) {
        newErrors[fieldName] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    // mark all as touched
    const allTouched = Object.keys(rules).reduce((acc, key) => {
      acc[key] = true;
      return acc;
    }, {});
    setTouched(allTouched);

    return isValid;
  }

  function reset() {
    setValues(initialValues);
    setErrors({});
    setTouched({});
  }

  return {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    validateAll,
    reset,
    setValues
  };
}
