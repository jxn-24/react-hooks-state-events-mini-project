import "@testing-library/jest-dom";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "../components/App";
import Task from "../components/Task";

test("displays the task text", () => {
  render(<Task text={"text!"} category={"category!"} />);
  expect(screen.queryByText("text!")).toBeInTheDocument();
});

test("displays the task category", () => {
  render(<Task text={"text!"} category={"category!"} />);
  expect(screen.queryByText("category!")).toBeInTheDocument();
});

test("is removed from the list when the delete button is clicked", async () => {
  render(<App />);
  const taskElement = screen.queryByText(/Buy rice/);
  const deleteButton = taskElement.parentElement.querySelector("button");

  fireEvent.click(deleteButton);

  

  await waitFor(() => {
    expect(screen.queryByText(/Buy rice/)).not.toBeInTheDocument();
  });
});