/* ==========================================================================
   NOOR MOTION PORTFOLIO - CONTROLLER & LOGIC SCRIPT
   ========================================================================== */

window.tailwind = window.tailwind || {};
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#2563EB',
                accentBlue: '#3A86FF',
            }
        }
    }
};

// ==========================================
// ⚙️ DYNAMIC DATA MANAGEMENT (Noor Motion)
// ==========================================
const siteData = {
    general: {
        logo: "NOORMOTION",
        email: "nralamyt@gmail.com",
        phone: "+8801867739749",
        address: "Dhaka, Bangladesh"
    },
    hero: {
        badge: "Professional Motion Designer & AE Toolmaker",
        titleLine1: "Your digital product",
        titleLine2: "Moves in motion",
        description: "I craft SaaS product explainer videos, 3D visual graphics, and custom Adobe After Effects workflow automation tools that elevate brand stories.",
        primaryBtn: "See Selected Works",
        secondaryBtn: "Watch Showreel"
    },
    about: {
        title: "About Me",
        description: "I'm a passionate Motion Designer dedicated to crafting engaging videos, custom Adobe After Effects scripts, and presets that optimize workflows and drive conversions.",
        experience: "5+ Years Experience",
        projects: "150+ Completed Projects"
    },
    services: [
        { icon: "fa-video", title: "SaaS Explainer Videos", desc: "High-end product explainer and SaaS promo animations." },
        { icon: "fa-film", title: "Brand Commercials", desc: "Cinematic promotional and commercial videos for products." },
        { icon: "fa-cubes", title: "3D Motion Graphics", desc: "Premium 3D designs, abstract visual elements, and renders." },
        { icon: "fa-code", title: "AE Scripts & Tools", desc: "Custom workflow automation scripts to speed up After Effects tasks." }
    ],
    portfolio: [
        {
            title: "DrivePhase.ai Explainer",
            category: "SaaS Explainer",
            badge: "MOTION PROJECT",
            image: "https://noormotion.carrd.co/assets/videos/video11_thumbnail.jpg?v=86a3e49b",
            videoUrl: "https://drive.google.com/file/d/1p22ilqvf2cyatv4v5cVLOdEq7K0-tfoT/view"
        },
        {
            title: "School Management Software",
            category: "Product Promo",
            badge: "MOTION PROJECT",
            image: "https://noormotion.carrd.co/assets/videos/video04_thumbnail.jpg?v=86a3e49b",
            videoUrl: "https://drive.google.com/file/d/1A7NU3RcdVyAI4CL4w2_hnXHDGuPmpLJX/view"
        },
        {
            title: "Next Video Review",
            category: "WordPress Plugin Promo",
            badge: "PLUGIN PROMO",
            image: "https://noormotion.carrd.co/assets/videos/video05_thumbnail.jpg?v=86a3e49b",
            videoUrl: "https://drive.google.com/file/d/1h89xJaYIL_Crq97M6JXh0eWEN1u3d4Xr/view"
        },
        {
            title: "Washer Service Booking",
            category: "Plugin Explainer",
            badge: "PLUGIN EXPLAINER",
            image: "https://noormotion.carrd.co/assets/videos/video08_thumbnail.jpg?v=86a3e49b",
            videoUrl: "https://drive.google.com/file/d/1lIxJSS9FBU143EQFGamtFwmglblQvbgW/view"
        },
        {
            title: "Salonly Salon Booking",
            category: "WordPress Plugin Promo",
            badge: "PROMO VIDEO",
            image: "https://noormotion.carrd.co/assets/videos/video06_thumbnail.jpg?v=86a3e49b",
            videoUrl: "https://drive.google.com/file/d/1hc2joGAoRFD3e0jqdivD9inTIYIXckZJ/view"
        },
        {
            title: "Cleanly Booking System",
            category: "Promo Video",
            badge: "PROMO VIDEO",
            image: "https://noormotion.carrd.co/assets/videos/video09_thumbnail.jpg?v=86a3e49b",
            videoUrl: "https://drive.google.com/file/d/13WzQi1z3SSCRwcKSTVyWQV6fb5FwYucF/view"
        },
        {
            title: "NextCRM Marketing Automation",
            category: "SaaS Explainer",
            badge: "SAAS EXPLAINER",
            image: "https://noormotion.carrd.co/assets/videos/video01_thumbnail.jpg?v=86a3e49b",
            videoUrl: "https://drive.google.com/file/d/1a_OsNZAlauYXjLN6Meoh6ryZhqQE0Y9r/view"
        },
        {
            title: "Next3 Offload Optimizer",
            category: "Plugin Promo",
            badge: "PLUGIN PROMO",
            image: "https://noormotion.carrd.co/assets/videos/video03_thumbnail.jpg?v=86a3e49b",
            videoUrl: "https://drive.google.com/file/d/1R0L7_DTxNBJHL_B7PMc1OStOiCMcGAEC/view"
        }
    ],
    products: [
        {
            id: 1,
            title: "CompSync 2.0",
            subtitle: "After Effects Script",
            badge: "AE TOOL",
            image: "https://noormotion.carrd.co/assets/images/gallery02/541290cb.jpg?v=86a3e49b",
            price: "Free / Donation",
            details: "A powerful After Effects script tool that enables you to save compositions as standalone projects dynamically and build your own motion animation libraries.",
            youtubeUrl: "https://www.youtube.com/embed/K5yyQGnau20",
            gumroadUrl: "https://nralam.gumroad.com/l/CompSync?layout=profile"
        },
        {
            id: 2,
            title: "AutoCaption 2.0",
            subtitle: "After Effects Preset",
            badge: "AE PRESET",
            image: "https://noormotion.carrd.co/assets/images/gallery02/d186352f.jpg?v=86a3e49b",
            price: "Free / Donation",
            details: "An automated After Effects caption generator designed to convert SRT subtitle files into dynamic animated captions instantly.",
            youtubeUrl: "https://www.youtube.com/embed/Ru0QRRxmgQc",
            gumroadUrl: "https://nralam.gumroad.com/l/nrautocap?layout=profile"
        },
        {
            id: 3,
            title: "textEco Text Animator",
            subtitle: "After Effects Text Preset",
            badge: "TYPOGRAPHY PRESET",
            image: "https://noormotion.carrd.co/assets/images/gallery02/b70ecfc2.jpg?v=86a3e49b",
            price: "Free / Donation",
            details: "An all-in-one text animator preset that allows creators to build unlimited variations of professional typography animations using a single customizable setup.",
            youtubeUrl: "https://www.youtube.com/embed/YTG3v_D5ekc",
            gumroadUrl: "https://nralam.gumroad.com/l/textEco?layout=profile"
        },
        {
            id: 4,
            title: "Master Mask",
            subtitle: "After Effects Mask Preset",
            badge: "MASKING TOOL",
            image: "https://noormotion.carrd.co/assets/images/gallery02/a65c20db.jpg?v=86a3e49b",
            price: "Free / Donation",
            details: "A corner-radius and mask shape control preset for After Effects that lets you separately handle individual vertex controls, mask dimensions, and rotation angles dynamically.",
            youtubeUrl: "",
            gumroadUrl: "https://nralam.gumroad.com/l/mastermask?layout=profile"
        }
    ],
    testimonials: [
        { name: "Arif Hossain", company: "Tech BD", review: "Outstanding work quality! Our product launch explainer video became this successful because of his motion design." },
        { name: "Sanjida Rahman", company: "Creative Agency", review: "Never got such beautiful 3D work while strictly maintaining the timeline before. Highly recommended!" },
        { name: "Rafsan Jani", company: "StartUp Inc.", review: "His sense of animation is very modern. He gave our brand identity a whole new look." }
    ],
    socials: [
        { name: "LinkedIn", icon: "fa-linkedin-in", url: "https://www.linkedin.com/in/motionoor-alam-/" },
        { name: "YouTube", icon: "fa-youtube", url: "https://www.youtube.com/@Motionoor" },
        { name: "Facebook", icon: "fa-facebook-f", url: "https://www.facebook.com/Nr.Alm96" },
        { name: "WhatsApp", icon: "fa-whatsapp", url: "https://wa.me/+8801867739749" },
        { name: "Telegram", icon: "fa-telegram", url: "https://t.me/+8801867739749" }
    ]
};

