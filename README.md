
# Amazon Clone

This is an Amazon clone project built with React.js, using Firebase for authentication and database, and Stripe for payment processing.

## Features

- **User Authentication**: Users can sign up, sign in, and sign out securely using Firebase Authentication.
- **Add to Cart**: Users can add products to their shopping cart.
- **Checkout**: Allows users to review items in their cart, proceed to payment, and enter shipping details.
- **Responsive Design**: Ensures a seamless experience across various devices.

## Technologies Used

- **React.js**: Frontend framework for building user interfaces.
- **Firebase**: Provides backend services such as authentication, database, and hosting.
- **Stripe**: Payment processing platform for secure online transactions(pending).
- **Axios**: HTTP client for making requests to Firebase and Stripe APIs.
- **React Router**: Navigational components for handling routing in a React application.

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/your-username/amazon-clone.git
```

2. Install dependencies:

```bash
cd amazon-clone
npm install
```

3. Set up Firebase:
   - Create a Firebase project and enable Authentication and Firestore.
   - Copy your Firebase config object and replace it in `firebase.js`.

4. Set up Stripe:
   - Sign up for a Stripe account and obtain your API keys.
   - Replace your Stripe publishable key in `Payment.js`.

5. Run the app:

```bash
npm start
```

