/* Active about navigator */
const aboutnav = document.querySelectorAll('.about_nav')

function activeabout() {
    aboutnav.forEach(abtnav=> abtnav.classList.remove('active-about'))
    this.classList.add('active-about')
}

aboutnav.forEach(abtnav=> abtnav.addEventListener("click", activeabout))

/* Donate popup */

let dnt = document.getElementById("dntPop");

    function openDntpop(){
        dnt.classList.add("donate-pop");
    }

    function closeDntpop(){
        dnt.classList.remove("donate-pop");
    }

/* -------------------SKILLS TAB -----------*/
const tabs = document.querySelectorAll('[data-target]'),
    tabContent = document.querySelectorAll('[data-content]')

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            const target = document.querySelector(tab.dataset.target)

            tabContent.forEach(tabContents => {
                tabContents.classList.remove("skills_active")
            })

            target.classList.add('skills_active')

            tabs.forEach(tab => {
                tab.classList.remove("skills_active")
            })

            tab.classList.add('skills_active')
        })
    }) 

/* mixedup filter portfolio */

let mixerPortfolio = mixitup('.work_container', {
    selectors: {
        target: '.work_card'
    },
    animation: {
        duration: 300
    }
});

/* ----- link active work -----*/
const linkWork = document.querySelectorAll('.work_item')

function activeWork() {
    linkWork.forEach(actwrk=> actwrk.classList.remove('active-work'))
    this.classList.add('active-work')
}

linkWork.forEach(actwrk=> actwrk.addEventListener("click", activeWork))

/*-----------------work popups--------------*/
let mvcWork = document.getElementById("Mvcworkpopup-card");
let smaWork = document.getElementById("Smaworkpopup-card");
let smwWork = document.getElementById("Smwworkpopup-card");
let ldWork = document.getElementById("Ldworkpopup-card");
let ucaWork = document.getElementById("Ucaworkpopup-card");
let mpaWork = document.getElementById("Mpworkpopup-card");
let pWork = document.getElementById("Pworkpopup-card");
let ecwWork = document.getElementById("Ecwworkpopup-card");
let fcWork = document.getElementById("Fcworkpopup-card");
    /*-----------mombasa vosh church-------*/
    
    function openMvcworkdata(){
        mvcWork.classList.add("workpopup-card-active");
    }
    function closeMvcworkdata(){
        mvcWork.classList.remove("workpopup-card-active");
    }

    /*----------Shop manager app-----------*/
    function openSmaworkdata(){
        smaWork.classList.add("workpopup-card-active");
    }
    function closeSmaworkdata(){
        smaWork.classList.remove("workpopup-card-active");
    }
    /*----------social media website-----------*/
    function openSmwworkdata(){
        smwWork.classList.add("workpopup-card-active");
    }
    function closeSmwworkdata(){
        smwWork.classList.remove("workpopup-card-active");
    }
    /*----------Logo design-----------*/
    function openLdworkdata(){
        ldWork.classList.add("workpopup-card-active");
    }
    function closeLdworkdata(){
        ldWork.classList.remove("workpopup-card-active");
    }
    /*----------Unit Convertor app-----------*/
    function openUcaworkdata(){
        ucaWork.classList.add("workpopup-card-active");
    }
    function closeUcaworkdata(){
        ucaWork.classList.remove("workpopup-card-active");
    }
    /*----------My Portfolio-----------*/
    function openMpworkdata(){
        mpaWork.classList.add("workpopup-card-active");
    }
    function closeMpworkdata(){
        mpaWork.classList.remove("workpopup-card-active");
    }
    /*----------Posters-----------*/
    function openPworkdata(){
        pWork.classList.add("workpopup-card-active");
    }
    function closePworkdata(){
        pWork.classList.remove("workpopup-card-active");
    }
    /*----------E-commerce Website-----------*/
    function openEcwworkdata(){
        ecwWork.classList.add("workpopup-card-active");
    }
    function closeEcwworkdata(){
        ecwWork.classList.remove("workpopup-card-active");
    }
    /*----------Function cards-----------*/
    function openFcworkdata(){
        fcWork.classList.add("workpopup-card-active");
    }
    function closeFcworkdata(){
        fcWork.classList.remove("workpopup-card-active");
    }


