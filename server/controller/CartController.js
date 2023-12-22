const Cart = require('../models/Cart');


const cartbook = async (req, res) => {
    try {
        // Destructuring values from the request body
        const {quantity,price, imageURL, bookTitle,} = req.body;

        // Creating a new booklisting using the Booklisting model
        const cart = await Cart.create({
          quantity,
          price,
          bookTitle,
          imageURL,
        });

        // Sending the created booklisting as the response
        res.send(cart);
    } catch (error) {
        // Handling errors
        console.error('Error uploading book:', error);
        res.status(500).json({ error: 'An error occurred while uploading the book' });
    }
};



const deleteByCartId = async (req, res) => {
    try {
        const id = req.params.id;

        // Find the book by ID and delete it using the Booklisting model
        const deletedBook = await Cart.findByIdAndDelete(id);

        if (!deletedBook) {
            return res.status(404).json({ error: 'Book not found' });
        }

        // Send a success message as the response
        res.json({ message: 'Book deleted successfully' });
    } catch (error) {
        console.error('Error deleting book by ID:', error);
        res.status(500).json({ error: 'An error occurred while deleting the book by ID' });
    }
};


module.exports = {
    cartbook,
    deleteByCartId,
};