'use client'

import SplitText from './SplitText';
import TextReveal from './TextReveal';
import ParticleCard from './MagicBento';
import ClickSpark from './ClickSpark';
import { useThemeFromDOM } from './useThemeFromDOM';
import './Impact.css';

export default function Impact() {
  const theme = useThemeFromDOM();
  const glowColor = theme === 'dark' ? '255, 255, 255' : '0, 0, 0';

  const impacts = [
    { title: 'Innovation', description: 'Building cutting-edge AI solutions that transform how businesses operate and scale.' },
    { title: 'Accessibility', description: 'Making enterprise-grade automation tools accessible to every small business, not just large corporations.' },
    { title: 'Security', description: 'Prioritizing data protection and security in every solution we build.' },
    { title: 'Growth', description: 'Empowering businesses to scale efficiently and focus on what matters most.' }
  ];

  const stats = [
    { value: '73%', label: 'of SMEs struggle with manual processes' },
    { value: '15+', label: 'hours saved per week with automation' },
    { value: '85%', label: 'growth in AI adoption by 2025' }
  ];

  return (
    <section id="impact" style={{ 
      padding: '2rem 2rem 6rem 2rem',
      background: 'var(--bg-primary)'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <p style={{ fontSize: '0.9rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem' }}>
            <SplitText>Our Impact</SplitText>
          </p>
          <h2 style={{ marginBottom: '1rem' }}>
            <SplitText>What We're Striving to Acheive</SplitText>
          </h2>
          <TextReveal>
            <p style={{ fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
              We're building tools that save time, reduce manual work, and help businesses focus on growth. Here's what drives us and the impact we're creating.
            </p>
          </TextReveal>
        </div>

        <div className="impact-cards-grid">
          {impacts.map((impact, index) => (
            <ClickSpark key={index}>
              <ParticleCard
                glowColor={glowColor}
                enableTilt={true}
                clickEffect={true}
                enableMagnetism={true}
                style={{ 
                  padding: '2rem',
                  border: '1px solid var(--border)',
                  borderRadius: '12px',
                  textAlign: 'center',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
                className="cursor-target impact-card"
              >
                <h3 style={{ marginBottom: '1rem' }}>{impact.title}</h3>
                <TextReveal delay={0.1}>
                  <p style={{ lineHeight: '1.6', fontSize: '0.95rem', margin: 0 }}>{impact.description}</p>
                </TextReveal>
              </ParticleCard>
            </ClickSpark>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          {stats.map((stat, index) => (
            <ClickSpark key={index}>
              <ParticleCard
                glowColor={glowColor}
                enableTilt={true}
                clickEffect={true}
                style={{ 
                  padding: '2rem',
                  border: '1px solid var(--border)',
                  borderRadius: '12px',
                  textAlign: 'center'
                }}
                className="cursor-target"
              >
                <div style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>{stat.value}</div>
                <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>{stat.label}</div>
              </ParticleCard>
            </ClickSpark>
          ))}
        </div>
      </div>
    </section>
  );
}

