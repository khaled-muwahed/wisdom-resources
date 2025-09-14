import type { Resource } from "../../types/resource";
import { groupByCategory } from "../../util/groupByCategory";
import { ResourceCard } from "../ResourceCard/ResourceCard";

interface ResourceListProps {
  resources: Resource[];
  onOpen?: (resource: Resource) => void;
}

export function ResourceList({ resources, onOpen }: ResourceListProps) {
  if (!resources || resources.length === 0) {
    return <p className="text-gray-500">No resources available.</p>;
  }

  const groupedResources = groupByCategory(resources);

  return (
    <div className="space-y-8">
      {Object.entries(groupedResources).map(([category, resources]) => (
        <div key={category}>
          <h2 className="text-2xl font-bold mb-4">{category}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {resources.map((resource) => (
              <ResourceCard
                key={resource.id}
                resource={resource}
                onOpen={onOpen}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
