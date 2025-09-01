import * as React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { gsap } from "gsap";
import './preloader.scss';

function LinearProgressWithLabel(props) {
    const el = React.useRef();
    const tl = React.useRef();
    const q = gsap.utils.selector(el);

    React.useEffect(() => {
        tl.current = gsap.timeline()
      .to(q(".square"), {
        opacity: .7
      })
      .to(q(".square"), {
        duration: 1.5, ease: "powerInOut", opacity: 1, repeat: -1, yoyo: true
      });
      }, []);
  return (
    <div className="preload">
      <div className="loader">
        <LinearProgress variant="determinate" {...props} />
      </div>
      <div className="progress">
        <Typography variant="body2" color="">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </div>
    </div>
  );
}

LinearProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
};

export default function LinearWithValueLabel() {
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
    }, 500);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box>
      <div className="anime">
      <div className="load">
        <svg height="100%" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 1200 250">
          <defs>
            <linearGradient id="textFill" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10e956" stopOpacity="0">
                <animate attributeName="stop-opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
              </stop>
              <stop offset="50%" stopColor="#10e956" stopOpacity="1">
                <animate attributeName="stop-opacity" values="1;0;1" dur="2s" repeatCount="indefinite" />
              </stop>
              <stop offset="100%" stopColor="#10e956" stopOpacity="0">
                <animate attributeName="stop-opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
              </stop>
            </linearGradient>
          </defs>
          <g id="roar">
            <text x="0" y="50%" dominant-baseline="middle" textLength="1200" lengthAdjust="spacingAndGlyphs" 
                  style={{ fontFamily: 'ExoSpace, Arial, sans-serif', fontSize: '175px', fill: 'url(#textFill)', stroke: '#10e956', strokeWidth: '2' }}>
              BENJAMIN
            </text>
          </g>
        </svg>
      </div>
      {/* <LinearProgressWithLabel value={progress} /> */}
      </div>
    </Box>
  );
}
