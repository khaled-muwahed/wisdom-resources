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
    <>
      <ResourceList resources={resources} onOpen={setSelectedResource} />
      {selectedResource && (
        <ResourceDetails
          resource={selectedResource}
          onClose={() => setSelectedResource(null)}
        />
      )}
    </>
  );
}

export default App;
