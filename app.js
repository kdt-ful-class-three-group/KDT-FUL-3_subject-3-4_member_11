const http = require('http');
// http 모듈을 사용하겠다고 선언하는 처리
const fs = require('fs');
// fs모듈을 사용하겠다고 선언하는 처리
const qs = require('querystring');
// 쿼리스트링 모듈을 사용하겠다고 선언
const htmlForm = require('./htmlForm');
const resForm = require('./resForm');
const dataForm = require('./dataForm');
const updateForm = require('./updateForm');
const updateDataForm = require('./updateDataForm');
const deleteForm = require('./deleteForm');
// htmlForm 모듈을 사용하겠다고 선언


const server = http.createServer(function(req, res) {
// server라는 변수에 서버를 생성하는 함수를 담는다.
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
      // 글 상세 페이지 요청에 대한 get요청 처리
       res.writeHead(200, {'content-type': `text/html; charset=utf-8`});
       res.write(updateForm(i));
       res.end();
    } else
    if(req.url.startsWith('/delete')) {
      // 수정페이지 설정. 형식은 update(순서) 형식이므로 startsWith를 사용.
      const i = req.url.split('update')[1];
      // i라는 변수에 update의 순서를 가져옴.
      // 글 상세 페이지 요청에 대한 get요청 처리
       res.writeHead(200, {'content-type': `text/html; charset=utf-8`});
       res.write(deleteForm(req, res, i));
       res.end();
    } else
    if(req.url.endsWith('.js')) {
      // 글 상세 페이지 요청에 대한 get요청 처리
      resForm(res, 'javascript', req.url);
    } else 
    if(req.url.endsWith('.json')) {
      // 글 상세 페이지 요청에 대한 get요청 처리
      resForm(res, 'javascript', req.url);
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
    } 
    if(req.url.startsWith('/update')) {
      const i = req.url.split('update')[1];
      // 글을 작성하면 액션은 /data, 메서드는 POST로 요청한다.
      updateDataForm(req, res, i);
    } else {
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