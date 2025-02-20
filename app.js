const http = require('http');
// http 모듈을 사용하겠다고 선언하는 처리
const fs = require('fs');
// fs포듈을 사용하겠다고 선언하는 처리

const server = http.createServer(function(req, res) {
// server라는 변수에 서버를 생성하는 함수를 담는다.
  if(req.method === 'GET') {
  // 요청받는 메서드가 GET일 경우 요청을 처리한다.
    if(req.url === '/') {
      // 초기화면 및 홈 요청에 대한 get요청 처리
    }
    if(req.url === '/list') {
      // 글목록 페이지 요청에 대한 get요청 처리
    }
    if(req.url === '/detail') {
      // 글 상세 페이지 요청에 대한 get요청 처리
    }
  }
  if(req.method === 'POST') {
  // 요청받는 메서드가 POST일 경우 요청을 처리한다.
    if(req.url === '/data') {
      // 글을 작성하면 액션은 /data, 메서드는 POST로 요청한다.
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