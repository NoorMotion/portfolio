/* ==========================================================================
   NOOR MOTION — homepage behaviour (loaded before script.js)
   1. Hero comp viewer: B/W portrait that colours in on hover/tap, with the bio
      running along the silhouette's mask path and a live timecode.
   2. Card templates that script.js uses when the CMS has stored data.
   3. Keyboard support for the click-to-play work cards.
   ========================================================================== */

(function () {
    'use strict';

    const FPS = 25;               // timecode frame rate, PAL like an AE comp
    const SPEED = 70;             // path units per second while playing
    const RAMP = 0.12;            // seconds for the text to ease up to speed / down to rest

    /**
     * Formats elapsed seconds as SMPTE timecode (HH:MM:SS:FF).
     * @param {number} seconds
     * @returns {string}
     */
    function toTimecode(seconds) {
        const totalFrames = Math.floor(seconds * FPS);
        const ff = totalFrames % FPS;
        const s = Math.floor(totalFrames / FPS);
        const pad = (n) => String(n).padStart(2, '0');
        return `${pad(Math.floor(s / 3600))}:${pad(Math.floor(s / 60) % 60)}:${pad(s % 60)}:${pad(ff)}`;
    }

    /**
     * Wires up the hero portrait.
     * The text loop is driven by requestAnimationFrame rather than a CSS animation
     * because the speed has to ease in and out when hover starts or stops, and the
     * same clock drives the viewer timecode and the playhead.
     */
    function initViewer() {
        const viewer = document.getElementById('hero-viewer');
        const textPath = document.getElementById('bio-path');
        const path = document.getElementById('silhouette');
        const tcEl = document.getElementById('viewer-tc');
        const playhead = document.getElementById('viewer-playhead');
        if (!viewer || !textPath || !path) return;

        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const pathLength = path.getTotalLength();

        let loopLength = pathLength;   // length of one copy of the bio, measured once fonts load
        let offset = 0;                 // current startOffset (moves negative so text flows forward)
        let velocity = 0;
        let elapsed = 0;                // seconds of "playback", shown as timecode
        let live = false;
        let rafId = 0;
        let last = 0;

        function measure() {
            const textEl = textPath.parentNode;
            try {
                // Text holds two copies of the bio, so one copy is half the advance
                const full = textEl.getComputedTextLength();
                if (full > 0) loopLength = full / 2;
            } catch (e) { /* keep the path length as a fallback */ }
        }

        function render() {
            textPath.setAttribute('startOffset', offset.toFixed(2));
            if (tcEl) tcEl.textContent = toTimecode(elapsed);
            if (playhead) {
                const progress = (-offset % loopLength) / loopLength;
                playhead.style.transform = `translateX(${(progress * playhead.parentNode.clientWidth).toFixed(1)}px)`;
            }
        }

        function tick(now) {
            const dt = Math.min(0.05, (now - last) / 1000 || 0);
            last = now;
            const target = live ? SPEED : 0;
            // Exponential approach gives an ease-out on both start and stop
            velocity += (target - velocity) * (1 - Math.exp(-dt / RAMP));
            offset -= velocity * dt;
            if (-offset >= loopLength) offset += loopLength;
            if (live) elapsed += dt;
            render();
            if (live || velocity > 0.5) {
                rafId = requestAnimationFrame(tick);
            } else {
                velocity = 0;
                rafId = 0;
            }
        }

        function setLive(next) {
            if (live === next) return;
            live = next;
            viewer.classList.toggle('is-live', live);
            if (reduceMotion) return;   // colour change only, no moving text
            if (!rafId) {
                last = performance.now();
                rafId = requestAnimationFrame(tick);
            }
        }

        // Mouse: hover plays. Touch and pen: tap toggles, since there is no hover.
        // pointerdown records the input type because not every browser puts it on click.
        let lastPointer = 'mouse';
        viewer.addEventListener('pointerdown', (e) => { lastPointer = e.pointerType; });
        viewer.addEventListener('pointerenter', (e) => { if (e.pointerType === 'mouse') setLive(true); });
        viewer.addEventListener('pointerleave', (e) => { if (e.pointerType === 'mouse') setLive(false); });
        viewer.addEventListener('click', () => { if (lastPointer !== 'mouse') setLive(!live); });
        // Keyboard focus plays too; a tap also focuses, so only react to visible (keyboard) focus
        viewer.addEventListener('focus', () => { if (viewer.matches(':focus-visible')) setLive(true); });
        viewer.addEventListener('blur', () => setLive(false));
        viewer.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setLive(!live); }
        });

        // Stop the loop when the hero scrolls out of view so it never runs off-screen
        if ('IntersectionObserver' in window) {
            new IntersectionObserver((entries) => {
                if (!entries[0].isIntersecting) setLive(false);
            }).observe(viewer);
        }

        if (document.fonts && document.fonts.ready) {
            document.fonts.ready.then(measure);
        } else {
            measure();
        }
        render();
    }

    /** Lets keyboard users open the click-to-play cards. */
    function initCardKeys() {
        document.addEventListener('keydown', (e) => {
            if (e.key !== 'Enter' && e.key !== ' ') return;
            const card = e.target.closest && e.target.closest('.portfolio-item-card');
            if (!card || e.target !== card) return;
            e.preventDefault();
            card.click();
        });
    }

    /** Escapes CMS strings before they go into template HTML. */
    function esc(value) {
        return String(value == null ? '' : value).replace(/[&<>"']/g, (c) => ({
            '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
        }[c]));
    }

    // Templates script.js uses for CMS-stored videos and tools on this page
    window.portfolioCardTemplate = (v) => `
        <article class="work-card portfolio-item-card" tabindex="0" data-video="${esc(v.video_url)}" onclick="expandVideoCard(this, this.dataset.video)">
            <div class="media-box aspect-[4/3]">
                <img src="${esc(v.thumbnail_url)}" alt="${esc(v.title)}" loading="lazy" decoding="async">
                <span class="play-button" aria-hidden="true"><i class="fa-solid fa-play"></i></span>
            </div>
            <div class="card-info p-6">
                <p class="meta">${esc(v.client || v.category)}</p>
                <h4>${esc(v.title)}</h4>
            </div>
        </article>`;

    window.productCardTemplate = (t) => `
        <article class="tool-card">
            <div class="tool-media"><img src="${esc(t.image_url)}" alt="${esc(t.title)}" loading="lazy" decoding="async"></div>
            <div class="tool-body">
                <div class="tool-meta"><span>${esc(t.subtitle)}</span><span>${esc(t.price)}</span></div>
                <h4>${esc(t.title)}</h4>
                <p>${esc(t.description)}</p>
                <button class="btn btn-secondary btn-block" data-id="${esc(t.id)}" onclick="openProductModal(this.dataset.id)">View details and download <i class="fa-solid fa-arrow-right"></i></button>
            </div>
        </article>`;

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => { initViewer(); initCardKeys(); });
    } else {
        initViewer();
        initCardKeys();
    }
})();
