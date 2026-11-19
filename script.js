'use strict';

const projects = {
  solespace: {
    label: 'Academic thesis · 2026 · Quality assurance',
    title: 'SoleSpace — QA & Project Coordination',
    description: 'An integrated retail and shoe-repair management platform. My personal contributions were manual testing, documenting defects, retesting functionality and helping the team clarify expected business workflows—not the implementation of the programmers’ backend or frontend code.',
    details: [
      ['My role', 'Project Manager and Primary Manual QA Tester. I assigned frontend and backend issues to the relevant programmers and communicated expected process behavior.'],
      ['Testing approach', 'Checklist-guided and workflow-based functional tests using role-specific ERP accounts, multiple desktop browsers, mobile browsers and the SoleSpace mobile app.'],
      ['Recorded results', 'October 12, 2026 V2 Business Both: 80/80 core functions passed retesting and 32/32 special regression scenarios passed. These results cover the documented scope only.'],
      ['Example defects', 'An assigned delivery missing from a Rider account; and a third-party refund initiating a Dispatcher request before Finance approval. Both were reported and retested.'],
      ['Evidence', 'Original QA report and Discord reports are available for portfolio documentation. Sensitive information should be redacted before publishing those reports.']
    ],
    url: 'https://solespace.shop/', urlLabel: 'Visit SoleSpace website'
  },
  rider: {
    label: 'Manual QA · Logistics / Rider', title: 'Rider assignment not appearing',
    description: 'While testing the handoff between Dispatcher and Rider accounts, I found that a delivery could be assigned but would not appear in the Rider’s list.',
    details: [
      ['Expected', 'Once assigned by a Dispatcher, the delivery should be visible in the appropriate Rider account.'],
      ['Observed', 'The delivery had been assigned, but the Rider account did not display it.'],
      ['My action', 'Documented the process in our team’s Discord, attached screenshots, and informed the programmer.'],
      ['After the fix', 'Retested the affected flow, confirmed that the delivery was visible, and marked the function as working in the testing document.'],
      ['Limit', 'I am not claiming to have identified or repaired the underlying code defect; that correction was performed by the programmer.']
    ],
  },
  refund: {
    label: 'Manual QA · Returns / Finance', title: 'Refund approval sequence',
    description: 'A third-party delivery refund was triggering shipment handling earlier than the intended approval workflow allowed.',
    details: [
      ['Observed', 'A Dispatcher shipment request appeared after Staff approval, before Finance had approved the refund.'],
      ['Expected', 'Refund request → Staff approval → Finance approval → authorized shipment request/third-party booking → processing and inspection → refund to customer.'],
      ['My action', 'Described the incorrect sequence in Discord, clarified the expected business flow, and included screenshots for the development team.'],
      ['Verification', 'After the programmer corrected the behavior, I retested the process and recorded the function as working.'],
      ['Limit', 'The original October 1 defect report and October 12 testing snapshot are different dated artifacts. The screenshot evidence should be redacted before public use.']
    ],
  },
  nexacare: {
    label: 'Personal Figma concept · 2025', title: 'NexaCare — Healthcare Management UI',
    description: 'An exploratory user interface for a community healthcare management system. I designed the screens and a navigable prototype; it is not a deployed hospital system.',
    details: [
      ['Designed by me', 'Landing page, login page, main dashboard and several interface forms.'],
      ['Prototype coverage', 'Landing-to-login, login-to-dashboard, form openings and logout. Some controls are demonstrative only.'],
      ['Design practice', 'Visual hierarchy, consistent sidebar navigation and a dashboard layout for patients, appointments, immunization and other health-service areas.'],
      ['Research and testing', 'A personal exercise informed by Human-Computer Interaction coursework, without formal user research or usability testing.']
    ],
    url: 'https://www.figma.com/proto/n8Rjk2YOJF8D7Zs9KYJAJh/nexacare?node-id=0-1&t=K2b93P10esiyYcw9-1', urlLabel: 'Open NexaCare Figma prototype'
  },
  drip: {
    label: 'Personal Figma concept · 2025', title: 'Drip — Mobile Shopping Concept',
    description: 'A navigable apparel-shopping mobile interface concept. The prototype demonstrates screen navigation and visual flow, not operational backend commerce.',
    details: [
      ['Designed by me', 'Brand identity, authentication screens, shopping homepage and related shopping interfaces.'],
      ['Prototype coverage', 'Connected flows for browsing products, viewing product details, cart and checkout interfaces.'],
      ['Design practice', 'Consistent monochrome typography, product cards, navigation and mobile layouts.'],
      ['Limit', 'Figma-only interface concept. No production sign-in, database, inventory or payment processing is implemented.']
    ],
    url: 'https://www.figma.com/proto/4zudnxIhIa7psIR9sLLmSx/Drip?node-id=0-1&t=XO9mSlQY30EYodMF-1', urlLabel: 'Open Drip Figma prototype'
  },
  yambiance: {
    label: 'Independent website · 2026', title: 'Yambiance — Hotel & Retreat Website',
    description: 'A solo WordPress and Elementor Pro frontend concept for a luxury mountain retreat. The pages demonstrate a cohesive hospitality website, not a functional reservation backend.',
    details: [['My contribution','Designed and assembled the responsive promotional frontend independently using WordPress and Elementor Pro.'],['Page range','Homepage, room and accommodation presentation, experience gallery, and a contact / inquiry interface.'],['Scope','This is a frontend demonstration. The form and booking-oriented interfaces are not evidence of operational booking processing.']],
    url: 'https://yambaotechnoprefi.free.nf/?i=1', urlLabel: 'Visit Yambiance website'
  },
  yamshore: {
    label: 'Independent website · 2026', title: 'Yamshore — Beach & Resort Website',
    description: 'A solo WordPress and Elementor Pro frontend concept for a seaside resort with accommodations, visual galleries and an inquiry interface.',
    details: [['My contribution','Designed and built the promotional website frontend independently.'],['Page range','Homepage, stays and accommodations, resort gallery, and contact / inquiry section.'],['Scope','These are promotional interface demonstrations, without an operational booking backend.']],
    url: 'https://yambaotechnolabexam.free.nf/?i=1', urlLabel: 'Visit Yamshore website'
  },
  hapag: {
    label: 'Independent website · 2026', title: 'Hapag — Filipino Cuisine Website',
    description: 'A solo WordPress and Elementor Pro promotional frontend for a Filipino restaurant, showcasing the dining brand, featured dishes and visit information.',
    details: [['My contribution','Designed and assembled the promotional frontend independently.'],['Page range','Homepage, featured food section, restaurant contact details and opening-hours interface.'],['Scope','The reservation-oriented elements are part of the visual demonstration, not a functioning booking backend.']],
    url: 'https://orange-wildflower-83de.lolers331.workers.dev/sample-page/homepage/', urlLabel: 'Visit Hapag website'
  }
};

