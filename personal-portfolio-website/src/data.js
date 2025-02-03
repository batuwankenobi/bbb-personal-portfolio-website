const languagesData = {
	en: {
	    changeLanguage: "TÜRKÇE",
	    hero: {
		  greeting: "Hi! 👋",
		  intro: " I'm a front-end developer. I can craft solid and scalable front-end products. Let's meet!",
		  profileImg: "/assets/images/profile_picture.jpg",
		  profileName: "I'm Batuhan.",
		  linkedInSVG: "/assets/images/linkedIn.SVG",
		  linkedInLink: "https://www.linkedin.com/in/batuhan-bartu-bebek/",
		  githubSVG: "/assets/images/github.SVG",
		  githubLink: "https://github.com/batuwankenobi",
		  heroFooter: "Currently Freelancing for UX,UI, & Web Design Project.",
		  heroFooter2: "Invite me to join your team -> ",
		  heroFooterMail: "batuhanbartuu@gmail.com",
	    },
	    skills: {
		  h1: "Skills",
		  images: [
			{
			    Alt: "JAVASCRIPT",
			    SRC: "/assets/images/javascript.png",
			},
			{
			    Alt: "REACT",
			    SRC: "/assets/images/react.png",
			},
			{
			    Alt: "REDUX",
			    SRC: "/assets/images/redux.png",
			},
			{
			    Alt: "NODE",
			    SRC: "/assets/images/node.png",
			},
			{
			    Alt: "VS CODE",
			    SRC: "/assets/images/vscode.png",
			},
			{
			    Alt: "FIGMA",
			    SRC: "/assets/images/figma.png",
			}
		  ]
	    }
	    ,
	    profile: {
		  profileText: "Profile",
		  cart: {
			h1: "Basic Information",
			dateOfBirthText: "Date of Birth",
			dateOfBirth: "05.05.1999",
			cityText: "City of residence",
			city: "Istanbul",
			educationText: "Educational background",
			education: "Marmara Üniversitesi, Biyomühendislik",
			rolText: "Preferred Role",
			rol: "Frontend, UI"
		  },
		  about: {
			aboutMe: "About me",
			text1: "I am a graduate of Marmara University, Department of Bioengineering, where I developed a strong foundation in scientific and technical problem solving. With a deep passion for technology and innovation, I decided to shift my focus to software development. Currently, I am specializing in front-end technologies such as HTML, CSS, JavaScript, React, and Tailwind CSS through the Full Stack Development program at Workintech. This transition enables me to combine my analytical skills with creativity, allowing me to build user-friendly interfaces and enhance the overall user experience. My goal is to continue expanding my knowledge and specialize in full-stack development by integrating both front-end and back-end technologies to create comprehensive, efficient solutions.",
			text2: "I have a strong passion for exploring new concepts and technologies, with a continuous focus on self-improvement throughout the process. Leveraging my quick learning ability, I enhance my knowledge and skills through in-depth research within my field. My curiosity and commitment drive me to actively seek learning opportunities and stay informed on the latest advancements in my area of expertise."
		  }
	    },
	    projects: {
		  h1: "Projects",
		  myProjects: [
			{
			    id:"witflix",
			    h1: "WitFlix",
			    text: "A web application that replicates the essential features of Netflix, facilitating the search for movies and TV series for users. This project was developed as a personal initiative to enhance my web development expertise.",
			    materials: [ "vercel", "html","css"],
			    viewText: "View on Github",
			    viewLink: "https://github.com/batuwankenobi/witflix-master",
			    appText: "Go to app ->",
			    appLink: "https://witflix-master.vercel.app/",
			    imgLink: "assets/images/witflix_clone.png",
			},
		 
			{
			    id:"pizzareact",
			    h1: "Pizza Challenge React",
			    text: "A pizza ordering website built with React components, allowing users to navigate the homepage, proceed to the pizza ordering page, and customize their pizza by selecting the dough, size, and additional toppings. Users can also add a custom order note. The price of the order adjusts based on the toppings and quantity of pizzas selected. Upon placing the order, a request is sent to the API 'https://reqres.in/api/pizza', and a confirmation page is displayed with the order details.",
			    materials: ["vercel", "react","router","axios","state management","responsive design"],
			    viewText: "View on Github",
			    viewLink: "https://github.com/batuwankenobi/pizza-time-to",
			    appText: "Go to app ->",
			    appLink: "react-pizza-project-eight.vercel.app/",
			    imgLink: "assets/images/reactPizza.png",
			},	{
				id:"movieselector",
				h1: "Favourite Movies",
				text: "A React-based favorite movie management app deployed on Vercel, allowing users to add, remove, and manage their favorite films. The app utilizes useReducer for global state management, with useDispatch and useSelector enabling efficient state updates and access. Users can interact with a dynamic movie list, where selections are updated in real-time. The application ensures a seamless experience by maintaining state persistence, and all interactions are handled efficiently within the React component tree.",
				materials: ["vercel", "react","useDispatch","useSelector","useReducer"],
				viewText: "View on Github",
				viewLink: "https://github.com/batuwankenobi/movie-selector",
				appText: "Go to app ->",
				appLink: "https://movie-selector-chi.vercel.app/",
				imgLink: "assets/images/reactPizza.png",
			  },	{
				id:"reduxcalculator",
				h1: "Simple Calculator",
				text: "A Redux-powered calculator application built with React, enabling users to perform arithmetic operations with a structured state management approach. The app utilizes Redux actions such as ADD_ONE, APPLY_NUMBER, and CHANGE_OPERATION to handle calculations efficiently, while useReducer, useDispatch, and useSelector ensure seamless state updates. It features CalcButton components for user interaction and a TotalDisplay component to showcase results dynamically. Designed with a clean and modular architecture, the project is optimized for performance and is deployable on Vercel for easy accessibility.",
				materials: ["vercel", "react","router","axios","state management"],
				viewText: "View on Github",
				viewLink: "https://github.com/batuwankenobi/redux-calculator",
				appText: "Go to app ->",
				appLink: "https://redux-calculator-5bme-4nhbi93ko-batuwankenobis-projects.vercel.app/",
				imgLink: "assets/images/calculator.png",
			  },
		  ],
	    },
	    footer: {
		  h1: "Let's work together on your next product.",
		  githubText: "Github",
		  githubLink: "https://github.com/batuwankenobi",
		  personelBlogText: "Personel Blog",
		  personelBlogLink: "",
		  linkedInText: "Linkedin",
		  linkedInLink: "https://www.linkedin.com/in/batuhan-bartu-bebek/",
		  emailText: "Email",
		  emailLink: "batuhanbartuu@gmail.com",
	    }
	},
	tr: {
	    changeLanguage: "ENGLISH",
	    hero: {
		  greeting: "Merhaba! 👋",
		  intro: " Ben bir ön yüz geliştiricisiyim. Sağlam ve ölçeklenebilir ön yüz ürünleri oluşturabilirim. Tanışalım!",
		  profileImg: "/assets/images/profile_picture.jpg",
		  profileName: "Ben Batuhan.",
		  linkedInSVG: "/assets/images/linkedIn.SVG",
		  linkedInLink: "https://www.linkedin.com/in/batuhan-bartu-bebek/",
		  githubSVG: "/assets/images/github.SVG",
		  githubLink: "https://github.com/batuwankenobi",
		  heroFooter: "Şu anda UX, UI ve Web Tasarım projeleri için serbest çalışıyorum.",
		  heroFooter2: "Beni ekibinize davet edin -> ",
		  heroFooterMail: "batuhanbartuu@gmail.com",
	    },
	    skills: {
		  h1: "Yetenekler",
		  images: [
			{
			    Alt: "JAVASCRIPT",
			    SRC: "/assets/images/javascript.png",
			},
			{
			    Alt: "REACT",
			    SRC: "/assets/images/react.png",
			},
			{
			    Alt: "REDUX",
			    SRC: "/assets/images/redux.png",
			},
			{
			    Alt: "NODE",
			    SRC: "/assets/images/node.png",
			},
			{
			    Alt: "VS CODE",
			    SRC: "/assets/images/vscode.png",
			},
			{
			    Alt: "FIGMA",
			    SRC: "/assets/images/figma.png",
			}
		  ]
	    }
	    ,
	    profile: {
		  profileText: "Profil",
		  cart: {
			h1: "Temel Bilgiler",
			dateOfBirthText: "Doğum tarihi",
			dateOfBirth: "05.05.1999",
			cityText: "İkamet Şehri",
			city: "İstanbul",
			educationText: "Eğitim Durumu",
			education: "Marmara Üniversitesi, Biyomühendislik",
			rolText: "Tercih Ettiği Rol",
			rol: "Frontend, UI"
		  },
		  about: {
			aboutMe: "Hakkımda",
			text1: "Marmara Üniversitesi Biyomühendislik Bölümü mezunuyum ve burada bilimsel ve teknik problem çözme konusunda güçlü bir temel geliştirdim. Teknoloji ve inovasyona olan derin tutkumla, odak noktamı yazılım geliştirmeye kaydırmaya karar verdim. Şu anda Workintech'teki Full Stack Development programı aracılığıyla HTML, CSS, JavaScript, React ve Tailwind CSS gibi ön uç teknolojilerinde uzmanlaşıyorum. Bu geçiş, analitik becerilerimi yaratıcılıkla birleştirmemi, kullanıcı dostu arayüzler oluşturmamı ve genel kullanıcı deneyimini geliştirmemi sağlıyor. Amacım, kapsamlı ve verimli çözümler oluşturmak için hem ön uç hem de arka uç teknolojilerini entegre ederek bilgi birikimimi genişletmeye ve tam yığın geliştirme konusunda uzmanlaşmaya devam etmek.",
			text2: "Süreç boyunca sürekli olarak kendimi geliştirmeye odaklanarak yeni konseptleri ve teknolojileri keşfetmeye karşı güçlü bir tutkum var. Hızlı öğrenme yeteneğimi kullanarak, alanımdaki derinlemesine araştırmalar yoluyla bilgi ve becerilerimi geliştiriyorum. Merakım ve bağlılığım, öğrenme fırsatlarını aktif olarak aramamı ve uzmanlık alanımdaki en son gelişmelerden haberdar olmamı sağlıyor."
		  }
	    },
  
	    projects: {
		  h1: "Projects",
		  myProjects: [
			{
			    id:"witflix",
			    h1: "WitFlix",
			    text: "Netflix'in temel özelliklerini kopyalayan, kullanıcıların film ve TV dizilerini aramasını kolaylaştıran bir web uygulaması. Bu proje, web geliştirme uzmanlığımı geliştirmek için kişisel bir girişim olarak geliştirildi.",
			    materials: [ "vercel", "html","css"],
			    viewText: "Github' ta göster",
			    viewLink: "https://github.com/batuwankenobi",
			    appText: "Uygulamaya git ->",
			    appLink: "https://witflix-master.vercel.app/",
			    imgLink: "assets/images/witflix_clone.png",
			},
			 
			{
			    id:"pizzareact",
			    h1: "Pizza Challenge React",
			    text: "React bileşenleriyle oluşturulmuş bir pizza sipariş sitesi, kullanıcıların ana sayfada gezinmesine, pizza sipariş sayfasına geçmesine ve hamur, boyut ve ek malzemeleri seçerek pizzalarını özelleştirmesine olanak tanır. Kullanıcılar ayrıca özel bir sipariş notu ekleyebilir. Siparişin fiyatı, seçilen malzemelere ve pizzaların miktarına göre ayarlanır. Sipariş verildikten sonra, 'https://reqres.in/api/pizza' API'sine bir istek gönderilir ve sipariş ayrıntılarıyla bir onay sayfası görüntülenir.",
			    materials: ["vercel", "react","router","axios","state management"],
			    viewText: "Github' ta göster",
			    viewLink: "https://github.com/batuwankenobi/pizza-order-react-project",
			    appText: "Uygulamaya git ->",
			    appLink: "https://pizza-time-to.vercel.app/",
			    imgLink: "assets/images/reactPizza.png",
			},
		  ],
	    },
	    footer: {
		  h1: "Bir sonraki ürününüz üzerinde birlikte çalışalım.",
		  githubText: "Github",
		  githubLink: "https://github.com/batuwankenobi",
		  personelBlogText: "Personel Blog",
		  personelBlogLink: "",
		  linkedInText: "Linkedin",
		  linkedInLink: "https://www.linkedin.com/in/batuhan-bartu-bebek/",
		  emailText: "Email",
		  emailLink: "batuhanbartuu@gmail.com",
	    }
	}
  }
  export default languagesData;