// Robust Video URL Parsing Function
function parseVideoEmbed(url) {
    if (!url) return { embedUrl: '', rawUrl: '#' };

    if (url.includes('drive.google.com')) {
        const match = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
        if (match && match[1]) {
            const fileId = match[1];
            return {
                embedUrl: `https://drive.google.com/file/d/${fileId}/preview`,
                rawUrl: `https://drive.google.com/file/d/${fileId}/view?usp=sharing`
            };
        }
    } else if (url.includes('youtube.com') || url.includes('youtu.be')) {
        let videoId = '';
        if (url.includes('youtube.com/watch')) {
            videoId = new URLSearchParams(new URL(url).search).get('v');
        } else if (url.includes('youtu.be/')) {
            videoId = url.split('youtu.be/')[1].split('?')[0];
        }
        if (videoId) {
            return {
                embedUrl: `https://www.youtube.com/embed/${videoId}?autoplay=1`,
                rawUrl: url
            };
        }
    }

    return { embedUrl: url, rawUrl: url };
}

// Showreel Single Click Video Player Handler (Pure Native YouTube Controls on Hover)
window.playShowreelVideo = function() {
    const card = document.getElementById('showreel-card');
    const box = document.getElementById('showreel-player-box');
    if (!box) return;

    if (card) {
        card.removeAttribute('onclick');
        card.classList.remove('cursor-pointer');
    }

    box.innerHTML = `
        <iframe class="w-full h-full border-0 rounded-[5px] video-frame-fadein" 
                src="https://www.youtube.com/embed/pdp05Yl0Bp4?autoplay=1&controls=1&modestbranding=1&rel=0" 
                title="Noor Motion Showreel 2026" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen></iframe>
    `;
};

