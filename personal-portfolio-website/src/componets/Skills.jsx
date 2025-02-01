import { useLanguage } from "../context/LanguageContext";

function Skills() {
	// useLanguage fonksiyonunu kullanarak translate fonksiyonunu elde ediyoruz.
    // translate, verilen anahtar değerine göre uygun dildeki metni veya veriyi döndürür.
    const { translate } = useLanguage();
    
    // "skills" anahtarını kullanarak skills adlı nesneyi alıyoruz.
    // Bu nesne içerisinde başlık (h1) ve image bilgileri (images) bulunuyor.
    const skills = translate("skills");
    
    // skills nesnesinden images dizisini alıyoruz.
    const images = skills.images;
	return (

	);
}
