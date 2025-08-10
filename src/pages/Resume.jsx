import React from 'react'
import {Card, Badge, Button} from '../components/ui.jsx'
import resume from '../data/resume.js'

export default function Resume() {
    const overviewText = resume.overview || resume.summary

    return (
        <div className="grid" style={{gap: 24}}>

            {/* Header */}
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
                gap: 16
            }}>
                <div>
                    <h1 className="h1">{resume.name}</h1>
                    <div className="muted">{resume.title}</div>
                    <div className="muted" style={{display: 'flex', gap: 12, marginTop: 8, flexWrap: 'wrap'}}>
                        <span>📍 {resume.location}</span>
                        <a href={`tel:${resume.phone}`}>📞 {resume.phone}</a>
                        <a href={`mailto:${resume.email}`}>✉️ {resume.email}</a>
                        <a href={resume.linkedin} target="_blank" rel="noreferrer">🔗 LinkedIn</a>
                    </div>
                </div>
                <Button className="primary"
                    onClick={() => {
                        window.open(
                            'https://drive.google.com/uc?export=download&id=1Zz2i2olsVK11fF1HN37v-NrYzXCUoy5M',
                            '_blank'
                        );
                    }}
                >⬇️ Download PDF</Button>
            </div>

            {/* Overview */}
            {overviewText && (
                <section style={{padding: '8px 0'}}>
                    <div
                        style={{
                            fontSize: '1.4rem',
                            fontWeight: 700,
                            background: 'linear-gradient(90deg, #00e0ff, #9b5cff)',
                            WebkitBackgroundClip: 'text',
                            color: 'transparent',
                            marginBottom: '12px'
                        }}
                    >
                        Overview
                    </div>
                    <p style={{fontSize: '1.05rem', lineHeight: 1.6, margin: 0, color: '#e2e8f0'}}>
                        {overviewText}
                    </p>
                </section>
            )}

            {/* Skills */}
            {Array.isArray(resume.skills) && resume.skills.length > 0 && (
                <section style={{padding: '8px 0'}}>
                    <div
                        style={{
                            fontSize: '1.4rem',
                            fontWeight: 700,
                            background: 'linear-gradient(90deg, #00e0ff, #9b5cff)',
                            WebkitBackgroundClip: 'text',
                            color: 'transparent',
                            marginBottom: '12px'
                        }}
                    >
                        Skills
                    </div>
                    <div style={{display: 'flex', flexWrap: 'wrap', gap: 8}}>
                        {resume.skills.map((s) => (
                            <Badge key={s}>{s}</Badge>
                        ))}
                    </div>
                </section>
            )}

            {/* Experience */}
            <section>
                <div className="h2" style={{marginBottom: 8}}>Professional Experience</div>
                <div className="grid" style={{gap: 16}}>
                    {resume.experience.map((exp, idx) => (
                        <Card key={idx}>
                            <div>
                                <div className="h2" style={{fontSize: 16}}>
                                    <strong>{exp.role}</strong> · {exp.company} — {exp.location}</div>
                                <div className="muted" style={{fontSize: 12}}>{exp.period}</div>
                            </div>
                            <ul className="list" style={{marginTop: 8}}>
                                {(exp.bullets || exp.details || []).map((b, i) => (<li key={i}>{b}</li>))}
                            </ul>
                            {exp.stack?.length ? (
                                <div style={{display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 10}}>
                                    {exp.stack.map(s => <Badge key={s}>{s}</Badge>)}
                                </div>
                            ) : null}
                        </Card>
                    ))}
                </div>
            </section>

            {/* Education */}
            {Array.isArray(resume.education) && resume.education.length > 0 && (
                <section>
                    <div className="h2" style={{marginBottom: 8}}>Education</div>
                    <ul className="list">
                        {resume.education.map((e, i) => (<li key={i}>{e.place} — {e.degree}</li>))}
                    </ul>
                </section>
            )}

            {/* Languages */}
            {Array.isArray(resume.languages) && resume.languages.length > 0 && (
                <section>
                    <div className="h2" style={{marginBottom: 8}}>Languages</div>
                    <div style={{display: 'flex', flexWrap: 'wrap', gap: 8}}>
                        {resume.languages.map(l => <Badge key={l}>{l}</Badge>)}
                    </div>
                </section>
            )}

        </div>
    )
}
