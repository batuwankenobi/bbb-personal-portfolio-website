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
{/* Kullanıcı bilgilerini içeren ana div */}
<div className="flex flex-row text-wrap text-left ml-5 ">
                {/* Kullanıcı bilgilerini içeren alt div */}
                <div className="flex flex-col text-lg leading-5 tracking-tight flex-wrap">

                    {/* Doğum tarihi bilgisi */}
                    <div className="flex flex-row my-2">
                        <div className="font-semibold w-40">
                            {profile.cart.dateOfBirthText} {/* Doğum tarihi başlığı */}
                        </div>
                        <div className="md:ml-5">
                            {profile.cart.dateOfBirth} {/* Doğum tarihi bilgisi */}
                        </div>
                    </div>
{/* Eğitim bilgisi */}
<div className="flex flex-row my-5 h-14">
                        <div className="font-semibold text-wrap w-40">
                            {profile.cart.educationText} {/* Eğitim başlığı */}
                        </div>
                        <div className="text-wrap w-28 md:w-48 md:ml-5">
                            {profile.cart.education} {/* Eğitim bilgisi */}
                        </div>
                    </div>

                    {/* Rol bilgisi */}
                    <div className="flex flex-row my-2">
                        <div className="font-semibold w-40">
                            {profile.cart.rolText} {/* Rol başlığı */}
                        </div>
                        <div className="md:ml-5">
                            {profile.cart.rol} {/* Kullanıcının rol bilgisi */}
                        </div>
                    </div>
                </div>
            </div>
             {/* Hakkında bölümü */}
             <div className="w-[30rem] ml-6 mt-16 text-left">
                {/* Alt çizgi süsü */}
                <div className="border-b-[15px] -ml-1 rounded-md border-solid w-24 -mb-11 border-[#82BBFF] dark:border-[#82BBFF]"></div>
                
                {/* Kullanıcının hakkında başlığı ve bilgisi */}
                <h1 className="m-2 text-2xl font-normal font-playfair">{profile.about.aboutMe}</h1>
                <p className="m-2">{profile.about.text1}</p> {/* Hakkında metni - 1 */}
                <p className="m-2">{profile.about.text2}</p> {/* Hakkında metni - 2 */}
            </div>
        </>
    );
}

export default Profile;
