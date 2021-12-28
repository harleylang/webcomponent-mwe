import toggleStyling from './toggleStyling';

import css from './css';
import html from './html';

const template = document.createElement('template');

template.innerHTML = `<style>${css}</style>${html}`;

class WebButtonLabel extends HTMLElement {

    externalClass = false;

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        if (this.shadowRoot !== null) {
            this.shadowRoot.appendChild(template.content.cloneNode(true));
            const button = this.shadowRoot.querySelector("button");
            if (button !== null) {
                button.addEventListener("click", this.handleClick);
            };
            this.toggleStyling();
        };
    };

    handleClick = (event: MouseEvent) => {
        this.externalClass = !this.externalClass;
        this.toggleStyling();
    };

    toggleStyling = toggleStyling;

};

window.customElements.define('web-button-label', WebButtonLabel);

export default WebButtonLabel;
