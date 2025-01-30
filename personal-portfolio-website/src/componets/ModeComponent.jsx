function ModeComponent() { 
	const { translate } = useLanguage()
	const lang = translate("changeLanguage");
	const [dark, setDark] = useLocalStorage("theme", null);
	useEffect(() => {
		
