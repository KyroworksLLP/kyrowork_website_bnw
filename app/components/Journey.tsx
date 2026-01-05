'use client'

import Stepper, { Step } from './Stepper';
import SplitText from './SplitText';
import TextReveal from './TextReveal';

export default function Journey() {
  return (
    <section id="journey" style={{ 
      padding: '6rem 2rem 2rem 2rem',
      background: 'var(--bg-primary)'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <p style={{ fontSize: '0.9rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem' }}>
            <SplitText>Our Journey</SplitText>
          </p>
          <h2 style={{ marginBottom: '1rem' }}>
            <SplitText>Our Journey</SplitText>
          </h2>
          <TextReveal>
            <p style={{ fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
              Our roadmap to empowering businesses worldwide.
            </p>
          </TextReveal>
        </div>

        <div style={{ marginTop: '4rem' }}>
          <Stepper
            initialStep={1}
            onStepChange={(step) => {
              // Step completed
            }}
            onFinalStepCompleted={() => {
              // All steps completed
            }}
            backButtonText="Previous"
            nextButtonText="Next"
          >
            <Step>
              <h2 style={{ marginBottom: '1rem' }}>Now</h2>
              <TextReveal>
                <p style={{ lineHeight: '1.6' }}>Building core products and refining our solutions</p>
              </TextReveal>
            </Step>
            <Step>
              <h2 style={{ marginBottom: '1rem' }}>Q1 2026</h2>
              <TextReveal>
                <p style={{ lineHeight: '1.6' }}>Beta launch and early adopter partnerships</p>
              </TextReveal>
            </Step>
            <Step>
              <h2 style={{ marginBottom: '1rem' }}>Q2 2026</h2>
              <TextReveal>
                <p style={{ lineHeight: '1.6' }}>Public launch and first client success stories</p>
              </TextReveal>
            </Step>
            <Step>
              <h2 style={{ marginBottom: '1rem' }}>Future</h2>
              <TextReveal>
                <p style={{ lineHeight: '1.6' }}>Expanding globally and empowering thousands of businesses</p>
              </TextReveal>
            </Step>
          </Stepper>
        </div>
      </div>
    </section>
  );
}

