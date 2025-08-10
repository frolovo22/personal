// src/pages/Post.jsx
import React from 'react'
import { useParams, Link } from 'react-router-dom'
import posts from '../data/posts/index.js'
import { mdToHtml, formatDate } from '../utils/blog.jsx'

export default function Post(){
    const { slug } = useParams()
    const post = posts.find(p => p.slug === slug)
    if(!post){
        return (
            <div className="glass card">
                <h1 className="h1">Post not found</h1>
                <p className="muted">It may have been moved or deleted.</p>
                <p><Link className="navlink" to="/blog">← Back to blog</Link></p>
            </div>
        )
    }
    return (
        <article className="glass card">
            <h1 className="h1" style={{marginBottom:8}}>{post.title}</h1>
            <div className="post-meta">{formatDate(post.date)} · {(post.tags||[]).map(t=>`#${t}`).join(' ')}</div>
            <div style={{marginTop:16}} dangerouslySetInnerHTML={{__html: mdToHtml(post.content)}} />
            <p style={{marginTop:24}}><Link className="navlink" to="/blog">← Back to blog</Link></p>
        </article>
    )
}
