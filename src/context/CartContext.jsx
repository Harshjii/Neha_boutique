import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([
    {
      id: '1',
      name: 'Noor Zardozi Velvet Lehenga',
      category: 'Bridal Couture',
      price: 3450,
      qty: 1,
      image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=800',
      size: 'Custom Fit',
      color: 'Royal Crimson'
    }
  ]);

  const [wishlistItems, setWishlistItems] = useState([
    {
      id: '2',
      name: 'Mehr Emerald Raw Silk Lehenga',
      category: 'Bridal Couture',
      price: 3800,
      badge: 'New Arrival',
      image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=800'
    }
  ]);

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [quickViewItem, setQuickViewItem] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);
  
  const [appliedPromo, setAppliedPromo] = useState(null);
  const [discountPercent, setDiscountPercent] = useState(0);

  const [lastOrder, setLastOrder] = useState(null);

  const [userProfile, setUserProfile] = useState({
    name: 'Princess Ananya Singh',
    email: 'ananya@royalheritage.com',
    phone: '+91 98765 43210',
    measurements: {
      bust: '34 in',
      waist: '28 in',
      hips: '38 in',
      height: '5 ft 7 in',
      lehengaLength: '42 in'
    },
    addresses: [
      {
        id: '1',
        title: 'Primary Residence',
        address: '14 Amrita Shergill Marg, Lutyens Delhi',
        city: 'New Delhi',
        postalCode: '110003',
        country: 'India'
      }
    ]
  });

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const addToCart = (item, options = {}) => {
    const size = options.size || item.size || 'Custom Fit';
    const color = options.color || item.color || 'Royal Crimson';
    const itemKey = `${item.name}-${size}-${color}`;

    setCartItems(prev => {
      const existing = prev.find(i => `${i.name}-${i.size}-${i.color}` === itemKey);
      if (existing) {
        return prev.map(i => `${i.name}-${i.size}-${i.color}` === itemKey ? { ...i, qty: i.qty + 1 } : i);
      }
      return [...prev, { ...item, id: Date.now().toString(), qty: 1, size, color }];
    });
    showToast(`"${item.name}" added to Shopping Bag`);
    setIsCartOpen(true);
  };

  const updateQty = (id, change) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = item.qty + change;
        return newQty > 0 ? { ...item, qty: newQty } : null;
      }
      return item;
    }).filter(Boolean));
  };

  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(i => i.id !== id));
  };

  const toggleWishlist = (item) => {
    setWishlistItems(prev => {
      const exists = prev.some(i => i.name === item.name);
      if (exists) {
        showToast(`Removed from Wishlist`);
        return prev.filter(i => i.name !== item.name);
      } else {
        showToast(`Added to Wishlist`);
        return [...prev, item];
      }
    });
  };

  const isInWishlist = (name) => {
    return wishlistItems.some(i => i.name === name);
  };

  const applyPromoCode = (code) => {
    if (code.toUpperCase() === 'NEHAVIP10') {
      setAppliedPromo('NEHAVIP10');
      setDiscountPercent(10);
      showToast('10% VIP Discount Applied!');
      return true;
    } else {
      showToast('Invalid Coupon Code. Try "NEHAVIP10"');
      return false;
    }
  };

  const totalCount = cartItems.reduce((acc, item) => acc + item.qty, 0);
  const rawSubtotal = cartItems.reduce((acc, item) => acc + (item.price * item.qty), 0);
  const discountAmount = Math.round((rawSubtotal * discountPercent) / 100);
  const subtotal = rawSubtotal - discountAmount;

  return (
    <CartContext.Provider value={{
      cartItems,
      setCartItems,
      wishlistItems,
      toggleWishlist,
      isInWishlist,
      isCartOpen,
      setIsCartOpen,
      isMobileNavOpen,
      setIsMobileNavOpen,
      quickViewItem,
      setQuickViewItem,
      toastMessage,
      showToast,
      addToCart,
      updateQty,
      removeFromCart,
      totalCount,
      rawSubtotal,
      discountAmount,
      discountPercent,
      subtotal,
      appliedPromo,
      applyPromoCode,
      lastOrder,
      setLastOrder,
      userProfile,
      setUserProfile
    }}>
      {children}
      {toastMessage && (
        <div style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          background: 'var(--color-primary)',
          color: 'var(--color-gold-light)',
          border: '1px solid var(--color-gold)',
          padding: '1rem 1.5rem',
          borderRadius: '4px',
          fontSize: '0.85rem',
          letterSpacing: '0.05em',
          boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem'
        }}>
          <span className="material-symbols-outlined" style={{ color: 'var(--color-gold)' }}>check_circle</span>
          {toastMessage}
        </div>
      )}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
