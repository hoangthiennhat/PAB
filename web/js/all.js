let html = document.querySelector('html');
let find = document.getElementById('modal-search');
// click button search
function showInputSearch() {
    html.style.overflow = 'hidden';
    find.style.transform = 'scale(1)';
}
// close button search
function closeSearch() {
    html.style.overflow = 'auto';
    find.style.transform = 'scale(0)';
}


// slide effect
    let nextBtn = document.getElementById('nextBtn');
    let prevBtn = document.getElementById('prevBtn');
    let carousel = document.querySelector('.carousel-slide');
    let item = document.querySelectorAll('.slide-item');
    let counter = 0;
        nextBtn.addEventListener('click', () => {
            console.log(counter)
            carousel.style.transition = 'transform 0.6s ease-in-out';
            counter++;
            carousel.style.transform = `translateX(-${counter * 20}%)`
    
    });
    prevBtn.addEventListener('click', () => {
        
        carousel.style.transition = 'transform 0.6s ease-in-out';
        counter++;
        carousel.style.transform = `translateX(${counter * 20}%)`
        console.log(counter)
});
    carousel.addEventListener('transitionend', () => {
        if (item[counter].id == 'last') {
            carousel.style.transition = 'none';
            counter = 0;
            carousel.style.transform = `translateX(-${counter * 20}%)`
        }

        if (item[counter].id == 'first') {
            carousel.style.transition = 'none';
            counter = carousel.length - 1 ;
            carousel.style.transform = `translateX(${counter * 20}%)`
            console.log(counter)
        }
        
    });
