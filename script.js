function escrevendoLetra(){
    function ativaLetra(element){
        const arrTexto = element.innerHTML.split('');
        element.innerHTML = '';
        arrTexto.forEach((letra, i) => {
            setTimeout(() => {
                element.innerHTML += letra;
            }, 75 * i);
        });
    }
    
    const titulo = document.querySelector('.digitando');
    
    ativaLetra(titulo);
}



escrevendoLetra();

function menuMobol() {
    const ativaMenu = document.querySelector('.fa-bars');
    const navMenu = document.querySelector('header .navegacao-primaria');

    ativaMenu.addEventListener('click', () => {
        ativaMenu.classList.toggle('fa-x');
        navMenu.classList.toggle('ativado');
    });
}

function sobreMim() {

    const divExperiencia = document.querySelectorAll('.experience-content div');
    const divEducation = document.querySelectorAll('.education-content div');

    divExperiencia[0].classList.add('ativo');
    divEducation[0].classList.add('ativo');

}

sobreMim();

let slideIndex = 0;

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("carousel-item");
    for (let i = 0; i < slides.length; i++) {
        if (slideIndex > 2 && slideIndex > i) {
            slides[i].style.transform = `translateX(${25 * (6-slideIndex)}rem)`;
        } else if (slideIndex > i) {
            slides[i].style.transform = `translateX(${25 * (6-slideIndex)}rem)`;
        } else {
            slides[i].style.transform = `translateX(-${25 * slideIndex}rem)`;
        }
    }
    slideIndex++;
    if(slideIndex > slides.length - 1) {
        slideIndex = 0;
    }
    setTimeout(showSlides, 2000); // Muda a imagem a cada 2 segundos
}

showSlides();