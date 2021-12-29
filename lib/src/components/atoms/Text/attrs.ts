import Text from '.';
import IAttrs from '@template/IAttrs';

function setLabel(this: Text) {
    if (this.shadowRoot !== null) {
        let label = this.getAttribute('label');
        const text = this.shadowRoot.querySelector("span");
        if (text !== null && label !== null) {
            text.innerHTML = label;
        };
    };
    return this;
};

const attrs: IAttrs = {
    label: setLabel 
};

export default attrs;