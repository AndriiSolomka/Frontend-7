import React, { useState } from "react";

function Image() {
  const [images, setImages] = useState([{ id: 0, width: 500 }]);
  const photoPath =
    "https://vgorode.ua/img/article/3872/6_main-v1577255306.jpg";

  const addImg = () => {
    const newId = images.length;
    setImages([...images, { id: newId, width: 300 }]);
  };

  const deleteImg = () => {
    if (images.length > 0) {
      setImages(images.slice(0, -1));
    }
  };

  const resizeImg = (action) => {
    if (images.length === 0) return;
    const newImages = [...images];
    const lastIndex = newImages.length - 1;
    const delta = action === "increase" ? 100 : -100;
    newImages[lastIndex].width = Math.max(
      150,
      newImages[lastIndex].width + delta
    );
    setImages(newImages);
  };

  return (
    <div>
      <div className="city-photo">
        {images.map((img) => (
          <img
            key={img.id}
            src={photoPath}
            alt="Львів, Ринкова площа"
            width={img.width}
            style={{ display: "block" }}
          />
        ))}
      </div>

      <div className="buttons">
        <button className="button" onClick={addImg}>
          Додати
        </button>
        <button className="button" onClick={() => resizeImg("increase")}>
          Збільшити
        </button>
        <button className="button" onClick={() => resizeImg("decrease")}>
          Зменшити
        </button>
        <button className="button" onClick={deleteImg}>
          Видалити
        </button>
      </div>

      <p>
        <a href="https://lviv.travel" target="_blank" rel="noreferrer">
          Більше інформації про Львів
        </a>
      </p>
    </div>
  );
}

export default Image;
