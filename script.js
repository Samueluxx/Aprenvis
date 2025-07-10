// Datos de Aprenvis
let aprenvisData = {
    user: {
        level: 1,
        xp: 450,
        nextLevelXP: 1000,
        badges: ['🎨 Primer Paso', '✨ Creativo Novato', '🏆 Dedicado'],
        completedLessons: 3,
        portfolio: []
    },
    software: [
        {
            id: 1,
            name: 'Photoshop',
            icon: '🖼️',
            lessons: 15,
            completed: 2,
            progress: 13
        },
        {
            id: 2,
            name: 'Illustrator',
            icon: '🎨',
            lessons: 12,
            completed: 1,
            progress: 8
        },
        {
            id: 3,
            name: 'After Effects',
            icon: '🎬',
            lessons: 18,
            completed: 0,
            progress: 0
        },
        {
            id: 4,
            name: 'Blender',
            icon: '🔮',
            lessons: 20,
            completed: 0,
            progress: 0
        },
        {
            id: 5,
            name: 'Procreate',
            icon: '✏️',
            lessons: 10,
            completed: 0,
            progress: 0
        },
        {
            id: 6,
            name: 'Figma',
            icon: '🎯',
            lessons: 8,
            completed: 0,
            progress: 0
        }
    ],
    lessons: [
        {
            id: 1,
            title: 'Introducción al Color',
            description: 'Aprende los fundamentos de la teoría del color y cómo aplicarla en tus diseños.',
            software: 'Photoshop',
            duration: '25 min',
            difficulty: 'Principiante',
            xp: 100,
            completed: true,
            locked: false
        },
        {
            id: 2,
            title: 'Composición Visual',
            description: 'Domina las reglas de composición para crear diseños impactantes.',
            software: 'Illustrator',
            duration: '30 min',
            difficulty: 'Principiante',
            xp: 150,
            completed: true,
            locked: false
        },
        {
            id: 3,
            title: 'Tipografía Básica',
            description: 'Descubre cómo elegir y combinar fuentes de manera efectiva.',
            software: 'Photoshop',
            duration: '35 min',
            difficulty: 'Principiante',
            xp: 200,
            completed: true,
            locked: false
        },
        {
            id: 4,
            title: 'Herramientas de Selección',
            description: 'Aprende a usar las herramientas de selección avanzadas.',
            software: 'Photoshop',
            duration: '40 min',
            difficulty: 'Intermedio',
            xp: 250,
            completed: false,
            locked: false
        },
        {
            id: 5,
            title: 'Vectores y Formas',
            description: 'Crea ilustraciones vectoriales profesionales.',
            software: 'Illustrator',
            duration: '45 min',
            difficulty: 'Intermedio',
            xp: 300,
            completed: false,
            locked: false
        },
        {
            id: 6,
            title: 'Animación Básica',
            description: 'Introduce movimiento a tus diseños con animaciones simples.',
            software: 'After Effects',
            duration: '60 min',
            difficulty: 'Intermedio',
            xp: 400,
            completed: false,
            locked: true
        }
    ],
    challenges: [
        {
            id: 1,
            title: 'Reto de Paleta de Colores',
            description: 'Crea un diseño usando solo 3 colores complementarios.',
            difficulty: 'Principiante',
            xp: 300,
            timeLeft: '3 días',
            participants: 127,
            completed: false
        },
        {
            id: 2,
            title: 'Póster Minimalista',
            description: 'Diseña un póster usando principios de diseño minimalista.',
            difficulty: 'Intermedio',
            xp: 500,
            timeLeft: '5 días',
            participants: 89,
            completed: false
        },
        {
            id: 3,
            title: 'Logo Geométrico',
            description: 'Crea un logo usando solo formas geométricas básicas.',
            difficulty: 'Avanzado',
            xp: 750,
            timeLeft: '1 semana',
            participants: 45,
            completed: false
        }
    ],
    dictionary: [
        {
            id: 1,
            term: 'Kerning',
            definition: 'El espaciado entre caracteres individuales en una fuente.',
            example: 'Ajustar el kerning mejora la legibilidad del texto.'
        },
        {
            id: 2,
            term: 'Saturación',
            definition: 'La intensidad o pureza de un color.',
            example: 'Un color muy saturado es vibrante y llamativo.'
        },
        {
            id: 3,
            term: 'Contraste',
            definition: 'La diferencia entre elementos visuales, como colores claros y oscuros.',
            example: 'El contraste ayuda a crear jerarquía visual.'
        },
        {
            id: 4,
            term: 'Jerarquía Visual',
            definition: 'La organización de elementos para guiar la atención del espectador.',
            example: 'Los títulos grandes crean jerarquía visual.'
        },
        {
            id: 5,
            term: 'Espacio Negativo',
            definition: 'El espacio vacío alrededor y entre elementos de diseño.',
            example: 'El espacio negativo ayuda a que el diseño respire.'
        },
        {
            id: 6,
            term: 'Gradiente',
            definition: 'Una transición suave entre dos o más colores.',
            example: 'Los gradientes añaden profundidad y modernidad.'
        }
    ],
    community: [
        {
            id: 1,
            author: 'María González',
            avatar: 'M',
            question: '¿Cómo puedo mejorar mis habilidades de composición?',
            time: '2 horas',
            replies: 8,
            likes: 15
        },
        {
            id: 2,
            author: 'Carlos Ruiz',
            avatar: 'C',
            question: '¿Cuál es la mejor paleta de colores para un diseño corporativo?',
            time: '5 horas',
            replies: 12,
            likes: 23
        },
        {
            id: 3,
            author: 'Ana Martínez',
            avatar: 'A',
            question: '¿Recomendaciones para tipografía en diseño web?',
            time: '1 día',
            replies: 6,
            likes: 18
        }
    ]
};

