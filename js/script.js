const btnEntrar = document.getElementById("btnEntrar");
const music = document.getElementById("bgMusic");

btnEntrar.addEventListener("click", () => {

    music.play();

    document.querySelector(".story").scrollIntoView({
        behavior:"smooth"
    });

});

function confirmarPresenca(){

    let nome = document.getElementById("nome").value;
    let adultos = document.getElementById("adultos").value;
    let criancas = document.getElementById("criancas").value;

    let msg =
`Olá!

Confirmo presença no aniversário de 2 anos da Amália.

Nome: ${nome}
Adultos: ${adultos}
Crianças: ${criancas}

👑✨`;

    let url =
`https://wa.me/5566996632914?text=${encodeURIComponent(msg)}`;

    window.open(url,'_blank');
}

function abrirMapa(){

    window.open(
        "https://www.google.com/maps/search/?api=1&query=Condominio+Unique+Higienopolis+Rondonopolis",
        "_blank"
    );
}

const festa = new Date("August 2, 2026 17:00:00").getTime();

setInterval(() => {

    let agora = new Date().getTime();

    let distancia = festa - agora;

    let dias = Math.floor(distancia/(1000*60*60*24));

    let horas = Math.floor(
        (distancia%(1000*60*60*24))
        /(1000*60*60)
    );

    let minutos = Math.floor(
        (distancia%(1000*60*60))
        /(1000*60)
    );

    document.getElementById("timer").innerHTML =
        `${dias} dias ${horas}h ${minutos}min`;

},1000);


let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));

    if (index >= slides.length) slideIndex = 0;
    if (index < 0) slideIndex = slides.length - 1;

    slides[slideIndex].classList.add("active");
}

nextBtn.addEventListener("click", () => {
    slideIndex++;
    showSlide(slideIndex);
});

prevBtn.addEventListener("click", () => {
    slideIndex--;
    showSlide(slideIndex);
});


const sparkleContainer = document.querySelector(".sparkles");

function createSparkle() {
    const sparkle = document.createElement("div");
    sparkle.classList.add("sparkle");

    sparkle.style.left = Math.random() * 100 + "vw";
    sparkle.style.top = Math.random() * 100 + "vh";
    sparkle.style.animationDuration = (Math.random() * 2 + 1) + "s";

    sparkleContainer.appendChild(sparkle);

    setTimeout(() => {
        sparkle.remove();
    }, 2000);
}

setInterval(createSparkle, 150);

function createGlitter() {
    const glitter = document.createElement("div");
    glitter.classList.add("glitter");

    glitter.style.left = Math.random() * 100 + "vw";
    glitter.style.animationDuration = (Math.random() * 3 + 2) + "s";

    document.body.appendChild(glitter);

    setTimeout(() => {
        glitter.remove();
    }, 5000);
}

setInterval(createGlitter, 100);
