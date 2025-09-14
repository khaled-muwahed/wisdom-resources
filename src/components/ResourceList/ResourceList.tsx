import type { Resource } from "../../types/resource";
import { groupByCategory } from "../../util/groupByCategory";
import { ResourceCard } from "../ResourceCard/ResourceCard";

interface ResourceListProps {
  resources: Resource[];
  onOpen?: (resource: Resource) => void;
}

export function ResourceList({ resources, onOpen }: ResourceListProps) {
  if (!resources || resources.length === 0) {
    return <p className="text-center text-gray-500">No resources available.</p>;
  }

  const groupedResources = groupByCategory(resources);

  return (
    <div>
      {Object.entries(groupedResources).map(([category, resources]) => (
        <div key={category} className="mb-8">
          <h2 className="text-2xl font-bold text-center mb-6">{category}</h2>
          <div className="space-y-4">
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
