const Booklisting = require('../models/booklisting');
const Review = require('../models/reviewModel');

const getAllBooks =async (req,res)=> {
    let book;
    try{
        book = await Booklisting.find();
    } catch (err){
        console.log(err);
    }
    if(!book){
        return res.status(404).json({message:"No product found"});
    }
    return res.status(200).json({book})       
    }

const book = async (req, res) => {
    try {
        // Destructuring values from the request body
        const { bookTitle, authorName, category, bookDescription, imageURL, price, available } = req.body;

        // Creating a new booklisting using the Booklisting model
        const booklisting = await Booklisting.create({
            bookTitle,
            authorName,
            category,
            bookDescription,
            imageURL,
            price,
            available,
        });

        // Sending the created booklisting as the response
        res.send(booklisting);
    } catch (error) {
        // Handling errors
        console.error('Error uploading book:', error);
        res.status(500).json({ error: 'An error occurred while uploading the book' });
    }
};


const getById = async (req, res) => {
    try {
        const id = req.params.id;

        // Find the book by ID using the Booklisting model
        const book = await Booklisting.findById(id);

        if (!book ) {
            return res.status(404).json({ error: 'Book not found' });
        }

        // Send the book as the response
        res.send(book );
    } catch (error) {
        console.error('Error getting book by ID:', error);
        res.status(500).json({ error: 'An error occurred while getting the book by ID' });
    }
};


const updateById = async (req, res) => {
    try {
        const id = req.params.id;
        const  {bookTitle,authorName,category,bookDescription,imageURL,price,available}=req.body;

        // Find the book by ID and update it using the Booklisting model
        const book = await Booklisting.findByIdAndUpdate(id, {
            bookTitle,
            authorName,
            category,
            bookDescription,
            imageURL,
            price,
            available
        });

        if (!book) {
            return res.status(404).json({ error: 'Book not found' });
        }

        // Send the updated book as the response
        res.send(book);
    } catch (error) {
        console.error('Error updating book by ID:', error);
        res.status(500).json({ error: 'An error occurred while updating the book by ID' });
    }
};

const deleteById = async (req, res) => {
    try {
        const id = req.params.id;

        // Find the book by ID and delete it using the Booklisting model
        const deletedBook = await Booklisting.findByIdAndDelete(id);

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

const category = async (req, res) => {
    try {
      const { category } = req.params;
    //   console.log('Received category:', category);
 
      if (!category) {
        return res.status(400).json({ error: 'Category is required' });
      }
      const books = await Booklisting.find({ category: category });
      if (!books || books.length === 0) {
        return res.status(404).json({ message: 'No books found in the specified category' });
      }
      res.json({ books });
    } catch (error) {
      console.error('Error fetching books by category:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  const authorName = async (req, res) => {
    try {
        const { authorName } = req.params;

        if (!authorName) {
            return res.status(400).json({ error: 'Author is required' });
        }

        const authorbooks = await Booklisting.find({ authorName: authorName });

        if (!authorbooks || authorbooks.length === 0) {
            return res.status(404).json({ message: 'No books found for the specific author' });
        }

        res.json({ authorbooks });
    } catch (error) {
        console.error('Error fetching books by authorname:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const searchBooks = async (req, res) => {
    try {
        const { searchTerm } = req.query;
 
        if (!searchTerm) {
            return res.status(400).json({ error: 'Search term is required' });
        }
       
        const regex = new RegExp(searchTerm, 'i');
        const book = await Booklisting.find({
            $or: [
                { bookTitle: regex },
                { authorName: regex },
                {category:regex},
            ],
        });
 
        if (!book || book.length == 0) {
            return res.status(404).json({ message: 'No matching books found' });
        }
 
        const bookWithCategory = book.map(book => ({
            _id: book._id,
            bookTitle: book.bookTitle,
            authorName: book.authorName,
            category: book.category,
            bookDescription: book.bookDescription,
            imageURL: book.imageURL,
            price: book.price,
            available: book.available,
        }));
 
        return res.status(200).json({ book: bookWithCategory });
    } catch (error) {
        console.error('Error searching books:', error);
        res.status(500).json({ error: 'An error occurred while searching for books' });
    }
};

const reviewSchema = async (req, res) => {
    try {
      const { bookId, rating } = req.body;
  
      const newReview = new Review({ bookId, rating });
      await newReview.save();
  
      res.status(201).json({ message: 'Review submitted successfully' });
    } catch (error) {
      console.error('Error submitting review:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  

module.exports = {
    book,
    getAllBooks,
    getById,
    updateById,
    deleteById,
    searchBooks,
    reviewSchema,
    category,
    authorName
};