// src/pages/Blog.jsx
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, CardHeader, CardTitle } from '../components/ui.jsx'
import posts from '../data/posts/index.js'

export default function Blog(){
    const navigate = useNavigate()
    return (
        <div>
            <div style={{display:'flex', justifyContent:'space-between', marginBottom:12}}>
                <h1 className="h1">Blog</h1>
            </div>
            {posts.length===0 ? (
                <Card><div className="muted">No posts yet.</div></Card>
            ) : (
                <div className="grid grid-auto">
                    {posts.map(p=>(
                        <Card key={p.slug} style={{cursor:'pointer'}} onClick={()=>navigate(`/blog/${p.slug}`)}>
                            <CardHeader><CardTitle>{p.title}</CardTitle></CardHeader>
                            <div className="post-meta">{new Date(p.date).toLocaleDateString()} · {(p.tags||[]).map(t=>`#${t}`).join(' ')}</div>
                            <p className="muted" style={{marginTop:8}}>{p.excerpt}</p>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    )
}
