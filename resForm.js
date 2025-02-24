 const fs = require('fs');
 
 function resForm(res, element, file) { 
     // 인자를 res, element, file로 준다.
      res.writeHead(200, {'content-type': `text/${element}; charset=utf-8`});
     //  res는 말그대로 response,element는 불러올 형식을 의미한다.
      res.write(fs.readFileSync(`./${file}`));
     //  file은 불러올 파일의 이름을 이야기 한다.
      res.end();
 }

 module.exports = resForm;