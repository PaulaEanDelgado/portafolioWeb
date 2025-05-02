document.addEventListener("DOMContentLoaded", () => {
  // 🌙 MODO OSCURO
  const toggleBtn = document.getElementById("toggle-theme");
  const body = document.body;
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    body.classList.add("dark-mode");
    toggleBtn.textContent = "☀️ Modo Claro";
    toggleBtn.classList.replace("btn-light", "btn-dark");
  }

  toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    const isDark = body.classList.contains("dark-mode");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    toggleBtn.textContent = isDark ? "☀️ Modo Claro" : "🌙 Modo Oscuro";
    toggleBtn.classList.toggle("btn-light");
    toggleBtn.classList.toggle("btn-dark");
  });

  // 🗂️ FILTRO DE PROYECTOS
  const proyectos = document.querySelectorAll("#proyectos tbody tr");
  const filtro = document.createElement("select");
  filtro.className = "form-select mb-3";
  filtro.innerHTML = `
      <option value="todos">Todos</option>
      <option value="óptica">Óptica</option>
      <option value="gimnasio">Gimnasio</option>
    `;
  document.querySelector("#proyectos").prepend(filtro);

  filtro.addEventListener("change", () => {
    const valor = filtro.value;
    proyectos.forEach((fila) => {
      const texto = fila.textContent.toLowerCase();
      fila.style.display =
        valor === "todos" || texto.includes(valor) ? "" : "none";
    });
  });

  // 💬 FORMULARIO DE CONTACTO SIMULADO (con validación Bootstrap)
  const form = document.getElementById("contact-form");
  const estado = document.getElementById("estado-formulario");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!form.checkValidity()) {
      e.stopPropagation();
      estado.textContent = "Por favor completa todos los campos correctamente.";
      estado.classList.remove("text-success");
      estado.classList.add("text-danger", "d-block");
      form.classList.add("was-validated");
      return;
    }

    // Si pasa la validación
    const modalExito = new bootstrap.Modal(
      document.getElementById("modalExito")
    );
    modalExito.show();

    estado.classList.remove("text-danger", "d-block");
    estado.classList.add("d-none");

    form.classList.remove("was-validated");
    form.reset();
  });

  // ✨ SCROLL REVEAL
  const elementos = document.querySelectorAll("section");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.2 }
  );

  elementos.forEach((el) => {
    el.classList.add("reveal");
    observer.observe(el);
  });
});
