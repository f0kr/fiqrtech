
import '../../../../styles/langtoggle.css'
import { usePathname, useRouter } from '../../../i18n/navigation';
import { useLocale } from "next-intl";
export default function LangToggle() {

    const router = useRouter();
    const pathname = usePathname();
  
    const currentLocale = useLocale()
    const newLocale = currentLocale === "en" ? "ar" : "en";
  
    const toggleLanguage = () => {
      router.push(pathname, {locale: newLocale});
      console.log(pathname)
    };
    return (
        <center>
            <div className="switch" onClick={()=> toggleLanguage()}>
	    <input id="language-toggle" className="check-toggle check-toggle-round-flat" type="checkbox" readOnly/> 
	    <label htmlFor="language-toggle"></label>
	    <span className="on"> {currentLocale.toLocaleUpperCase()} </span>
	    <span className="off">{newLocale.toLocaleUpperCase()}</span>
  	</div>
      </center>
    );
}