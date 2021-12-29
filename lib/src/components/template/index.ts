import IAttrs from "./IAttrs";

/**
 * Template -- Component
 * Automated ingestion of css / html into web components.
 */
class Template extends HTMLElement {

    attrs: (keyof IAttrs)[] = [];

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
        const clone = template.content.cloneNode(true);
        this.attachShadow({mode: 'open'});
        if (this.shadowRoot) this.shadowRoot.appendChild(clone);
        if (attrs) {
            let attrsKeys = Object.keys(attrs);
            this.attrs = attrsKeys;
            // bind attr fxs to class
            for (let a = 0; a < attrsKeys.length; a++) {
                let attr = attrsKeys[a];
                let fx = attrs[attr];
                (this as any)[attr] = fx;
            }; 
        };
    };

    connectedCallback() {

        // call binded attr fxs
        for (let a = 0; a < this.attrs.length; a++) {
            let attr = this.attrs[a];
            (this as any)[attr]();
        }; 

    };

};

export default Template;
