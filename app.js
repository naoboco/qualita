const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

const translations = {
  fr: {
    nav_help:"Trouver de l'aide", nav_journey:"Mon parcours", nav_map:"Qualita Map", nav_events:"Événements", nav_about:"À propos", call:"Appeler", my_qualita:"Mon Qualita",
    eyebrow:"La plateforme des francophones en Israël", hero_title:'Votre intégration en Israël, <span>simplifiée.</span>', hero_text:"Emploi, droits, études, famille, Alyah : dites-nous ce dont vous avez besoin et trouvez la bonne ressource en quelques secondes.", search_placeholder:"Ex. Je viens d'arriver et je cherche un emploi à Jérusalem", find_solution:"Trouver ma solution", talk_advisor:"Parler à un conseiller", free_french:"Service en français · gratuit", hours:"Dim–Jeu · 9:00–17:30", hero_label:"Des services près de chez vous", recommended:"Recommandé", job_hub:"Hub de l'emploi", available_fr:"Accompagnement en français", rights_center:"Centre des droits", free_service:"Service gratuit", discover:"Découvrir",
    need_kicker:"Par où commencer ?", need_title:"Que voulez-vous faire aujourd’hui ?", guided_path:"Être guidé pas à pas", service_job:"Trouver un emploi", service_job_text:"CV, équivalence, reconversion, entretiens et placement.", service_rights:"Comprendre mes droits", service_rights_text:"Bituah Leumi, Arnona, banque, retraite et droit du travail.", service_alyah:"Préparer mon Alyah", service_alyah_text:"Checklist, premières démarches et accompagnement Allo Alyah.", service_studies:"Études & diplômes", service_studies_text:"Reconnaissance, université, hébreu et orientation.", service_family:"Famille & éducation", service_family_text:"École, parentalité, intégration des enfants et aides.", service_unknown:"Je ne sais pas qui contacter", service_unknown_text:"Répondez à 3 questions. On vous oriente vers le bon service.", start:"Commencer", guide_me:"Guidez-moi",
    journey_kicker:"Votre GPS administratif", journey_title:"Un parcours clair, même quand l’administration ne l’est pas.", journey_text:"Transformez une question compliquée en étapes simples. Sauvegardez votre progression, vos documents et vos rendez-vous dans Mon Qualita.", persona_new:"Je viens d’arriver", persona_work:"Je cherche un emploi", persona_parent:"Je suis parent", open_space:"Ouvrir mon espace", hello:"Bonjour 👋", dashboard_title:"Votre installation avance bien.", saved:"Sauvegardé", first_steps:"Mes premières démarches", steps_done:"5 étapes sur 8 terminées", completed:"Terminé", todo:"À faire cette semaine", hebrew_course:"Oulpan & hébreu",
    map_kicker:"Qualita Map 2.0", map_title:"Les bons services, au bon endroit.", map_text:"Trouvez les organismes, associations et services utiles autour de vous.", map_search:"Rechercher un service...", filter_french:"Français", filter_free:"Gratuit", verified:"QUALITA", phone_center:"Centre d'information francophone",
    events_kicker:"Cette semaine", events_title:"Ne ratez rien d’utile.", all_events:"Voir tout l’agenda", employment:"Emploi", event_cv:"Atelier CV israélien", spots_left:"12 places restantes", register:"S’inscrire", rights:"Droits", event_rights:"Comprendre ses droits d’Olé", online:"En ligne", education:"Éducation", event_school:"Rentrée scolaire en Israël", demo_events_note:"Les événements affichés sont fictifs et servent uniquement à illustrer l’interface du prototype.",
    featured_episode:"Épisode à la une", media_title:"Les 5 démarches à faire pendant votre premier mois en Israël", learn_kicker:"Comprendre Israël", learn_title:"Une ressource quand vous en avez besoin.", learn_text:"Les guides, émissions et ressources pratiques remontent directement dans votre parcours selon votre situation.", guide_arnona:"Comprendre l’Arnona", guide:"Guide pratique", guide_cv:"Faire un CV israélien", career:"Emploi", guide_first_days:"Mes 30 premiers jours",
    impact_kicker:"Une fédération, un point d’entrée", impact_title:"Qualita relie les francophones aux bonnes ressources.", impact_text:"Le prototype transforme les services déjà existants en une expérience cohérente : chercher, comprendre, contacter, suivre.", discover_qualita:"Découvrir Qualita", metric_entry:"point d’entrée unique", metric_languages:"langues prévues", metric_mobile:"pensé mobile", metric_resources:"accès aux ressources", demo_metrics_note:"Indicateurs conceptuels du prototype — ils ne représentent pas les statistiques officielles de Qualita.",
    still_lost:"Vous hésitez encore ?", cta_title:"Vous n’avez pas besoin de connaître le nom du bon service.", cta_text:"Expliquez simplement votre situation. Qualita vous oriente.", start_orientation:"Commencer l’orientation", footer_text:"Prototype UX/UI non officiel imaginé pour illustrer une nouvelle expérience numérique de Qualita.", footer_help:"Aide", contact:"Contact", home:"Accueil", help_short:"Aide", map_short:"Carte", agenda:"Agenda", profile:"Profil",
    orientation:"Orientation", where_are_you:"Où en êtes-vous aujourd’hui ?", choose_best:"Choisissez la situation qui vous ressemble le plus.", prepare_alyah:"Je prépare mon Alyah", just_arrived:"Je viens d’arriver", settled:"Je suis déjà installé(e)", family_focus:"Je cherche pour ma famille", main_need:"Quel est votre besoin principal ?", one_choice:"Un seul choix suffit pour commencer.", studies:"Études", family:"Famille", health:"Santé", other:"Autre", back:"Retour", recommendation:"Votre recommandation", contact_service:"Contacter le service", save_path:"Sauvegarder mon parcours", restart:"Recommencer",
    dashboard_full_title:"Votre espace personnel", dashboard_full_text:"Une démonstration de ce que pourrait devenir le suivi utilisateur.", my_progress:"Ma progression", installation_path:'Parcours « Installation »', next_appointment:"Prochain rendez-vous", add_calendar:"Ajouter au calendrier", this_week:"À faire cette semaine", documents_needed:"2 documents nécessaires", cv_israel:"Adapter mon CV à Israël", recommended_resources:"Ressources recommandées", listen:"À écouter", quick_contact:"Contact rapide", advisor_available:"Conseiller francophone", dashboard_demo_note:"Compte fictif : aucune donnée personnelle n’est enregistrée dans cette démonstration."
  },
  he: {
    nav_help:"מציאת סיוע", nav_journey:"המסלול שלי", nav_map:"מפת Qualita", nav_events:"אירועים", nav_about:"אודות", call:"התקשרו", my_qualita:"Qualita שלי",
    eyebrow:"הפלטפורמה לדוברי צרפתית בישראל", hero_title:'הקליטה שלכם בישראל, <span>פשוטה יותר.</span>', hero_text:"תעסוקה, זכויות, לימודים, משפחה ועלייה: ספרו לנו מה אתם צריכים וקבלו הכוונה למשאב המתאים בתוך שניות.", search_placeholder:"לדוגמה: הגעתי עכשיו ואני מחפש עבודה בירושלים", find_solution:"מצאו לי פתרון", talk_advisor:"שיחה עם יועץ", free_french:"שירות בצרפתית · ללא תשלום", hours:"א׳–ה׳ · 9:00–17:30", hero_label:"שירותים קרובים אליכם", recommended:"מומלץ", job_hub:"מרכז התעסוקה", available_fr:"ליווי בצרפתית", rights_center:"מרכז הזכויות", free_service:"שירות ללא תשלום", discover:"לגלות",
    need_kicker:"מאיפה מתחילים?", need_title:"מה תרצו לעשות היום?", guided_path:"הכוונה צעד אחר צעד", service_job:"למצוא עבודה", service_job_text:"קורות חיים, הכרת תארים, הסבה, ראיונות והשמה.", service_rights:"להבין את הזכויות שלי", service_rights_text:"ביטוח לאומי, ארנונה, בנק, פנסיה ודיני עבודה.", service_alyah:"להכין את העלייה", service_alyah_text:"צ׳קליסט, צעדים ראשונים וליווי Allo Alyah.", service_studies:"לימודים ותארים", service_studies_text:"הכרה, אוניברסיטה, עברית והכוונה.", service_family:"משפחה וחינוך", service_family_text:"בית ספר, הורות, קליטת ילדים וסיוע.", service_unknown:"לא יודע למי לפנות", service_unknown_text:"ענו על 3 שאלות ונפנה אתכם לשירות הנכון.", start:"להתחיל", guide_me:"הכוונו אותי",
    journey_kicker:"ה-GPS הבירוקרטי שלכם", journey_title:"מסלול ברור, גם כשהבירוקרטיה פחות.", journey_text:"הופכים שאלה מורכבת לצעדים פשוטים ושומרים התקדמות, מסמכים ופגישות במקום אחד.", persona_new:"הגעתי עכשיו", persona_work:"אני מחפש עבודה", persona_parent:"אני הורה", open_space:"פתיחת האזור שלי", hello:"שלום 👋", dashboard_title:"הקליטה שלכם מתקדמת היטב.", saved:"נשמר", first_steps:"הצעדים הראשונים שלי", steps_done:"5 מתוך 8 שלבים הושלמו", completed:"הושלם", todo:"לביצוע השבוע", hebrew_course:"אולפן ועברית",
    map_kicker:"Qualita Map 2.0", map_title:"השירות הנכון, במקום הנכון.", map_text:"מצאו גופים, עמותות ושירותים שימושיים בסביבה שלכם.", map_search:"חיפוש שירות...", filter_french:"צרפתית", filter_free:"חינם", verified:"QUALITA", phone_center:"מוקד מידע לדוברי צרפתית",
    events_kicker:"השבוע", events_title:"לא מפספסים מידע שימושי.", all_events:"לכל האירועים", employment:"תעסוקה", event_cv:"סדנת קורות חיים בישראל", spots_left:"נותרו 12 מקומות", register:"להרשמה", rights:"זכויות", event_rights:"להבין את זכויות העולה", online:"אונליין", education:"חינוך", event_school:"פתיחת שנת הלימודים בישראל", demo_events_note:"האירועים המוצגים פיקטיביים ומשמשים להמחשת ממשק האב-טיפוס בלבד.",
    featured_episode:"פרק נבחר", media_title:"5 הפעולות שכדאי לעשות בחודש הראשון בישראל", learn_kicker:"להבין את ישראל", learn_title:"המשאב הנכון, ברגע הנכון.", learn_text:"מדריכים, תוכניות ומידע שימושי משתלבים ישירות במסלול האישי בהתאם למצב שלכם.", guide_arnona:"להבין את הארנונה", guide:"מדריך מעשי", guide_cv:"כתיבת קורות חיים ישראליים", career:"תעסוקה", guide_first_days:"30 הימים הראשונים שלי",
    impact_kicker:"פדרציה אחת, נקודת כניסה אחת", impact_title:"Qualita מחברת דוברי צרפתית למשאבים הנכונים.", impact_text:"האב-טיפוס מחבר את השירותים הקיימים לחוויה אחת: לחפש, להבין, ליצור קשר ולעקוב.", discover_qualita:"להכיר את Qualita", metric_entry:"נקודת כניסה אחת", metric_languages:"שפות מתוכננות", metric_mobile:"מותאם למובייל", metric_resources:"גישה למשאבים", demo_metrics_note:"המדדים הם רעיוניים בלבד ואינם מייצגים נתונים רשמיים של Qualita.",
    still_lost:"עדיין מתלבטים?", cta_title:"לא צריך לדעת מראש מה שם השירות המתאים.", cta_text:"פשוט ספרו לנו מה המצב. Qualita תכוון אתכם.", start_orientation:"התחלת הכוונה", footer_text:"אב-טיפוס UX/UI לא רשמי שנועד להמחיש חוויה דיגיטלית חדשה עבור Qualita.", footer_help:"סיוע", contact:"יצירת קשר", home:"בית", help_short:"עזרה", map_short:"מפה", agenda:"אירועים", profile:"פרופיל",
    orientation:"הכוונה", where_are_you:"איפה אתם נמצאים היום בתהליך?", choose_best:"בחרו את המצב שהכי מתאים לכם.", prepare_alyah:"אני מתכונן לעלייה", just_arrived:"הגעתי עכשיו", settled:"אני כבר גר בישראל", family_focus:"אני מחפש עבור המשפחה", main_need:"מה הצורך המרכזי שלכם?", one_choice:"בחירה אחת מספיקה כדי להתחיל.", studies:"לימודים", family:"משפחה", health:"בריאות", other:"אחר", back:"חזרה", recommendation:"ההמלצה שלכם", contact_service:"יצירת קשר", save_path:"שמירת המסלול", restart:"להתחיל מחדש",
    dashboard_full_title:"האזור האישי שלכם", dashboard_full_text:"הדגמה של חוויית מעקב אישית אפשרית.", my_progress:"ההתקדמות שלי", installation_path:'מסלול "קליטה"', next_appointment:"הפגישה הבאה", add_calendar:"הוספה ליומן", this_week:"לביצוע השבוע", documents_needed:"נדרשים 2 מסמכים", cv_israel:"להתאים קורות חיים לישראל", recommended_resources:"משאבים מומלצים", listen:"להאזנה", quick_contact:"יצירת קשר מהירה", advisor_available:"יועץ דובר צרפתית", dashboard_demo_note:"חשבון פיקטיבי: אין שמירה של מידע אישי בדמו הזה."
  }
};

