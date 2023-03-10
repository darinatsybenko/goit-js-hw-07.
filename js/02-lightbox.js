import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryContainer = document.querySelector('.gallery')

 const murkUp = createGalleryItem (galleryItems);

 galleryContainer.insertAdjacentHTML('beforeend', murkUp)
 const galleryEl = document.querySelector('.gallery');


 function createGalleryItem (galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
        return `
        <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>
        `;
    })
    .join('');
    };
    console.log(createGalleryItem);

    const lightbox = new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay: 250,});
    lightbox.on('show.simplelightbox')