 import { motion } from 'framer-motion';
 import { Link } from 'react-router-dom';
 import { ArrowRight, Sparkles } from 'lucide-react';
 import { Button } from '@/components/ui/button';
 
 export const CTASection = () => {
   return (
     <section className="section-padding hero-gradient relative overflow-hidden">
       {/* Background Elements */}
       <div className="absolute inset-0">
         <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
         <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/20 rounded-full blur-3xl" />
       </div>
 
       <div className="container-custom relative z-10">
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="text-center max-w-4xl mx-auto"
         >
           <motion.div
             initial={{ opacity: 0, scale: 0.8 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5 }}
             className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-primary-foreground/90 mb-6"
           >
             <Sparkles className="w-4 h-4 text-accent" />
             Limited Early Bird Offer
           </motion.div>
 
           <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary-foreground mb-6">
             Ready to Transform Your{' '}
             <span className="text-gradient">Future?</span>
           </h2>
 
           <p className="text-lg sm:text-xl text-primary-foreground/70 mb-10 max-w-2xl mx-auto">
             Join thousands of innovators, researchers, and industry leaders at our upcoming conferences. Register now and save up to 30% with early bird pricing.
           </p>
 
           <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold px-8 group">
               <Link to="/registrations">
                 Register Now
                 <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
               </Link>
             </Button>
             <Button asChild variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold px-8">
               <Link to="/upcoming-conferences">
                 Explore Conferences
               </Link>
             </Button>
           </div>
 
           {/* Trust Badges */}
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5, delay: 0.3 }}
             className="mt-12 pt-12 border-t border-primary-foreground/10"
           >
             <p className="text-primary-foreground/60 text-sm mb-6">Trusted by leading organizations worldwide</p>
             <div className="flex flex-wrap justify-center gap-8 opacity-60">
               {['Microsoft', 'Google', 'Stanford', 'MIT', 'IBM'].map((company) => (
                 <span key={company} className="font-display text-xl font-bold text-primary-foreground/80">
                   {company}
                 </span>
               ))}
             </div>
           </motion.div>
         </motion.div>
       </div>
     </section>
   );
 };