let currentLang = 'fr';
let orientationState = {};

function initIcons(){
  if (window.lucide) lucide.createIcons({attrs:{'stroke-width':1.8}});
}

function setLanguage(lang){
  currentLang = lang;
  document.documentElement.lang = lang === 'he' ? 'he' : 'fr';
  document.documentElement.dir = lang === 'he' ? 'rtl' : 'ltr';
  $$('.lang-btn').forEach(btn=>btn.classList.toggle('active', btn.dataset.lang===lang));
  $$('[data-i18n]').forEach(el=>{
    const key = el.dataset.i18n;
    const value = translations[lang][key];
    if(value !== undefined) el.innerHTML = value;
  });
  $$('[data-i18n-placeholder]').forEach(el=>{
    const key = el.dataset.i18nPlaceholder;
    if(translations[lang][key]) el.placeholder = translations[lang][key];
  });
  updateOrientationResult();
  initIcons();
}

const serviceData = {
  emploi:{
    fr:{title:"Hub de l'emploi",text:"Pour le CV, l’orientation, la reconversion, l’équivalence des diplômes et la préparation aux entretiens.",link:"https://www.qualita.org.il/lehubdelemploi"},
    he:{title:"מרכז התעסוקה",text:"לקורות חיים, הכוונה, הסבה מקצועית, הכרת תארים והכנה לראיונות.",link:"https://www.qualita.org.il/hub%D7%AA%D7%A2%D7%A1%D7%95%D7%A7%D7%94"}
  },
  droits:{
    fr:{title:"Centre des droits",text:"Pour le Bituah Leumi, l’Arnona, les retraites, la banque, le permis et les questions de droit du travail.",link:"https://www.qualita.org.il/centredesdroits"},
    he:{title:"מרכז הזכויות",text:"לביטוח לאומי, ארנונה, פנסיה, בנק, רישיון נהיגה ושאלות בדיני עבודה.",link:"https://www.qualita.org.il/centredesdroits"}
  },
  etudes:{
    fr:{title:"Allo Alyah + orientation diplômes",text:"Votre demande touche les études ou la reconnaissance de diplôme. Allo Alyah peut vous orienter vers le bon interlocuteur.",link:"https://www.qualita.org.il/allo-alyah-jlm"},
    he:{title:"Allo Alyah והכוונה לתארים",text:"הפנייה נוגעת ללימודים או הכרת תואר. המוקד יכול להפנות לגורם המתאים.",link:"https://www.qualita.org.il/%D7%9E%D7%95%D7%A7%D7%93%D7%94%D7%9C%D7%95%D7%A2%D7%9C%D7%99%D7%99%D7%94jlm"}
  },
  famille:{
    fr:{title:"Allo Alyah JLM",text:"Pour l’éducation, la famille et l’intégration des enfants, un conseiller peut identifier le dispositif ou l’association adapté.",link:"https://www.qualita.org.il/allo-alyah-jlm"},
    he:{title:"Allo Alyah JLM",text:"לחינוך, משפחה וקליטת ילדים, יועץ יכול לזהות את השירות או העמותה המתאימים.",link:"https://www.qualita.org.il/%D7%9E%D7%95%D7%A7%D7%93%D7%94%D7%9C%D7%95%D7%A2%D7%9C%D7%99%D7%99%D7%94jlm"}
  },
  sante:{
    fr:{title:"Allo Alyah JLM",text:"Le centre d’information peut vous orienter sur les sujets de santé et vers les ressources adaptées.",link:"https://www.qualita.org.il/allo-alyah-jlm"},
    he:{title:"Allo Alyah JLM",text:"מוקד המידע יכול לכוון בנושאי בריאות ולמשאבים המתאימים.",link:"https://www.qualita.org.il/%D7%9E%D7%95%D7%A7%D7%93%D7%94%D7%9C%D7%95%D7%A2%D7%9C%D7%99%D7%99%D7%94jlm"}
  },
  alyah:{
    fr:{title:"Allo Alyah JLM",text:"Le centre d’appels francophone gratuit répond aux questions sur la préparation de l’Alyah et l’intégration en Israël.",link:"https://www.qualita.org.il/allo-alyah-jlm"},
    he:{title:"Allo Alyah JLM",text:"מוקד המידע מספק מענה בנושאי הכנה לעלייה וקליטה בישראל.",link:"https://www.qualita.org.il/%D7%9E%D7%95%D7%A7%D7%93%D7%94%D7%9C%D7%95%D7%A2%D7%9C%D7%99%D7%99%D7%94jlm"}
  },
  autre:{
    fr:{title:"Allo Alyah JLM",text:"Votre demande couvre plusieurs domaines. Le plus efficace est de commencer par le centre d’orientation francophone.",link:"https://www.qualita.org.il/allo-alyah-jlm"},
    he:{title:"Allo Alyah JLM",text:"הפנייה שלכם חוצה כמה תחומים. הכי יעיל להתחיל במוקד ההכוונה.",link:"https://www.qualita.org.il/%D7%9E%D7%95%D7%A7%D7%93%D7%94%D7%9C%D7%95%D7%A2%D7%9C%D7%99%D7%99%D7%94jlm"}
  }
};
serviceData.unknown = serviceData.autre;

