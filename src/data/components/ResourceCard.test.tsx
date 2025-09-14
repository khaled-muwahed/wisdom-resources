import { render , screen } from "@testing-library/react";
import { expect, it } from "vitest";
import { describe } from "vitest";
import { resources } from "../resources.mock";


describe('<ResourceCard />', () => {
  it('should render title, description,tags, and category', () => {
    const resource = resources[0];
    render(<ResourceCard resource={resource} />);

    expect(screen.getByText(resource.title)).toBeInTheDocument();

    resource.tags.forEach(tag => {
      expect(screen.getByText(tag)).toBeInTheDocument();
    });
    expect(screen.getByText(resource.description)).toBeInTheDocument();
    expect(screen.getByText(resource.category)).toBeInTheDocument();

  });