/* import css from './css';
import html from './html';

const template = document.createElement('template');

template.innerHTML = `<style>${css}</style>${html}`;

class WebButton extends HTMLElement {

    externalClass = false;

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        if (this.shadowRoot !== null) {
            this.shadowRoot.appendChild(template.content.cloneNode(true));
        };
    };

};

window.customElements.define('web-button', WebButton);

export default WebButton;
 */

class Template extends HTMLElement {

    externalClass = false;

    constructor({
        css,
        html,
    }:{
        css: string;
        html: string;
    }) {
        super();
        const template = document.createElement('template');
        template.innerHTML = `<style>${css}</style>${html}`;
        this.attachShadow({mode: 'open'});
        if (this.shadowRoot !== null) {
            this.shadowRoot.appendChild(template.content.cloneNode(true));
        };
    };

};

export default Template;
