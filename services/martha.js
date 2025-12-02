import { MARTHA_APP_AUTH, MARTHA_BASE } from "./config";

export function marthaPostSimple(queryName, body) {

  console.log("==== MARTHA DEBUG REQUEST ====");
  console.log("Query:", queryName);
  console.log("URL:", `${MARTHA_BASE}/${encodeURIComponent(queryName)}/execute`);
  console.log("Headers:", {
    auth: MARTHA_APP_AUTH,
    "Content-Type": "application/json"
  });
  console.log("Body:", body);
  console.log("==============================");

  return fetch(`${MARTHA_BASE}/${encodeURIComponent(queryName)}/execute`, {
    method: "POST",
    headers: { 
      auth: MARTHA_APP_AUTH,    // 🔥 IMPORTANT
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body),
  })
  .then((r) => r.json());
}


// LOGIN → email + password
export const selectUserAuth = (email, password) =>
  marthaPostSimple("select-user-auth", { email, password });

// SIGNUP → username + email + password
export const insertUser = (username, email, password) =>
  marthaPostSimple("insert-user", { username, email, password });
