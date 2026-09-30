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

    const payload = {
      access_key: "08733671-9205-44ca-9b07-965cf3115bb0",
      subject,
      from_name: "Amaravathi Fast Car Travels Website",
      Customer_Name: name,
      Phone_Number: phone,
      Trip_Type: tripType || "N/A",
      From_Location: from || "N/A",
      To_Location: to || "N/A",
      Duration: duration || "N/A",
      Travel_Date: date || "N/A",
      Travel_Time: time || "N/A",
      Car_Type: carType || "N/A",
      Message: messageLines,
      Submitted_At: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })
    };

    console.log("Sending booking details to Web3Forms:", payload);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(payload)
    });

    const data = await response.json();
    console.log("Web3Forms API response:", data);

    if (data.success) {
      return NextResponse.json({ success: true, message: "Email sent successfully", data });
    } else {
      return NextResponse.json({ success: false, message: data.message || "Failed to send email", data }, { status: 400 });
    }
  } catch (error: any) {
    console.error("Login Email API error:", error);
    return NextResponse.json({ success: false, message: error.message || "Internal Server Error" }, { status: 500 });
  }
}

