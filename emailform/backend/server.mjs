import express from 'express';
import dotenv from 'dotenv';
import formData from "form-data";
import Mailgun from "mailgun.js";
const app =  express();

const mailgun = new Mailgun(formData);

dotenv.config();

const DOMAIN = "sandbox47e2bf4fcbd8494c8458a27d7446b2ab.mailgun.org";

const client = mailgun.client({
  username: "api",
  key: "a82ea737714071166bff1326cff339bf-5d9bd83c-43c848a0" ?? "",
});
(async () => {
  try {
    const domain = await client.domains.get(DOMAIN);
    console.log("domain", domain);
  } catch (error) {
    console.error(error);
  }
})();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/api/email", (req, res) => {
  const { email, subject, message } = req.body;
  client()
    .messages()
    .create(
      "sandbox47e2bf4fcbd8494c8458a27d7446b2ab.mailgun.org",
      {
        from: "meshach <mailgun@sandbox47e2bf4fcbd8494c8458a27d7446b2ab.mailgun.org>",
        to: `${email}`,
        subject: `${subject}`,
        html: `<p>${message}</p>`,
      },
      (error, body) => {
        if (error) {
          console.log(error);
          res.status(500).send({ message: "Error in sending email" });
        } else {
          console.log(body);
          res.send({ message: "Email sent successfully" });
        }
      }
    );
});

// eslint-disable-next-line no-undef
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});