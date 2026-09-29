import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { name, phone, pageUrl } = await req.json();

    if (!name || !phone) {
      return NextResponse.json({ success: false, message: "Name and Phone required" }, { status: 400 });
    }

    const payload = {
      access_key: "08733671-9205-44ca-9b07-965cf3115bb0",
      subject: `🚨 NEW WEBSITE CUSTOMER LOGIN: ${name} (${phone})`,
      from_name: "Amaravathi Fast Car Travels Website",
      name: name,
      phone: phone,
      Customer_Name: name,
      Customer_Phone_Number: phone,
      Message: `New customer logged in on website.\nCustomer Name: ${name}\nCustomer Phone: ${phone}\nPage: ${pageUrl || 'Home'}`,
      Submitted_At: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })
    };

    console.log("Sending Login details to Web3Forms:", payload);

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
