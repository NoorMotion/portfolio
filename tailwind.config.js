/** Tailwind is only used for layout utilities; the design system lives in style.css. */
module.exports = {
    content: ["./index.html", "./pages/blog.html", "./js/script.js"],
    darkMode: ["selector", '[data-theme="dark"]'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['"Inter"', '"Inter Fallback"', "system-ui", "sans-serif"],
                mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
            },
        },
    },
};
