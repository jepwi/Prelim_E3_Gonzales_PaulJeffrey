import React from "react";

function Settings({ user, setUser }) {
  const toggleDarkMode = () => {
    setUser({ ...user, settings: { ...user.settings, darkMode: !user.settings.darkMode } });
  };

  return (
    <div className="card p-4 shadow-lg text-center">
      <h2>Settings</h2>
      <div className="form-check form-switch mt-3">
        <input 
          className="form-check-input" 
          type="checkbox" 
          id="darkModeSwitch" 
          checked={user.settings.darkMode} 
          onChange={toggleDarkMode} 
        />
        <label className="form-check-label" htmlFor="darkModeSwitch">
          {user.settings.darkMode ? "Dark Mode Enabled" : "Light Mode Enabled"}
        </label>
      </div>
    </div>
  );
}

export default Settings;
