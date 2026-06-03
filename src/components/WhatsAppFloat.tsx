const WHATSAPP_URL = "https://wa.me/51999999999?text=Hola%20Valentinos%20Chicken%2C%20quiero%20hacer%20un%20pedido";

export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Pedir por WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <span className="absolute inset-0 rounded-full animate-pulse-ring" />
      <span className="relative flex items-center gap-3 rounded-full bg-[var(--whatsapp)] px-5 py-4 text-white font-semibold shadow-2xl transition-transform duration-300 group-hover:scale-105">
        <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden>
          <path d="M19.05 4.91A10 10 0 0 0 4.1 18.36L3 22l3.74-1.08a10 10 0 0 0 14.32-12.6 9.93 9.93 0 0 0-2-3.41Zm-7.1 15.39h-.01a8.3 8.3 0 0 1-4.23-1.16l-.3-.18-2.22.64.65-2.16-.2-.32a8.3 8.3 0 1 1 6.31 3.18Zm4.55-6.22c-.25-.13-1.47-.73-1.7-.81-.23-.08-.4-.13-.56.13s-.64.81-.79.98c-.14.17-.29.19-.54.06a6.8 6.8 0 0 1-2-1.24 7.55 7.55 0 0 1-1.39-1.73c-.14-.25 0-.38.11-.5.11-.11.25-.29.37-.43a1.7 1.7 0 0 0 .25-.42.46.46 0 0 0 0-.43c-.06-.13-.56-1.35-.77-1.85-.2-.48-.4-.42-.56-.43h-.48a.93.93 0 0 0-.67.31 2.82 2.82 0 0 0-.88 2.1c0 1.24.9 2.43 1.03 2.6.13.17 1.78 2.72 4.32 3.81a14.4 14.4 0 0 0 1.44.53 3.48 3.48 0 0 0 1.59.1c.49-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.29Z" />
        </svg>
        <span className="hidden sm:inline">Pedir por WhatsApp</span>
      </span>
    </a>
  );
}

export { WHATSAPP_URL };
