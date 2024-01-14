import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App.tsx";
import { expect } from "vitest";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n.ts";
import Navbar from "./components/Navbar.tsx";
import Profile from "./components/Profile.tsx";
import Skills from "./components/Skills.tsx";

test("check if app loaded all components", () => {
  render(
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>,
  );
  const message = screen.queryAllByText(/Moje Projekty/i)[0];
  // check if app loaded all components
  expect(message).toBeVisible();
  expect(screen.queryAllByTestId("profile")).toBeDefined();
  expect(screen.queryAllByTestId("skills")).toBeDefined();
  expect(screen.queryAllByTestId("contact")).toBeDefined();
  expect(screen.queryAllByTestId("projects")).toBeDefined();
  expect(screen.queryAllByTestId("about")).toBeDefined();
});

test("profile has correct text", () => {
  render(<Profile />);
  const message = screen.queryByText(/Full stack/i);
  expect(message).toBeVisible();
});

test("expect navbar to have my name", () => {
  render(<Navbar />);
  const name = screen.queryByText(/Piotr Stępień/i);
  expect(name).toBeVisible();
});

test("expect navbar to have about button", () => {
  render(<Navbar />);
  const aboutButton = screen.queryByText(/O mnie/i);
  expect(aboutButton!.closest("a")).toHaveAttribute("href", "#about");
});

test("expect navbar to have skills button", () => {
  render(<Navbar />);
  const skillsButton = screen.queryByText(/Umiejętności/i);
  expect(skillsButton!.closest("a")).toHaveAttribute("href", "#skills");
});
test("expect navbar to have projects button", () => {
  render(<Navbar />);
  const projectsButton = screen.queryByText(/Moje Projekty/i);
  expect(projectsButton!.closest("a")).toHaveAttribute("href", "#projects");
});
test("expect navbar to have contact button", () => {
  render(<Navbar />);
  const contactButton = screen.queryByText(/Kontakt/i);
  expect(contactButton!.closest("a")).toHaveAttribute("href", "#contact");
});

test("change language flow", () => {
  render(
    <I18nextProvider i18n={i18n}>
      <Navbar />
    </I18nextProvider>,
  );
  // except Polish language to be set as default
  expect(i18n.language).toBe("pl");
  // click change language button
  const languageButton = screen.queryByAltText(/polski/i);
  fireEvent.click(languageButton!);
  // check if language changed
  expect(i18n.language).toBe("en");
  // click again
  fireEvent.click(languageButton!);
  // except application to be in Polish again
  expect(i18n.language).toBe("pl");
});

test("except Skills to be defined", async () => {
  render(<Skills />);
  const message = await screen.findAllByText(/podstawowy/i);
  expect(message).toBeDefined();
});
