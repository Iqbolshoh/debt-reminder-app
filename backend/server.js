import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import twilio from "twilio";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Twilio setup
const client = twilio(
  process.env.TWILIO_SID,
  process.env.TWILIO_AUTH
);

app.post("/send-sms", async (req, res) => {
  const { name, phone, amount } = req.body;

  try {
    await client.messages.create({
      body: `⚠️ Reminder: ${name}, you owe ${amount}. Please pay soon.`,
      from: process.env.TWILIO_NUMBER,
      to: phone
    });

    res.json({ message: "SMS sent successfully ✅" });

  } catch (err) {
    res.json({ message: "Error sending SMS ❌" });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});