import Button from '.';

const toggleStyling = function (this: Button) {
    if (this.shadowRoot !== null) {
        const button = this.shadowRoot.querySelector("button");
        if (button !== null) {
            if (this.externalClass) {
                button.classList.add('external');
            } else {
                button.classList.remove('external');
            };
        };

        const span = this.shadowRoot.querySelector('span');
        if (span !== null) {
            if (this.externalClass) {
                span.innerHTML = 'External styling <b>is linked</b> to this button.'
            } else {
                span.innerHTML = 'External styling is not linked to this button.'
            };
        };
    };
};

export default toggleStyling;
