'use client'

import { ParticleCard } from '../components/MagicBento';
import ClickSpark from '../components/ClickSpark';
import SplitText from '../components/SplitText';
import TextReveal from '../components/TextReveal';
import { useThemeFromDOM } from '../components/useThemeFromDOM';
import StaggeredMenu from '../components/StaggeredMenu';
import TargetCursor from '../components/TargetCursor';
import Link from 'next/link';
import styles from './page.module.css';

const menuItems = [
  { label: 'Products', ariaLabel: 'Go to products section', link: '/#products' },
  { label: 'Our Story', ariaLabel: 'Learn about our story', link: '/#our-story' },
  { label: 'Our Mission', ariaLabel: 'View our mission', link: '/#mission' },
  { label: 'Our Impact', ariaLabel: 'View our impact', link: '/#impact' },
  { label: 'Our Capabilities', ariaLabel: 'View our capabilities', link: '/#capabilities' },
  { label: 'Our Journey', ariaLabel: 'View our journey', link: '/#journey' },
  { label: 'Get in Touch', ariaLabel: 'Contact us', link: '/#contact' }
];

export default function AEODashboard() {
  const theme = useThemeFromDOM();
  const glowColor = theme === 'dark' ? '255, 255, 255' : '0, 0, 0';

  return (
    <>
      <TargetCursor
        spinDuration={2.5}
        hoverDuration={0.1}
        parallaxOn={false}
      />
      <StaggeredMenu
        position="right"
        items={menuItems}
        socialItems={[]}
        displaySocials={false}
        displayItemNumbering={true}
        isFixed={true}
        closeOnClickAway={true}
      />
      <div style={{ background: 'var(--bg-primary)', minHeight: '100vh' }}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div>
          <p className={styles.heroTagline}>
            <SplitText>The AI Visibility Gap</SplitText>
          </p>
          <h1 className={styles.heroHeading} style={{ marginBottom: '0rem' }}>
            <SplitText>The search landscape has shifted.</SplitText>
          </h1><br />
          <h1 className={styles.heroHeading} style={{ marginBottom: '2rem' }}>
            <SplitText>Is your brand being mentioned?</SplitText>
          </h1>
          <TextReveal>
            <p className={styles.heroDescription} style={{ maxWidth: '900px', margin: '0 auto 3rem' }}>
              Meet AURA—the industry&apos;s first AI Visibility Intelligence platform. We analyze how AI Models perceive, rank, and recommend your brand in real-time.
            </p>
          </TextReveal>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <ClickSpark>
              <Link
                href="#dashboard"
                className="cursor-target"
                style={{
                  padding: '1rem 2rem',
                  border: 'none',
                  borderRadius: '8px',
                  background: 'var(--accent)',
                  color: 'var(--bg-primary)',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  fontWeight: '600',
                  textDecoration: 'none',
                  display: 'inline-block'
                }}
              >
                Explore Live Dashboard
              </Link>
            </ClickSpark>
            <ClickSpark>
              <a
                href="https://www.aura.kyrowork.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-target"
                style={{
                  padding: '1rem 2rem',
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                  background: 'transparent',
                  color: 'var(--text-primary)',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  fontWeight: '600',
                  textDecoration: 'none',
                  display: 'inline-block'
                }}
              >
                Run Your First AURA Report
              </a>
            </ClickSpark>
          </div>
        </div>
      </section>

      {/* The AURA Dashboard Section */}
      <section id="dashboard" style={{ 
        padding: '6rem 2rem',
        background: 'var(--bg-primary)'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ marginBottom: '1rem' }}>
              <SplitText>The AURA Dashboard: High-Level Visibility</SplitText>
            </h2>
          </div>

          <div className={styles.dashboardCardsGrid}>
            <ClickSpark>
              <ParticleCard
                glowColor={glowColor}
                enableTilt={true}
                clickEffect={true}
                enableMagnetism={true}
                className={`cursor-target ${styles.dashboardCard}`}
                style={{ overflow: 'hidden', width: '100%', maxWidth: '100%' }}
              >
                <h3 className={styles.cardTitle}>AEO Visibility Score & Grade</h3>
                <TextReveal delay={0.1}>
                  <p className={styles.cardDescription}>
                    Get an instant pulse on your AI search health with proprietary AEO scoring (A+ to F) based on over 20+ ranking signals including visibility, citations, and crawler activity.
                  </p>
                </TextReveal>
              </ParticleCard>
            </ClickSpark>

            <ClickSpark>
              <ParticleCard
                glowColor={glowColor}
                enableTilt={true}
                clickEffect={true}
                enableMagnetism={true}
                className={`cursor-target ${styles.dashboardCard}`}
                style={{ overflow: 'hidden', width: '100%', maxWidth: '100%' }}
              >
                <h3 className={styles.cardTitle}>Multi-Model Performance Breakdown</h3>
                <TextReveal delay={0.1}>
                  <p className={styles.cardDescription}>
                    Compare your brand&apos;s &quot;share of voice&quot; across leading models. See exactly how you perform in OpenAI&apos;s GPT-4o versus Google&apos;s Gemini 2.5 Flash.
                  </p>
                </TextReveal>
              </ParticleCard>
            </ClickSpark>

            <ClickSpark>
              <ParticleCard
                glowColor={glowColor}
                enableTilt={true}
                clickEffect={true}
                enableMagnetism={true}
                className={`cursor-target ${styles.dashboardCard}`}
                style={{ overflow: 'hidden', width: '100%', maxWidth: '100%' }}
              >
                <h3 className={styles.cardTitle}>3D Semantic Cluster Mapping</h3>
                <TextReveal delay={0.1}>
                  <p className={styles.cardDescription}>
                    Don&apos;t just read data—see it. We use K-means clustering and semantic embeddings to visualize your brand&apos;s presence in 3D query spaces, identifying exactly where you dominate and where you are invisible.
                  </p>
                </TextReveal>
              </ParticleCard>
            </ClickSpark>
          </div>
        </div>
      </section>

      {/* The Engine: How AURA Works */}
      <section style={{ 
        padding: '6rem 2rem',
        background: 'var(--bg-primary)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ marginBottom: '1rem' }}>
              <SplitText>The Engine: How AURA Works</SplitText>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            {[
              {
                phase: 'Phase 1',
                title: 'Brand Intelligence Collection',
                description: "We scrape your website and social profiles to build a contextual \"Knowledge Base\" of your brand's metadata and target personas."
              },
              {
                phase: 'Phase 2',
                title: 'Semantic Query Generation',
                description: 'Our pipeline generates 100+ industry-specific search queries, optimized via semantic clustering to ensure we are testing the intent that matters most to your customers.'
              },
              {
                phase: 'Phase 3',
                title: 'Real-Time AI Stress Testing',
                description: 'We run batch-processed API calls through the latest AI models to track brand rankings, competitor positioning, and sentiment.'
              },
              {
                phase: 'Phase 4',
                title: 'Crawler & Fact Verification',
                description: 'We monitor AI crawler activity (GPTBot, PerplexityBot) and verify citations to ensure the information AI provides about your brand is accurate and well-sourced.'
              }
            ].map((phase, index) => (
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
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                  className="cursor-target"
                >
                  <p style={{ fontSize: '0.85rem', marginBottom: '0.5rem', opacity: 0.8 }}>{phase.phase}</p>
                  <h3 style={{ marginBottom: '1rem' }}>{phase.title}</h3>
                  <TextReveal delay={0.1}>
                    <p style={{ lineHeight: '1.6', fontSize: '0.95rem', flex: 1 }}>{phase.description}</p>
                  </TextReveal>
                </ParticleCard>
              </ClickSpark>
            ))}
          </div>
        </div>
      </section>

      {/* Actionable Insights Sidebar */}
      <section style={{ 
        padding: '6rem 2rem',
        background: 'var(--bg-primary)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ marginBottom: '1rem' }}>
              <SplitText>Actionable Insights</SplitText>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {[
              {
                title: 'Citation Analytics',
                description: 'Identify high-quality sources that AI models trust. Track where your citations come from and the sentiment attached to them.'
              },
              {
                title: 'Competitive Positioning',
                description: 'See a direct comparison of your brand ranking versus your top 5 competitors in every AI response.'
              },
              {
                title: 'Crawler Activity Monitoring',
                description: 'Track timestamps and statistics of when AI bots from OpenAI, Perplexity, or Google-Extended last visited your site.'
              },
              {
                title: 'Prioritized Recommendations',
                description: 'AURA provides a "Next Steps" roadmap, suggesting specific content or metadata updates to improve your AI search visibility.'
              }
            ].map((insight, index) => (
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
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                  className="cursor-target"
                >
                  <h3 style={{ marginBottom: '1rem' }}>{insight.title}</h3>
                  <TextReveal delay={0.1}>
                    <p style={{ lineHeight: '1.6', fontSize: '0.95rem', flex: 1 }}>{insight.description}</p>
                  </TextReveal>
                </ParticleCard>
              </ClickSpark>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise-Grade Technology Stack */}
      <section style={{ 
        padding: '6rem 2rem',
        background: 'var(--bg-primary)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ marginBottom: '1rem' }}>
              <SplitText>Enterprise-Grade Technology Stack</SplitText>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            {[
              {
                category: 'Performance',
                description: 'Built on Next.js 16 and React 19 for lightning-fast, responsive dashboard experiences.'
              },
              {
                category: 'Intelligence',
                description: 'Integrated with GPT-4o and Gemini 2.5 Flash for deep linguistic analysis.'
              },
              {
                category: 'Real-time Data',
                description: 'Powered by Google Cloud Firestore for instant progress updates during analysis runs.'
              },
              {
                category: 'Scalability',
                description: 'Hosted on Firebase Cloud Run with secure rate-limiting and SSRF protection to handle massive batch processing.'
              }
            ].map((tech, index) => (
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
                    flexDirection: 'column'
                  }}
                  className="cursor-target"
                >
                  <h3 style={{ marginBottom: '1rem' }}>{tech.category}</h3>
                  <TextReveal delay={0.1}>
                    <p style={{ lineHeight: '1.6', fontSize: '0.95rem', flex: 1 }}>{tech.description}</p>
                  </TextReveal>
                </ParticleCard>
              </ClickSpark>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section style={{ 
        padding: '6rem 2rem',
        background: 'var(--bg-primary)',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ marginBottom: '1.5rem' }}>
            <SplitText>Stop guessing. Start appearing.</SplitText>
          </h2>
          <TextReveal>
            <p style={{ fontSize: '1.1rem', marginBottom: '3rem', lineHeight: '1.8' }}>
              Export your complete data to CSV or schedule recurring AURA reports to track your historical trends and AI growth over time.
            </p>
          </TextReveal>
          <ClickSpark>
            <a
              href="https://www.aura.kyrowork.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-target"
              style={{
                padding: '1.25rem 2.5rem',
                border: 'none',
                borderRadius: '8px',
                background: 'var(--accent)',
                color: 'var(--bg-primary)',
                cursor: 'pointer',
                fontSize: '1.1rem',
                fontWeight: '600',
                transition: 'opacity 0.3s ease',
                textDecoration: 'none',
                display: 'inline-block'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.9'; }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}
            >
              Generate My AI Visibility Report Now
            </a>
          </ClickSpark>
        </div>
      </section>

      {/* Back to Home */}
      <section style={{ 
        padding: '4rem 2rem',
        background: 'var(--bg-primary)',
        textAlign: 'center'
      }}>
        <ClickSpark>
          <Link
            href="/"
            className="cursor-target"
            style={{
              padding: '1rem 2rem',
              border: '1px solid var(--border)',
              borderRadius: '8px',
              background: 'transparent',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              fontSize: '1rem',
              fontWeight: '600',
              textDecoration: 'none',
              display: 'inline-block'
            }}
          >
            ← Back to Home
          </Link>
        </ClickSpark>
      </section>
    </div>
    </>
  );
}

