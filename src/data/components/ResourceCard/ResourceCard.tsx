import type { Resource } from "../../../types/resource";

interface ResourceCardProps {
  resource: Resource;
}

export function ResourceCard({ resource }: ResourceCardProps) {
  const date = new Date(resource.date_uploaded).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

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
    </div>
  );
}
