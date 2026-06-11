function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ firstName: "Alan", url: "https://theoryAlanaticality.com" });
    }, 3000);
  });
}

async function getUserData() {
  try {
    console.log("Fetching User Data...");
    let userData = await fetchUserData();
    console.log("userData:", userData);
  } catch (error) {
    console.log("Error fetching data", error);
  }
}

getUserData();
