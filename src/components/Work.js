import React, { useState } from 'react';

function Work() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleToggle = (index) => {
    setSelectedImage(selectedImage === index ? null : index);
  };

  return (
    <section id="work">
      <h2>My Work</h2>
      <div className="image-stack">
        {[1, 2, 3].map((image, index) => (
          <div key={index}>
            <img
              src={`image${index + 1}.jpg`}
              alt={`Work ${index + 1}`}
              onClick={() => handleToggle(index)}
            />
            {selectedImage === index && (
              <div className="dropdown">
                <p>Description for Image {index + 1}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Work;
