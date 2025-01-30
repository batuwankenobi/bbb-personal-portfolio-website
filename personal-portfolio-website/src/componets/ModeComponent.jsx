function ModeComponent() {
	const { translate } = useLanguage(); // Çeviri fonksiyonunu almak için
	const lang = translate("changeLanguage"); // Dilin değişim durumunu almak için
    
	// Tema bilgisini localStorage'da saklamak için özel hook kullanımı
	const [dark, setDark] = useLocalStorage("theme", null);
    
	// Sayfa yüklendiğinde temayı localStorage'dan almak için useEffect kullanımı
	useEffect(() => {