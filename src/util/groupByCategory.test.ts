import { describe, it, expect } from "vitest";
import { groupByCategory } from "./groupByCategory";
import { resources } from "../data/resources.mock";

describe("groupByCategory", () => {
  it("groups a single resource into its category", () => {
    const single = [resources[0]];
    const grouped = groupByCategory(single);
    expect(Object.keys(grouped)).toEqual([resources[0].category]);
    expect(grouped[resources[0].category]).toHaveLength(1);
  });

  it("groups multiple resources under correct categories", () => {
    const grouped = groupByCategory(resources);
    expect(grouped["Podcasts"]).toBeDefined();
    expect(grouped["Articles"]).toBeDefined();
    expect(grouped["Recipes"]).toBeDefined();
  });
});
