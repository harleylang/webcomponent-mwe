import { readFileSync } from 'fs';
import template from '@template';

import toggleStyling from './toggleStyling';

const css = readFileSync('css.css').toString();
const html = readFileSync('html.html').toString();
const WebButtonLabel = template({ css: css, html: html });

/* class WebButtonLabel extends Template {

    externalClass = false;

    constructor() {
        super({ css: css, html: html });
        if (this.shadowRoot !== null) {
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

}; */

window.customElements.define('web-button-label', WebButtonLabel);

export default WebButtonLabel;
