/**
 * Template -- Component
 * Automated ingestion of css / html into web components.
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
