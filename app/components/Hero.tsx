// Hero.tsx
'use client'

import TrueFocus from './TrueFocus';
import SplitText from './SplitText';
import TextReveal from './TextReveal';
import DecryptedText from './DecryptedText';
import CardCarousel from './CardCarousel';
import { ParticleCard } from './MagicBento';
import ClickSpark from './ClickSpark';
import { useThemeFromDOM } from './useThemeFromDOM';

export default function Hero() {
  const theme = useThemeFromDOM();
  const borderColor = theme === 'dark' ? '#ffffff' : '#000000';
  const glowColor = theme === 'dark' ? '#ffffff' : '#000000';
  const glowColorRGB = theme === 'dark' ? '255, 255, 255' : '0, 0, 0';

  return (
    <section id="hero" style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center',
      padding: 'clamp(8rem, 12vw, 10rem) clamp(1rem, 3vw, 2rem) clamp(2rem, 5vw, 4rem) clamp(1rem, 3vw, 2rem)',
      background: 'var(--bg-primary)'
    }}>
      <div style={{ maxWidth: '1200px', width: '100%', textAlign: 'center', overflow: 'visible', padding: '0 0.5rem' }}>
        <TrueFocus
          sentence="Innovate Automate Elevate"
          manualMode={false}
          blurAmount={4}
          borderColor={borderColor}
          glowColor={glowColor}
          animationDuration={2}
          pauseBetweenAnimations={1}
        />
        
        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <span style={{ padding: '0.5rem 1rem', border: '1px solid var(--border)', borderRadius: '20px' }}>
            <SplitText>AI-Powered Solutions</SplitText>
          </span>
          <span style={{ padding: '0.5rem 1rem', border: '1px solid var(--border)', borderRadius: '20px' }}>
            <SplitText>Global Experience</SplitText>
          </span>
          <span style={{ padding: '0.5rem 1rem', border: '1px solid var(--border)', borderRadius: '20px' }}>
            <SplitText>Served from Vizag</SplitText>
          </span>
        </div>

        <div style={{ marginTop: '3rem', width: '100%', overflow: 'visible', padding: '0 0.25rem' }}>
          <h2 style={{ 
            marginBottom: '1rem', 
            fontSize: 'clamp(0.55rem, 2.5vw, 1.5rem)', 
            whiteSpace: 'nowrap', 
            letterSpacing: 'clamp(-0.2px, -0.06vw, -0.6px)',
            transform: 'scale(1)',
            transformOrigin: 'center',
            maxWidth: '100%',
            wordBreak: 'keep-all'
          }}>
            <DecryptedText
              text="Secure, Scalable Solutions - Built for Businesses Everywhere"
              speed={30}
              maxIterations={20}
              animateOn="both"
              parentClassName="decrypted-heading"
            />
          </h2>
          
          <TextReveal>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.6', maxWidth: '800px', margin: '0 auto' }}>
              We're a young team of engineers with global experience, building tools to help startups and businesses launch faster and grow smarter.
            </p>
          </TextReveal>
        </div>

        {/* --- Spotlight Cards Carousel Section --- */}
        <div style={{ 
          marginTop: '4rem', 
          width: '100%',
          maxWidth: '1200px',
          marginLeft: 'auto',
          marginRight: 'auto',
          padding: '0 1rem'
        }}>
          <CardCarousel
            cardsPerView={1}
            cards={[
              <ClickSpark key="who-are-we">
                <ParticleCard
                  glowColor={glowColorRGB}
                  enableTilt={true}
                  clickEffect={true}
                  enableMagnetism={true}
                  style={{ 
                    padding: '2rem',
                    border: '1px solid var(--border)',
                    borderRadius: '12px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                  }}
                  className="cursor-target"
                >
                  <h3 style={{ marginBottom: '1rem', marginTop: '0' }}>WHO ARE WE?</h3>
                  <TextReveal delay={0.2}>
                    <p style={{ lineHeight: '1.6', color: 'var(--text-primary)', margin: 0 }}>
                      We are a multidisciplinary team of technologists, strategists, and innovators with global experience. Our mission is to design secure, scalable platforms that empower businesses to automate processes, harness AI, and unlock growth opportunities.
                    </p>
                  </TextReveal>
                </ParticleCard>
              </ClickSpark>,
              <ClickSpark key="who-do-we-serve">
                <ParticleCard
                  glowColor={glowColorRGB}
                  enableTilt={true}
                  clickEffect={true}
                  enableMagnetism={true}
                  style={{ 
                    padding: '2rem',
                    border: '1px solid var(--border)',
                    borderRadius: '12px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                  }}
                  className="cursor-target"
                >
                  <h3 style={{ marginBottom: '1rem', marginTop: '0' }}>WHO WE SERVE?</h3>
                  <TextReveal delay={0.2}>
                    <p style={{ lineHeight: '1.6', color: 'var(--text-primary)', margin: 0 }}>
                      From ambitious startups to growing MSMEs and large enterprises, we partner with organizations that want to innovate, scale, and lead. Whether launching your first product or transforming operations, we help you move faster and smarter—with security and trust at the core.
                    </p>
                  </TextReveal>
                </ParticleCard>
              </ClickSpark>,
              <ClickSpark key="what-we-deliver">
                <ParticleCard
                  glowColor={glowColorRGB}
                  enableTilt={true}
                  clickEffect={true}
                  enableMagnetism={true}
                  style={{ 
                    padding: '2rem',
                    border: '1px solid var(--border)',
                    borderRadius: '12px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                  }}
                  className="cursor-target"
                >
                  <h3 style={{ marginBottom: '1rem', marginTop: '0' }}>WHAT WE DELIVER?</h3>
                  <TextReveal delay={0.2}>
                    <div style={{ lineHeight: '1.6', color: 'var(--text-primary)' }}>
                      <p style={{ marginBottom: '0.5rem', marginTop: 0 }}>Our capabilities include:</p>
                      <ul style={{ listStyle: 'none', paddingLeft: '0' }}>
                        <li>• SaaS Platforms – Scalable, cloud-based solutions tailored for growth</li>
                        <li>• AI Tools – Data-driven insights and automation for smarter decisions</li>
                        <li>• Process Automation – Streamlined workflows to reduce friction and boost efficiency</li>
                        <li>• Secure Infrastructure – Compliance-ready systems built for reliability and trust</li>
                      </ul>
                    </div>
                  </TextReveal>
                </ParticleCard>
              </ClickSpark>,
              <ClickSpark key="why-it-matters">
                <ParticleCard
                  glowColor={glowColorRGB}
                  enableTilt={true}
                  clickEffect={true}
                  enableMagnetism={true}
                  style={{ 
                    padding: '2rem',
                    border: '1px solid var(--border)',
                    borderRadius: '12px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                  }}
                  className="cursor-target"
                >
                  <h3 style={{ marginBottom: '1rem', marginTop: '0' }}>WHY IT MATTERS</h3>
                  <TextReveal delay={0.2}>
                    <p style={{ lineHeight: '1.6', color: 'var(--text-primary)', margin: 0 }}>
                      Businesses today face complexity and rapid change. We create solutions that don't just work, but work for you—helping you automate, innovate, and elevate with confidence. Our goal: enable growth and impact for every business we serve.
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
