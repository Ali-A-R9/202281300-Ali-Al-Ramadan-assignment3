document.addEventListener("DOMContentLoaded", function () {

  /* ============================
     ELEMENTS
  ============================ */

  const themeToggleBtn = document.getElementById("themeToggle");
  const greetingEl = document.getElementById("greeting");
  const yearEl = document.getElementById("year");

  const projectsGrid = document.getElementById("projectsGrid");
  const projectSearch = document.getElementById("projectSearch");
  const projectsEmpty = document.getElementById("projectsEmpty");
  const projectsCount = document.getElementById("projectsCount");

  const form = document.getElementById("contactForm");
  const statusEl = document.getElementById("formStatus");
  const sendBtn = document.getElementById("sendBtn");

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const messageError = document.getElementById("messageError");

  /* ============================
     FOOTER YEAR
  ============================ */

  yearEl.textContent = new Date().getFullYear();

  /* ============================
     GREETING
  ============================ */

  function setGreeting() {
    const hour = new Date().getHours();
    let greeting = "Hello";

    if (hour < 12) greeting = "Good morning";
    else if (hour < 18) greeting = "Good afternoon";
    else greeting = "Good evening";

    greetingEl.textContent = `${greeting}! Welcome to my portfolio.`;
  }

  setGreeting();

  /* ============================
     THEME TOGGLE
  ============================ */

  function updateButtonText() {
    themeToggleBtn.textContent =
      document.body.classList.contains("dark")
        ? "Switch to Light Mode"
        : "Switch to Dark Mode";
  }

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
  }

  updateButtonText();

  themeToggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    localStorage.setItem(
      "theme",
      document.body.classList.contains("dark") ? "dark" : "light"
    );
    updateButtonText();
  });

  /* ============================
     PROJECTS (DYNAMIC FEATURE)
  ============================ */

  const projects = [
    {
      title: "SnipShelf",
      description: "Clipboard screenshot manager built with WPF (.NET).",
      url: "https://github.com/Ali-A-R9/SnipShelf",
      tags: ["WPF", ".NET", "Desktop"]
    },
    {
      title: "My Schedule",
      description: "Web app to organize daily activities visually.",
      url: "https://github.com/Ali-A-R9/my-schedule",
      tags: ["Web", "JavaScript", "UI"]
    }
  ];

  function createProjectCard(project) {
    const card = document.createElement("article");
    card.className = "project-card";

    card.innerHTML = `
      <h3 class="project-title">${project.title}</h3>
      <p class="project-description">${project.description}</p>
      <ul class="project-tags">
        ${project.tags.map(tag => `<li class="project-tag">${tag}</li>`).join("")}
      </ul>
      <a class="project-button" href="${project.url}" target="_blank" rel="noopener">
        View on GitHub
      </a>
    `;

    return card;
  }

  function renderProjects(list) {
    projectsGrid.innerHTML = "";

    if (list.length === 0) {
      projectsEmpty.hidden = false;
      projectsCount.textContent = "0 project(s) shown";
      return;
    }

    projectsEmpty.hidden = true;

    list.forEach(project => {
      projectsGrid.appendChild(createProjectCard(project));
    });

    projectsCount.textContent = `${list.length} project(s) shown`;
  }

  function filterProjects(query) {
    const q = query.toLowerCase().trim();

    if (!q) return projects;

    return projects.filter(project => {
      const text = (
        project.title +
        project.description +
        project.tags.join(" ")
      ).toLowerCase();

      return text.includes(q);
    });
  }

  projectSearch.addEventListener("input", (e) => {
    const filtered = filterProjects(e.target.value);
    renderProjects(filtered);
  });

  renderProjects(projects);

  /* ============================
     FORM VALIDATION
  ============================ */

  function setFieldError(input, errorEl, message) {
    if (message) {
      input.setAttribute("aria-invalid", "true");
      errorEl.textContent = message;
    } else {
      input.setAttribute("aria-invalid", "false");
      errorEl.textContent = "";
    }
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function validateForm() {
    let valid = true;

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    // Name
    if (name === "") {
      setFieldError(nameInput, nameError, "Name is required.");
      valid = false;
    } else {
      setFieldError(nameInput, nameError, "");
    }

    // Email
    if (email === "") {
      setFieldError(emailInput, emailError, "Email is required.");
      valid = false;
    } else if (!isValidEmail(email)) {
      setFieldError(emailInput, emailError, "Enter a valid email.");
      valid = false;
    } else {
      setFieldError(emailInput, emailError, "");
    }

    // Message
    if (message === "") {
      setFieldError(messageInput, messageError, "Message is required.");
      valid = false;
    } else if (message.length < 10) {
      setFieldError(messageInput, messageError, "Message must be at least 10 characters.");
      valid = false;
    } else {
      setFieldError(messageInput, messageError, "");
    }

    return valid;
  }

  function showStatus(message, type) {
    statusEl.textContent = message;
    statusEl.className = `form-status show ${type}`;
  }

  function clearStatus() {
    statusEl.textContent = "";
    statusEl.className = "form-status";
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    clearStatus();

    const isValid = validateForm();

    if (!isValid) {
      showStatus("Please fix the errors above.", "error");
      return;
    }

    sendBtn.disabled = true;
    showStatus("Sending...", "success");

    setTimeout(() => {
      showStatus("Message sent successfully!", "success");
      form.reset();
      sendBtn.disabled = false;

      setFieldError(nameInput, nameError, "");
      setFieldError(emailInput, emailError, "");
      setFieldError(messageInput, messageError, "");
    }, 800);
  });

});

/* ============================
   FADE-IN ON SCROLL
============================ */

const fadeElements = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

fadeElements.forEach(el => observer.observe(el));