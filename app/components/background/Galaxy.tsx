"use client";

import { useEffect, useState } from 'react';
import Star from './Star';
import Astronaut from './Astronaut';

export default function Galaxy() {
  const [stars, setStars] = useState<Array<{
    id: number;
    size: number;
    top: number;
    left: number;
    duration: number;
    delay: number;
  }>>([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        size: Math.random() * 3 + 1,
        top: Math.random() * 100,
        left: Math.random() * 100,
        duration: Math.random() * 3 + 2,
        delay: Math.random() * 2
      }));
      setStars(newStars);
    };

    generateStars();
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-radial from-blue-900/20 to-transparent" />
      {stars.map((star) => (
        <Star key={star.id} {...star} />
      ))}
      <Astronaut />
    </div>
  );
}