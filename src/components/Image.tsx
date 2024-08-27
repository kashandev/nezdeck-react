import React, { useEffect, useState } from "react";
import Loader from "./Loader";

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  // You can add any custom props if needed
}

const Image: React.FC<ImageProps> = ({ ...props }) => {
  const [isLoad, setIsLoad] = useState(false);
  useEffect(() => {
    setIsLoad(true);
  }, [])
  const handleLoad = () => {
    setIsLoad(false); // Update the loading state
  };

  return (
    <>
      {isLoad && <Loader />}
      <img
        {...props}
        onLoad={handleLoad}
        style={{ display: isLoad ? 'none' : 'block' }} // Hide image while loading
      />
    </>
  );
};

export default Image;
