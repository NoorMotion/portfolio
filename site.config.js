/**
 * Site settings that change without touching markup or logic.
 * Nothing here is a secret: a Formspree form URL and a Calendly link are public by design,
 * so they live in this file instead of being hardcoded in script.js.
 */
window.SITE_CONFIG = {
    // Formspree (or any service that accepts a JSON POST), e.g. "https://formspree.io/f/<YOUR_FORM_ID>".
    // Left empty, the contact form opens the visitor's email app with the message filled in.
    formEndpoint: "",

    // e.g. "https://calendly.com/<YOUR_HANDLE>/20min".
    // Left empty, "Book a 20-min call" opens an email instead.
    calendlyUrl: "",

    // Shown in the hero meta row as "Available <value>", e.g. "January 2027".
    // Left empty, the row reads "Open for new projects".
    availableFrom: "",

    email: "nralamyt@gmail.com",
};
