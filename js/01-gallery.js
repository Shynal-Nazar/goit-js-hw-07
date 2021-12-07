import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const galaryCreate = createGalleryItem(galleryItems);

gallery.insertAdjacentHTML("beforeend", galaryCreate);

function createGalleryItem(galleryItems) {
  return galleryItems
    .map(({ original, preview, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}

const onGalleryClick = (event) => {
  event.preventDefault();
  if (event.target.classList.contains("gallery")) return;
  const sourceOriginalImg = event.target.dataset.source;
  const instance = basicLightbox.create(`
    <img src="${sourceOriginalImg}"width="800" height="600">`);
  instance.show();

  if (instance.show()) {
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        instance.close();
      }
    });
  }
};

gallery.addEventListener("click", onGalleryClick);