// Función para mostrar pestañas
function showTab(tabName) {
    // Ocultar todas las pestañas
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Remover clase activa de todas las pestañas del nav
    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Mostrar la pestaña seleccionada
    document.getElementById(tabName).classList.add('active');
    
    // Activar el botón correspondiente
    event.target.classList.add('active');
    
    // Cargar contenido según la pestaña
    switch(tabName) {
        case 'home':
            loadSoftwareGrid();
            break;
        case 'lessons':
            loadLessons();
            break;
        case 'challenges':
            loadChallenges();
            break;
        case 'dictionary':
            loadDictionary();
            break;
        case 'community':
            loadCommunity();
            break;
        case 'profile':
            loadProfile();
            break;
    }
}

// Función para cargar el grid de software
function loadSoftwareGrid() {
    const grid = document.getElementById('softwareGrid');
    grid.innerHTML = '';
    
    aprenvisData.software.forEach(software => {
        const card = document.createElement('div');
        card.className = 'software-card';
        card.style.cursor = 'pointer';
        card.onclick = () => openSoftware(software.id);
        
        const progressPercentage = (software.progress / software.lessons) * 100;
        const progressDegrees = (progressPercentage / 100) * 360;
        
        card.innerHTML = `
            <div class="software-icon">${software.icon}</div>
            <div class="software-title">${software.name}</div>
            <div class="software-lessons">${software.lessons} lecciones</div>
            <div class="progress-ring">
                <div class="progress-circle" style="background: conic-gradient(#f472b6 0deg ${progressDegrees}deg, #e5e7eb ${progressDegrees}deg 360deg)">
                    ${Math.round(progressPercentage)}%
                </div>
            </div>
        `;
        
        grid.appendChild(card);
    });
}

// Función para cargar lecciones
function loadLessons() {
    const lessonsList = document.getElementById('lessonsList');
    lessonsList.innerHTML = '';
    
    aprenvisData.lessons.forEach(lesson => {
        const card = document.createElement('div');
        card.className = `lesson-card ${lesson.completed ? 'lesson-completed' : ''} ${lesson.locked ? 'locked' : ''}`;
        if (!lesson.locked) {
            card.style.cursor = 'pointer';
            card.onclick = () => startLesson(lesson.id);
        }
        
        card.innerHTML = `
            <div class="lesson-header">
                <div class="lesson-number">${lesson.id}</div>
                <div class="lesson-title">${lesson.title}</div>
            </div>
            <div class="lesson-description">${lesson.description}</div>
            <div class="lesson-stats">
                <span><i class="fas fa-clock"></i> ${lesson.duration}</span>
                <span><i class="fas fa-signal"></i> ${lesson.difficulty}</span>
                <span><i class="fas fa-star"></i> ${lesson.xp} XP</span>
            </div>
        `;
        
        lessonsList.appendChild(card);
    });
}

