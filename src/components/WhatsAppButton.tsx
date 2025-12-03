import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "917796869904";
  const message = "Hello! I'm interested in your gold jewellery collection.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50 bg-[#25D366] text-white p-3 rounded-full shadow-lg flex items-center justify-center"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-5 h-5 fill-current" />
    </a>
  );
};

export default WhatsAppButton;
