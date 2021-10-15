import Other from './other.js';

const bodyTemplate = document.createElement("template");
bodyTemplate.innerHTML = `
<style>
</style>

<h1>Test Component</h1>
<p class="value"></p>
`;


export default class MyComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(bodyTemplate.content.cloneNode(true));
        this._other = new Other();
    }

    connectedCallback() {
        console.log("MyComponent instance connected.");
        this.shadowRoot.querySelector(".value").innerText = `Other Value: ${this._other.value}`;
    }
}

window.customElements.define("my-component", MyComponent);
