
import { usePathname, useRouter } from '../../../i18n/navigation';
import { useLocale } from "next-intl";
export default function LangToggle() {
   const router = useRouter();
   const pathname = usePathname();
   const isHome = pathname === '/'
   const currentLocale = useLocale()
   const newLocale = currentLocale === "en" ? "ar" : "en";

   const toggleLanguage = () => {
     router.push(pathname, {locale: newLocale});
     console.log(pathname)
   };


    return (
<center className={!isHome ? "hidden" : "max-sm:hidden"}>
  <div
    className="relative inline-block mx-[5px]"
    onClick={() => toggleLanguage()}
  >
    {/* The input is hidden off-screen and acts as the peer */}
    <input
      id="language-toggle"
      type="checkbox"
      readOnly
      className="absolute -ml-[9999px] invisible peer"
    />
    <label
      htmlFor="language-toggle"
      className="
        block relative cursor-pointer outline-none select-none
        p-[2px] w-[97px] h-[35px] bg-[#F36F25] rounded-[60px]
        before:block before:absolute before:content-[''] before:top-[2px] before:left-[2px] before:bottom-[2px] before:right-[2px] before:bg-[#F36F25] before:rounded-[60px]
        after:block after:absolute after:content-[''] after:top-[4px] after:left-[4px] after:bottom-[4px] after:w-[48px] after:bg-[#fff] after:rounded-[52px] after:transition-all after:duration-200
        peer-checked:after:ml-[44px]
      "
    ></label>
    {/* "On" label */}
    <span
      className="
        absolute top-[14px] left-0 pl-[2px] w-1/2 text-center
        pointer-events-none font-bold text-[12px] uppercase text-[#F36F25]
      "
    >
      {currentLocale.toLocaleUpperCase()}
    </span>
    {/* "Off" label */}
    <span
      className="
        absolute top-[14px] right-0 pr-[4px] w-1/2 text-center
        pointer-events-none font-bold text-[12px] uppercase text-[#fff]
      "
    >
      {newLocale.toLocaleUpperCase()}
    </span>
  </div>
</center>

    );
}