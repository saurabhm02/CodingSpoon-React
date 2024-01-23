# React Learning Journey - Day 6

Welcome to Day 6 of our React learning journey with Coding Spoon! In today's session,we make simple React application for managing a list of products. The application allows users to view a list of products, add new products, edit existing products, and delete products.


# React Product Management App


## Features

- **Product List:** Displays a list of products with information such as title, price, rating, brand, category, and an image.

- **Add Product:** Users can add new products by clicking on the "Add Product" button. This navigates them to a form where they can input product details.

- **Edit Product:** Users can edit existing products by clicking the "Edit" button on a product card. This opens a modal with a form to update the product details.

- **Delete Product:** Users can delete a product by clicking the "Delete" button on a product card.

## Project Structure

The project is organized into the following components:

- **App:** The main component that handles routing and manages the application state.

- **NavBar:** Displays navigation links such as "Home" and "Login."

- **Welcome:** The landing page that shows the list of products and provides buttons for adding new products.

- **ProductComponent:** Renders the product list and handles edit and delete actions.

- **AddProductComponent:** Form for adding a new product.

- **EditProductComponent:** Form for editing an existing product.

## Technologies Used

- **React:** Front-end library for building user interfaces.

- **React Router:** Library for handling navigation in a React application.

- **Axios:** HTTP client for making requests to the server.

- **Express:** Back-end framework for handling server-side logic.

## Server API Endpoints

- **GET /:** Retrieves the list of products.

- **POST /addProduct:** Adds a new product to the list.

- **PUT /:id:** Updates an existing product with the specified ID.

- **DELETE /:id:** Deletes a product with the specified ID.

## Getting Started

1. Clone the repository

2. Install dependencies: `npm install`

3. Start the development server: `npm start`

4. Open the app in your browser: `http://localhost:3000`

## License

