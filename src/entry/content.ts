import { createApp } from 'vue'
import App from '../view/popup.vue'


const shadow = document.createElement('div');
const shadowRoot = shadow.attachShadow({ mode: 'open' })

const styles = shadowRoot.ownerDocument.createElement('link');
styles.rel = "stylesheet";
styles.href = chrome.runtime.getURL("css/content.css");

const modal = shadowRoot.ownerDocument.createElement("div");
modal.id = 'example-modal'

shadowRoot.appendChild(modal);
shadowRoot.appendChild(styles);

shadow.style.position = "absolute";
shadow.style.zIndex = "9999999";
shadow.style.right = "25px";
shadow.style.top = "25px";

document.body.append(shadow);

createApp(App).mount(modal);

console.log('hello world content todo something~')
