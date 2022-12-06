import { galleryItems } from './gallery-items.js';
// console.log(galleryItems);
const galleryEl = document.querySelector('.gallery');
// const cardsImg = createCardsImgMarkup(galleryItems);
// console.log(galleryEl);
function createCardsImgMarkup(img) {
  return img
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href='${original}'>
                  <img
                    class="gallery__image"
                    src='${preview}'
                    alt='${description}'/>
               </a>`;
    })
    .join('');
}
// console.log(imagesMarkup);
galleryEl.insertAdjacentHTML('afterbegin', createCardsImgMarkup(galleryItems));

// galleryEl.addEventListener('click', onClickGalleryImg);

// function onClickGalleryImg(evt) {
//   evt.preventDefault();
//   //   console.log(evt);
//   if (!evt.target.classList.contains('gallery__image')) {
//     return;
//   }
//   //   console.log(evt.target);
//   //   console.log(evt.target.alt);
//   //   console.log(evt.target.getAttribute('alt'));
// }
var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: `alt`,
  captionDelay: 250,
});
