import MenuItem from "./MenuItem";
import {useEffect, useRef, useState} from "react";

const Dropdown = ({ submenus, dropdown, depthLevel, translations, left }) => {
  depthLevel = depthLevel + 1;
  const dropdownRef = useRef(null);
  const [posX, setPosX] = useState(0);
  const screenWidth = typeof window !== "undefined" ? window.innerWidth : 0;

  useEffect(() => {
    if (dropdown && dropdownRef.current) {
      if(screenWidth - posX > 200)
      setPosX(dropdownRef.current.getBoundingClientRect().left);
    }
  });

  typeof window !== "undefined" &&
  console.log(posX, "screen width: ", window.innerWidth);

  // console.log("logged inview ",inView, "depth level ",depthLevel);
  const dropdownClass = depthLevel > 1 ? screenWidth - posX <=200 ? "dropdown-submenu-left" : "dropdown-submenu-right" : "";
  return (
    <ul ref={dropdownRef} className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""} bg-primaryLight text-white border-2 border-primary`}>
      {submenus.map((submenu, index) => (
        <MenuItem items={submenu} key={index} depthLevel={depthLevel} translations={translations} />
      ))}
    </ul>
  );
};

export default Dropdown;
