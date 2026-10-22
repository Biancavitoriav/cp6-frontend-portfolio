const projects = {
	salaf: {
		title: 'salaf-mesas', number: '01', color: 'water-card', role: 'Python / Flask app',
		description: 'Automates a fair, daily seating rotation for 24 students across five classroom tables at Instituto J&F.', screenshots: ['images/projects/salaf-mesas-layout.png'],
		technologies: ['Python', 'Flask'], repository: 'https://github.com/Biancavitoriav/salaf-mesas'
	},
	estoque: {
		title: 'Api-estoque', number: '02', color: 'bloom-card', role: 'REST API',
		description: 'A product inventory API with validation, partial updates and Docker deployment, built with Spring Boot 3 and PostgreSQL.', screenshots: ['images/projects/estoque-inventory.png'],
		technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'Docker'], repository: 'https://github.com/Biancavitoriav/Api-estoque'
	},
	trocatine: {
		title: 'Aplicativo-Trocatine', number: '03', color: 'city-card', role: 'Mobile marketplace',
		description: 'A mobile marketplace for exchanging and selling children’s clothes, shoes, accessories and toys, inspired by UN SDG 11.', screenshots: ['images/projects/trocatine-home.png', 'images/projects/trocatine-anuncio.png', 'images/projects/trocatine-chat.png'],
		technologies: ['Java', 'Mobile', 'Sustainability'], repository: 'https://github.com/Biancavitoriav/Aplicativo-Trocatine'
	},
	laufey: {
		title: 'chat-rag-laufey', number: '04', color: 'water-card', role: 'AI / RAG chatbot',
		description: 'A Flask chatbot that checks user statements against a curated knowledge base with RAG and the Google Gemini API.', screenshots: ['images/projects/rag-laufey.png'],
		technologies: ['Python', 'Flask', 'CSS', 'Gemini API'], repository: 'https://github.com/Biancavitoriav/chat-rag-laufey'
	},
	tikmovies: {
		title: 'TikMovies', number: '05', color: 'bloom-card', role: 'React application',
		description: 'A movie discovery and tracking app powered by the TMDB API. Users can explore films by genre, open a title to see its details and organize what they have watched, want to watch or want to keep as a favorite.', screenshots: ['images/projects/tikmovies-home.png', 'images/projects/tikmovies-explore.png', 'images/projects/tikmovies-details.png'],
		technologies: ['React', 'TypeScript', 'TMDB API'], apiLink: 'https://developer.themoviedb.org/docs/getting-started', repository: 'https://github.com/Biancavitoriav/TikMovies'
	},
	jovi: {
		title: 'JOVI-landing-page', number: '06', color: 'city-card', role: 'React landing page',
		description: 'A responsive landing page for SmartCam, an AI camera concept that communicates its solution, audience and product experience through a focused visual story.', screenshots: ['images/projects/jovi-solution.png', 'images/projects/jovi-about.png', 'images/projects/jovi-audience.png'],
		technologies: ['React', 'JavaScript', 'Vite', 'Tailwind CSS'], repository: 'https://github.com/Gabi-lisboa/Sprint3-Jovi'
	}
}

// Windows 98 catalog: categorized PNG assets with a much broader semantic vocabulary.
const windowsIconBase = 'https://raw.githubusercontent.com/ryokun6/ryos/main/public/resources/windows-icon-catalogs/win98/'
const windowsIcons = {
	'windows:home': 'system-icons/homepage.png',
	'windows:profile': 'applications/address-book-user.png',
	'windows:folder': 'folders/directory-closed.png',
	'windows:tools': 'system-icons/tools-gear.png',
	'windows:briefcase': 'folders/briefcase.png',
	'windows:mail': 'system-icons/envelope-closed.png',
	'windows:document': 'file-types/write-file.png',
	'windows:pin': 'system-icons/tip.png',
	'windows:education': 'file-types/html.png',
	'windows:desktop': 'folders/desktop.png',
	'windows:server': 'folders/server-to-desktop.png',
	'windows:data': 'system-icons/cylinder-database.png',
	'windows:network': 'system-icons/connected-world.png',
	'windows:search': 'system-icons/search-web.png',
	'windows:globe': 'system-icons/globe-map.png',
	'windows:start': 'folders/start-menu-xp.png',
	'windows:cloud': 'system-icons/conn-cloud.png',
	'windows:mouse': 'control-panels/mouse.png',
	'windows:web': 'folders/directory-web.png',
	'windows:api': 'system-icons/program-manager.png'
}

