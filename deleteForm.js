function deleteForm(i) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    main {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    section:nth-child(1) {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

    section:nth-child(2) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    article {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      gap: 20px;
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 10px;
      align-items: center;
    }

    input {
      width: 300px;
    }

    textarea {
      width: 300px;
      height: 400px;
      resize: none;
    }

    button {
      width: 70px;
    }
  </style>
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
      <form action="/delete${i}" method="post">
        <div>정말로 삭제하시겠습니까?</div>
        <button type="submit">예</button>
        <a href = "/">아니오</a>
      </form>
    </section>
  </main>
</body>
</html>
  `
}

module.exports = deleteForm;