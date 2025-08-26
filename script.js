// Portfolio World Map Interactive Portfolio
class WorldMapPortfolio {
    constructor() {
        this.map = null;
        this.markers = [];
        this.projects = [
            {
                id: 'erp-project',
                name: 'Système ERP en Java',
                location: [48.9431, 2.1622], // Sartrouville, France (ND-IT)
                description: 'Développement d\'un ERP basique en Java avec Spring Boot',
                technologies: ['Java', 'Spring Boot', 'SQL', 'Maven'],
                image: 'images/ERP en JS.png',
                details: {
                    company: 'ND-IT',
                    duration: 'Avril 2023 - Mai 2023',
                    location: 'Sartrouville, France',
                    achievements: [
                        'Développement d\'un ERP basique en Java',
                        'Utilisation du framework Spring Boot',
                        'Création de la documentation technique du projet',
                        'Interface utilisateur responsive et intuitive',
                        'Gestion des bases de données relationnelles'
                    ]
                }
            },
            {
                id: 'airbnb-clone',
                name: 'Clone Airbnb en Python',
                location: [37.7749, -122.4194], // San Francisco, USA
                description: 'Reproduction complète du site Airbnb avec Python',
                technologies: ['Python', 'Flask', 'SQLAlchemy', 'HTML/CSS', 'JavaScript'],
                image: 'images/Airbnb-like en Python.png',
                details: {
                    company: 'Projet Personnel',
                    duration: '2023',
                    location: 'Projet Académique',
                    achievements: [
                        'Reproduction fidèle de l\'interface Airbnb',
                        'Système de réservation complet',
                        'Gestion des utilisateurs et authentification',
                        'Interface responsive et moderne',
                        'Intégration de filtres de recherche avancés'
                    ]
                }
            },
            {
                id: 'simple-shell',
                name: 'Shell Simple en C',
                location: [60.1282, 18.6435], // Stockholm, Suède
                description: 'Création d\'un shell basique en langage C',
                technologies: ['C', 'Linux', 'Bash', 'Process Management'],
                image: 'images/Simple Shell en C.png',
                details: {
                    company: 'Holberton School',
                    duration: '2023',
                    location: 'Projet Académique',
                    achievements: [
                        'Implémentation d\'un shell basique en C',
                        'Gestion des processus et des commandes',
                        'Support des variables d\'environnement',
                        'Gestion des signaux et des erreurs',
                        'Interface en ligne de commande interactive'
                    ]
                }
            },
            {
                id: 'education-it-akademy',
                name: 'Formation Développement Web',
                location: [45.783329, 4.73333], // Charbonnières-les-Bains, France (IT-Akademy) - Coordonnées exactes
                description: 'Formation en Développement Web / Web Mobile',
                technologies: ['HTML/CSS', 'JavaScript', 'PHP', 'React', 'Vue.js'],
                image: 'images/IT-Akademy.png',
                details: {
                    company: 'IT-Akademy',
                    duration: 'Octobre 2021 - Juin 2023',
                    location: 'Charbonnières-les-Bains, France',
                    achievements: [
                        'Formation complète en développement web full-stack',
                        'Maîtrise des technologies front-end et back-end',
                        'Projets pratiques avec bases de données et APIs',
                        'Développement d\'interfaces responsives',
                        'Certifications professionnelles obtenues'
                    ]
                }
            },
            {
                id: 'education-holberton',
                name: 'Formation Holberton School',
                location: [46.3705, 6.4794], // Thonon-les-Bains, France (Holberton School)
                description: 'Formation en Informatique - Développement Web Full-Stack',
                technologies: ['C', 'Python', 'JavaScript', 'SQL', 'Linux'],
                image: 'images/Holberton.png',
                details: {
                    company: 'Holberton School',
                    duration: 'Depuis Octobre 2024',
                    location: 'Thonon-les-Bains, France',
                    achievements: [
                        'Formation intensive en développement full-stack',
                        'Apprentissage des langages de programmation de bas niveau',
                        'Projets pratiques en équipe',
                        'Méthodologie d\'apprentissage par projet',
                        'Préparation aux défis techniques du monde professionnel'
                    ]
                }
            },
            {
                id: 'certifications',
                name: 'Certifications IBM',
                location: [40.7128, -74.0060], // New York, USA
                description: 'Certifications professionnelles en technologies IBM',
                technologies: ['Agile', 'Cloud Computing', 'Cybersecurity', 'SQL', 'Open Source'],
                image: 'images/IBM.png',
                details: {
                    company: 'IBM SkillsBuild',
                    duration: '2023-2024',
                    location: 'Formation en ligne',
                    achievements: [
                        'Agile Explorer - Méthodologies agiles',
                        'Open Source Foundations - Fondamentaux open source',
                        'SQL and Relational Databases 101 - Bases de données',
                        'Introduction to Cloud - Introduction au cloud computing',
                        'Cybersecurity Fundamentals - Cybersécurité'
                    ]
                }
            }
        ];
        
        this.init();
    }

