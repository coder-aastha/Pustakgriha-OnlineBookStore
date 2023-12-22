import axios from 'axios';
import CartService from './CartService';
import axios from 'axios';
const API_BASE_URL = 'your_backend_base_url'; // Replace with your actual backend URL
 
const CartService = {
  addToCart: async (bookId) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/api/cart/add`, { bookId });
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
 
  return (
<>
      {/* ... your existing code ... */}
<div className="search-results-container">
        {isActive && book.length > 0 && (
<div>
            {book.map((book) => (
<Link
                to={`/booklisting/${book._id}`}
                key={book._id}
                className="book-card"
                onClick={() => handleAddToCart(book._id)}
>
                {/* ... your existing code ... */}
</Link>
            ))}
</div>
        )}
</div>
      {/* ... your existing code ... */}
</>
  );

 
export default SearchBar;