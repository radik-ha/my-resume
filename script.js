const body = document.body;
const od = document.createElement("div");
od.setAttribute("class","outerDiv");
const skill = document.createElement("div");
skill.setAttribute("class","skill");
const achievement = document.createElement("div");
achievement.setAttribute("class","achievement");
const head3 = document.createElement("div");
head3.setAttribute("class","head3");
const hobby = document.createElement("div");
hobby.setAttribute("id","hobby");
var color = 0;


function createBanner(){
	
	const banner = document.createElement("div");
	banner.setAttribute("class","head");
	const image = document.createElement("img");
	image.setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE-0y4785Uk_CtWAnQqyAbv0GQufFeC94cKA&s");
	image.setAttribute("id","image");
	const div = document.createElement("div");
	div.setAttribute("class","text");
	const name = document.createElement("h1");
	name.innerText = "RATHIKA";
	const title = document.createElement("h3");
	title.innerText = "WEB DEVELOPER";
	const img = document.createElement("div");
	img.setAttribute("class","logo");
	const anchor1 = document.createElement("a");
	anchor1.setAttribute("href", "https://www.linkedin.com/in/radhika-s07/");
	anchor1.setAttribute("class", "link");
	const img1 = document.createElement("img");
	img1.setAttribute("src","https://cdn-icons-png.flaticon.com/256/121/121509.png");
	const anchor2 = document.createElement("a");
	anchor2.setAttribute("href", "https://github.com/radik-ha");
	anchor2.setAttribute("class", "link");
	const img2 = document.createElement("img");
	img2.setAttribute("src","https://marketplacedesignoye.s3.ap-south-1.amazonaws.com/Black%20%26%20White-pinned-octocat-vector.png");
    

    const img3 = document.createElement("img");
	img3.setAttribute("src","https://img.freepik.com/premium-vector/email-icon-png_564384-728.jpg");
    
    

	banner.appendChild(image);
	div.appendChild(name);
	div.appendChild(title);
	anchor1.appendChild(img1);
	img.appendChild(anchor1);
	anchor2.appendChild(img2);
	img.appendChild(anchor2);
	img.appendChild(img3);
	div.appendChild(img);
	banner.appendChild(div);
	body.appendChild(banner);
}


function createLanguageBar(){
	const division = document.createElement("div");
	division.setAttribute("class","division");
	const div1 = document.createElement("div");
	div1.setAttribute("class","langdiv");
	const image1 = document.createElement("img");
	image1.setAttribute("src","./images/tamil.png");
	image1.setAttribute("id","image1");
	const name2 = document.createElement("h2");
	name2.innerText = "Tamizh";
	const div2 = document.createElement("div");
	div2.setAttribute("class","langdiv");
	const image2 = document.createElement("img");
	image2.setAttribute("src","./images/eng.png");
	image2.setAttribute("id","image2");
	const name3 = document.createElement("h2");
	name3.innerText = "English";
	div1.appendChild(image1);
	div1.appendChild(name2);
	div2.appendChild(image2);
	div2.appendChild(name3);
	division.appendChild(div1);
	division.appendChild(div2);
	body.appendChild(division);
}

function makeHtml(obj){
	const first = document.createElement("div");
	first.setAttribute("class","first");
	const word = document.createElement("h3");
	word.innerText = obj.word;
	const word1 = document.createElement("h4");
	word1.innerText = obj.word1;
	const shield = document.createElement("img");
	shield.setAttribute("src",obj.imglink);
    const word2 = document.createElement("h4");
    word2.innerText = obj.word2;
    const word3 = document.createElement("h4");
    word3.innerText = obj.word3;
    first.appendChild(word);
    first.appendChild(word1);
    first.appendChild(shield);
    first.appendChild(word2);
    first.appendChild(word3);
    od.appendChild(first);
}

function createShield(){
	const objects = [
	    {
	    	word: "PANCHAYAT UNION ELEMENTARY SCHOOL",
	    	word1: "SUBRAMANIYAPURAM",
	    	imglink: "./images/tr.png",
	        word2: "Class Leader",
	        word3: "I Rank in School"
	     
	    },

	    {
	    	word: "GOVERNMENT HIGH SCHOOL",
	    	word1: "AYOTHIYAPURIPATTANAM",
	    	imglink: "./images/tr.png",
	    	word2: "Class Leader",
	    	word3: "441 Marks for 500"
	    },

	    {
	    	word: "GOVERNMENT HIGHER SECONDARY SCHOOL",
	    	word1: "POOLANGULAM",
	    	imglink: "./images/tr.png",
	    	word2: "Class Leader",
	    	word3: "532 Marks for 600"
	    }
	]

	objects.forEach(makeHtml);
    body.appendChild(od);
}

