import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import languagesData from '../data';
import { toast } from 'react-toastify';
// Gerekli bağımlılıkları içe aktarıyoruz:
// - `useLanguage` hook'u, uygulamanın çoklu dil desteği için bağlamı (context) kullanır.
// - `languagesData`, dil ile ilgili bilgileri içeren bir veri dosyası olabilir.
// - `toast` modülü, bildirim göstermek için kullanılır (bu kodda kullanılmamış).

function LanguageChanger() {
  const { language, setLanguage, translate } = useLanguage();
  // `useLanguage` bağlamından `language` (mevcut dil), `setLanguage` (dili değiştirme fonksiyonu) ve `translate` fonksiyonlarını alıyoruz.

  const changeLanguage = translate("changeLanguage");
  // "changeLanguage" anahtar kelimesine karşılık gelen çevrilmiş metni alıyoruz.

  return (
    <>
      <button
        className='font-semibold'
        onClick={() => { 
          if (language === "tr") { 
            setLanguage('en');  
          } else { 
            setLanguage('tr');
          }
        }}
      >
      {/* Butona tıklanınca, mevcut dile bağlı olarak Türkçe ("tr") veya İngilizce ("en") olarak değiştiriyoruz. */}

        {language === "en" ? (
          <>
            <span className="text-[#E92577]">{changeLanguage}</span>
            <span className='text-[#777777]'>` YE GEÇ</span>
          </>
        ) : (
          <>
            <span className='text-[#777777]'>SWITCH TO</span> 
            <span className="text-[#E92577]">{changeLanguage}</span>
          </>
        )}
        {/* Eğer dil İngilizce ise:
            - İlk span etiketi, `changeLanguage` değişkenini kırmızı renkte gösterir.
            - İkinci span etiketi, gri renkte ve ` YE GEÇ` şeklinde bir ekleme yapar.
            
            Eğer dil Türkçe ise:
            - İlk span etiketi, `SWITCH TO` metnini gri renkte gösterir.
            - İkinci span etiketi, `changeLanguage` değişkenini kırmızı renkte gösterir. */}
      </button>
    </>
  );
}

export default LanguageChanger;
// Bileşeni dışa aktarıyoruz, böylece diğer dosyalarda kullanılabilir.
