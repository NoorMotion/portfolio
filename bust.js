/**
 * Cache-busting: stamps a short content hash onto each asset URL in index.html
 * (e.g. style.min.css?v=3f9a2c1b), so browsers fetch a file again only when it changed.
 * Without this, an unchanged ?v= lets returning visitors keep a stale stylesheet
 * against new markup. Run after every CSS/JS change: npm run build
 */
const fs = require("fs");
const crypto = require("crypto");

const ASSETS = ["style.min.css", "site.config.js", "script.js"];
let html = fs.readFileSync("index.html", "utf8");

for (const file of ASSETS) {
    const hash = crypto.createHash("md5").update(fs.readFileSync(file)).digest("hex").slice(0, 8);
    const escaped = file.replace(/\./g, "\\.");
    html = html.replace(new RegExp(`(["'])${escaped}(\\?v=[^"']*)?\\1`, "g"), `$1${file}?v=${hash}$1`);
    console.log(`${file} → ?v=${hash}`);
}

fs.writeFileSync("index.html", html);
