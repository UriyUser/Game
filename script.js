let hero = document.querySelector('.hero'),
	ground = document.querySelector('.ground'),
	cloud1 = document.querySelector('.cloud1'),
	cloud2 = document.querySelector('.cloud2');
	forest = document.querySelector('.forest');

document.addEventListener('keydown', move);
document.addEventListener('keyup', stop);

function move(e) {
	if(e.key == 'ArrowRight') {
		hero.classList.add('run');
		ground.classList.add('run');
		cloud1.classList.add('run');
		cloud2.classList.add('run');
		forest.classList.add('run');
	}
}

function stop() {
	hero.classList.remove('run');
	ground.classList.remove('run');
	cloud1.classList.remove('run');
	cloud2.classList.remove('run');
	forest.classList.remove('run');
}



