"use client";

import { useState } from "react";
import emailjs from 'emailjs-com';
import { useRouter } from 'next/navigation';
import { Link } from '../../../i18n/navigation';
import toast from 'react-hot-toast';
import styles from '../../../../styles/order.module.css'
import { useTranslations } from "next-intl";


export default function Ordercompnonent({className}) {
  const t = useTranslations()
  const router = useRouter(); // Replaced useNavigate with Next.js useRouter
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    country: "+964", // Default country code
    service: t("Select a Service"),
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      name: formData.name,
      email: formData.email,
      number: `${formData.country} ${formData.number}`,
      service: formData.service,
      message: formData.message,
    };

    // Send email to yourself (admin notification)
    emailjs
      .send("service_pzc4669", "template_0ohyukc", templateParams, "hCfBFoxN3Ri81f2Jp")
      .catch((err) => {
        console.log("Failed to send admin email:", err);
      });

    // Send email to the user (confirmation message)
    emailjs
      .send("service_pzc4669", "template_2k5dxik", templateParams, "hCfBFoxN3Ri81f2Jp")
      .then(() => {
        toast.success(t('Your order has been submitted successfully'));
        router.push("/"); // Changed navigate to router.push
      })
      .catch((err) => {
        console.log("Failed to send user email:", err);
      });
  };

  return (
    <div className={className}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2>{t('Order Form')}</h2>

        <input
          type="text"
          name="name"
          placeholder= {t("Your Name")}
          value={formData.name}
          onChange={handleChange}
          required
          pattern="^{3,20}$"
          title= {t("Name must be at least 3 letters long and contain only letters")}
        />

        <input
          type="email"
          name="email"
          placeholder={t("Your Email")}
          value={formData.email}
          onChange={handleChange}
          required
        />

        <div className={styles.phoneContainer}>
          <select name="country" value={formData.country} onChange={handleChange} className={styles.countrySelect}>
            <option value="+964">🇮🇶 +964 (Iraq)</option>
            <option value="+1">🇺🇸 +1 (USA)</option>
            <option value="+44">🇬🇧 +44 (UK)</option>
            <option value="+49">🇩🇪 +49 (Germany)</option>
            <option value="+33">🇫🇷 +33 (France)</option>
            <option value="+971">🇦🇪 +971 (UAE)</option>
          </select>

          <input
            type="tel"
            name="number"
            placeholder={t("Your Phone Number")}
            value={formData.number}
            onChange={handleChange}
            required
            pattern="[0-9]{7,15}"
            title={t("Phone number must be between 7 to 15 digits")}
          />
        </div>

        <select name="service" value={formData.service} onChange={handleChange} required>
          <option value="">{t('Select a Service')}</option>
          <option value="programming">{t('Development')}</option>
          <option value="design">{t('Design')}</option>
          <option value="marketing">{t('Marketing')}</option>
          <option value="advertising">{t('Advertising')}</option>
          <option value="other">{t('Other')}</option>
        </select>

        <textarea
          name="message"
          placeholder={t("Order")}
          value={formData.message}
          onChange={handleChange}
        />

        <div className={styles.buttons}>
          <button className={styles.order} type="submit">{t("Send Order")}</button>
          <Link href="/" legacyBehavior>
            <button className={styles.back} type='button'>{t("Back")}</button>
          </Link>
        </div>
      </form>
    </div>
  );
}