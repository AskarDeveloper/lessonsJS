"use strict";

class Options {
    constructor(height, width, bg, fontSize, textAlign ) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
    addToDocument() {
        let elem = document.createElement('div');
        elem.textContent = 'Это 10-ый урок';
        elem.style.cssText = `width: ${this.width}; height: ${this.height}; background: ${this.bg}; font-size: ${this.fontSize}; text-align: ${this.textAlign};`;
        document.body.appendChild(elem);
    }
}

let div = new Options('100px', 'auto', 'grey', '45px', 'center');

div.addToDocument();