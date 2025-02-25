function layoutCallback(File, i, callback) {
  return `
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="./public/style/style.css">
</head>
<body>
  <main>
    <section>
      <article>
        <a href = "/">홈</a>
        <a href = "/list">글 목록</a>
      </article>
        <a href = "/add">글 작성</a>
    </section>
    <section>
    </section>
  </main>

  <script src="${File}"></script>
  <script>${callback(i)}</script>
  
</body>
</html>
  `
}

module.exports = layoutCallback;