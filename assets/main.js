const card1 = document.getElementById('card1');
const card2 = document.getElementById('card2');
const card3 = document.getElementById('card3');
const card4 = document.getElementById('card4');

const loadImage = (entries, observer) => {
    // console.log(entries);

    entries.forEach(entry => {
        if(entry.isIntersecting){
            console.log('la imagen esta en el viuport')
            entry.target.classList.add('visible');
        }
    });
}

const observer = new IntersectionObserver(loadImage, {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: 1.0,
});

observer.observe(card1);
observer.observe(card2);
observer.observe(card3);
observer.observe(card4);