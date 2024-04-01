// script.js

import { projects } from './data.js';

const menu = document.getElementById('menu');
menu.addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
        const sectionId = event.target.getAttribute('href').substring(1);
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: 'smooth' });
    }
});

const projectsContainer = document.getElementById('projects');
projects.forEach((project) => {
    const projectElement = document.createElement('div');
    projectElement.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href="${project.url}" target="_blank">View Project</a>
    `;
    projectsContainer.appendChild(projectElement);
});

const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    // Send the form data to the server or handle it as needed
});