function openModal(id){
  const modal = document.getElementById(id);
  modal.classList.add('open');
  modal.setAttribute('aria-hidden','false');
  document.body.classList.add('modal-open');
  setTimeout(()=> $('.modal-close',modal)?.focus(),100);
}
function closeModal(id){
  const modal = document.getElementById(id);
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden','true');
  if(!$('.modal-backdrop.open')) document.body.classList.remove('modal-open');
}

function showOrientationStep(step){
  $$('.orientation-step').forEach(el=>el.classList.toggle('active', Number(el.dataset.step)===step));
  $$('.orientation-progress span').forEach((el,i)=>el.classList.toggle('active',i<step));
  initIcons();
}

function updateOrientationResult(){
  if(!$('#resultTitle')) return;
  const key = orientationState.need || (orientationState.stage==='prepare' ? 'alyah' : 'autre');
  const data = (serviceData[key] || serviceData.autre)[currentLang];
  $('#resultTitle').textContent = data.title;
  $('#resultText').textContent = data.text;
  $('#resultPrimary').href = data.link;
}

function startOrientation(preselect){
  orientationState = {};
  if(preselect && preselect !== 'unknown') orientationState.need = preselect;
  showOrientationStep(1);
  openModal('orientationModal');
}

function showToast(message){
  const toast=$('#toast');
  $('span',toast).textContent=message;
  toast.classList.add('show');
  setTimeout(()=>toast.classList.remove('show'),2400);
}

