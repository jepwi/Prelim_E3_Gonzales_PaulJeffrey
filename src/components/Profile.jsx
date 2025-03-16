import React, { useState } from "react";

function Profile({ user, setUser }) {
  const [newName, setNewName] = useState(user.name);

  const handleNameChange = () => {
    setUser({ ...user, name: newName });
  };

  return (
    <div className="card p-4 shadow-lg text-center">
      <h2>Profile</h2>
      <div className="d-flex justify-content-center mb-3">
        <img
          src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
          alt="Profile"
          className="rounded-circle border border-primary"
          style={{ width: "120px", height: "120px", objectFit: "cover" }}
        />
      </div>
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