function assetUrl(file) { return (typeof embeddedAssets !== 'undefined' && embeddedAssets[file]) || `assets/${file}`; }
const q = (selector, root=document) => root.querySelector(selector);
const qa = (selector, root=document) => Array.from(root.querySelectorAll(selector));

const mobileToggle = q('#menu-toggle');
const navigation = q('#primary-nav');
function closeNavigation() {
  mobileToggle.setAttribute('aria-expanded','false');
  mobileToggle.setAttribute('aria-label','Open navigation menu');
  navigation.classList.remove('open');
}
mobileToggle.addEventListener('click', () => {
  const shouldOpen = mobileToggle.getAttribute('aria-expanded') !== 'true';
  navigation.classList.toggle('open',shouldOpen);
  mobileToggle.setAttribute('aria-expanded',String(shouldOpen));
  mobileToggle.setAttribute('aria-label',shouldOpen ? 'Close navigation menu' : 'Open navigation menu');
});
qa('.primary-nav a').forEach(link => link.addEventListener('click', closeNavigation));
document.addEventListener('keydown', event => { if(event.key === 'Escape') closeNavigation(); });
document.addEventListener('click', event => {
  if (!event.target.closest('.site-header') && navigation.classList.contains('open')) closeNavigation();
});

const sectionToNav = {
  home:'home', skills:'skills',work:'work',design:'work',websites:'work',
  experience:'experience',more:'experience',about:'about',contact:'contact'
};
const links = qa('.nav-link');
const observer = new IntersectionObserver(entries => {
  const visible = entries.filter(item => item.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio);
  if (!visible.length) return;
  const navTarget = sectionToNav[visible[0].target.id];
  links.forEach(link => {
    const active = link.getAttribute('href') === `#${navTarget}`;
    link.classList.toggle('active',active);
    if (active) link.setAttribute('aria-current','location');
    else link.removeAttribute('aria-current');
  });
},{rootMargin:'-20% 0px -50% 0px',threshold:0});
Object.keys(sectionToNav).forEach(id=> { const element=document.getElementById(id); if(element) observer.observe(element); });

const dialog=q('#project-dialog');
const dialogHeading=q('#dialog-heading');
const dialogLabel=q('#dialog-eyebrow');
const dialogIntro=q('#dialog-intro');
const dialogPoints=q('#dialog-points');
const dialogActions=q('#dialog-actions');

