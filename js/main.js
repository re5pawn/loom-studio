function defaultStyles(nodeArray) {
	nodeArray.forEach(function(elem) {
		elem.removeAttribute('style');
		elem.classList.remove('active');
	});
}

function toggleItems(nodeItems, nodeControls, index) {
	for (var i = 0; i < nodeItems.length; i++) {
		nodeItems[i].style.display = 'none';
	}
	defaultStyles(nodeControls);
	nodeItems[index].style.display = 'block';
	nodeControls[index].classList.add('active');
}

// Slider

(function() {

	var slides = Array.prototype.slice.call(document.querySelectorAll('.slider-item'));
	var sliderBtnPrev = document.querySelector('.slider-btn-prev');
	var sliderBtnNext = document.querySelector('.slider-btn-next');
	var currentIndex = 0;
	var returnedIndex;

	function prevSlide() {
		sliderBtnNext.style.display = 'block';
		if (currentIndex === 0) {
			returnedIndex = slides.length - 1;
		} else {
			returnedIndex = currentIndex - 1;
		}
		slides[currentIndex].style.display = 'none';
		currentIndex = returnedIndex;
		slides[currentIndex].style.display = 'block';
	}

	function nextSlide() {
		if (currentIndex === slides.length - 1) {
			returnedIndex = 0;
		} else {
			returnedIndex = currentIndex + 1;
		}
		slides[currentIndex].style.display = 'none';
		currentIndex = returnedIndex;
		slides[currentIndex].style.display = 'block';
	}

	sliderBtnPrev.addEventListener('click', prevSlide, false);
	sliderBtnNext.addEventListener('click', nextSlide, false);

	// run slider with interval 2 seconds
	var intervalID = setInterval(prevSlide, 2000);
	// stop slider
	slides.forEach(function(elem) {
		elem.addEventListener('mouseover', function() {
			clearInterval(intervalID);
		});
	});

})();

// Section Process

(function() {

	var images = Array.prototype.slice.call(document.querySelectorAll('.process-item-img'));
	var imagesPositionX;
	var newPositionX;
	var processItem = Array.prototype.slice.call(document.querySelectorAll('.process-item'));
	var paragraphs = Array.prototype.slice.call(document.querySelectorAll('.process p'));

	function changeImage() {
		images.forEach(function(elem) {
			if (elem.className.indexOf('active') !== -1) {
				imagesPositionX = window.getComputedStyle(elem).backgroundPositionX;
				newPositionX = parseInt(imagesPositionX, 10) - 90;
				elem.style.backgroundPositionX = newPositionX + 'px';
			}
		});
	}
	changeImage();

	processItem.forEach(function(elem, i) {
		elem.addEventListener('click', function() {
			if (images[i].className.indexOf('active') === -1) {
				defaultStyles(images);
				images[i].classList.add('active');
				changeImage();
			}
			toggleItems(paragraphs, processItem, i);
		}, false);
	});

})();

// Section Reviews

(function() {

	var reviewControls = Array.prototype.slice.call(document.querySelectorAll('.control-elem'));
	var reviewItems = Array.prototype.slice.call(document.querySelectorAll('.review-item'));

	reviewControls.forEach(function(elem, i) {
		elem.addEventListener('click', function() {
			toggleItems(reviewItems, reviewControls, i);
		}, false);
	});

})();

// Main menu toggle button

(function() {

	var mainMenuBtn = document.querySelector('.main-menu-btn');
	var mainMenu = document.querySelector('.main-menu ul');

	mainMenuBtn.addEventListener('click', function() {
		if (mainMenu.style.display === 'block') {
			mainMenu.style.display = 'none';
		} else {
			mainMenu.style.display = 'block';
		}
	});

	window.addEventListener('resize', function() {
		if (document.body.clientWidth > 992) {
			mainMenu.style.display = 'block';
		} else {
			mainMenu.style.display = 'none';
		}
	});

})();