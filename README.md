# Ultraman Character Collection (Full-stack Web App)

A responsive full-stack web application designed for the **ITCS223 Introduction to Web Development** exercise. This project demonstrates a decoupled architecture featuring a **Node.js & Express** backend with **MongoDB**, and a **Bootstrap-powered** frontend.

---

## System Architecture
The project follows a **Monorepo** structure, ensuring a clean separation of concerns:
* **Frontend**: A responsive UI built with **Bootstrap 5**, utilizing Grid and Card components to display character data fetched from the API.
* **Backend**: A RESTful API built with **Node.js** and **Express**, managing data logic and communication with the database.
* **Database**: **MongoDB** (NoSQL) used to store character attributes such as names, types, descriptions, and combat stats.

---

## Getting Started

### 1. Prerequisites
* [Node.js](https://nodejs.org/) installed on your machine.
* [MongoDB Community Edition](https://www.mongodb.com/docs/manual/administration/install-community-macos/) (via Homebrew for Mac M2).
* [MongoDB Compass](https://www.mongodb.com/products/compass) (Optional, for GUI data management).

### 2. Backend Setup
1.  Navigate to the backend folder:
    ```bash
    cd back-end
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Configure environment variables (Create a `.env` file):
    ```env
    MONGO_URI=mongodb://localhost:27017/ultramanDB
    PORT=3000
    ```
4.  Start the server:
    ```bash
    node service.js
    ```

### 3. Frontend Setup
1.  Navigate to the frontend folder:
    ```bash
    cd front-end
    ```
2.  Open `public/index.html` using **Live Server** (VS Code extension) or simply drag the file into your browser.

---

## 🛠️ Features & Implementation
* **MVC Pattern**: Organized code into `Models`, `Controllers`, and `Routes` for industry-standard maintainability.
* **Responsive Grid**: Implements a 4-column layout for desktop and a single-column layout for mobile devices using **Bootstrap Grid System**.
* **Asynchronous Data Fetching**: Utilizes the **Fetch API** to retrieve JSON data from the backend dynamically.
* **Database Integration**: Managed via **Mongoose** for structured data modeling and easy CRUD operations.

---

## 📝 License
This project is developed for educational purposes as part of the **Faculty of Information and Communication Technology** curriculum.