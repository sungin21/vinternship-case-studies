import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders NewsFleet Dashboard", () => {
  render(<App />);

  const heading = screen.getByText(
    /NewsFleet Dashboard/i
  );

  expect(heading).toBeInTheDocument();
});