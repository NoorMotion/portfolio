window.tailwind = window.tailwind || {};
tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Hind Siliguri', 'sans-serif'],
                    },
                    colors: {
                        primary: '#3a86ff',
                        darkBg: '#030303',
                        surface: 'rgba(255, 255, 255, 0.02)',
                        surfaceBorder: 'rgba(255, 255, 255, 0.08)',
                    },
                    animation: {
                        'blob': 'blob 7s infinite',
                        'float': 'float 6s ease-in-out infinite',
                    },
                    keyframes: {
                        blob: {
                            '0%': { transform: 'translate(0px, 0px) scale(1)' },
                            '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
                            '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
                            '100%': { transform: 'translate(0px, 0px) scale(1)' },
                        },
                        float: {
                            '0%, 100%': { transform: 'translateY(0)' },
                            '50%': { transform: 'translateY(-20px)' },
                        }
                    }
                }
            }
        }

// ==========================================
        // ⚙️ DYNAMIC DATA MANAGEMENT (Noor Alam Portfolio)
        // ==========================================
        const siteData = {
            general: {
                logo: "NoorMotion",
                email: "nralamyt@gmail.com",
                phone: "01867739749",
                address: "Dhaka, Bangladesh"
            },
            hero: {
                badge: "Professional Motion Designer",
                titleLine1: "Your Digital Product",
                titleLine2: "that moves in Motion.",
                description: "I craft cinematic motion design, SaaS product explainer videos, and smooth visual experiences that elevate stories and make them unforgettable.",
                primaryBtn: "See My Works",
                secondaryBtn: "Let's Collab"
            },
            about: {
                title: "About Me",
                description: "I'm a passionate Motion Designer dedicated to crafting engaging videos, custom Adobe After Effects scripts, and presets that optimize workflows and drive conversions. I build high-impact brand visual experiences that make stories unforgettable.",
                experience: "5+ Years Experience",
                projects: "150+ Completed Projects",
                skills: [
                    { name: "After Effects", level: "98%" },
                    { name: "SaaS Motion Explainer", level: "95%" },
                    { name: "Plugin Scripting", level: "90%" },
                    { name: "Typography & Presets", level: "95%" }
                ]
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
                    image: "https://noormotion.carrd.co/assets/videos/video11_thumbnail.jpg?v=86a3e49b",
                    videoUrl: "https://drive.google.com/file/d/1p22ilqvf2cyatv4v5cVLOdEq7K0-tfoT/view"
                },
                {
                    title: "School Management Software",
                    category: "Product Promo",
                    image: "https://noormotion.carrd.co/assets/videos/video04_thumbnail.jpg?v=86a3e49b",
                    videoUrl: "https://drive.google.com/file/d/1A7NU3RcdVyAI4CL4w2_hnXHDGuPmpLJX/view?t=4.689"
                },
                {
                    title: "Next Video Review",
                    category: "WordPress Plugin Promo",
                    image: "https://noormotion.carrd.co/assets/videos/video05_thumbnail.jpg?v=86a3e49b",
                    videoUrl: "https://drive.google.com/file/d/1h89xJaYIL_Crq97M6JXh0eWEN1u3d4Xr/view"
                },
                {
                    title: "Washer Service Booking",
                    category: "Plugin Explainer",
                    image: "https://noormotion.carrd.co/assets/videos/video08_thumbnail.jpg?v=86a3e49b",
                    videoUrl: "https://drive.google.com/file/d/1lIxJSS9FBU143EQFGamtFwmglblQvbgW/view"
                },
                {
                    title: "Salonly Salon Booking",
                    category: "WordPress Plugin Promo",
                    image: "https://noormotion.carrd.co/assets/videos/video06_thumbnail.jpg?v=86a3e49b",
                    videoUrl: "https://drive.google.com/file/d/1hc2joGAoRFD3e0jqdivD9inTIYIXckZJ/view"
                },
                {
                    title: "Cleanly Booking System",
                    category: "Promo Video",
                    image: "https://noormotion.carrd.co/assets/videos/video09_thumbnail.jpg?v=86a3e49b",
                    videoUrl: "https://drive.google.com/file/d/13WzQi1z3SSCRwcKSTVyWQV6fb5FwYucF/view?t=3.924"
                },
                {
                    title: "NextCRM Marketing Automation",
                    category: "SaaS Explainer",
                    image: "https://noormotion.carrd.co/assets/videos/video01_thumbnail.jpg?v=86a3e49b",
                    videoUrl: "https://drive.google.com/file/d/1a_OsNZAlauYXjLN6Meoh6ryZhqQE0Y9r/view"
                },
                {
                    title: "Next3 Offload Optimizer",
                    category: "Plugin Promo",
                    image: "https://noormotion.carrd.co/assets/videos/video03_thumbnail.jpg?v=86a3e49b",
                    videoUrl: "https://drive.google.com/file/d/1R0L7_DTxNBJHL_B7PMc1OStOiCMcGAEC/view?t=4.721"
                }
            ],
            products: [
                {
                    id: 1,
                    title: "CompSync 2.0",
                    subtitle: "After Effects Script",
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
                { icon: "fa-linkedin-in", url: "https://www.linkedin.com/in/motionoor-alam-/" },
                { icon: "fa-youtube", url: "https://www.youtube.com/@Motionoor" },
                { icon: "fa-facebook-f", url: "https://www.facebook.com/Nr.Alm96" },
                { icon: "fa-whatsapp", url: "https://wa.me/+8801867739749" },
                { icon: "fa-telegram", url: "https://t.me/+8801867739749" }
            ]
        };

