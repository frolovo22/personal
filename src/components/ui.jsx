import React from 'react'

export const Button = ({children, className, ...props}) => (
    <button className={['btn', className].filter(Boolean).join(' ')} {...props}>{children}</button>
)
export const Badge = ({children}) => <span className="pill">{children}</span>
export const Card = ({children, className}) => <div className={['glass glow card', className].filter(Boolean).join(' ')}>{children}</div>
export const CardHeader = ({children}) => <div style={{marginBottom:8}}>{children}</div>
export const CardTitle = ({children, className}) => <div className={['h2', className].filter(Boolean).join(' ')}>{children}</div>
export const Input = (p) => <input className="input" {...p}/>
export const Textarea = (p) => <textarea className="textarea" {...p}/>