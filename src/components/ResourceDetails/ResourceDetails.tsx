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
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div className="p-4 border rounded shadow-md bg-white">
        <button
          onClick={onClose}
          className="mb-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Close
        </button>
        <h2 className="text-2xl font-bold mb-2">{resource.title}</h2>
        <p className="text-gray-700 mb-4">{resource.description}</p>
        <p className="text-sm text-gray-500">
          Uploaded on: {formatDate(resource.date_uploaded)}
        </p>
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Tags:</h3>
          <ul className="list-disc list-inside">
            {resource.tags.map((tag) => (
              <li key={tag} className="text-sm text-gray-600">
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