// ==========================================
// 🧩 DYNAMIC MASONRY ENGINE (Zero Gap Packing)
// ==========================================
function applyPortfolioMasonry() {
    const grid = document.getElementById('portfolio-grid');
    if (!grid) return;

    const cards = Array.from(grid.querySelectorAll('.portfolio-item-card'));
    if (!cards.length) return;

    const windowWidth = window.innerWidth;
    
    // On mobile screens (< 768px), disable absolute positioning and reset grid
    if (windowWidth < 768) {
        grid.style.height = 'auto';
        grid.style.position = 'static';
        cards.forEach(card => {
            card.style.position = 'static';
            card.style.transform = 'none';
            card.style.width = '100%';
        });
        return;
    }

    const cols = windowWidth >= 1024 ? 3 : 2;
    const gap = 32; // 32px gap
    const gridWidth = grid.clientWidth;
    const colWidth = (gridWidth - (cols - 1) * gap) / cols;
    const colHeights = new Array(cols).fill(0);

    grid.style.position = 'relative';

    cards.forEach(card => {
        card.style.position = 'absolute';
        card.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), width 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease, border-color 0.4s ease';

        let span = 1;
        if (card.classList.contains('portfolio-card-expanded') && cols >= 2) {
            span = 2;
        }

        // Find the column index range with the lowest height
        let targetCol = 0;
        let minH = Infinity;

        for (let i = 0; i <= cols - span; i++) {
            let maxHInSpan = 0;
            for (let j = 0; j < span; j++) {
                maxHInSpan = Math.max(maxHInSpan, colHeights[i + j]);
            }
            if (maxHInSpan < minH) {
                minH = maxHInSpan;
                targetCol = i;
            }
        }

        const posX = targetCol * (colWidth + gap);
        const posY = minH;
        const itemWidth = span === 2 ? (colWidth * 2 + gap) : colWidth;

        card.style.width = `${itemWidth}px`;
        card.style.transform = `translate3d(${posX}px, ${posY}px, 0)`;

        const cardHeight = card.offsetHeight;
        for (let j = 0; j < span; j++) {
            colHeights[targetCol + j] = posY + cardHeight + gap;
        }
    });

    const maxGridHeight = Math.max(...colHeights);
    grid.style.height = `${maxGridHeight}px`;
}

