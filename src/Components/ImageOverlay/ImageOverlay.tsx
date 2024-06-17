import React from 'react';

interface ImageOverlayProps {
  imageUrl: string;
  overlayContent: React.ReactNode;
}

const ImageOverlay: React.FC<ImageOverlayProps> = ({ imageUrl, overlayContent }) => {
  return (
    <div className="relative w-full mt-20">
      <img src={imageUrl} alt="Overlay" className="block w-full h-auto" />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
        {overlayContent}
      </div>
    </div>
  );
}

export default ImageOverlay;