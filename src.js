async function logJSONData() {
  const response = await fetch("./data.json");
  const jsonData = await response.json();
  console.log(jsonData);
  // fetch로 data.json를 가져와주는 코드

  for(let i=0; i<jsonData.length; i++) {
    // data.json의 배열의 길이만큼 반복
    const sections = document.querySelectorAll('section');
    // html의 section 전부를 선택자로 설정
    const dataName = document.createElement('li');
    // li태그를 생성한다.
    
    dataName.textContent = `${jsonData[i].title}`;
    // li태그의 내용은 작성자: json.data의 name, 제목: json.data의 title.
    
    sections[1].appendChild(dataName);
    // 2번째 섹션의 자식요소로 dataName이 들어감.
    };

  for(let i=0; i<jsonData.length; i++) {
    const main = document.querySelector('main');
    const sections = document.querySelectorAll('section');
    const li = document.querySelectorAll('li');
    const newSection = document.createElement('section');
    const h1 = document.createElement('h1');
    const dataName = document.createElement('li')
    const dataMain = document.createElement('li')

    h1.textContent = `${jsonData[i].title}`;
    dataName.textContent = `작성자: ${jsonData[i].name}`;
    dataMain.textContent = `내용: ${jsonData[i].main}`;
    

    li[i].addEventListener('click', function() {
      sections[1].style.display = 'none'

      newSection.appendChild(h1);
      newSection.appendChild(dataName);
      newSection.appendChild(dataMain);
      main.appendChild(newSection);
    });
  };
}

logJSONData();


