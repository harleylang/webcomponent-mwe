import IAttrs from "./IAttrs";

/**
 * Template -- Component
 * Automated ingestion of css / html into web components.
 */
class Template extends HTMLElement {

    attrs: IAttrs = {};

    externalClass = false;

    constructor({
        attrs,
        css,
        html,
    }:{
        attrs?: IAttrs;
        css?: string;
        html?: string;
    }) {
        super();
        const template = document.createElement('template');
        template.innerHTML = `<style>${css ? css : ''}</style>${html ? html : ''}`;
        this.attachShadow({mode: 'open'});
        if (this.shadowRoot !== null) {
            this.shadowRoot.appendChild(template.content.cloneNode(true));
        };
        if (attrs) this.attrs = attrs;
    };

    connectedCallback() {

        let attrs = Object.keys(this.attrs);
        for (let a = 0; a < attrs.length; a++) {
            let attr = attrs[a];
            let fx = this.attrs[attr];
            if (fx) fx(this);
        };

    };

};

export default Template;
