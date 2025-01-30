function ModeComponent() {
	const { translate } = useLanguage(); // Çeviri fonksiyonunu almak için
	const lang = translate("changeLanguage"); // Dilin değişim durumunu almak için
    
	// Tema bilgisini localStorage'da saklamak için özel hook kullanımı
	const [dark, setDark] = useLocalStorage("theme", null);
    
	// Sayfa yüklendiğinde temayı localStorage'dan almak için useEffect kullanımı
	useEffect(() => {
		const theme = JSON.parse(localStorage.getItem("theme")); // LocalStorage'dan tema bilgisini al
		if (theme !== null) { 
			// Eğer tema bilgisi localStorage'da varsa, onu uygula
			if (theme) {
			  document.body.classList.add("dark");
			  setDark(true);
			} else {
			  document.body.classList.remove("dark");
			  setDark(false);
			}