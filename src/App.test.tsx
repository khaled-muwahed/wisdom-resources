import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import App from "./App";

describe("App", () => {
  it("should open ResourceDetails modal when a ResourceCard is clicked", async () => {
    const user = userEvent.setup();

    render(<App />);
    const OpenButton = screen.getAllByRole("button", { name: /open/i })[0];
    await user.click(OpenButton);

    const modal = screen.getByRole("dialog");

    expect(within(modal).getByText(/mindful moments/i)).toBeInTheDocument();
    expect(within(modal).getByText(/A calming podcast/i)).toBeInTheDocument();
    expect(
      within(modal).getByRole("button", { name: /close/i })
    ).toBeInTheDocument();

    expect(screen.getByRole("button", { name: /close/i })).toBeInTheDocument();
  });
});
