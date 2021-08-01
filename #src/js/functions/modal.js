import body_lock from "./bodylock";

/* Modal Windows
-----------------------------------------------------------------------------*/
let modalLinks = document.querySelectorAll('.modal-link');
const overlay = document.querySelector('.overlay');

if (modalLinks.length > 0) {
		for (let i = 0; i < modalLinks.length; i++) {
			modalLinks[i].addEventListener('click', (e) => {
				let linkTarget = e.target.dataset.modal,
				modalWindow = document.querySelector(`${linkTarget}`);

				modalActive(modalWindow);
			});

		}
}

function modalActive (target) {
	if (target) {
		modalShow (target);
		let closeBtn = target.querySelector('.modal__close');
			closeBtn.addEventListener('click', () => {
			modalClose (target);
		});

		overlay.addEventListener('click', () => {
			modalClose (target);
		});
		document.addEventListener('keydown', function (e) {
			if (e.code === 'Escape') {
				modalClose (target);
			}
		});
	}
}

function modalShow (target) {
	target.classList.add('modal-show');
	overlay.classList.add('active');
	body_lock(0);
}

function modalClose (target) {
	target.classList.remove('modal-show');
	overlay.classList.remove('active');
	body_lock(0);
}
