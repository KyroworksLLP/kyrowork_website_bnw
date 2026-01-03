'use client'

import { useState, useEffect, useRef, ReactNode } from 'react';
import SpotlightCard from './SpotlightCard';
import './CardCarousel.css';

interface CardCarouselProps {
  cards: ReactNode[];
  autoPlayInterval?: number;
  pauseOnHover?: boolean;
  spotlightColor?: string;
  cardsPerView?: number;
  initialIndex?: number;
  useSpotlightCard?: boolean;
  onSlideChange?: (index: number) => void;
}

export default function CardCarousel({
  cards,
  autoPlayInterval = 4000,
  pauseOnHover = true,
  spotlightColor,
  cardsPerView = 1,
  initialIndex = 0,
  useSpotlightCard = true,
  onSlideChange
}: CardCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [actualCardsPerView, setActualCardsPerView] = useState(cardsPerView);

  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth <= 768) {
        setActualCardsPerView(1);
      } else {
        // Respect the cardsPerView prop, but ensure it doesn't exceed available cards
        setActualCardsPerView(Math.min(cardsPerView, cards.length));
      }
    };

    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);
    return () => window.removeEventListener('resize', updateCardsPerView);
  }, [cardsPerView, cards.length]);

  const maxIndex = Math.max(0, cards.length - actualCardsPerView);

  useEffect(() => {
    if (onSlideChange) {
      onSlideChange(currentIndex);
    }
  }, [currentIndex, onSlideChange]);

  useEffect(() => {
    if (isPaused || cards.length <= actualCardsPerView) return;

    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex >= maxIndex) {
          return 0;
        }
        return prevIndex + 1;
      });
    }, autoPlayInterval);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused, cards.length, autoPlayInterval, actualCardsPerView, maxIndex]);

  const handleMouseEnter = () => {
    if (pauseOnHover) {
      setIsPaused(true);
    }
  };

  const handleMouseLeave = () => {
    if (pauseOnHover) {
      setIsPaused(false);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(Math.min(index, maxIndex));
  };

  return (
    <div 
      className="card-carousel-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="card-carousel-wrapper">
        <div 
          className="card-carousel-track"
          style={{
            transform: `translateX(-${currentIndex * (100 / actualCardsPerView)}%)`
          }}
        >
          {cards.map((card, index) => (
            <div 
              key={index} 
              className="card-carousel-slide"
              style={{
                width: `${100 / actualCardsPerView}%`
              }}
            >
              {useSpotlightCard ? (
                <SpotlightCard 
                  className="custom-spotlight-card" 
                  spotlightColor={spotlightColor}
                >
                  {card}
                </SpotlightCard>
              ) : (
                card
              )}
            </div>
          ))}
        </div>
      </div>
      
      {/* Navigation dots */}
      {cards.length > actualCardsPerView && (
        <div className="card-carousel-dots">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              className={`carousel-dot cursor-target ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

