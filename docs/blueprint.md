# **App Name**: MatgerTech

## Core Features:

- Product Catalog: Display products with images, descriptions, and prices.
- Shopping Cart: Allow users to add, remove, and update items in a cart.
- Wishlist: Allow users to save desired products in a wishlist.
- Order Submission via WhatsApp: Send order details to the store's WhatsApp number using the Twilio API via API route (or client-side with security warning).
- Order History: Maintain a record of past orders with details.
- Product Feature Icon Generation: The app will tool use generative AI to parse product descriptions, identify key features, and display associated icons (e.g., battery icon for products with 'battery').
- Theme Switching: Switch between light and dark themes to accommodate different user preferences and lighting conditions.

## Style Guidelines:

- Primary color: A modern light brown (#A67B5B), evoking feelings of earthiness and stability, suited to an ecommerce site.
- Background color: A very light beige (#F5F5DC), of a similar hue as the primary color, that conveys neutrality while harmonizing with the main branding.
- Accent color: A subdued olive green (#808000), closely analogous to the primary and a bit darker and more saturated, that provides highlights without clashing.
- Font pairing: 'Playfair' (serif) for headlines, 'PT Sans' (sans-serif) for body text.
- Use icons from Lucide React or Heroicons for a consistent and modern look.
- Header is sticky at the top of the page. The upper section contains the store name and truck icon. The lower section contains main navigation buttons.
- A brief green message should appear upon successfully adding items to cart: "تمت الإضافة بنجاح"