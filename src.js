async function logJSONData() {
  const response = await fetch("./data.json");
  const jsonData = await response.json();
  console.log(jsonData);
  // fetch로 data.json를 가져와주는 코드
}
logJSONData();


