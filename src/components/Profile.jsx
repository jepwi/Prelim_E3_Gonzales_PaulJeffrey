import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";  // Ensure Bootstrap is included

function Profile({ user, setUser }) {
  const [newName, setNewName] = useState(user.name);

  const handleNameChange = () => {
    setUser({ ...user, name: newName });
  };

  return (
    <div className="card p-4 shadow-lg text-center">
      <h2>Profile</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <input
        type="text"
        className="form-control my-2"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      />
      <button className="btn btn-primary" onClick={handleNameChange}>
        Update Name
      </button>
    </div>
  );
}

export default Profile;
