import { readFileSync } from 'fs';
import template from '@template';

import attrs from './attrs';

const css = readFileSync('css.css').toString();
const html = readFileSync('html.html').toString();
const WebText = template({ attrs: attrs, css: css, html: html });

window.customElements.define('web-text', WebText);

export default WebText;