// In-Place Expand Video Card Logic with Hover-Only Overlay, 5px Masking & Zero Letterbox Scaling
window.expandVideoCard = function(element, rawVideoUrl) {
    if (!element) return;

    // 1. If clicking on already expanded card, do nothing
    if (element.classList.contains('portfolio-card-expanded')) return;

    // 2. Collapse any currently expanded card in grid
    const currentExpanded = document.querySelector('.portfolio-card-expanded');
    if (currentExpanded) {
        collapseVideoCard(currentExpanded);
    }

    // 3. Save original HTML of media box and grab project title
    const mediaBox = element.querySelector('.media-box');
    const titleText = element.querySelector('h4')?.innerText || '';
    if (!mediaBox) return;
    if (!element.dataset.originalMedia) {
        element.dataset.originalMedia = mediaBox.innerHTML;
    }

    const videoData = parseVideoEmbed(rawVideoUrl);

    // 4. Expand card
    element.classList.add('portfolio-card-expanded', 'ring-2', 'ring-[#2563EB]');

    // 5. Hide bottom text info box while video is playing
    const infoBox = element.querySelector('.p-6');
    if (infoBox) {
        infoBox.classList.add('hidden');
    }
    
    // 6. Replace media box with aspect-video iframe & hover-only top controls (Strict 5px Mask & Zero Letterbox Scale)
    mediaBox.classList.remove('aspect-[4/3]');
    mediaBox.classList.add('aspect-video', 'rounded-[5px]');
    mediaBox.innerHTML = `
        <div class="relative w-full h-full bg-black overflow-hidden rounded-[5px] group video-frame-fadein flex justify-center items-center">
            <!-- Top Overlay Bar (Title top-left, Close/Drive top-right - HOVER ONLY) -->
            <div class="absolute top-0 inset-x-0 p-3 z-30 flex justify-between items-center bg-gradient-to-b from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none group-hover:pointer-events-auto">
                <span class="text-white font-bold text-xs sm:text-sm font-mono-custom tracking-wide truncate max-w-[55%] px-2.5 py-1 bg-black/60 backdrop-blur-md rounded-[3px] border border-white/10 shadow-lg">
                    ${titleText}
                </span>
                <div class="flex items-center space-x-2">
                    <a href="${videoData.rawUrl}" target="_blank" rel="noopener noreferrer" 
                       onclick="event.stopPropagation()"
                       class="px-2.5 py-1 bg-black/80 backdrop-blur-md text-white font-mono-custom text-xs uppercase rounded-[3px] border border-white/20 hover:bg-[#2563EB] hover:border-[#2563EB] transition flex items-center space-x-1 shadow-lg">
                        <span>Drive HD</span>
                        <i class="fa-solid fa-arrow-up-right-from-square text-[10px] ml-1"></i>
                    </a>
                    <button onclick="event.stopPropagation(); collapseVideoCard(this.closest('.portfolio-card-expanded'))" 
                            class="px-2.5 py-1 bg-black/80 backdrop-blur-md text-white font-mono-custom text-xs uppercase rounded-[3px] border border-white/20 hover:bg-red-600 hover:border-red-600 transition flex items-center space-x-1 shadow-lg">
                        <span>Close [X]</span>
                    </button>
                </div>
            </div>
            <iframe class="w-full h-full border-0 rounded-[5px] scale-[1.025]" src="${videoData.embedUrl}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>
        </div>
    `;

    // 7. Recalculate Masonry Layout so neighboring cards move UP cleanly
    applyPortfolioMasonry();
    setTimeout(applyPortfolioMasonry, 100);
    setTimeout(applyPortfolioMasonry, 300);

    // 8. Smooth scroll to expanded card
    setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 150);
};

window.collapseVideoCard = function(element) {
    if (!element) return;
    element.classList.remove('portfolio-card-expanded', 'ring-2', 'ring-[#2563EB]');

    // Show bottom text info box again when collapsed
    const infoBox = element.querySelector('.p-6');
    if (infoBox) {
        infoBox.classList.remove('hidden');
    }

    const mediaBox = element.querySelector('.media-box');
    if (mediaBox && element.dataset.originalMedia) {
        mediaBox.classList.remove('aspect-video');
        mediaBox.classList.add('aspect-[4/3]');
        mediaBox.innerHTML = element.dataset.originalMedia;
    }
    applyPortfolioMasonry();
    setTimeout(applyPortfolioMasonry, 100);
};

