// import { render, screen, fireEvent, waitFor } from './test-utils'
import { render, screen } from "@testing-library/react";
import App from "../App";

test("ss", () => {
  render(<App />);
  // check button
  const btn = screen.getByRole("button");
  expect(0).toEqual(0);
});
