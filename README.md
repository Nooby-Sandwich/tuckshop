# TuckShop

## Description

TuckShop is a web-based solution for managing a canteen. It allows users to browse through various food items, add them to their cart, and place orders. The project is divided into a frontend and a backend, each built using different technologies.

## Project Structure

The project is organized as follows:

- **Backend**: Contains the backend code.
  - **db.js**: Connects to the MongoDB database.
  - **Index.js**: Entry point for the backend server.
  - **Models**: Database models for food items and users.
  - **Routes**: API routes for creating users, managing food items, and logging in users.
- **Data**: Contains JSON files for storing food category and food data.
- **public**: Contains static files such as the favicon, index.html, and manifest.json.
- **src**: Contains the frontend code.
  - **App.js**: Main component that renders other components.
  - **components**: Reusable components such as cards, carousels, footer, navbar, and search bar.
  - **screens**: Different screens/pages of the application, including the homepage, login, orders, and sign up.
  - **index.js**: Entry point for the frontend application.
  - **setupTests.js**: Used for setting up the testing environment.
  - **tuckshop-high-resolution-logo-transparent.svg** and **tuckshop-high-resolution-logo.png**: Logo images for the canteen.

## Technologies Used

- **Frontend**: React, HTML/CSS
  - [React](https://reactjs.org/)
  - [HTML/CSS](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)

- **Backend**: Node.js, Express.js, MongoDB
  - [Node.js](https://nodejs.org/en/)
  - [Express.js](https://expressjs.com/)
  - [MongoDB](https://www.mongodb.com/)

## Getting Started

To get started with this project, clone the repository and install the dependencies. Follow the commands below:

```bash
# Install dependencies
npm install

# Run the app in development mode
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will reload when you make changes. You may also see any lint errors in the console.

## Available Scripts

In the project directory, you can run:

```bash
# Launch the test runner in interactive watch mode
npm test

# Build the app for production to the `build` folder
npm run build
```

The build is minified and the filenames include the hashes. Your app is ready to be deployed! See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started). To learn React, check out the [React documentation](https://reactjs.org/).

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```

Make sure to replace `[LICENSE](LICENSE)` with the actual path to your license file if you have one. Also, ensure that your project structure matches the description in the README file. Feel free to adjust it further based on your specific needs!