// Función para cargar retos
function loadChallenges() {
    const challengesList = document.getElementById('challengesList');
    challengesList.innerHTML = '';
    
    aprenvisData.challenges.forEach(challenge => {
        const card = document.createElement('div');
        card.className = 'challenge-card';
        card.style.cursor = 'pointer';
        card.onclick = () => joinChallenge(challenge.id);
        
        card.innerHTML = `
            <div class="challenge-title">${challenge.title}</div>
            <div class="challenge-description">${challenge.description}</div>
            <div class="challenge-meta">
                <span><i class="fas fa-users"></i> ${challenge.participants} participantes</span>
                <span><i class="fas fa-clock"></i> ${challenge.timeLeft}</span>
            </div>
            <div style="margin-top: 15px;">
                <span class="badge">${challenge.difficulty}</span>
                <span class="badge">${challenge.xp} XP</span>
            </div>
        `;
        
        challengesList.appendChild(card);
    });
}

// Función para cargar diccionario
function loadDictionary() {
    const termsList = document.getElementById('termsList');
    termsList.innerHTML = '';
    
    aprenvisData.dictionary.forEach(term => {
        const card = document.createElement('div');
        card.className = 'term-card';
        
        card.innerHTML = `
            <div class="term-name">${term.term}</div>
            <div class="term-definition">${term.definition}</div>
            <div class="term-example">
                <i class="fas fa-lightbulb"></i> <strong>Ejemplo:</strong> ${term.example}
            </div>
        `;
        
        termsList.appendChild(card);
    });
}

// Función para cargar comunidad
function loadCommunity() {
    const communityQuestions = document.getElementById('communityQuestions');
    communityQuestions.innerHTML = '';
    
    aprenvisData.community.forEach(question => {
        const card = document.createElement('div');
        card.className = 'community-card';
        card.style.cursor = 'pointer';
        card.onclick = () => openQuestion(question.id);
        
        card.innerHTML = `
            <div class="question-header">
                <div class="user-avatar">${question.avatar}</div>
                <div class="question-meta">
                    <div class="question-title">${question.question}</div>
                    <div class="question-author">Por ${question.author} • hace ${question.time}</div>
                </div>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px;">
                <div>
                    <span style="margin-right: 15px; color: #6b7280;">
                        <i class="fas fa-comment"></i> ${question.replies} respuestas
                    </span>
                    <span style="color: #6b7280;">
                        <i class="fas fa-heart"></i> ${question.likes} me gusta
                    </span>
                </div>
                <button class="btn secondary" onclick="event.stopPropagation(); answerQuestion(${question.id})">
                    Responder
                </button>
            </div>
        `;
        
        communityQuestions.appendChild(card);
    });
}

// Función para cargar perfil
function loadProfile() {
    const profileStats = document.getElementById('profileStats');
    const badgesList = document.getElementById('badgesList');
    const portfolioGrid = document.getElementById('portfolioGrid');
    
    // Cargar estadísticas
    profileStats.innerHTML = `
        <div class="stat-card">
            <div class="stat-number">${aprenvisData.user.level}</div>
            <div class="stat-label">Nivel</div>
        </div>
        <div class="stat-card">
            <div class="stat-number">${aprenvisData.user.xp}</div>
            <div class="stat-label">XP Total</div>
        </div>
        <div class="stat-card">
            <div class="stat-number">${aprenvisData.user.completedLessons}</div>
            <div class="stat-label">Lecciones</div>
        </div>
        <div class="stat-card">
            <div class="stat-number">${aprenvisData.user.badges.length}</div>
            <div class="stat-label">Insignias</div>
        </div>
    `;
    
    // Cargar insignias
    badgesList.innerHTML = '';
    aprenvisData.user.badges.forEach(badge => {
        const badgeElement = document.createElement('span');
        badgeElement.className = 'badge';
        badgeElement.textContent = badge;
        badgesList.appendChild(badgeElement);
    });
    
    // Cargar portafolio (ejemplo)
    portfolioGrid.innerHTML = `
        <div class="portfolio-item">
            <div class="portfolio-image">🎨</div>
            <div class="portfolio-info">
                <div class="portfolio-title">Mi Primer Logo</div>
                <div class="portfolio-software">Illustrator</div>
            </div>
        </div>
        <div class="portfolio-item">
            <div class="portfolio-image">📱</div>
            <div class="portfolio-info">
                <div class="portfolio-title">Diseño de App</div>
                <div class="portfolio-software">Figma</div>
            </div>
        </div>
        <div class="portfolio-item">
            <div class="portfolio-image">🖼️</div>
            <div class="portfolio-info">
                <div class="portfolio-title">Retoque Fotográfico</div>
                <div class="portfolio-software">Photoshop</div>
            </div>
        </div>
    `;
}