    init() {
        this.initMap();
        this.addMarkers();
        this.setupEventListeners();
        this.setupSmoothScrolling();
    }

    initMap() {
        // Initialiser la carte Leaflet
        this.map = L.map('map', {
            center: [30, 0],
            zoom: 2,
            zoomControl: true,
            scrollWheelZoom: true,
            dragging: true,
            touchZoom: true,
            doubleClickZoom: true,
            boxZoom: true,
            keyboard: true
        });

        // Ajouter une couche de carte moderne
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors',
            maxZoom: 18,
            minZoom: 2
        }).addTo(this.map);

        // Ajouter une couche de carte satellite optionnelle
        const satelliteLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
            attribution: '© Esri',
            maxZoom: 18,
            minZoom: 2
        });

        // Contrôles de couches
        const baseMaps = {
            "Carte": L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '© OpenStreetMap contributors',
                maxZoom: 18,
                minZoom: 2
            }),
            "Satellite": satelliteLayer
        };

        L.control.layers(baseMaps).addTo(this.map);

        // Personnaliser le style de la carte
        this.customizeMapStyle();
    }

    customizeMapStyle() {
        // Ajouter des styles personnalisés pour la carte
        const mapElement = document.getElementById('map');
        if (mapElement) {
            mapElement.style.borderRadius = '20px';
            mapElement.style.overflow = 'hidden';
        }
    }

    addMarkers() {
        // Nettoyer complètement la carte et les marqueurs
        if (this.map) {
            this.map.eachLayer((layer) => {
                if (layer instanceof L.Marker) {
                    this.map.removeLayer(layer);
                }
            });
        }
        
        // Vider le tableau des marqueurs
        this.markers = [];
        
        // Créer des marqueurs simples sans icônes personnalisées
        this.projects.forEach((project, index) => {
            // Utiliser un marqueur Leaflet standard avec une couleur personnalisée
            const marker = L.circleMarker(project.location, {
                radius: 10,
                fillColor: '#4f46e5',
                color: 'white',
                weight: 3,
                opacity: 1,
                fillOpacity: 1
            }).addTo(this.map);

            // Ajouter un événement de clic pour ouvrir la modal
            marker.on('click', () => {
                this.openProjectModal(project);
            });

            // Ajouter une animation d'apparition progressive
            setTimeout(() => {
                marker.setStyle({ radius: 0 });
                setTimeout(() => {
                    marker.setStyle({ radius: 10 });
                }, index * 200);
            }, 1000);

            this.markers.push(marker);
        });
    }

    createPopupContent(project) {
        return `
            <div class="popup-content">
                <h3 style="margin: 0 0 10px 0; color: #4f46e5; font-size: 16px;">${project.name}</h3>
                <p style="margin: 0 0 10px 0; font-size: 14px; color: #6b7280;">${project.description}</p>
                <div style="display: flex; flex-wrap: wrap; gap: 5px;">
                    ${project.technologies.slice(0, 3).map(tech => 
                        `<span style="background: #f3f4f6; color: #4f46e5; padding: 2px 8px; border-radius: 12px; font-size: 12px;">${tech}</span>`
                    ).join('')}
                </div>
                <button onclick="portfolio.openProjectModal(${JSON.stringify(project).replace(/"/g, '&quot;')})" 
                        style="margin-top: 10px; background: #4f46e5; color: white; border: none; padding: 8px 16px; border-radius: 20px; cursor: pointer; font-size: 12px;">
                    Voir plus
                </button>
            </div>
        `;
    }

    openProjectModal(project) {
        const modal = document.getElementById('projectModal');
        const modalContent = document.getElementById('modalContent');
        
        if (modal && modalContent) {
            modalContent.innerHTML = this.createProjectModalContent(project);
            modal.style.display = 'block';
            
            // Ajouter une animation d'entrée
            modal.style.opacity = '0';
            setTimeout(() => {
                modal.style.opacity = '1';
                modal.style.transition = 'opacity 0.3s ease';
            }, 10);
        }
    }

    createProjectModalContent(project) {
        return `
            <div class="project-card">
                <img src="${project.image}" alt="${project.name}" class="project-image">
                <div class="project-content">
                    <h2 class="project-title">${project.name}</h2>
                    <p class="project-description">${project.description}</p>
                    
                    <div class="project-details">
                        <div style="margin-bottom: 1rem;">
                            <strong>Entreprise/Institution:</strong> ${project.details.company}
                        </div>
                        <div style="margin-bottom: 1rem;">
                            <strong>Durée:</strong> ${project.details.duration}
                        </div>
                        <div style="margin-bottom: 1rem;">
                            <strong>Localisation:</strong> ${project.details.location}
                        </div>
                    </div>
                    
                    <h3 class="project-section-title">Réalisations:</h3>
                    <ul class="project-achievements-list">
                        ${project.details.achievements.map(achievement => 
                            `<li>${achievement}</li>`
                        ).join('')}
                    </ul>
                    
                    <h3 class="project-section-title">Technologies utilisées:</h3>
                    <div class="project-tech">
                        ${project.technologies.map(tech => 
                            `<span class="tech-tag">${tech}</span>`
                        ).join('')}
                    </div>
                </div>
            </div>
        `;
    }

    setupEventListeners() {
        // Fermer la modal
        const closeBtn = document.querySelector('.close');
        const modal = document.getElementById('projectModal');
        
        if (closeBtn && modal) {
            closeBtn.addEventListener('click', () => {
                modal.style.display = 'none';
            });
            
            // Fermer en cliquant à l'extérieur
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.style.display = 'none';
                }
            });
        }

        // Fermer avec la touche Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal && modal.style.display === 'block') {
                modal.style.display = 'none';
            }
        });

        // Setup du formulaire de contact
        this.setupContactForm();
        
        // Setup du toggle de thème
        this.setupThemeToggle();
    }

    setupThemeToggle() {
        const themeToggle = document.getElementById('themeToggle');
        if (!themeToggle) return;

        // Charger le thème sauvegardé ou détecter la préférence système
        this.loadTheme();

        themeToggle.addEventListener('click', () => {
            this.toggleTheme();
        });
    }

    loadTheme() {
        // Vérifier le localStorage
        const savedTheme = localStorage.getItem('theme');
        
        if (savedTheme) {
            this.setTheme(savedTheme);
        } else {
            // Détecter la préférence système
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            this.setTheme(prefersDark ? 'dark' : 'light');
        }
    }

    toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        this.setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    }

    setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        
        // Mettre à jour l'icône du toggle
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            const lightIcon = themeToggle.querySelector('.theme-icon.light');
            const darkIcon = themeToggle.querySelector('.theme-icon.dark');
            
            if (theme === 'dark') {
                lightIcon.style.display = 'none';
                darkIcon.style.display = 'inline';
            } else {
                lightIcon.style.display = 'inline';
                darkIcon.style.display = 'none';
            }
        }
    }

    setupContactForm() {
        const form = document.getElementById('contactForm');
        if (!form) return;

        // Initialiser EmailJS
        emailjs.init('T6ZQGh3k4FWEbwZt7'); // Remplace par ton vrai User ID

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleFormSubmit();
        });

        // Validation en temps réel
        this.setupFormValidation();
    }

    setupFormValidation() {
        const inputs = document.querySelectorAll('.form-input, .form-textarea');
        
        inputs.forEach(input => {
            input.addEventListener('blur', () => {
                this.validateField(input);
            });
            
            input.addEventListener('input', () => {
                this.clearFieldError(input);
            });
        });
    }

    validateField(field) {
        const value = field.value.trim();
        const fieldName = field.name;
        let isValid = true;
        let errorMessage = '';

        switch (fieldName) {
            case 'name':
                if (value.length < 2) {
                    isValid = false;
                    errorMessage = 'Le nom doit contenir au moins 2 caractères';
                }
                break;
            case 'email':
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(value)) {
                    isValid = false;
                    errorMessage = 'Veuillez entrer un email valide';
                }
                break;
            case 'subject':
                if (value.length < 5) {
                    isValid = false;
                    errorMessage = 'Le sujet doit contenir au moins 5 caractères';
                }
                break;
            case 'message':
                if (value.length < 10) {
                    isValid = false;
                    errorMessage = 'Le message doit contenir au moins 10 caractères';
                }
                break;
        }

        if (!isValid) {
            this.showFieldError(field, errorMessage);
        } else {
            this.showFieldSuccess(field);
        }

        return isValid;
    }

    showFieldError(field, message) {
        field.classList.remove('success');
        field.classList.add('error');
        const errorElement = document.getElementById(field.name + 'Error');
        if (errorElement) {
            errorElement.textContent = message;
        }
    }

    showFieldSuccess(field) {
        field.classList.remove('error');
        field.classList.add('success');
        const errorElement = document.getElementById(field.name + 'Error');
        if (errorElement) {
            errorElement.textContent = '';
        }
    }

    clearFieldError(field) {
        field.classList.remove('error', 'success');
        const errorElement = document.getElementById(field.name + 'Error');
        if (errorElement) {
            errorElement.textContent = '';
        }
    }

    async handleFormSubmit() {
        const form = document.getElementById('contactForm');
        const submitBtn = document.getElementById('submitBtn');
        const btnText = submitBtn.querySelector('.btn-text');
        const btnLoading = submitBtn.querySelector('.btn-loading');

        // Validation de tous les champs
        const inputs = form.querySelectorAll('.form-input, .form-textarea');
        let isValid = true;
        
        inputs.forEach(input => {
            if (!this.validateField(input)) {
                isValid = false;
            }
        });

        if (!isValid) {
            return;
        }

        // Afficher l'état de chargement
        submitBtn.disabled = true;
        btnText.style.display = 'none';
        btnLoading.style.display = 'flex';

        try {
            // Préparer les données du formulaire
            const formData = {
                name: form.name.value,
                email: form.email.value,
                subject: form.subject.value,
                message: form.message.value
            };

            // Envoyer l'email via EmailJS
            const response = await emailjs.send(
                'service_l999ulg', // Remplace par ton vrai Service ID
                'template_uond4ic', // Remplace par ton vrai Template ID
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                    to_name: 'Rayane ALLAOUI'
                }
            );

            // Succès
            this.showFormSuccess();
            form.reset();
            inputs.forEach(input => {
                input.classList.remove('success');
            });

        } catch (error) {
            // Erreur
            this.showFormError(error);
        } finally {
            // Restaurer le bouton
            submitBtn.disabled = false;
            btnText.style.display = 'inline';
            btnLoading.style.display = 'none';
        }
    }

    showFormSuccess() {
        // Créer une notification de succès
        const notification = document.createElement('div');
        notification.className = 'form-notification success';
        notification.innerHTML = `
            <div class="notification-content">
                <span class="notification-icon">✅</span>
                <span class="notification-text">Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.</span>
            </div>
        `;
        
        this.showNotification(notification);
    }

    showFormError(error) {
        // Créer une notification d'erreur
        const notification = document.createElement('div');
        notification.className = 'form-notification error';
        notification.innerHTML = `
            <div class="notification-content">
                <span class="notification-icon">❌</span>
                <span class="notification-text">Erreur lors de l'envoi. Veuillez réessayer ou me contacter directement.</span>
            </div>
        `;
        
        this.showNotification(notification);
    }

    showNotification(notification) {
        const formContainer = document.querySelector('.form-container');
        formContainer.appendChild(notification);

        // Afficher la notification
        setTimeout(() => {
            notification.style.opacity = '1';
            notification.style.transform = 'translateY(0)';
        }, 100);

        // Supprimer la notification après 5 secondes
        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transform = 'translateY(-20px)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 5000);
    }

    setupSmoothScrolling() {
        // Navigation fluide vers les sections
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    // Méthode pour faire défiler vers la carte
    scrollToMap() {
        const mapSection = document.getElementById('world-map');
        if (mapSection) {
            mapSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
}

// Initialiser le portfolio quand la page est chargée
let portfolio;
document.addEventListener('DOMContentLoaded', () => {
    portfolio = new WorldMapPortfolio();
});

// Fonction globale pour le bouton CTA
function scrollToMap() {
    if (portfolio) {
        portfolio.scrollToMap();
    }
}

// Ajouter des animations au scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observer les éléments pour les animations
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.skill-category, .stat, .contact-item, .social-link');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
});

// Améliorer l'expérience utilisateur avec des micro-interactions
document.addEventListener('DOMContentLoaded', () => {
    // Effet de parallaxe subtil sur le header
    let lastScrollTop = 0;
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        lastScrollTop = scrollTop;
    });

    // Animation des compétences au survol
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'scale(1.1) rotate(2deg)';
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'scale(1) rotate(0deg)';
        });
    });
});