// Event Listeners for Masonry Engine
window.addEventListener('resize', applyPortfolioMasonry);
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        applyPortfolioMasonry();
        setTimeout(applyPortfolioMasonry, 500);
        initGSAPAnimations();
    });
} else {
    applyPortfolioMasonry();
    setTimeout(applyPortfolioMasonry, 500);
    initGSAPAnimations();
}

// ==========================================
// 🚀 GSAP KINETIC ANIMATIONS ENGINE
// ==========================================
function initGSAPAnimations() {
    if (typeof gsap === 'undefined') return;

    const chars = document.querySelectorAll('.hero-motion-char');
    if (chars.length) {
        // Individual character rotation wiggle wave + vertical bounce
        gsap.to(chars, {
            rotate: (index) => (index % 2 === 0 ? 12 : -12),
            y: (index) => (index % 2 === 0 ? -6 : 4),
            duration: 1.1,
            stagger: {
                each: 0.12,
                repeat: -1,
                yoyo: true
            },
            ease: "sine.inOut"
        });
    }
}

// Audio Synthesis Controller
let soundEnabled = true;

function playAudioClick() {
    if (!soundEnabled) return;
    try {
        const AudioCtxClass = window.AudioContext || window.webkitAudioContext;
        if (!AudioCtxClass) return;
        const ctx = new AudioCtxClass();
        if (ctx.state === 'suspended') ctx.resume();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(800, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(400, ctx.currentTime + 0.04);
        gain.gain.setValueAtTime(0.05, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.04);
    } catch(e) {}
}

// Live Coordinate Tracker & Cursor Logic
const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');
const cursorCoords = document.getElementById('cursor-coords');

window.addEventListener('mousemove', (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    if (cursorDot) {
        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;
    }

    if (cursorOutline) {
        cursorOutline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 400, fill: "forwards" });
    }

    if (cursorCoords) {
        const formatX = String(posX).padStart(4, '0');
        const formatY = String(posY).padStart(4, '0');
        cursorCoords.innerText = `${formatX} X ${formatY} Y`;
    }
});

// Hover Active Cursor Expansion
document.addEventListener('mouseover', (e) => {
    if (e.target.closest('.hover-trigger') || e.target.closest('a') || e.target.closest('button')) {
        document.body.classList.add('hover-active');
        playAudioClick();
    }
});

document.addEventListener('mouseout', (e) => {
    if (e.target.closest('.hover-trigger') || e.target.closest('a') || e.target.closest('button')) {
        document.body.classList.remove('hover-active');
    }
});

// Live Clock (GMT+6 Bangladesh)
function updateClock() {
    const clockEl = document.getElementById('live-clock');
    if (!clockEl) return;
    const now = new Date();
    const utcHours = now.getUTCHours() + 6;
    const hours = String((utcHours % 24)).padStart(2, '0');
    const minutes = String(now.getUTCMinutes()).padStart(2, '0');
    clockEl.innerText = `GMT+6 BD ${hours}:${minutes}`;
}
setInterval(updateClock, 1000);
updateClock();

// Sound Toggle
const soundToggle = document.getElementById('sound-toggle-desktop');
if (soundToggle) {
    soundToggle.addEventListener('click', () => {
        soundEnabled = !soundEnabled;
        soundToggle.innerHTML = `SOUND[<span class="text-[#2563EB]">${soundEnabled ? '|' : 'X'}</span>]`;
    });
}

// Theme Toggle (Default: White Theme / Light Mode, Toggle to Dark Mode)
const themeToggle = document.getElementById('theme-toggle-desktop');
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        themeToggle.innerHTML = `THEME[<span class="text-[#2563EB]">${isDark ? 'D' : 'L'}</span>]`;
        localStorage.setItem('motionTheme', isDark ? 'dark' : 'light');
    });
}
if (localStorage.getItem('motionTheme') === 'dark') {
    document.body.classList.add('dark-mode');
    if (themeToggle) themeToggle.innerHTML = `THEME[<span class="text-[#2563EB]">D</span>]`;
}

