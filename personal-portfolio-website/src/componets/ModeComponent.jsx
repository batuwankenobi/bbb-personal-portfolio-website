import { IoMoon } from "react-icons/io5";
import { FaCircle } from "react-icons/fa";
import useLocalStorage from "../hooks/useLocalStorage";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useLanguage } from "../context/LanguageContext";

// `IoMoon` (ay simgesi) ve `FaCircle` (güneş simgesi) ikonları import edildi.
// `useLocalStorage` özel hook'u, kullanıcının tema tercihini tarayıcıda saklamak için kullanılıyor.
// `useEffect`, bileşen yüklendiğinde veya belirli bir değişken değiştiğinde çalışacak kodu yazmak için kullanılıyor.
// `toast` ile tema değiştiğinde bildirim gösterilecek.
// `useLanguage`, çoklu dil desteği sağlamak için kullanılan özel bir bağlam (context) hook'udur.

function ModeComponent() {
  const { translate } = useLanguage();  // Çeviri fonksiyonunu almak için `useLanguage` hook'u kullanılıyor.
  const lang = translate("changeLanguage");  // Kullanıcının tercih ettiği dilde "Mode Değiştir" metni alınıyor.

  const [dark, setDark] = useLocalStorage("theme", null);  
  // `dark` değişkeni, localStorage'dan "theme" anahtarına bağlı olarak başlatılıyor.
  // Eğer localStorage'da bir değer yoksa, başlangıç değeri `null` olarak atanıyor.

  useEffect(() => {
    const theme = JSON.parse(localStorage.getItem("theme"));
    // localStorage'da kayıtlı tema değeri alınıyor ve JSON formatına çevriliyor.

    if (theme !== null) { 
      // Eğer kullanıcı daha önce bir tema tercihi yapmışsa:
      if (theme) { 
        document.body.classList.add("dark"); // Karanlık tema aktif ediliyor.
        setDark(true);
      } else {
        document.body.classList.remove("dark"); // Açık tema aktif ediliyor.
        setDark(false);
      }
    } else { 
      // Eğer kullanıcı daha önce bir tema seçmemişse:
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) { 
        // Tarayıcı, sistem temasının karanlık olduğunu algılarsa:
        document.body.classList.add("dark");
        setDark(true); 
      } else {
        // Sistem teması açık ise:
        document.body.classList.remove("dark");
        setDark(false); 
      }
    }
  }, []); 
  // useEffect yalnızca bileşen yüklendiğinde çalışır. Kullanıcının tema tercihini belirlemek için bir kere çalışır.

  useEffect(() => {
    // Tema değiştiğinde çalışır ve kullanıcının diline göre bildirim gösterir.
    if (lang === "TÜRKÇE") {
      toast.success("Mode changed."); // Eğer kullanıcı dili Türkçe ise İngilizce mesaj gösterilir.
    } else {
      toast.success("Mod değişti."); // Eğer kullanıcı dili İngilizce ise Türkçe mesaj gösterilir.
    }
  }, [dark]);  
  // `dark` değişkeni her değiştiğinde bu etki (effect) çalışacaktır.

  const darkModeHandler = () => {
    setDark(!dark);  
    // `dark` değişkeni ters çevrilerek güncelleniyor.

    document.body.classList.toggle("dark");  
    // Sayfanın `body` elementine `dark` sınıfı ekleniyor veya kaldırılıyor.
  };

  return (
    <>
      <div 
        className="flex flex-row items-center hover:animation-pulse text-opacity-10 text-[#777777]"
        onClick={() => darkModeHandler()} 
      >
      {/* Tema değiştirme butonu: flex kullanılarak yan yana düzenleniyor ve tıklanınca `darkModeHandler` fonksiyonu çalışıyor. */}

        <div className="mr-3 w-14 flow-root dark:bg-black bg-[#E92577] rounded-2xl transition duration-700 ">
        {/* Küçük bir buton görünümü oluşturuluyor, açık modda pembe, karanlık modda siyah arka planlı. */}

          {dark ? (
            <IoMoon className="float-left m-1 transition text-[#FFE86E]" /> 
            // Eğer `dark` true ise, sol tarafta ay simgesi (karanlık mod simgesi) gösteriliyor.
          ) : (
            <FaCircle className="float-right m-1 transition text-[#FFE86E]" />
            // Eğer `dark` false ise, sağ tarafta güneş simgesi (aydınlık mod simgesi) gösteriliyor.
          )}
        </div>

        {dark ? (
          <p className="font-semibold text-[#D9D9D9]">LIGHT MODE</p> 
          // Eğer `dark` true ise, "LIGHT MODE" yazısı gösteriliyor.
        ) : (
          <p className="font-semibold text-[#777777]">DARK MODE</p>
          // Eğer `dark` false ise, "DARK MODE" yazısı gösteriliyor.
        )}
      </div>
    </>
  );
}

export default ModeComponent;  
// ModeComponent bileşeni dışa aktarılıyor ve başka bileşenlerde kullanılabilir hale geliyor.
