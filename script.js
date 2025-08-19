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
                image: 'https://via.placeholder.com/600x300/4F46E5/FFFFFF?text=ERP+System',
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
                image: 'https://via.placeholder.com/600x300/10B981/FFFFFF?text=Airbnb+Clone',
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
                image: 'https://via.placeholder.com/600x300/EF4444/FFFFFF?text=Simple+Shell',
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
                image: 'https://via.placeholder.com/600x300/8B5CF6/FFFFFF?text=IT-Akademy',
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
                image: 'https://via.placeholder.com/600x300/06B6D4/FFFFFF?text=Holberton+School',
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
                image: 'https://via.placeholder.com/600x300/3B82F6/FFFFFF?text=IBM+Certifications',
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
                    
                    <h3 style="margin: 1.5rem 0 1rem 0; color: #1f2937;">Réalisations:</h3>
                    <ul style="margin-bottom: 1.5rem; padding-left: 1.5rem; color: #6b7280;">
                        ${project.details.achievements.map(achievement => 
                            `<li style="margin-bottom: 0.5rem;">${achievement}</li>`
                        ).join('')}
                    </ul>
                    
                    <h3 style="margin: 1.5rem 0 1rem 0; color: #1f2937;">Technologies utilisées:</h3>
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
