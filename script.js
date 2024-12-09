const projects = {
    busBooking: {
        title: "Bus Booking System",
        description: "A comprehensive web application for seamless bus ticket booking and management.",
        features: [
            "Real-time seat availability tracking",
            "Integrated payment gateway",
            "User-friendly interface",
            "Responsive design"
        ],
        technologies: ["React", "Node.js", "MongoDB", "Redux"],
        githubLink: "#",
        liveLink: "#"
    },
    agroDoctorApp: {
        title: "Agro Doctor App",
        description: "An innovative agricultural support platform providing crop health insights and expert guidance.",
        features: [
            "Crop disease detection",
            "Real-time weather updates",
            "Personalized farming recommendations",
            "Machine learning powered insights"
        ],
        technologies: ["React Native", "TensorFlow", "Firebase", "Python"],
        githubLink: "#",
        liveLink: "#"
    },
    pesticidePrediction: {
        title: "Pesticide Prediction System",
        description: "Machine learning application to predict and optimize pesticide usage in agriculture.",
        features: [
            "Predictive analysis of pesticide requirements",
            "Environmental impact assessment",
            "Cost-effective farming recommendations",
            "Data-driven crop management"
        ],
        technologies: ["Python", "scikit-learn", "Django", "React"],
        githubLink: "#",
        liveLink: "#"
    }
};

function openModal(projectKey) {
    const project = projects[projectKey];
    const modalContent = document.getElementById('modalContent');

    modalContent.innerHTML = `
        <h2>${project.title}</h2>
        <p>${project.description}</p>
        
        <h3>Key Features:</h3>
        <ul>
            ${project.features.map(feature => <li>${feature}</li>).join('')}
        </ul>
        
        <div class="project-technologies">
            ${project.technologies.map(tech => <span class="tech-badge">${tech}</span>).join('')}
        </div>
        
        <div style="margin-top: 1rem; display: flex; gap: 1rem; justify-content: center;">
            <a href="${project.githubLink}" target="_blank" class="cta-button" style="margin-right: 1rem;">GitHub</a>
            <a href="${project.liveLink}" target="_blank" class="cta-button">Live Demo</a>
        </div>
    `;

    document.getElementById('projectModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('projectModal').style.display = 'none';
}

window.onclick = function (event) {
    const modal = document.getElementById('projectModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}