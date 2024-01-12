import { render, screen } from "@testing-library/react";
import App from "./App.tsx";
import { expect } from "vitest";

it("sample test", () => {
  render(<App />);
  const message = screen.queryByText(/Fullstack/i);
  expect(message).toBeVisible();
});
