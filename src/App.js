import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import Checkout from "./Checkout";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import Payment from "./Payment";

function App() {
  require("dotenv").config();
  const promise = loadStripe(
    "pk_test_51NE3OBIFBNFVIu4Fg3uiF7K5sDPjq781jVbk3gxCRk5AhyVb5YmKTPS7DjbeUMmI0ErdQM6pBNFHaEvo41HQ7j5v00wPc8CofJ"
  );
  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("The User is >>> ", authUser);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="app">
        <Routes>
          {user ? (
            <>
              <Route path="/checkout" element={[<Header />, <Checkout />]} />
              <Route
                path="/payment"
                element={[
                  <Header />,
                  <Elements stripe={promise}>
                    <Payment />
                  </Elements>,
                ]}
              />
              <Route path="/" element={[<Header />, <Home />]} />
            </>
          ) : (
            <Route path="/login" element={[<Login />]} />
          )}
          {/* Fallback route */}
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
