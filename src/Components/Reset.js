import React from "react";
import Button from "react-bootstrap/Button";

const Reset = ({ reset }) => {
  return (
    <div>
      <Button onClick={() => reset()} variant="dark">
        Reset Borad
      </Button>
    </div>
  );
};

export default Reset;
