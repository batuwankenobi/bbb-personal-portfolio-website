function Header() {
	const { translate } = useLanguage();
	const hero = translate("hero");
	return (
		<>

            <header className="font-Inter text-left  pt-24 duration-500 bg-[#F4F4F4] dark:text-[#FFFFFF] dark:bg-[#2A262B] ">
                <div className="px-[18vw]">
                    <div className="w-32 h-32 bg-[#D9D9D9] rounded-full -mt-36 ml-24"></div>
                    <div className='flex flex-row justify-self-end mb-10'>
                        <ModeComponent />
                        <p className='font-semibold mx-2 self-center '>| </p>
                        <LanguageChanger />
                    </div>
			  