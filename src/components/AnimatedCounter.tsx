'use client';

import { useEffect, useRef, useState } from 'react';

interface AnimatedCounterProps {
  value: number | string;
  duration?: number;
  className?: string;
  suffix?: string;
  prefix?: string;
}

export default function AnimatedCounter({ 
  value, 
  duration = 2000, 
  className = '',
  suffix = '',
  prefix = ''
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLSpanElement>(null);

  // Extract numeric value from string if needed
  const getNumericValue = (val: number | string): number => {
    if (typeof val === 'number') return val;
    
    // Handle percentages, decimals, and other numeric formats
    const match = val.toString().match(/[\d.]+/);
    return match ? parseFloat(match[0]) : 0;
  };

  const numericValue = getNumericValue(value);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const startTime = Date.now();
    const startValue = 0;
    const endValue = numericValue;

    const animate = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      
      const currentValue = startValue + (endValue - startValue) * easeOutQuart;
      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(endValue);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, numericValue, duration]);

  const formatValue = (val: number): string => {
    const originalString = value.toString();
    
    // Handle different formats
    if (originalString.includes('$')) {
      if (originalString.includes('M')) {
        return `$${val.toFixed(1)}M`;
      }
      return `$${Math.round(val)}`;
    }
    
    if (originalString.includes('%')) {
      return `${Math.round(val)}%`;
    }
    
    if (originalString.includes('.') && originalString.includes('x')) {
      return `${val.toFixed(1)}x`;
    }
    
    if (originalString.includes(',')) {
      return val.toLocaleString();
    }
    
    return Math.round(val).toString();
  };

  return (
    <span ref={counterRef} className={className}>
      {prefix}{formatValue(count)}{suffix}
    </span>
  );
}
