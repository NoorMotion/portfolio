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
    const CASE_TODO = {
        challenge: "[Challenge — one line: what made this product hard to explain?]",
        approach: "[Approach — one line: the idea, structure or style you chose.]",
        result: "[Result — one line, with a real number or outcome if you have one.]",
    };

    const PROJECTS = {
        drivephase: { client: "DrivePhase.ai", title: "AI deal-pipeline explainer", category: "SaaS Explainer", video: { type: "drive", id: "1p22ilqvf2cyatv4v5cVLOdEq7K0-tfoT" }, ...CASE_TODO },
        "payrun-onboarding": { client: "Payrun", title: "Onboarding & initial setup", category: "Product Walkthrough", series: "payrun", video: { type: "youtube", id: "yI97ztJJiwA" }, ...CASE_TODO },
        "payrun-attendance": { client: "Payrun", title: "Attendance module guide", category: "Product Walkthrough", series: "payrun", video: { type: "youtube", id: "vcYG2NTIf7o" }, ...CASE_TODO },
        "payrun-leave": { client: "Payrun", title: "Leave module guide", category: "Product Walkthrough", series: "payrun", video: { type: "youtube", id: "32xnuExV4oM" }, ...CASE_TODO },
        nextcrm: { client: "NextCRM", title: "Marketing automation explainer", category: "SaaS Explainer", video: { type: "drive", id: "1a_OsNZAlauYXjLN6Meoh6ryZhqQE0Y9r" }, ...CASE_TODO },
        salonly: { client: "Salonly", title: "Salon booking plugin launch", category: "Plugin Promo", video: { type: "drive", id: "1hc2joGAoRFD3e0jqdivD9inTIYIXckZJ" }, ...CASE_TODO },
        next3: { client: "Next3", title: "Offload & optimizer plugin promo", category: "Plugin Promo", video: { type: "drive", id: "1R0L7_DTxNBJHL_B7PMc1OStOiCMcGAEC" }, ...CASE_TODO },
        cleanly: { client: "Cleanly", title: "Cleaning business booking system", category: "Promo", video: { type: "drive", id: "13WzQi1z3SSCRwcKSTVyWQV6fb5FwYucF" }, ...CASE_TODO },
        school: { client: "School Management Software", title: "Product promo", category: "Promo", video: { type: "drive", id: "1A7NU3RcdVyAI4CL4w2_hnXHDGuPmpLJX" }, ...CASE_TODO },
        nextvideoreview: { client: "Next Video Review", title: "Video review plugin promo", category: "Plugin Promo", video: { type: "drive", id: "1h89xJaYIL_Crq97M6JXh0eWEN1u3d4Xr" }, ...CASE_TODO },
        washer: { client: "Washer Service Booking", title: "Car wash booking plugin explainer", category: "Plugin Promo", video: { type: "drive", id: "1lIxJSS9FBU143EQFGamtFwmglblQvbgW" }, ...CASE_TODO },
    };

    const SERIES = {
        payrun: { label: "Payrun series", episodes: ["payrun-onboarding", "payrun-attendance", "payrun-leave"] },
    };

    const REEL = { client: "Noor Motion", title: "SaaS Explainer Showreel 2026", category: "Showreel", video: { type: "youtube", id: "pdp05Yl0Bp4" } };

    // Demo videos for the After Effects tools (Master Mask has no demo yet).
    const TOOL_DEMOS = {
        compsync: { client: "CompSync 2.0", title: "CompSync 2.0 demo", category: "AE Script", video: { type: "youtube", id: "K5yyQGnau20" } },
        autocaption: { client: "AutoCaption 2.0", title: "AutoCaption 2.0 demo", category: "AE Script", video: { type: "youtube", id: "Ru0QRRxmgQc" } },
        texteco: { client: "textEco", title: "textEco Text Animator demo", category: "AE Text Preset", video: { type: "youtube", id: "YTG3v_D5ekc" } },
    };

    /**
     * Builds the player element for a video source. Kept in one place so the
     * modal, the reel and any future hover previews agree on embed parameters.
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

    /* Clicking the dimmed area outside a modal closes it. */
    function closeOnBackdrop(dialog) {
        dialog?.addEventListener("click", (e) => {
            if (e.target !== dialog) return;
            const r = dialog.getBoundingClientRect();
            const inside = e.clientX >= r.left && e.clientX <= r.right && e.clientY >= r.top && e.clientY <= r.bottom;
            if (!inside) closeDialog(dialog);
        });
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

    const availability = $("[data-availability]");
    if (availability && CONFIG.availableFrom) availability.textContent = `Available ${CONFIG.availableFrom}`;

    /* ----------------------------------------------------------------------
       Project modal (work cards + full showreel)
       ---------------------------------------------------------------------- */
    const modal = $("#project-modal");
    const player = $("#modal-player");

    /** Fills the modal with one project (or the reel) and starts its video with sound. */
    function showProject(project, key) {
        $("#modal-kicker").textContent = `${project.client} · ${project.category}`;
        $("#modal-title").textContent = project.title;

        player.replaceChildren(createPlayer(project.video, { title: `${project.client}: ${project.title}` }));

        const caseList = $("#modal-case");
        const hasCase = Boolean(project.challenge || project.approach || project.result);
        caseList.hidden = !hasCase;
        if (hasCase) $$("[data-case]", caseList).forEach((dd) => { dd.textContent = project[dd.dataset.case] || "—"; });

        const episodes = $("#modal-episodes");
        const series = project.series && SERIES[project.series];
        episodes.hidden = !series;
        episodes.replaceChildren();
        if (series) {
            series.episodes.forEach((epKey, i) => {
                const ep = PROJECTS[epKey];
                const btn = document.createElement("button");
                btn.type = "button";
                btn.className = "chip mono";
                btn.textContent = `${String(i + 1).padStart(2, "0")} ${ep.title}`;
                btn.setAttribute("aria-pressed", String(epKey === key));
                btn.addEventListener("click", () => showProject(ep, epKey));
                episodes.appendChild(btn);
            });
        }
    }

    if (modal && player) {
        closeOnBackdrop(modal);
        $$("[data-modal-close]", modal).forEach((el) => el.addEventListener("click", () => closeDialog(modal)));

        $$(".work-open").forEach((btn) => btn.addEventListener("click", () => {
            const key = btn.dataset.project;
            if (!PROJECTS[key]) return;
            showProject(PROJECTS[key], key);
            openDialog(modal, () => player.replaceChildren());   // removing the iframe stops playback
        }));

        $$("[data-open-reel]").forEach((btn) => btn.addEventListener("click", () => {
            showProject(REEL, "reel");
            openDialog(modal, () => player.replaceChildren());
        }));

        $$("[data-tool-demo]").forEach((btn) => btn.addEventListener("click", () => {
            const demo = TOOL_DEMOS[btn.dataset.toolDemo];
            if (!demo) return;
            showProject(demo, btn.dataset.toolDemo);
            openDialog(modal, () => player.replaceChildren());
        }));
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
       What I do: service tabs → steps → step detail
       ---------------------------------------------------------------------- */
    const SERVICES = {
        explainer: {
            type: "SaaS explainer video",
            time: "Timeline · 2–4 weeks",
            steps: [
                ["Discovery & Brief", "I learn the product, the audience and where the video will run, then agree scope, timeline and a fixed quote."],
                ["Script & Voiceover", "I turn the feature list into a short story (problem, product, payoff) and record the voiceover that sets the timing."],
                ["Storyboard & Style Frames", "You see every scene sketched and a few frames fully designed in your brand before any animation starts."],
                ["Animation & Sound", "The approved frames come to life in After Effects, with UI motion that matches your real product, plus music and sound."],
                ["Revisions & Delivery", "We refine the cut together, then I render final files for your site, socials and ads."],
            ],
        },
        walkthrough: {
            type: "Product walkthrough / onboarding",
            time: "Timeline · 1–3 weeks",
            steps: [
                ["Product Tour", "You walk me through the feature, and we note exactly where new users usually get stuck."],
                ["Flow & Script", "I map the clicks in order and write narration that explains each one in plain words."],
                ["UI Capture & Rebuild", "Screens are captured or rebuilt cleanly, so the video stays sharp and on-brand at any size."],
                ["Animation & Callouts", "Zooms, highlights and callouts guide the eye to the one thing that matters on each screen."],
                ["Delivery & Updates", "Final videos for your help centre, onboarding emails and in-app guides, built to update when the UI changes."],
            ],
        },
        promo: {
            type: "Promo / launch video",
            time: "Timeline · 2–3 weeks",
            steps: [
                ["Launch Goals", "We pin down the one message, the audience and every place the video will run."],
                ["Hook & Concept", "I pitch a concept and a first-three-seconds hook built to stop the scroll."],
                ["Style Frames", "Key frames set the look, pace and typography before animation begins."],
                ["Animation & Music", "Fast, rhythmic motion cut to music, built around your product's best moments."],
                ["Cut-downs & Delivery", "The master edit plus short cut-downs and aspect ratios for every channel."],
            ],
        },
        tools: {
            type: "Custom After Effects tool",
            time: "Timeline · Custom scope",
            steps: [
                ["Workflow Audit", "I watch how your team works in After Effects and find the steps that eat the most time."],
                ["Tool Spec", "We agree what the script, preset or panel should do, and what it shouldn't."],
                ["Prototype", "A working first version your team can try on a real project."],
                ["Build & Test", "I finish the tool and test it across your projects and After Effects versions."],
                ["Handoff & Support", "Documentation, a short walkthrough video and fixes once your team starts using it."],
            ],
        },
    };

    // Pixel arrow on an 8×7 grid, matching the hero's pixel type: a shaft plus a stepped chevron.
    const PIXEL_ARROW = '<svg class="pipe-arrow" viewBox="0 0 8 7" aria-hidden="true"><rect x="0" y="3" width="8" height="1"/><rect x="4" y="0" width="1" height="1"/><rect x="5" y="1" width="1" height="1"/><rect x="6" y="2" width="1" height="1"/><rect x="6" y="4" width="1" height="1"/><rect x="5" y="5" width="1" height="1"/><rect x="4" y="6" width="1" height="1"/></svg>';

    const pipeTabs = $$(".pipe-tab");
    const stepList = $("#pipe-steps");
    if (pipeTabs.length && stepList) {
        const panel = $("#pipe-panel");
        const text = $("#pipe-text");
        const time = $("#pipe-time");
        const cta = $("#pipe-cta");
        let service = SERVICES.explainer;

        /** Highlights step i of the current service and shows its description. */
        const selectStep = (i) => {
            $$(".pipe-step", stepList).forEach((btn, n) => btn.setAttribute("aria-pressed", String(n === i)));
            text.textContent = service.steps[i][1];
        };

        /** Switches the tab, rebuilds the 5 step rows and resets to step 1. */
        const selectService = (tab, moveFocus = false) => {
            pipeTabs.forEach((t) => {
                const on = t === tab;
                t.setAttribute("aria-selected", String(on));
                t.tabIndex = on ? 0 : -1;
            });
            if (moveFocus) tab.focus();
            panel.setAttribute("aria-labelledby", tab.id);
            service = SERVICES[tab.dataset.service];
            time.textContent = service.time;
            cta.dataset.projectType = service.type;

            stepList.innerHTML = service.steps.map(([name], i) =>
                `<li><button type="button" class="pipe-step" aria-pressed="false"><span class="pipe-num">${String(i + 1).padStart(2, "0")}</span><span class="pipe-name">${name}</span>${PIXEL_ARROW}</button></li>`
            ).join("");
            $$(".pipe-step", stepList).forEach((btn, i) => {
                btn.addEventListener("click", () => selectStep(i));
                btn.addEventListener("focus", () => selectStep(i));
                // Hover previews a step on pointer devices, like scrubbing a timeline.
                btn.addEventListener("pointerenter", (e) => { if (e.pointerType === "mouse") selectStep(i); });
            });
            selectStep(0);
        };

        pipeTabs.forEach((tab, n) => {
            tab.addEventListener("click", () => selectService(tab));
            tab.addEventListener("keydown", (e) => {
                const keys = { ArrowRight: n + 1, ArrowLeft: n - 1, Home: 0, End: pipeTabs.length - 1 };
                if (!(e.key in keys)) return;
                e.preventDefault();
                selectService(pipeTabs[(keys[e.key] + pipeTabs.length) % pipeTabs.length], true);
            });
        });

        selectService(pipeTabs[0]);
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