function useWindowsIcons() {
	document.querySelectorAll('iconify-icon').forEach((icon) => {
		const filename = windowsIcons[icon.getAttribute('icon')]
		if (!filename) return
		const image = document.createElement('img')
		image.className = icon.className || ''
		image.src = windowsIconBase + filename
		image.alt = ''
		image.setAttribute('aria-hidden', 'true')
		icon.replaceWith(image)
	})
}

const order = ['home', 'about', 'projects', 'skills', 'experience', 'contact']
let activeSection = 'home'

function projectCard(key) {
	const project = projects[key]
	const visual = project.screenshots
		? `<div class="project-gallery"><img src="${project.screenshots[0]}" alt="Screenshot from ${project.title}" loading="lazy" /></div>`
		: `<div class="project-snapshot ${project.color}"><span class="snapshot-top"><b>${project.number}</b>${project.role}<i>— □ ×</i></span><div class="snapshot-body"><strong>${project.title}</strong><span></span><span></span><span></span><em>double-click to open</em></div></div>`
	return `<article class="project-card" data-project-key="${key}">
    ${visual}<div class="project-info"><div class="project-copy"><p class="eyebrow project-role"><span class="project-number">${project.number}</span>${project.role}</p><h3>${project.title}</h3><p class="project-description">${project.description}</p><div class="tech-list">${project.technologies.map((technology) => `<span>${technology}</span>`).join('')}</div><div class="project-links"><a class="ds-button ds-button-quiet case-link" href="${project.repository}" target="_blank" rel="noreferrer">View project on GitHub <span>↗</span></a>${project.apiLink ? `<a class="ds-button ds-button-quiet case-link api-link" href="${project.apiLink}" target="_blank" rel="noreferrer">TMDB API documentation <span>↗</span></a>` : ''}</div><button class="ds-button ds-button-primary ds-button-block project-open" type="button" data-open-project="${key}">Open in Project Viewer <span>↗</span></button></div></div>
  </article>`
}

function renderProjects() {
	document.querySelectorAll('[data-project]').forEach((slot) => { slot.innerHTML = projectCard(slot.dataset.project) })
}

function projectModalMarkup() {
	return `<div class="project-modal" id="project-modal" hidden><div class="project-modal-backdrop" data-close-project></div><section class="project-viewer" role="dialog" aria-modal="true" aria-labelledby="project-viewer-title"><header class="viewer-titlebar"><strong id="project-viewer-title">Project Viewer</strong><div class="viewer-controls"><button type="button" aria-label="Minimize">—</button><button type="button" aria-label="Maximize">□</button><button type="button" aria-label="Close" data-close-project>×</button></div></header><div class="viewer-menubar"><span><u>F</u>ile</span><span><u>V</u>iew</span><span><u>T</u>ools</span><span><u>H</u>elp</span></div><div class="viewer-toolbar"><button class="ds-button ds-button-secondary ds-button-compact" type="button" data-prev-project>← Previous</button><span class="viewer-path">My Computer &gt; My Projects &gt; <strong id="viewer-path-name"></strong></span><button class="ds-button ds-button-secondary ds-button-compact" type="button" data-next-project>Next →</button></div><div class="viewer-body"><div class="viewer-gallery"><div class="viewer-main-image"><img id="viewer-image" src="" alt="" /></div><div class="viewer-thumbs" id="viewer-thumbs"></div></div><aside class="viewer-details"><p class="eyebrow">PROJECT DETAILS</p><h2 id="viewer-project-title"></h2><p id="viewer-project-role" class="viewer-role"></p><p id="viewer-project-description" class="viewer-description"></p><div class="viewer-properties"><div><span>Type</span><strong id="viewer-type"></strong></div><div><span>Technologies</span><strong id="viewer-tech"></strong></div><div><span>Files</span><strong id="viewer-files"></strong></div></div><div class="viewer-actions"><a class="ds-button ds-button-primary ds-button-block" id="viewer-repository" href="" target="_blank" rel="noreferrer">Open GitHub <span>↗</span></a><a class="ds-button ds-button-secondary ds-button-block" id="viewer-api" href="" target="_blank" rel="noreferrer" hidden>Open API docs <span>↗</span></a></div></aside></div><footer class="viewer-status"><span><i></i> Ready</span><span id="viewer-status-text">1 item selected</span></footer></section></div>`
}

