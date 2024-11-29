// components/ClientWrapper.js
"use client"; // Allows client-side hooks
import React, { useState, useEffect } from "react";
import Loader from "../components/Loader";
import WhatsappButton from "../components/WhatsappButton"; // Import WhatsApp button component

const ClientWrapper = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000); // Show loader for 2 seconds
    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  return(
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          {children}
          {/* Render WhatsApp button only after loader is finished */}
          <WhatsappButton />
        </>
      )}
    </>
  )
};

export default ClientWrapper;
