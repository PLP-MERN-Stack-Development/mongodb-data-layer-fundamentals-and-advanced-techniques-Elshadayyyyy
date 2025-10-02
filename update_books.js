import { connectDB } from "./connect.js";

async function updateBooks() {
  const db = await connectDB();
  const books = db.collection("books");

  // Update pages of "pride and prejudice"
  const result = await books.updateOne(
    { title: "pride and prejudice" },
    { $set: { pages: 500 } }
  );

  console.log(`${result.modifiedCount} book(s) updated`);
}

updateBooks();
