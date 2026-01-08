import { LightningElement, track } from 'lwc';

export default class SimpleLwcDemo extends LightningElement {
    @track text = "";
    loadCount = 0;

    connectedCallback() {
        console.log("✅ LWC Connected");
        this.loadCount++;
    }

    renderedCallback() {
        console.log("🔁 Rendered again");
    }

    handleChange(event) {
        this.text = event.target.value;
        console.log("✍️ User typed:", this.text);
    }
}