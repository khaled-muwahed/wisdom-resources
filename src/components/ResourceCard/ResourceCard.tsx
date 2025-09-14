import type { Resource } from "../../types/resource";
import { formatDate } from "../../util/formatDate";

interface ResourceCardProps {
  resource: Resource;
  onOpen?: (resource: Resource) => void;
}

export function ResourceCard({ resource, onOpen }: ResourceCardProps) {
  const date = formatDate(resource.date_uploaded);

  return (
    <div className="p-4 border rounded shadow-md">
      <img
        className="w-full h-48 object-cover rounded mb-4"
        src={resource.thumbnail}
        alt={resource.title}
      />
      <h2 className="text-xl font-semibold mb-2">{resource.title}</h2>
      <p className="text-white-100 mb-2">{resource.description}</p>
      <p className="text-white-100 mb-2">Category: {resource.category}</p>
      <p className="text-white-100 mb-2">Date Uploaded: {date}</p>
      <div>
        Tags:{" "}
        {resource.tags.map((tag) => (
          <span
            key={tag}
            className="inline-block bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold text-gray-700 mr-2"
          >
            {tag}
          </span>
        ))}
      </div>
      {onOpen && (
        <button
          onClick={() => onOpen(resource)}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Open Resource
        </button>
      )}
    </div>
  );
}
