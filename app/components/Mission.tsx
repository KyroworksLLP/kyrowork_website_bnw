'use client'

import SplitText from './SplitText';
import TextReveal from './TextReveal';
import CardCarousel from './CardCarousel';
import { ParticleCard } from './MagicBento';
import ClickSpark from './ClickSpark';
import { useThemeFromDOM } from './useThemeFromDOM';

export default function Mission() {
  const theme = useThemeFromDOM();
  const glowColor = theme === 'dark' ? '255, 255, 255' : '0, 0, 0';

  const missions = [
    {
      title: 'Our Mission',
      content: "Make powerful automation and AI tools accessible to every small business—not just large enterprises. We build through deep listening, fast iteration, and transparent communication."
    },
    {
      title: 'Building Beyond Borders',
      content: "We&apos;re not just building products—we&apos;re building a winning team. Our mission is to attract global expertise and empower local talent, creating a culture of innovation, collaboration, and excellence that drives businesses forward worldwide."
    }
  ];

  return (
    <section id="mission" style={{ 
      padding: '6rem 2rem 2rem 2rem',
      background: 'var(--bg-primary)'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <p style={{ fontSize: '0.9rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem' }}>
            <SplitText>OUR MISSION</SplitText>
          </p>
          <h2 style={{ marginBottom: '1rem' }}>
            <SplitText>What Drives Us</SplitText>
          </h2>
          <TextReveal>
            <p style={{ fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
              Our commitment to making powerful tools accessible and building beyond borders.
            </p>
          </TextReveal>
        </div>

        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <CardCarousel
            cardsPerView={1}
            initialIndex={0}
            cards={[
              <ClickSpark key="building-beyond-borders">
                <ParticleCard
                  glowColor={glowColor}
                  enableTilt={true}
                  clickEffect={true}
                  enableMagnetism={true}
                  style={{ 
                    padding: '2rem',
                    border: '1px solid var(--border)',
                    borderRadius: '12px',
                    minHeight: '300px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    textAlign: 'center'
                  }}
                  className="cursor-target"
                >
                  <h3 style={{ marginBottom: '1.5rem', textAlign: 'center' }}>Building Beyond Borders</h3>
                  <TextReveal delay={0.2}>
                    <p style={{ lineHeight: '1.8', fontSize: '1rem', textAlign: 'center', margin: 0 }}>
                      We&apos;re not just building products—we&apos;re building a winning team. Our mission is to attract global expertise and empower local talent, creating a culture of innovation, collaboration, and excellence that drives businesses forward worldwide.
                    </p>
                  </TextReveal>
                </ParticleCard>
              </ClickSpark>,
              <ClickSpark key="our-mission">
                <ParticleCard
                  glowColor={glowColor}
                  enableTilt={true}
                  clickEffect={true}
                  enableMagnetism={true}
                  style={{ 
                    padding: '2rem',
                    border: '1px solid var(--border)',
                    borderRadius: '12px',
                    minHeight: '300px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    textAlign: 'center'
                  }}
                  className="cursor-target"
                >
                  <h3 style={{ marginBottom: '1.5rem', textAlign: 'center' }}>Our Mission</h3>
                  <TextReveal delay={0.2}>
                    <p style={{ lineHeight: '1.8', fontSize: '1rem', textAlign: 'center', margin: 0 }}>
                      Make powerful automation and AI tools accessible to every small business—not just large enterprises. We build through deep listening, fast iteration, and transparent communication.
                    </p>
                  </TextReveal>
                </ParticleCard>
              </ClickSpark>
            ]}
            autoPlayInterval={4000}
            pauseOnHover={true}
            useSpotlightCard={false}
          />
        </div>
      </div>
    </section>
  );
}

