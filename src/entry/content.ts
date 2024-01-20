import { createApp } from 'vue'
import App from '../view/popup.vue'

const modal = document.createElement("div");
modal.id = 'example-modal'

document.body.append(modal);

createApp(App).mount(modal);

console.log('hello world content todo something~')
