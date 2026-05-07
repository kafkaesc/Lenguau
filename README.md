# ¡Lenguau!

Built by Jared Hettinger

This project is a work in progress. It will eventually develop into a webapp for practicing English/Spanish vocabulary.

Lenguau is hosted at [lenguau.com](https://www.lenguau.com)

The code for this project is hosted at [github.com/kafkaesc/lenguau](https://github.com/kafkaesc/Lenguau)

The code for the Lenguau API is hosted at [github.com/kafkaesc/Lenguau-API](https://github.com/kafkaesc/Lenguau-API)

## 📋 Prerequisites

- Node
- npm

## 📦 Installation & Operation

After first downloading this project, run `npm install` to install the node modules.

Once the project is installed, running it takes two steps:

1. Run the Tailwind watcher `npx tailwindcss -i ./src/input.css -o ./src/output.css --watch`
1. Run the app `npm start`

## 🛠️ Tech Stack

- React 18
- React Router 6
- Tailwind 3

### Libraries

- Heroicons
- React Confetti

## 🎯 Testing

Tests are written with [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/).

- `npm run test` - Run Jest tests and displays the results
- `npm run test:coverage` - Runs Jest tests and displays the coverage for the project
- `npm run test:watch` - Runs Jest in watch mode, re-running tests automatically as files change

## ⚖️ License

This project is licensed under the [MIT License](LICENSE.md).
