import Template from '@template';

import css from './css';
import html from './html';

class WebButton extends Template {

    externalClass = false;

    constructor() {
        super({ css: css, html: html });
    };

};

window.customElements.define('web-button', WebButton);

export default WebButton;
