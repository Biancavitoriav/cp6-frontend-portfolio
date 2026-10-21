const projects = {
  hours: {
    title: 'Hours Control', number: '01', color: 'water-card', role: 'Front-End Developer',
    description: 'A platform that tracks how team time is distributed across projects, helping identify bottlenecks and support better decisions around hiring, automation, and process optimization.',
    technologies: ['Angular', 'TypeScript', 'Data Analytics']
  },
  germinares: {
    title: 'Germinares Management', number: '02', color: 'bloom-card', role: 'Full-Stack Development',
    description: 'A platform for student performance evaluation with self-evaluations, manager feedback, and report generation, reducing manual HR work while improving organization and scalability.',
    technologies: ['React', 'Java', 'PostgreSQL']
  },
  trocatine: {
    title: 'TrocaTine', number: '03', color: 'city-card', role: 'Mobile Developer',
    description: 'A mobile marketplace for exchanging and selling children’s clothes, shoes, accessories, and toys, encouraging sustainability and more conscious consumption.',
    technologies: ['Mobile', 'TypeScript', 'Node.js']
  }
}

const windowsIconBase = 'https://raw.githubusercontent.com/trapd00r/win95-winxp_icons/refs/heads/master/icons/'
const windowsIcons = {
  'fluent-emoji:house': 'w98_directory_open.ico',
  'fluent-emoji:bust-in-silhouette': 'w98_directory_shared.ico',
  'fluent-emoji:file-folder': 'w98_directory_open.ico',
  'fluent-emoji:high-voltage': 'w98_tools_gear.ico',
  'fluent-emoji:briefcase': 'w98_file_program_group.ico',
  'fluent-emoji:envelope': 'w98_write_file.ico',
  'fluent-emoji:round-pushpin': 'w98_tip.ico',
  'fluent-emoji:graduation-cap': 'w98_html.ico',
  'fluent-emoji:desktop-computer': 'w2k-computer.ico',
  'fluent-emoji:chart-increasing': 'w98_search_web.ico',
  'fluent-emoji:globe-with-meridians': 'w98_world.ico',
  'fluent-emoji:window': 'w98_windows.ico',
  'fluent-emoji:cloud': 'w98_world_star.ico',
  'fluent-emoji:antenna-bars': 'w98_url1.ico',
  'fluent-emoji:computer-mouse': 'w98_search_file_2.ico'
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
  return `<article class="project-card">
    <button class="project-preview" type="button" data-open-project="${key}" aria-label="Open details for ${project.title}">
      <div class="project-thumb ${project.color}"><span>${project.number}</span><div class="project-window"><i></i><i></i><i></i></div></div>
    </button>
    <div class="project-info"><div class="project-copy"><p class="eyebrow">${project.role}</p><h3>${project.title}</h3><p class="project-description">${project.description}</p><div class="tech-list">${project.technologies.map((technology) => `<span>${technology}</span>`).join('')}</div><a class="case-link" href="#" data-open-project="${key}">Repository / case study <span>↗</span></a></div><button class="open-project" type="button" data-open-project="${key}">Open project <span>→</span></button></div>
  </article>`
}

function renderProjects() {
  document.querySelectorAll('[data-project]').forEach((slot) => { slot.innerHTML = projectCard(slot.dataset.project) })
  document.querySelectorAll('[data-open-project]').forEach((element) => {
    element.addEventListener('click', (event) => { event.preventDefault(); openProject(element.dataset.openProject) })
  })
}

function showSection(section) {
  if (!order.includes(section)) return
  activeSection = section
  document.querySelectorAll('[data-view]').forEach((view) => view.classList.toggle('is-hidden', view.dataset.view !== section))
  document.querySelectorAll('.tab-bar [data-section]').forEach((tab) => {
    const active = tab.dataset.section === section
    tab.classList.toggle('active', active)
    if (active) tab.setAttribute('aria-current', 'page'); else tab.removeAttribute('aria-current')
  })
  document.getElementById('address-path').textContent = `biancaveloso.dev/${section}`
  document.getElementById('previous-section').disabled = order.indexOf(section) === 0
  document.getElementById('next-section').disabled = order.indexOf(section) === order.length - 1
}

function openProject(key) {
  const project = projects[key]
  document.getElementById('modal-titlebar-name').textContent = project.title
  document.getElementById('project-modal-title').textContent = project.title
  document.getElementById('modal-role').textContent = project.role
  document.getElementById('modal-number').textContent = project.number
  document.getElementById('modal-description').textContent = project.description
  document.getElementById('modal-art').className = `modal-art ${project.color}`
  document.getElementById('modal-technologies').innerHTML = project.technologies.map((technology) => `<span>${technology}</span>`).join('')
  document.getElementById('project-modal').hidden = false
}

function closeProject() { document.getElementById('project-modal').hidden = true }

document.addEventListener('DOMContentLoaded', () => {
  useWindowsIcons()
  renderProjects()
  document.querySelectorAll('[data-section], [data-section-link]').forEach((element) => {
    element.addEventListener('click', (event) => { event.preventDefault(); showSection(element.dataset.section || element.dataset.sectionLink) })
  })
  document.getElementById('previous-section').addEventListener('click', () => showSection(order[order.indexOf(activeSection) - 1]))
  document.getElementById('next-section').addEventListener('click', () => showSection(order[order.indexOf(activeSection) + 1]))
  document.getElementById('modal-close').addEventListener('click', closeProject)
  document.getElementById('modal-close-bottom').addEventListener('click', closeProject)
  document.getElementById('project-modal').addEventListener('click', (event) => { if (event.target.id === 'project-modal') closeProject() })
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeProject() })
  document.getElementById('contact-form').addEventListener('submit', (event) => {
    event.preventDefault()
    document.getElementById('contact-form-view').innerHTML = `<div class="contact-success" role="status" aria-live="polite"><div class="success-orb">✓</div><p class="eyebrow">MESSAGE SENT</p><h2>Thank you for reaching out.</h2><p>Your message is on its way. Bianca will get back to you as soon as possible.</p><button class="aero-button" id="send-another">Send another message</button></div>`
    document.getElementById('send-another').addEventListener('click', () => window.location.reload())
  })
})
