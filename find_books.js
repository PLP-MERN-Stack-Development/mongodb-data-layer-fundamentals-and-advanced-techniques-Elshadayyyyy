import { connectDB } from "./connect.js";

async function findBooks() {
  const db = await connectDB();
  const books = db.collection("books");

  // Find all books
  const allBooks = await books.find({}).toArray();
  console.log("All books:", allBooks);

  // Find books published after 1866
  const modernBooks = await books.find({ year: { $gt: 1866 } }).toArray();
  console.log("Books after 1866:", modernBooks);

  // Find books by Jane Austen
  const austenBooks = await books.find({ author: "Jane Austen" }).toArray();
  console.log("Jane Austen books:", austenBooks);
}

findBooks();
