/* BodyLock
-----------------------------------------------------------------------------*/
export default function body_lock(delay) {
	let unlock = true;
	let body = document.querySelector("body");

	if (body.classList.contains("lock")) {
		body_lock_remove(delay);
	} else {
		body_lock_add(delay);
	}

	function body_lock_remove(delay) {
		let body = document.querySelector("body");

		 if (unlock) {
			 let lock_padding = document.querySelectorAll(".lp");

			 setTimeout(() => {
			 for (let index = 0; index < lock_padding.length; index++) {
				 const el = lock_padding[index];
				 el.style.paddingRight = "0px";
			 }
			 body.style.paddingRight = "0px";
			 body.classList.remove("lock");
			 }, delay);

			 unlock = false;
			 setTimeout(function () {
			 	unlock = true;
			 }, delay);
		 }
	 }

	 function body_lock_add(delay) {
		 let body = document.querySelector("body");

		 if (unlock) {
			 let lock_padding = document.querySelectorAll(".lp");

			 for (let index = 0; index < lock_padding.length; index++) {
				 const el = lock_padding[index];
				 el.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
			 }
			 body.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
			 body.classList.add("lock");

			 unlock = false;
			 setTimeout(function () {
				 unlock = true;
			 }, delay);
		 }
	 }
}

