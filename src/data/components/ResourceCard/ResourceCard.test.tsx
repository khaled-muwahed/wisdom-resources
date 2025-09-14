import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { resources } from "../../resources.mock";
import { ResourceCard } from "./ResourceCard";

describe("<ResourceCard />", () => {
  it("should render title, description,tags, and category", () => {
    const resource = resources[0];
    render(<ResourceCard resource={resource} />);

    expect(screen.getByText(resource.title)).toBeInTheDocument();

    resource.tags.forEach((tag) => {
      expect(screen.getByText(tag)).toBeInTheDocument();
    });
    expect(screen.getByText(resource.description)).toBeInTheDocument();
    expect(screen.getByText(/Podcasts/i)).toBeInTheDocument();
  });
});
