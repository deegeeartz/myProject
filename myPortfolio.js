//header effect
const navButton = document.querySelector('.ham');
const navList = document.querySelector('.lister');
console.log(navButton.innerHTML);

navButton.addEventListener('click', () => {
    if (navButton.innerHTML == "=") {

        navList.style.display = "flex";
        navList.style.transition = "0.8s ease-in-out";
        navButton.innerHTML = "❌";
        console.log("click")
    } else {
        navList.style.transition = "0.2s ease-in-out";
        navList.style.display = "none";
        navButton.innerHTML = "=";

    }
})

const nextEl = document.querySelector('#nextEl');
const prevEl = document.querySelector('#prevEl');
const sliderEl = document.querySelectorAll('.slider');
let position = 0;
let index

console.log(sliderEl.length);
//slides effect
function slides() {
    if (position > 5 || position < 0) {
        position = 0
    }
    for (let i = 0; i < sliderEl.length; i++) {
        index = i;
        // console.log(index);
        sliderEl.forEach(slider => {
            if (position == index) {
                sliderEl[position].style.display = "block";
                // console.log(index);
            } else {
                sliderEl[index].style.display = "none";
            }
        });
    }

}
slides();

nextEl.addEventListener('click', () => {
    position++;
    slides();
    console.log(position);
});
prevEl.addEventListener('click', () => {
    position--;
    slides();
    console.log(position);
});