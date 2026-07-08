import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Invest in Dubai with Shylesh Raj — RERA-Certified Property Advisor'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          background: 'linear-gradient(135deg, #0a1628 0%, #0d1f3c 60%, #162847 100%)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '60px',
          fontFamily: 'serif',
        }}
      >
        {/* Top bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{
            width: '48px', height: '48px', borderRadius: '50%',
            background: '#C9A84C', display: 'flex', alignItems: 'center',
            justifyContent: 'center', color: '#0a1628', fontWeight: 'bold', fontSize: '18px',
          }}>SR</div>
          <span style={{ color: '#C9A84C', fontSize: '18px', fontWeight: '600', letterSpacing: '2px', textTransform: 'uppercase' }}>
            Invest in Dubai with Shylesh Raj
          </span>
        </div>

        {/* Main content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ color: '#C9A84C', fontSize: '18px', fontWeight: '600', letterSpacing: '3px', textTransform: 'uppercase' }}>
            RERA-Certified Dubai Property Advisor
          </div>
          <div style={{ color: '#FFFFFF', fontSize: '56px', fontWeight: '700', lineHeight: '1.15', maxWidth: '800px' }}>
            Dubai Property Investment for Global Investors
          </div>
          <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '22px', maxWidth: '700px', lineHeight: '1.5' }}>
            Off-plan · Ready · Secondary Market · Golden Visa Advisory
          </div>
        </div>

        {/* Bottom trust strip */}
        <div style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
          {[
            '✓ RERA Broker #77789',
            '✓ 25+ Years UAE',
            '✓ 0% Capital Gains Tax',
            '✓ 6–9% Rental Yields',
            '✓ Golden Visa Advisory',
          ].map(item => (
            <span key={item} style={{ color: 'rgba(255,255,255,0.5)', fontSize: '15px' }}>{item}</span>
          ))}
        </div>
      </div>
    ),
    { ...size }
  )
}
