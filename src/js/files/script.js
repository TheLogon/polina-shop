// Импорт функционала ==============================================================================================================================================================================================================================================================================================================================
// import { isMobile } from "./functions.js"
// import { formsModules } from "./forms/forms.js";

// select
if (document.querySelector(".select")) {
	let select = function () {
		let selectHeader = document.querySelectorAll(".select__header")
		let selectItem = document.querySelectorAll(".select__item")

		selectHeader.forEach(item => {
			item.addEventListener("click", selectToggle)
		})

		selectItem.forEach(item => {
			item.addEventListener("click", selectChoose)
		})

		function selectToggle() {
			this.parentElement.classList.toggle("is-active")
		}

		function selectChoose() {
			let text = this.innerText,
				select = this.closest(".select"),
				currentText = select.querySelector(".select__current")
			currentText.innerText = text
			select.classList.remove("is-active")
		}
	}

	select()
}

// Gallery product

if (document.querySelector(".product")) {
	let mainImg = document.querySelector(".product-zoom__img")
	const sliderImgProduct = document.querySelector(".product-thumbs__track")
	let thambs = document.querySelectorAll(".pt")

	// Скролл
	let isDown = false
	let startX
	let scrollLeft

	sliderImgProduct.addEventListener("mousedown", e => {
		isDown = true
		sliderImgProduct.classList.add("active")
		startX = e.pageX - sliderImgProduct.offsetLeft
		scrollLeft = sliderImgProduct.scrollLeft
	})
	sliderImgProduct.addEventListener("mouseleave", () => {
		isDown = false
		sliderImgProduct.classList.remove("active")
	})
	sliderImgProduct.addEventListener("mouseup", () => {
		isDown = false
		sliderImgProduct.classList.remove("active")
	})
	sliderImgProduct.addEventListener("mousemove", e => {
		if (!isDown) return
		e.preventDefault()
		const x = e.pageX - sliderImgProduct.offsetLeft
		const walk = (x - startX) * 1 //scroll-fast
		sliderImgProduct.scrollLeft = scrollLeft - walk
	})

	// Изменение картинки
	if (!sliderImgProduct.classList.contains("active")) {
		thambs.forEach(img => {
			img.addEventListener("click", () => {
				thambs.forEach(elem => {
					elem.classList.remove("active")
				})
				img.classList.add("active")
				mainImg.src = img.dataset.img
			})
		})
	}
}
