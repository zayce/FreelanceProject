import React from "react";
import "./Home.css"; // Убедитесь, что ваши стили подключены

const BackgroundVideo = () => {
  return (
    <div className="video-background">
      <video autoPlay muted loop className="background-video">
        <source
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          type="video/mp4"
        />
        Ваш браузер не поддерживает видео.
      </video>
    </div>
  );
};

export default BackgroundVideo;
