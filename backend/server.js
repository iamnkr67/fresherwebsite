const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3000; // Default port if not in .env
const db = require("./config/dbConnect");
const cors = require("cors");
const nodemailer = require("nodemailer");
const QRCode = require("qrcode");
const puppeteer = require("puppeteer");
const cron = require("node-cron");
const fs = require("fs");
const path = require("path");

app.use(cors());
app.use(express.json());

// Import routes
const contest = require("./routes/contest");
app.use("/contestant", contest);

const adminRouter = require("./routes/admin");
app.use("/admin", adminRouter);

const pendingData = require("./routes/pending");
app.use("/pending", pendingData);

const Seat = require("./model/pendingSchema");

// Cron job to process approved seats and send emails
cron.schedule("*/1 * * * *", async () => {
  console.log("Checking for approved seats...");

  const tempDir = path.join(__dirname, "temp");
  if (!fs.existsSync(tempDir)) {
    fs.mkdirSync(tempDir, { recursive: true });
  }

  try {
    const approvedUsers = await Seat.find({ status: "approved", emailSent: false });

    for (const user of approvedUsers) {
      const { name, rollNo, semester, seat, email, _id } = user;
      const uniqueId = _id.toString();

      try {
        // Generate QR Code
        const qrData = JSON.stringify({ name, rollNo, semester, seat, uniqueId });
        const qrCodePath = path.join(tempDir, `qrcode-${uniqueId}.png`);
        await QRCode.toFile(qrCodePath, qrData);

        // ID Card HTML Template
        const idCardHtml = ` <style>
    body {
			background-color: transparent;
			font-family:'verdana';
		}
.id-card-holder {
			width: 225px;
		    padding: 4px;
		    margin: 0 auto;
		    background-color: #1f1f1f;
		    border-radius: 5px;
		    position: relative;
		}
.id-card-holder:after {
		    content: '';
		    width: 7px;
		    display: block;
		    background-color: #0a0a0a;
		    height: 100px;
		    position: absolute;
		    top: 105px;
		    border-radius: 0 5px 5px 0;
		}
.id-card-holder:before {
		    content: '';
		    width: 7px;
		    display: block;
		    background-color: #0a0a0a;
		    height: 100px;
		    position: absolute;
		    top: 105px;
		    left: 222px;
		    border-radius: 5px 0 0 5px;
		}
.id-card {
			
			background-color: #fff;
			padding: 10px;
			border-radius: 10px;
			text-align: center;
			box-shadow: 0 0 1.5px 0px #b9b9b9;
		}
.id-card img {
			margin: 0 auto;
		}
.header img {
			width: 100px;
    		margin-top: 15px;
		}

		.idSS {
			text-align: justify;
    margin: 5px 20px;
			color : rgb(158, 79, 14)
		}
.photo img {
			width: 80px;
    		margin-top: 15px;
		}
h2 {
			font-size: 15px;
			margin: 5px 0;
		}
h3 {
			font-size: 12px;
			margin: 2.5px 0;
			font-weight: 300;
		}
.qr-code img {
			width: 50px;
		}
p {
			font-size: 5px;
			margin: 2px;
		}
.id-card-hook {
			background-color: black;
		    width: 70px;
		    margin: 0 auto;
		    height: 15px;
		    border-radius: 5px 5px 0 0;
		}
.id-card-hook:after {
			content: '';
		    background-color: white;
		    width: 47px;
		    height: 6px;
		    display: block;
		    margin: 0px auto;
		    position: relative;
		    top: 6px;
		    border-radius: 4px;
		}
.id-card-tag-strip {
			width: 45px;
		    height: 40px;
		    background-color: #d9300f;
		    margin: 0 auto;
		    border-radius: 5px;
		    position: relative;
		    top: 9px;
		    z-index: 1;
		    border: 1px solid #a11a00;
		}
.id-card-tag-strip:after {
			content: '';
		    display: block;
		    width: 100%;
		    height: 1px;
		    background-color: #a11a00;
		    position: relative;
		    top: 10px;
		}
.id-card-tag {
			width: 0;
			height: 0;
			border-left: 100px solid transparent;
			border-right: 100px solid transparent;
			border-top: 100px solid #d9300f;
			margin: -10px auto -30px auto;
      
		}
.id-card-tag:after {
			content: '';
		    display: block;
		    width: 0;
		    height: 0;
		    border-left: 50px solid transparent;
		    border-right: 50px solid transparent;
		    border-top: 100px solid white;
		    margin: -10px auto -30px auto;
		    position: relative;
		    top: -130px;
		    left: -50px;
		}
</style>

<div class="id-card-tag"></div>
	<div class="id-card-tag-strip"></div>
	<div class="id-card-hook"></div>
	<div class="id-card-holder">
		<div class="id-card">
			<h4 style="background: linear-gradient(to right, #f97316, #b91c1c); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Freshers 2024 <br/> Entry Card</h3>
			<div class="header">
				<img src="data:image/png;base64,${fs.readFileSync(qrCodePath, { encoding: 'base64' })}" alt="QR Code" style="width: 35mm; height: 35mm; margin-bottom: 5px;" >
			</div>
      <h3 style="background: linear-gradient(to right, #f97316, #b91c1c); -webkit-background-clip: text; -webkit-text-fill-color: transparent; size: 20px;">
    ${uniqueId}
</h3>
			<h2>${name}</h2>
			<h3 class="idSS">Semester : ${semester}</h3>
			<h3 class="idSS">Roll Code : ${rollNo}</h3>
			<h3 class="idSS">Seat No. ${seat}</h3>
	        

			<hr>
			<p><strong>Nalanda College
</strong> Kisan College Road, Bihar Sharif, Nalanda, Bihar<p>
			<p>District Nalanda, Bihar <strong>803101</strong></p>
			

		</div>
	</div>
`;

        // Launch Puppeteer with proper configuration
        const browser = await puppeteer.launch({
          executablePath: process.env.PUPPETEER_EXECUTABLE_PATH || "/usr/bin/chromium-browser",
          args: ["--no-sandbox", "--disable-setuid-sandbox"], // Required for environments like Render
        });

        const page = await browser.newPage();
        const pdfPath = path.join(tempDir, `${name}-idCard.pdf`);

        await page.setContent(idCardHtml, { waitUntil: "domcontentloaded" });
        await page.pdf({ path: pdfPath, format: "A4", printBackground: true, width: `${widthInPx}px`, height:`${heightInPx}px`, pageRanges:"1",  });
        await browser.close();

        // Configure Nodemailer
        const transporter = nodemailer.createTransport({
          host: "smtp.gmail.com",
          port: 587,
          secure: false,
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
        });

        // Send Email with attachment
        await transporter.sendMail({
          from: `"Freshers" <${process.env.EMAIL_USER}>`,
          to: email,
         subject: "🎉 Welcome to the Freshers and Farewell Celebration! 🎓",
  html: `
    <div style="font-family: Arial, sans-serif; color: #333;">
      <p>Dear <strong>${name}</strong>,</p>
      
      <p>🎊 You are warmly invited to the <strong>Freshers and Farewell Celebration 2024</strong> hosted by the Department of English, Nalanda College. 🎉</p>

      <p>✨ <strong>Your seat is confirmed!</strong>  
      🎟️ <strong>Seat No:</strong> ${seat}<br/>
	      <strong>Your UniqueID code:</strong> ${uniqueId}</p>

      <p>We are thrilled to have you join us as we celebrate this special occasion filled with joy, memories, and new beginnings. 🌟</p>

      <p>📌 <strong>Event Highlights</strong>:</p>
      <ul>
        <li>Meet and greet with fellow students and faculty 🤝</li>
        <li>Inspiring speeches and performances 🎤🎶</li>
        <li>A walk down memory lane for our departing seniors 👩‍🎓👨‍🎓</li>
      </ul>

      <p>📅 <strong>Mark Your Calendar</strong>:</p>
      <p>🗓️ Date: Yet to be Announced...</p>
      <p>📍 Venue: Auditorium, Nalanda College</p>

      <p>See you there!</p>

      <p>Best regards,</p>
      <p><strong>Team Nalanda College || Freshers</strong></p>
      
      <p>✨ Together, let’s make unforgettable memories! ✨</p>
    </div>
  `,
          attachments: [
            {
              filename: `${name}-Entry-ID-Card.pdf`,
              path: pdfPath,
            },
          ],
        });

        // Mark email as sent in the database
        await Seat.findByIdAndUpdate(_id, { emailSent: true });

        // Clean up temporary files
        await fs.promises.unlink(qrCodePath);
        await fs.promises.unlink(pdfPath);

        console.log(`Email sent to ${email}`);
      } catch (error) {
        console.error(`Error processing user ${email}:`, error);
      }
    }
  } catch (error) {
    console.error("Error in cron job:", error);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
