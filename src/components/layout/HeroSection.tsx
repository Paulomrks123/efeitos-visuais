import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Zap, Layers } from "lucide-react";
import { motion } from "framer-motion";

interface HeroSectionProps {
  onLibraryChange: (library: "animations" | "effects" | "buttons") => void;
  animationsCount: number;
  effectsCount: number;
  buttonsCount: number;
}

// Hellfire text component
function HellfireText({ text }: { text: string }) {
  return (
    <span className="inline-flex flex-wrap justify-center items-end">
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          style={{
            background: 'linear-gradient(180deg, #FFFF00, #FF8C00, #FF4500, #8B0000)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
            display: 'inline-block',
            filter: 'drop-shadow(0 -5px 20px rgba(255, 69, 0, 0.8))',
          }}
          animate={{
            y: [0, -3, 0],
            scale: [1, 1.05, 1],
            filter: [
              'drop-shadow(0 -5px 20px rgba(255, 69, 0, 0.8)) brightness(1)',
              'drop-shadow(0 -8px 25px rgba(255, 69, 0, 1)) brightness(1.3)',
              'drop-shadow(0 -5px 20px rgba(255, 69, 0, 0.8)) brightness(1)',
            ],
          }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            delay: i * 0.08,
            ease: "easeInOut",
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  );
}

// Galaxy Spiral text component
function GalaxySpiralText({ text }: { text: string }) {
  return (
    <span className="inline-flex flex-wrap justify-center" style={{ perspective: '800px' }}>
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          style={{
            background: 'linear-gradient(135deg, #9400D3, #4B0082, #00BFFF, #9400D3)',
            backgroundSize: '300% 300%',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
            display: 'inline-block',
            textShadow: '0 0 20px rgba(148,0,211,0.5)',
          }}
          animate={{
            rotateZ: [0, 90, 180, 270, 360],
            rotateY: [0, 180, 360, 180, 0],
            translateZ: [0, 20, 0, -20, 0],
            backgroundPosition: ['0% 50%', '50% 50%', '100% 50%', '50% 50%', '0% 50%'],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            delay: i * 0.1,
            ease: "easeInOut",
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  );
}

export function HeroSection({ 
  onLibraryChange, 
  animationsCount, 
  effectsCount, 
  buttonsCount 
}: HeroSectionProps) {
  const totalItems = animationsCount + effectsCount + buttonsCount;

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,136,0.03)_0%,transparent_65%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,136,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,136,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      {/* Floating Orbs */}
      <div className="absolute top-20 left-[10%] w-72 h-72 bg-primary/10 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-20 right-[10%] w-96 h-96 bg-secondary/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-green/5 rounded-full blur-[150px]" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neon-green/10 border border-neon-green/30 text-neon-green text-sm font-medium mb-8"
        >
          <Sparkles size={16} className="animate-pulse" />
          <span>+{totalItems} Recursos Profissionais</span>
        </motion.div>

        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="text-foreground">Copie.</span>
            <span className="text-neon-green mx-3 drop-shadow-[0_0_20px_rgba(0,255,136,0.5)]">Cole.</span>
            <span className="text-foreground">Publique.</span>
          </h1>
        </motion.div>

        {/* Sub Headline with Matrix Effect */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div 
            className="inline-block px-8 md:px-12 py-10 rounded-2xl"
            style={{
              background: 'linear-gradient(135deg, #0D0D0D 0%, #1a0a05 50%, #0D0D0D 100%)',
              boxShadow: '0 0 40px rgba(255, 69, 0, 0.3), inset 0 0 60px rgba(255, 140, 0, 0.05)',
              border: '1px solid rgba(255, 69, 0, 0.3)',
            }}
          >
            <div className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-wider pb-4">
              <HellfireText text="BIBLIOTECA" />
            </div>
            <div className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-wider pb-2">
              <HellfireText text="COMPLETA" />
            </div>
            <div className="mt-4 flex flex-wrap justify-center gap-4 text-base md:text-xl font-medium">
              <span style={{ color: '#FF8C00', textShadow: '0 0 15px #FF8C00' }}>animações</span>
              <span style={{ color: '#FF4500' }}>•</span>
              <span style={{ color: '#FFFF00', textShadow: '0 0 15px #FFFF00' }}>efeitos</span>
              <span style={{ color: '#FF4500' }}>•</span>
              <span style={{ color: '#FF8C00', textShadow: '0 0 15px #FF8C00' }}>botões</span>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-4 font-mono opacity-60">
            ↑ Efeito <code className="text-[#FF4500]">.hellfire-text</code> aplicado ao vivo
          </p>
        </motion.div>

        {/* Galaxy Spiral Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mb-10"
        >
          <p className="text-lg md:text-xl lg:text-2xl font-bold">
            <GalaxySpiralText text="Biblioteca completa de animações CSS, efeitos visuais e botões prontos para uso" />
          </p>
          <p className="text-sm text-muted-foreground mt-2 font-mono opacity-60">
            ↑ Efeito <code className="text-[#9400D3]">.galaxia-espiral</code> aplicado ao vivo
          </p>
        </motion.div>

        {/* CTA Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-12"
        >
          {/* Animations Card */}
          <button
            onClick={() => onLibraryChange("animations")}
            className="group relative p-6 rounded-2xl bg-card/50 border-2 border-[#FF6600]/50 hover:border-[#FF6600] transition-all duration-300 hover:scale-[1.02]"
          >
            <motion.div 
              className="absolute inset-0 rounded-2xl pointer-events-none"
              animate={{
                boxShadow: [
                  '0 0 5px #FF6600, inset 0 0 5px rgba(255, 102, 0, 0.3)',
                  '0 0 20px #FF6600, 0 0 40px #FF9900, inset 0 0 15px rgba(255, 102, 0, 0.5)',
                  '0 0 5px #FF6600, inset 0 0 5px rgba(255, 102, 0, 0.3)',
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#FF6600]/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="w-14 h-14 rounded-xl bg-[#FF6600]/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Zap className="text-[#FF6600]" size={28} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Animações</h3>
              <motion.p 
                className="text-3xl font-bold mb-2"
                style={{ color: '#FF6600' }}
                animate={{
                  textShadow: [
                    '0 0 5px #FF6600',
                    '0 0 15px #FF6600, 0 0 30px #FF9900',
                    '0 0 5px #FF6600',
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {animationsCount}
              </motion.p>
              <p className="text-sm" style={{ color: '#FF6600', opacity: 0.7 }}>CSS puro & Tailwind</p>
            </div>
          </button>

          {/* Effects Card */}
          <button
            onClick={() => onLibraryChange("effects")}
            className="group relative p-6 rounded-2xl bg-card/50 border border-[#FFD700]/30 hover:border-[#FFD700]/60 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,215,0,0.25)]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="w-14 h-14 rounded-xl bg-[#FFD700]/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Layers className="text-[#FFD700]" size={28} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Efeitos Visuais</h3>
              <motion.p 
                className="text-3xl font-bold mb-2"
                style={{ color: '#FFD700' }}
                animate={{
                  textShadow: [
                    '0 0 5px #FFD700, 0 0 10px #FFD700',
                    '0 0 15px #FFD700, 0 0 30px #FFA500',
                    '0 0 10px #FFD700, 0 0 20px #FFD700',
                    '0 0 5px #FFD700, 0 0 10px #FFD700',
                  ],
                  y: [0, -5, 5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {effectsCount}
              </motion.p>
              <p className="text-sm" style={{ color: '#FFD700', opacity: 0.7 }}>Glass, Neomorphism +</p>
            </div>
          </button>

          {/* Buttons Card */}
          <button
            onClick={() => onLibraryChange("buttons")}
            className="group relative p-6 rounded-2xl bg-card/50 border border-[#00FFCC]/30 hover:border-[#00FFCC]/60 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(0,255,204,0.25)]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#00FFCC]/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="w-14 h-14 rounded-xl bg-[#00FFCC]/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <ArrowRight className="text-[#00FFCC]" size={28} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Botões</h3>
              <motion.p 
                className="text-3xl font-bold mb-2"
                style={{ color: '#00FFCC' }}
                animate={{
                  opacity: [1, 0.3, 0.8, 0.5, 1],
                  scale: [1, 0.98, 1.02, 0.99, 1],
                  filter: [
                    'drop-shadow(0 0 5px #00FFCC)',
                    'drop-shadow(0 0 2px #00FFCC)',
                    'drop-shadow(0 0 15px #00FFCC)',
                    'drop-shadow(0 0 5px #00FFCC)',
                    'drop-shadow(0 0 5px #00FFCC)',
                  ],
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {buttonsCount}
              </motion.p>
              <p className="text-sm" style={{ color: '#00FFCC', opacity: 0.7 }}>Scale & Pulse CTAs</p>
            </div>
          </button>
        </motion.div>

        {/* Showcase Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Link
            to="/showcase"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r from-primary/20 to-secondary/20 border border-white/10 hover:border-white/20 text-foreground font-medium transition-all hover:scale-105 hover:shadow-lg"
          >
            <Sparkles size={18} className="text-primary" />
            <span>Ver Showcase de 18 Estilos de Design</span>
            <ArrowRight size={18} className="text-secondary" />
          </Link>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2 text-muted-foreground/50">
            <span className="text-xs uppercase tracking-widest">Explorar</span>
            <div className="w-6 h-10 rounded-full border-2 border-current flex justify-center pt-2">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-1.5 rounded-full bg-current"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
