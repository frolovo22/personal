import React from 'react'
import {Card, Badge, Button} from '../components/ui.jsx'
import resume from '../data/resume.js'

export default function Resume() {
    const overviewText = resume.overview || resume.summary

    const SectionHeader = ({children}) => (<div
        style={{
            fontSize: '1.3rem',
            fontWeight: 700,
            background: 'linear-gradient(90deg, #66d9ff, #e6f7ff)',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            marginBottom: '12px',
            letterSpacing: '0.3px'
        }}
    >
        {children}
    </div>);

    return (<div className="grid" style={{gap: 24}}>

        {/* Header */}
        <div style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 16
        }}>
            <div>
                <h1 className="h1">{resume.name}</h1>
                <div className="muted">{resume.title}</div>
                <div className="muted" style={{display: 'flex', flexWrap: 'wrap', gap: 16, marginTop: 8}}>
                    {/* Location → Google Maps */}
                    <a className="contact"
                       href={`https://maps.google.com/?q=${encodeURIComponent(resume.location || '')}`}
                       target="_blank"
                       rel="noreferrer">
                        <svg viewBox="0 0 24 24" fill="none" stroke="#66D9FF" strokeWidth={1.9} strokeLinecap="round"
                             strokeLinejoin="round">
                            <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/>
                            <circle cx="12" cy="10" r="3"/>
                        </svg>
                        <span>{resume.location}</span>
                    </a>

                    {/* Phone */}
                    <a className="contact" href={`tel:${resume.phone}`}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="#2ECC71" strokeWidth={1.9} strokeLinecap="round"
                             strokeLinejoin="round">
                            <path
                                d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.13.83.38 1.64.73 2.41a2 2 0 0 1-.45 2.18L8.09 9.91a16 16 0 0 0 6 6l1.6-1.6a2 2 0 0 1 2.18-.45c.77.35 1.58.6 2.41.73A2 2 0 0 1 22 16.92z"/>
                        </svg>
                        <span>{resume.phone}</span>
                    </a>

                    {/* Email */}
                    <a className="contact" href={`mailto:${resume.email}`}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="#FFA500" strokeWidth={1.9} strokeLinecap="round"
                             strokeLinejoin="round">
                            <rect x="2" y="4" width="20" height="16" rx="2" ry="2"/>
                            <polyline points="22,6 12,13 2,6"/>
                        </svg>
                        <span>{resume.email}</span>
                    </a>

                    {/* LinkedIn */}
                    <a className="contact" href={resume.linkedin} target="_blank" rel="noreferrer">
                        <svg viewBox="0 0 24 24" fill="#0A66C2" aria-hidden="true">
                            <path
                                d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5zM3.5 9h3v12h-3V9zm7 0h2.878v1.64h.041c.401-.76 1.381-1.64 2.844-1.64C19.5 9 21 10.54 21 13.66V21h-3v-6.2c0-1.48-.53-2.5-1.86-2.5-1.016 0-1.62.69-1.887 1.36-.097.24-.12.57-.12.9V21h-3V9z"/>
                        </svg>
                        <span>LinkedIn</span>
                    </a>

                    {/* GitHub из resume.github */}
                    <a className="contact" href={resume.github} target="_blank" rel="noreferrer">
                        <svg viewBox="0 0 24 24" fill="#ffffff" aria-hidden="true">
                            <path
                                d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.37 7.86 10.88.58.1.79-.25.79-.56v-2.1c-3.2.7-3.87-1.54-3.87-1.54-.53-1.34-1.29-1.7-1.29-1.7-1.06-.72.08-.7.08-.7 1.17.08 1.79 1.2 1.79 1.2 1.04 1.79 2.73 1.27 3.4.97.1-.76.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.45.11-3.02 0 0 .97-.31 3.18 1.18a11.02 11.02 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.57.23 2.73.11 3.02.74.81 1.19 1.84 1.19 3.1 0 4.43-2.68 5.4-5.23 5.69.42.36.79 1.06.79 2.14v3.17c0 .31.21.67.8.56A10.51 10.51 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5z"/>
                        </svg>
                        <span>GitHub</span>
                    </a>
                </div>
            </div>
            <Button className="primary"
                    onClick={() => {
                        window.open('https://drive.google.com/uc?export=download&id=1Zz2i2olsVK11fF1HN37v-NrYzXCUoy5M', '_blank');
                    }}

                    style={{
                        background: 'linear-gradient(90deg, #66d9ff, #a29bfe)',
                        color: '#0a0b0f',
                        fontWeight: 600,
                        padding: '10px 20px',
                        borderRadius: '12px',
                        border: 'none',
                        boxShadow: '0 4px 12px rgba(102, 217, 255, 0.4)',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease'
                    }}

                    onMouseEnter={e => {
                        e.target.style.boxShadow = '0 6px 16px rgba(102, 217, 255, 0.6)';
                        e.target.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={e => {
                        e.target.style.boxShadow = '0 4px 12px rgba(102, 217, 255, 0.4)';
                        e.target.style.transform = 'translateY(0)';
                    }}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Download PDF</Button>
        </div>

        {/* Overview */}
        {overviewText && (<section style={{padding: '8px 0'}}>
            <SectionHeader>Overview</SectionHeader>
            <p style={{fontSize: '1.05rem', lineHeight: 1.6, margin: 0, color: '#e2e8f0'}}>
                {overviewText}
            </p>
        </section>)}

        {/* Skills */}
        {Array.isArray(resume.skills) && resume.skills.length > 0 && (<section style={{padding: '8px 0'}}>
            <SectionHeader>Skills</SectionHeader>
            <div style={{display: 'flex', flexWrap: 'wrap', gap: 8}}>
                {resume.skills.map((s) => (<Badge key={s}>{s}</Badge>))}
            </div>
        </section>)}

        {/* Experience */}
        <section>
            <SectionHeader>Professional Experience</SectionHeader>
            <div className="grid" style={{gap: 16}}>
                {resume.experience.map((exp, idx) => (<Card key={idx}>
                    <div>
                        <div className="h2" style={{fontSize: 16}}>
                            <strong>{exp.role}</strong> · {exp.company} — {exp.location}</div>
                        <div className="muted" style={{fontSize: 12}}>{exp.period}</div>
                    </div>
                    <ul className="list" style={{marginTop: 8}}>
                        {(exp.bullets || exp.details || []).map((b, i) => (<li key={i}>{b}</li>))}
                    </ul>
                    {exp.stack?.length ? (<div style={{display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 10}}>
                        {exp.stack.map(s => <Badge key={s}>{s}</Badge>)}
                    </div>) : null}
                </Card>))}
            </div>
        </section>

        {/* Education */}
        {Array.isArray(resume.education) && resume.education.length > 0 && (<section>
            <SectionHeader>Education</SectionHeader>
            <ul className="list">
                {resume.education.map((e, i) => (<li key={i}>{e.place} — {e.degree}</li>))}
            </ul>
        </section>)}

        {/* Languages */}
        {Array.isArray(resume.languages) && resume.languages.length > 0 && (<section>
            <SectionHeader>Languages</SectionHeader>
            <div style={{display: 'flex', flexWrap: 'wrap', gap: 8}}>
                {resume.languages.map(l => <Badge key={l}>{l}</Badge>)}
            </div>
        </section>)}
    </div>)
}
