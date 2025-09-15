import { useState } from "react";
import type { Resource } from "../../types/resource";
import { groupByCategory } from "../../util/groupByCategory";
import { ResourceCard } from "../ResourceCard/ResourceCard";

interface ResourceListProps {
  resources: Resource[];
  onOpen?: (resource: Resource) => void;
}

export function ResourceList({ resources, onOpen }: ResourceListProps) {
  const [searchTerm, setSearchTerm] = useState("");

  if (!resources || resources.length === 0) {
    return <p className="text-center text-gray-500">No resources available.</p>;
  }

  const filteredResources = resources.filter(
    (resource) =>
      resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );
  const groupedResources = groupByCategory(filteredResources);

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
      />
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
