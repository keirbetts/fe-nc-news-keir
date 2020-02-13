import React from "react";

const ErrorHandler = ({ err }) => {
  console.log(err);
  let customErrMsg;
  if (err !== undefined) {
    customErrMsg = err.response.data.msg;
  }
  const errMsg = "Error, something went wrong";
  return (
    <section>
      <h3>{customErrMsg || errMsg}</h3>
    </section>
  );
};

export default ErrorHandler;
