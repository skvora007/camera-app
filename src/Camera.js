import React, { useRef } from 'react';
import Webcam from 'react-webcam';

const Camera = () => {
  const webcamRef = useRef(null);

  return (
    <div>
      <Webcam ref={webcamRef} />
    </div>
  );
};

export default Camera;
