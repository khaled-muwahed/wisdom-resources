import type { Resource } from "../../types/resource";

interface ResourceCardProps {
  resource: Resource;
  onOpen?: (resource: Resource) => void;
}

export function ResourceCard({ resource, onOpen }: ResourceCardProps) {
  return (
    <div className="border rounded p-4 bg-white shadow-sm max-w-md mx-auto">
      <img
        className="w-full h-48 object-cover rounded mb-4"
        src={resource.thumbnail}
        alt={resource.title}
      />
      <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>

      <div className="mb-4">
        <span className="text-sm font-medium">Tags: </span>
        {resource.tags.map((tag, index) => (
          <span key={tag} className="text-sm text-gray-600">
            {tag}
            {index < resource.tags.length - 1 ? ", " : ""}
          </span>
        ))}
      </div>

      <p className="text-gray-500 text-sm mb-4">
        Read/Watch time: {resource.duration} minutes
      </p>

      {onOpen && (
        <button
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          onClick={() => onOpen(resource)}
        >
          Open Resource
        </button>
      )}
    </div>
  );
}
