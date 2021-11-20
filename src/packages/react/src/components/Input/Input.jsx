import React from "react";

import "./input.css";

export const Input = () => {
  return (
    <label className="field">
      <span className="field__label">Type the value</span>
      <input type="text" className="input" />
    </label>
  );
};
