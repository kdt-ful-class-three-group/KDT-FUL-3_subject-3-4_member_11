const sections = document.querySelectorAll('section');

const form = document.createElement('form');
const inputName = document.createElement('input');
const inputTitle = document.createElement('input');
const textarea = document.createElement('textarea');
const button = document.createElement('button');

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

function postUpdate(i) {
  async function logJSONData() {
  const response = await fetch("./data.json");
  const jsonData = await response.json();
  console.log(jsonData);

  const form = document.querySelectorAll('form');
  const input = document.querySelectorAll('input');
  const textarea = document.querySelectorAll('textarea');

  form[0].action = `'/Update${i}'`;
  form[0].method = 'post';

  input[0].value = jsonData[i].name
  input[1].value = jsonData[i].title
  textarea[0].value = jsonData[i].main
  }

  logJSONData()
}

postUpdate(i);