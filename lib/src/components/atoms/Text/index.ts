import Template from '@template';

import css from './css';
import html from './html';

class WebText extends Template {

    externalClass = false;

    constructor() {
        super({ css: css, html: html });
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