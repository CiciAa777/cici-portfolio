import './styles.css';
import { experiences, projects } from './data';
import type { Experience, Metric, Project, ProjectCategory } from './types';

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, character => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[character]!));
}
function renderMetrics(metrics: Metric[]): string {
  return metrics.length ? `<div class="metrics">${metrics.map(metric =>
    `<div class="metric"><strong>${escapeHtml(metric.value)}</strong><span>${escapeHtml(metric.label)}</span></div>`
  ).join('')}</div>` : '';
}
function renderBullets(bullets: string[]): string {
  return `<ul>${bullets.map(bullet => `<li>${escapeHtml(bullet)}</li>`).join('')}</ul>`;
}
function renderExperience(experience: Experience): string {
  return `<article class="experience ${experience.featured ? 'featured' : ''}"><div class="experience-body">
    <h3>${escapeHtml(experience.role)}</h3><div class="company">${escapeHtml(experience.organization)}</div>
    <span class="date">${escapeHtml(experience.dates)}</span>
    ${renderMetrics(experience.metrics)}${renderBullets(experience.bullets)}</div></article>`;
}
const experienceList = document.querySelector<HTMLDivElement>('#experience-list')!;
const groups = [
  { title: 'Industry Experience', entries: experiences.filter(e => e.role.includes('Intern')) },
  { title: 'Research', entries: experiences.filter(e => e.role === 'Research Assistant') },
  { title: 'Teaching', entries: experiences.filter(e => !e.role.includes('Intern') && e.role !== 'Research Assistant') }
];
experienceList.innerHTML = groups.map(group => `<section class="experience-group"><h2 class="section-title">${group.title}</h2><div class="timeline">${group.entries.map(renderExperience).join('')}</div></section>`).join('');

const covers: Record<string, string> = {
  'Adventure Planning Agent': 'From a question<br>to an itinerary.',
  'Fairer voter turnout through resource allocation': 'Data. Decisions.<br>Fairer turnout.',
  'Olist KPI Monitoring & Anomaly Detection': 'When business<br>metrics change.'
};
function renderProject(project: Project, index: number): string {
  const tags = project.tags.map(tag => `<span class="tag">${escapeHtml(tag)}</span>`).join('');
  const links = project.links.map(link => `<a class="repo" href="${escapeHtml(link.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(link.label)} ↗</a>`).join('');
  const cover = project.featured ? `<div class="project-cover cover-${index % 3}"><span>${escapeHtml(project.category)}</span><strong>${covers[project.title] ?? escapeHtml(project.title)}</strong></div>` : '';
  const bullets = project.featured ? renderBullets(project.bullets) : `<details><summary>Approach & contributions</summary>${renderBullets(project.bullets)}</details>`;
  return `<article class="project">${cover}<div class="project-body"><div class="project-meta"><span class="date">${escapeHtml(project.dates)}</span>${project.status === 'In progress' ? '<span class="status progress">In progress</span>' : ''}</div><h3>${escapeHtml(project.title)}</h3><p>${escapeHtml(project.description)}</p>${renderMetrics(project.metrics)}${bullets}<div class="tags">${tags}</div><div class="linkrow">${links}</div></div></article>`;
}
const projectList = document.querySelector<HTMLDivElement>('#project-list')!;
const projectCount = document.querySelector<HTMLParagraphElement>('#project-count')!;
const filterBar = document.querySelector<HTMLDivElement>('#project-filters')!;
type Filter = 'All' | ProjectCategory;
const filters: Filter[] = ['All', 'AI & Agents', 'Data & ML', 'Visualization & Decisions'];
let activeFilter: Filter = 'All';
function updateProjects(): void {
  const visibleProjects = projects.filter(project => activeFilter === 'All' || project.category === activeFilter);
  const featured = visibleProjects.filter(project => project.featured);
  const other = visibleProjects.filter(project => !project.featured);
  projectList.innerHTML = (featured.length ? `<div class="project-grid">${featured.map(renderProject).join('')}</div>` : '') +
    (other.length ? `${featured.length ? '<h2 class="collection-label">More projects</h2>' : ''}<div class="project-grid">${other.map(renderProject).join('')}</div>` : '');
  projectCount.textContent = `${visibleProjects.length} project${visibleProjects.length === 1 ? '' : 's'} · ${activeFilter}`;
  filterBar.querySelectorAll<HTMLButtonElement>('button').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.filter === activeFilter)));
}
filters.forEach(filter => {
  const button = document.createElement('button');
  button.type = 'button'; button.textContent = filter; button.dataset.filter = filter;
  button.addEventListener('click', () => { activeFilter = filter; updateProjects(); });
  filterBar.append(button);
});
updateProjects();

// Hash-based pages work on GitHub Pages without a server or route rewrites.
type Page = 'home' | 'about' | 'experience' | 'projects' | 'connect';
const pages: Page[] = ['home', 'about', 'experience', 'projects', 'connect'];
function navigate(moveFocus = false): void {
  const requested = window.location.hash.slice(1);
  const page: Page = pages.includes(requested as Page) ? requested as Page : 'home';
  document.querySelectorAll<HTMLElement>('[data-view]').forEach(view => { view.hidden = view.dataset.view !== page; });
  document.querySelectorAll<HTMLAnchorElement>('[data-page]').forEach(link => {
    if (link.dataset.page === page) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });
  document.title = page === 'home' ? 'Cici Xu — Applied AI & Data Science' : `${page.charAt(0).toUpperCase() + page.slice(1)} — Cici Xu`;
  if (moveFocus) {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.querySelector<HTMLElement>('#content')!.focus({ preventScroll: true });
  }
}
window.addEventListener('hashchange', () => navigate(true));
navigate();
