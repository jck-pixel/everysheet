export type LocalAccount = {
  name: string;
  salt: string;
  passwordHash: string;
  createdAt: string;
};

const ACCOUNT_KEY = "everyformula-local-account";
const SESSION_KEY = "everyformula-local-signed-in";

function bytesToBase64(bytes: Uint8Array) {
  let binary = "";
  bytes.forEach((byte) => { binary += String.fromCharCode(byte); });
  return btoa(binary);
}

async function hashPassword(password: string, salt: string) {
  const material = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(password),
    "PBKDF2",
    false,
    ["deriveBits"],
  );
  const bits = await crypto.subtle.deriveBits(
    {
      name: "PBKDF2",
      salt: new TextEncoder().encode(salt),
      iterations: 120_000,
      hash: "SHA-256",
    },
    material,
    256,
  );
  return bytesToBase64(new Uint8Array(bits));
}

export function getLocalAccount(): LocalAccount | null {
  try {
    return JSON.parse(localStorage.getItem(ACCOUNT_KEY) || "null") as LocalAccount | null;
  } catch {
    return null;
  }
}

export function isLocalAccountSignedIn() {
  return Boolean(getLocalAccount()) && localStorage.getItem(SESSION_KEY) === "1";
}

export async function createLocalAccount(name: string, password: string) {
  const salt = bytesToBase64(crypto.getRandomValues(new Uint8Array(16)));
  const account: LocalAccount = {
    name: name.trim(),
    salt,
    passwordHash: await hashPassword(password, salt),
    createdAt: new Date().toISOString(),
  };
  localStorage.setItem(ACCOUNT_KEY, JSON.stringify(account));
  localStorage.setItem(SESSION_KEY, "1");
  localStorage.setItem("everyformula-access-choice", "local");
  return account;
}

export async function signInLocalAccount(name: string, password: string) {
  const account = getLocalAccount();
  if (!account || account.name !== name.trim()) return false;
  const passwordHash = await hashPassword(password, account.salt);
  if (passwordHash !== account.passwordHash) return false;
  localStorage.setItem(SESSION_KEY, "1");
  localStorage.setItem("everyformula-access-choice", "local");
  return true;
}

export function signOutLocalAccount() {
  localStorage.removeItem(SESSION_KEY);
  localStorage.removeItem("everyformula-access-choice");
}

export function deleteLocalAccount() {
  const account = getLocalAccount();
  localStorage.removeItem(ACCOUNT_KEY);
  localStorage.removeItem(SESSION_KEY);
  localStorage.removeItem("everyformula-access-choice");
  localStorage.removeItem("everyformula-guest-usage");
  localStorage.removeItem("everyformula-language");
  localStorage.removeItem("everyformula-tool");
  localStorage.removeItem("everyformula-theme");
  if (account) localStorage.removeItem(`everyformula-history:${account.name}`);
  localStorage.removeItem("everyformula-history:guest");
}
