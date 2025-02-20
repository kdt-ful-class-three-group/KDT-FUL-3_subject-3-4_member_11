async function logJSONData() {
  const response = await fetch("./data.json");
  const jsonData = await response.json();
  console.log(jsonData);

  for(let i=0; i<jsonData.length; i++) {
    const sections = document.querySelectorAll('section');
    const dataName = document.createElement('li');
    
    dataName.textContent = `작성자: ${jsonData[i].name} 제목: ${jsonData[i].title}`
    
    sections[1].appendChild(dataName);
    };
}

logJSONData();


