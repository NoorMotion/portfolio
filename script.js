/* ==========================================================================
   NOOR MOTION — page behaviour
   Plain ES2020, no build step. Each block below is independent and bails out
   quietly if its markup isn't on the page.
   ========================================================================== */

(() => {
    "use strict";

    const CONFIG = window.SITE_CONFIG || {};
    const $ = (sel, root = document) => root.querySelector(sel);
    const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    /* ----------------------------------------------------------------------
       Project data. The cards in index.html carry the indexable copy; this is
       what the player needs. Video sources: { type: "youtube" | "vimeo" | "mp4" | "drive", id | src }.
       "drive" is a stopgap: those videos should move to YouTube/Vimeo/MP4.
       ---------------------------------------------------------------------- */
    const PROJECTS = {
        drivephase: { client: "DrivePhase.ai", title: "AI deal-pipeline explainer", video: { type: "drive", id: "1p22ilqvf2cyatv4v5cVLOdEq7K0-tfoT" } },
        nextcrm: { client: "NextCRM", title: "Marketing automation explainer", video: { type: "drive", id: "1a_OsNZAlauYXjLN6Meoh6ryZhqQE0Y9r" } },
        cleanly: { client: "Cleanly", title: "Cleaning business booking system", video: { type: "drive", id: "13WzQi1z3SSCRwcKSTVyWQV6fb5FwYucF" } },
        school: { client: "School Management Software", title: "Product promo", video: { type: "drive", id: "1A7NU3RcdVyAI4CL4w2_hnXHDGuPmpLJX" } },
        salonly: { client: "Salonly", title: "Salon booking plugin launch", video: { type: "drive", id: "1hc2joGAoRFD3e0jqdivD9inTIYIXckZJ" } },
        next3: { client: "Next3", title: "Offload & optimizer plugin promo", video: { type: "drive", id: "1R0L7_DTxNBJHL_B7PMc1OStOiCMcGAEC" } },
        nextvideoreview: { client: "Next Video Review", title: "Video review plugin promo", video: { type: "drive", id: "1h89xJaYIL_Crq97M6JXh0eWEN1u3d4Xr" } },
        washer: { client: "Washer Service Booking", title: "Car wash booking plugin explainer", video: { type: "drive", id: "1lIxJSS9FBU143EQFGamtFwmglblQvbgW" } },
        "payrun-onboarding": { client: "Payrun", title: "Onboarding & initial setup", video: { type: "youtube", id: "yI97ztJJiwA" } },
        "payrun-attendance": { client: "Payrun", title: "Attendance module guide", video: { type: "youtube", id: "vcYG2NTIf7o" } },
        "payrun-leave": { client: "Payrun", title: "Leave module guide", video: { type: "youtube", id: "32xnuExV4oM" } },
    };

    /**
     * Builds the player element for a video source. Kept in one place so the
     * work cards, the reel and any future hover previews agree on embed parameters.
     * @param {{type: string, id?: string, src?: string}} video
     * @param {{autoplay?: boolean, muted?: boolean, loop?: boolean, controls?: boolean, title?: string}} [opts]
     * @returns {HTMLIFrameElement | HTMLVideoElement}
     */
    function createPlayer(video, opts = {}) {
        const { autoplay = true, muted = false, loop = false, controls = true, title = "Video player" } = opts;

        if (video.type === "mp4") {
            const el = document.createElement("video");
            Object.assign(el, { src: video.src, autoplay, muted, loop, controls, playsInline: true });
            el.setAttribute("aria-label", title);
            return el;
        }

        const params = new URLSearchParams();
        let src = "";
        if (video.type === "youtube") {
            params.set("autoplay", autoplay ? "1" : "0");
            params.set("rel", "0");
            params.set("playsinline", "1");
            params.set("modestbranding", "1");
            if (muted) params.set("mute", "1");
            if (!controls) params.set("controls", "0");
            if (loop) { params.set("loop", "1"); params.set("playlist", video.id); }
            params.set("enablejsapi", "1");
            src = `https://www.youtube-nocookie.com/embed/${video.id}?${params}`;
        } else if (video.type === "vimeo") {
            params.set("autoplay", autoplay ? "1" : "0");
            if (muted) params.set("muted", "1");
            if (loop) params.set("loop", "1");
            if (!controls) params.set("background", "1");
            src = `https://player.vimeo.com/video/${video.id}?${params}`;
        } else if (video.type === "drive") {
            src = `https://drive.google.com/file/d/${video.id}/preview`;
        }

        const frame = document.createElement("iframe");
        frame.src = src;
        frame.title = title;
        frame.allow = "autoplay; encrypted-media; picture-in-picture; fullscreen";
        frame.allowFullscreen = true;
        return frame;
    }

    /* ----------------------------------------------------------------------
       Smooth scroll (Lenis) + GSAP wiring. Disabled for reduced motion.
       ---------------------------------------------------------------------- */
    const hasGSAP = typeof window.gsap !== "undefined" && typeof window.ScrollTrigger !== "undefined";
    if (hasGSAP) gsap.registerPlugin(ScrollTrigger);

    let lenis = null;
    if (typeof window.Lenis !== "undefined" && !reduceMotion.matches) {
        lenis = new Lenis({ duration: 1.0, easing: (t) => 1 - Math.pow(1 - t, 3) });
        if (hasGSAP) {
            lenis.on("scroll", ScrollTrigger.update);
            gsap.ticker.add((time) => lenis.raf(time * 1000));
            gsap.ticker.lagSmoothing(0);
        } else {
            const raf = (time) => { lenis.raf(time); requestAnimationFrame(raf); };
            requestAnimationFrame(raf);
        }
    }

    const headerH = () => $("#site-header")?.offsetHeight || 64;

    /** Scrolls to an in-page target, through Lenis when it's running. */
    function scrollToTarget(target) {
        if (lenis) lenis.scrollTo(target, { offset: target === 0 ? 0 : -headerH() });
        else if (target === 0) window.scrollTo({ top: 0, behavior: reduceMotion.matches ? "auto" : "smooth" });
        else target.scrollIntoView({ behavior: reduceMotion.matches ? "auto" : "smooth" });
    }

    document.addEventListener("click", (e) => {
        const link = e.target.closest('a[href^="#"]');
        if (!link) return;
        const id = link.getAttribute("href");
        if (id === "#") return;
        const target = id === "#top" ? 0 : $(id);
        if (target === null) return;
        e.preventDefault();
        if (id !== "#top") history.replaceState(null, "", id);
        // Inside an open dialog the page is scroll-locked: wait for it to close first.
        const dialog = link.closest("dialog[open]");
        if (dialog) dialog.addEventListener("close", () => requestAnimationFrame(() => scrollToTarget(target)), { once: true });
        else scrollToTarget(target);
    });

    /** Stops page scroll while a dialog is open (Lenis ignores body overflow). */
    function lockScroll(locked) {
        document.documentElement.style.overflow = locked ? "hidden" : "";
        if (lenis) locked ? lenis.stop() : lenis.start();
    }

    /* ----------------------------------------------------------------------
       Theme toggle (key shared with the Studio page)
       ---------------------------------------------------------------------- */
    function applyTheme(dark) {
        const root = document.documentElement;
        if (dark) root.dataset.theme = "dark";
        else delete root.dataset.theme;
        $$("[data-theme-label]").forEach((el) => { el.textContent = dark ? "D" : "L"; });
        $$("[data-theme-toggle]").forEach((el) => el.setAttribute("aria-label", dark ? "Switch to light theme" : "Switch to dark theme"));
        $('meta[name="theme-color"]')?.setAttribute("content", dark ? "#0F0F10" : "#EEECEB");
    }

    applyTheme(document.documentElement.dataset.theme === "dark");
    $$("[data-theme-toggle]").forEach((btn) => btn.addEventListener("click", () => {
        const dark = document.documentElement.dataset.theme !== "dark";
        applyTheme(dark);
        try { localStorage.setItem("motionTheme", dark ? "dark" : "light"); } catch (e) { /* private mode */ }
    }));

    /* ----------------------------------------------------------------------
       Dialog helper: open/close with a short fade, scroll lock and focus return
       ---------------------------------------------------------------------- */
    function openDialog(dialog, onClose) {
        if (!dialog || dialog.open) return;
        const opener = document.activeElement;
        dialog.showModal();
        lockScroll(true);
        requestAnimationFrame(() => dialog.classList.add("is-open"));

        const finish = () => {
            lockScroll(false);
            dialog.classList.remove("is-open");
            onClose?.();
            if (opener instanceof HTMLElement && document.contains(opener)) opener.focus({ preventScroll: true });
        };
        dialog.addEventListener("close", finish, { once: true });
    }

    function closeDialog(dialog) {
        if (!dialog?.open) return;
        dialog.classList.remove("is-open");
        const delay = reduceMotion.matches ? 0 : 180;
        setTimeout(() => dialog.close(), delay);
    }

    /* ----------------------------------------------------------------------
       Mobile menu
       ---------------------------------------------------------------------- */
    const menu = $("#menu");
    $("#menu-open")?.addEventListener("click", () => openDialog(menu));
    $$("[data-menu-close]", menu || document).forEach((el) => el.addEventListener("click", () => closeDialog(menu)));
    // Leaving the mobile breakpoint with the menu open would strand it full-screen.
    window.matchMedia("(min-width: 900px)").addEventListener("change", (e) => { if (e.matches) closeDialog(menu); });

    /* ----------------------------------------------------------------------
       Scroll playhead: header bottom edge acts as the comp timeline
       ---------------------------------------------------------------------- */
    const playhead = $("#playhead");
    if (playhead) {
        let ticking = false;
        const update = () => {
            const max = document.documentElement.scrollHeight - window.innerHeight;
            const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
            playhead.style.setProperty("--p", p.toFixed(4));
            ticking = false;
        };
        window.addEventListener("scroll", () => {
            if (!ticking) { ticking = true; requestAnimationFrame(update); }
        }, { passive: true });
        window.addEventListener("resize", update);
        update();
    }

    /* ----------------------------------------------------------------------
       Timeline rulers: seconds labels at each major tick (every 120px)
       ---------------------------------------------------------------------- */
    $$(".ruler").forEach((ruler) => {
        const frag = document.createDocumentFragment();
        for (let s = 0; s < 14; s++) {
            const label = document.createElement("span");
            label.className = "ruler-label";
            label.style.left = `${s * 120}px`;
            label.textContent = `${String(s).padStart(2, "0")}s`;
            frag.appendChild(label);
        }
        ruler.appendChild(frag);
    });

    /* ----------------------------------------------------------------------
       Hero: "Emotion Designer" typo-and-fix typing loop
       ---------------------------------------------------------------------- */
    const heroTitle = $("#hero-title");
    if (heroTitle) {
        const A = $('[data-typing="a"]', heroTitle);
        const B = $('[data-typing="b"]', heroTitle);
        const C = $('[data-typing="cursor"]', heroTitle);
        const TYPO = "Emotion Designer";
        let txt = "", pos = 0, run = 0;

        const render = () => { A.textContent = txt.slice(0, pos); B.textContent = txt.slice(pos); };
        const rnd = (a, b) => a + Math.random() * (b - a);
        const solid = (on) => C.classList.toggle("is-typing", on);
        /** Waits, then reports whether this run is still the current one. */
        const w = (ms, id) => new Promise((r) => setTimeout(r, ms)).then(() => id === run);

        // Types a typo, walks back to fix it, shows the result, then clears.
        async function cycle(id) {
            txt = ""; pos = 0; render(); solid(false);
            if (!await w(700, id)) return;
            solid(true);
            for (const ch of TYPO) {
                txt += ch; pos = txt.length; render();
                if (!await w(ch === " " ? rnd(160, 240) : rnd(70, 150), id)) return;
            }
            solid(false);
            if (!await w(1300, id)) return;
            solid(true);
            while (pos > 1) { pos--; render(); if (!await w(rnd(55, 95), id)) return; }
            solid(false);
            if (!await w(1000, id)) return;
            solid(true);
            txt = txt.slice(0, pos - 1) + txt.slice(pos); pos--; render();
            solid(false);
            if (!await w(rnd(650, 850), id)) return;
            solid(true);
            pos++; render();
            if (!await w(rnd(380, 480), id)) return;
            txt = txt.slice(0, pos - 1) + txt.slice(pos); pos--; render();
            if (!await w(rnd(320, 420), id)) return;
            txt = txt.slice(0, pos) + "M" + txt.slice(pos); pos++; render();
            if (!await w(700, id)) return;
            while (pos < txt.length) { pos++; render(); if (!await w(rnd(30, 45), id)) return; }
            solid(false);
            if (!await w(2800, id)) return;
            solid(true);
            while (pos > 0) {
                txt = txt.slice(0, pos - 1) + txt.slice(pos); pos--; render();
                if (!await w(45, id)) return;
            }
            solid(false);
            await w(500, id);
        }

        async function loop() {
            const id = ++run;
            while (id === run) await cycle(id);
        }

        // Reduced motion keeps the static "Motion Designer" that ships in the HTML.
        if (!reduceMotion.matches) {
            heroTitle.addEventListener("click", loop);
            loop();
        }

        // The title box lets the pointer through so hovering the body colours the photo.
        // On touch screens (no hover) a tap on the photo toggles its colour instead.
        const stage = $("#hero-stage");
        const me = $(".hero-me", stage);
        const box = $(".hero-title-box", stage);
        stage?.addEventListener("click", (e) => {
            const r = box.getBoundingClientRect();
            const onTitle = e.clientX >= r.left && e.clientX <= r.right && e.clientY >= r.top && e.clientY <= r.bottom;
            if (onTitle) { if (!reduceMotion.matches) loop(); }
            else if (me.contains(e.target)) me.classList.toggle("is-colour");
        });
    }


    /* ----------------------------------------------------------------------
       Inline players: work cards and the showreel play where they are.
       One video at a time: starting another removes the previous iframe,
       which is what stops it.
       ---------------------------------------------------------------------- */
    let stopCurrent = null;

    /**
     * Mounts a player over `mount` and marks `host` as playing.
     * @param {HTMLElement} host  gets `is-playing` (hides the poster UI and the card's hit area)
     * @param {HTMLElement} mount positioned element the player fills
     * @param {{type: string, id?: string, src?: string}} video
     * @param {string} title
     */
    function playInline(host, mount, video, title) {
        if (host.classList.contains("is-playing")) return;
        stopCurrent?.();
        const wrap = document.createElement("div");
        wrap.className = "inline-player";
        const el = createPlayer(video, { title });
        wrap.appendChild(el);
        mount.appendChild(wrap);
        let fit = null;
        if (video.type === "drive") {
            const DRIVE_MIN_WIDTH = 960;
            const updateScale = (w) => {
                if (w > 0) wrap.style.setProperty("--s", String(Math.min(1, w / DRIVE_MIN_WIDTH)));
            };
            wrap.classList.add("inline-player--drive");
            updateScale(mount.clientWidth);
            fit = new ResizeObserver(([entry]) => updateScale(entry.contentRect.width));
            fit.observe(wrap);
        }
        host.classList.add("is-playing");
        el.focus({ preventScroll: true });
        stopCurrent = () => { fit?.disconnect(); wrap.remove(); host.classList.remove("is-playing"); stopCurrent = null; };
    }

    /* AE selection box drawn around each card on hover/focus. */
    const HANDLES = ["tl", "tc", "tr", "ml", "mr", "bl", "bc", "br"];
    $$(".work-media").forEach((media) => {
        const sel = document.createElement("span");
        sel.className = "sel";
        sel.setAttribute("aria-hidden", "true");
        sel.innerHTML = '<svg><rect x="0" y="0" width="100%" height="100%" pathLength="1"/></svg>' +
            HANDLES.map((h) => `<span class="handle ${h}"></span>`).join("");
        media.appendChild(sel);
    });

    $$(".work-open").forEach((btn) => btn.addEventListener("click", () => {
        const project = PROJECTS[btn.dataset.project];
        const card = btn.closest(".work-card");
        if (!project || !card) return;
        playInline(card, $(".work-media", card), project.video, `${project.client}: ${project.title}`);
    }));

    /* Showreel: muted looping preview while on screen; "Watch full reel" swaps in the player with sound. */
    const reel = $("#reel");
    const reelFrame = $("#reel-frame");
    if (reel) {
        let preview = null;
        const command = (func) => preview?.contentWindow?.postMessage(JSON.stringify({ event: "command", func, args: [] }), "*");
        const reelVideo = { type: "youtube", id: reel.dataset.youtube };

        $$("[data-open-reel]", reel).forEach((btn) => btn.addEventListener("click", () => {
            command("pauseVideo");
            playInline(reel, reel, reelVideo, "Showreel 2026");
        }));

        const saveData = navigator.connection?.saveData === true;
        if (reelFrame && "IntersectionObserver" in window && !reduceMotion.matches && !saveData) {
            new IntersectionObserver(([entry]) => {
                if (reel.classList.contains("is-playing")) return;
                if (entry.isIntersecting) {
                    if (!preview) {
                        preview = createPlayer(reelVideo, { muted: true, loop: true, controls: false, title: "Showreel preview (muted)" });
                        preview.tabIndex = -1;
                        preview.addEventListener("load", () => setTimeout(() => reelFrame.classList.add("is-ready"), 600), { once: true });
                        reelFrame.appendChild(preview);
                    } else {
                        command("playVideo");
                    }
                } else {
                    command("pauseVideo");
                }
            }, { threshold: 0.35 }).observe(reel);
        }
    }

    /* ----------------------------------------------------------------------
       Logo strip: drifts on its own, page scroll pushes it (and sets its
       direction), press-and-hold stops it, dragging scrubs it with a throw.
       ---------------------------------------------------------------------- */
    const marquee = $("#logo-marquee");
    if (marquee && !reduceMotion.matches) {
        const track = $(".marquee-track", marquee);
        const BASE = 36;                 // px/s idle drift
        let loopW = 0;                   // width of one list; x wraps inside [-loopW, 0)
        let x = 0;
        let dir = -1;                    // -1 = leftwards; flips with scroll / throw direction
        let v = BASE * dir;              // current px/s
        let dragging = false, held = false;
        let lastX = 0, lastT = 0, dragV = 0;
        let lastScroll = window.scrollY;
        let running = false, prev = 0, raf = 0;

        const measure = () => { loopW = track.firstElementChild.getBoundingClientRect().width; };
        const wrap = () => { if (loopW) x = ((x % loopW) - loopW) % loopW; };
        const render = () => { track.style.transform = `translate3d(${x.toFixed(2)}px,0,0)`; };

        const frame = (t) => {
            const dt = Math.min(0.05, (t - prev) / 1000 || 0);
            prev = t;
            const dy = window.scrollY - lastScroll;
            lastScroll = window.scrollY;
            if (!dragging) {
                if (dy) { dir = dy > 0 ? -1 : 1; v += -dy * 0.9; }   // scrolling down pushes left, up pushes right
                const target = held ? 0 : BASE * dir;
                v += (target - v) * Math.min(1, dt * (held ? 14 : 2.2));
                x += v * dt;
                wrap();
                render();
            }
            raf = requestAnimationFrame(frame);
        };
        const start = () => { if (!running) { running = true; prev = performance.now(); lastScroll = window.scrollY; raf = requestAnimationFrame(frame); } };
        const stop = () => { running = false; cancelAnimationFrame(raf); };

        marquee.addEventListener("pointerdown", (e) => {
            if (e.button !== 0) return;
            held = true;
            dragging = false;
            lastX = e.clientX; lastT = e.timeStamp; dragV = 0;
            marquee.setPointerCapture(e.pointerId);
        });
        marquee.addEventListener("pointermove", (e) => {
            if (!held) return;
            const dx = e.clientX - lastX;
            if (!dragging && Math.abs(dx) < 3) return;
            dragging = true;
            const dt = Math.max(1, e.timeStamp - lastT) / 1000;
            dragV = dragV * 0.6 + (dx / dt) * 0.4;
            lastX = e.clientX; lastT = e.timeStamp;
            x += dx; wrap(); render();
        });
        const release = () => {
            if (!held) return;
            if (dragging) {                           // throw: keep the drag speed, settle back to drift that way
                v = Math.max(-2400, Math.min(2400, dragV));
                if (Math.abs(dragV) > 20) dir = dragV < 0 ? -1 : 1;
            }
            held = false;
            dragging = false;
        };
        marquee.addEventListener("pointerup", release);
        marquee.addEventListener("pointercancel", release);

        measure();
        new ResizeObserver(measure).observe(track.firstElementChild);
        // Only animate while the strip is on screen.
        new IntersectionObserver(([entry]) => (entry.isIntersecting ? start() : stop())).observe(marquee);
    }

    /* ----------------------------------------------------------------------
       Reveals: 24px rise + fade, 0.6s, power3.out, stagger 0.06
       ---------------------------------------------------------------------- */
    if (hasGSAP && !reduceMotion.matches) {
        const items = $$("[data-reveal]");
        gsap.set(items, { opacity: 0, y: 24 });
        ScrollTrigger.batch(items, {
            start: "top 90%",
            once: true,
            onEnter: (batch) => gsap.to(batch, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out", stagger: 0.06, overwrite: true }),
        });
    }

    /* ----------------------------------------------------------------------
       Stats: count up from 0 to the number already in the HTML
       ---------------------------------------------------------------------- */
    if (hasGSAP && !reduceMotion.matches) {
        $$("[data-count]").forEach((el) => {
            const target = Number(el.dataset.count);
            const counter = { v: 0 };
            el.textContent = "0";
            ScrollTrigger.create({
                trigger: el,
                start: "top 88%",
                once: true,
                onEnter: () => gsap.to(counter, {
                    v: target,
                    duration: 1.4,
                    ease: "power3.out",
                    onUpdate: () => { el.textContent = String(Math.round(counter.v)); },
                }),
            });
        });
    }

    /* ----------------------------------------------------------------------
       What I do: 4 services → selected service detail
       ---------------------------------------------------------------------- */
    const SERVICES = [
        {
            name: "SaaS Explainer Videos",
            type: "SaaS explainer video",
            text: "I turn what your product does into a 90-second story: script, voiceover, style frames and UI animation that matches your real product.",
        },
        {
            name: "Product Walkthroughs & Onboarding",
            type: "Product walkthrough / onboarding",
            text: "Step-by-step feature tours and setup guides that help new users get going and cut down support tickets.",
        },
        {
            name: "Promo & Launch Videos",
            type: "Promo / launch video",
            text: "Short, punchy cuts for launches, landing pages, ads and plugin listings, with a hook built to stop the scroll.",
        },
        {
            name: "Custom AE Scripts & Tools",
            type: "Custom After Effects tool",
            text: "Scripts, presets and panels that take the repetitive work out of your team's After Effects pipeline.",
        },
    ];

    // Pixel arrow on an 8×7 grid, matching the hero's pixel type: a shaft plus a stepped chevron.
    const PIXEL_ARROW = '<svg class="pipe-arrow" viewBox="0 0 8 7" aria-hidden="true"><rect x="0" y="3" width="8" height="1"/><rect x="4" y="0" width="1" height="1"/><rect x="5" y="1" width="1" height="1"/><rect x="6" y="2" width="1" height="1"/><rect x="6" y="4" width="1" height="1"/><rect x="5" y="5" width="1" height="1"/><rect x="4" y="6" width="1" height="1"/></svg>';

    const stepList = $("#pipe-steps");
    if (stepList) {
        const text = $("#pipe-text");
        const cta = $("#pipe-cta");

        stepList.innerHTML = SERVICES.map((svc, i) =>
            `<li><button type="button" class="pipe-step" aria-pressed="false"><span class="pipe-num">${String(i + 1).padStart(2, "0")}</span><span class="pipe-name">${svc.name}</span>${PIXEL_ARROW}</button></li>`
        ).join("");

        /** Highlights service i and shows its description and form pre-select. */
        const select = (i) => {
            $$(".pipe-step", stepList).forEach((btn, n) => btn.setAttribute("aria-pressed", String(n === i)));
            text.textContent = SERVICES[i].text;
            cta.dataset.projectType = SERVICES[i].type;
        };

        $$(".pipe-step", stepList).forEach((btn, i) => {
            btn.addEventListener("click", () => select(i));
            btn.addEventListener("focus", () => select(i));
            // Hover previews a service on pointer devices, like scrubbing a timeline.
            btn.addEventListener("pointerenter", (e) => { if (e.pointerType === "mouse") select(i); });
        });
        select(0);
    }

    /* ----------------------------------------------------------------------
       Contact: Calendly link + form (Formspree via config, email fallback)
       ---------------------------------------------------------------------- */
    const email = CONFIG.email || "nralamyt@gmail.com";
    $$("[data-calendly]").forEach((a) => {
        if (CONFIG.calendlyUrl) {
            a.href = CONFIG.calendlyUrl;
            a.target = "_blank";
            a.rel = "noopener noreferrer";
        } else {
            a.href = `mailto:${email}?subject=${encodeURIComponent("Booking a 20-min call")}`;
        }
    });

    const form = $("#contact-form");
    const status = $("#form-status");

    // "Start a project" on a service pre-selects that project type in the form.
    $$("[data-project-type]").forEach((link) => link.addEventListener("click", () => {
        const select = $("#f-type");
        if (select) select.value = link.dataset.projectType;
    }));

    /** Shows a form message; kind is "ok", "error" or "" (neutral). */
    function setStatus(msg, kind = "") {
        status.textContent = msg;
        status.classList.toggle("is-ok", kind === "ok");
        status.classList.toggle("is-error", kind === "error");
    }

    form?.addEventListener("submit", async (e) => {
        e.preventDefault();
        if (!form.checkValidity()) {
            const firstInvalid = form.querySelector(":invalid");
            setStatus("Please fill in the fields marked *.", "error");
            firstInvalid?.focus();
            return;
        }

        const data = Object.fromEntries(new FormData(form));
        if (data._gotcha) return;   // honeypot filled: a bot, drop silently

        if (!CONFIG.formEndpoint) {
            // No form service configured: hand the message to the visitor's email app.
            const body = [
                `Name: ${data.name}`,
                `Email: ${data.email}`,
                `Company / URL: ${data.company || "—"}`,
                `Project type: ${data.project_type}`,
                `Budget: ${data.budget || "Not sure yet"}`,
                "",
                data.message,
            ].join("\n");
            window.location.href = `mailto:${email}?subject=${encodeURIComponent(`Project inquiry: ${data.project_type}`)}&body=${encodeURIComponent(body)}`;
            setStatus("Opening your email app…");
            return;
        }

        const submit = form.querySelector('[type="submit"]');
        submit.disabled = true;
        setStatus("Sending…");
        try {
            const res = await fetch(CONFIG.formEndpoint, {
                method: "POST",
                headers: { "Content-Type": "application/json", Accept: "application/json" },
                body: JSON.stringify(data),
            });
            if (!res.ok) throw new Error(String(res.status));
            form.reset();
            setStatus("Thanks — message received. I'll reply by email.", "ok");
        } catch (err) {
            setStatus(`Couldn't send. Please email ${email} instead.`, "error");
        } finally {
            submit.disabled = false;
        }
    });

    /* ----------------------------------------------------------------------
       Dhaka clock (footer + mobile menu)
       ---------------------------------------------------------------------- */
    const clocks = $$("[data-clock]");
    if (clocks.length) {
        const fmt = new Intl.DateTimeFormat("en-GB", { timeZone: "Asia/Dhaka", hour: "2-digit", minute: "2-digit" });
        const tick = () => { const t = fmt.format(new Date()); clocks.forEach((c) => { c.textContent = t; }); };
        tick();
        setInterval(tick, 15000);
    }
})();
