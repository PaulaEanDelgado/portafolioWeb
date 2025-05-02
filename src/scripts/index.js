document.addEventListener("DOMContentLoaded", function () {
    var toggleBtn;
    var body;
    var savedTheme;
    var proyectos;
    var filtro;
    var form;
    var estado;
    var modalExito;
    var elementos;
    var observer;
  
    toggleBtn = document.getElementById("toggle-theme");
    body = document.body;
    savedTheme = localStorage.getItem("theme");
  
    if (savedTheme === "dark") {
      body.classList.add("dark-mode");
      toggleBtn.textContent = "☀️ Modo Claro";
      toggleBtn.classList.replace("btn-light", "btn-dark");
    }
  
    toggleBtn.addEventListener("click", function () {
      var isDark = body.classList.contains("dark-mode");
      body.classList.toggle("dark-mode");
      localStorage.setItem("theme", (isDark ? "dark" : "light"));
      toggleBtn.textContent = (isDark ? "☀️ Modo Claro" : "🌙 Modo Oscuro");
      toggleBtn.classList.toggle("btn-light");
      toggleBtn.classList.toggle("btn-dark");
    });
  
    proyectos = document.querySelectorAll("#proyectos tbody tr");
    filtro = document.createElement("select");
    filtro.className = "form-select mb-3";
    filtro.innerHTML =
      "<option value=\"todos\">Todos</option>" +
      "<option value=\"óptica\">Óptica</option>" +
      "<option value=\"gimnasio\">Gimnasio</option>";
    document.querySelector("#proyectos").prepend(filtro);
  
    filtro.addEventListener("change", function () {
      var valor = filtro.value;
      proyectos.forEach(function (fila) {
        var texto = fila.textContent.toLowerCase();
        var mostrar = (
          (valor === "todos" || texto.includes(valor))
            ? ""
            : "none"
        );
        fila.style.display = mostrar;
      });
    });
  
    form = document.getElementById("contact-form");
    estado = document.getElementById("estado-formulario");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      if (!form.checkValidity()) {
        e.stopPropagation();
        estado.textContent = "Por favor completa todos los campos correctamente.";
        estado.classList.remove("text-success");
        estado.classList.add("text-danger", "d-block");
        form.classList.add("was-validated");
        return;
      }
  
      modalExito = new bootstrap.Modal(document.getElementById("modalExito"));
      modalExito.show();
  
      estado.classList.remove("text-danger", "d-block");
      estado.classList.add("d-none");
  
      form.classList.remove("was-validated");
      form.reset();
    });
  
    elementos = document.querySelectorAll("section");
    observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, { threshold: 0.2 });
  
    elementos.forEach(function (el) {
      el.classList.add("reveal");
      observer.observe(el);
    });
  });
  