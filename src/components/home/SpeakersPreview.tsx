 import { motion } from 'framer-motion';
 import { Link } from 'react-router-dom';
 import { ArrowRight, Linkedin, Twitter } from 'lucide-react';
 import { Button } from '@/components/ui/button';
 
 const featuredSpeakers = [
   {
     name: 'Dr. Sarah Chen',
     role: 'Chief AI Officer',
     company: 'TechVision Labs',
     image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
     linkedin: '#',
     twitter: '#',
   },
   {
     name: 'Prof. Michael Roberts',
     role: 'Director of Research',
     company: 'MIT Media Lab',
     image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
     linkedin: '#',
     twitter: '#',
   },
   {
     name: 'Dr. Emily Johnson',
     role: 'VP of Innovation',
     company: 'Global Research Inc.',
     image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
     linkedin: '#',
     twitter: '#',
   },
   {
     name: 'James Anderson',
     role: 'Founder & CEO',
     company: 'DataFlow Systems',
     image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
     linkedin: '#',
     twitter: '#',
   },
 ];
 
 export const SpeakersPreview = () => {
   return (
     <section className="section-padding bg-background">
       <div className="container-custom">
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="text-center max-w-3xl mx-auto mb-12"
         >
           <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-semibold mb-4">
             World-Class Experts
           </span>
           <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
             Featured Speakers
           </h2>
           <p className="text-muted-foreground text-lg">
             Learn from industry leaders and renowned researchers who are shaping the future of technology and innovation.
           </p>
         </motion.div>
 
         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
           {featuredSpeakers.map((speaker, index) => (
             <motion.div
               key={speaker.name}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: index * 0.1 }}
               className="group text-center"
             >
               <div className="relative mb-4 mx-auto w-48 h-48 rounded-2xl overflow-hidden">
                 <img
                   src={speaker.image}
                   alt={speaker.name}
                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-3">
                   <a href={speaker.linkedin} className="w-8 h-8 rounded-full bg-primary-foreground/20 hover:bg-secondary flex items-center justify-center transition-colors">
                     <Linkedin className="w-4 h-4 text-primary-foreground" />
                   </a>
                   <a href={speaker.twitter} className="w-8 h-8 rounded-full bg-primary-foreground/20 hover:bg-secondary flex items-center justify-center transition-colors">
                     <Twitter className="w-4 h-4 text-primary-foreground" />
                   </a>
                 </div>
               </div>
               <h3 className="font-display text-lg font-bold text-foreground mb-1">
                 {speaker.name}
               </h3>
               <p className="text-sm text-secondary font-medium mb-1">{speaker.role}</p>
               <p className="text-sm text-muted-foreground">{speaker.company}</p>
             </motion.div>
           ))}
         </div>
 
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
           className="text-center"
         >
           <Button asChild variant="outline" size="lg" className="group">
             <Link to="/past-speakers">
               View All Speakers
               <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
             </Link>
           </Button>
         </motion.div>
       </div>
     </section>
   );
 };