// Gerekli kütüphaneleri içe aktarıyoruz
import { IoMoon } from "react-icons/io5"; // Karanlık mod simgesi (Ay)
import { FaCircle } from "react-icons/fa"; // Açık mod simgesi (Daire)
import useLocalStorage from "../hooks/useLocalStorage"; // Tema bilgisini saklamak için özel hook
import { useEffect } from "react"; // Yan etkileri yönetmek için React Hook
import { toast } from "react-toastify"; // Kullanıcıya bildirim göstermek için Toastify
import { useLanguage } from "../context/LanguageContext"; // Dil değişkenlerini yönetmek için özel hook

// Tema değişim bileşeni
function ModeComponent() {
  // Dil çeviri fonksiyonunu alıyoruz
  const { translate } = useLanguage();
  // "changeLanguage" değerini çevirerek mevcut dili belirliyoruz
  const lang = translate("changeLanguage");

  // Tema bilgisini localStorage'da saklamak için özel hook kullanımı
  const [dark, setDark] = useLocalStorage("theme", null);

  // Sayfa yüklendiğinde temayı localStorage'dan almak için useEffect kullanımı
  useEffect(() => {
    const theme = JSON.parse(localStorage.getItem("theme")); // LocalStorage'dan tema bilgisini al
    if (theme !== null) { 
      // Eğer tema bilgisi localStorage'da varsa, onu uygula
      if (theme) {
        document.body.classList.add("dark"); // Sayfaya "dark" class'ı ekle
        setDark(true);
      } else {
        document.body.classList.remove("dark"); // "dark" class'ını kaldır
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
  }, []); // Bu useEffect yalnızca sayfa yüklendiğinde çalışır

  // Tema değiştiğinde bildirim gösteren useEffect
  useEffect(() => {
    if (lang === "TÜRKÇE") {
      toast.success("Mode changed."); // Eğer dil Türkçe ise İngilizce bildirim göster
    } else {
      toast.success("Mod değişti."); // Eğer dil İngilizce ise Türkçe bildirim göster
    }
  }, [dark]); // 'dark' değeri değiştiğinde çalışır

  // Tema değiştirme butonu için handler fonksiyon
  const darkModeHandler = () => {
    setDark(!dark); // Mevcut temayı tersine çevir
    document.body.classList.toggle("dark"); // Sayfada "dark" class'ını ekleyip kaldır
  };

  return (
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
              <FaCircle className="float-right m-1 transition text-[#FFE86E]" /> // Açık moddaysa daire simgesi göster
          }
        </div>
        
        {/* Mevcut temayı belirten yazı */}
        {
          dark ?
            <p className="font-semibold text-[#D9D9D9]">LIGHT MODE</p> // Karanlık moddaysa "LIGHT MODE" yaz
            :
            <p className="font-semibold text-[#777777]">DARK MODE</p> // Açık moddaysa "DARK MODE" yaz
        }
      </div>
    </>
  );
}

export default ModeComponent;
