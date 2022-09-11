const FIREBASE_DOMAIN = "https://login-8dbde-default-rtdb.firebaseio.com";

export async function getAllUsers(userData) {
  console.log(userData);
  const response = await fetch(`${FIREBASE_DOMAIN}/users.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch users data");
  }

  const users = Object.values(data);
  let returnData;
  console.log(users);
  const index = users.findIndex((user) => user.email == userData.email);
  if (index === -1) {
    throw new Error("Wrong email");
  } else if (users[index].password === userData.password)
    returnData = users[index].name;

  return returnData;
}

export async function addUser(userData) {
  const response = await fetch(`${FIREBASE_DOMAIN}/users.json`, {
    method: "POST",
    body: JSON.stringify(userData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not create quote.");
  }

  return null;
}