// Función para buscar en el diccionario
function searchDictionary() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const termsList = document.getElementById('termsList');
    
    if (searchTerm === '') {
        loadDictionary();
        return;
    }
    
    const filteredTerms = aprenvisData.dictionary.filter(term =>
        term.term.toLowerCase().includes(searchTerm) ||
        term.definition.toLowerCase().includes(searchTerm)
    );
    
    termsList.innerHTML = '';
    filteredTerms.forEach(term => {
        const card = document.createElement('div');
        card.className = 'term-card';
        
        card.innerHTML = `
            <div class="term-name">${term.term}</div>
            <div class="term-definition">${term.definition}</div>
            <div class="term-example">
                <i class="fas fa-lightbulb"></i> <strong>Ejemplo:</strong> ${term.example}
            </div>
        `;
        
        termsList.appendChild(card);
    });
}

// Función para mostrar consejos creativos
function showCreativeTip() {
    const tips = [
        "💡 Usa la regla de los tercios para composiciones más dinámicas",
        "🎨 Limita tu paleta de colores a 2-3 colores principales",
        "✨ El espacio en blanco es tan importante como los elementos",
        "🔍 Siempre revisa tu trabajo con ojos frescos",
        "🎯 Menos es más: simplifica tu mensaje",
        "🌈 Los colores complementarios crean contraste visual",
        "📐 Alinea todos los elementos para crear armonía",
        "🎭 Usa jerarquía visual para guiar la atención"
    ];
    
    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    showNotification(randomTip);
}

// Función para mostrar notificaciones
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 4000);
}

// Función para actualizar la barra de XP
function updateXPBar() {
    const xpBar = document.getElementById('xpBar');
    const currentXP = document.getElementById('currentXP');
    const nextLevelXP = document.getElementById('nextLevelXP');
    const userLevel = document.getElementById('userLevel');
    
    const percentage = (aprenvisData.user.xp / aprenvisData.user.nextLevelXP) * 100;
    
    xpBar.style.width = percentage + '%';
    currentXP.textContent = aprenvisData.user.xp;
    nextLevelXP.textContent = aprenvisData.user.nextLevelXP;
    userLevel.textContent = aprenvisData.user.level;
}

// Funciones de interacción
function openSoftware(softwareId) {
    showNotification(`¡Explorando ${aprenvisData.software.find(s => s.id === softwareId).name}! 🎨`);
    showTab('lessons');
}

function startLesson(lessonId) {
    const lesson = aprenvisData.lessons.find(l => l.id === lessonId);
    if (lesson.locked) {
        showNotification('¡Completa las lecciones anteriores para desbloquear esta! 🔒');
        return;
    }
    
    showNotification(`¡Iniciando: ${lesson.title}! 🚀`);
    
    // Simular completar lección
    setTimeout(() => {
        if (!lesson.completed) {
            lesson.completed = true;
            aprenvisData.user.xp += lesson.xp;
            aprenvisData.user.completedLessons++;
            updateXPBar();
            showNotification(`¡Lección completada! +${lesson.xp} XP 🎉`);
            loadLessons();
        }
    }, 2000);
}

function joinChallenge(challengeId) {
    const challenge = aprenvisData.challenges.find(c => c.id === challengeId);
    showNotification(`¡Te has unido al reto: ${challenge.title}! 🎯`);
}

function openQuestion(questionId) {
    const question = aprenvisData.community.find(q => q.id === questionId);
    showNotification(`Abriendo: ${question.question} 💬`);
}

function answerQuestion(questionId) {
    showNotification('¡Respuesta enviada! La comunidad apreciará tu ayuda 💕');
}

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
    // Cargar contenido inicial
    loadSoftwareGrid();
    updateXPBar();
    
    // Agregar event listener para búsqueda
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', searchDictionary);
    }
    
    // Mostrar notificación de bienvenida
    setTimeout(() => {
        showNotification('¡Bienvenido a Aprenvis! Tu aventura creativa comienza aquí 🌟');
    }, 1000);
});
