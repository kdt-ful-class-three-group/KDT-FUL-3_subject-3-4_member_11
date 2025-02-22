function htmlForm(main) {
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

    section {
      display: flex;
      flex-direction: column;
    }

    section:nth-child(3) {
      display: flex;
      flex-direction: column;
      padding: 30px;
      gap: 10px;
    }

    article {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      gap: 20px;
    }

    section:nth-child(2) li {
      cursor: pointer;
      border-bottom: 1px solid gray;
      font-size: 20px;
      font-weight: bold;
      padding: 10px;
      padding-top: 30px;
      padding-bottom: 30px;
    }

    section:nth-child(2) li:hover {
      background-color: rgb(198, 198, 198);
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
      <h1>${main}</h1>
    </section>
  </main>
</body>
</html>
  `
}

module.exports = htmlForm;