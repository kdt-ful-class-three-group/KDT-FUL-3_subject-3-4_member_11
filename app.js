const http = require('http');
// http 모듈을 사용하겠다고 선언하는 처리
const fs = require('fs');
// fs모듈을 사용하겠다고 선언하는 처리
const qs = require('querystring');
// 쿼리스트링 모듈을 사용하겠다고 선언
const topBar = require('./topBar');
// topBar 모듈을 사용하겠다고 선언
const addText = require('./addText');
// addTets 모듈을 사용하겠다고 선언

const server = http.createServer(function(req, res) {
// server라는 변수에 서버를 생성하는 함수를 담는다.
  if(req.method === 'GET') {
  // 요청받는 메서드가 GET일 경우 요청을 처리한다.
    if(req.url === '/') {
      // 초기화면 및 홈 요청에 대한 get요청 처리
      res.writeHead(200, {'content-type': 'text/html; charset=utf-8'});
      res.end(topBar());
    } else
    if(req.url === '/list') {
      // 글목록 페이지 요청에 대한 get요청 처리
      res.writeHead(200, {'content-type': 'text/html; charset=utf-8'});
      res.end(topBar());
    } else
    if(req.url === '/add') {
      // 글 상세 페이지 요청에 대한 get요청 처리
      res.writeHead(200, {'content-type': 'text/html; charset=utf-8'});
      res.end(addText());
    } else
    if(req.url === '/detail') {
      // 글 상세 페이지 요청에 대한 get요청 처리
      res.writeHead(200, {'content-type': 'text/html; charset=utf-8'});
      res.end(topBar());
    } else {
      // 지정되어있지 않은 get요청이 들어오면, 404에러 처리
      res.writeHead(404, {'content-type': 'text/html; charset=utf-8'});
      res.end('404 Not Found');
    } 
  }
  if(req.method === 'POST') {
  // 요청받는 메서드가 POST일 경우 요청을 처리한다.
    if(req.url === '/data') {
      // 글을 작성하면 액션은 /data, 메서드는 POST로 요청한다.
      req.on('data', function(data) {
        // post로 데이터를 받아 올 때, 기능을 추가하는 코드
        console.log(data.toString());
        // post로 받아온 데이터를 문자열로 나타내서 확인 
        const dataPar = qs.parse(data.toString());
        // post로 받아온 데이터를 문자열로 나타내면 그 데이터는 쿼리스트링 형식으로 작성되어있기 때문에 dataPar라는 변수에 qs.parse로 파싱(해석)하고, 객체로 변환하는 코드 
        console.log(dataPar);
        // post로 받아온 데이터가 잘 객체로 변환되었는지 확인.
      })
      req.on('end', function() {

      })
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