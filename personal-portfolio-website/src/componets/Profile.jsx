// Dil çeviri fonksiyonunu kullanmak için gerekli bağlamı içe aktarıyoruz
import { useLanguage } from "../context/LanguageContext";

// Profil bileşeni
function Profile() {
    // useLanguage hook'unu kullanarak dil çeviri fonksiyonunu alıyoruz
    const { translate } = useLanguage();
    // "profile" çeviri verisini alıyoruz
    const profile = translate("profile");

    return (
        <>
            {/* Profil sayfası ana bölümü */}
            <section className="bg-[#F4F4F4] dark:text-[#FFFFFF] dark:bg-[#2A262B] py-24 content-center text-center">
                
                {/* Dekoratif sol çizgi (pembe renkli) */}
                <div className="w-20 h-32 border-l-16 border-t-16 border-b-16 border-solid border-[#EA2678] rounded-l-full place-self-end -mt-36"></div>