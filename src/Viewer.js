// frontend/src/Viewer.js
import React from "react";
import { useSearchParams } from "react-router-dom";

function Viewer() {
  const [searchParams] = useSearchParams();
  const model = searchParams.get("model");

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <model-viewer
        src={`http://localhost:5000/uploads/${model}`}
        ar
        auto-rotate
        camera-controls
        style={{ width: "100%", height: "100%" }}
      ></model-viewer>

      <script
        type="module"
        src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"
      ></script>
    </div>
  );
}

export default Viewer;
