function sendData() {
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const amount = document.getElementById("amount").value;

  fetch("send.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: `name=${name}&phone=${phone}&amount=${amount}`
  })
  .then(res => res.text())
  .then(data => {
    document.getElementById("result").innerHTML = data;
  });
}