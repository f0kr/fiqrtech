"use client";

import { useContext, useState } from "react";
import toast from 'react-hot-toast';
import { useTranslations } from "next-intl";
import { LoadingContext } from "../../utils/contexts/LoadingContext";


export default function Ordercompnonent() {
  const [loading, setLoading] = useState(false);
  const {isLoading} = useContext(LoadingContext)
  const t = useTranslations()
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)

    try{
      await fetch("/api/send-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      toast.success(t("Your order has been submitted successfully"));
      setFormData({
        name: "",
        email: "",
        number: "",
        country: "+964", // Default country code
        service: t("Select a Service"),
        message: "",
      })
    } catch (err) {
      toast.error(t("Failed to send email"));
    } finally{
      setLoading(false)
    }
    
  };
  

  return (
<div id="container">
  <button 
  type="button"
  className='hidden rounded-full bg-amber-900 absolute top-0 right-0 p-3.5'
  >Order</button>
    <div
    id="form-container"
  className={`${
    isLoading ? "hidden" : "flex"
  } justify-center items-center absolute top-[5%] left-[10%] max-sm:hidden w-fit`}
>
  <form
    onSubmit={handleSubmit}
    className=" max-w-md bg-transparent backdrop-blur-lg shadow-xl border border-white/30 rounded-xl p-5 flex flex-col gap-4"
  >
    <h2 className="text-center text-lg font-semibold text-[#333]">
      {t("Order Form")}
    </h2>
    <div className="relative">
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
        placeholder=" "
        className="peer w-full px-3 pt-5 pb-2 text-sm rounded-md border border-[#ccc] bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <label className=" pointer-events-none absolute left-3 top-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/50 peer-focus:top-1 peer-focus:text-sm peer-focus:text-white/30">
        {t("Your Name")}
      </label>
    </div>

    <div className="relative">
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
        placeholder=" "
        className="peer w-full px-3 pt-5 pb-2 text-sm rounded-md border border-[#ccc] bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <label className="pointer-events-none absolute left-3 top-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/50 peer-focus:top-1 peer-focus:text-sm peer-focus:text-white/40">
        {t("Your Email")}
      </label>
    </div>

    <div className="flex gap-2">
      <select
        name="country"
        value={formData.country}
        onChange={handleChange}
        className="w-[35%] min-w-[100px] p-2.5 rounded-md border border-[#ccc] text-sm bg-white/10 text-black/60"
      >
        <option className="bg-white/30" value="+964">🇮🇶 +964</option>
        <option className="bg-white/30" value="+1">🇺🇸 +1</option>
        <option className="bg-white/30" value="+44">🇬🇧 +44</option>
        <option className="bg-white/30" value="+49">🇩🇪 +49</option>
        <option className="bg-white/30" value="+33">🇫🇷 +33</option>
        <option className="bg-white/30" value="+971">🇦🇪 +971</option>
      </select>

      <div className="relative w-full">
        <input
          type="tel"
          name="number"
          value={formData.number}
          onChange={handleChange}
          required
          pattern="[0-9]{7,15}"
          placeholder=" "
          className="peer w-full px-3 pt-5 pb-2 text-sm rounded-md border border-[#ccc] bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <label className="pointer-events-none absolute left-3 top-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/50 peer-focus:top-1 peer-focus:text-sm peer-focus:text-white/30">
          {t("Your Phone Number")}
        </label>
      </div>
    </div>

    <select
      name="service"
      value={formData.service}
      onChange={handleChange}
      required
      className="p-2.5 rounded-md border border-[#ccc] text-sm bg-white/40"
    >
      <option value="">{t("Select a Service")}</option>
      <option value="programming">{t("Development")}</option>
      <option value="design">{t("Design")}</option>
      <option value="marketing">{t("Marketing")}</option>
      <option value="advertising">{t("Advertising")}</option>
      <option value="other">{t("Other")}</option>
    </select>

    <div className="relative">
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder=" "
        className="peer h-20 w-full px-3 pt-5 pb-2 text-sm rounded-md border border-[#ccc] bg-white/60 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <label className="pointer-events-none absolute left-3 top-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-blue-500">
        {t("Message")}
      </label>
    </div>

    <div className="flex flex-col gap-2 pt-1">
     <button
        type="submit"
        disabled={loading}
        className={`w-full p-2.5 rounded-md text-sm transition text-white ${
    loading
      ? "bg-gray-400 cursor-not-allowed"
      : "bg-blue-600 hover:bg-blue-700"
  }`}
>
  {loading ? t("sending") : t("Send Order")}
</button>

        <button
          type="button"
          className="w-full bg-gray-300 hover:bg-gray-400 text-[#333] p-2.5 rounded-md text-sm transition"
        >
          {t("Close")}
        </button>
    </div>
  </form>
 </div>
</div>

  );
}