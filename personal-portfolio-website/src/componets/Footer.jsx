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
			