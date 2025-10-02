import { connectDB } from "./connect.js";

async function insertBooks() {
  const db = await connectDB();
  const books = db.collection("books");

  const sampleBooks = [
    { title: "pride and prejudice", author: "Jane Austen", year: 1813, pages: 448 },
    { title: "crime and punishment", author: "Fyodor Dostoevsky", year: 1866, pages: 565 },
    { title: "A Little Life", author: "Hanya Yanagihara", year: 2015, pages: 832 },
  ];

  const result = await books.insertMany(sampleBooks);
  console.log(`${result.insertedCount} books inserted`);
}

insertBooks();
