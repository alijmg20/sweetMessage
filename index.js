const genText = document.getElementById("gen-text")

genText.addEventListener("click", function() {
  let messages = [
    "Te amé, te amo y te amaré por siempre.",
    "Mi amor por ti es eterno.",
    "Cada momento contigo se siente como un sueño hecho realidad.",
    "Eres mi luz en un día nublado.",
    "Contigo, he encontrado mi para siempre.",
    "Tu amor me completa de formas que nunca imaginé posibles.",
    "Estar contigo hace que cada día sea una celebración.",
    "Me enamoro más de ti cada día.",
    "Eres el amor de mi vida.",
    "Haces que mi corazón dé un vuelco con solo una sonrisa.",
    "Mi amor por ti no tiene límites.",
    "Eres mi mayor aventura.",
    "En tus brazos, he encontrado mi hogar.",
    "Toda historia de amor es hermosa, pero la nuestra es mi favorita.",
    "Eres el regalo más preciado que he recibido.",
    "No puedo imaginar mi vida sin ti a mi lado.",
    "Amarte es la mejor decisión que he tomado.",
    "Tu amor es el ancla que me mantiene firme.",
    "Tú eres mi todo.",
    "Para siempre no es suficiente tiempo contigo.",
    "En cada latido de mi corazón, susurra tu nombre.",
    "Tu amor es el motor que impulsa mi existencia.",
    "Contigo, el tiempo se detiene y el mundo desaparece.",
    "Eres el sueño del que nunca quiero despertar.",
    "Cada día a tu lado es un regalo del cielo.",
    "Tu amor es el sol que ilumina mis días oscuros.",
    "Eres la melodía que llena mi alma de alegría.",
    "En tu mirada encuentro mi paz y mi felicidad.",
    "Tus abrazos son mi refugio en este mundo caótico.",
    "Cada beso tuyo es un universo de sensaciones.",
    "Eres mi destino y mi camino.",
    "Juntos, somos invencibles.",
    "Tu amor es la fuerza que me impulsa a seguir adelante.",
    "Eres mi inspiración en cada paso que doy.",
    "Con cada palabra tuya, mi corazón se llena de amor.",
    "En tu amor encuentro mi fortaleza.",
    "Eres la razón por la que creo en el amor verdadero.",
    "Nuestra historia de amor es un tesoro que atesoro en mi corazón.",
    "Eres el sueño hecho realidad que nunca supe que tenía.",
    "Te amo más allá de las palabras."
  ];
  const textEl = document.querySelector(".textMessage")
  textEl.textContent = messages[Math.floor( Math.random()*messages.length )]
})