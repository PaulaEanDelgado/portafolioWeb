document.addEventListener("DOMContentLoaded", () => {
    const habilidades = [
      "HTML5, CSS3, JavaScript, TypeScript",
      "React (JavaScript), Angular (TypeScript)",
      "Bootstrap, Tailwind CSS, Angular Material, Ant Design",
      "Consumo de APIs REST y visualización de datos",
      "Gestión de bases de datos SQL y proyectos en PHP",
      "Git, GitHub y control de versiones"
    ];
  
    const lista = document.getElementById("lista-habilidades");
  
    habilidades.forEach((habilidad) => {
      const li = document.createElement("li");
      li.textContent = habilidad;
      lista.appendChild(li);
    });
  });
  