function smartMatches(query){
  const q=query.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');
  const matches=[];
  const rules=[
    {keys:['emploi','travail','job','cv','entretien','reconversion','work','עבודה','תעסוקה'],service:'emploi'},
    {keys:['droit','arnona','bituah','banque','retraite','licenci','impot','זכויות','ארנונה','ביטוח'],service:'droits'},
    {keys:['alyah','aliya','arrive','nouveau','oleh','עליה','עולה','הגעתי'],service:'alyah'},
    {keys:['diplome','universite','etude','yael','hebreu','תואר','לימודים','אוניברסיטה'],service:'etudes'},
    {keys:['enfant','ecole','famille','parent','creche','ילד','בית ספר','משפחה'],service:'famille'},
    {keys:['sante','medecin','kupat','hopital','בריאות','רופא','קופת'],service:'sante'}
  ];
  for(const r of rules){ if(r.keys.some(k=>q.includes(k))) matches.push(r.service); }
  if(!matches.length) matches.push('autre');
  return [...new Set(matches)].slice(0,3);
}

function renderSuggestions(query){
  const box=$('#searchSuggestions');
  if(query.trim().length<2){box.classList.remove('show');box.innerHTML='';return;}
  const services=smartMatches(query);
  const iconMap={emploi:'briefcase-business',droits:'file-check-2',alyah:'plane-landing',etudes:'graduation-cap',famille:'users-round',sante:'heart-pulse',autre:'circle-help'};
  box.innerHTML=services.map(s=>{
    const d=serviceData[s][currentLang];
    return `<button class="search-suggestion" data-suggest="${s}"><i data-lucide="${iconMap[s]}"></i><div><strong>${d.title}</strong><small>${d.text}</small></div></button>`;
  }).join('');
  box.classList.add('show');
  $$('[data-suggest]',box).forEach(btn=>btn.addEventListener('click',()=>{orientationState={stage:'settled',need:btn.dataset.suggest};updateOrientationResult();showOrientationStep(3);openModal('orientationModal');box.classList.remove('show');}));
  initIcons();
}

