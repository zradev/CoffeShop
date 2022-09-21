import React from "react";

const Map = () => {
  return (
    <>
      <div className="map">
        <iframe
          title="map2"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11728.269585964255!2d23.29893082380294!3d42.70229368238709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa85738615f88b%3A0xf2c6f0551ca9503e!2sCoffee%20Shop!5e0!3m2!1sbg!2sbg!4v1660658536338!5m2!1sbg!2sbg"
          width="400"
          height="350"
          frameBorder="0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default Map;
