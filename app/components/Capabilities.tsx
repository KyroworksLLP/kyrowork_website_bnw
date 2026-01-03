'use client'

import SplitText from './SplitText';
import ParticleCard from './MagicBento';
import ClickSpark from './ClickSpark';
import { useThemeFromDOM } from './useThemeFromDOM';

export default function Capabilities() {
  const theme = useThemeFromDOM();
  const glowColor = theme === 'dark' ? '255, 255, 255' : '0, 0, 0';

  const capabilities = [
    { title: 'AI/ML', description: 'Intelligent automation powered by machine learning' },
    { title: 'Security', description: 'Enterprise-grade security & compliance' },
    { title: 'Scalability', description: 'Cloud-native architecture that grows with you' },
    { title: 'Integration', description: 'Seamless connections with your existing tools' }
  ];

  return (
    <section id="capabilities" style={{ 
      padding: '6rem 2rem',
      background: 'var(--bg-primary)',
      minHeight: '100vh'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <p style={{ fontSize: '0.9rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem' }}>
            <SplitText>Our Capabilities</SplitText>
          </p>
          <h2>
            <SplitText>Our Capabilities</SplitText>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          {capabilities.map((capability, index) => (
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
                  textAlign: 'center'
                }}
                className="cursor-target"
              >
                <h3 style={{ marginBottom: '1rem' }}>{capability.title}</h3>
                <p style={{ lineHeight: '1.6', fontSize: '0.95rem' }}>{capability.description}</p>
              </ParticleCard>
            </ClickSpark>
          ))}
        </div>
      </div>
    </section>
  );
}

