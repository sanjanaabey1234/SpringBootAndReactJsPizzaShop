import React from "react";

function MenuItem({ image}) {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
   
    </div>
  );
}

export default MenuItem;