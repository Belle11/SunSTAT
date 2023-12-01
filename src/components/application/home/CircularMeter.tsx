import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

type CircularProgressBarProps = {
  value: number; // Progress value (0 to 100)
  text: string; // Optional text to display inside the circle
};

const CircularProgressBar: React.FC<CircularProgressBarProps> = ({ value, text }) => {
  return (
    <div className='w-24 h-24 text-light-100'>
      <CircularProgressbar
        value={value}//Value will get from MeterPanel
        text={text}//Value will get from MeterPanel
        styles={buildStyles({
          textColor: '#0F172A',
          textSize: '16px',
          pathColor: `rgba(88,0,81, ${value / 100})`, // Change the path color based on progress
          trailColor: '#d6d6d6',
        })}
        
      />
      
    </div>
  );
};

export default CircularProgressBar;
