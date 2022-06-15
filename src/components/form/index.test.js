import { render, screen, cleanup, waitFor, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DemoForm from ".";

afterEach(cleanup);

test(`on init render, check form button disable`, () => {
  render(<DemoForm />);

  const btn = screen.getByRole("button", { name: /Submit/i });
  expect(btn).toBeDisabled();
});

test(`check form button enable`, async () => {
  render(<DemoForm />);

  const btn = screen.getByRole("button", { name: /Submit/i });
  const usernameNode = screen.getByLabelText("Username", { selector: "input" });
  const passwordNode = screen.getByLabelText("Password", { selector: "input" });

  expect(btn).toBeDisabled();
  await act(async () => userEvent.type(usernameNode, "Sumanth_HG"));
  await act(async () => userEvent.type(passwordNode, "Sumanth_HG@123"));
  expect(btn).toBeEnabled();
});
