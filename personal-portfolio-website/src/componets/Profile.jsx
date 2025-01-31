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
		    {/* İçerik alanı */}
                <div className="px-[18vw]"></div>
		      {/* Profil başlığı */}
			<h1 className="my-10 font-medium text-5xl leading-tight tracking-normal">
                        {profile.profileText}
                    </h1>
			  {/* İçerik kutularını içeren alan */}
                    <div className="justify-center content-center text-center flex flex-row flex-wrap">

                        {/* Bilgilerin gösterildiği ana kart */}
                        <div className="bg-[#52525280] md:w-[26rem] rounded-2xl h-[19rem] w-[20rem]">
                            {/* Kart içeriği (Beyaz arka planlı kutu) */}
                            <div className="bg-[#FFFFFF] dark:bg-[#525252] md:w-[26rem] w-[20rem] h-72 flex flex-col rounded-2xl -ml-3">
                                
                                {/* Kart başlığı */}
                                <h1 className="self-start ml-5 my-3 font-normal text-2xl text-[#EA2678] leading-8 font-playfair">
                                    {profile.cart.h1}
                                </h1>
