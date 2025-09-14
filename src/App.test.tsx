import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import App from "./App";

describe("App", () => {
  it("should open ResourceDetails modal when a ResourceCard is clicked", async () => {
    const user = userEvent.setup();

    render(<App />);

    const OpenButton = screen.getAllByRole("button", { name: /open/i })[0];

    await user.click(OpenButton);

    expect(screen.getByText(/mindful moments/i)).toBeInTheDocument();
    expect(screen.getByText(/A calming podcast/i)).toBeInTheDocument();

    expect(screen.getByRole("button", { name: /close/i })).toBeInTheDocument();
  });
});
