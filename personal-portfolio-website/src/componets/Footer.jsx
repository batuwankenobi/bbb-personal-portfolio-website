import { useLanguage } from "../context/LanguageContext";

function Footer() {
	// useLanguage hook'u ile çeviri fonksiyonunu alıyoruz
	const { translate } = useLanguage();
	// Footer içeriğini çeviri dosyasından alıyoruz
	const footer = translate("footer");
	
	return (
		  {/* Footer ana konteyneri */}
		  <footer className="bg-[#F4F4F4] dark:text-[#FFFFFF] dark:bg-[#2A262B] px-[18vw] py-24 content-center text-center">
		  <div className="flex flex-row justify-center">
			{/* Sol tarafta yer alan başlık */}
			<div className="flex flex-col justify-center w-96">
			    {/* Mavi alt çizgi */}
			    <div className="border-b-[15px] rounded-md border-solid md:w-48 w-36 self-end mr-16 -mb-10 border-[#82BBFF] dark:border-[#3968A0]"></div>
			    {/* Başlık metni */}
			    <h1 className="text-right mr-10 font-medium text-3xl tracking-normal">{footer.h1}</h1>
			</div>
			  
                    {/* Bağlantılar bölümü */}
                    <div className="flex flex-col text-left content-center font-medium text-nowrap">
                        {/* GitHub linki */}
                        <a href={footer.githubLink} className="text-[#82BBFF]">{footer.githubText}</a>
                        {/* Kişisel blog linki */}
                        <a href={footer.personelBlogLink} className="text-[#0A0A14] dark:text-[#FFFFFF]">{footer.personelBlogText}</a>
                        {/* LinkedIn linki */}
                        <a href={footer.linkedInLink} className="text-[#419CCB]">{footer.linkedInText}</a>
                        {/* E-posta linki */}
                        <a href={footer.emailLink} className="text-[#EA2678]">{footer.emailText}</a>