// Função para alternar entre modo claro e escuro
function toggleMode() {
    const body = document.body;
    const button = document.getElementById("toggle-mode");
  
    body.classList.toggle("dark-mode");
  
    if (body.classList.contains("dark-mode")) {
      button.textContent = "🌞"; // Ícone do modo claro
    } else {
      button.textContent = "🌙"; // Ícone do modo escuro
    }
  }
// Função para carregar o modo inicial
document.addEventListener("DOMContentLoaded", () => {
   const savedMode = localStorage.getItem("mode");
  
   if (savedMode === "dark") {
     document.body.classList.add("dark-mode");
     document.getElementById("toggle-mode").textContent = "🌞";
   } else {
     document.body.classList.remove("dark-mode");
     document.getElementById("toggle-mode").textContent = "🌙";
   }
});
  
