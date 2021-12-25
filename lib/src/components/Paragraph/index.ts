import styles from './styles';

const template = document.createElement('template');

template.innerHTML = `
    <style>${styles}</style>
    <p></p>
`;

class WebParagraph extends HTMLElement {

    externalClass = false;

    // No need for connectedCallback, see: https://stackoverflow.com/a/40494899/14198287
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
            const p = this.shadowRoot.querySelector("p");
            if (p !== null && label !== null) {
                p.innerHTML = label;
            };
        };
    };

};

window.customElements.define('web-paragraph', WebParagraph);

export default WebParagraph;
