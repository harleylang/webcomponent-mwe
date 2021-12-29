import Template from '@template';

import attrs from './attrs';
import css from './css';
import html from './html';

class WebText extends Template {
    constructor() {
        super({ 
            attrs: attrs, 
            css: css, 
            html: html 
        });
    };
};

window.customElements.define('web-text', WebText);

export default WebText;