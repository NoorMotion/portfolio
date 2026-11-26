/**
 * Cache-busting: stamps a short content hash onto each asset URL in index.html
 * (e.g. style.min.css?v=3f9a2c1b), so browsers fetch a file again only when it changed.
 * Without this, an unchanged ?v= lets returning visitors keep a stale stylesheet
 * against new markup. Run after every CSS/JS change: npm run build
 */
const fs = require("fs");
const crypto = require("crypto");

const ASSETS = ["css/style.min.css", "js/site.config.js", "js/script.js"];
const PAGES = ["index.html", "blog.html"];

const hashes = ASSETS.map((file) => {
    const hash = crypto.createHash("md5").update(fs.readFileSync(file)).digest("hex").slice(0, 8);
    console.log(`${file} → ?v=${hash}`);
    return { file, escaped: file.replace(/\./g, "\\."), hash };
});

for (const page of PAGES) {
    let html = fs.readFileSync(page, "utf8");
    for (const { file, escaped, hash } of hashes) {
        html = html.replace(new RegExp(`(["'])${escaped}(\\?v=[^"']*)?\\1`, "g"), `$1${file}?v=${hash}$1`);
    }
    fs.writeFileSync(page, html);
}
