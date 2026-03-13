export function getWhatsappHref({ whatsappNumberE164, brandName }) {
  if (!whatsappNumberE164) return null;
  const number = String(whatsappNumberE164).replace(/[^\d]/g, "");
  if (!number) return null;
  const text = encodeURIComponent(
    `Assalamu’alaikum, saya ingin booking menginap di ${brandName}.`,
  );
  return `https://wa.me/${number}?text=${text}`;
}

export function getMapEmbedSrc(address) {
  if (address.startsWith("https://")) {
    return address;
  }
  return `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;
}

export function getMailtoHref(email, subject) {
  if (!email) return null;
  const clean = String(email).trim();
  if (!clean) return null;
  const q = subject ? `?subject=${encodeURIComponent(subject)}` : "";
  return `mailto:${clean}${q}`;
}
