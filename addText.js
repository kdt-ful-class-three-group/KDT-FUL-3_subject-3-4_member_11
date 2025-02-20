function addText() {
  return `<a href = "/">홈</a><a href = "/list">글 목록</a><a href = "/add">글 작성</a>
                  <form action="/data" method="post">
                    <input type="text" name="name" placeholder="name" required>
                    <input type="text" name="main" placeholder="main" required>
                    <button type="submit">작성</button>
                  </form>`
}

module.exports = addText;