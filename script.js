/* ==========================================================================
   NOOR MOTION PORTFOLIO - CONTROLLER & LOGIC SCRIPT
   Inspired by haoqi.design & base44.com
   ========================================================================== */

window.tailwind = window.tailwind || {};
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#C0FE04',
                accentBlue: '#3A86FF',
                darkBg: '#050505',
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
        titleLine1: "I bring craft & taste",
        titleLine2: "to motion design & tools.",
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
            videoUrl: "https://drive.google.com/file/d/1A7NU3RcdVyAI4CL4w2_hnXHDGuPmpLJX/view?t=4.689"
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
            videoUrl: "https://drive.google.com/file/d/13WzQi1z3SSCRwcKSTVyWQV6fb5FwYucF/view?t=3.924"
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
            videoUrl: "https://drive.google.com/file/d/1R0L7_DTxNBJHL_B7PMc1OStOiCMcGAEC/view?t=4.721"
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

// Audio Synthesis Controller
let soundEnabled = true;
const audioCtx = typeof window !== 'undefined' && (window.AudioContext || window.webkitAudioContext) ? new (window.AudioContext || window.webkitAudioContext)() : null;

function playAudioClick() {
    if (!soundEnabled || !audioCtx) return;
    try {
        if (audioCtx.state === 'suspended') audioCtx.resume();
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(800, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(400, audioCtx.currentTime + 0.04);
        gain.gain.setValueAtTime(0.05, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.04);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.04);
    } catch(e) {}
}

// Populate Content on Load
document.addEventListener("DOMContentLoaded", () => {

    // Contact Links
    document.getElementById('contact-email').innerHTML = `<a href="mailto:${siteData.general.email}" class="dotted-btn p-1 hover:text-[#C0FE04] transition">${siteData.general.email}</a>`;
    document.getElementById('contact-phone').innerHTML = `<a href="tel:${siteData.general.phone}" class="dotted-btn p-1 hover:text-[#C0FE04] transition">${siteData.general.phone}</a>`;

    // Portfolio Grid Matrix
    const portfolioGrid = document.getElementById('portfolio-grid');
    siteData.portfolio.forEach(item => {
        portfolioGrid.innerHTML += `
            <div onclick="openVideoModal('${item.videoUrl}')" class="b44-card rounded-2xl overflow-hidden group cursor-pointer hover-trigger">
                <div class="aspect-[4/3] overflow-hidden relative">
                    <span class="absolute top-3 right-3 z-10 px-2 py-0.5 bg-black/80 backdrop-blur-md border border-white/10 font-mono-custom text-[10px] text-[#C0FE04] uppercase tracking-wider">${item.badge}</span>
                    <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover transition duration-700 group-hover:scale-105 filter group-hover:brightness-90" />
                    <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex justify-center items-center">
                        <div class="w-14 h-14 rounded-full bg-[#C0FE04] text-black flex justify-center items-center shadow-lg transform scale-75 group-hover:scale-100 transition duration-300">
                            <i class="fa-solid fa-play ml-1"></i>
                        </div>
                    </div>
                </div>
                <div class="p-6">
                    <span class="font-mono-custom text-xs text-[#888888] uppercase block mb-1">${item.category}</span>
                    <h4 class="text-lg font-bold text-white group-hover:text-[#C0FE04] transition">${item.title}</h4>
                </div>
            </div>
        `;
    });

    // Digital Products Grid Matrix
    const productsGrid = document.getElementById('products-grid');
    siteData.products.forEach(product => {
        productsGrid.innerHTML += `
            <div class="b44-card rounded-2xl p-6 md:p-8 flex flex-col justify-between group hover-trigger">
                <div>
                    <div class="flex justify-between items-start mb-4">
                        <span class="font-mono-custom text-xs text-[#C0FE04] uppercase tracking-wider px-2 py-0.5 bg-white/5 border border-white/10 rounded">${product.badge}</span>
                        <span class="font-mono-custom text-xs font-bold text-white">${product.price}</span>
                    </div>
                    <h4 class="text-2xl font-bold text-white mb-2">${product.title}</h4>
                    <p class="text-sm text-[#888888] leading-relaxed mb-6">${product.details}</p>
                </div>
                <button onclick="openProductModal(${product.id})" class="dotted-btn w-full py-3 bg-white/5 border border-white/10 rounded-lg text-white font-mono-custom text-xs uppercase hover:bg-[#C0FE04] hover:text-black hover:border-[#C0FE04] transition">
                    View Details &amp; Download <i class="fa-solid fa-arrow-right ml-2"></i>
                </button>
            </div>
        `;
    });

    // Services Grid
    const servicesGrid = document.getElementById('services-grid');
    siteData.services.forEach(service => {
        servicesGrid.innerHTML += `
            <div class="b44-card p-6 rounded-2xl group hover-trigger">
                <div class="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex justify-center items-center text-xl text-[#C0FE04] mb-6 group-hover:bg-[#C0FE04] group-hover:text-black transition duration-300">
                    <i class="fa-solid ${service.icon}"></i>
                </div>
                <h4 class="text-lg font-bold text-white mb-2">${service.title}</h4>
                <p class="text-xs text-[#888888] leading-relaxed">${service.desc}</p>
            </div>
        `;
    });

    // Testimonials Grid
    const testimonialGrid = document.getElementById('testimonial-grid');
    siteData.testimonials.forEach(test => {
        testimonialGrid.innerHTML += `
            <div class="b44-card p-6 md:p-8 rounded-2xl">
                <p class="text-sm text-gray-300 leading-relaxed mb-6">"${test.review}"</p>
                <div class="flex items-center space-x-3">
                    <div class="w-10 h-10 rounded-full bg-[#C0FE04] text-black font-bold flex justify-center items-center text-sm">
                        ${test.name.charAt(0)}
                    </div>
                    <div>
                        <h4 class="text-white font-bold text-sm">${test.name}</h4>
                        <p class="text-xs font-mono-custom text-[#888888]">${test.company}</p>
                    </div>
                </div>
            </div>
        `;
    });

    // Social Links
    const footerSocials = document.getElementById('footer-socials');
    siteData.socials.forEach(social => {
        footerSocials.innerHTML += `
            <a href="${social.url}" target="_blank" rel="noopener noreferrer" class="dotted-btn px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-xs font-mono-custom text-gray-300 hover:text-[#C0FE04] transition hover-trigger">
                <i class="fa-brands ${social.icon} mr-2"></i>${social.name}
            </a>
        `;
    });
});

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
        soundToggle.innerHTML = `SOUND[<span class="text-[#C0FE04]">${soundEnabled ? '|' : 'X'}</span>]`;
    });
}

