import React from "react";

import { Input } from "../Input";

export const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target.elements[0].value;
    e.target.elements[0].value = "";
    window.postMessage({ formValue: value });
  };
  return (
    <form onSubmit={handleSubmit}>
      <Input />
    </form>
  );
};
