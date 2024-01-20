import { createApp } from 'vue'
import App from '../view/popup.vue'

const modal = document.createElement("div");
modal.id = 'example-modal'

const shadow = document.createElement('div');
const shadowRoot = shadow.attachShadow({ mode: 'open' })

const styles = document.createElement('link');
styles.rel = "stylesheet";
styles.href = chrome.runtime.getURL("css/content.css");

shadowRoot.appendChild(modal);
shadowRoot.appendChild(styles);
document.body.append(shadow);

createApp(App).mount(modal);

console.log('hello world content todo something~')
