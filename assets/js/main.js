
let button = document.querySelector('#button');
let wicki = document.querySelector('.umwickeln');
let counter = 0;

button.addEventListener('click', (ele) => {
    let divi = document.createElement('div');
    divi.classList.add('rechteck');
    if (counter == 0 || counter % 10 == 0) {
        divi.classList.add('weiss');
    }
    let counti = document.createTextNode(counter);
    divi.appendChild(counti);
    wicki.appendChild(divi);
    counter++;
});