/*--------------------services modal-----------*/
const modalViews = document.querySelectorAll('.services_modal-content'),
      modelBtns = document.querySelectorAll('.services_button'),
      modalCloses = document.querySelectorAll('.services_modal-close'),
      closeMdl = document.querySelectorAll('.close_modl')

let modal = function(modalClick) {
    modalViews[modalClick].classList.add('active-modal')
}

modelBtns.forEach((modelBtn, i) => {
    modelBtn.addEventListener('click', () =>{
        modal(i)
    })
})
closeMdl.forEach((modelLink, i) => {
    modelLink.addEventListener("click", () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal')
        })
    })
})
modalCloses.forEach((modalClose) => {
    modalClose.addEventListener("click", () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal')
        })
    })
})

/* Comment slides */

const testslide = document.querySelectorAll('.testimonial_card')

let counter = 1;
slidefun(counter);

let timer = setInterval(autoSlide, 8000);
function autoSlide() {
	counter += 1;
	slidefun(counter);
}
function plusSlides(n) {
	counter += n;
	slidefun(counter);
	resetTimer();
}
function currentSlide(n) {
	counter = n;
	slidefun(counter);
	resetTimer();
}
function resetTimer() {
	clearInterval(timer);
	timer = setInterval(autoSlide, 8000);
}

function slidefun(n) {
	
	let i;
	for(i = 0;i<testslide.length;i++){
		testslide[i].style.display = "none";
	}
	if(n > testslide.length){
	   counter = 1;
	   }
	if(n < 1){
	   counter = testslide.length;
	   }
       testslide[counter - 1].style.display = "block";
}

/*-----------------input label animation----------
const inputs = document.querySelectorAll(".input");

function focusFunc(){
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc(){
    let parent = this.parentNode;
    if(this.value == ""){
        parent.classList.remove("focus")
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
})*/

/*--------------scroll sections active link-------------*/
//geting all sections that have an Id defined
const sections = document.querySelectorAll("section[id]")
// adding an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter(){
    //geting current scroll position
    let scrollY = window.pageYOffset;
    //looping through sections to get top, height and ID values
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50,
        sectionID = current.getAttribute("id");
        if (scrollY > sectionTop && scrollY <= sectionTop+sectionHeight){
            document.querySelector('.nav_menu a[href*=' +sectionID + ']').classList.add("active-link")
        }
        else{
            document.querySelector('.nav_menu a[href*=' +sectionID + ']').classList.remove("active-link")
        }
    })
}

/*----------------navigation menu toggle-----------*/

const selectElement = (element) => document.querySelector(element);

selectElement( element= '.icn-cont').addEventListener( type= 'click', listener=() =>{
	selectElement( element= '.nav').classList.toggle(token= 'active-link');
});

/*---------------about swaps ---------*/

let about = document.getElementById("qualification_containerid");
let decriptd = document.getElementById("descript-did");
let skillcont = document.getElementById("skill")

function openQualifications(){
    about.classList.add("qualification_container-active");
    decriptd.classList.add("description-details-active");
    skillcont.classList.remove("skills-active");
}

function openDescription(){
    about.classList.remove("qualification_container-active");
    decriptd.classList.remove("description-details-active");
    skillcont.classList.remove("skills-active");
}

function openSkills(){
    about.classList.remove("qualification_container-active");
    decriptd.classList.add("description-details-active");
    skillcont.classList.add("skills-active");
}

/* Comment with Javascript */
const nminpt = document.getElementById("nameinput");
const cmntinpt = document.getElementById("comentinput");
const cmntpstd = document.getElementById("cmntpst");
const cmntinmd = document.getElementById("cmntnm");
const comntdis = document.getElementById("comment");

function sendComent(){
    cmntpstd.innerHTML = cmntinpt.value,
    cmntinmd.innerHTML = nminpt.value,
    comntdis.classList.add("testimonial_card-active")
}

const testD = document.getElementById("tstdt");
const testm = document.getElementById("tstmd");
const testy = document.getElementById("tstdyd");


function upDatecomtdt(){
    let cdt = new Date().getFullYear();
    let testmd = new Date().getUTCMonth();
    let testdy = new Date().getUTCDate();
    
    testD.innerText = cdt;
    testm.innerText = testmd;
    testy.innerText = testdy;
}

upDatecomtdt()