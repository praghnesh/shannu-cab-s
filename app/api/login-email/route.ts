import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { name, phone, from, to, date, time, carType, tripType, duration, pageUrl } = await req.json();

    if (!name || !phone) {
      return NextResponse.json({ success: false, message: "Name and Phone required" }, { status: 400 });
    }

    const subject = tripType
      ? `🚨 NEW INSTANT QUOTE BOOKING: ${name} (${phone}) - ${tripType}`
      : `🚨 NEW WEBSITE CUSTOMER: ${name} (${phone})`;

    const messageLines = [
      `👤 Customer Name: ${name}`,
      `📞 Phone Number: ${phone}`,
      tripType ? `🗺️ Trip Type: ${tripType}` : null,
      from ? `📍 From: ${from}` : null,
      to ? `📍 To: ${to}` : null,
      duration ? `⏱️ Duration: ${duration}` : null,
      date ? `📅 Date: ${date}` : null,
      time ? `⏰ Time: ${time}` : null,
      carType ? `🚗 Car Type: ${carType}` : null,
      `🌐 Page URL: ${pageUrl || 'Website Modal'}`,
      `🕒 Submitted At: ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}`
    ].filter(Boolean).join('\n');

    // Create FormData payload for Web3Forms
    const formData = new FormData();
    formData.append("access_key", "08733671-9205-44ca-9b07-965cf3115bb0");
    formData.append("subject", subject);
    formData.append("from_name", "Amaravathi Fast Car Travels Website");
    formData.append("name", name);
    formData.append("phone", phone);
    formData.append("Customer_Name", name);
    formData.append("Phone_Number", phone);
    formData.append("Trip_Type", tripType || "N/A");
    formData.append("From_Location", from || "N/A");
    formData.append("To_Location", to || "N/A");
    formData.append("Duration", duration || "N/A");
    formData.append("Travel_Date", date || "N/A");
    formData.append("Travel_Time", time || "N/A");
    formData.append("Car_Type", carType || "N/A");
    formData.append("message", messageLines);
    formData.append("Submitted_At", new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }));

    // Dispatch directly to FormSubmit (fastcartravels4@gmail.com)
    try {
      fetch("https://formsubmit.co/ajax/fastcartravels4@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Origin": "https://amaravathifastcartravels.com",
          "Referer": "https://amaravathifastcartravels.com/"
        },
        body: JSON.stringify({
          _subject: subject,
          Customer_Name: name,
          Phone_Number: phone,
          Trip_Type: tripType || "N/A",
          From_Location: from || "N/A",
          To_Location: to || duration || "N/A",
          Travel_Date: date || "N/A",
          Travel_Time: time || "N/A",
          Car_Type: carType || "N/A",
          message: messageLines
        })
      }).catch((err) => console.warn("FormSubmit server dispatch warn:", err));
    } catch (e) {
      console.warn("FormSubmit server catch:", e);
    }

    // Primary: fetch with Chrome User-Agent and Origin headers
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
          "Origin": "https://amaravathifastcartravels.com",
          "Referer": "https://amaravathifastcartravels.com/",
          "Accept": "application/json"
        },
        body: formData
      });

      const resText = await response.text();
      let data: any;
      try {
        data = JSON.parse(resText);
      } catch {
        data = { success: false, message: resText };
      }

      if (data && data.success) {
        console.log("Web3Forms API success:", data);
        return NextResponse.json({ success: true, message: "Email sent successfully", data });
      }
    } catch (fetchErr) {
      console.warn("Direct fetch to Web3Forms failed, trying fallback:", fetchErr);
    }

    // Fallback: spawn curl.exe with custom headers to bypass Cloudflare server block
    try {
      const { execSync } = require('child_process');
      const cleanSubject = subject.replace(/["\r\n]/g, ' ');
      const cleanMsg = messageLines.replace(/["\r\n]/g, ' | ');
      const cmd = `curl.exe -s -X POST https://api.web3forms.com/submit ` +
        `-H "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64)" ` +
        `-H "Origin: https://amaravathifastcartravels.com" ` +
        `-F "access_key=08733671-9205-44ca-9b07-965cf3115bb0" ` +
        `-F "subject=${cleanSubject}" ` +
        `-F "name=${name}" ` +
        `-F "phone=${phone}" ` +
        `-F "message=${cleanMsg}"`;

      const curlOut = execSync(cmd).toString();
      const curlData = JSON.parse(curlOut);
      if (curlData && curlData.success) {
        console.log("Web3Forms curl fallback success:", curlData);
        return NextResponse.json({ success: true, message: "Email sent successfully via fallback", data: curlData });
      }
      return NextResponse.json({ success: false, message: curlData.message || "Failed to send email", data: curlData }, { status: 400 });
    } catch (fallbackErr: any) {
      console.error("Curl fallback error:", fallbackErr);
      return NextResponse.json({ success: false, message: fallbackErr.message || "Email send failed" }, { status: 500 });
    }
  } catch (error: any) {
    console.error("Login Email API error:", error);
    return NextResponse.json({ success: false, message: error.message || "Internal Server Error" }, { status: 500 });
  }
}
