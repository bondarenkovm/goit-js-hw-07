import { galleryItems } from './gallery-items.js';
// console.log(galleryItems);
const galleryEl = document.querySelector('.gallery');
const cardsImg = createCardsImgMarkup(galleryItems);
// console.log(galleryEl);
function createCardsImgMarkup(img) {
  return img
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
          <a class="gallery__link" href='${original}'>
            <img
             class="gallery__image"
             src='${preview}'
             data-source='${original}'
             alt='${description}'/>
          </a>
      </div>`;
    })
    .join('');
}
// console.log(imagesMarkup);
galleryEl.insertAdjacentHTML('afterbegin', cardsImg);

galleryEl.addEventListener('click', onClickGalleryImg);

function onClickGalleryImg(evt) {
  evt.preventDefault();
  //   console.log(evt);
  if (!evt.target.classList.contains('gallery__image')) {
    return;
  }
  modalOpenImg(evt);
  //   console.log(evt.target);
  //   const instance = basicLightbox.create(
  //     `
  //     <img src="${evt.target.dataset.source}" width="800" height="600">
  // `,
  //     {
  //       onShow: () => {
  //         document.addEventListener('keydown', onEscapeKeyDown);
  //       },
  //       onClose: () => {
  //         document.removeEventListener('keydown', onEscapeKeyDown);
  //       },
  //     }
  //   );
  //   instance.show();

  //   function onEscapeKeyDown(evt) {
  //     // console.log(evt);
  //     if (evt.code === 'Escape') {
  //       instance.close();
  //     }
  //   }
}
function modalOpenImg(evt) {
  const instance = basicLightbox.create(
    `
    <img src="${evt.target.dataset.source}" width="800" height="600">
`,
    {
      onShow: () => {
        document.addEventListener('keydown', onEscapeKeyDown);
      },
      onClose: () => {
        document.removeEventListener('keydown', onEscapeKeyDown);
      },
    }
  );
  instance.show();

  function onEscapeKeyDown(evt) {
    // console.log(evt);
    // if (evt.code === 'Escape') {
    //   instance.close();
    // }
    if (evt.code !== 'Escape') {
      return;
    }
    // console.log(evt);
    instance.close();
  }
}
