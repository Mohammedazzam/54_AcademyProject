class OneScroll {
	constructor(selector) {
		this.selector = selector;
	}
	getAllSections() {
		let sections = document.querySelectorAll(`${this.selector} > .onescroll-container > .onescroll-section`);
		return sections;
	}
	getHeightSection() {
		let sections = document.querySelectorAll(`${this.selector} > .onescroll-container > .onescroll-section`);
		return sections[0].clientHeight;
	}
	getContainer() {
		return document.querySelector(`${this.selector} > .onescroll-container`);
	}
	getContainerCurrentPosition() {
		return parseInt(this.getContainer().style.bottom);
	}
	setInitialContainerPosition() {
		let container = this.getContainer();
		container.style.bottom = 0;
	}
	moveDown() {
		let container = this.getContainer();
		let currentPosition = this.getContainerCurrentPosition();
		let heightOfEachSection = this.getHeightSection();
		container.style.bottom = (currentPosition + heightOfEachSection) + 'px';
	}
	moveUp() {
		let container = this.getContainer();
		let currentPosition = this.getContainerCurrentPosition();
		let heightOfEachSection = this.getHeightSection();
		container.style.bottom = (currentPosition - heightOfEachSection) + 'px';
	}
	moveByIndex(number) {
		let container = this.getContainer();
		let heightOfEachSection = this.getHeightSection();
		container.style.bottom = (heightOfEachSection * number) + 'px';
	}
	init() {
		let sections = this.getAllSections();
		let mediaQueryMobile = window.matchMedia('(max-width: 768px)');
		this.setInitialContainerPosition();

		const moveSection = (event) => {
			if (event.deltaY < 0) {
				if (this.getContainerCurrentPosition() !== 0) {
					this.moveUp();	
					document.removeEventListener('wheel', moveSection);
					setTimeout(function() {
						document.addEventListener('wheel', moveSection);
					}, 700)
				}
			}
			else if (event.deltaY > 0) {
				if (this.getContainerCurrentPosition() < (this.getHeightSection() * (sections.length - 1))) {
					this.moveDown();	
					document.removeEventListener('wheel', moveSection);
					setTimeout(function() {
						document.addEventListener('wheel', moveSection);
					}, 700)
				}
			}
			else {
				return false;
			}
			event.preventDefault();
		}

		const moveSectionForMobile = () => {
			// detecting touch event only available for device touch screen A.K.A Mobile
			let touchStartY, touchEndY;
			
			document.addEventListener('touchstart', (event) => {
				touchStartY = event.changedTouches[0].screenY;
			}, false);

			document.addEventListener('touchend', (event) => {
				touchEndY = event.changedTouches[0].screenY;
				if (touchEndY > touchStartY) {
					if (this.getContainerCurrentPosition() !== 0) {
						this.moveUp();	
					}
				}
				else if (touchEndY < touchStartY) {
					if (this.getContainerCurrentPosition() < (this.getHeightSection() * (sections.length - 1))) {
						this.moveDown();	
					}
				}
			}, false);

		}

		if (mediaQueryMobile.matches) {
			moveSectionForMobile();
		}
		else {
			document.addEventListener('wheel', moveSection, false);
		}
	}
}
