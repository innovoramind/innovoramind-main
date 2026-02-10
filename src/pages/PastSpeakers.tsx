 import { motion } from 'framer-motion';
 import { Layout } from '@/components/layout/Layout';
 import { Button } from '@/components/ui/button';
 import { Linkedin, Twitter, Youtube, ExternalLink } from 'lucide-react';
 
 const speakers = [
   {
     name: 'Dr. Sarah Chen',
     role: 'Chief AI Officer',
     company: 'TechVision Labs',
     image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
     topics: ['Artificial Intelligence', 'Machine Learning', 'Neural Networks'],
     talks: 12,
     linkedin: '#',
     twitter: '#',
     youtube: '#',
   },
   {
     name: 'Prof. Michael Roberts',
     role: 'Director of Research',
     company: 'MIT Media Lab',
     image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
     topics: ['Research Innovation', 'Future Tech', 'Education'],
     talks: 18,
     linkedin: '#',
     twitter: '#',
     youtube: '#',
   },
   {
     name: 'Dr. Emily Johnson',
     role: 'VP of Innovation',
     company: 'Global Research Inc.',
     image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
     topics: ['Digital Transformation', 'Innovation Strategy', 'R&D'],
     talks: 15,
     linkedin: '#',
     twitter: '#',
     youtube: '#',
   },
   {
     name: 'James Anderson',
     role: 'Founder & CEO',
     company: 'DataFlow Systems',
     image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
     topics: ['Big Data', 'Cloud Computing', 'Startups'],
     talks: 9,
     linkedin: '#',
     twitter: '#',
     youtube: '#',
   },
   {
     name: 'Dr. Lisa Wang',
     role: 'Head of AI Research',
     company: 'Stanford University',
     image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&q=80',
     topics: ['Deep Learning', 'NLP', 'Computer Vision'],
     talks: 21,
     linkedin: '#',
     twitter: '#',
     youtube: '#',
   },
   {
     name: 'Prof. David Lee',
     role: 'Distinguished Professor',
     company: 'Harvard University',
     image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
     topics: ['Quantum Computing', 'Cryptography', 'Security'],
     talks: 14,
     linkedin: '#',
     twitter: '#',
     youtube: '#',
   },
   {
     name: 'Dr. Jennifer Kim',
     role: 'Chief Technology Officer',
     company: 'HealthTech Innovations',
     image: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&q=80',
     topics: ['Healthcare AI', 'Telemedicine', 'Biotech'],
     talks: 11,
     linkedin: '#',
     twitter: '#',
     youtube: '#',
   },
   {
     name: 'Robert Martinez',
     role: 'Principal Scientist',
     company: 'IBM Research',
     image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80',
     topics: ['Quantum Algorithms', 'ML Systems', 'Edge Computing'],
     talks: 16,
     linkedin: '#',
     twitter: '#',
     youtube: '#',
   },
 ];
 
 const PastSpeakers = () => {
   return (
     <Layout>
       {/* Hero */}
       <section className="hero-gradient py-20 lg:py-28">
         <div className="container-custom">
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
             className="text-center max-w-4xl mx-auto"
           >
             <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
               Past <span className="text-gradient">Speakers</span>
             </h1>
             <p className="text-xl text-primary-foreground/70">
               Learn from world-renowned experts, researchers, and industry leaders who have shared their insights at our conferences.
             </p>
           </motion.div>
         </div>
       </section>
 
       {/* Speakers Grid */}
       <section className="section-padding">
         <div className="container-custom">
           <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
             {speakers.map((speaker, index) => (
               <motion.div
                 key={speaker.name}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: index * 0.1 }}
                 className="group"
               >
                 <div className="h-full rounded-2xl overflow-hidden bg-card border border-border hover:border-secondary/50 hover:shadow-xl transition-all duration-300">
                   <div className="relative h-64 overflow-hidden">
                     <img
                       src={speaker.image}
                       alt={speaker.name}
                       className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6 gap-3">
                       <a href={speaker.linkedin} className="w-10 h-10 rounded-full bg-primary-foreground/20 hover:bg-secondary flex items-center justify-center transition-colors">
                         <Linkedin className="w-5 h-5 text-primary-foreground" />
                       </a>
                       <a href={speaker.twitter} className="w-10 h-10 rounded-full bg-primary-foreground/20 hover:bg-secondary flex items-center justify-center transition-colors">
                         <Twitter className="w-5 h-5 text-primary-foreground" />
                       </a>
                       <a href={speaker.youtube} className="w-10 h-10 rounded-full bg-primary-foreground/20 hover:bg-secondary flex items-center justify-center transition-colors">
                         <Youtube className="w-5 h-5 text-primary-foreground" />
                       </a>
                     </div>
                   </div>
                   <div className="p-6">
                     <h3 className="font-display text-lg font-bold text-foreground mb-1 group-hover:text-secondary transition-colors">
                       {speaker.name}
                     </h3>
                     <p className="text-sm text-secondary font-medium mb-1">{speaker.role}</p>
                     <p className="text-sm text-muted-foreground mb-4">{speaker.company}</p>
                     <div className="flex flex-wrap gap-1 mb-4">
                       {speaker.topics.map((topic) => (
                         <span key={topic} className="px-2 py-0.5 rounded-full bg-muted text-muted-foreground text-xs">
                           {topic}
                         </span>
                       ))}
                     </div>
                     <div className="flex items-center justify-between">
                       <span className="text-sm text-muted-foreground">{speaker.talks} talks</span>
                       <Button variant="ghost" size="sm" className="text-secondary hover:text-secondary">
                         <ExternalLink className="w-4 h-4 mr-1" />
                         Profile
                       </Button>
                     </div>
                   </div>
                 </div>
               </motion.div>
             ))}
           </div>
         </div>
       </section>
 
       {/* Video Section Placeholder */}
       <section className="section-padding bg-muted/50">
         <div className="container-custom">
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-center max-w-3xl mx-auto mb-12"
           >
             <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
               Featured Talks
             </h2>
             <p className="text-muted-foreground text-lg">
               Watch recorded sessions from our past conferences
             </p>
           </motion.div>
 
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
             {[1, 2, 3].map((i) => (
               <motion.div
                 key={i}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.1 }}
                 className="aspect-video rounded-xl bg-primary/10 flex items-center justify-center border border-border"
               >
                 <div className="text-center">
                   <Youtube className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                   <p className="text-sm text-muted-foreground">Video Coming Soon</p>
                 </div>
               </motion.div>
             ))}
           </div>
         </div>
       </section>
     </Layout>
   );
 };
 
 export default PastSpeakers;