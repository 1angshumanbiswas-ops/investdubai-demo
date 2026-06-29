'use client'

import { useState, useRef, useEffect } from 'react'
import type { Message, LeadData } from '@/lib/types'

const LANGUAGES = ['English', 'हिंदी', 'മലയാളം', 'عربي', '中文', 'Deutsch', 'Français']

const OPENING_MESSAGE: Message = {
  role: 'assistant',
  content: "Hello! I'm Shylesh AI — your personal Dubai property investment assistant. I'm here to help you find the right property in Dubai based on your goals and budget. May I ask which country you're investing from? 🌍",
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
  const bottomRef = useRef<HTMLDivElement>(null)

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
        const assistantMsg: Message = { role: 'assistant', content: data.message }
        setMessages(prev => [...prev, assistantMsg])

        // Show lead form after AI suggests consultation (around message 8+)
        if (newMessages.length >= 8 && data.message.toLowerCase().includes('consultation')) {
          setTimeout(() => setShowLeadForm(true), 800)
        }
      }
    } catch {
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: "I'm sorry, I'm having trouble connecting right now. Please try again or WhatsApp Shylesh directly.",
      }])
    } finally {
      setLoading(false)
    }
  }

  const submitLead = async () => {
    if (!lead.name || !lead.whatsapp) return

    const summary = messages
      .filter(m => m.role === 'user')
      .map(m => m.content)
      .join(' | ')

    await fetch('/api/lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...lead, source: 'AI Advisor', conversationSummary: summary }),
    })

    setLeadSubmitted(true)
  }

  return (
    <>
      {/* Floating bubble */}
      <button
        onClick={() => setOpen(o => !o)}
        className="fixed bottom-6 right-6 z-50 bg-gold text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center text-2xl hover:scale-110 transition-transform"
        aria-label="Open AI Property Advisor"
      >
        {open ? '✕' : '🏠'}
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
                <p className="text-xs text-gold">Dubai Property Advisor</p>
              </div>
            </div>
            <select
              value={language}
              onChange={e => setLanguage(e.target.value)}
              className="text-xs bg-navy-dark border border-white/20 text-white rounded px-2 py-1"
            >
              {LANGUAGES.map(l => <option key={l} value={l}>{l}</option>)}
            </select>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                  m.role === 'user'
                    ? 'bg-navy text-white rounded-br-sm'
                    : 'bg-cream text-charcoal rounded-bl-sm'
                }`}>
                  {m.content}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="bg-cream rounded-2xl rounded-bl-sm px-4 py-3">
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
              <div className="bg-gold/10 border border-gold rounded-xl p-4 space-y-3">
                <p className="text-sm font-semibold text-navy">Book your free consultation with Shylesh ✨</p>
                <input
                  type="text" placeholder="Your Name *"
                  value={lead.name ?? ''}
                  onChange={e => setLead(p => ({ ...p, name: e.target.value }))}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-gold"
                />
                <input
                  type="tel" placeholder="WhatsApp Number (with country code) *"
                  value={lead.whatsapp ?? ''}
                  onChange={e => setLead(p => ({ ...p, whatsapp: e.target.value }))}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-gold"
                />
                <input
                  type="email" placeholder="Email (optional)"
                  value={lead.email ?? ''}
                  onChange={e => setLead(p => ({ ...p, email: e.target.value }))}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-gold"
                />
                <button
                  onClick={submitLead}
                  disabled={!lead.name || !lead.whatsapp}
                  className="w-full bg-gold text-white rounded-lg py-2 text-sm font-semibold hover:bg-gold-light transition disabled:opacity-50"
                >
                  Book Free Consultation →
                </button>
                <p className="text-xs text-gray-500 text-center">
                  By submitting, you agree to receive property information via WhatsApp
                </p>
              </div>
            )}

            {leadSubmitted && (
              <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center">
                <p className="text-green-700 font-semibold text-sm">✅ Thank you! Shylesh will call you within 24 hours.</p>
                <a
                  href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}
                  target="_blank" rel="noopener noreferrer"
                  className="mt-2 inline-block text-xs text-gold underline"
                >
                  Or WhatsApp Shylesh directly →
                </a>
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          {/* Input */}
          {!leadSubmitted && (
            <div className="border-t border-gray-100 p-3 flex gap-2 shrink-0">
              <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && sendMessage()}
                placeholder="Type your message..."
                className="flex-1 border border-gray-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-gold"
              />
              <button
                onClick={sendMessage}
                disabled={loading || !input.trim()}
                className="bg-gold text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-gold-light transition disabled:opacity-50 shrink-0"
              >
                ➤
              </button>
            </div>
          )}
        </div>
      )}
    </>
  )
}
