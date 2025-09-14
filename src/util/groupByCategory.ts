import type { Resource } from "../types/resource";

export const groupByCategory = (resources: Resource[]) => {
  return resources.reduce<Record<string, Resource[]>>((acc, resource) => {
    if (!acc[resource.category]) {
      acc[resource.category] = [];
    }
    acc[resource.category].push(resource);
    return acc;
  }, {});
};
