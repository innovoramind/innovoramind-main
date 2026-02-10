 import { motion } from 'framer-motion';
 import { Link } from 'react-router-dom';
 import { ArrowRight, Play, Calendar, Users, Globe2 } from 'lucide-react';
 import { Button } from '@/components/ui/button';
 
 export const HeroSection = () => {
   return (
     <section className="relative min-h-[90vh] hero-gradient overflow-hidden flex items-center">
       {/* Animated Background Elements */}
       <div className="absolute inset-0">
         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" />
         <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-primary-foreground/5 rounded-full" />
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary-foreground/5 rounded-full" />
       </div>
 
       <div className="container-custom relative z-10 py-20">
         <div className="grid lg:grid-cols-2 gap-12 items-center">
           {/* Content */}
           <motion.div
             initial={{ opacity: 0, x: -50 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8, ease: 'easeOut' }}
             className="text-center lg:text-left"
           >
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.2 }}
               className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-primary-foreground/90 mb-6"
             >
               <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
               Global Innovation Conference 2026
             </motion.div>
 
             <motion.h1
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.3 }}
               className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-tight mb-6"
             >
               Shaping the Future of{' '}
               <span className="text-gradient">Innovation</span>
             </motion.h1>
 
             <motion.p
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.4 }}
               className="text-lg sm:text-xl text-primary-foreground/70 mb-8 max-w-xl mx-auto lg:mx-0"
             >
               Join industry leaders, researchers, and innovators at the world's premier technology and research conference. Connect, learn, and transform.
             </motion.p>
 
             <motion.div
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.5 }}
               className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
             >
               <Button asChild size="lg" className="bg-gradient-to-r from-secondary to-accent hover:opacity-90 text-primary-foreground font-semibold px-8 group">
                 <Link to="/registrations">
                   Register Now
                   <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                 </Link>
               </Button>
               <Button asChild variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold px-8 group">
                 <Link to="/upcoming-conferences">
                   <Play className="mr-2 w-5 h-5" />
                   Explore Events
                 </Link>
               </Button>
             </motion.div>
 
             {/* Stats */}
             <motion.div
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.6 }}
               className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-primary-foreground/10"
             >
               {[
                 { icon: Calendar, value: '50+', label: 'Annual Events' },
                 { icon: Users, value: '10K+', label: 'Attendees' },
                 { icon: Globe2, value: '45+', label: 'Countries' },
               ].map((stat, index) => (
                 <div key={index} className="text-center lg:text-left">
                   <stat.icon className="w-6 h-6 text-accent mb-2 mx-auto lg:mx-0" />
                   <div className="font-display text-2xl sm:text-3xl font-bold text-primary-foreground">{stat.value}</div>
                   <div className="text-sm text-primary-foreground/60">{stat.label}</div>
                 </div>
               ))}
             </motion.div>
           </motion.div>
 
           {/* Right Side Visual */}
           <motion.div
             initial={{ opacity: 0, scale: 0.8 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.8, delay: 0.3 }}
             className="relative hidden lg:block"
           >
             <div className="relative w-full aspect-square max-w-lg mx-auto">
               {/* Main Circle */}
               <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary-foreground/20 animate-[spin_60s_linear_infinite]" />
               <div className="absolute inset-8 rounded-full border border-secondary/40" />
               <div className="absolute inset-16 rounded-full bg-gradient-to-br from-secondary/20 to-accent/20 backdrop-blur-sm" />
               
               {/* Floating Cards */}
               <motion.div
                 animate={{ y: [-10, 10, -10] }}
                 transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                 className="absolute top-10 right-0 glass rounded-xl p-4 shadow-xl"
               >
                 <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                     <Users className="w-5 h-5 text-secondary" />
                   </div>
                   <div>
                     <div className="text-sm font-semibold text-primary-foreground">500+ Speakers</div>
                     <div className="text-xs text-primary-foreground/60">Industry Experts</div>
                   </div>
                 </div>
               </motion.div>
 
               <motion.div
                 animate={{ y: [10, -10, 10] }}
                 transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                 className="absolute bottom-20 left-0 glass rounded-xl p-4 shadow-xl"
               >
                 <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                     <Globe2 className="w-5 h-5 text-accent" />
                   </div>
                   <div>
                     <div className="text-sm font-semibold text-primary-foreground">Global Reach</div>
                     <div className="text-xs text-primary-foreground/60">45+ Countries</div>
                   </div>
                 </div>
               </motion.div>
 
               {/* Center Logo */}
               <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center glow-primary animate-pulse-glow">
                   <Globe2 className="w-12 h-12 text-primary-foreground" />
                 </div>
               </div>
             </div>
           </motion.div>
         </div>
       </div>
 
       {/* Bottom Wave */}
       <div className="absolute bottom-0 left-0 right-0">
         <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
           <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))"/>
         </svg>
       </div>
     </section>
   );
 };