let activeProjectKey = null
let activeImageIndex = 0

function openProjectViewer(key) {
	const project = projects[key]
	const modal = document.getElementById('project-modal')
	if (!project || !modal) return
	activeProjectKey = key
	activeImageIndex = 0
	const images = project.screenshots || []
	document.getElementById('viewer-project-title').textContent = project.title
	document.getElementById('viewer-path-name').textContent = `${project.title}.exe`
	document.getElementById('viewer-project-role').textContent = project.role
	document.getElementById('viewer-project-description').textContent = project.description
	document.getElementById('viewer-type').textContent = project.role
	document.getElementById('viewer-tech').textContent = project.technologies.join(', ')
	document.getElementById('viewer-files').textContent = images.length ? `${images.length} preview${images.length === 1 ? '' : 's'}` : 'No preview image'
	const image = document.getElementById('viewer-image')
	image.hidden = !images.length
	image.src = images[0] || ''
	image.alt = `${project.title} preview`
	document.getElementById('viewer-thumbs').innerHTML = images.map((src, index) => `<button type="button" class="viewer-thumb${index === 0 ? ' active' : ''}" data-image-index="${index}"><img src="${src}" alt="Preview ${index + 1}" /></button>`).join('')
	document.getElementById('viewer-repository').href = project.repository
	const apiLink = document.getElementById('viewer-api')
	apiLink.hidden = !project.apiLink
	if (project.apiLink) apiLink.href = project.apiLink
	modal.hidden = false
	document.body.classList.add('modal-open')
}

function closeProjectViewer() {
	const modal = document.getElementById('project-modal')
	if (!modal) return
	modal.hidden = true
	document.body.classList.remove('modal-open')
	activeProjectKey = null
}

function changeProjectImage(index) {
	const project = projects[activeProjectKey]
	const images = project?.screenshots || []
	if (!images.length) return
	activeImageIndex = (index + images.length) % images.length
	const image = document.getElementById('viewer-image')
	image.src = images[activeImageIndex]
	document.querySelectorAll('.viewer-thumb').forEach((thumb, thumbIndex) => thumb.classList.toggle('active', thumbIndex === activeImageIndex))
}

function changeProject(direction) {
	const keys = Object.keys(projects)
	const nextIndex = (keys.indexOf(activeProjectKey) + direction + keys.length) % keys.length
	openProjectViewer(keys[nextIndex])
}

function showSection(section, { updateHash = true, moveFocus = true } = {}) {
	if (!order.includes(section)) return
	activeSection = section
	document.querySelectorAll('[data-view]').forEach((view) => view.classList.toggle('is-hidden', view.dataset.view !== section))
	document.querySelectorAll('.tab-bar [data-section]').forEach((tab) => {
		const active = tab.dataset.section === section
		tab.classList.toggle('active', active)
		if (active) {
			tab.setAttribute('aria-current', 'page')
			tab.scrollIntoView({ block: 'nearest', inline: 'nearest' })
		} else tab.removeAttribute('aria-current')
	})
	document.getElementById('address-path').textContent = `biancaveloso.dev/${section}`
	document.getElementById('previous-section').disabled = order.indexOf(section) === 0
	document.getElementById('next-section').disabled = order.indexOf(section) === order.length - 1
	if (updateHash && window.location.hash !== `#${section}`) history.pushState({ section }, '', `#${section}`)
	if (moveFocus) {
		const pageContent = document.querySelector('.page-content')
		pageContent.focus({ preventScroll: true })
		window.scrollTo({ top: 0, behavior: 'auto' })
	}
}

