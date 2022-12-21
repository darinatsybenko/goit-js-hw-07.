import { galleryItems } from './gallery-items.js';
console.log(galleryItems); 

 const galleryContainer = document.querySelector('.gallery')
 
 const murkUp = createGalleryItem (galleryItems);
 
 galleryContainer.insertAdjacentHTML('beforeend', murkUp)
const galleryEl = document.querySelector('.gallery');
galleryEl.addEventListener('click', onClick)


function createGalleryItem (galleryItems) {
return galleryItems.map(({preview, original, description}) => {
    return `
    <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
    `;
})
.join('');
};
console.log(createGalleryItem);

function onClick(evt) {
    evt.preventDefault();
const urlImg = evt.target.getAttribute("data-source")
    const instance = basicLightbox.create(`
   
    <img
    
      src="${urlImg}"
      width="100"
      height="100"
    />
   
`);
instance.show();
};





 