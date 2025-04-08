"use client"

import { useEffect, useState } from "react";
import { Link } from '../../../i18n/navigation';
import { useTranslations } from "next-intl";
export default function Hum() {
  const t = useTranslations()
  const [toggled, setToggled] = useState(false);

  // Open the menu
  const handleToggleTrue = (e) => {
    e.stopPropagation(); // Prevent the window's click handler from closing it immediately
    setToggled(true);
  };

  // Close the menu when clicking outside
  const handleWindowClick = () => {
    if (toggled) {
      setToggled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleWindowClick);
    
    return () => {
      window.removeEventListener("click", handleWindowClick);
    };
  }, [toggled]);

  return (
    <div className="hidden max-sm:flex w-[100%]">
      <div 
        className={!toggled?'flex flex-col items-center justify-center gap-[5px] cursor-pointer': "hidden"}
        onClick={handleToggleTrue}
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className="w-[40px] h-1.5 bg-white rounded-[5px]"></div>
        <div className="w-[40px] h-1.5 bg-white rounded-[5px]"></div>
        <div className="w-[40px] h-1.5 bg-white rounded-[5px]"></div>
      </div>

      <div
        className={toggled? "fixed top-0 right-0 h-full rounded-2xl w-[40%] m-1.5 flex flex-col items-center justify-center gap-5 cursor-pointer mt-2.5 p-5 bg-[#333] text-white transition-all transition-linear": "hidden"}
        onClick={(e) => e.stopPropagation()} 
      >
        <div onClick={() => setToggled(false)}
          className="relative flex justify-center items-center"
          >
          <div className="w-10 h-10 rounded-[20px] bg-transparent transition-all duration-[0.2s] ease-in-out ">
            <div className="absolute top-[50%] left-[50%] w-8 h-1 rounded-xs bg-[#ffcc99] origin-center -translate-[50%] rotate-[45deg] "></div>
            <div className="absolute top-[50%] left-[50%] w-8 h-1 rounded-xs bg-[#ffcc99] origin-center -translate-[50%] rotate-[-45deg] "></div>
          </div>
        </div>
        
        {/* Menu Links */}
        <Link className="text-white text-2xl font-bold m-[10px 0] transition-all duration-[0.3s] ease-in-out hover:text-[#ffcc99] cursor-pointer" href="/ourwork">{t('Our Work')}</Link>
        <Link className="text-white text-2xl font-bold m-[10px 0] transition-all duration-[0.3s] ease-in-out hover:text-[#ffcc99] cursor-pointer" href="/about" >{t('About Us')}</Link>
      </div>
    </div>
  );
}
