import type { Resource } from "../../types/resource";

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
    <div>
      <img src={resource.thumbnail} alt={resource.title} />
      <h2>{resource.title}</h2>
      <p>{resource.description}</p>
      <p>Category: {resource.category}</p>
      <p>Date Uploaded: {date}</p>
      <div>
        Tags:{" "}
        {resource.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </div>
  );
}
