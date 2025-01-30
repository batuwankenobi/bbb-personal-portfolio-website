import { useLanguage } from "../context/LanguageContext"; // Dil çeviri fonksiyonunu almak için
// Profil bileşeni
function Profile() {
	const { translate } = useLanguage(); // Dil çeviri fonksiyonunu kullanarak çevirileri alıyoruz
	const profile = translate("profile"); // "profile" objesini çeviri dosyasından alıyoruz
  
	return (	