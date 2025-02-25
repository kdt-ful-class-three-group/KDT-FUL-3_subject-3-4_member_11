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

    const h1 = document.createElement('h1');
    // 새로운 h1태그 생성
    const dataName = document.createElement('li');
    // 새로운 li태그 생성
    const dataMain = document.createElement('li');
    // 새로운 li태그 생성
    const btnArticle = document.createElement('article');
    // 버튼들이 들어갈 article태그 생성
    const updateBtn = document.createElement('button');
    // 수정 버튼을 a태그로 생성
    const deleteBtn = document.createElement('button');
    // 삭제 버튼을 a태그로 생성
    // * 상세페이지
    const form = document.createElement('form');
    const inputName = document.createElement('input');
    const inputTitle = document.createElement('input');
    const textarea = document.createElement('textarea');
    const button = document.createElement('button');
    // * 수정페이지
    const delForm = document.createElement('form');
    const delInfo = document.createElement('div');
    const delInput = document.createElement('input');
    const delBtn = document.createElement('button');
    // * 삭제페이지

    h1.textContent = `${jsonData[i].title}`;
    // h1태그에는 jsondata의 제목을 넣는다.
    dataName.textContent = `작성자: ${jsonData[i].name}`;
    // li태그 하나 에는 jsondata의 이름을 넣는다.
    dataMain.textContent = `내용: ${jsonData[i].main}`;
    // 남은 li태그 하나 에는 jsondata의 본문을 넣는다.
    btnArticle.style.display = 'flex';
    btnArticle.style.flexDirection = 'row';
    btnArticle.style.justifyContent = 'flex-end';
    // 버튼아티클 스타일 지정

    updateBtn.textContent = `수정`;
    // 수정버튼에 수정이라는 글자를 넣어준다.
    deleteBtn.textContent = `삭제`;
    // 삭제버튼에 삭제라는 글자를 넣어준다.
    // * 상세 페이지 내용
    

    li[i].addEventListener('click', function() {
      // 어떤 순서의 li를 클릭하면
      sections[1].style.display = 'none'
      // 2번쨰 섹션이 display none 되고,

      sections[2].appendChild(h1);
      // h1태그 는 새로운 섹션에
      sections[2].appendChild(dataName);
      // dataName도 새로운 섹션에
      sections[2].appendChild(dataMain);
      // dataMain도 새로운 섹션에
      btnArticle.appendChild(updateBtn);
      // 수정버튼은 버튼아티클에
      btnArticle.appendChild(deleteBtn);
      // 삭제버튼도 버튼아티클에
      sections[2].appendChild(btnArticle);
      // 버튼 아티클은 새로운 섹션에
    });

    // ! 상세 페이지 

    updateBtn.addEventListener('click', function() {
      sections[2].style.display = 'none'

      form.action = `/update${i}`;
      form.method = 'post'

      inputName.type = 'text';
      inputName.name = 'name';
      inputName.placeholder = 'name';
      inputName.required = 'true';
      inputName.value = jsonData[i].name

      inputTitle.type = 'text';
      inputTitle.name = 'title';
      inputTitle.placeholder = 'title';
      inputTitle.required = 'true';
      inputTitle.value = jsonData[i].title

      textarea.type = 'text';
      textarea.name = 'main';
      textarea.placeholder = 'main';
      textarea.required = 'true';
      textarea.value = jsonData[i].main

      button.type = 'submit';
      button.textContent = '작성'

      form.appendChild(inputName);
      form.appendChild(inputTitle);
      form.appendChild(textarea);
      form.appendChild(button);

      sections[3].appendChild(form)
    });

    // ! 수정페이지

    deleteBtn.addEventListener('click', function() {
      sections[2].style.display = 'none';

      delForm.action = `/delete${i}`;
      delForm.method = 'post';
      delInfo.textContent = '삭제를 원하신다면 아래에 삭제 라고 입력해 주십시오.';
      delInput.type = 'text';
      delInput.name = 'delete';
      delInput.placeholder = '삭제';
      delInput.pattern = '삭제';
      delInput.required = 'true';
      delBtn.type = 'submit';
      delBtn.textContent = '삭제';

      delForm.appendChild(delInfo);
      delForm.appendChild(delInput);
      delForm.appendChild(delBtn);
      
      sections[4].appendChild(delForm);
    })

    // ! 삭제 페이지
  };
}

logJSONData();
// json데이터를 가져와주는 fetch를 사용하는 함수를 실행한다.

