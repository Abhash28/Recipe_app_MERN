###🍲 Recipe App (MERN Stack)
This is a Recipe Web Application built with the MERN stack (MongoDB, Express, React, Node.js). The app allows users to easily manage their recipes by providing functionality to add, edit, view, and delete recipes. It also features user authentication (login and registration) and allows users to upload images for each recipe using Multer.

🚀 Features
User Authentication:
Sign-up and login with JWT authentication and bcrypt hashing for passwords.

Recipe Management:
Add new recipes, including:

Title

Ingredients

Instructions

Cooking Time (optional)

Cover Image (supports image upload with Multer)

View all recipes in a list format.

Edit or delete existing recipes.

Responsive UI:
Built using React and Bootstrap for a user-friendly, responsive experience.

Data Storage:
All recipe data is stored in MongoDB, making it persistent and scalable.

Timestamps:
Recipes automatically store creation and update timestamps using Mongoose.

💻 Tech Stack
Frontend:
React.js for building a dynamic, interactive user interface.

Bootstrap for responsive, modern UI components.

Axios to handle HTTP requests and API calls.

Backend:
Node.js with Express.js for handling HTTP requests and serving data.

MongoDB with Mongoose as the database and Object-Document Mapping (ODM) tool.

JWT Authentication to securely manage user sessions.

bcrypt for password hashing to ensure security.
