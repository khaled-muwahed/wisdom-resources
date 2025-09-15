import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { resources } from "../../data/resources.mock";
import { ResourceCard } from "./ResourceCard";

describe("<ResourceCard />", () => {
  it("should render title, description, tags, and category", () => {
    const resource = resources[0];
    render(<ResourceCard resource={resource} />);

    expect(screen.getByText(resource.title)).toBeInTheDocument();

    expect(screen.getByText(/Tags:/)).toBeInTheDocument();

    const tagsSection = screen.getByText(/Tags:/).parentElement;
    resource.tags.forEach((tag) => {
      expect(tagsSection).toHaveTextContent(tag);
    });
  });

  it("should call onOpen when clicking on the card", async () => {
    const resource = resources[0];
    const user = userEvent.setup();
    const onOpen = vi.fn();
    render(<ResourceCard resource={resource} onOpen={onOpen} />);

    await user.click(screen.getByText(/open/i));

    expect(onOpen).toHaveBeenCalledWith(resource);
  });
});
