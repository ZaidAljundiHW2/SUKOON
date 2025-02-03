import React from 'react';
import './circularProgress.css';

interface CircularProgressBarProps {
  progress: number;
  size?: number;
  strokeWidth?: number;
  color?: string;
  image?: string;
}

const CircularProgressBar = ({
  progress,
  size = 100,
  strokeWidth = 10,
  color = "#76c7c0",
  image,
}: CircularProgressBarProps) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  // Calculate the size of the image to fit inside the progress bar
  const imageSize = size - strokeWidth * 2;

  return (
    <div className="circular-progress" style={{ width: size, height: size }}>
      <svg className="progress-ring" width={size} height={size}>
        <circle
          className="progress-ring-circle-background"
          stroke="#e6e6e6" // Light grey background
          strokeWidth={strokeWidth}
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        <circle
          className="progress-ring-circle"
          stroke={color}
          strokeWidth={strokeWidth}
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
          style={{
            strokeDasharray: `${circumference} ${circumference}`,
            strokeDashoffset: offset,
            transition: 'stroke-dashoffset 0.35s ease-out',
          }}
        />
      </svg>
      {image && (
        <div className="progress-image">
          <img
            src={image}
            alt="Progress Icon"
            style={{
              width: imageSize,
              height: imageSize,
              borderRadius: '50%', // Ensure the image is circular
              objectFit: 'cover', // Cover the area without distorting the image
            }}
          />
        </div>
      )}
    </div>
  );
};

export default CircularProgressBar;