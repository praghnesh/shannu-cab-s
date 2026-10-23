async function test() {
  // Test FormSubmit
  try {
    const fsRes = await fetch("https://formsubmit.co/ajax/fastcartravels4@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        name: "Test FormSubmit User",
        email: "fastcartravels4@gmail.com",
        message: "This is a direct verification test"
      })
    });
    const fsData = await fsRes.json();
    console.log("FormSubmit result:", fsData);
  } catch (err) {
    console.error("FormSubmit error:", err);
  }

  // Test Web3Forms
  try {
    const w3Res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        access_key: "08733671-9205-44ca-9b07-965cf3115bb0",
        name: "Test Web3Forms User",
        message: "This is a web3forms verification test"
      })
    });
    const w3Data = await w3Res.json();
    console.log("Web3Forms result:", w3Data);
  } catch (err) {
    console.error("Web3Forms error:", err);
  }
}

test();
