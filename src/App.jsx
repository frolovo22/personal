import React from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import GlobalStyles from './styles/GlobalStyles.jsx'
import Resume from './pages/Resume.jsx'
import resume from './data/resume.js'

const cx = (...xs) => xs.filter(Boolean).join(' ')

function NavBar() {
    return (
        <header className="nav">
            <div className="container row" style={{justifyContent:'space-between', padding:'12px 16px'}}>
                <NavLink to="/" className="brand">{resume.name}</NavLink>
            </div>
        </header>
    )
}

function Layout({ children }) {
    return (
        <div>
            <NavBar/>
            <main className="container" style={{padding:'28px 16px'}}>{children}</main>
            <footer className="footer">
                <div className="container row" style={{justifyContent:'space-between'}}>
                    <span>© {new Date().getFullYear()} {resume.name}</span>
                    <div className="row" style={{gap:12}}>
                        <a className="row" href={`mailto:${resume.email}`}>✉️ {resume.email}</a>
                        <a className="row" href={resume.linkedin} target="_blank" rel="noreferrer">🔗 LinkedIn</a>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default function App() {
    return (
        <>
            <GlobalStyles />
            <Layout>
                <Routes>
                    <Route path="/" element={<Resume />} />
                    <Route path="/resume" element={<Resume />} />
                </Routes>
            </Layout>
        </>
    )
}