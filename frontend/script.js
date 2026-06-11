async function sendReminder() {
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const amount = document.getElementById("amount").value;

  const res = await fetch("http://localhost:5000/send-sms", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name, phone, amount })
  });

  const data = await res.json();
  document.getElementById("status").innerText = data.message;
}