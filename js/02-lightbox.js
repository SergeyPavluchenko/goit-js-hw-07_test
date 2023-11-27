import { galleryItems } from "./gallery-items.js";
// import SimpleLightbox from "simplelightbox";
// Change code below this line
console.log(galleryItems);

const list = document.querySelector(".gallery");
console.log(list);

const images = galleryItems
  .map(
    ({ description, original, preview }) =>
      `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
    </li>`
  )
  .join(" ");

list.insertAdjacentHTML("beforeend", images);

let gallery = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionsData: "alt",
});
gallery.on("show.simplelightbox", function () {});
