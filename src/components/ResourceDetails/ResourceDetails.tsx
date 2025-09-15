import type { Resource } from "../../types/resource";
import { formatDate } from "../../util/formatDate";

interface ResourceDetailsProps {
  resource: Resource;
  onClose: () => void;
}

export function ResourceDetails({ resource, onClose }: ResourceDetailsProps) {
  return (
    <div
      role="dialog"
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
    >
      <div className="bg-white rounded p-6 max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">{resource.title}</h2>
          <button
            onClick={onClose}
            className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
          >
            Close
          </button>
        </div>

        <img
          className="w-full h-48 object-cover rounded mb-4"
          src={resource.thumbnail}
          alt={resource.title}
        />

        <p className="text-gray-700 mb-4">{resource.description}</p>

        <p className="text-gray-500 text-sm mb-2">
          Category: {resource.category}
        </p>
        <p className="text-gray-500 text-sm mb-4">
          Uploaded: {formatDate(resource.date_uploaded)}
        </p>
        <p className="text-gray-500 text-sm mb-4">
          Read/Watch time: {resource.duration} minutes
        </p>

        <div>
          <h3 className="font-semibold mb-2">Tags:</h3>
          <p className="text-sm text-gray-600">{resource.tags.join(", ")}</p>
        </div>
      </div>
    </div>
  );
}
