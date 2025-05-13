// frontend/src/Upload.js
import React, { useState } from "react";
import axios from "axios";

function Upload() {
  const [file, setFile] = useState(null);
  const [qr, setQR] = useState(null);
  const [viewerLink, setViewerLink] = useState(null);

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("model", file);

    const res = await axios.post("http://localhost:5000/upload", formData);
    setQR(res.data.qrImage);
    setViewerLink(res.data.viewerUrl);
  };

  return (
    <div style={{ padding: 30 }}>
      <h2>Upload 3D Model (.glb)</h2>
      <input
        type="file"
        accept=".glb"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <br />
      <br />
      <button onClick={handleUpload}>Upload</button>

      {qr && (
        <div>
          <h3>QR Code:</h3>
          <img src={qr} alt="QR Code" />
          <p>
            <a href={viewerLink} target="_blank" rel="noreferrer">
              View in AR
            </a>
          </p>
        </div>
      )}
    </div>
  );
}

export default Upload;