// Mobile Menu Navigation
const mobileBtn = document.getElementById('mobile-menu-btn');
const mobileClose = document.getElementById('mobile-menu-close');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

function openMenu() { if (mobileMenu) mobileMenu.classList.remove('translate-x-full'); }
function closeMenu() { if (mobileMenu) mobileMenu.classList.add('translate-x-full'); }

if (mobileBtn) mobileBtn.addEventListener('click', openMenu);
if (mobileClose) mobileClose.addEventListener('click', closeMenu);
mobileLinks.forEach(link => link.addEventListener('click', closeMenu));

// Lenis Smooth Scroll Engine
if (typeof Lenis !== 'undefined') {
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: true,
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
}

// Safe Loader Dismissal Function
function hideLoader() {
    const loader = document.getElementById('loader');
    if (!loader) return;
    if (typeof gsap !== 'undefined') {
        const tl = gsap.timeline();
        tl.to("#loader-progress", { width: "100%", duration: 0.8, ease: "power3.inOut" })
          .to("#loader", { y: "-100%", duration: 0.6, ease: "power4.inOut" });
    } else {
        loader.style.display = 'none';
    }
}

if (document.readyState === 'complete') {
    hideLoader();
} else {
    window.addEventListener('load', hideLoader);
    setTimeout(hideLoader, 1500); // 1.5s fallback
}

// Modal Handlers
const modalBackdrop = document.getElementById('product-modal-backdrop');
const modalContent = document.getElementById('product-modal-content');

window.openProductModal = function (productId) {
    const product = siteData.products.find(p => p.id === productId);
    if (!product) return;

    document.getElementById('modal-title').innerText = product.title;
    document.getElementById('modal-subtitle').innerText = product.subtitle;
    document.getElementById('modal-details').innerText = product.details;
    document.getElementById('modal-price').innerText = product.price;

    const mediaContainer = document.getElementById('modal-media-container');
    if (product.youtubeUrl && product.youtubeUrl !== "") {
        mediaContainer.innerHTML = `<iframe class="w-full h-full rounded-[5px]" src="${product.youtubeUrl}?autoplay=1&mute=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    } else {
        mediaContainer.innerHTML = `<img src="${product.image}" class="w-full h-full object-cover rounded-[5px]" alt="${product.title}" />`;
    }

    const gumroadLink = document.getElementById('gumroad-link');
    if (product.gumroadUrl) {
        gumroadLink.href = product.gumroadUrl;
    }

    if (modalBackdrop && modalContent) {
        modalBackdrop.classList.remove('hidden');
        setTimeout(() => {
            modalBackdrop.classList.remove('opacity-0');
            modalContent.classList.remove('scale-95');
        }, 10);
        document.body.style.overflow = 'hidden';
    }
};

window.closeProductModal = function () {
    if (modalBackdrop && modalContent) {
        modalBackdrop.classList.add('opacity-0');
        modalContent.classList.add('scale-95');
        setTimeout(() => {
            modalBackdrop.classList.add('hidden');
            document.getElementById('modal-media-container').innerHTML = '';
            document.body.style.overflow = '';
        }, 300);
    }
};

if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
        if (e.target === modalBackdrop) closeProductModal();
    });
}

// Video Modal Player Logic (kept for hero video & fallback)
const videoModal = document.getElementById('video-modal');
const videoIframe = document.getElementById('video-modal-iframe');

window.openVideoModal = function (videoUrl) {
    const videoData = parseVideoEmbed(videoUrl);
    if (videoIframe && videoModal) {
        videoIframe.src = videoData.embedUrl;
        videoModal.classList.remove('hidden');
        setTimeout(() => videoModal.classList.remove('opacity-0'), 10);
        document.body.style.overflow = 'hidden';
    }
};

window.closeVideoModal = function () {
    if (videoModal && videoIframe) {
        videoModal.classList.add('opacity-0');
        setTimeout(() => {
            videoModal.classList.add('hidden');
            videoIframe.src = '';
            document.body.style.overflow = '';
        }, 300);
    }
};

if (videoModal) {
    videoModal.addEventListener('click', (e) => {
        if (e.target === videoModal) closeVideoModal();
    });
}