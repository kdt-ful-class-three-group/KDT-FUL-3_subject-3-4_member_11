function updateForm(i) {
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
      <form action="/update${i}" method="post">
        <input type="text" name="name" placeholder="name" required>
        <input type="text" name="title" placeholder="title" required>
        <textarea type="text" name="main" placeholder="main" required></textarea>
        <button type="submit">작성</button>
      </form>
    </section>
  </main>

  <script>
  async function logJSONData() {
  const response = await fetch("./data.json");
  const jsonData = await response.json();
  console.log(jsonData);
    const input = document.querySelectorAll('input');
    const textarea = document.querySelector('textarea');

    input[0].value = jsonData[${i}].name;
    input[1].value = jsonData[${i}].title;
    textarea.value = jsonData[${i}].main;
  }
  logJSONData();
  </script>
</body>
</html>
  `
}

module.exports = updateForm;