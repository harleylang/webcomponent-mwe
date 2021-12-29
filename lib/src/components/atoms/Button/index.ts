import { readFileSync } from 'fs';
import template from '@template';

const css = readFileSync('css.css').toString();
const html = readFileSync('html.html').toString();
const WebButton = template({ css: css, html: html });

window.customElements.define('web-button', WebButton);

export default WebButton;
