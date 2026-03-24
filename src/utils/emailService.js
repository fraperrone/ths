// armamos el send email

// src/utils/emailService.js
export default async function sendEmail({ name, email, message }) {
  try {
    const response = await fetch("https://formcarry.com/s/lzP9H92173G", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, message })
    });

    return await response.json();
  } catch (error) {
    return { code: 500, message: error.message || "Error desconocido" };
  }
}