function createTitleBar(text){
	const banner3 = document.createElement("div");
	banner3.setAttribute("class","heading1");
	const title2 = document.createElement("h1");
	title2.innerText = `${text}`;
	banner3.appendChild(title2);
	body.appendChild(banner3);
}

function createHtml(obj){
	const skillinner = document.createElement("div");
	skillinner.setAttribute("class","skillinner");
	const img = document.createElement("img");
	img.setAttribute("src", obj.imagelink);
	const h = document.createElement("h4");
	h.innerText = obj.imgName;
	skillinner.appendChild(img);
	skillinner.appendChild(h);
	skill.appendChild(skillinner);
}

function createImage(){
	const details = [
		
		{
			imagelink: "https://www.freepnglogos.com/uploads/html5-logo-png/html5-logo-file-html-shiny-icon-svg-wikimedia-commons-11.png",
			imgName: "HTML"
		},

		{
			imagelink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTwzDfejQjrtyuTLtbhl78_QUBEtG86gBq7cIkjmtkpMgUuC7A6V9-l-UmgsX0mcz6wFk&usqp=CAU",
			imgName: "CSS"
		},

		{
			imagelink: "https://png.pngitem.com/pimgs/s/27-278324_html5-css3-bootstrap-logo-hd-png-download.png",
			imgName: "Bootstrap(Basic)"

		},

		{
			imagelink: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png",
			imgName: "JavaScript(Basic)"
		},

		{
			imagelink: "https://i.makeagif.com/media/11-21-2022/imisbt.gif",
			imgName: "React(Basic)"
		},

		{
			imagelink: "https://cdn0.iconfinder.com/data/icons/free-social-media-set/24/github-512.png",
			imgName: "GitHub(Basic)"
		},

		{
			imagelink: "https://git-scm.com/images/logos/logomark-orange@2x.png",
			imgName: "Git(Basic)"
		},

		{
			imagelink: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/640px-Python.svg.png",
			imgName: "Python(Basic)"
		}
		
	]

	details.forEach(createHtml);
	body.appendChild(skill);
}

function createAchievements(obj){
	const a = document.createElement("div");
	a.setAttribute("class","a")
	const b = document.createElement("div");
	b.setAttribute("class","b")
	const c = document.createElement("div");
	c.setAttribute("class","c")
	const img = document.createElement("img");
	img.setAttribute("src",obj.image);
	const exam = document.createElement("h1");
	exam.innerText = obj.exam;
    const sec = document.createElement("h2");
    sec.setAttribute("id","sec");
    sec.innerText = obj.sec;
    const date = document.createElement("h2");
    date.setAttribute("id","date");
    date.innerText = obj.date;

    c.appendChild(img);
    c.appendChild(exam);
    b.appendChild(c);
    b.appendChild(sec);
    a.appendChild(b);
    a.appendChild(date);
    achievement.appendChild(a);
}

function createAchievement(){
	const details = [
	    {
	    	image: "./images/star.png",
	    	exam: "Tamil Talent Search Examination, Tamilnadu District Level.",
	    	sec: "I have passed the exam and i got selected for Scholarship",
            date: "OCT 2022"
        },

        {
            image: "./images/star.png",
            exam: "Introduction to C",
            sec: "I got Certificate from Sololearn",
            date: "MAR 2025"

        },
        {
            image: "./images/star.png",
            exam: "JavaScript Intermediate",
            sec: "I got Certificate from Sololearn",
            date: "MAR 2025"

        },
        {
            image: "./images/star.png",
            exam: "Introduction to CSS",
            sec: "I got Certificate from Sololearn",
            date: "JAN 2025"

        },
        {
            image: "./images/star.png",
            exam: "Python Developer",
            sec: "I got Certificate from Sololearn",
            date: "DEC 2024"

        },
        {
            image: "./images/star.png",
            exam: "Python Intermediate",
            sec: "I got Certificate from Sololearn",
            date: "DEC 2024"

        },
        {
            image: "./images/star.png",
            exam: "Web development",
            sec: "I got Certificate from Sololearn",
            date: "DEC 2024"

        },
        {
            image: "./images/star.png",
            exam: "Introduction to JavaScript",
            sec: "I got Certificate from Sololearn",
            date: "OCT 2024"

        },
        {
            image: "./images/star.png",
            exam: "Introduction to Python",
            sec: "I got Certificate from Sololearn",
            date: "OCT 2024"

        },
        {
            image: "./images/star.png",
            exam: "HTML",
            sec: "I got Certificate from Sololearn",
            date: "SEP 2024"

        }
	    
    ]
    
    details.forEach(createAchievements);
    body.appendChild(achievement);

}
	  


