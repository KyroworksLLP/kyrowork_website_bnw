'use client'

import SplitText from './SplitText';
import TextReveal from './TextReveal';
import ClickSpark from './ClickSpark';

export default function Contact() {
  return (
    <section id="contact" style={{ 
      padding: '2rem 2rem 6rem 2rem',
      background: 'var(--bg-primary)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{ maxWidth: '800px', width: '100%', textAlign: 'center' }}>
        <p style={{ fontSize: '0.7rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem' }}>
          <SplitText>Contact Us</SplitText>
        </p>
        <h2 style={{ marginBottom: '1rem' }}>
          <SplitText>Let's Build Something Together</SplitText>
        </h2>
        <TextReveal>
          <p style={{ fontSize: '1.1rem', marginBottom: '3rem', lineHeight: '1.6' }}>
            Ready to automate and scale? We'd love to hear about your project.
          </p>
        </TextReveal>

        <ClickSpark>
          <a
            href="mailto:contact@kyrowork.com?subject=Let's Build Something Together"
            className="cursor-target"
            style={{
              padding: '1rem 2rem',
              border: 'none',
              borderRadius: '8px',
              background: 'var(--accent)',
              color: 'var(--bg-primary)',
              cursor: 'pointer',
              fontSize: '1rem',
              fontWeight: '500',
              marginBottom: '2rem',
              display: 'inline-block',
              marginLeft: 'auto',
              marginRight: 'auto',
              textDecoration: 'none',
              transition: 'opacity 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = '0.9';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = '1';
            }}
          >
            Start a Conversation
          </a>
        </ClickSpark>

        <TextReveal delay={0.2}>
          <p style={{ fontSize: '1rem' }}>
            Email: <a href="mailto:contact@kyrowork.com" style={{ color: 'var(--accent)', textDecoration: 'none' }}>contact@kyrowork.com</a>
          </p>
        </TextReveal>
      </div>
    </section>
  );
}

