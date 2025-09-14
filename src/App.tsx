import { useState } from "react";
import "./App.css";
import { ResourceList } from "./components/ResourceList/ResourceList";
import { resources } from "./data/resources.mock";
import { ResourceDetails } from "./components/ResourceDetails/ResourceDetails";
import type { Resource } from "./types/resource";

function App() {
  const [selectedResource, setSelectedResource] = useState<Resource | null>(
    null
  );

  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">
          Resource Library
        </h1>
        <ResourceList resources={resources} onOpen={setSelectedResource} />
        {selectedResource && (
          <ResourceDetails
            resource={selectedResource}
            onClose={() => setSelectedResource(null)}
          />
        )}
      </div>
    </div>
  );
}

export default App;