const personaTemplates={
  new:[['Koupat Holim',true],['Compte bancaire',true],['Arnona',false],[currentLang==='he'?'אולפן ועברית':'Oulpan & hébreu',false]],
  work:[['CV israélien',true],['Équivalence de diplôme',false],['Préparation entretien',false],['Rendez-vous Hub',false]],
  parent:[['Inscription municipale',true],['École / gan',false],['Aide linguistique',false],['Activités francophones',false]]
};
function setPersona(persona){
  $$('.persona').forEach(b=>b.classList.toggle('active',b.dataset.persona===persona));
  const data=personaTemplates[persona]||personaTemplates.new;
  $('#personaSteps').innerHTML=data.map(([title,done],i)=>`<label class="todo ${done?'done':''}"><span class="check">${done?'<i data-lucide="check"></i>':''}</span><div><strong>${title}</strong><small>${done?(currentLang==='he'?'הושלם':'Terminé'):(i===1?(currentLang==='he'?'לביצוע השבוע':'À faire cette semaine'):(currentLang==='he'?'מומלץ':'Recommandé'))}</small></div><i data-lucide="chevron-right"></i></label>`).join('');
  initIcons();
}

function setupReveal(){
  const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in-view');obs.unobserve(e.target)}}),{threshold:.12});
  $$('.reveal').forEach(el=>obs.observe(el));
}

