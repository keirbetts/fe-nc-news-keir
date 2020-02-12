import React from "react";

const ErrorHandler = ({ err }) => {
  const msg = "Error, something went wrong";
  return (
    <section>
      <h3>{msg}</h3>
    </section>
  );
};

export default ErrorHandler;
