export interface User {
  id?: string;
  email: string;
  name?: string;
  role?: string;
  password: string;
}

export async function getUser(email: string, password: string) {
  const url = new URL("/user/login", process.env.NEXT_PUBLIC_API_URL);
  console.log(url.href);
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (response.status !== 200) {
    const error = response.json();
    console.log(error);
    return null;
  } else {
    return response.json();
  }
}

export async function createUser(email: string, password: string) {
  const url = new URL("/user/register", process.env.API_URL);
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (response.status !== 200) {
    const error = response.json();
    console.log(error);
    return null;
  } else {
    return response.json();
  }
}
