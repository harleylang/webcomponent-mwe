import Template from './Template';
import IAttrs from './IAttrs';

const template = ({
    attrs,
    css,
    html,
}:{
    attrs?: IAttrs;
    css?: string;
    html?: string;
}) => {

    class Extended extends Template {
        externalClass = false;
        constructor() {
            super({ 
                attrs: attrs, 
                css: css, 
                html: html 
            });
        };
    };

    return Extended;

};

export default template;