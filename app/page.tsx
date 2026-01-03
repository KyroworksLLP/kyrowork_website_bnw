'use client'

import StaggeredMenu from './components/StaggeredMenu';
import TargetCursor from './components/TargetCursor';
import Hero from './components/Hero';
import Products from './components/Products';
import OurStory from './components/OurStory';
import Mission from './components/Mission';
import Impact from './components/Impact';
import Capabilities from './components/Capabilities';
import Journey from './components/Journey';
import Contact from './components/Contact';
import Footer from './components/Footer';

const menuItems = [
  { label: 'Products', ariaLabel: 'Go to products section', link: '#products' },
  { label: 'Our Story', ariaLabel: 'Learn about our story', link: '#our-story' },
  { label: 'Our Mission', ariaLabel: 'View our mission', link: '#mission' },
  { label: 'Our Impact', ariaLabel: 'View our impact', link: '#impact' },
  { label: 'Our Capabilities', ariaLabel: 'View our capabilities', link: '#capabilities' },
  { label: 'Our Journey', ariaLabel: 'View our journey', link: '#journey' },
  { label: 'Get in Touch', ariaLabel: 'Contact us', link: '#contact' }
];

export default function Home() {
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
      <main>
        <Hero />
        <Products />
        <OurStory />
        <Mission />
        <Impact />
        <Capabilities />
        <Journey />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
