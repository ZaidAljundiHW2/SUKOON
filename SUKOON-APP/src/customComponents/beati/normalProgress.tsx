import React from 'react';
import './normalProgress.css'; // Optional: for styling

const ProgressBar = ({ progress }) => {
  // Ensure progress is within the range of 0 to 100
  const clampedProgress = Math.min(100, Math.max(0, progress));

  return (
    <div className="progress-bar-container">
      <div
        className="progress-bar-fill"
        style={{ width: `${clampedProgress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;