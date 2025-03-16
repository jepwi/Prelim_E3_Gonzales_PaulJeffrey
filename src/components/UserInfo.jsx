import React from "react";

function UserInfo({ user }) {
  return (
    <div className="card p-3 shadow-sm border rounded text-center">
      <img
        src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
        alt="User Avatar"
        className="rounded-circle border mb-3"
        width="100"
      />
      <h4 className="fw-bold">{user.name}</h4>
      <p className="text-muted">Welcome to your profile!</p>
    </div>
  );
}

export default UserInfo;
