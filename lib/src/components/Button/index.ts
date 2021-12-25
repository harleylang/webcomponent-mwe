import toggleStyling from './toggleStyling';

import styles from './styles';

const template = document.createElement('template');

template.innerHTML = `
    <style>${styles}</style>
    <button></button>
    <span></span>
`;

class WebButton extends HTMLElement {

    externalClass = false;

    // No need for connectedCallback, see: https://stackoverflow.com/a/40494899/14198287
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        if (this.shadowRoot !== null) {
            this.shadowRoot.appendChild(template.content.cloneNode(true));
            const button = this.shadowRoot.querySelector("button");
            if (button !== null) {
                button.addEventListener("click", this.handleClick);
                button.innerHTML = 'Toggle styling!';
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

window.customElements.define('web-button', WebButton);

export default WebButton;
