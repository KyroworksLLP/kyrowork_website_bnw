'use client'

import SplitText from './SplitText';
import Image from 'next/image';
import './Footer.css';

export default function Footer() {
  return (
    <footer style={{ 
      padding: '4rem 2rem 2rem',
      background: 'var(--bg-primary)',
      borderTop: '1px solid var(--border)'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <div style={{ marginBottom: '2rem' }}>
          <div 
            className="footer-logo-container"
            style={{ 
              display: 'flex', 
              flexDirection: 'column',
              alignItems: 'center', 
              justifyContent: 'center', 
              gap: '0.1rem', 
              marginBottom: '0.5rem',
              padding: '1rem'
            }}
          >
            <div className="footer-logo-text-wrapper" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0rem', flexWrap: 'nowrap' }}>
              <img
                src="/Logo/Kyro_Logo-removedbg.png"
                alt="Kyrowork Technologies Logo"
                className="footer-logo"
                style={{
                  height: '100px',
                  width: 'auto',
                  objectFit: 'contain',
                  background: 'transparent',
                  flexShrink: 0
                }}
              />
              <h3 className="footer-company-name" style={{ marginBottom: 0, whiteSpace: 'nowrap' }}>
                <SplitText>KYROWORK TECHNOLOGIES</SplitText>
              </h3>
            </div>
            <p className="footer-tagline" style={{ fontSize: '0.8rem', opacity: 0.8, margin: 0, paddingLeft: '5rem' }}>
              <SplitText>Rethinking Solutions</SplitText>
            </p>
          </div>
        </div>

        <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--border)' }}>
          <p style={{ fontSize: '0.75rem', marginBottom: '1rem', opacity: 0.7 }}>
            © 2025 Kyrowork Technologies. All rights reserved.
          </p>
          <p style={{ fontSize: '0.75rem', opacity: 0.7 }}>
            <SplitText>Just starting, always learning, proudly building from India.</SplitText>
          </p>
        </div>
      </div>
    </footer>
  );
}

