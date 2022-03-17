import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("minus button has correct text", () => {
  render(<App />);
  // screen object를 이용해서 원하는 엘레먼트에 접근
  const minusButtonElement = screen.getByTestId("minus-button");
  expect(minusButtonElement).toHaveTextContent("-");
});

test("plus button has correct text", () => {
  render(<App />);
  // screen object를 이용해서 원하는 엘레먼트에 접근
  const plusButtonElement = screen.getByTestId("plus-button");
  expect(plusButtonElement).toHaveTextContent("+");
});

test("the counter starts at 0", () => {
  render(<App />);
  // screen object를 이용해서 원하는 엘레먼트에 접근
  const counterElement = screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent("0");
});

test("When the + button is pressed, the counter changes to 1", () => {
  render(<App />);
  // screen object를 이용해서 원하는 엘레먼트에 접근
  const buttonElement = screen.getByTestId("plus-button");
  fireEvent.click(buttonElement);
  const counterElement = screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent("1");
});

test("When the - button is pressed, the counter changes to -1", () => {
  render(<App />);
  // screen object를 이용해서 원하는 엘레먼트에 접근
  const buttonElement = screen.getByTestId("minus-button");
  fireEvent.click(buttonElement);
  const counterElement = screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent("-1");
});

test("on/off button has blur color", () => {
  render(<App />);
  // screen object를 이용해서 원하는 엘레먼트에 접근
  const buttonElement = screen.getByTestId("on/off-button");
  expect(buttonElement).toHaveStyle({ backgroundColor: "blue" });
});

test.only("Prevent the -,+ button from being pressed when the on/off button is clicked", () => {
  render(<App />);
  const onOffButtonElement = screen.getByTestId("on/off-button");
  fireEvent.click(onOffButtonElement);
  const plusButtonElement = screen.getByTestId("plus-button");
  expect(plusButtonElement).toBeDisabled();
});
