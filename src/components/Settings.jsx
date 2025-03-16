import React, { useState } from "react";

function Settings({ user, setUser }) {
  // Local state to prevent immediate changes
  const [localDarkMode, setLocalDarkMode] = useState(user.settings.darkMode);

  // Toggle function
  const handleToggle = () => {
    setLocalDarkMode(!localDarkMode);
  };

  // Save changes
  const saveSettings = () => {
    setUser({ ...user, settings: { ...user.settings, darkMode: localDarkMode } });
  };

  return (
    <div className="card p-4 shadow-lg text-center">
      <h2>Settings</h2>

      {/* Toggle Switch */}
      <div className="form-check form-switch mt-3">
        <input
          className="form-check-input"
          type="checkbox"
          id="darkModeSwitch"
          checked={localDarkMode}
          onChange={handleToggle}
        />
        <label className="form-check-label" htmlFor="darkModeSwitch">
          {localDarkMode ? "Dark Mode Enabled" : "Light Mode Enabled"}
        </label>
      </div>

      {/* Save Button */}
      <button className="btn btn-success mt-3" onClick={saveSettings}>
        Save Settings
      </button>
    </div>
  );
}

export default Settings;
