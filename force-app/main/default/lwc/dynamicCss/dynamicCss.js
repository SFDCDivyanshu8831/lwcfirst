import { LightningElement } from 'lwc';

export default class DynamicCss extends LightningElement {
    pColour = "chocolate-colour";

    addCssHandler(event) {
        let element = this.template.querySelector("p")
        element.classList.add("green-border");
    }

    removeCssHandler(event) {
        let element = this.template.querySelector("p")
        element.classList.remove("green-border");
    }

    toggleCssHandler(event) {
        let element = this.template.querySelector("p")
        element.classList.toggle("green-border");
    }


}