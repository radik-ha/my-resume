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
			imgName: "Bootstrap"

		},

		{
			imagelink: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png",
			imgName: "JavaScript"
		},

		{
			imagelink: "https://cdn0.iconfinder.com/data/icons/free-social-media-set/24/github-512.png",
			imgName: "GitHub"
		},

		{
			imagelink: "https://git-scm.com/images/logos/logomark-orange@2x.png",
			imgName: "Git"
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
	    	sec: "I Have Passed The Exam And I Got Selected For Scholarship",
            date: "OCT 2022"
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
	    	    imglink: "https://img.freepik.com/premium-photo/delicious-fruits_1028566-58.jpg",
	    	    name: "Fruits Page",
	            h1: "HTML/CSS",
	            link: "https://radik-ha.github.io/fruits-page/"
	        },

	        {
	    	    imglink: "https://www.kuvingsusa.com/cdn/shop/articles/077931d29bfc10af2a246d30f51907d7.jpg?v=1656108581",
	    	    name: "Vegetables Page",
	    	    h1: "HTML/CSS",
	            link: "https://radik-ha.github.io/vegetable-web/"
	        },   

	        {
	    	    imglink: "https://www.abc.net.au/reslib/201311/r1204239_15618807.jpg",
	    	    name: "Virus Page",
	    	    h1: "Bootstrap",
	            link: "https://radik-ha.github.io/virus-bootstrap/"
	        },

	        {
	    	    imglink: "https://storage.googleapis.com/pai-images/5452684911044eee857ded6e31e2447c.jpeg",
	    	    name: "Animals Sound",
	    	    h1: "HTML",
	            link: "https://radik-ha.github.io/animals-sounds/"
	        },

	        {
	    	    imglink: "https://img.fruugo.com/product/3/09/923192093_0340_0340.jpg",
	    	    name: "Web Piano",
	    	    h1: "JavaScript/HTML",
	            link: "https://radik-ha.github.io/web-piano/"
	        },

	        {
	    	    imglink: "https://static.vecteezy.com/system/resources/thumbnails/004/985/607/small_2x/glassmorphism-concept-login-page-with-frosted-glass-mobile-app-login-and-registration-user-interface-concept-blurred-registration-form-design-vector.jpg",
	    	    name: "Login Form",
	    	    h1: "HTML/CSS",
	            link: "https://radik-ha.github.io/login-form/"
	        },    

	        {
	    	    imglink: "https://brandlogos.net/wp-content/uploads/2013/03/mickey-mouse-disney-vector.png",
	    	    name: "Cartoon Page",
	    	    h1: "Grid/CSS",
	            link: "https://radik-ha.github.io/cartoon-grid/"
	        },

	        {
	    	    imglink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO1sYuQFsQnxBAVr4KOUJWlxUfaRnxi1WX6KKThWCPVc2HBPowIvjNG1NE1X9my9NCtug&usqp=CAU",
	    	    name: "Play With Image",
	    	    h1: "JS/HTML/CSS",
	            link: "https://radik-ha.github.io/play-with-image/"
	        },

	        {
	    	    imglink: "https://images.ctfassets.net/prxuf37q3ta2/6e2OK9Jr60JglYltKdyIDf/6582105ebe01bd5c32d3c7fb3055deb6/SB-36476_Flowers_dlp1858x1858-1.jpg?w=1024",
	    	    name: "Flowers Page",
	    	    h1: "JavaScript/CSS/HTML",
	            link: "https://radik-ha.github.io/flowers-page/"
	        },

	        {
	    	    imglink: "https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvam9iNjc5LTEwMy14LmpwZw.jpg",
	    	    name: "Dualities",
	    	    h1: "HTML/CSS",
	            link: "https://radik-ha.github.io/dualities/"
	        },

	        {
	        	imglink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrk7IL4Rm1VG2KWB_XSf6z1EYfmGouceEQcKA_j0bdKRNoqA_jgLxSTV8NJ15XGlzrVYE&usqp=CAU",
	        	name: "Crud Page",
	        	h1: "JavaScript/CSS/HTML",
	        	link: "https://radik-ha.github.io/crud-app-using-html-css-js/"
	        },

	        {
	        	imglink: "https://media.istockphoto.com/id/1346732852/vector/a-watercolor-dolphin-jumps-from-the-water-vivid-illustration.jpg?s=612x612&w=0&k=20&c=vX7wrjywfCpDE8tpzrPYStMBWSYbyVa5Iil2mhCQtXw=",
	        	name: "Dolphin Page",
	        	h1: "HTML/CSS",
	        	link: "https://radik-ha.github.io/dolphin-page/"
	        },
	        
	        {

	            imglink: "https://media.istockphoto.com/id/531633071/vector/calculator.jpg?s=612x612&w=0&k=20&c=TrSndAw_fs5LVFqagmF16aqpKb7ZYzyMZ7bVL3QVyP8=",
	            name: "Green Calculator ",
	            h1: "HTML/CSS/JavaScript",
	            link: "https://radik-ha.github.io/green-calculator/"
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