function showProject(name) {
  const data = projects[name];
  if (!data) return;
  dialogLabel.textContent=data.label;
  dialogHeading.textContent=data.title;
  dialogIntro.textContent=data.description;
  dialogPoints.replaceChildren();
  data.details.forEach(([heading, description]) => {
    const item=document.createElement('div');item.className='dialog-point';
    const label=document.createElement('strong');label.textContent=heading;
    const body=document.createElement('span');body.textContent=description;
    item.append(label,body);dialogPoints.append(item);
  });
  dialogActions.replaceChildren();
  if (data.url) {
    const link=document.createElement('a');link.className='pill pill-dark';link.href=data.url;
    link.target='_blank';link.rel='noopener noreferrer';link.textContent=data.urlLabel || 'Visit site';
    dialogActions.append(link);
  }
  dialog.showModal();
}
qa('[data-open-project]').forEach(button=>button.addEventListener('click',()=>showProject(button.dataset.openProject)));
q('#project-close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target===dialog) dialog.close();});

const certificateDialog=q('#certificate-dialog');
const certificateFull=q('#certificate-full');
qa('[data-cert]').forEach(button=>button.addEventListener('click',()=>{
  const file=button.dataset.cert;
  if(!/^cert_(cpp|html|css|js|web)\.webp$/.test(file))return;
  const title=button.dataset.certTitle;
  q('#certificate-dialog-title').textContent=title;
  certificateFull.src=assetUrl(file);
  certificateFull.alt=`SoloLearn ${title} certificate awarded to John Paul Yambao`;
  certificateDialog.showModal();
}));
q('#certificate-close').addEventListener('click',()=>certificateDialog.close());
certificateDialog.addEventListener('click',event=>{if(event.target===certificateDialog)certificateDialog.close();});


// Presentation preferences: light by default, with a shared floating switch for both views.
const themeButton=q('#theme-toggle');
const themeText=q('#theme-toggle-label');
function setTheme(theme, persist=true) {
  const dark=theme==='dark';
  document.documentElement.dataset.theme=dark?'dark':'light';
  themeButton.setAttribute('aria-pressed', String(dark));
  themeButton.setAttribute('aria-label', dark?'Switch to light mode':'Switch to dark mode');
  themeText.textContent=dark?'Light mode':'Dark mode';
  themeButton.title=dark?'Switch to light mode':'Switch to dark mode';
  q('meta[name="theme-color"]').setAttribute('content', dark?'#111114':'#fbf7f1');
  if (persist) {try {localStorage.setItem('jp-theme-v9',dark?'dark':'light');}catch(e){/* local file preview */}}
}
setTheme(document.documentElement.dataset.theme==='dark'?'dark':'light',false);
themeButton.addEventListener('click',()=>setTheme(document.documentElement.dataset.theme==='dark'?'light':'dark'));

const recruiterButton=q('#recruiter-toggle');
const recruiterButtonLabel=q('#recruiter-toggle-label');
const recruiterSection=q('#recruiter');
function setRecruiterView(on, {updateUrl=true}={}) {
  document.body.classList.toggle('recruiter-mode',on);
  recruiterSection.hidden=!on;
  recruiterButton.setAttribute('aria-pressed', String(on));
  recruiterButton.setAttribute('aria-label',on?'Return to full portfolio':'Switch to recruiter summary');
  recruiterButtonLabel.textContent=on?'Full portfolio':'Recruiter view';
  closeNavigation();
  if (updateUrl && ['http:','https:'].includes(location.protocol)) {
    const url=new URL(location.href);
    on?url.searchParams.set('view','recruiter'):url.searchParams.delete('view');
    history.replaceState({},'',url);
  }
  window.scrollTo({top:0,behavior:'instant'});
}
recruiterButton.addEventListener('click',()=>setRecruiterView(!document.body.classList.contains('recruiter-mode')));
q('#recruiter-back').addEventListener('click',()=>setRecruiterView(false));
if (['http:','https:'].includes(location.protocol) && new URLSearchParams(location.search).get('view')==='recruiter') setRecruiterView(true,{updateUrl:false});

const imageDialog=q('#image-dialog');
const imageFull=q('#image-dialog-full');
const allowedImageFiles=new Set([
 'solespace.webp','solespace_products.webp','solespace_admin.webp','solespace_logo.webp','qa_report.webp',
 'nexa_landing.webp','nexa_dash.webp','nexa_patient.webp','nexa_appointments.webp',
 'drip_logo.webp','drip_login.webp','drip_home.webp',
 'yambiance.webp','yambiance_rooms.webp','yambiance_gallery.webp','yambiance_contact.webp','yambiance_logo.webp',
 'yamshore.webp','yamshore_rooms.webp','yamshore_gallery.webp','yamshore_contact.webp','yamshore_logo.webp',
 'hapag.webp','hapag_dish.webp','hapag_contact.webp','hapag_logo.webp'
]);
function openProjectScreenshot(button){
 const file=button.dataset.viewImage;
 if (!allowedImageFiles.has(file)) return;
 imageFull.src=assetUrl(file);
 imageFull.alt=button.dataset.imageAlt||button.dataset.imageCaption||'Project screenshot';
 q('#image-dialog-caption').textContent=button.dataset.imageCaption||imageFull.alt;
 if (!imageDialog.open) imageDialog.showModal();
}
document.addEventListener('click',event=>{
 const trigger=event.target.closest('[data-view-image]');
 if(trigger) openProjectScreenshot(trigger);
});
q('#image-dialog-close').addEventListener('click',()=>imageDialog.close());
imageDialog.addEventListener('click',event=>{if(event.target===imageDialog)imageDialog.close();});
