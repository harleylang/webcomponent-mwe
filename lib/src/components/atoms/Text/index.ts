import css from './css';
import html from './html';

const template = document.createElement('template');

template.innerHTML = `<style>${css}</style>${html}`;

class WebText extends HTMLElement {

    externalClass = false;

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        if (this.shadowRoot !== null) {
            this.shadowRoot.appendChild(template.content.cloneNode(true));
        };
    };

    connectedCallback() {
        if (this.shadowRoot !== null) {
            let label = this.getAttribute('label');
            console.log(label)
            const text = this.shadowRoot.querySelector("span");
            if (text !== null && label !== null) {
                text.innerHTML = label;
            };
        };
    };

};

window.customElements.define('web-text', WebText);

export default WebText;