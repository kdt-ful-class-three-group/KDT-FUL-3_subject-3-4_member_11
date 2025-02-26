import { setType } from "./module/setType.js";

const sections = document.querySelectorAll('section');

const form = document.createElement('form');
const inputName = document.createElement('input');
const inputTitle = document.createElement('input');
const textarea = document.createElement('textarea');
const button = document.createElement('button');

form.action = '/data';
form.method = 'post';

setType(inputName, 'name', '');
setType(inputTitle, 'title', '');
setType(textarea, 'main', '');

button.type = 'submit';
button.textContent = '작성'

form.appendChild(inputName);
form.appendChild(inputTitle);
form.appendChild(textarea);
form.appendChild(button);

sections[1].appendChild(form)