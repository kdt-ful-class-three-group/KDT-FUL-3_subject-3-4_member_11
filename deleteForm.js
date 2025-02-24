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
        <div>삭제를 원하신다면 아래에 삭제 라고 입력해 주십시오.</div>
        <input type="text" name="delete" placeholder="삭제" pattern="삭제" required>
        <button type="submit">삭제</button>
        <a href = "/">글목록으로 돌아가기</a>
      </form>
    </section>
  </main>
</body>
</html>
  `
}

module.exports = deleteForm;