function filterProjects(query) {
	const normalized = query.trim().toLowerCase()
	const cards = [...document.querySelectorAll('.projects-full .project-card')]
	const status = document.getElementById('search-status')
	let visibleCount = 0
	cards.forEach((card) => {
		const project = projects[card.dataset.projectKey]
		const searchable = `${project.title} ${project.role} ${project.description} ${project.technologies.join(' ')}`.toLowerCase()
		const visible = !normalized || searchable.includes(normalized)
		card.hidden = !visible
		if (visible) visibleCount += 1
	})
	if (status) {
		if (!normalized) status.textContent = ''
		else if (visibleCount === 0) status.textContent = `No projects matched “${query.trim()}”. Try a technology such as Java, Python or React.`
		else status.textContent = `${visibleCount} project${visibleCount === 1 ? '' : 's'} found for “${query.trim()}”.`
	}
}

function searchProjects(query) {
	const normalized = query.trim().toLowerCase()
	if (!normalized) {
		filterProjects('')
		showSection('projects')
		return
	}
	showSection('projects')
	filterProjects(query)
}

function restoreSectionFromHash() {
	const requestedSection = window.location.hash.replace('#', '')
	showSection(order.includes(requestedSection) ? requestedSection : 'home', { updateHash: !order.includes(requestedSection), moveFocus: false })
}

document.addEventListener('DOMContentLoaded', () => {
	useWindowsIcons()
	renderProjects()
	document.body.insertAdjacentHTML('beforeend', projectModalMarkup())
	restoreSectionFromHash()
	document.querySelectorAll('[data-section], [data-section-link]').forEach((element) => {
		element.addEventListener('click', (event) => { event.preventDefault(); showSection(element.dataset.section || element.dataset.sectionLink) })
	})
	document.getElementById('previous-section').addEventListener('click', () => showSection(order[order.indexOf(activeSection) - 1]))
	document.getElementById('next-section').addEventListener('click', () => showSection(order[order.indexOf(activeSection) + 1]))
	window.addEventListener('popstate', restoreSectionFromHash)
	document.getElementById('project-search-form').addEventListener('submit', (event) => {
		event.preventDefault()
		searchProjects(document.getElementById('project-search').value)
	})
	document.addEventListener('click', (event) => {
		const openButton = event.target.closest('[data-open-project]')
		if (openButton) openProjectViewer(openButton.dataset.openProject)
		if (event.target.closest('[data-close-project]')) closeProjectViewer()
		const thumb = event.target.closest('[data-image-index]')
		if (thumb) changeProjectImage(Number(thumb.dataset.imageIndex))
		if (event.target.closest('[data-prev-project]')) changeProject(-1)
		if (event.target.closest('[data-next-project]')) changeProject(1)
	})
	document.addEventListener('keydown', (event) => {
		if (event.key === 'Escape') closeProjectViewer()
		if (event.key === 'ArrowLeft' && activeProjectKey) changeProjectImage(activeImageIndex - 1)
		if (event.key === 'ArrowRight' && activeProjectKey) changeProjectImage(activeImageIndex + 1)
	})
	document.getElementById('contact-form').addEventListener('submit', (event) => {
		event.preventDefault()
		const formData = new FormData(event.currentTarget)
		const recipient = 'hello@example.com'
		const subject = formData.get('subject') || 'Portfolio inquiry'
		const name = formData.get('name') || 'there'
		const body = `Hi Bianca,\n\nMy name is ${name}.\nEmail: ${formData.get('email')}\n\n${formData.get('message')}`
		const mailto = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
		document.getElementById('contact-form-view').innerHTML = `<div class="contact-success" role="status" aria-live="polite"><div class="success-orb">✓</div><p class="eyebrow">DRAFT READY</p><h2>Your message is ready to review.</h2><p>Your email app will open with the message filled in. Take a quick look, then send it when you’re ready.</p><a class="ds-button ds-button-primary" id="open-mail-client" href="${mailto}">Open email app <span>↗</span></a><button class="ds-button ds-button-secondary" id="send-another">Write another message</button></div>`
		document.getElementById('send-another').addEventListener('click', () => window.location.reload())
	})
})
