const photo = document.querySelector('#photo');
const nextBtn = document.querySelector('#next-btn');
const prevBtn = document.querySelector('#prev-btn');
const showCurrentPhoto = document.querySelector('#current-photo');

const photos = [
	'img/image-1.jpg',
	'img/image-2.jpg',
	'img/image-3.jpg',
	'img/image-4.jpg',
	'img/image-5.jpg',
	'img/image-6.jpg',
	'img/image-7.jpg',
];

class Slideshow {
	constructor(array, showCurrentPhoto) {
		this.photos = array;
		this.showCurrentPhoto = showCurrentPhoto;
		this.currentPhoto = 1;
	}
	nextPhoto() {
		if (this.currentPhoto >= photos.length) {
			this.currentPhoto = 1;
			photo.setAttribute('src', `img/image-${this.currentPhoto}.jpg`);
		} else {
			this.currentPhoto++;
			photo.setAttribute('src', `img/image-${this.currentPhoto}.jpg`);
		}
		this.updateShowCurrentPhoto();
	}
	prevPhoto() {
		if (this.currentPhoto === 1) {
			this.currentPhoto = this.photos.length;
			photo.setAttribute('src', `img/image-${this.currentPhoto}.jpg`);
		} else {
			this.currentPhoto--;
			photo.setAttribute('src', `img/image-${this.currentPhoto}.jpg`);
		}
		this.updateShowCurrentPhoto();
	}
	updateShowCurrentPhoto() {
		this.showCurrentPhoto.innerText = `1/${this.photos.length}`;
		this.showCurrentPhoto.innerText = `${this.currentPhoto}/${this.photos.length}`;
	}
}

const slideshow = new Slideshow(photos, showCurrentPhoto);

slideshow.updateShowCurrentPhoto();

nextBtn.addEventListener('click', () => {
	slideshow.nextPhoto();
});

prevBtn.addEventListener('click', () => {
	slideshow.prevPhoto();
});
