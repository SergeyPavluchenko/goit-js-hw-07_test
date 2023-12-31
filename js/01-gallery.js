import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);

const list = document.querySelector(".gallery");

const images = galleryItems
  .map(
    ({ original, description, preview }) =>
      `<li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
        </li>`
  )
  .join(" ");

list.insertAdjacentHTML("beforeend", images);

list.addEventListener("click", onClick);

function onClick(eve) {
  eve.preventDefault();
  if (!eve.target.dataset) {
    return;
  }
  const instance = basicLightbox.create(`
    <img src="${eve.target.dataset.source}" width="800" height="600">
`);
  instance.show(eve.target.dataset.source);
  document.addEventListener("keydown", (eve) => {
    eve.preventDefault();
    if (eve.code !== "Escape") {
      return;
    }
    instance.close();
  });
}
