/*
import './Header.css'

const template = () => {
  return `
  <header>
    <h1>Raúl Moya</h1>
    <nav>
      <ul>
        <li>
          <a href="#aboutme">About me</a>
        </li>
        <li>
          <a href="#education">Education</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li class="contact">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  </header>
  `
}

const Header = () => {
  return template()
}

export default Header */

//!
/*
import './Header.css'

const template = () => {
  return `
  <header>
    <h1>Raúl Moya</h1>
    <nav>
      <button id="menu-button">☰</button>
      <ul id="menu">
        <li>
          <a href="#aboutme">About me</a>
        </li>
        <li>
          <a href="#education">Education</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li class="contact">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  </header>
  `
}

const Header = () => {
  const header = template()
  document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('menu-button').addEventListener('click', () => {
      document.getElementById('menu').classList.toggle('show')
    })
  })
  return header
}

export default Header */
//!
import './Header.css'

const template = () => {
  return `
  <header>
    <h1>Raúl Moya</h1>
    <nav>
      <button id="menu-button">☰</button>
      <ul id="menu">
        <li>
          <a href="#aboutme">About me</a>
        </li>
        <li>
          <a href="#education">Education</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li class="contact">
          <a href="#contact-section">Contact</a>
        </li>
      </ul>
    </nav>
  </header>
  `
}

const Header = () => {
  const header = template()
  document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('menu-button').addEventListener('click', () => {
      document.getElementById('menu').classList.toggle('show')
    })

    const contactLink = document.querySelector('.contact a')
    contactLink.addEventListener('click', (event) => {
      event.preventDefault()
      const contactSection = document.getElementById('contact-section')
      if (contactSection) {
        contactSection.classList.toggle('visible')
        contactSection.scrollIntoView({ behavior: 'smooth' })
      }
    })
  })
  return header
}

export default Header
