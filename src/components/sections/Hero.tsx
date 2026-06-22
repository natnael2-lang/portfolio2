import { Button } from "@/components/ui/button";
import { Download, Linkedin, Github } from "lucide-react";

const Hero = () => {
  const profile = {
    description: "Natnael Messay - Full Stack Developer",
    image: "/assets/profile/nat2.png",
  };

  const socials = [
    {
      label: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/natnael-messay-530177235",
      hoverColor: "hsl(var(--primary))",
      hoverBg: "hsl(var(--primary) / 0.1)",
      hoverBorder: "hsl(var(--primary))",
    },
    {
      label: "GitHub",
      icon: Github,
      href: "https://github.com/natnael2-lang",
      // uses foreground so it works in both light (#0D1728) and dark (#F4F6FA)
      hoverColor: "hsl(var(--primary))",
      hoverBg: "hsl(var(--primary) / 0.1)",
      hoverBorder: "hsl(var(--primary))",
    },
  ];

  return (
    <section
      id="home"
      className="overflow-hidden relative"
      style={{ background: "hsl(var(--background))" }}
    >
      <div className="container-1200 mx-auto flex flex-col lg:flex-row relative z-10 min-h-[calc(100vh-64px)]">

        {/* ── RIGHT: Image ── */}
        <div
          className="
            order-1 lg:order-2
            flex-shrink-0
            w-full
            h-[300px] sm:h-[380px]
            lg:w-[420px] lg:h-auto xl:w-[500px]
            relative flex items-end justify-center
            overflow-hidden
          "
        >
          <div
            className="absolute rounded-full"
            style={{
              width: "min(90%, 480px)",
              aspectRatio: "1 / 1",
              bottom: "-10%",
              left: "50%",
              transform: "translateX(-50%)",
              background: "linear-gradient(135deg, hsl(42,92%,58%) 0%, hsl(38,88%,50%) 100%)",
              zIndex: 0,
            }}
          />
          <div
            className="absolute rounded-full hidden lg:block"
            style={{
              width: "min(110%, 520px)",
              aspectRatio: "1 / 1",
              bottom: "-5%",
              right: "-8%",
              left: "auto",
              transform: "none",
              background: "linear-gradient(135deg, hsl(42,92%,58%) 0%, hsl(38,88%,50%) 100%)",
              zIndex: 0,
            }}
          />

          <div className="absolute inset-0 flex items-end justify-center z-10">
            <img
              src={profile.image}
              alt={profile.description}
              style={{
                height: "95%",
                width: "auto",
                maxWidth: "85%",
                objectFit: "contain",
                objectPosition: "bottom center",
                display: "block",
                filter: "drop-shadow(0 24px 48px rgba(0,0,0,0.18))",
              }}
            />
          </div>

          {/* Role badge */}
          <div
            className="absolute z-20 px-4 py-2.5 rounded-2xl"
            style={{
              bottom: "8%", left: "4%",
              background: "hsl(var(--foreground))",
              color: "hsl(var(--background))",
              boxShadow: "0 8px 24px rgba(0,0,0,0.18)",
            }}
          >
            <div className="text-[9px] opacity-55 mb-0.5 uppercase tracking-wider">Current Role</div>
            <div className="font-bold text-xs">Full Stack Dev</div>
          </div>

          {/* Spinning badge */}
          <div
            className="absolute z-20 w-[60px] h-[60px] lg:w-[72px] lg:h-[72px] rounded-full flex items-center justify-center"
            style={{
              bottom: "10%", right: "4%",
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

        {/* ── LEFT: Text content ── */}
        <div className="flex-1 min-w-0 flex flex-col justify-center text-left py-10 lg:py-16 order-2 lg:order-1">

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

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-3 leading-tight">
            I'm <span className="gradient-text">Natnael Messay,</span>
          </h1>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-5" style={{ color: "hsl(var(--foreground))" }}>
            Full Stack Developer
          </h2>
          <p className="text-base lg:text-lg mb-10 max-w-md" style={{ color: "hsl(var(--muted-foreground))", lineHeight: 1.7 }}>
            Building scalable, user-friendly, high performance web applications that make an impact.
          </p>

          {/* Download CV + social icons side by side */}
          <div className="flex flex-wrap items-center gap-3 mb-10">
            <Button size="lg" variant="outline" className="gap-2 rounded-full px-8" asChild>
              <a href="/cv1.pdf" download="Natnael_Messay_CV.pdf">
                <Download className="w-5 h-5" /> Download CV
              </a>
            </Button>

            {/* divider */}
            <div className="w-px h-8 hidden sm:block" style={{ background: "hsl(var(--border))" }} />

            {socials.map(({ label, icon: Icon, href, hoverColor, hoverBg, hoverBorder }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex items-center justify-center w-11 h-11 rounded-full"
                style={{
                  background: "hsl(var(--muted))",
                  border: "1px solid hsl(var(--border))",
                  color: "hsl(var(--muted-foreground))",
                  transition: "all 0.2s cubic-bezier(0.4,0,0.2,1)",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = hoverColor;
                  e.currentTarget.style.borderColor = hoverBorder;
                  e.currentTarget.style.background = hoverBg;
                  e.currentTarget.style.transform = "translateY(-4px) scale(1.1)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = "hsl(var(--muted-foreground))";
                  e.currentTarget.style.borderColor = "hsl(var(--border))";
                  e.currentTarget.style.background = "hsl(var(--muted))";
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                }}
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Stats */}
          <div className="flex items-center gap-0">
            {[
              { value: "2+", label: "Years experience" },
              { value: "15", label: "Projects completed" },
              { value: "2",  label: "Happy clients" },
            ].map((stat, i) => (
              <div key={stat.label} className="flex items-center">
                {i !== 0 && (
                  <div className="h-10 w-px mx-6" style={{ background: "hsl(var(--border))" }} />
                )}
                <div className="flex flex-col items-center">
                  <span className="text-2xl font-semibold gradient-text leading-none mb-1">{stat.value}</span>
                  <span className="text-xs uppercase tracking-wide" style={{ color: "hsl(var(--muted-foreground))" }}>{stat.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
