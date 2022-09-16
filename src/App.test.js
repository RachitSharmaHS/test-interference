import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("should also render textarea", async () => {
  const { baseElement } = render(<App />);
  const user = userEvent.setup();
  await user.click(screen.getByRole("button", { name: "Toggle" }));
  expect(baseElement).toMatchSnapshot();
});

test("should render as expected", async () => {
  const { baseElement } = render(<App />);
  const user = userEvent.setup();
  await user.click(screen.getByText("Enter the dragon"));
  await user.click(screen.getByText("Lucy"));
  await user.tab();
  expect(baseElement).toMatchSnapshot();
});
