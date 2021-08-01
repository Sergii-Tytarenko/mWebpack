import body_lock from "./bodylock";

/* Burger
-----------------------------------------------------------------------------*/
const body = document.querySelector('body'),
      mainHeader = document.querySelector('.header'),
      burger = document.querySelector('.burger'),
      burgerNav = document.querySelector('.aside-nav'),
      burgerNavLink = burgerNav.querySelectorAll('.aside-nav__link'),
			overlay = document.querySelector('.overlay');


/* Burger active
   Show burger nav
-----------------------------------------------------------------------------*/
burger.addEventListener('click', function () {
    if (burger) {
        burger.classList.toggle('active');
    }
    if ( burger.classList.contains('active') ) {
        showBurgerNav ();
    } else {
        closeBurgerNav ();
    }
});


/* Close menu when links is active
-----------------------------------------------------------------------------*/
for (let i = 0; i < burgerNavLink.length; i++) {
    burgerNavLink[i].addEventListener("click", function() {
        if(burgerNav.classList.contains('active')) {
            closeBurgerNav ();
        }
    });
}


/* Functions of burger nav
-----------------------------------------------------------------------------*/
function showBurgerNav () {
    burgerNav.classList.add('active');
    mainHeader.classList.add('active');
		overlay.classList.add('active');
    body_lock(0);
}

function closeBurgerNav () {
    burger.classList.remove('active');
    burgerNav.classList.remove('active');
    mainHeader.classList.remove('active');
		overlay.classList.remove('active');
    body_lock(0);
}

overlay.addEventListener('click', () => {
	closeBurgerNav()
});

