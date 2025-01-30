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
			if (theme) {
				document.body.classList.add("dark");
				setDark(true);
			    } else {
				document.body.classList.remove("dark");
				setDark(false);
			    }
			} else { 
				// Eğer localStorage'da tema bilgisi yoksa, sistem tercihine göre belirle
				if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
				  document.body.classList.add("dark");
				  setDark(true);
				} else {
				  document.body.classList.remove("dark");
				  setDark(false);
				}
			    }
			  }, []);
			   // Tema değiştirme butonu için handler fonksiyon
  const darkModeHandler = () => {
	setDark(!dark); // Mevcut temayı tersine çevir
	document.body.classList.toggle("dark"); // Sayfa temasını değiştir
    };
    eturn (
	<>
	  {/* Tema değiştirme butonu */}
	  <div 
	    className="flex flex-row items-center hover:animation-pulse text-opacity-10 text-[#777777]" 
	    onClick={() => darkModeHandler()} // Tıklandığında darkModeHandler çalışır
	  >
	    {/* Tema butonunun iç kısmı */}
	    <div className="mr-3 w-14 flow-root dark:bg-black bg-[#E92577] rounded-2xl transition duration-700">
		{
		  dark ?
		    <IoMoon className="float-left m-1 transition text-[#FFE86E]" /> // Karanlık moddaysa ay simgesi göster
		    :
		    <FaCircle className="float-right m-1 transition  text-[#FFE86E]" /> // Açık moddaysa daire simgesi göster
		}
	    </div>
	    
	    {/* Modun ismini gösteren yazı */}
	    {
		dark ?
		  <p className="font-semibold text-[#D9D9D9]">LIGHT MODE</p> // Karanlık moddaysa "LIGHT MODE"
		  :
		  <p className="font-semibold  text-[#777777]">DARK MODE</p> // Açık moddaysa "DARK MODE"
	    }
	  </div>
	</>
    );
  }
  
  export default ModeComponent;