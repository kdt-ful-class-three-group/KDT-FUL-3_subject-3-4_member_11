 const fs = require('fs');
 
 function resForm(res, element, file) { 
 res.writeHead(200, {'content-type': `text/${element}; charset=utf-8`});
      res.write(fs.readFileSync(`./${file}`));
      res.end();
 }

 module.exports = resForm;