/*
 * A few small interactions, without adding a framework:
 * - Remember which colour theme I select.
 * - Toggle the menu on smaller screens.
 * - Read projects and papers from content.js and display them on each page.
 * - Filter project entries by whether a live link is available.
 *
 * I am using semantic HTML and ordinary links so the site works on GitHub Pages
 * or a static hosting service without a build step.
 */
const data = window.portfolioContent;
const themes = ['plum', 'dark', 'sage', 'navy'];
const escapeHTML = value => String(value ?? '').replace(/[&<>"']/g, match => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[match]);
function safeURL(value) {
  if (!value) return '';
  try { const url = new URL(value); return ['http:','https:'].includes(url.protocol) ? url.href : ''; }
  catch { return ''; }
}
function researchEntry(item, i, featured = false) {
  const url = safeURL(item.paper);
  return `<article class="research-entry ${featured ? 'featured-entry' : ''}">
      <div class="entry-count">${escapeHTML(item.number)} <span>/ ${escapeHTML(item.year)}</span></div>
      <div class="entry-body"><p class="micro-label">${escapeHTML(item.area)}</p><h3>${escapeHTML(item.title)}</h3><p class="entry-summary">${escapeHTML(item.summary)}</p><div class="entry-bottom"><span>${escapeHTML(item.label)}</span>${url ? `<a href="${escapeHTML(url)}" target="_blank" rel="noopener noreferrer" aria-label="Read paper: ${escapeHTML(item.title)}">Read the paper ↗</a>` : ''}</div></div>
    </article>`;
}
function projectEntry(item) {
  const url = safeURL(item.url);
  const live = item.status === 'live' && url;
  const link = live ? `<a href="${escapeHTML(url)}" target="_blank" rel="noopener noreferrer" aria-label="Open ${escapeHTML(item.title)}">Visit website ↗</a>` : '<span class="soon-label">Deployment planned</span>';
  return `<article class="project-entry" data-status="${live ? 'live' : 'in-progress'}">
    <span class="project-number">${escapeHTML(item.number)}</span>
    <div class="project-title-area"><p class="micro-label">${escapeHTML(item.category)}</p><h3>${escapeHTML(item.title)}</h3></div>
    <div class="project-detail"><p>${escapeHTML(item.summary)}</p><div class="project-tags">${item.stack.map(t => `<span>${escapeHTML(t)}</span>`).join('')}</div></div>
    <div class="project-outcome">${link}<span class="project-outcome-icon" aria-hidden="true">${live ? '↗' : '◌'}</span></div>
  </article>`;
}
function renderContent() {
  const homeResearch = document.querySelector('#home-research');
  if (homeResearch) homeResearch.innerHTML = data.research.slice(0,2).map((item,i) => researchEntry(item,i,i===0)).join('');
  const researchList = document.querySelector('#research-list');
  if (researchList) researchList.innerHTML = data.research.map((item,i) => researchEntry(item,i)).join('');
  const homeProjects = document.querySelector('#home-projects');
  if (homeProjects) homeProjects.innerHTML = data.software.slice(0,2).map(projectEntry).join('');
  const projectsList = document.querySelector('#projects-list');
  if (projectsList) projectsList.innerHTML = data.software.map(projectEntry).join('');
  const pubList = document.querySelector('#publication-list');
  if (pubList) pubList.innerHTML = data.publications.map((item,i) => `<a class="publication-item" target="_blank" rel="noopener noreferrer" href="${escapeHTML(safeURL(item.url))}"><span class="pub-year">${escapeHTML(item.year)}</span><span class="pub-details"><strong>${escapeHTML(item.title)}</strong><small>${escapeHTML(item.status)}</small></span><span class="pub-arrow">↗</span></a>`).join('');
}
function setupFilters() {
  const buttons = [...document.querySelectorAll('[data-filter]')];
  if (!buttons.length) return;
  const entries = [...document.querySelectorAll('#projects-list .project-entry')];
  buttons.forEach(button => button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    buttons.forEach(b => b.setAttribute('aria-pressed', String(b === button)));
    entries.forEach(entry => entry.hidden = filter !== 'all' && entry.dataset.status !== filter);
  }));
}
function setupThemePicker() {
  const picker=document.querySelector('#theme-picker');
  const trigger=document.querySelector('#theme-trigger');
  const menu=document.querySelector('#theme-menu');
  const buttons=[...menu.querySelectorAll('[data-theme-option]')];
  function applyTheme(next) {
    if (!themes.includes(next)) next='plum';
    document.documentElement.dataset.theme=next;
    buttons.forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.themeOption===next)));
    document.querySelector('meta[name="theme-color"]').content=getComputedStyle(document.body).backgroundColor;
    try { localStorage.setItem('mn-colour-theme',next); } catch {}
  }
  let previous='plum';
  try { previous=localStorage.getItem('mn-colour-theme') || localStorage.getItem('mayimunah-portfolio-theme') || 'plum'; } catch {}
  applyTheme(previous);
  function close(){menu.hidden=true; trigger.setAttribute('aria-expanded','false');}
  trigger.addEventListener('click',()=>{menu.hidden=!menu.hidden;trigger.setAttribute('aria-expanded',String(!menu.hidden));});
  buttons.forEach(b=>b.addEventListener('click',()=>{applyTheme(b.dataset.themeOption);close();trigger.focus();}));
  document.addEventListener('click',e=>{if(!picker.contains(e.target))close();});
  document.addEventListener('keydown',e=>{if(e.key==='Escape')close();});
}
function setupMobile() {
  const button=document.querySelector('#mobile-toggle');
  const nav=document.querySelector('#mobile-nav');
  function close(){nav.hidden=true;button.setAttribute('aria-expanded','false');button.setAttribute('aria-label','Open menu');}
  button.addEventListener('click',()=>{const open=nav.hidden;nav.hidden=!open;button.setAttribute('aria-expanded',String(open));button.setAttribute('aria-label',open?'Close menu':'Open menu');});
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',close));
  document.addEventListener('keydown',e=>{if(e.key==='Escape')close();});
}
function setupContact() {
  const c=data.contact;
  const linkedin=document.querySelector('#linkedin-link');
  if(!linkedin)return;
  function setExternal(id, url) {const node=document.querySelector(id);const safe=safeURL(url);if(safe){node.href=safe;node.hidden=false;}}
  setExternal('#linkedin-link',c.linkedin);
  setExternal('#github-link',c.github);
  const email=document.querySelector('#email-link');
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(c.email||'')) {email.href='mailto:'+c.email;email.hidden=false;}
  const cv=document.querySelector('#cv-link');
  if (/^cv\/[\w.-]+\.pdf$/i.test(c.cv||'')) {cv.href=c.cv;cv.hidden=false;document.querySelector('#cv-note').hidden=true;}
}
renderContent();
setupFilters();
setupThemePicker();
setupMobile();
setupContact();
document.querySelector('#year').textContent=new Date().getFullYear();
