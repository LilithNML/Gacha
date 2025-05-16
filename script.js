const mensajes = {
  romantico: [
    "Cada latido de mi corazón lleva tu nombre.",
    "Eres mi lugar favorito en el mundo.",
    "Contigo, cada día es el mejor regalo."
  ],
  sexy: [
    "Solo pienso en tus besos... y en todo lo que sigue.",
    "Esta noche, en mis sueños, serás solo mío.",
    "Tu voz me enciende más que mil velas."
  ],
  divertido: [
    "Eres tan mío que hasta el WiFi se pone celoso.",
    "Si fueras chocolate, ya te habría comido todo.",
    "Eres la única persona por la que compartiría mis papitas."
  ]
};

function mostrarSorpresa(categoria) {
  const resultado = document.getElementById("resultado");
  const lista = mensajes[categoria];
  const random = Math.floor(Math.random() * lista.length);
  resultado.classList.remove("visible");

  setTimeout(() => {
    resultado.textContent = lista[random];
    resultado.classList.add("visible");
  }, 300);
}
