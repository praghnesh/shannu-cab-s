const https = require('https');

const postData = JSON.stringify({
  name: "Verification Test",
  message: "Testing email delivery to fastcartravels4@gmail.com"
});

const req = https.request({
  hostname: 'formsubmit.co',
  path: '/ajax/fastcartravels4@gmail.com',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Content-Length': Buffer.byteLength(postData)
  }
}, (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    console.log("Status Code:", res.statusCode);
    console.log("Response Body:", data);
  });
});

req.on('error', (e) => {
  console.error("Request Error:", e);
});

req.write(postData);
req.end();