function createProjects(obj){
    const head = document.createElement("div");
    head.setAttribute("class","title");
	const header = document.createElement("div");
	header.setAttribute("class","header");
	const img = document.createElement("img");
	img.setAttribute("src",obj.imglink);
	img.setAttribute("class","project-img");
	const anchor = document.createElement("a");
	anchor.setAttribute("href", obj.link);
	anchor.setAttribute("class", "name-link");
	const name = document.createElement("h1");
	name.innerText = obj.name;
	anchor.innerHTML = name.outerHTML;
    const text = document.createElement("div");
    text.setAttribute("class","lang");
    const l = document.createElement("h1");
    l.innerText = obj.h1;
	header.appendChild(img);
	header.appendChild(anchor);
    text.appendChild(l);
	head.appendChild(header);
	head.appendChild(text);
	head3.appendChild(head);
}

function createProject(){
	const details = [
            {
			    imglink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2TM5Gt4nKUHQF7Uw0ee_aZjiKsDt5c4GnQQ&s",
			    name: "My Projects",
			    h1: "HTML+CSS+JS",
			    link: "https://radik-ha.github.io/my-projects/"
		    },

	        {
	    	    imglink: "https://img.freepik.com/premium-photo/delicious-fruits_1028566-58.jpg",
	    	    name: "Fruits Page",
	            h1: "HTML+CSS(flex-wrab)",
	            link: "https://radik-ha.github.io/fruits-page/"
	        },

	        {
	    	    imglink: "https://www.bigbasket.com/media/uploads/p/l/40254432_1-fresho-beetroot-with-leaves-packed-with-nutrients-improves-blood-flow.jpg",
	    	    name: "Vegetables Page",
	    	    h1: "HTML+CSS(flex)",
	            link: "https://radik-ha.github.io/vegetable-web/"
	        },   

	        {
	    	    imglink: "https://www.abc.net.au/reslib/201311/r1204239_15618807.jpg",
	    	    name: "Virus Page",
	    	    h1: "Bootstrap",
	            link: "https://radik-ha.github.io/virus-bootstrap/"
	        },

	        {
	    	    imglink: "https://img.freepik.com/premium-photo/picture-group-animals-including-one-which-is-called-lion_910054-2366.jpg",
	    	    name: "Animals Sound",
	    	    h1: "HTML+CSS+JS",
	            link: "https://radik-ha.github.io/animals-sounds/"
	        },

	        {
	    	    imglink: "https://img.fruugo.com/product/3/09/923192093_0340_0340.jpg",
	    	    name: "Web Piano",
	    	    h1: "HTML+CSS+JS",
	            link: "https://radik-ha.github.io/web-piano/"
	        },

	        {
	    	    imglink: "https://static.vecteezy.com/system/resources/thumbnails/004/985/607/small_2x/glassmorphism-concept-login-page-with-frosted-glass-mobile-app-login-and-registration-user-interface-concept-blurred-registration-form-design-vector.jpg",
	    	    name: "Login Form",
	    	    h1: "HTML+CSS",
	            link: "https://radik-ha.github.io/login-form/"
	        },    

	        {
	    	    imglink: "https://brandlogos.net/wp-content/uploads/2013/03/mickey-mouse-disney-vector.png",
	    	    name: "Cartoon Page",
	    	    h1: "HTM+CSS(Grid)",
	            link: "https://radik-ha.github.io/cartoon-grid/"
	        },

	        {
	    	    imglink: "https://thumbs.dreamstime.com/b/chameleon-floral-rainbow-fantasy-colorful-composed-several-ornamental-elements-like-flowers-mosaics-assembled-symphony-61863499.jpg",
	    	    name: "Play With Image",
	    	    h1: "HTML+CSS+JS",
	            link: "https://radik-ha.github.io/play-with-image/"
	        },

	        {
	    	    imglink: "https://images.ctfassets.net/prxuf37q3ta2/6e2OK9Jr60JglYltKdyIDf/6582105ebe01bd5c32d3c7fb3055deb6/SB-36476_Flowers_dlp1858x1858-1.jpg?w=1024",
	    	    name: "Flowers Page",
	    	    h1: "HTML+CSS+JS",
	            link: "https://radik-ha.github.io/flowers-page/"
	        },

	        {
	    	    imglink: "https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvam9iNjc5LTEwMy14LmpwZw.jpg",
	    	    name: "Dualities",
	    	    h1: "HTML+CSS",
	            link: "https://radik-ha.github.io/dualities/"
	        },

	        {
	        	imglink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrk7IL4Rm1VG2KWB_XSf6z1EYfmGouceEQcKA_j0bdKRNoqA_jgLxSTV8NJ15XGlzrVYE&usqp=CAU",
	        	name: "CRUD Page",
	        	h1: "HTML+CSS+JS",
	        	link: "https://radik-ha.github.io/crud-app-using-html-css-js/"
	        },

	        {
	        	imglink: "https://media.istockphoto.com/id/1346732852/vector/a-watercolor-dolphin-jumps-from-the-water-vivid-illustration.jpg?s=612x612&w=0&k=20&c=vX7wrjywfCpDE8tpzrPYStMBWSYbyVa5Iil2mhCQtXw=",
	        	name: "Dolphin Page",
	        	h1: "HTML+CSS",
	        	link: "https://radik-ha.github.io/dolphin-page/"
	        },
	        
	        {

	            imglink: "https://media.istockphoto.com/id/531633071/vector/calculator.jpg?s=612x612&w=0&k=20&c=TrSndAw_fs5LVFqagmF16aqpKb7ZYzyMZ7bVL3QVyP8=",
	            name: "Green Calculator ",
	            h1: "HTML+CSS+JavaScript",
	            link: "https://radik-ha.github.io/green-calculator/"
	        },

	        {
	        	imglink: "https://i.natgeofe.com/k/c491536c-f34d-4e64-ad27-8ee070dce475/monarch-butterfly-orange-flower_square.jpg",
	        	name: "Insects Page",
	        	h1: "HTML+CSS(Media Query)",
	        	link: "https://radik-ha.github.io/media-query-insects/"
	        },

	        {
	        	imglink: "https://seed2plant.in/cdn/shop/files/dark_pink_dahlia_flower_petals_in_green_leaves_background_4k_hd_flowers.jpg?v=1696501139",
	        	name: "My First React App",
	        	h1: "React JS",
	        	link: "https://my-first-react-app-vkl4.onrender.com/"
	        },

	        {
	        	imglink: "https://cdn.vectorstock.com/i/500p/42/81/letter-z-number-2-logo-icon-design-template-vector-5764281.jpg",
	        	name: "Zacebook",
	        	h1: "React JS",
	        	link: "https://zacebook-react.onrender.com/"
	        },

	        {
	        	imglink: "https://cdn.pixabay.com/photo/2015/08/03/13/58/whatsapp-873316_1280.png",
	        	name: "WhatsApp-UI Clone",
	        	h1: "React JS",
	        	link: "https://whatsapp-ui-using-react.onrender.com/"
	        }

	]

    details.forEach(createProjects);
    body.appendChild(head3);

}


function createHobbies(hstr){
	const parent = document.createElement("div");
	parent.setAttribute("class", "parent-hobby");
	const circle = document.createElement("div");
	circle.setAttribute("class", "circle-hobby");
	circle.setAttribute("id", `color${color}`);
	color++;
	const text = document.createElement("span");
	text.innerText = hstr;

    parent.appendChild(circle);
    parent.appendChild(text);

    hobby.appendChild(parent);
}

function createHobby(){
	const details = ["Drawing", "Gardening" ,"Herbarium", "Reading", "Grafting"]
	details.forEach(createHobbies);
	body.appendChild(hobby);
}

createBanner();
createTitleBar("LANGUAGES KNOWN");
createLanguageBar();
createTitleBar("ACADEMICS");
createShield();
createTitleBar("SKILL SET");
createImage();
createTitleBar("ACHIEVEMENTS");
createAchievement();
createTitleBar("PROJECTS");
createProject();
createTitleBar("HOBBIES");
createHobby();
