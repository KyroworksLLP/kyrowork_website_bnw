'use client'

import { useState, useEffect } from 'react';
import SplitText from './SplitText';
import TextReveal from './TextReveal';
import DecryptedText from './DecryptedText';
import { ParticleCard } from './MagicBento';
import ClickSpark from './ClickSpark';
import CardCarousel from './CardCarousel';
import { useThemeFromDOM } from './useThemeFromDOM';

export default function OurStory() {
  const [showFounders, setShowFounders] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  const theme = useThemeFromDOM();
  const glowColor = theme === 'dark' ? '255, 255, 255' : '0, 0, 0';

  useEffect(() => {
    setMounted(true);
  }, []);

  const founders = [
    {
      name: 'Tejashree K',
      role: 'Co-Founder | Architecture & Security',
      bio: 'With a strong background in Cybersecurity and APIs, Tejashree ensures every solution is secure, scalable, and reliable. Her experience in the USA brings global best practices to our architecture and infrastructure.'
    },
    {
      name: 'Rahul K',
      role: 'Co-Founder | Product & Strategy',
      bio: 'Rahul drives product innovation and strategy. With experience in full-stack development, robotics, and AI gained in the UK, he transforms complex workflows into simple, user-friendly tools that deliver real impact.'
    },
    {
      name: 'Sai Krishna K',
      role: 'Co-Founder | Design & User Experience',
      bio: 'Sai Krishna blends game design principles and CRM consulting expertise from his time in the USA to craft intuitive, engaging user experiences. His focus: making technology natural, human-centered, and easy to adopt.'
    }
  ];

  const stats = [
    { label: 'Founders', value: '3' },
    { label: 'Based in India', value: 'Vizag' },
    { label: 'Experience', value: 'Global' }
  ];

  return (
    <section id="our-story" style={{ 
      padding: '6rem 2rem',
      background: 'var(--bg-primary)',
      minHeight: '100vh'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <p style={{ fontSize: '0.9rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem' }}>
            <SplitText>Our Story</SplitText>
          </p>
          <h2 style={{ marginBottom: '1rem' }}>
            <SplitText>World-Class • Home-Grown</SplitText>
          </h2>
          <TextReveal>
            <p style={{ fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
              Our founders share a common foundation in Computer Science and a passion for building technology that matters. After gaining world-class experience in the USA and UK, they returned with a vision: to create intelligent, secure, and scalable solutions while nurturing local talent and attracting global expertise. Together, they combine technical mastery with strategic insight to lead innovation from Vizag to the world.
            </p>
          </TextReveal>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
          {stats.map((stat, index) => (
            <ClickSpark key={index}>
              <ParticleCard
                glowColor={glowColor}
                enableTilt={true}
                clickEffect={true}
                style={{ 
                  padding: '2rem', 
                  textAlign: 'center',
                  border: '1px solid var(--border)',
                  borderRadius: '12px'
                }}
                className="cursor-target"
              >
                <div style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>{stat.value}</div>
                <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>{stat.label}</div>
              </ParticleCard>
            </ClickSpark>
          ))}
        </div>

        {showFounders && (
          <div 
            style={{ 
              maxWidth: '900px', 
              margin: '0 auto', 
              marginBottom: '3rem',
              animation: 'fadeIn 0.5s ease-in'
            }}
          >
            <CardCarousel
              cardsPerView={1}
              initialIndex={0}
              onSlideChange={(index) => setCurrentSlideIndex(index)}
              cards={founders.map((founder, index) => (
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
                      minHeight: '300px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center'
                    }}
                    className="cursor-target"
                  >
                  <h3 style={{ marginBottom: '0.5rem' }}>
                    <DecryptedText
                      key={`name-${index}`}
                      text={founder.name}
                      animateOn="both"
                      revealDirection="center"
                      speed={150}
                      maxIterations={10}
                      resetKey={mounted && currentSlideIndex === index ? currentSlideIndex : undefined}
                    />
                  </h3>
                    <p style={{ fontSize: '0.9rem', marginBottom: '1rem', opacity: 0.8, fontWeight: '600' }}>
                      <DecryptedText
                        key={`role-${index}`}
                        text={founder.role}
                        animateOn="both"
                        revealDirection="center"
                        speed={150}
                        maxIterations={10}
                        resetKey={mounted && currentSlideIndex === index ? currentSlideIndex : undefined}
                      />
                    </p>
                    <TextReveal delay={0.1}>
                      <p style={{ lineHeight: '1.6', fontSize: '0.95rem', margin: 0 }}>{founder.bio}</p>
                    </TextReveal>
                  </ParticleCard>
                </ClickSpark>
              ))}
              autoPlayInterval={6000}
              pauseOnHover={true}
              useSpotlightCard={false}
            />
          </div>
        )}

        <div style={{ textAlign: 'center' }}>
          <button
            onClick={() => setShowFounders(!showFounders)}
            className="cursor-target"
            style={{
              padding: '1rem 2rem',
              border: '1px solid var(--border)',
              borderRadius: '8px',
              background: 'transparent',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              fontSize: '1rem',
              fontWeight: '500',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = '0.8';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = '1';
            }}
          >
            {showFounders ? 'Hide Co-Founders' : 'Meet our Co-Founders'}
          </button>
        </div>
      </div>
    </section>
  );
}

