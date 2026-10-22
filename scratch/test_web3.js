const { execSync } = require('child_process');

try {
  const cmd = `curl.exe -s -X POST https://api.web3forms.com/submit ` +
    `-H "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64)" ` +
    `-H "Origin: http://localhost:3000" ` +
    `-F "access_key=08733671-9205-44ca-9b07-965cf3115bb0" ` +
    `-F "name=Test User" ` +
    `-F "phone=9393591444" ` +
    `-F "message=Test Message"`;

  const out = execSync(cmd).toString();
  console.log("Response:", JSON.parse(out));
} catch (e) {
  console.error("Error:", e);
}
