const Slides = document.querySelector('.slide');
const Images = document.querySelectorAll('.slide img');

//BUTTONS
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//counter
let counter = 1;
const size = Images[0].clientWidth;

Slides.style.transform = 'translate(' + (-size * counter ) + 'px)';

//BUTTON Listeners

nextBtn.addEventListener('click', () => {
	if(counter >= Images.length -1)
		return;
	Slides.style.transition = "transform 1s ease-in-out";
	counter++;
	Slides.style.transform = 'translateX(' + (-size * counter ) + 'px)';
});

prevBtn.addEventListener('click', () => {
	if(counter <= 0)
		return;
	Slides.style.transition = "transform 1s ease-in-out";
	counter--;
	Slides.style.transform = 'translateX(' + (-size * counter ) + 'px)';
});

Slides.addEventListener('transitionend', () => {
	if(Images[counter].id === 'lastClone') {
		Slides.style.transition = "none";
		counter = Images.length -2;
		Slides.style.transform = 'translateX(' + (-size * counter ) + 'px)';
	}
	if(Images[counter].id === 'firstClone') {
		Slides.style.transition = "none";
		counter = Images.length -counter;
		Slides.style.transform = 'translateX(' + (-size * counter ) + 'px)';
	}
});