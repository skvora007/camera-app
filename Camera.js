import React from 'react';
import Webcam from 'react-webcam';

const Camera = () => {
  const webcamRef = React.useRef(null);

  return (
    <div>
      <Webcam ref={webcamRef} />
    </div>
  );
};

export default Camera;