function setupEvents(){
  $$('.event-register').forEach(btn=>btn.addEventListener('click',()=>{
    btn.textContent=currentLang==='he'?'נרשמת ✓':'Inscrit ✓';
    btn.disabled=true;
    showToast(currentLang==='he'?'ההרשמה נשמרה בדמו':'Inscription enregistrée dans la démo');
  }));
}

function setupMap(){
  function select(n){
    $$('.place-card').forEach(card=>card.classList.toggle('selected',card.dataset.pin===String(n)));
    $$('.map-pin').forEach(pin=>pin.classList.toggle('active',pin.dataset.place===String(n)));
  }
  $$('.place-card').forEach(card=>card.addEventListener('click',()=>select(card.dataset.pin)));
  $$('.map-pin').forEach(pin=>pin.addEventListener('click',()=>select(pin.dataset.place)));
  $$('.filter-chip').forEach(chip=>chip.addEventListener('click',()=>chip.classList.toggle('active')));
}

function setupMedia(){
  const btn=$('#playDemo'); if(!btn) return;
  let playing=false;
  btn.addEventListener('click',()=>{
    playing=!playing;
    btn.innerHTML=`<i data-lucide="${playing?'pause':'play'}"></i>`;
    showToast(playing?(currentLang==='he'?'נגן הדמו הופעל':'Lecture simulée'):(currentLang==='he'?'הושעה':'Lecture en pause'));
    initIcons();
  });
}