// Theme Toggle
const themeToggle = document.getElementById('theme-toggle-desktop');
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        const isLight = document.body.classList.contains('light-mode');
        themeToggle.innerHTML = `THEME[<span class="text-[#C0FE04]">${isLight ? 'L' : 'A'}</span>]`;
        localStorage.setItem('motionTheme', isLight ? 'light' : 'dark');
    });
}
if (localStorage.getItem('motionTheme') === 'light') {
    document.body.classList.add('light-mode');
    if (themeToggle) themeToggle.innerHTML = `THEME[<span class="text-[#C0FE04]">L</span>]`;
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

// GSAP Animations & Loader Timeline
gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", () => {
    const tl = gsap.timeline();
    tl.to("#loader-progress", { width: "100%", duration: 1.2, ease: "power3.inOut" })
      .to("#loader", { y: "-100%", duration: 0.8, ease: "power4.inOut" });
});

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
        mediaContainer.innerHTML = `<iframe class="w-full h-full" src="${product.youtubeUrl}?autoplay=1&mute=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    } else {
        mediaContainer.innerHTML = `<img src="${product.image}" class="w-full h-full object-cover" alt="${product.title}" />`;
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

// Video Modal Player Logic
const videoModal = document.getElementById('video-modal');
const videoIframe = document.getElementById('video-modal-iframe');

window.openVideoModal = function (videoUrl) {
    let embedUrl = videoUrl;
    if (videoUrl.includes('drive.google.com')) {
        embedUrl = videoUrl.replace('/view', '/preview').replace('?t=', '#t=');
    } else if (videoUrl.includes('youtube.com/watch')) {
        const videoId = new URLSearchParams(new URL(videoUrl).search).get('v');
        embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    }

    if (videoIframe && videoModal) {
        videoIframe.src = embedUrl;
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