let tab1 = document.getElementById('post-1-tab');
let tab2 = document.getElementById('post-2-tab');
let tab3 = document.getElementById('post-3-tab');
let tab4 = document.getElementById('post-4-tab');
let main = document.getElementById('main-post');

function activator() {
	tab1.classList.remove('active');
	tab2.classList.remove('active');
	tab3.classList.remove('active');
	tab4.classList.remove('active');
	this.classList.add('active');
};


function show() {
	let src = this.firstElementChild.firstElementChild.firstElementChild.src;
	let title = this.lastElementChild.lastElementChild.lastElementChild.innerText;
	main.firstElementChild.style.backgroundImage = `url(${src})`;
	main.lastElementChild.lastElementChild.lastElementChild.innerHTML = `${title}`;
};

tab1.addEventListener('click', activator);
tab2.addEventListener('click', activator);
tab3.addEventListener('click', activator);
tab4.addEventListener('click', activator);

tab1.addEventListener('click', show);
tab2.addEventListener('click', show);
tab3.addEventListener('click', show);
tab4.addEventListener('click', show);
	

	




