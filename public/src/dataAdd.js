import { setPosition } from "./module/setPosition.js";
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

let babys = [inputName, inputTitle, textarea, button];
setPosition(form, babys);

sections[1].appendChild(form)