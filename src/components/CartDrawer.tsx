import { X, Plus, Minus, ShoppingBag, Trash2 } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";

const CartDrawer = () => {
  const { items, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, totalItems } = useCart();

  if (!isCartOpen) return null;

  const handleWhatsAppOrder = () => {
    const orderDetails = items
      .map((item) => `${item.name} (${item.weight}) x${item.quantity}`)
      .join("\n");
    const message = `Hi, I would like to order:\n\n${orderDetails}\n\nPlease confirm availability and price.`;
    const whatsappUrl = `https://wa.me/917796869904?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 z-50"
        onClick={() => setIsCartOpen(false)}
      />
      <div className="fixed right-0 top-0 h-full w-full max-w-sm bg-background z-50 shadow-xl flex flex-col">
        <div className="flex items-center justify-between p-3 border-b border-border/30">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-4 h-4 text-gold" />
            <h2 className="text-sm font-heading font-semibold text-foreground">
              Cart ({totalItems})
            </h2>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-1 rounded hover:bg-beige"
          >
            <X className="w-4 h-4 text-foreground" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-3">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-10 h-10 text-muted-foreground mb-2" />
              <p className="text-xs font-body text-muted-foreground">
                Your cart is empty
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-2 bg-beige rounded-lg p-2"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-14 h-14 object-contain rounded bg-background"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-[10px] font-body font-medium text-foreground line-clamp-2">
                      {item.name}
                    </h4>
                    <p className="text-[9px] font-body text-gold font-semibold">
                      {item.weight}
                    </p>
                    <div className="flex items-center gap-1 mt-1">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-5 h-5 flex items-center justify-center rounded bg-background border border-border/30"
                      >
                        <Minus className="w-2.5 h-2.5" />
                      </button>
                      <span className="text-[10px] font-body w-5 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-5 h-5 flex items-center justify-center rounded bg-background border border-border/30"
                      >
                        <Plus className="w-2.5 h-2.5" />
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="p-1 text-destructive hover:bg-destructive/10 rounded self-start"
                  >
                    <Trash2 className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="p-3 border-t border-border/30 space-y-2">
            <Button
              onClick={handleWhatsAppOrder}
              className="w-full bg-green-600 hover:bg-green-700 text-white text-xs h-8"
            >
              Order via WhatsApp
            </Button>
            <p className="text-[8px] text-center text-muted-foreground">
              Price will be confirmed based on current gold rate
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
