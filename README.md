# Simple_React_Project
Live link : https://bespoke-buttercream-0dfa57.netlify.app/
#Book Management App 📚
A React-based web application for managing and exploring a collection of books with features like wishlisting, reading lists, and detailed book information.

🚀 Project Features
✅ Browse a collection of books with cover images
✅ View detailed book information (title, author, rating, etc.)
✅ Add books to reading list
✅ Add books to wishlist
✅ Separate tabs for viewing reading list and wishlist
✅ Modern, responsive UI using Tailwind CSS
✅ Toast notifications for user actions
✅ React Router for seamless navigation
✅ Sort By Ratings and No of Pages



🏗️ Tech Stack
🔹 Frontend Framework
React - A declarative, component-based JavaScript library for building interactive UIs.

React Router - For client-side routing and navigation.

🔹 JavaScript Language Features
ES6+ (Arrow functions, destructuring, template literals)

React Hooks (useState, useEffect, etc.)

Functional components

Context API for state management

🔹 Styling & UI
Tailwind CSS - Utility-first CSS framework for rapid UI design.

DaisyUI - Component library for Tailwind CSS.

React Icons (Lucide) - For high-quality icons.

🔹 Additional Libraries
React Tabs - For tabbed interface in ListedBooks component.

React Toastify - For toast notifications.

React Rating - For displaying star ratings (could be implemented).

📦 Book Data (JSON Format)

json
{
  "bookId": 1,
  "bookName": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "image": "https://i.ibb.co.com/khHN7Pk/9780143454212.jpg",
  "review": "'The Great Gatsby' by F. Scott Fitzgerald is a timeless masterpiece...",
  "totalPages": 192,
  "rating": 4.5,
  "category": "Classic",
  "tags": ["Fiction", "Romance"],
  "publisher": "Scribner",
  "yearOfPublishing": 1925
}

📂 Project Structure
src/
├── components/
│   ├── Banner/
│   ├── Book/
│   ├── BookDetail/
│   ├── Books/
│   ├── Dashboard/
│   ├── ErrorPage/
│   ├── Footer/
│   ├── Home/
│   ├── ListedBooks/
│   ├── Navbar/
│   └── Root/
├── utilities/
│   └── addToDb.js
├── App.jsx
└── main.jsx
🌟 Key Components
Book: Displays individual book card with basic info

BookDetails: Shows detailed information about a selected book

ListedBooks: Manages and displays reading list and wishlist in tabs

Navbar: Responsive navigation bar with links

Local Storage Utilities: Handles persistence of reading lists and wishlists

🚀 Future Enhancements
User authentication system

Search and filtering functionality

Book recommendation system

Dark mode toggle

Responsive improvements for mobile devices

Integration with book APIs for expanded collection

