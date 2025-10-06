# React SWC Application

A modern React application built with Vite, Redux, and React Router, featuring a clean architecture and persistent state management.

## 🚀 Technologies

This project uses the following technologies:

- **React 19** - A JavaScript library for building user interfaces
- **Vite 7** - Next generation frontend tooling
- **Redux** - A predictable state container for JavaScript apps
- **Redux Saga** - Middleware for handling side effects
- **Redux Persist** - Persist and rehydrate Redux stores
- **React Router DOM** - Declarative routing for React
- **Styled Components** - Visual primitives for the component age
- **React Toastify** - Toast notifications for React
- **Axios** - Promise based HTTP client
- **ESLint** - Pluggable JavaScript linter
- **React Icons** - Popular icons in your React projects

## 📋 Project Structure

```
├── src/
│   ├── components/       # Reusable components
│   ├── pages/            # Application pages
│   ├── services/         # API and other services
│   ├── store/            # Redux store configuration
│   │   └── modules/      # Redux modules (actions, reducers, sagas)
│   ├── styles/           # Global styles
│   ├── routes/           # Application routes
│   ├── App.jsx           # Main application component
│   └── main.jsx          # Application entry point
├── .editorconfig         # Editor configuration
├── eslint.config.js      # ESLint configuration
├── package.json          # Project dependencies and scripts
└── vite.config.js        # Vite configuration
```

## 🔧 Setup and Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## 📝 Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Builds the app for production
- `npm run lint` - Lints the codebase
- `npm run preview` - Previews the production build locally

## 🏗️ Architecture

### Redux Store

The application uses Redux for state management with the following features:

- **Redux Saga** for handling asynchronous operations
- **Redux Persist** for persisting state across browser sessions
- Modular structure with separate actions, reducers, and sagas

### Routing

The application uses React Router DOM (v5) for navigation, with a history object for programmatic navigation.

### Styling

Styled Components is used for component-specific styling, along with global styles defined in `GlobalStyles.js`.

### API Communication

Axios is configured for API requests in `services/axios.js`. The base URL needs to be configured for your specific API.

## 🧩 Components

### Header

A navigation header with links to Home, Login, and Logout pages, displaying the current state of a button click from Redux.

### Pages

- **Login** - A sample login page that dispatches Redux actions
- **Page404** - A 404 error page

## 🔄 State Management

The application demonstrates Redux state management with:

- Action creators in `store/modules/example/actions.js`
- Reducers to handle state changes
- Sagas for side effects like API calls
- Persistence of selected reducers using Redux Persist

## 🛠️ Configuration

- **ESLint** - Configured for React with hooks and refresh plugins
- **EditorConfig** - Ensures consistent coding styles across editors
- **Vite** - Configured with React plugin for fast development

## 📚 Notes

- The API base URL in `src/services/axios.js` needs to be updated with your actual API endpoint
- The application uses React 19, which is a newer version with potential breaking changes from earlier versions

## 📄 License

[MIT License](LICENSE)