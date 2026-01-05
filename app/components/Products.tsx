'use client'

import CardSwap, { Card } from './CardSwap';
import SplitText from './SplitText';
import TextReveal from './TextReveal';
import ParticleCard from './MagicBento';
import ClickSpark from './ClickSpark';
import { useThemeFromDOM } from './useThemeFromDOM';
import Link from 'next/link';
import './Products.css';

export default function Products() {
  const theme = useThemeFromDOM();
  const glowColor = theme === 'dark' ? '255, 255, 255' : '0, 0, 0';

  const products = [
    {
      title: 'AURA',
      audience: 'For Marketing Teams & Agencies',
      description: 'Track Awareness, Engagement, and Outcomes with AI-powered dashboards—no spreadsheets needed.',
      capabilities: ['SaaS', 'AI Insights', 'Secure Collaboration'],
      features: ['Real-time metrics', 'Campaign comparison', 'Shareable dashboards', 'Team collaboration'],
      ctas: ['View Dashboard', 'Request Demo']
    },
    {
      title: 'Business Chatbot',
      audience: 'For Enterprises & MSMEs',
      description: 'AI-driven WhatsApp automation for FAQs, bookings, and lead capture—24/7 with human handoff.',
      capabilities: ['AI', 'Automation', 'Secure Integration'],
      features: ['24/7 lead capture', 'Smart auto-responses', 'Booking automation', 'Human handoff'],
      ctas: ['Try Now', 'Request Demo']
    },
    {
      title: 'Golf App',
      audience: 'For Golf Clubs & Tournament Organizers',
      description: 'Automate the complete golfer experience—booking, tournaments, and score tracking in one app.',
      capabilities: ['SaaS', 'Mobile', 'Secure Payments'],
      features: ['Course discovery & instant booking', 'Tournament management', 'Digital scorecards & stats', 'Secure payments'],
      ctas: ['Explore Features', 'Start Free Trial']
    },
    {
      title: 'Language Learning',
      audience: 'For Educators & Training Institutes',
      description: 'Deliver bite-sized lessons, quizzes, and reminders via WhatsApp with clear dashboards for admins.',
      capabilities: ['SaaS', 'AI', 'Mobile Integration'],
      features: ['Micro-lessons & quizzes', 'Smart reminders', 'Progress tracking', 'Admin dashboard'],
      ctas: ['Learn More', 'Request Demo']
    }
  ];

  return (
    <section id="products" style={{ 
      padding: '6rem 2rem 2rem 2rem',
      background: 'var(--bg-primary)',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      overflow: 'hidden',
      width: '100%',
      maxWidth: '100%'
    }}>
      <div style={{ maxWidth: '1400px', width: '100%', overflow: 'hidden' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <p style={{ fontSize: '0.9rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem' }}>
            <SplitText>OUR PRODUCTS</SplitText>
          </p>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
            <SplitText>Tools That Grow With You</SplitText>
          </h2>
          <TextReveal>
            <p style={{ fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
              Curated solutions designed to automate, engage, and scale your business.
            </p>
          </TextReveal>
        </div>

        <div 
          className="products-card-swap-wrapper"
          style={{ height: '600px', position: 'relative', marginTop: '15rem', marginLeft: '0', marginBottom: '2rem', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%'}}
        >
          <CardSwap
            cardDistance={60}
            verticalDistance={70}
            delay={6000}
            pauseOnHover={true}
          >
            {products.map((product, index) => (
              <Card key={index} className="cursor-target">
                <ClickSpark>
                  <ParticleCard
                    glowColor={glowColor}
                    enableTilt={true}
                    clickEffect={true}
                    enableMagnetism={true}
                    style={{ 
                      padding: '2rem', 
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      backgroundColor: 'var(--bg-primary)',
                      border: '1px solid var(--border)',
                      borderRadius: '12px',
                      transition: 'background-color 0.3s ease, border-color 0.3s ease'
                    }}
                    className="cursor-target"
                  >
                    <div>
                      <p style={{ fontSize: '0.85rem', marginBottom: '0.5rem', opacity: 0.8 }}>
                        {product.audience}
                      </p>
                      <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>{product.title}</h3>
                      <p style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>{product.description}</p>
                      <div style={{ marginBottom: '1.5rem' }}>
                        <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem', fontWeight: '600' }}>Capabilities:</p>
                        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                          {product.capabilities.map((cap, i) => (
                            <span key={i} style={{ 
                              padding: '0.25rem 0.75rem', 
                              border: '1px solid var(--border)', 
                              borderRadius: '12px',
                              fontSize: '0.85rem'
                            }}>
                              {cap}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem', fontWeight: '600' }}>Features:</p>
                        <ul style={{ listStyle: 'none', paddingLeft: '0', fontSize: '0.9rem' }}>
                          {product.features.map((feature, i) => (
                            <li key={i} style={{ marginBottom: '0.25rem' }}>• {feature}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                        <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
                          {product.ctas.map((cta, i) => {
                            const isViewDashboard = cta === 'View Dashboard' && product.title === 'AURA';
                            const isRequestDemo = cta === 'Request Demo';
                            
                            if (isViewDashboard) {
                              return (
                                <Link
                                  key={i}
                                  href="/AURA"
                                  className="cursor-target"
                                  style={{
                                    padding: '0.75rem 1.5rem',
                                    border: 'none',
                                    borderRadius: '8px',
                                    background: 'var(--accent)',
                                    color: 'var(--bg-primary)',
                                    cursor: 'pointer',
                                    fontSize: '0.9rem',
                                    fontWeight: '500',
                                    textDecoration: 'none',
                                    display: 'inline-block'
                                  }}
                                >
                                  {cta}
                                </Link>
                              );
                            } else if (isRequestDemo) {
                              return (
                                <a
                                  key={i}
                                  href={`mailto:contact@kyrowork.com?subject=Request Demo - ${product.title}`}
                                  className="cursor-target"
                                  style={{
                                    padding: '0.75rem 1.5rem',
                                    border: i === 0 ? 'none' : '1px solid var(--border)',
                                    borderRadius: '8px',
                                    background: i === 0 ? 'var(--accent)' : 'transparent',
                                    color: i === 0 ? 'var(--bg-primary)' : 'var(--text-primary)',
                                    cursor: 'pointer',
                                    fontSize: '0.9rem',
                                    fontWeight: '500',
                                    textDecoration: 'none',
                                    display: 'inline-block'
                                  }}
                                >
                                  {cta}
                                </a>
                              );
                            } else {
                              return (
                                <button
                                  key={i}
                                  className="cursor-target"
                                  style={{
                                    padding: '0.75rem 1.5rem',
                                    border: i === 0 ? 'none' : '1px solid var(--border)',
                                    borderRadius: '8px',
                                    background: i === 0 ? 'var(--accent)' : 'transparent',
                                    color: i === 0 ? 'var(--bg-primary)' : 'var(--text-primary)',
                                    cursor: 'pointer',
                                    fontSize: '0.9rem',
                                    fontWeight: '500'
                                  }}
                                >
                                  {cta}
                                </button>
                              );
                            }
                          })}
                        </div>
                  </ParticleCard>
                </ClickSpark>
              </Card>
            ))}
          </CardSwap>
        </div>
      </div>
    </section>
  );
}

