async function logJSONData() {
  const response = await fetch("./data/data.json");
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

    // ! 리스트

  for(let i=0; i<jsonData.length; i++) {
    const main = document.querySelector('main');
    // 메인 태그를 불러온다.
    const sections = document.querySelectorAll('section');
    // 섹션 태그 전부를 불러온다.
    const li = document.querySelectorAll('li');
    // li태그를 전부 불러온다.
    
    // ? 새로운 섹션 생성

    let tagName = ['h1', 'li', 'li', 'article', 'button', 'button', 'form', 'input', 'input', 'textarea', 'button', 'form', 'div', 'input', 'button'];

    function makeElement(tagName) {
      for(let n=0; n<tagName.length; n++) {
      tagName[n] = document.createElement(tagName[n]);
    }}

    makeElement(tagName);

    tagName[0].textContent = `${jsonData[i].title}`;
    // h1태그에는 jsondata의 제목을 넣는다.
    tagName[1].textContent = `작성자: ${jsonData[i].name}`;
    // li태그 하나 에는 jsondata의 이름을 넣는다.
    tagName[2].textContent = `내용: ${jsonData[i].main}`;
    // 남은 li태그 하나 에는 jsondata의 본문을 넣는다.
    tagName[3].style.display = 'flex';
    tagName[3].style.flexDirection = 'row';
    tagName[3].style.justifyContent = 'flex-end';
    // 버튼아티클 스타일 지정

    tagName[4].textContent = `수정`;
    // 수정버튼에 수정이라는 글자를 넣어준다.
    tagName[5].textContent = `삭제`;
    // 삭제버튼에 삭제라는 글자를 넣어준다.
    // * 상세 페이지 내용
    

    li[i].addEventListener('click', function() {
      // 어떤 순서의 li를 클릭하면
      sections[1].style.display = 'none'
      // 2번쨰 섹션이 display none 되고,

      sections[2].appendChild(tagName[0]);
      // h1태그 는 새로운 섹션에
      sections[2].appendChild(tagName[1]);
      // dataName도 새로운 섹션에
      sections[2].appendChild(tagName[2]);
      // dataMain도 새로운 섹션에
      tagName[3].appendChild(tagName[4]);
      // 수정버튼은 버튼아티클에
      tagName[3].appendChild(tagName[5]);
      // 삭제버튼도 버튼아티클에
      sections[2].appendChild(tagName[3]);
      // 버튼 아티클은 새로운 섹션에
    });

    // ! 상세 페이지 

    tagName[4].addEventListener('click', function() {
      sections[2].style.display = 'none'
      function setType(tagName, name, value) {
        tagName.type = 'text';
        tagName.name = name;
        tagName.placeholder = name;
        tagName.required = 'true';
        tagName.value = value
      }

      tagName[6].action = `/update${i}`;
      tagName[6].method = 'post'

      setType(tagName[7], 'name', jsonData[i].name);
      // tagName[7].type = 'text';
      // tagName[7].name = 'name';
      // tagName[7].placeholder = 'name';
      // tagName[7].required = 'true';
      // tagName[7].value = jsonData[i].name

      setType(tagName[8], 'title', jsonData[i].title);
      // tagName[8].type = 'text';
      // tagName[8].name = 'title';
      // tagName[8].placeholder = 'title';
      // tagName[8].required = 'true';
      // tagName[8].value = jsonData[i].title
      
      setType(tagName[9], 'main', jsonData[i].main);
      // tagName[9].type = 'text';
      // tagName[9].name = 'main';
      // tagName[9].placeholder = 'main';
      // tagName[9].required = 'true';
      // tagName[9].value = jsonData[i].main

      tagName[10].type = 'submit';
      tagName[10].textContent = '작성'

      tagName[6].appendChild(tagName[7]);
      tagName[6].appendChild(tagName[8]);
      tagName[6].appendChild(tagName[9]);
      tagName[6].appendChild(tagName[10]);

      sections[3].appendChild(tagName[6])
    });

    // ! 수정페이지

    tagName[5].addEventListener('click', function() {
      sections[2].style.display = 'none';

      tagName[11].action = `/delete${i}`;
      tagName[11].method = 'post';
      tagName[12].textContent = '삭제를 원하신다면 아래에 삭제 라고 입력해 주십시오.';
      tagName[13].type = 'text';
      tagName[13].name = 'delete';
      tagName[13].placeholder = '삭제';
      tagName[13].pattern = '삭제';
      tagName[13].required = 'true';
      tagName[14].type = 'submit';
      tagName[14].textContent = '삭제';

      tagName[11].appendChild(tagName[12]);
      tagName[11].appendChild(tagName[13]);
      tagName[11].appendChild(tagName[14]);
      
      sections[4].appendChild(tagName[11]);
    })

    // ! 삭제 페이지
  };
}

logJSONData();
// json데이터를 가져와주는 fetch를 사용하는 함수를 실행한다.

