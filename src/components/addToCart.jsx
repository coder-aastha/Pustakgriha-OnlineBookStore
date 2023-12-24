import axios from 'axios';



 const CartService = {
  addToCart: async (bookId) => {
    try {

const response = await axios.post('/addToCart', { bookId });
      return response.data; // You can handle the response accordingly
    } catch (error) {
      console.error('Error adding to cart:', error);
      throw error;
    }
  },
};

 
  const handleAddToCart = async (bookId) => {
    try {
      await CartService.addToCart(bookId);
      // Optionally, you can provide user feedback (e.g., toast, alert) here
    } catch (error) {
      // Handle the error (e.g., show an error message)
      console.error('Error adding to cart:', error);
    }
  };
  const YourComponent = () => {
    const handleAddToCart = async (bookId) => {
      try {
        await CartService.addToCart(bookId);
        // Optionally, you can provide user feedback (e.g., toast, alert) here
      } catch (error) {
        // Handle the error (e.g., show an error message)
        console.error('Error adding to cart:', error);
      }
    };
  
    return (
      <div>
        {/* Your component JSX here */}
        <button onClick={() => handleAddToCart('yourBookId')}>
          Add to Cart
        </button>
      </div>
    );
  };
 
  
  

 
export default CartService;