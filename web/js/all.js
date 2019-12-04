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

// slide
let i = 0;
let position = 0;
function moveSlideRight() {
    // offsetLeft
    
    let allItem = document.querySelectorAll('.slide-item');
    console.log(i)    
    allItem[i].style.left = '-100%';
        if (i == 1) {
            
            // allItem[1].style.display = 'block';
            // allItem[2].style.display = 'block';
            allItem[0].style.display = 'none';
            
            allItem[2].style.left = '0';
            allItem[0].style.left = '100%';
            allItem[0].style.display = 'block';
            
        } else if (i == 2) {
            
            
            // allItem[0].style.display = 'block';
            // allItem[2].style.display = 'block';
            allItem[1].style.display = 'none';
            allItem[0].style.left = '0';
            allItem[1].style.left = '100%';
            allItem[1].style.display = 'block';
            i = -1;
        } else {
            // allItem[0].style.display = 'block';
            // allItem[1].style.display = 'block';
            allItem[2].style.display = 'none';
            allItem[1].style.left = '0';
            allItem[2].style.left = '100%';
            allItem[2].style.display = 'block';
        }
        i++;
}