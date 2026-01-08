# 📝 Notes App – Full Stack CRUD Application

A simple full-stack Notes Application built using Next.js (App Router), MongoDB, Mongoose, and Tailwind CSS. The application supports complete CRUD operations (Create, Read, Update, Delete).

🚀 Features
- Create a new note
- View all notes
- Edit existing notes
- Delete notes
- MongoDB database integration
- RESTful API using Next.js App Router
- Responsive UI with Tailwind CSS

🛠 Tech Stack
Frontend:
- Next.js (App Router)
- React (Client Components)
- Tailwind CSS

Backend:
- Next.js API Routes
- MongoDB
- Mongoose ODM

⚙️ Environment Variables
Create a .env.local file in the project root and add:
MONGODB_URI=mongodb://127.0.0.1:27017/notesdb
Make sure MongoDB server is running on port 27017.

📦 Installation & Setup
1. Clone the repository
git clone <repository-url>
cd notes-app

2. Install dependencies
npm install

3. Start MongoDB server (Windows)
net start MongoDB

4. Run the development server
npm run dev

5. Open in browser
http://localhost:3000

🔌 API Endpoints
GET /api/notes        → Fetch all notes
POST /api/notes       → Create a new note
PUT /api/notes/:id    → Update an existing note
DELETE /api/notes/:id → Delete a note

POST request body example:
{ "title": "Sample Title", "content": "Sample Content" }


📌 Future Enhancements
- Authentication
- Search and filter notes
- Pagination
- Optimistic UI updates
- Deployment using Vercel and MongoDB Atlas


