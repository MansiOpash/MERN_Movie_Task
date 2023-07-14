import { React, useState } from "react";

function Movies(props) {
  const fallbackImage =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjnsKJr9KwZoTyIKgA3nDcE6peJCDX9BKxVQ&usqp=CAU";

  return (
    <div className="main">
      <div className="sub">
        <img
          src={props.url}
          alt="img"
          onError={(e) => {
            // if (imageLoadError) {
            // setImageLoadError(false);
            e.target.src = fallbackImage;
            // }
            // console.log(imageLoadError, "imageLoadError");
          }}
        />
      </div>
      <p>{props.titlename}</p>
    </div>
  );
}

export default Movies;
