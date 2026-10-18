  import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Scissors, ShieldCheck, Globe, ArrowRight, Award } from 'lucide-react';

export default function About() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const atelierValues = [
    {
      id: 1,
      icon: <Scissors size={20} />,
      title: "PRECISE TAILORING",
      desc: "Every silhouette is structurally engineered using traditional couture craftsmanship combined with modern geometric cuts."
    },
    {
      id: 2,
      icon: <ShieldCheck size={20} />,
      title: "ETHICAL LUXURY",
      desc: "We exclusively partner with certified Italian mills to source 100% traceably harvested organic wool, cashmere, and silk."
    },
    {
      id: 3,
      icon: <Globe size={20} />,
      title: "SUSTAINABLE PRODUCTION",
      desc: "Produced in limited seasonal capsules to minimize environmental impact and eliminate overproduction waste."
    }
  ];

  const statistics = [
    { number: "100%", label: "Traceable Italian Fabrics" },
    { number: "LIMITED", label: "Numbered Capsule Releases" },
    { number: "0%", label: "Synthetic Microfiber Waste" },
    { number: "2026", label: "Established Atelier" }
  ];

  return (
    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '2.5rem 3rem 6rem 3rem' }}>
      
      {/* 1. Editorial Hero Header */}
      <div style={{ borderBottom: '1px solid #e5e7eb', paddingBottom: '3rem', marginBottom: '3.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#6b7280', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem' }}>
          <Sparkles size={14} />
          <span>ABOUT THE ATELIER</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '3rem', alignItems: 'flex-end' }}>
          <div>
            <h1 className="font-condensed" style={{ fontSize: '3.8rem', lineHeight: 0.95, letterSpacing: '0.01em', color: '#111827' }}>
              STRENGTH IN DETAILS<br />& CHARACTER
            </h1>
          </div>
          <div>
            <p style={{ color: '#4b5563', fontSize: '0.92rem', lineHeight: 1.7 }}>
              GRITTE was founded on the philosophy that modern womenswear should embody both uncompromising strength and subtle elegance. Every piece in our collection is crafted with precision tailoring and architectural silhouettes.
            </p>
          </div>
        </div>
      </div>

      {/* 2. Side-by-Side Image Showcase */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '2rem', marginBottom: '5rem', alignItems: 'center' }}>
        <div style={{ borderRadius: '8px', overflow: 'hidden', height: '480px', background: '#111' }}>
          <img 
            src=" src/assets/catr6.jpg " 
            alt="Atelier Craftsmanship" 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', paddingLeft: '1rem' }}>
          <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.25em', color: '#6b7280', textTransform: 'uppercase' }}>
            THE PHILOSOPHY
          </span>
          <h2 className="font-condensed" style={{ fontSize: '2.4rem', color: '#111827', lineHeight: 1.1 }}>
            TAILORED FOR THE MODERN URBAN RHYTHM
          </h2>
          <p style={{ fontSize: '0.88rem', color: '#4b5563', lineHeight: 1.7 }}>
            We reject fast-fashion trends in favor of timeless, versatile wardrobe staples. Our designs prioritize structural integrity, clean lines, and dark monochrome tones created to empower the modern woman.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: '0.5rem' }}>
            <Award size={20} style={{ color: '#111827' }} />
            <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#111827', letterSpacing: '0.05em' }}>
              EXCELLENCE IN EUROPEAN CRAFTSMANSHIP
            </span>
          </div>
        </div>
      </div>

      {/* 3. Key Brand Statistics Banner */}
      <div style={{ background: '#111827', color: '#ffffff', borderRadius: '8px', padding: '3rem 2.5rem', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem', textAlign: 'center', marginBottom: '5rem' }}>
        {statistics.map((stat, idx) => (
          <div key={idx} style={{ borderRight: idx !== statistics.length - 1 ? '1px solid #374151' : 'none', paddingRight: idx !== statistics.length - 1 ? '1.5rem' : '0' }}>
            <div className="font-condensed" style={{ fontSize: '2.8rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.3rem' }}>
              {stat.number}
            </div>
            <div style={{ fontSize: '0.75rem', color: '#9ca3af', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* 4. Atelier Values Grid with Interactive Hover */}
      <div style={{ marginBottom: '5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.25em', color: '#6b7280', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>
            OUR PILLARS
          </span>
          <h2 className="font-condensed" style={{ fontSize: '2.8rem', color: '#111827' }}>
            CRAFT & STANDARDS
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
          {atelierValues.map((val) => {
            const isHovered = hoveredCard === val.id;
            return (
              <div 
                key={val.id}
                onMouseEnter={() => setHoveredCard(val.id)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{ 
                  background: '#ffffff', 
                  border: isHovered ? '1px solid #111827' : '1px solid #eae8e4', 
                  borderRadius: '8px', 
                  padding: '2.2rem 2rem', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: '1.2rem',
                  transform: isHovered ? 'translateY(-6px)' : 'translateY(0)',
                  boxShadow: isHovered ? '0 12px 28px rgba(0, 0, 0, 0.08)' : '0 2px 8px rgba(0,0,0,0.02)',
                  transition: 'all 0.3s ease-in-out',
                  cursor: 'pointer'
                }}
              >
                <div 
                  style={{ 
                    background: isHovered ? '#111827' : '#f3f4f6', 
                    color: isHovered ? '#ffffff' : '#111827',
                    width: '46px', 
                    height: '46px', 
                    borderRadius: '50%', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    transition: 'all 0.3s ease-in-out'
                  }}
                >
                  {val.icon}
                </div>
                <h3 className="font-condensed" style={{ fontSize: '1.5rem', color: '#111827', letterSpacing: '0.02em' }}>
                  {val.title}
                </h3>
                <p style={{ fontSize: '0.85rem', color: '#4b5563', lineHeight: 1.6 }}>
                  {val.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* 5. Bottom Call to Action Banner */}
      <div style={{ background: '#f3f4f6', borderRadius: '8px', padding: '3.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '2rem' }}>
        <div>
          <h3 className="font-condensed" style={{ fontSize: '2.2rem', color: '#111827', marginBottom: '0.5rem' }}>
            DISCOVER THE LATEST CAPSULE
          </h3>
          <p style={{ fontSize: '0.88rem', color: '#4b5563' }}>
            Explore our new autumn/winter outerwear and structured suits designed for powerful presence.
          </p>
        </div>

        <Link 
          to="/catalog" 
          style={{ 
            background: '#111827', 
            color: '#ffffff', 
            padding: '0.9rem 2rem', 
            borderRadius: '4px', 
            textDecoration: 'none', 
            fontWeight: 700, 
            fontSize: '0.78rem', 
            letterSpacing: '0.1em', 
            textTransform: 'uppercase', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.5rem',
            whiteSpace: 'nowrap'
          }}
        >
          <span>VIEW CATALOG</span>
          <ArrowRight size={16} />
        </Link>
      </div>

    </div>
  );
}