import { useLanguage } from "../context/LanguageContext";

function Profile() {
    // Dil çeviri bağlamını kullanarak çeviri fonksiyonunu alıyoruz
    const { translate } = useLanguage();
    // "profile" anahtarını kullanarak profil bilgilerini alıyoruz
    const profile = translate("profile");

    return (
        <>
            {/* Profil bölümü */}
            <section className="bg-[#F4F4F4] dark:text-[#FFFFFF] dark:bg-[#2A262B] py-24 content-center text-center">
                {/* Sol üst köşede bulunan dekoratif çizgi */}
                <div className="w-20 h-32 border-l-16 border-t-16 border-b-16 border-solid border-[#EA2678] rounded-l-full place-self-end -mt-36"></div>
                
                <div className="px-[18vw]">
                    {/* Profil başlığı */}
                    <h1 className="my-10 font-medium text-5xl leading-tight tracking-normal">{profile.profileText}</h1>
                    
                    <div className="justify-center content-center text-center flex flex-row flex-wrap">
                        {/* Profil kartı */}
                        <div className="bg-[#52525280] md:w-[26rem] rounded-2xl h-[19rem] w-[20rem]">
                            <div className="bg-[#FFFFFF] dark:bg-[#525252] md:w-[26rem] w-[20rem] h-72 flex flex-col rounded-2xl -ml-3">
                                {/* Kart başlığı */}
                                <h1 className="self-start ml-5 my-3 font-normal text-2xl text-[#EA2678] leading-8 font-playfair">
                                    {profile.cart.h1}
                                </h1>
                                
                                {/* Kullanıcı bilgileri */}
                                <div className="flex flex-row text-wrap text-left ml-5 ">
                                    <div className="flex flex-col text-lg leading-5 tracking-tight flex-wrap">
                                        {/* Doğum tarihi */}
                                        <div className="flex flex-row my-2">
                                            <div className="font-semibold w-40">
                                                {profile.cart.dateOfBirthText} {/* Doğum tarihi etiketi */}
                                            </div>
                                            <div className="md:ml-5">
                                                {profile.cart.dateOfBirth} {/* Doğum tarihi */}
                                            </div>
                                        </div>
                                        
                                        {/* Şehir */}
                                        <div className="flex flex-row my-2">
                                            <div className="font-semibold w-40">
                                                {profile.cart.cityText} {/* Şehir etiketi */}
                                            </div>
                                            <div className="md:ml-5">
                                                {profile.cart.city} {/* Şehir */}
                                            </div>
                                        </div>
                                        
                                        {/* Eğitim */}
                                        <div className="flex flex-row my-5 h-14">
                                            <div className="font-semibold text-wrap w-40">
                                                {profile.cart.educationText} {/* Eğitim etiketi */}
                                            </div>
                                            <div className="text-wrap w-28 md:w-48 md:ml-5">
                                                {profile.cart.education} {/* Eğitim bilgisi */}
                                            </div>
                                        </div>
                                        
                                        {/* Rol */}
                                        <div className="flex flex-row my-2">
                                            <div className="font-semibold w-40">
                                                {profile.cart.rolText} {/* Rol etiketi */}
                                            </div>
                                            <div className="md:ml-5">
                                                {profile.cart.rol} {/* Kullanıcının rolü */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Hakkında bölümü */}
                        <div className="w-[30rem] ml-6 mt-16 text-left">
                            {/* Bölüm başlığı süslemesi */}
                            <div className="border-b-[15px] -ml-1 rounded-md border-solid w-24 -mb-11 border-[#82BBFF] dark:border-[#82BBFF]"></div>
                            
                            {/* Hakkında başlığı ve metni */}
                            <h1 className="m-2 text-2xl font-normal font-playfair">{profile.about.aboutMe}</h1>
                            <p className="m-2">{profile.about.text1}</p> {/* İlk paragraf */}
                            <p className="m-2">{profile.about.text2}</p> {/* İkinci paragraf */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Profile;