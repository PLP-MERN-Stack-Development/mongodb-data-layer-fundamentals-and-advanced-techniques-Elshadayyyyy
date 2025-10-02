import { connectDB } from "./connect.js";

async function deleteBooks() {
  const db = await connectDB();
  const books = db.collection("books");

  // Delete a book by title
  const result = await books.deleteOne({ title: "A Little Life" });
  console.log(`${result.deletedCount} book(s) deleted`);
}

deleteBooks();
