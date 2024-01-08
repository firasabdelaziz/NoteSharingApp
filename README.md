# SharingNoteApp 📝

## Overview

SharingNoteApp is a dynamic and real-time multiplayer note-sharing application built using React Native Expo and Firestore. The app enables users to register and log in with email and Gmail, providing a seamless and collaborative environment for sharing and updating numeric notes.

## Table of Contents 📋

- [Getting Started](#getting-started)
- [Key Features](#key-features)
- [File Structure](#file-structure)
- [Technical Patterns](#technical-patterns)
- [Technologies Used](#technologies-used)
- [Authentication](#authentication)
- [Services](#services)
- [Hooks](#hooks)
- [Firebase Configuration](#firebase-configuration)
- [Firestore Integration](#firestore-integration)
- [State Management](#state-management)
- [Demo](#demo)
- [Contributing](#contributing)
- [License](#license)

## Getting Started 🚀

### Prerequisites

- Node.js: [Download](https://nodejs.org/)
- Expo CLI: `npm install -g expo-cli`

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/firasabdelaziz/NoteSharingApp.git
   cd NoteSharingApp
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the app:

   ```bash
   npm start
   ```

## Key Features 🔑

- Authentication with email and Gmail
- Real-time note sharing among multiple users
- Integration with Firebase Firestore for data storage
- Provider design pattern for managing authentication context
- Factory design pattern for form validation
- Integration with Google Sign-In for seamless authentication
- Reusable components for consistent UI across screens
- Separate styles for easy maintenance and theming

## File Structure 📁

```
├── assets/
│   └── fonts/
├── components/
│   ├── BackButton.js
│   ├── Button.js
│   ├── ErrorMessage.js
│   ├── Footer.js
│   ├── GlobalView.js
│   ├── GoogleButton.js
│   ├── Header.js
│   ├── MiddleSection.js
│   ├── Password.js
│   └── ...
├── context/
│   └── AuthContext.js
├── hooks/
│   ├── useFirestore.js
│   ├── useKeyboardHandling.js
│   ├── usePasswordToggle.js
│   └── useAuth.js

├── screens/
│   ├── HomeScreen.js
│   ├── LoginScreen.js
│   ├── RegisterScreen.js
│   └── WelcomeScreen.js
├── services/
│   ├── config.js
│   ├── loginService.js
│   ├── signupService.js
│   ├── signinGoogle.js
│   └── signoutService.js
├── validation/
│   └── validationFactory.js
├── styles/
│   └── globalStyles.js
├── App.js
├── README.md
└── TODO.md
```

## Technical Patterns 🔄

### Provider Design Pattern

Authentication is managed using the Provider design pattern with the `AuthContext` in `AuthContext.js`.

### Factory Design Pattern

Validation is handled using the Factory design pattern in `validationFactory.js`.

### Hooks ⚓

Several custom hooks are used, including `useFirestore`, `useKeyboardHandling`, and `usePasswordToggle` for enhanced functionality.

## Authentication 🔐

The app uses Firebase Authentication for user registration and login. It supports both email/password and Gmail login.

### Auth Context

The authentication context is managed using React's `useReducer` hook and provides actions for signing in and signing out.

### State Management 🔄

The app utilizes the `useAuth` hook for managing the authentication state. It includes a reducer for handling authentication actions and an auth context for sharing authentication details throughout the app.

## Services 🛠️

### Signup Service

The `signupService` provides the functionality to register a new user using Firebase's `createUserWithEmailAndPassword`.

### Signout Service

The `signoutService` handles user sign-out using Firebase's `signOut` method. It also includes the capability to sign out with Google.

### Sign-in with Google

The `signInWithGoogle` service allows users to sign in using their Google accounts. It utilizes the `react-native-google-signin` library for integration.

### Login Service

The `loginService` provides the functionality to log in a user using Firebase's `signInWithEmailAndPassword`.

## Hooks ⚓

### Password Toggle Hook

The `usePasswordToggle` hook manages the visibility of the password input in login and registration screens.

### Keyboard Handling Hook

The `useKeyboardHandling` hook tracks the keyboard status, allowing components to respond to its visibility changes.

## Firebase Configuration ⚙️

Firebase is configured in the `config.js` file, including initialization of Firestore and Authentication modules.

## Firestore Integration 📊

The `useFirestore` hook is responsible for listening to changes in the Firestore database, specifically in the "PockerPlanning" collection.

## Screens 📱

### Welcome Screen

The `WelcomeScreen` component serves as the initial screen for users to either log in or create a new account.

### Registration Screen

The `RegistrationScreen` component handles user registration, including email and password validation. It integrates with the `signupService` for user registration.

### Login Screen

The `LoginScreen` component facilitates user login, featuring email and password validation. It utilizes the `loginService` for user login and `signInWithGoogle` for Google authentication.

### Home Screen

The `HomeScreen` component displays collaborative notes among users. It integrates with Firebase Firestore for real-time updates of player notes. Users can update their notes and sign out.

## Demo 📹

Check out the [demo](#https://www.loom.com/share/b7c47b6e2d5a411db78ac17dac9feaa0) to see SharingNoteApp in action!


## Contributing 🤝

We welcome contributions! Please check out the [Contribution Guidelines](CONTRIBUTING.md) for more details.

## License 📄

This project is licensed under the [MIT License](LICENSE).