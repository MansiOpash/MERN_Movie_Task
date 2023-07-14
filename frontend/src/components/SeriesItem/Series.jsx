import { React, useState } from "react";

function Series(props) {
  const [imageLoadError, setImageLoadError] = useState(true);

  const fallbackImage =
    "https:encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjnsKJr9KwZoTyIKgA3nDcE6peJCDX9BKxVQ&usqp=CAU";

  return (
    <div className="main">
      <div className="sub">
        <img
          src={props.url}
          alt=""
          onError={(e) => {
            e.target.src = fallbackImage;
          }}
        />
      </div>
      <p>{props.titlename}</p>
    </div>
  );
}

export default Series;
