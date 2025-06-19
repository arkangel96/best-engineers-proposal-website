import React from "react";
import { Link } from "react-router-dom";
import { Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

const HERO_IMAGE = "/lovable-uploads/6ccc1df5-73a4-4e60-b6f2-b9b5f2118fd2.png";
const YOUTUBE_VIDEO_ID = "6g9uegIUVx0";

const HeroSection = () => {
  return (
    <section
      className="w-full min-h-[600px] flex items-center justify-center relative overflow-hidden"
      style={{
        position: "relative",
        padding: 0,
        margin: 0,
        background: 'transparent',
      }}
    >
      {/* Video background */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/lovable-uploads/20250617_1947_Cinematic Petrochemical Dusk_simple_compose_01jxyr00rdf8crrx79e0g4pw8p.mp4"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          inset: 0,
          zIndex: 0,
        }}
      />
      {/* Dark overlay for contrast */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: "rgba(20,30,50,0.45)",
        }}
      />
      <div className="relative z-20 flex flex-col items-center justify-center w-full max-w-3xl text-center mx-auto">
        <h1
          className="font-extrabold hero-title"
          style={{
            fontFamily: "'Open Sans','Inter','Poppins',Arial,sans-serif",
            fontSize: 48,
            color: "#bfc9d1",
            textShadow: "0 4px 24px rgba(0,0,0,0.25), 0 1.5px 2px rgba(0,0,0,0.18)",
            letterSpacing: "-0.01em",
            lineHeight: 1.08,
          }}
        >
          <span className="hero-title-metallic">
            Best Engineers Inc
          </span>
        </h1>
        <h2
          className="mt-4 font-medium hero-subtitle"
          style={{
            fontFamily: "'Open Sans','Inter','Poppins',Arial,sans-serif",
            fontSize: 20,
            color: "#e0e4ea",
            lineHeight: 1.6,
            fontWeight: 500,
            textShadow: "0 2px 12px rgba(0,0,0,0.18)",
            marginTop: 16,
          }}
        >
          Innovative engineering solutions for tomorrow's industrial challenges.
        </h2>
        <div className="flex flex-wrap justify-center gap-x-3 gap-y-2 mt-7 animate-fade-in-up"
          style={{ animationDelay: "0.13s" }}
        >
          {["Innovation", "Excellence", "Sustainability"].map((tag) => (
            <span
              key={tag}
              style={{
                fontSize: 14,
                color: "#fff",
                background: "#475569",
                borderRadius: 25,
                padding: "6px 20px",
                fontWeight: 500,
                letterSpacing: "0.02em"
              }}
            >
              {tag}
            </span>
          ))}
        </div>
        {/* CTA */}
        <div className="mt-10 flex flex-col items-center gap-4 w-full animate-fade-in-up" style={{ animationDelay: "0.22s" }}>
          <Button
            asChild
            className="cta-btn flex items-center gap-2 px-[20px] py-[13px] text-[16px] rounded-[10px] font-semibold shadow-lg border-0"
            style={{
              background: "#fff",
              color: "#0b1c3a",
              boxShadow: "0 4px 10px rgba(0,0,0,0.10)",
              fontWeight: 600,
              minWidth: 120,
              maxWidth: 240
            }}
          >
            <Link to="/key-services" className="flex items-center gap-2 w-full h-full justify-center">
              <Rocket size={22} className="mr-2 opacity-90" />
              <span>Our Services</span>
            </Link>
          </Button>
        </div>
      </div>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(32px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .hero-title {
          animation: fadeInUp 0.8s cubic-bezier(.4,0,.2,1) 0.1s both;
        }
        .hero-title-metallic {
          display: inline-block;
          font-family: 'Open Sans', Arial, sans-serif;
          font-size: 48px;
          font-weight: 800;
          background: linear-gradient(90deg, #e0e4ea 10%, #bfc9d1 40%, #f8f9fa 60%, #bfc9d1 90%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: #cfd8dc;
          text-shadow:
            0 2px 8px rgba(0,0,0,0.18),
            0 1.5px 0 #fff,
            0 0.5px 0 #b0b6bb;
          letter-spacing: -0.01em;
          line-height: 1.08;
          position: relative;
        }
        .hero-title-metallic::after {
          content: '';
          display: block;
          width: 60%;
          height: 2px;
          margin: 12px auto 0;
          background: linear-gradient(90deg, #f8f9fa 0%, #bfc9d1 100%);
          opacity: 0.5;
          border-radius: 1px;
        }
        .hero-subtitle {
          animation: fadeInUp 0.8s cubic-bezier(.4,0,.2,1) 0.3s both;
        }
        .animate-fade-in-up {
          animation: fade-in-up 1.15s cubic-bezier(.23,1.1,.38,1) both;
        }
        .animate-fade-in-up[style*="animation-delay"] {
          animation-delay: var(--animation-delay, 0.1s) !important;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
