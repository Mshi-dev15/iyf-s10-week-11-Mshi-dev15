# Week 11: Database Integration & Authentication - CommunityHub API

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-v24.14.0-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/Express.js-4.x-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express">
  <img src="https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB">
  <img src="https://img.shields.io/badge/Mongoose-ODM-880000?style=for-the-badge&logo=mongoose&logoColor=white" alt="Mongoose">
  <img src="https://img.shields.io/badge/JWT-Authentication-000000?style=for-the-badge&logo=json-web-tokens&logoColor=white" alt="JWT">
  <img src="https://img.shields.io/badge/Bcrypt-Password_Hashing-FCD022?style=for-the-badge&logo=bcrypt&logoColor=black" alt="Bcrypt">
</p>

---

## Author

- **Name**  Faith Mshiki 
- **GitHub**  [@Mshi-dev15](https://github.com/Mshi-dev15) 
- **Program**  IYF Weekend Academy — Season 10 
- **Week** 11: Database Integration & Authentication 
- **Date**  April 24, 2026 

---

## 📖 Project Description
This project is a backend API for the CommunityHub application with full database integration and user authentication.  
It connects an Express server to MongoDB using Mongoose and implements secure user registration and login using JWT.  

The system supports CRUD operations for posts and comments, user authentication, and authorization where users can only manage their own content.

---

## 🛠️ Technologies Used

- **Runtime:** Node.js v24.14.0, Express.js 4.x
- **Database:** MongoDB Atlas (Cloud), Mongoose ODM
- **Authentication:** JSON Web Tokens (jsonwebtoken), Password Hashing (bcryptjs)
- **Development:** Nodemon (hot-reload), dotenv (environment variables), CORS middleware
- **Testing:** Thunder Client / Postman

---

## 🚀 Features

- ✅ Mongoose models for Posts, Comments, and Users
- ✅ Full CRUD operations for posts
- ✅ Comments system linked to posts
- ✅ Search, filtering, sorting, and pagination
- ✅ User registration with validation
- ✅ Secure password hashing using bcrypt
- ✅ User login with JWT authentication
- ✅ Protected routes (only logged-in users can access)
- ✅ Role-based authorization (user/admin)
- ✅ Users can only edit/delete their own posts
- ✅ Relationship between users and posts
- ✅ Token-based authentication middleware

---

## ⚙️ How to Run

### 1️⃣ Prerequisites
- Node.js v20+
- npm or yarn
- MongoDB Atlas account (free tier)

### 2️⃣ Clone & Install
# Clone the repository
- git clone https://github.com/Mshi-dev15/iyf-s10-week-11-Mshi-dev15.git
- cd iyf-s10-week-11-Mshi-dev15
# Install dependencies
npm install


### 3️⃣ Configure Environment Variables
- MONGODB_URI=your_uri_here
- PORT=3000
- JWT_SECRET=your-secret
- JWT_EXPIRES_IN=7d

### 4️⃣ Start the Server
# Development (with hot-reload)
- npm run dev
# Production
- npm start

---

## 🧠 Lessons Learned
- How to connect a Node.js app to MongoDB using Mongoose
- Designing schemas and relationships between models
- Implementing CRUD operations with a database
- Using JWT for authentication and session management
- Securing passwords using hashing (bcrypt)
- Creating middleware for route protection
- Implementing authorization logic (ownership & roles)
- Structuring a scalable backend project

---

## 🧗 Challenges Faced & Solutions
  |Challenge    |Solution |
  |-------------|----------|
|OverwriteModelError during nodemon restarts|Added guarded model export: mongoose.models.User || mongoose.model(...)|
|next is not a function in async pre-save hook| Removed next parameter from async middleware functions|
|JWT expireIn typo causing sign errors|Corrected to expiresIn (with 's')|
|Mixing route code into model files|Enforced separation: models = schemas only, routes = express routers|
|Case-sensitivity issues on Windows (User.js vs user.js)|Standardized on capital-case filenames and imports|
|Testing protected routes without tokens|Used Thunder Client to attach Authorization: Bearer <token> header|

---

> 🚀 Built with ❤️ by Faith Mshiki
> Learning one commit at a time.
