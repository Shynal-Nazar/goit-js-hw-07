import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const refs = {
  gallery: document.querySelector(".gallery"),
  image: document.querySelector(".gallery__link"),
  //   lightbox: document.querySelector(".lightbox"),
  //   btn: document.querySelector('[data-action="close-lightbox"]'),
  //   modal: document.querySelector(".lightbox__content"),
  lightbox__image: document.querySelector(".gallery__item"),
};
const galaryCreate = createGalleryItem(galleryItems);

refs.gallery.insertAdjacentHTML("beforeend", galaryCreate);

function createGalleryItem(galleryItems) {
  return galleryItems
    .map(({ original, preview, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="large-image.jpg"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}

refs.gallery.addEventListener("click", onGalleryClick);

function onGalleryClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  if (event.target.nodeName === "IMG") {
    refs.image.classList.add("is-open");
    refs.lightbox__image.src = event.target.getAttribute("data-source");
    refs.lightbox__image.alt = event.target.alt;
  }
  window.addEventListener("keyup", clickKey);
}
