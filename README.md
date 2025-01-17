# CRUD Operations with Node.js and MongoDB

This repository demonstrates basic CRUD (Create, Read, Update, Delete) operations using **Node.js** and **MongoDB**.

## Table of Contents

1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Setup Instructions](#setup-instructions)

## Features

- **Create**: Add new records to the MongoDB database.
- **Read**: Retrieve and display records.
- **Update**: Modify existing records.
- **Delete**: Remove records from the database.

Each operation is well-commented, making it easier for beginners to understand the flow of the application.

## Technologies Used

- **Node.js**: Server-side JavaScript runtime.
- **MongoDB**: NoSQL database.

## Setup Instructions

1. **Clone the Repository**:

   ```bash
   git clone git@github.com:suleman-se/mongodb-nodejs.git
   cd mongodb-nodejs
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:

   - Create a `atlas_uri.js` file in the root directory.
   - Add the following variables:

     ```atlas_uri.js
     uri=<your-mongodb-connection-string>
     ```

4. **Run the Application**:

   ```bash
   node app.js
   ```


