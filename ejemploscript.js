document.addEventListener("DOMContentLoaded", () => {
  // Navegación entre páginas (respeta espacios en nombres)
  document.querySelectorAll(".btn.animado").forEach(boton => {
    boton.addEventListener("click", () => {
      location.href = boton.dataset.link;
    });
  });

  // Obtener el nombre del archivo actual (decodificado)
  const path = window.location.pathname;
  const filename = decodeURIComponent(path.split("/").pop()).toLowerCase(); // e.g. "pagina 1.html"

  // ---------- INDEX (pagina principal) ----------
  if (filename === "" || filename === "index.html") {
    alert("¡Bienvenido a la página principal!");
    const nombre = prompt("¿Cuál es tu nombre?");
    const saludo = document.getElementById("saludo");
    const titulo = document.getElementById("titulo");
    if (nombre && nombre.trim().length > 0) {
      const clean = nombre.trim();
      saludo.textContent = `¡Hola ${clean}! Bienvenido a mi sitio web.`;
      if (titulo) titulo.textContent = `Hola ${clean}`;
    } else {
      if (saludo) saludo.textContent = "Bienvenido visitante.";
    }
  }

  // ---------- PAGINA 1 (Galería) ----------
  if (filename === "pagina 1.html") {
    alert("¡Bienvenido a la galería de imágenes!");
    const edadStr = prompt("¿Cuál es tu edad?");
    const edad = parseInt(edadStr, 10);
    if (!isNaN(edad)) {
      if (edad > 20) {
        alert("Eres mayor de 20 años.");
      } else {
        alert("Eres menor de 20 años.");
      }
    } else {
      alert("No ingresaste una edad válida.");
    }
  }

  // ---------- PAGINA 2 (Tabla de operaciones) ----------
  if (filename === "pagina 2.html") {
    alert("Bienvenido a la tabla de operaciones.");

    const resultado = document.getElementById("resultado");

    document.querySelectorAll(".calc").forEach(btn => {
      btn.addEventListener("click", () => {
        const operacion = btn.dataset.op;
        let r = null;

        if (operacion === "multiplicacion") {
          const a = parseFloat(prompt("Ingrese el primer número:"));
          const b = parseFloat(prompt("Ingrese el segundo número:"));
          if (!isNaN(a) && !isNaN(b)) {
            r = a * b;
          } else {
            alert("Por favor ingresa números válidos.");
          }

        } else if (operacion === "exponente") {
          const n = parseFloat(prompt("Ingrese un número:"));
          if (!isNaN(n)) {
            r = n ** 2;
          } else {
            alert("Por favor ingresa un número válido.");
          }

        } else if (operacion === "resta") {
          const a = parseFloat(prompt("Ingrese el primer número:"));
          const b = parseFloat(prompt("Ingrese el segundo número:"));
          if (!isNaN(a) && !isNaN(b)) {
            r = a - b;
          } else {
            alert("Por favor ingresa números válidos.");
          }
        }

        if (r !== null) {
          if (resultado) resultado.textContent = `Resultado: ${r}`;
          alert(`Resultado: ${r}`);
        }
      });
    });
  }
});
