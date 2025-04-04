import { useTranslations } from "next-intl";
import { Link } from "../../../../i18n/navigation";

export default function Footer () {
  const t = useTranslations()
  return (
    <footer className="our-work-footer">
      <div className="footer-container">
        <div className="footer-info">
          <div className="company-info">
            <h3>FiqrTech</h3>
            <p>Innovative solutions for modern businesses</p>
            <p>Iraq - Baghdad</p>
            <p>fiqrtech@gmail.com</p>
            <p>+9647880311000</p>
            <p>+9647765588500</p>
          </div>
          <div className="footer-links">
            <div className="link-column">
              <h4>{t("Services")}</h4>
              <ul>
                <li>{t('Development')}</li>
                <li>{t('Design')}</li>
                <li>{t('Advertising')}</li>
                <li>{t('Marketing')}</li>
              </ul>
            </div>
            <div className="link-column">
              <h4>{t('Company')}</h4>
              <ul>
                <li><Link href="/">{t('Home')}</Link></li>
                <li><Link href="/about">{t('About Us')}</Link></li>
                <li><Link href="/ourwork">{t('Our Work')}</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="cta-container">
          <h3>{t('Ready to start your project?')}</h3>
          <p>{t('call to action')}</p>
          <div className="cta-buttons">
            <a href="/order" className="cta-button primary">{t('Start a Project')}</a>
            <a href="/contact" className="cta-button secondary">{t('Contact Us')}</a>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; {new Date().getFullYear()} FiqrTech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};