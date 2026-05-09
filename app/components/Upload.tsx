'use client';

import React, { useState } from 'react';
import Image from 'next/image';

function CustomFileInput() {
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Hidden file input */}
      <input
        id="imageUpload"
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="hidden"
      />

      {/* Image preview with overlayed camera icon */}
      {imageSrc ? (
        <div className="relative w-32 h-32">
          {/* Profile image */}
          <img
            src={imageSrc}
            alt="Uploaded preview"
            className="w-full h-full rounded-full object-cover shadow"
          />

          {/* Overlay camera icon */}
          <label
            htmlFor="imageUpload"
            className="absolute bottom-0 right-0 bg-white/70 backdrop-blur-md p-1.5 rounded-full shadow-md hover:bg-white transition cursor-pointer"
            title="Change photo"
          >
            <Image
              src="/images/solar_camera-outline.png"
              alt="Upload"
              width={24}
              height={24}
            />
          </label>
        </div>
      ) : (
        // Initial upload button before image is chosen
        <label
          htmlFor="imageUpload"
          className="cursor-pointer inline-block bg-blue-600 hover:bg-blue-700 text-white rounded-full p-3 transition"
          title="Upload photo"
        >
          <Image
            src="/images/solar_camera-outline.png"
            alt="Upload"
            width={32}
            height={32}
          />
        </label>
      )}
    </div>
  );
}

export default CustomFileInput;
