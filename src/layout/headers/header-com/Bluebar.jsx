import React, { useEffect, useState } from "react";

function Bluebar() {
  const messages = [
    "Share your design and get a quote",
    "Explore our latest diamond collection",
    "Find your perfect jewelry piece",
    "Exclusive offers on gold jewelry",
  ];

  const [currentMessage, setCurrentMessage] = useState(messages[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const messageIndex = Math.floor(Math.random() * 4);
      setCurrentMessage(messages[messageIndex]);
    }, 2000); // Change text every 10 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [messages]);
  return (
    <div className="blue-bar">
      <span>{currentMessage}</span>
    </div>
  );
}

export default Bluebar;
