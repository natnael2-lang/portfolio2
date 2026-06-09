import { Button } from "@/components/ui/button";
import { Download, Mail, Play, Volume2 } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const profile = {
    description: "Natnael Messay - Full Stack Developer",
    image: "/assets/profile/nat2.png",
  };

  return (
    <section
      id="home"
      className="min-h-screen overflow-hidden relative"
      style={{ background: "hsl(var(--background))" }}
    >
      <div className="container-1200 mx-auto min-h-screen flex flex-col lg:flex-row relative z-10">

        {/* ── LEFT: Text content ── */}
        {/* flex-1 so it takes available space; min-w-0 prevents overflow blowout */}
        <div className="flex-1 min-w-0 flex flex-col justify-center text-left py-12 px-4 lg:px-0 order-2 lg:order-1">

          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 w-fit"
            style={{
              background: "hsl(var(--muted))",
              color: "hsl(var(--muted-foreground))",
              border: "1px solid hsl(var(--border))",
            }}
          >
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "hsl(var(--primary))" }} />
            Hello There! 👋
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 leading-tight">
            I'm <span className="gradient-text">Natnael Messay,</span>
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-5" style={{ color: "hsl(var(--foreground))" }}>
            Full Stack Developer
          </h2>
          <p className="text-base lg:text-lg mb-10 max-w-md" style={{ color: "hsl(var(--muted-foreground))", lineHeight: 1.7 }}>
            Building scalable, user-friendly, high performance web applications that make an impact.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <Button size="lg" className="gap-2 rounded-full px-8" onClick={scrollToContact}>
              <Mail className="w-5 h-5" /> Contact Me
            </Button>
            <Button size="lg" variant="outline" className="gap-2 rounded-full px-8" asChild>
              <a href="/cv1.pdf" download="Natnael_Messay_CV.pdf">
                <Download className="w-5 h-5" /> Download CV
              </a>
            </Button>
          </div>

          <div className="flex flex-wrap gap-4">
            {[
              { value: "2+", label: "Years Experience" },
              { value: "15", label: "Projects Completed" },
              { value: "2",  label: "Happy Clients" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="p-5 rounded-2xl card-hover text-center min-w-[100px]"
                style={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))" }}
              >
                <div className="text-3xl font-bold gradient-text mb-1">{stat.value}</div>
                <div className="text-xs" style={{ color: "hsl(var(--muted-foreground))" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT: Image + decorative elements ── */}
        {/*
          Key rules:
          - Fixed width at each breakpoint so it never squeezes the left column
          - w-[340px] on md, w-[420px] on lg, w-[500px] on xl
          - flex-shrink-0 so it never compresses
          - On mobile (< lg) it goes on top as a shorter hero image band
        */}
        <div
          className="
            order-1 lg:order-2
            flex-shrink-0
            w-full h-[360px]
            lg:w-[420px] lg:h-auto xl:w-[500px]
            relative flex items-end justify-center
          "
        >
          {/* Golden circle — bleeds right */}
          <div
            className="absolute rounded-full"
            style={{
              width: "min(110%, 520px)",
              aspectRatio: "1 / 1",
              bottom: "-5%",
              right: "-8%",
              background: "linear-gradient(135deg, hsl(42,92%,58%) 0%, hsl(38,88%,50%) 100%)",
              zIndex: 0,
            }}
          />

          {/* Profile image */}
          <div className="absolute inset-0 flex items-end justify-center z-10">
            <img
              src={profile.image}
              alt={profile.description}
              style={{
                height: "95%",
                width: "auto",
                maxWidth: "90%",
                objectFit: "contain",
                objectPosition: "bottom center",
                display: "block",
                filter: "drop-shadow(0 24px 48px rgba(0,0,0,0.18))",
              }}
            />
          </div>

          {/* Play / voice card */}
     

         
          {/* Role badge */}
          <div
            className="absolute z-20 px-5 py-3 rounded-2xl"
            style={{
              bottom: "6%", left: "4%",
              background: "hsl(var(--foreground))",
              color: "hsl(var(--background))",
              boxShadow: "0 8px 24px rgba(0,0,0,0.18)",
            }}
          >
            <div className="text-[10px] opacity-55 mb-0.5 uppercase tracking-wider">Current Role</div>
            <div className="font-bold text-sm">Full Stack Dev</div>
          </div>

          {/* Spinning badge */}
          <div
            className="absolute z-20 w-[72px] h-[72px] rounded-full flex items-center justify-center"
            style={{
              bottom: "8%", right: "5%",
              background: "hsl(42,92%,58%)",
              boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
              border: "3px solid hsl(var(--background))",
            }}
          >
            <svg viewBox="0 0 80 80" className="absolute w-full h-full animate-spin-slow">
              <path id="badge-circle" d="M 40,40 m -28,0 a 28,28 0 1,1 56,0 a 28,28 0 1,1 -56,0" fill="none" />
              <text style={{ fontSize: "8px", fontWeight: 700, fill: "rgba(0,0,0,0.7)", letterSpacing: "1.5px" }}>
                <textPath href="#badge-circle">OPEN TO WORK • HIRE ME •&nbsp;</textPath>
              </text>
            </svg>
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-base" style={{ background: "rgba(0,0,0,0.12)" }}>✦</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
