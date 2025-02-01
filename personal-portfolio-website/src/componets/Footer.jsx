import { useLanguage } from "../context/LanguageContext";

function Footer() {
	// useLanguage hook'u ile çeviri fonksiyonunu alıyoruz
	const { translate } = useLanguage();
	// Footer içeriğini çeviri dosyasından alıyoruz
	const footer = translate("footer");
	
	return (
		