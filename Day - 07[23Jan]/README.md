# React Learning Journey - Day 7

Welcome to Day 7 of your React learning journey with Coding Spoon! In today's session,we make simple ull-stack application built using React and Express! This project combines a server-side Express application with a client-side React application to create a simple system for managing posts and users.


## Overview

This project implements a basic full-stack application where the server-side is powered by Express, and the client-side is built using React. The application includes features such as user authentication, post creation, editing, and deletion.

## Features

- **View Posts:** Access a list of posts and their details.
- **Create Posts:** Add new posts with titles and descriptions.
- **Edit Posts:** Modify existing posts.
- **Delete Posts:** Remove posts from the system.
- **User Authentication:** Sign in and sign up functionality with JWT token authentication.

## Project Structure

The project structure is divided into two main parts: the server-side (`server`) and the client-side (`client`).


## Project Structure

The project structure is divided into two main parts: the server-side (`server`) and the client-side (`client`).

### Server-Side (`server`)

- **server.js:** Main server file handling Express application setup and API routes.

- **data.json:** JSON file storing user data.

- **db.json:** JSON file storing post data.

### Client-Side (`client`)

- **src:** Source code directory for the React application.

  - **components:** Contains various React components for different pages and features.

    - **AddProductComponent.js:** Component for adding a new product.

    - **AuthProvider.js:** Higher Order Component (HOC) for handling user authentication.

    - **CreatePost.js:** Component for creating a new post.

    - **Login.js:** Component for handling user login.

    - **NavBar.js:** Component for the navigation bar.

    - **PostsList.js:** Component for displaying the list of posts.

    - **Signup.js:** Component for handling user signup.

    - **Welcome.js:** Landing page component.

  - **providers:** Includes the AuthProvider Higher Order Component (HOC) for handling user authentication.

  - **utils:** Contains utility functions or components.

    - **TableComponent.js:** Component for rendering a table representation.

- **App.js:** The main component integrating all components and routing.

- **index.js:** Entry point for the React application.

- **package.json:** Configuration file specifying dependencies and scripts for the React application.


## Getting Started

1. Clone the repository

2. Install dependencies: `npm install`

3. Start the development server: `npm start`

4. Open the app in your browser: `http://localhost:3000`

## License