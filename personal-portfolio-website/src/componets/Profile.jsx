import { useLanguage } from "../context/LanguageContext"; // Dil çeviri fonksiyonunu almak için
// Profil bileşeni
function Profile() {
	const { translate } = useLanguage(); // Dil çeviri fonksiyonunu kullanarak çevirileri alıyoruz
	const profile = translate("profile"); // "profile" objesini çeviri dosyasından alıyoruz
  
	return (
		<>	
		<section className="bg-[#F4F4F4] dark:text-[#FFFFFF] dark:bg-[#2A262B]   py-24 content-center text-center"></section>
		<div className="w-20 h-32  border-l-16 border-t-16 border-b-16 border-solid border-[#EA2678]  rounded-l-full  place-self-end  -mt-36"></div>