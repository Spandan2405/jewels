"use client";

import { useMemo, useState } from "react";

const budgetOptions = [
  "Under ₹1L",
  "₹1L - ₹2.5L",
  "₹2.5L - ₹5L",
  "₹5L - ₹10L",
  "₹10L - ₹25L",
  "₹25L+",
];

const jewelryTypes = [
  "Ring",
  "Necklace",
  "Earrings",
  "Bracelet",
  "Bangle",
  "Pendant",
  "Bridal Set",
  "Custom Piece",
];

const cutOptions = [
  "Round Brilliant",
  "Princess",
  "Emerald",
  "Cushion",
  "Oval",
  "Pear",
  "Radiant",
  "Asscher",
  "Marquise",
  "Heart",
];

const metalOptions = [
  "18K Yellow Gold",
  "18K White Gold",
  "18K Rose Gold",
  "22K Gold",
  "Platinum",
  "Sterling Silver",
];

const occasionOptions = [
  "Engagement",
  "Wedding",
  "Anniversary",
  "Birthday",
  "Festive Gifting",
  "Self Purchase",
  "Heirloom Redesign",
];

const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  jewelryType: "",
  cutPreference: "",
  metalPreference: "",
  occasionTimeline: "",
  budget: "",
  vision: "",
  consent: false,
};

const requiredKeys = [
  "firstName",
  "lastName",
  "email",
  "phone",
  "jewelryType",
  "cutPreference",
  "metalPreference",
  "occasionTimeline",
  "budget",
  "vision",
  "consent",
];

const HomeCommissionForm = ({ commissionFormMeta }) => {
  const [formState, setFormState] = useState(initialForm);
  const [showErrors, setShowErrors] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const errors = useMemo(() => {
    const next = {};
    requiredKeys.forEach((key) => {
      const value = formState[key];
      if (key === "consent") {
        if (!value) next[key] = true;
        return;
      }
      if (!String(value).trim()) next[key] = true;
    });

    if (formState.email && !/\S+@\S+\.\S+/.test(formState.email)) {
      next.email = true;
    }

    if (formState.phone && formState.phone.replace(/\D/g, "").length < 8) {
      next.phone = true;
    }

    return next;
  }, [formState]);

  const hasError = (key) => showErrors && errors[key];

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setSubmitted(false);
    setFormState((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowErrors(true);
    if (Object.keys(errors).length) return;

    const payload = {
      ...formState,
      submittedAt: new Date().toISOString(),
    };

    console.log("Bespoke commission request:", payload);
    console.log("Bespoke commission request (JSON):", JSON.stringify(payload, null, 2));

    setSubmitted(true);
    setShowErrors(false);
    setFormState(initialForm);
  };

  const labels = commissionFormMeta.labels;

  return (
    <section id="begin-journey" className="rs-commission">
      <div className="rs-shell rs-commission__wrap">
        <div className="rs-commission__head">
          <p className="rs-commission__eyebrow">{commissionFormMeta.eyebrow}</p>
          <h2 className="rs-commission__title">{commissionFormMeta.title}</h2>
          <p className="rs-commission__intro">{commissionFormMeta.description}</p>
        </div>

        <form className="rs-form" onSubmit={handleSubmit} noValidate>
          <label className="rs-field">
            <span>{labels.firstName}</span>
            <input
              type="text"
              name="firstName"
              placeholder="Your first name"
              value={formState.firstName}
              onChange={handleChange}
              className={hasError("firstName") ? "is-invalid" : ""}
            />
          </label>

          <label className="rs-field">
            <span>{labels.lastName}</span>
            <input
              type="text"
              name="lastName"
              placeholder="Your last name"
              value={formState.lastName}
              onChange={handleChange}
              className={hasError("lastName") ? "is-invalid" : ""}
            />
          </label>

          <label className="rs-field">
            <span>{labels.email}</span>
            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              value={formState.email}
              onChange={handleChange}
              className={hasError("email") ? "is-invalid" : ""}
            />
          </label>

          <label className="rs-field">
            <span>{labels.phone}</span>
            <input
              type="text"
              name="phone"
              placeholder="+91"
              value={formState.phone}
              onChange={handleChange}
              className={hasError("phone") ? "is-invalid" : ""}
            />
          </label>

          <label className="rs-field">
            <span>{labels.jewelryType}</span>
            <select
              name="jewelryType"
              value={formState.jewelryType}
              onChange={handleChange}
              className={hasError("jewelryType") ? "is-invalid" : ""}
            >
              <option value="">Select type...</option>
              {jewelryTypes.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>

          <label className="rs-field">
            <span>{labels.cutPreference}</span>
            <select
              name="cutPreference"
              value={formState.cutPreference}
              onChange={handleChange}
              className={hasError("cutPreference") ? "is-invalid" : ""}
            >
              <option value="">Select cut...</option>
              {cutOptions.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>

          <label className="rs-field">
            <span>{labels.metalPreference}</span>
            <select
              name="metalPreference"
              value={formState.metalPreference}
              onChange={handleChange}
              className={hasError("metalPreference") ? "is-invalid" : ""}
            >
              <option value="">Select metal...</option>
              {metalOptions.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>

          <label className="rs-field">
            <span>{labels.occasionTimeline}</span>
            <select
              name="occasionTimeline"
              value={formState.occasionTimeline}
              onChange={handleChange}
              className={hasError("occasionTimeline") ? "is-invalid" : ""}
            >
              <option value="">Select occasion...</option>
              {occasionOptions.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>

          <div className={`rs-field rs-field--full ${hasError("budget") ? "has-error" : ""}`}>
            <span>{labels.budget}</span>
            <div className="rs-budget-options">
              {budgetOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  className={`rs-budget-chip ${
                    formState.budget === option ? "is-active" : ""
                  }`}
                  onClick={() => {
                    setSubmitted(false);
                    setFormState((prev) => ({ ...prev, budget: option }));
                  }}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <label className="rs-field rs-field--full">
            <span>{labels.vision}</span>
            <textarea
              rows={5}
              name="vision"
              placeholder="Describe your dream piece - design inspiration, special elements, engraving ideas, or any story you'd like captured..."
              value={formState.vision}
              onChange={handleChange}
              className={hasError("vision") ? "is-invalid" : ""}
            />
          </label>

          <label className={`rs-checkbox ${hasError("consent") ? "is-invalid" : ""}`}>
            <input
              type="checkbox"
              name="consent"
              checked={formState.consent}
              onChange={handleChange}
            />
            <span>{labels.consent}</span>
          </label>

          <div className="rs-form__actions">
            <button type="submit" className="rs-commission__submit">
              {commissionFormMeta.submitLabel}
            </button>
            <p>{commissionFormMeta.trustLine}</p>
          </div>

          {submitted && (
            <p className="rs-form__success">
              Request captured. Open your browser console to view the JSON payload.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default HomeCommissionForm;
