/* Shared by every page: translations, language switch, project tiles, reveal animation. */
var T={
mk:{n1:"Проекти",n2:"Услуги",n3:"Процес",n4:"Контакт",
h1:"Простори <em>осмислени</em> и изведени да траат.",hp:"Дизајн на ентериер и целосна реализација на едно место — од првата скица до последниот детаљ.",cta:"Започнете проект",
ab:"За нас",abh:"Една визија — од идеја до готов простор.",abp:"Твин Пикс Ентериери осмислува и реализира ентериери за домови, апартмани и деловни простори. Бидејќи дизајнот и изведбата се во наши раце, идејата останува доследна од првичниот цртеж до конечната реализација.",
ph:"Избрани проекти",sh:"Дизајн и реализација",
s1:"Дизајн на ентериер",s1p:"Концепт, планирање на просторот, избор на материјали, бои и осветлување — приспособени на вашиот начин на живот.",
s2:"Изведба на ентериер",s2p:"Целосна реализација на проектот, со контрола врз квалитетот, роковите и буџетот.",
s3:"Мебел по мерка",s3p:"Кујни, плакари, ѕидни облоги и уникатни парчиња мебел, изработени по мерка.",
prh:"Како работиме",t1:"Консултација",t1p:"Ги разгледуваме просторот, вашите потреби, желби и буџет.",t2:"Концепт",t2p:"Изработка на планови и 3D визуелизации, како и избор на материјали.",t3:"Изведба",t3p:"Изведба и монтажа под наш надзор, во секоја фаза од проектот.",t4:"Примопредавање",t4p:"Ги завршуваме последните детали и го опремуваме просторот, подготвен за вселување.",
ch:"Да го создадеме просторот што го замислувате.",cp:"Кажете ни каде се наоѓа вашиот простор, што планирате да направите и кога сакате да започне проектот. На секое ваше запитување одговараме лично.",
ft:"Дизајн · Реализација",all:"Сите",f1:"Домови",f2:"Кујни",f3:"Бањи",f4:"Деловни простори",
mq:["Дизајн","Реализација","Ентериери","Мебел по мерка","Домови","Деловни простори"],
allp:"Сите проекти",pah:"Нашите проекти",pap:"Изберете проект за да ги видите сите фотографии.",
back:"← Сите проекти",prev:"Претходен проект",next:"Следен проект",close:"Затвори",
photo1:"фотографија",photoN:"фотографии",
lp:"Телефон",le:"Е-пошта",lf:"Facebook",lm:"Локација",mapl:"Отвори во Google Maps",call:"Повикај",
fn:"Име и презиме *",fp:"Телефон *",fe:"Е-пошта",fl:"Локација на просторот",fty:"Тип на проект",
o0:"Изберете…",o1:"Кујна",o2:"Дом",o3:"Деловен простор",o4:"Друго",
fm:"Порака *",fmp:"Опишете го накратко просторот и што би сакале да направите.",flp:"на пр. Скопје, Карпош",
fs:"Испрати порака",fsending:"Се испраќа…",freq:"* задолжителни полиња",
fok:"Ви благодариме! Пораката е испратена. Ќе ве контактираме наскоро.",
ferr:"Пораката не беше испратена. Обидете се повторно или јавете ни се на +389 70 398 846.",
fsubj:"Ново запитување од веб-страницата"},
en:{n1:"Projects",n2:"Services",n3:"Process",n4:"Contact",
h1:"Spaces <em>designed</em> and built to last.",hp:"Interior design and execution under one roof: from the first sketch to the final detail.",cta:"Start your project",
ab:"About",abh:"One vision, from idea to completion.",abp:"Twin Piks Interiors designs and builds interiors for homes, apartments and commercial spaces. Because design and execution sit in the same hands, nothing is lost between the drawing and the build.",
ph:"Selected projects",sh:"Design and execution",
s1:"Interior design",s1p:"Concept, space planning, materials, colour and lighting, tailored to the way you live.",
s2:"Execution and build",s2p:"Delivery of all works, with control over quality, schedule and budget.",
s3:"Custom furniture",s3p:"Kitchens, wardrobes, wall panelling and one-off pieces, made to measure.",
prh:"How we work",t1:"Consultation",t1p:"We learn about the space, your wishes and your budget.",t2:"Concept",t2p:"Plans, 3D visuals and material selection.",t3:"Execution",t3p:"Construction and installation under our supervision, step by step.",t4:"Handover",t4p:"Final details and styling, a space ready to live in.",
ch:"Let's create your space.",cp:"Tell us where the space is, what you would like to do and when you would like to begin. Every inquiry gets a personal reply.",
ft:"Design · Execution",all:"All",f1:"Homes",f2:"Kitchens",f3:"Bathrooms",f4:"Commercial",
mq:["Design","Execution","Interiors","Custom furniture","Homes","Commercial spaces"],
allp:"All projects",pah:"Our projects",pap:"Choose a project to see all of its photos.",
back:"← All projects",prev:"Previous project",next:"Next project",close:"Close",
photo1:"photo",photoN:"photos",
lp:"Phone",le:"Email",lf:"Facebook",lm:"Location",mapl:"Open in Google Maps",call:"Call us",
fn:"Full name *",fp:"Phone *",fe:"Email",fl:"Location of the space",fty:"Project type",
o0:"Choose…",o1:"Kitchen",o2:"Home",o3:"Commercial space",o4:"Other",
fm:"Message *",fmp:"Briefly describe the space and what you would like to do.",flp:"e.g. Skopje, Karpoš",
fs:"Send message",fsending:"Sending…",freq:"* required fields",
fok:"Thank you! Your message has been sent. We will get back to you soon.",
ferr:"The message could not be sent. Please try again or call us on +389 70 398 846.",
fsubj:"New inquiry from the website"}};

