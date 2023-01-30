import React from "react";

function test() {
  return (
    <div className="relative bg-slate-500 h-[150px] w-[250px]">
      <img
        className=" object-cover h-[150px] w-[250px] "
        src="https://site-assets.mediaoxide.com/workpointtv/2022/01/04052918/S__73785423.jpg"
      />
      <div className="absolute top-[50%] left-[50%] w-[30px] translate-y-[-50%] translate-x-[-50%] ">
        <img src="https://www.workpointtv.com/wp-content/themes/wptv/assets/img/btn-play.png" />
      </div>
    </div>
  );
}

export default test;
