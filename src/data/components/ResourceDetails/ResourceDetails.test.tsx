import { render, screen } from "@testing-library/react";
import { ResourceDetails } from "./ResourceDetails";
import { resources } from "../../resources.mock";
import { describe, expect, it } from "vitest";

describe("<ResourceDetails />", () => {
  it("renders resource details correctly", () => {
    const resource = resources[0];
    render(<ResourceDetails resource={resource} onClose={() => {}} />);

    expect(screen.getByText("Mindful Moments")).toBeInTheDocument();
    expect(screen.getByText("A calming podcast")).toBeInTheDocument();
  });
});
