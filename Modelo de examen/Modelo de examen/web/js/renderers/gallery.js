"use strict"

import { parseHTML } from "/js/utils/parseHTML.js";

import { bookRenderer } from "/js/renderers/book.js";

const galleryRenderer = {
    asCardGallery: function (books) {
        let galleryContainer = parseHTML('<div class="photo-gallery"></div>');

        let row = parseHTML('<div class="row"></div>');
        galleryContainer.appendChild(row);
        let counter = 0;
        for (let book of books) {
        let card = bookRenderer.asCard(book);
        row.appendChild(card);
        counter += 1;
        if (counter % 3 === 0) {
        row = parseHTML('<div class="row"></div>');
        galleryContainer.appendChild(row);
      }
    }
        console.log(counter);
        return galleryContainer;
    }
};

export {galleryRenderer};