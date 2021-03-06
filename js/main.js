'use strict';

var body = document.querySelector('.body');
var buttonMenu = document.querySelector('.header__button');
var close = document.querySelector('.close');

function openMenu(){
	body.classList.add('menu-visible');
}

function closeMenu(){
	body.classList.remove('menu-visible');
}

buttonMenu.addEventListener('click', openMenu);
close.addEventListener('click', closeMenu);

var links = document.querySelectorAll('.nav-links');
for (var i = 0; i < links.length; i++) {
	links[i].addEventListener('click', closeMenu);
}

var click = document.querySelector('.burger');
click.addEventListener('click', closeMenu);

var work = document.querySelector('.portfolio__img');
