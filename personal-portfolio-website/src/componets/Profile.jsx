import { useLanguage } from "../context/LanguageContext"; // Dil çeviri fonksiyonunu almak için
// Profil bileşeni
function Profile() {
	const { translate } = useLanguage(); // Dil çeviri fonksiyonunu kullanarak çevirileri alıyoruz
	const profile = translate("profile"); // "profile" objesini çeviri dosyasından alıyoruz
  
	return (
		<>	
		<section className="bg-[#F4F4F4] dark:text-[#FFFFFF] dark:bg-[#2A262B]   py-24 content-center text-center"></section>