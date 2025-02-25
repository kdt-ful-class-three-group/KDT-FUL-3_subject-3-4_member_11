function postUpdate(i) {

  async function logJSONData() {
  const response = await fetch("./data.json");
  const jsonData = await response.json();
  console.log(jsonData);

  const form = document.querySelectorAll('form');
  const input = document.querySelectorAll('input');
  const textarea = document.querySelectorAll('textarea');

  form[0].action = `/Update${i}`;
  form[0].method = 'post';

  input[0].value = jsonData[i].name
  input[1].value = jsonData[i].title
  textarea[0].value = jsonData[i].main

  }
  logJSONData()
}

module.exports = postUpdate;