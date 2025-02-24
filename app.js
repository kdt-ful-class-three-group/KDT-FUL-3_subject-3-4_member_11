const http = require('http');
// http 모듈을 사용하겠다고 선언하는 처리
const fs = require('fs');
// fs모듈을 사용하겠다고 선언하는 처리
const qs = require('querystring');
// 쿼리스트링 모듈을 사용하겠다고 선언
const htmlForm = require('./htmlForm');
// htmlForm 모듈을 사용하겠다고 선언
const resForm = require('./resForm');
// resForm 모듈을 사용하겠다고 선언
const dataForm = require('./dataForm');
// dataForm 모듈을 사용하겠다고 선언
const updateForm = require('./updateForm');
// updateForm 모듈을 사용하겠다고 선언
const updateDataForm = require('./updateDataForm');
// updateDataForm 모듈을 사용하겠다고 선언
const deleteForm = require('./deleteForm');
// deleteForm 모듈을 사용하겠다고 선언
const deleteDataForm = require('./deleteDataForm');
// deleteDataForm 모듈을 사용하겠다고 선언


const server = http.createServer(function(req, res) {
// server라는 변수에 서버를 생성하는 함수를 담는다.

  if(!fs.existsSync('data.json')) {
    // 만일 data.json파일이 존재하지 않다면,
  fs.writeFileSync('data.json', JSON.stringify([], null, 2), 'utf-8');
  // 내용이 []인 data.json파일을 생성한다.
}
  if(req.method === 'GET') {
  // 요청받는 메서드가 GET일 경우 요청을 처리한다.
    if(req.url === '/') {
      // 초기화면 및 홈 요청에 대한 get요청 처리
      resForm(res, 'html', 'index.html');
    } else
    if(req.url === '/list') {
      // 글목록 페이지 요청에 대한 get요청 처리
      resForm(res, 'html', 'index.html');
    } else
    if(req.url === '/add') {
      // 글 상세 페이지 요청에 대한 get요청 처리
      resForm(res, 'html', 'add.html');
    } else
    if(req.url.startsWith('/update')) {
      // 수정페이지 설정. 형식은 update(순서) 형식이므로 startsWith를 사용.
      const i = req.url.split('update')[1];
      // i라는 변수에 update의 순서를 가져옴.
       res.writeHead(200, {'content-type': `text/html; charset=utf-8`});
       res.write(updateForm(i));
       res.end();
    } else
    if(req.url.startsWith('/delete')) {
      // 삭제 페이지 설정. 형식은 delete(순서) 형식이므로 startsWith를 사용.
      const i = req.url.split('delete')[1];
      // i라는 변수에 delete의 순서를 가져옴.
       res.writeHead(200, {'content-type': `text/html; charset=utf-8`});
       res.write(deleteForm(i));
       res.end();
    } else
    if(req.url.endsWith('.js')) {
      // url요청의 끝이 .js라면
      resForm(res, 'javascript', req.url);
      // 해당 경로의 파일을 javascript형식으로 가져온다.
    } else 
    if(req.url.endsWith('.json')) {
      // url요청의 끝이 .json 이라면
      resForm(res, 'javascript', req.url);
      // 해당 경로의 파일을 javascript형식으로 가져온다.

    } 
    else{
      // 지정되어있지 않은 get요청이 들어오면, 404에러 처리
      res.writeHead(404, {'content-type': 'text/html; charset=utf-8'});
      res.end('404 Not Found');
    } 
  }
  if(req.method === 'POST') {
  // 요청받는 메서드가 POST일 경우 요청을 처리한다.
    if(req.url === '/data') {
      // 글을 작성하면 액션은 /data, 메서드는 POST로 요청한다.
      dataForm(req, res);
    } else
    if(req.url.startsWith('/update')) {
      // url의 시작이 update인 post요청에 대한 처리
      const i = req.url.split('update')[1];
      // i는 요청 url의 update뒤의 숫자.
      updateDataForm(req, res, i);
    } else
    if(req.url.startsWith('/delete')) {
      // url의 시작이 delete인 post요청에 대한 처리
      console.log(req.url)
      const i = req.url.split('delete')[1];
      // i는 요청 url의 delete뒤의 숫자.
      console.log(i);
      deleteDataForm(req, res, i);
    } else {
      // 지정되지 않은 post요청은 404에러가 뜨게 만들어 주었다.
      res.writeHead(404, {'content-type': 'text/html; charset=utf-8'});
      res.end('404 Not Found');
    }
  }
});


const PORT = 8000
// PORT라는 상수에 8000이라는 값을 선언하고,
server.listen(PORT, function() {
  // 서버를 실행한다. PORT번호는 위에서 상수선언한 PORT의 값 8000
  console.log(`서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
  // 서버가 실행되면, 콘솔에 서버가 실행중이라는 문구가 나타난다.
})