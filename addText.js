function addText() {
  return `
  <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
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
          <form action="/data" method="post">
            <input type="text" name="name" placeholder="name" required>
            <input type="text" name="title" placeholder="title" required>
            <input type="text" name="main" placeholder="main" required>
            <button type="submit">작성</button>
          </form>
        </section>
      </main>
    </body>
    </html>
`
}

module.exports = addText;