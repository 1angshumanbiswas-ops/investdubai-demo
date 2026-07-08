'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'

type Message = { role: 'user' | 'assistant'; content: string }
type LeadData = { name: string; whatsapp: string; country: string; budget: string; email?: string }

const LANGUAGES = ['English', 'हिंदी', 'മലയാളം', 'عربي', '中文', 'Deutsch', 'Français']
const WA = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '971505818509'

const OPENING_MESSAGE: Message = {
  role: 'assistant',
  content: "Hello! I'm Shylesh AI — your personal Dubai property investment assistant. I help investors from around the world find the right property in Dubai. Which country are you investing from? 🌍",
}

export default function AIAdvisor() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([OPENING_MESSAGE])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [showLeadForm, setShowLeadForm] = useState(false)
  const [leadSubmitted, setLeadSubmitted] = useState(false)
  const [lead, setLead] = useState<Partial<LeadData>>({})
  const [language, setLanguage] = useState('English')
  const [pulse, setPulse] = useState(false)
  const [proactiveMsg, setProactiveMsg] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  // Proactive trigger — pulse + tooltip after 12 seconds
  useEffect(() => {
    const t1 = setTimeout(() => setPulse(true), 12000)
    const t2 = setTimeout(() => setProactiveMsg(true), 12000)
    const t3 = setTimeout(() => { setPulse(false); setProactiveMsg(false) }, 22000)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading, showLeadForm])

  const sendMessage = async () => {
    if (!input.trim() || loading) return
    const userMsg: Message = { role: 'user', content: input.trim() }
    const newMessages = [...messages, userMsg]
    setMessages(newMessages)
    setInput('')
    setLoading(true)

    try {
      const res = await fetch('/api/advisor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages }),
      })
      const data = await res.json()
      if (data.message) {
        setMessages(prev => [...prev, { role: 'assistant', content: data.message }])
        // Show lead form after 5 messages or when consultation is mentioned
        if (newMessages.length >= 5 || data.message.toLowerCase().includes('consultation')) {
          setTimeout(() => setShowLeadForm(true), 800)
        }
      }
    } catch {
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: "I'm having trouble connecting right now. Please WhatsApp Shylesh directly for immediate assistance.",
      }])
    } finally {
      setLoading(false)
    }
  }

  const submitLead = async () => {
    if (!lead.name || !lead.whatsapp) return
    const summary = messages.filter(m => m.role === 'user').map(m => m.content).join(' | ')
    try {
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...lead, source: 'AI Advisor', conversationSummary: summary }),
      })
    } catch { /* silent */ }
    setLeadSubmitted(true)
  }

  // Render message content — detect luxury page link and make clickable
  const renderMessage = (content: string) => {
    if (content.includes('/luxury-properties')) {
      const parts = content.split(/(\[.*?\]\(\/luxury-properties[^)]*\))/g)
      return parts.map((part, i) => {
        const match = part.match(/\[(.*?)\]\((\/luxury-properties[^)]*)\)/)
        if (match) {
          return (
            <Link key={i} href={match[2]}
              className="inline-block mt-2 bg-gold text-navy px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-gold/90 transition">
              💎 {match[1]}
            </Link>
          )
        }
        return <span key={i}>{part}</span>
      })
    }
    return content
  }

  return (
    <>
      {/* Proactive tooltip */}
      {proactiveMsg && !open && (
        <div className="fixed bottom-28 right-6 z-50 bg-navy text-white text-xs px-3 py-2 rounded-xl shadow-lg max-w-[200px] text-center animate-bounce">
          👋 Looking to invest in Dubai? Ask me anything!
          <div className="absolute bottom-[-6px] right-6 w-3 h-3 bg-navy rotate-45" />
        </div>
      )}

      {/* Floating bubble */}
      <button
        onClick={() => { setOpen(o => !o); setPulse(false); setProactiveMsg(false) }}
        className={`fixed bottom-6 right-6 z-50 bg-gold text-navy rounded-full shadow-2xl flex items-center gap-2 px-4 h-14 hover:scale-105 transition-transform ${pulse ? 'ring-4 ring-gold/40 animate-pulse' : ''}`}
        aria-label="Open AI Property Advisor"
      >
        <span className="text-xl">{open ? '✕' : '🏠'}</span>
        {!open && <span className="font-bold text-sm whitespace-nowrap">AI Advisor</span>}
      </button>

      {/* Panel */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-[380px] max-w-[95vw] h-[600px] max-h-[85vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-100">

          {/* Header */}
          <div className="bg-navy text-white px-4 py-3 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center font-bold text-navy text-lg">S</div>
              <div>
                <p className="font-semibold text-sm">Shylesh AI</p>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-green-400 inline-block" />
                  <p className="text-xs text-green-400">Online · Dubai Property Advisor</p>
                </div>
              </div>
            </div>
            <select
              value={language}
              onChange={e => setLanguage(e.target.value)}
              className="text-xs bg-white/10 border border-white/20 text-white rounded px-2 py-1"
            >
              {LANGUAGES.map(l => <option key={l} value={l}>{l}</option>)}
            </select>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                {m.role === 'assistant' && (
                  <div className="w-7 h-7 rounded-full bg-gold flex items-center justify-center text-navy text-xs font-bold shrink-0 mr-2 mt-1">S</div>
                )}
                <div className={`max-w-[82%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                  m.role === 'user'
                    ? 'bg-navy text-white rounded-br-sm'
                    : 'bg-white text-gray-800 rounded-bl-sm shadow-sm'
                }`}>
                  {renderMessage(m.content)}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="w-7 h-7 rounded-full bg-gold flex items-center justify-center text-navy text-xs font-bold shrink-0 mr-2 mt-1">S</div>
                <div className="bg-white rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm">
                  <span className="flex gap-1">
                    {[0,1,2].map(i => (
                      <span key={i} className="w-2 h-2 bg-gold rounded-full animate-bounce" style={{ animationDelay: `${i * 0.15}s` }} />
                    ))}
                  </span>
                </div>
              </div>
            )}

            {/* Lead capture form */}
            {showLeadForm && !leadSubmitted && (
              <div className="bg-gold/10 border border-gold/30 rounded-xl p-4 space-y-2.5 mt-2">
                <p className="text-sm font-semibold text-navy">📋 Book your free consultation with Shylesh</p>
                <input
                  type="text" placeholder="Your name *"
                  value={lead.name ?? ''}
                  onChange={e => setLead(p => ({ ...p, name: e.target.value }))}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-gold bg-white"
                />
                <input
                  type="tel" placeholder="WhatsApp number (with country code) *"
                  value={lead.whatsapp ?? ''}
                  onChange={e => setLead(p => ({ ...p, whatsapp: e.target.value }))}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-gold bg-white"
                />
                <input
                  type="email" placeholder="Email (optional)"
                  value={lead.email ?? ''}
                  onChange={e => setLead(p => ({ ...p, email: e.target.value }))}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-gold bg-white"
                />
                <button
                  onClick={submitLead}
                  disabled={!lead.name || !lead.whatsapp}
                  className="w-full bg-gold text-navy rounded-lg py-2.5 text-sm font-bold hover:bg-gold/90 transition disabled:opacity-50"
                >
                  Book Free Consultation →
                </button>
                <p className="text-xs text-gray-400 text-center">No spam · Shylesh responds personally</p>
              </div>
            )}

            {leadSubmitted && (
              <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center">
                <p className="text-green-700 font-semibold text-sm mb-2">✅ Thank you! Shylesh will reach out within 24 hours.</p>
                <a
                  href={`https://wa.me/${WA}?text=${encodeURIComponent('Hi Shylesh, I just spoke with your AI Advisor and would like to discuss Dubai property investment.')}`}
                  target="_blank" rel="noopener noreferrer"
                  className="inline-block bg-[#25D366] text-white px-4 py-2 rounded-lg text-xs font-semibold hover:bg-green-600 transition"
                >
                  💬 Continue on WhatsApp
                </a>
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          {/* Input */}
          {!leadSubmitted && (
            <div className="border-t border-gray-100 p-3 flex gap-2 shrink-0 bg-white">
              <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && sendMessage()}
                placeholder="Ask about Dubai property..."
                className="flex-1 border border-gray-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-gold"
              />
              <button
                onClick={sendMessage}
                disabled={loading || !input.trim()}
                className="bg-gold text-navy rounded-full w-10 h-10 flex items-center justify-center hover:bg-gold/90 transition disabled:opacity-50 shrink-0 font-bold text-lg"
              >
                ↑
              </button>
            </div>
          )}
        </div>
      )}
    </>
  )
}