// 1. Populate Dynamic Data
        document.addEventListener("DOMContentLoaded", () => {

            // General Logo Style (Multi-color Premium)
            const logoHTML = `${siteData.general.logo.substring(0, 4)}<span class="text-primary">${siteData.general.logo.substring(4)}</span>`;
            document.getElementById('nav-logo').innerHTML = logoHTML;
            document.getElementById('footer-logo').innerHTML = logoHTML;
            document.getElementById('loader-logo').innerHTML = logoHTML;

            // Contact Links (UX optimized clickable elements)
            document.getElementById('contact-email').innerHTML = `<a href="mailto:${siteData.general.email}" class="hover:text-primary transition">${siteData.general.email}</a>`;
            document.getElementById('contact-phone').innerHTML = `<a href="tel:${siteData.general.phone}" class="hover:text-primary transition">${siteData.general.phone}</a>`;

            // Hero
            document.getElementById('hero-badge').innerText = siteData.hero.badge;
            document.getElementById('hero-title-1').innerText = siteData.hero.titleLine1;
            document.getElementById('hero-title-2').innerText = siteData.hero.titleLine2;
            document.getElementById('hero-desc').innerText = siteData.hero.description;
            document.getElementById('hero-btn-1').innerText = siteData.hero.primaryBtn;

            // About
            document.getElementById('about-desc').innerText = siteData.about.description;
            document.getElementById('about-exp').innerText = siteData.about.experience.split(" ")[0];
            document.getElementById('about-proj').innerText = siteData.about.projects.split(" ")[0];

            const skillsContainer = document.getElementById('skills-container');
            siteData.about.skills.forEach((skill, index) => {
                skillsContainer.innerHTML += `
                    <div class="glass-card p-6 rounded-2xl flex flex-col items-center justify-center text-center space-y-2">
                        <h4 class="text-3xl font-bold text-primary">${skill.level}</h4>
                        <p class="text-sm text-gray-400">${skill.name}</p>
                    </div>
                `;
            });

            // Services
            const servicesGrid = document.getElementById('services-grid');
            siteData.services.forEach(service => {
                servicesGrid.innerHTML += `
                    <div class="glass-card p-8 rounded-[2rem] group hover-trigger">
                        <div class="w-14 h-14 rounded-full bg-white/5 flex justify-center items-center text-2xl text-primary mb-6 transition group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                            <i class="fa-solid ${service.icon}"></i>
                        </div>
                        <h4 class="text-xl font-bold text-white mb-3">${service.title}</h4>
                        <p class="text-gray-400 text-sm leading-relaxed">${service.desc}</p>
                    </div>
                `;
            });

            // Portfolio
            const portfolioGrid = document.getElementById('portfolio-grid');
            siteData.portfolio.forEach(item => {
                portfolioGrid.innerHTML += `
                    <div onclick="openVideoModal('${item.videoUrl}')" class="group relative rounded-3xl overflow-hidden glass hover-trigger transform transition duration-500 hover:-translate-y-2 border border-white/5 hover:border-primary/50 cursor-pointer">
                        <div class="aspect-[4/3] overflow-hidden relative">
                            <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover transition duration-700 group-hover:scale-110 group-hover:opacity-50" />
                            
                            <!-- Hover Content -->
                            <div class="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition duration-500 bg-black/40 backdrop-blur-sm">
                                <div class="w-16 h-16 rounded-full bg-white flex justify-center items-center mb-4 transform scale-50 group-hover:scale-100 transition duration-500 delay-100 shadow-lg">
                                    <i class="fa-solid fa-play text-primary text-xl ml-1"></i>
                                </div>
                                <p class="text-white font-medium tracking-widest text-sm uppercase transform translate-y-4 group-hover:translate-y-0 transition duration-500 delay-200">Play Video</p>
                            </div>
                        </div>
                        <div class="p-6">
                            <span class="text-xs font-bold text-primary uppercase tracking-wider mb-2 block">${item.category}</span>
                            <h4 class="text-xl font-bold text-white group-hover:text-gradient transition">${item.title}</h4>
                        </div>
                    </div>
                `;
            });

            // Products
            const productsGrid = document.getElementById('products-grid');
            siteData.products.forEach(product => {
                productsGrid.innerHTML += `
                    <div class="glass-card rounded-[2rem] overflow-hidden group hover-trigger flex flex-col">
                        <div class="aspect-video overflow-hidden relative">
                            <img src="${product.image}" alt="${product.title}" class="w-full h-full object-cover transition duration-700 group-hover:scale-105" />
                            <div class="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                                <span class="text-white font-bold text-sm">${product.price}</span>
                            </div>
                        </div>
                        <div class="p-6 md:p-8 flex-1 flex flex-col">
                            <span class="text-xs font-bold text-primary uppercase tracking-wider mb-2">${product.subtitle}</span>
                            <h4 class="text-xl font-bold text-white mb-3">${product.title}</h4>
                            <p class="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3 flex-1">${product.details}</p>
                            
                            <button onclick="openProductModal(${product.id})" class="w-full py-3 rounded-xl border border-white/20 bg-white/5 text-white font-medium hover:bg-primary hover:border-primary hover:text-white transition duration-300 flex justify-center items-center space-x-2">
                                <i class="fa-solid fa-download"></i>
                                <span>Details &amp; Download</span>
                            </button>
                        </div>
                    </div>
                `;
            });

            // Testimonials
            const testimonialGrid = document.getElementById('testimonial-grid');
            siteData.testimonials.forEach(test => {
                testimonialGrid.innerHTML += `
                    <div class="glass-card p-8 rounded-3xl relative">
                        <i class="fa-solid fa-quote-right absolute top-6 right-8 text-4xl text-white/5"></i>
                        <div class="flex items-center space-x-4 mb-6">
                            <div class="w-12 h-12 rounded-full bg-gradient-to-tr from-primary to-purple-600 flex justify-center items-center text-xl font-bold text-white shadow-lg">
                                ${test.name.charAt(0)}
                            </div>
                            <div>
                                <h4 class="text-white font-bold">${test.name}</h4>
                                <p class="text-xs text-primary">${test.company}</p>
                            </div>
                        </div>
                        <p class="text-gray-400 text-sm leading-loose">"${test.review}"</p>
                    </div>
                `;
            });

            // Socials (Updated with Telegram & WhatsApp)
            const footerSocials = document.getElementById('footer-socials');
            siteData.socials.forEach(social => {
                footerSocials.innerHTML += `
                    <a href="${social.url}" target="_blank" class="w-10 h-10 rounded-full border border-white/10 flex justify-center items-center text-gray-400 hover:text-white hover:border-primary hover:bg-primary/20 transition hover-trigger">
                        <i class="fa-brands ${social.icon}"></i>
                    </a>
                `;
            });
        });

        // 2. Custom Cursor Logic
        const cursorDot = document.querySelector('.cursor-dot');
        const cursorOutline = document.querySelector('.cursor-outline');

        window.addEventListener('mousemove', (e) => {
            const posX = e.clientX;
            const posY = e.clientY;

            cursorDot.style.left = `${posX}px`;
            cursorDot.style.top = `${posY}px`;

            // Adding slight delay to outline for smooth effect
            cursorOutline.animate({
                left: `${posX}px`,
                top: `${posY}px`
            }, { duration: 500, fill: "forwards" });
        });

        // Add hover effect for interactive elements
        document.addEventListener('mouseover', (e) => {
            if (e.target.closest('.hover-trigger') || e.target.tagName.toLowerCase() === 'a' || e.target.tagName.toLowerCase() === 'button') {
                document.body.classList.add('hover-active');
            }
        });
        document.addEventListener('mouseout', (e) => {
            if (e.target.closest('.hover-trigger') || e.target.tagName.toLowerCase() === 'a' || e.target.tagName.toLowerCase() === 'button') {
                document.body.classList.remove('hover-active');
            }
        });

        // 3. Smooth Scrolling with Lenis
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
            infinite: false,
        })

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)

        // 4. GSAP Animations & Loader
        gsap.registerPlugin(ScrollTrigger);

        window.addEventListener("load", () => {
            const tl = gsap.timeline();

            // Loader Bar Animation
            tl.to("#loader-progress", { width: "100%", duration: 1.5, ease: "power3.inOut" })
                .to("#loader", { y: "-100%", duration: 0.8, ease: "power4.inOut", delay: 0.2 })
                .from(".gs-reveal", {
                    y: 50, opacity: 0, duration: 1, stagger: 0.15, ease: "back.out(1.7)"
                }, "-=0.3")
                .from(".gs-reveal-right", {
                    x: 100, opacity: 0, duration: 1.2, ease: "power3.out"
                }, "-=1");

            // Scroll Trigger Animations for sections
            const sections = document.querySelectorAll('.section-reveal');
            sections.forEach(sec => {
                gsap.from(sec, {
                    scrollTrigger: {
                        trigger: sec,
                        start: "top 80%",
                        toggleActions: "play none none reverse"
                    },
                    y: 60,
                    opacity: 0,
                    duration: 1,
                    ease: "power3.out"
                });
            });
        });

        // 5. Magnetic Button Effect
        const magneticBtns = document.querySelectorAll('.magnetic-btn');
        magneticBtns.forEach(btn => {
            btn.addEventListener('mousemove', (e) => {
                const rect = btn.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;

                gsap.to(btn, {
                    x: x * 0.3,
                    y: y * 0.3,
                    duration: 0.4,
                    ease: "power2.out"
                });
            });
            btn.addEventListener('mouseleave', () => {
                gsap.to(btn, {
                    x: 0,
                    y: 0,
                    duration: 0.7,
                    ease: "elastic.out(1, 0.3)"
                });
            });
        });

        // 6. Navbar Background on Scroll
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar');
            if (window.scrollY > 50) {
                nav.classList.add('shadow-lg', 'bg-darkBg/80');
            } else {
                nav.classList.remove('shadow-lg', 'bg-darkBg/80');
            }
        });

        // 7. Mobile Menu Toggle
        const mobileBtn = document.getElementById('mobile-menu-btn');
        const mobileClose = document.getElementById('mobile-menu-close');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileLinks = document.querySelectorAll('.mobile-link');

        function openMenu() { mobileMenu.classList.remove('translate-x-full'); }
        function closeMenu() { mobileMenu.classList.add('translate-x-full'); }

        mobileBtn.addEventListener('click', openMenu);
        mobileClose.addEventListener('click', closeMenu);
        mobileLinks.forEach(link => link.addEventListener('click', closeMenu));

        // 8. Contact Form Simulation
        const form = document.getElementById('contact-form');
        const submitBtn = document.getElementById('submit-btn');
        const formSuccess = document.getElementById('form-success');

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            // Button loading state
            submitBtn.innerHTML = `<span class="relative z-10 flex items-center justify-center space-x-2"><i class="fa-solid fa-circle-notch fa-spin"></i><span>Sending...</span></span>`;

            // Simulate API Call delay
            setTimeout(() => {
                form.reset();
                submitBtn.innerHTML = `<span class="relative z-10 flex items-center justify-center space-x-2"><span>Send Message</span><i class="fa-solid fa-paper-plane"></i></span>`;
                formSuccess.classList.remove('hidden');

                // Hide success message after 5 seconds
                setTimeout(() => formSuccess.classList.add('hidden'), 5000);
            }, 2000);
        });

        // 9. Theme Toggle (Light/Dark Mode)
        const themeToggleDesktop = document.getElementById('theme-toggle-desktop');
        const themeToggleMobile = document.getElementById('theme-toggle-mobile');

        function toggleTheme() {
            document.body.classList.toggle('light-mode');
            const isLight = document.body.classList.contains('light-mode');

            // Toggle Icons (Sun/Moon)
            const iconClass = isLight ? 'fa-moon' : 'fa-sun';
            const oldIconClass = isLight ? 'fa-sun' : 'fa-moon';

            [themeToggleDesktop, themeToggleMobile].forEach(btn => {
                if (btn) {
                    const icon = btn.querySelector('i');
                    if (icon) {
                        icon.classList.remove(oldIconClass);
                        icon.classList.add(iconClass);
                    }
                }
            });

            // Save User Preference to LocalStorage
            localStorage.setItem('motionTheme', isLight ? 'light' : 'dark');
        }

        // Event Listeners for buttons
        if (themeToggleDesktop) themeToggleDesktop.addEventListener('click', toggleTheme);
        if (themeToggleMobile) themeToggleMobile.addEventListener('click', toggleTheme);

        // Apply saved theme on initial page load
        if (localStorage.getItem('motionTheme') === 'light') {
            toggleTheme();
        }

        // 10. Product Modal & Payment Logic
        const modalBackdrop = document.getElementById('product-modal-backdrop');
        const modalContent = document.getElementById('product-modal-content');

        window.openProductModal = function (productId) {
            const product = siteData.products.find(p => p.id === productId);
            if (!product) return;

            // Populate Data
            document.getElementById('modal-title').innerText = product.title;
            document.getElementById('modal-subtitle').innerText = product.subtitle;
            document.getElementById('modal-details').innerText = product.details;
            document.getElementById('modal-price').innerText = product.price;

            // Handle Media (Youtube or Image)
            const mediaContainer = document.getElementById('modal-media-container');
            if (product.youtubeUrl && product.youtubeUrl !== "") {
                mediaContainer.innerHTML = `<iframe class="absolute inset-0 w-full h-full" src="${product.youtubeUrl}?autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>`;
            } else {
                mediaContainer.innerHTML = `<img src="${product.image}" class="absolute inset-0 w-full h-full object-cover" alt="${product.title}" />`;
            }

            // Gumroad link set
            const gumroadLink = document.getElementById('gumroad-link');
            if (product.gumroadUrl) {
                gumroadLink.href = product.gumroadUrl;
                document.getElementById('gumroad-button-container').classList.remove('hidden');
            } else {
                document.getElementById('gumroad-button-container').classList.add('hidden');
            }

            // Reset Payment form
            document.getElementById('payment-details-form').classList.add('hidden');
            document.getElementById('payment-success-msg').classList.add('hidden');
            document.getElementById('btn-bkash').classList.remove('active');
            document.getElementById('btn-nagad').classList.remove('active');
            document.getElementById('verify-payment-btn').innerHTML = `<i class="fa-solid fa-lock"></i><span>Verify Payment</span>`;

            // Show Modal
            modalBackdrop.classList.remove('hidden');
            // Small delay for fade effect
            setTimeout(() => {
                modalBackdrop.classList.remove('opacity-0');
                modalContent.classList.remove('scale-95');
            }, 10);

            // Prevent body scroll
            document.body.style.overflow = 'hidden';
        }

        window.closeProductModal = function () {
            modalBackdrop.classList.add('opacity-0');
            modalContent.classList.add('scale-95');
            setTimeout(() => {
                modalBackdrop.classList.add('hidden');
                document.getElementById('modal-media-container').innerHTML = ''; // Stop video
                document.body.style.overflow = ''; // Enable body scroll
            }, 300);
        }

        // Close on clicking backdrop
        modalBackdrop.addEventListener('click', (e) => {
            if (e.target === modalBackdrop) closeProductModal();
        });

        window.selectPaymentMethod = function (method) {
            document.getElementById('payment-details-form').classList.remove('hidden');

            const btnBkash = document.getElementById('btn-bkash');
            const btnNagad = document.getElementById('btn-nagad');
            const paymentName = document.getElementById('payment-method-name');
            const paymentNumber = document.getElementById('payment-number');

            btnBkash.classList.remove('active');
            btnNagad.classList.remove('active');

            if (method === 'bkash') {
                btnBkash.classList.add('active');
                paymentName.innerText = "bKash (Personal)";
                paymentNumber.innerText = "01867-739749";
                paymentNumber.style.color = "#e2136e";
            } else {
                btnNagad.classList.add('active');
                paymentName.innerText = "Nagad (Personal)";
                paymentNumber.innerText = "01867-739749";
                paymentNumber.style.color = "#f26522";
            }
        }

        window.verifyPayment = function () {
            const btn = document.getElementById('verify-payment-btn');
            btn.innerHTML = `<i class="fa-solid fa-circle-notch fa-spin"></i><span>Verifying...</span>`;

            // Simulate API / Verification delay
            setTimeout(() => {
                btn.innerHTML = `<i class="fa-solid fa-check"></i><span>Verification Complete</span>`;
                btn.classList.replace('bg-primary', 'bg-green-600');
                btn.classList.replace('hover:bg-blue-600', 'hover:bg-green-700');
                document.getElementById('payment-success-msg').classList.remove('hidden');
            }, 2000);
        }

        // 11. Custom Video Modal player logic (Drive & YouTube support)
        const videoModal = document.getElementById('video-modal');
        const videoIframe = document.getElementById('video-modal-iframe');

        window.openVideoModal = function (videoUrl) {
            let embedUrl = videoUrl;

            // Convert Drive link to embed preview link
            if (videoUrl.includes('drive.google.com')) {
                embedUrl = videoUrl.replace('/view', '/preview').replace('?t=', '#t=');
            } else if (videoUrl.includes('youtube.com/watch')) {
                const urlParams = new URLSearchParams(new URL(videoUrl).search);
                const videoId = urlParams.get('v');
                embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
            } else if (videoUrl.includes('youtu.be/')) {
                const videoId = videoUrl.split('youtu.be/')[1].split('?')[0];
                embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
            }

            videoIframe.src = embedUrl;
            videoModal.classList.remove('hidden');
            setTimeout(() => {
                videoModal.classList.remove('opacity-0');
            }, 10);
            document.body.style.overflow = 'hidden';
        }

        window.closeVideoModal = function () {
            videoModal.classList.add('opacity-0');
            setTimeout(() => {
                videoModal.classList.add('hidden');
                videoIframe.src = '';
            }, 300);
            document.body.style.overflow = '';
        }

        // Close video modal on clicking backdrop
        videoModal.addEventListener('click', (e) => {
            if (e.target === videoModal) closeVideoModal();
        });

        // 12. Hero Image Customizer Controller Logic
        const customizerToggle = document.getElementById('customizer-toggle');
        const customizerPanel = document.getElementById('customizer-panel');
        const cropYSlider = document.getElementById('crop-y-slider');
        const containerYSlider = document.getElementById('container-y-slider');
        const cropYVal = document.getElementById('crop-y-val');
        const containerYVal = document.getElementById('container-y-val');
        const cssOutput = document.getElementById('customizer-css-output');
        const heroImg = document.getElementById('hero-portrait-img');
        const heroImgContainer = document.getElementById('hero-image-container');

        window.toggleCustomizer = function () {
            if (customizerPanel.classList.contains('hidden')) {
                customizerPanel.classList.remove('hidden');
                setTimeout(() => {
                    customizerPanel.classList.remove('opacity-0', 'scale-95');
                }, 10);
            } else {
                customizerPanel.classList.add('opacity-0', 'scale-95');
                setTimeout(() => {
                    customizerPanel.classList.add('hidden');
                }, 300);
            }
        }

        if (customizerToggle) {
            customizerToggle.addEventListener('click', toggleCustomizer);
        }

        function updateHeroStyles() {
            const cropY = cropYSlider.value;
            const containerY = containerYSlider.value;

            // Apply values
            if (heroImg) {
                heroImg.style.objectPosition = `center ${cropY}%`;
            }
            if (heroImgContainer) {
                heroImgContainer.style.top = `${containerY}%`;
            }

            // Update UI Labels
            cropYVal.innerText = `${cropY}%`;
            containerYVal.innerText = `${containerY}%`;

            // Update CSS output
            cssOutput.innerHTML = `/* Copy updated styling: */<br/>#hero-portrait-img { object-position: center ${cropY}%; }<br/>#hero-image-container { top: ${containerY}%; }`;
        }

        if (cropYSlider && containerYSlider) {
            cropYSlider.addEventListener('input', updateHeroStyles);
            containerYSlider.addEventListener('input', updateHeroStyles);
        }