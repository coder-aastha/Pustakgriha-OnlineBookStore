const Cart = mongoose.model('Cart', {
   quantity: Number,
   imageURL: String,
   bookTitle: String,
 });
 
 app.use(bodyParser.json());
 
 app.post('/addToCart', async (req, res) => {
   try {
     const { quantity, imageURL, bookTitle } = req.body;
 
     const newCartItem = new Cart({ quantity, imageURL, bookTitle });
     await newCartItem.save();
 
     res.status(200).json({ message: 'Item added to cart successfully' });
   } catch (error) {
     console.error('Error adding item to cart:', error);
     res.status(500).json({ error: 'An error occurred while adding the item to the cart' });
   }
 });