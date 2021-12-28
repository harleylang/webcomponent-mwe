import Template from '@template';

function setLabel(this: Template) {
    if (this.shadowRoot !== null) {
        let label = this.getAttribute('label');
        console.log(label)
        const text = this.shadowRoot.querySelector("span");
        if (text !== null && label !== null) {
            text.innerHTML = label;
        };
    };
};

const attrs = {
    'label': setLabel 
};

export default attrs;