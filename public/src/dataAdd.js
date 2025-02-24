const sections = document.querySelectorAll('section');

const form = document.createElement('form');
const inputName = document.createElement('input');
const inputTitle = document.createElement('input');
const textarea = document.createElement('textarea');
const button = document.createElement('button');

form.action = '/data';
form.method = 'post';

inputName.type = 'text';
inputName.name = 'name';
inputName.placeholder = 'name';
inputName.required

inputTitle.type = 'text';
inputTitle.name = 'title';
inputTitle.placeholder = 'title';
inputTitle.required

textarea.type = 'text';
textarea.name = 'main';
textarea.placeholder = 'main';
textarea.required

button.type = 'submit';
button.textContent = '작성'

form.appendChild(inputName);
form.appendChild(inputTitle);
form.appendChild(textarea);
form.appendChild(button);

sections[1].appendChild(form)