var LANG=(function(){try{var l=localStorage.getItem("tp-lang");if(l==="mk"||l==="en")return l}catch(e){}return "mk"})();
var HOOKS=[];
function onRender(f){HOOKS.push(f)}
function $$(s){return Array.prototype.slice.call(document.querySelectorAll(s))}
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}
function catName(d,c){return [d.f1,d.f2,d.f3,d.f4][c]}
function photoCount(d,n){return n+" "+(n===1?d.photo1:d.photoN)}

function render(){
  var d=T[LANG];
  document.documentElement.lang=LANG;
  $$("[data-k]").forEach(function(e){e.textContent=d[e.dataset.k]});
  $$("[data-kh]").forEach(function(e){e.innerHTML=d[e.dataset.kh]});
  $$("[data-kp]").forEach(function(e){e.placeholder=d[e.dataset.kp]});
  var b=document.getElementById("lang");if(b)b.textContent=LANG==="mk"?"EN":"МК";
  HOOKS.forEach(function(f){f(d)});
}

/* Project tiles with category filters (home page and projects page). */
function projectGrid(gridId,filtersId,showCount){
  var cur="all",g=document.getElementById(gridId),fl=document.getElementById(filtersId);
  onRender(function(d){
    var fs=[["all",d.all],[1,d.f2],[0,d.f1],[3,d.f4]];
    fl.innerHTML=fs.map(function(f){return '<button type="button" data-f="'+f[0]+'" class="'+(String(f[0])===String(cur)?"on":"")+'">'+esc(f[1])+'</button>'}).join("");
    g.innerHTML=PROJECTS.map(function(p){
      var show=cur==="all"||String(p.cat)===String(cur);
      var sub=catName(d,p.cat)+(showCount?" · "+photoCount(d,p.photos.length):"");
      return '<a class="tile'+(show?"":" hide")+'" href="project.html?p='+p.slug+'" style="background-image:url('+p.cover+')" aria-label="'+esc(p.name[LANG])+'"><div class="cap"><div><h3>'+esc(p.name[LANG])+'</h3><small>'+esc(sub)+'</small></div><span class="ar">↗</span></div></a>'}).join("");
    fl.querySelectorAll("button").forEach(function(b){b.onclick=function(){cur=b.dataset.f;render()}});
  });
}

document.addEventListener("DOMContentLoaded",function(){
  var b=document.getElementById("lang");
  if(b)b.onclick=function(){LANG=LANG==="mk"?"en":"mk";try{localStorage.setItem("tp-lang",LANG)}catch(e){}render()};
  render();
  if("IntersectionObserver" in window){
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}})},{threshold:.12});
    $$(".rv").forEach(function(e){io.observe(e)});
  }else{$$(".rv").forEach(function(e){e.classList.add("in")})}
});