window.addEventListener('DOMContentLoaded',()=>{
  initIcons(); setupReveal(); setupEvents(); setupMap(); setupMedia();

  window.addEventListener('scroll',()=>$('.site-header')?.classList.toggle('scrolled',window.scrollY>12));
  $('.demo-ribbon__close')?.addEventListener('click',()=>$('.demo-ribbon').remove());

  $$('.lang-btn').forEach(btn=>btn.addEventListener('click',()=>setLanguage(btn.dataset.lang)));
  $$('.open-orientation').forEach(btn=>btn.addEventListener('click',()=>startOrientation()));
  $$('.service-card').forEach(card=>card.addEventListener('click',()=>startOrientation(card.dataset.service)));
  $$('.open-dashboard').forEach(btn=>btn.addEventListener('click',()=>openModal('dashboardModal')));
  $('.open-dashboard-from-result')?.addEventListener('click',()=>{closeModal('orientationModal');openModal('dashboardModal')});
  $$('[data-close]').forEach(btn=>btn.addEventListener('click',()=>closeModal(btn.dataset.close)));
  $$('.modal-backdrop').forEach(back=>back.addEventListener('click',e=>{if(e.target===back)closeModal(back.id)}));
  document.addEventListener('keydown',e=>{if(e.key==='Escape') $$('.modal-backdrop.open').forEach(m=>closeModal(m.id)); if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'){e.preventDefault();$('#helpQuery')?.focus();window.scrollTo({top:0,behavior:'smooth'})}});

  $$('.choice[data-answer="stage"]').forEach(btn=>btn.addEventListener('click',()=>{orientationState.stage=btn.dataset.value;showOrientationStep(2)}));
  $$('.choice[data-answer="need"]').forEach(btn=>btn.addEventListener('click',()=>{orientationState.need=btn.dataset.value;updateOrientationResult();showOrientationStep(3)}));
  $('.back-step')?.addEventListener('click',()=>showOrientationStep(1));
  $('.restart-orientation')?.addEventListener('click',()=>{orientationState={};showOrientationStep(1)});

  const input=$('#helpQuery');
  input?.addEventListener('input',e=>renderSuggestions(e.target.value));
  $('#searchBtn')?.addEventListener('click',()=>{const matches=smartMatches(input.value);orientationState={stage:'settled',need:matches[0]};updateOrientationResult();showOrientationStep(3);openModal('orientationModal');$('#searchSuggestions').classList.remove('show')});
  input?.addEventListener('keydown',e=>{if(e.key==='Enter')$('#searchBtn').click()});

  $$('.persona').forEach(btn=>btn.addEventListener('click',()=>setPersona(btn.dataset.persona)));

  const menu=$('.mobile-menu');
  $('.mobile-menu-btn')?.addEventListener('click',()=>{menu.classList.add('open');menu.setAttribute('aria-hidden','false')});
  $('.mobile-menu-close')?.addEventListener('click',()=>{menu.classList.remove('open');menu.setAttribute('aria-hidden','true')});
  $$('.mobile-menu a').forEach(a=>a.addEventListener('click',()=>{menu.classList.remove('open');menu.setAttribute('aria-hidden','true')}));

  $$('.mobile-bottom-nav a').forEach(a=>a.addEventListener('click',()=>{$$('.mobile-bottom-nav a').forEach(x=>x.classList.remove('active'));a.classList.add('active')}));

  if('serviceWorker' in navigator && location.protocol!=='file:') navigator.serviceWorker.register('./sw.js').catch(()=>{});
});
