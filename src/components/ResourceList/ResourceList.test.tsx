import { render, screen } from "@testing-library/react";
import type { Resource } from "../../types/resource";
import { expect, it } from "vitest";
import { ResourceList } from "./ResourceList";
import userEvent from "@testing-library/user-event";
import { resources } from "../../data/resources.mock";

const make = (id: string, category: Resource["category"]) => ({
  id,
  category,
  title: `Title ${id}`,
  thumbnail: `https://example.com/thumbnail${id}.jpg`,
  tags: [`tag${id}a`, `tag${id}b`],
  duration: 10,
  description: `Description for resource ${id}`,
  date_uploaded: new Date().toISOString(),
});

it("renders resources grouped by category", () => {
  const resources: Resource[] = [
    make("1", "Podcasts"),
    make("2", "Articles"),
    make("3", "Podcasts"),
    make("4", "Recipes"),
  ];

  render(<ResourceList resources={resources} />);

  expect(screen.getByText("Podcasts")).toBeInTheDocument();
  expect(screen.getByText("Articles")).toBeInTheDocument();
  expect(screen.getByText("Recipes")).toBeInTheDocument();
});

it("should filter resources by search term", async () => {
  const user = userEvent.setup();
  render(<ResourceList resources={resources} onOpen={() => {}} />);

  const searchInput = screen.getByPlaceholderText(/search/i);

  await user.type(searchInput, "mindful");

  expect(screen.getByText(/mindful moments/i)).toBeInTheDocument();
  expect(screen.queryByText(/healthy eating/i)).not.toBeInTheDocument();
});
