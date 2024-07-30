const body = document.body;
const od = document.createElement("div");
od.setAttribute("class","outerDiv");
const skill = document.createElement("div");
skill.setAttribute("class","skill");
const head = document.createElement("div");
head.setAttribute("class","head");

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
	banner.appendChild(image);
	div.appendChild(name);
	div.appendChild(title);
	banner.appendChild(div);
	body.appendChild(banner);
}

function createLanguageBar(){
	const division = document.createElement("div");
	division.setAttribute("class","division");
	const div1 = document.createElement("div");
	div1.setAttribute("class","langdiv");
	const image1 = document.createElement("img");
	image1.setAttribute("src","https://arihara-sudhan.github.io/statics/tamil.png");
	image1.setAttribute("id","image1");
	const name2 = document.createElement("h2");
	name2.innerText = "Tamizh";
	const div2 = document.createElement("div");
	div2.setAttribute("class","langdiv");
	const image2 = document.createElement("img");
	image2.setAttribute("src","https://arihara-sudhan.github.io/statics/eng.png");
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
	    	imglink: "https://arihara-sudhan.github.io/statics/tr.png",
	        word2: "Class Leader",
	        word3: "I Rank in School"
	     
	    },

	    {
	    	word: "GOVERNMENT HIGH SCHOOL",
	    	word1: "AYOTHIYAPURIPATTANAM",
	    	imglink: "https://arihara-sudhan.github.io/statics/tr.png",
	    	word2: "Class Leader",
	    	word3: "441 Marks for 500"
	    },

	    {
	    	word: "GOVERNMENT HIGHER SECONDARY SCHOOL",
	    	word1: "POOLANGULAM",
	    	imglink: "https://arihara-sudhan.github.io/statics/tr.png",
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
			imagelink: "https://png.pngitem.com/pimgs/s/27-278324_html5-css3-bootstrap-logo-hd-png-download.png",
			imgName: "Bootstrap"

		},

		{
			imagelink: "https://www.freepnglogos.com/uploads/html5-logo-png/html5-logo-file-html-shiny-icon-svg-wikimedia-commons-11.png",
			imgName: "HTML"
		},

		{
			imagelink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTwzDfejQjrtyuTLtbhl78_QUBEtG86gBq7cIkjmtkpMgUuC7A6V9-l-UmgsX0mcz6wFk&usqp=CAU",
			imgName: "CSS"
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

function createAchievement(){	
	const headDiv = document.createElement("div");
    headDiv.setAttribute("class","headDiv");
	const div = document.createElement("div");
	div.setAttribute("class","div");
	const img = document.createElement("img");
	img.setAttribute("src","https://arihara-sudhan.github.io/statics/win.png");
	const h = document.createElement("h1");
	h.innerText = "Tamil Talent Search Examination, Tamilnadu District Level";
    const day = document.createElement("div");
    day.setAttribute("class","date");
    const h1 = document.createElement("h1");
    day.innerText = "OCT 2022";
    const title = document.createElement("div");
    title.setAttribute("class","title");
    const n = document.createElement("h1");
    n.innerText = "I Have Passed The Exam And I Got Selected For Scholarship";
	
	div.appendChild(img);
	div.appendChild(h);
	headDiv.appendChild(div)
	headDiv.appendChild(day);
	body.appendChild(headDiv);
	day.appendChild(h1);
	title.appendChild(n);
    body.appendChild(title);
}

function createProjects(obj){
	const one = document.createElement("div");
	one.setAttribute("class","one");
	const img = document.createElement("img");
	img.setAttribute("src",obj.imglink);
	const name = document.createElement("h1");
	name.innerText = obj.name;
    
	one.appendChild(img);
	one.appendChild(name);
	head.appendChild(one);
	
}

function createProject(){
	const detail = [
	        {
	    	    imglink: "https://www.exoticexpress.co.uk/cdn/shop/products/image_3cbdb0f3-a22d-4d80-8b68-143ba729e5b2_300x300.jpg?v=1681718977",
	    	    name: "Fruits Page",
	            h1: "HTML"
	        },

	        {
	    	    imglink: "https://5.imimg.com/data5/VK/ZF/GE/SELLER-50068616/brinjal-500x500.jpeg",
	    	    name: "Vegetables Page",
	    	    h1: "HTML"
	        },

	        {
	    	    imglink: "",
	    	    name: "Virus Page",
	    	    h1: "Bootstrap"
	        },

	        {
	    	    imglink: "",
	    	    name: "Animals Sound",
	    	    h1: "",
	        },

	        {
	    	    imglink: "",
	    	    name: "Web Piano",
	    	    h1: "JavaScript"
	        },

	        {
	    	    imglink: "",
	    	    name: "Login Form",
	    	    h1: "HTML/CSS"
	        },

	        {
	    	    imglink: "",
	    	    name: "Cartoon Page",
	    	    h1: "Grid"
	        },

	        {
	    	    imglink: "",
	    	    name: "Play With Image",
	    	    h1: ""
	        },

	        {
	    	    imglink: "",
	    	    name: "Flowers Page",
	    	    h1: "JavaScript"
	        },

	        {
	    	    imglink: "",
	    	    name: "Dualities",
	    	    h1: "HTML"
	        }
	]

    detail.forEach(createProjects);
    body.appendChild(head);

}


createBanner();
createTitleBar("LANGUAGES KNOWN");
createLanguageBar();
createTitleBar("ACADEMICS");
createShield();
createTitleBar("SKILL SET");
createImage();
createTitleBar("ACHIEVEMENT");
createAchievement();
createTitleBar("PROJECTS");
createProject();