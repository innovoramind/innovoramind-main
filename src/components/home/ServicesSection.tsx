 import { motion } from 'framer-motion';
 import { 
   Code, Lightbulb, BookOpen, GraduationCap, Calendar, 
   Briefcase, Cpu, Palette, Handshake, Layers 
 } from 'lucide-react';
 
 const services = [
   {
     icon: Code,
     title: 'IT & Software Services',
     description: 'Software development, cloud computing, AI/ML, cybersecurity, and digital transformation.',
     items: [
       'Web & Mobile Application Development',
       'Cloud Computing & SaaS Solutions',
       'AI, Machine Learning & Data Science',
       'Cybersecurity & Data Protection',
     ],
     gradient: 'from-blue-500 to-cyan-500',
   },
   {
     icon: Lightbulb,
     title: 'Research & Innovation',
     description: 'Research design, interdisciplinary consultancy, and AI-based research solutions.',
     items: [
       'Research Design & Development',
       'Interdisciplinary Consultancy',
       'AI-Based Research Tools',
       'Data Modeling & Validation',
     ],
     gradient: 'from-violet-500 to-purple-500',
   },
   {
     icon: BookOpen,
     title: 'Academic Publications',
     description: 'Publishing journals, books, conference proceedings, and digital content.',
     items: [
       'Journals & Conference Proceedings',
       'Digital Publishing & E-books',
       'Peer-Review Management',
       'Intellectual Property Support',
     ],
     gradient: 'from-emerald-500 to-teal-500',
   },
   {
     icon: GraduationCap,
     title: 'Education & Training',
     description: 'Professional training, e-learning systems, and faculty development programs.',
     items: [
       'Professional Training Programs',
       'E-Learning & LMS Development',
       'Technical Skill Development',
       'Certification Programs',
     ],
     gradient: 'from-orange-500 to-amber-500',
   },
   {
     icon: Calendar,
     title: 'Conferences & Events',
     description: 'Organization of conferences, seminars, workshops, and networking forums.',
     items: [
       'Conference Management',
       'Virtual & Hybrid Events',
       'Seminars & Workshops',
       'Knowledge-Sharing Platforms',
     ],
     gradient: 'from-rose-500 to-pink-500',
   },
   {
     icon: Briefcase,
     title: 'Consultancy Services',
     description: 'IT, academic, research, and business process consulting across domains.',
     items: [
       'IT & Technology Advisory',
       'Academic Consultancy',
       'Business Process Consulting',
       'Project & Thesis Support',
     ],
     gradient: 'from-indigo-500 to-blue-500',
   },
   {
     icon: Cpu,
     title: 'Engineering & Technology',
     description: 'Engineering solutions in AI, automation, and emerging technologies.',
     items: [
       'Computer Science & AI Solutions',
       'Electronics & Automation',
       'Healthcare Technologies',
       'Product Development',
     ],
     gradient: 'from-cyan-500 to-blue-500',
   },
   {
     icon: Palette,
     title: 'Digital Media & Branding',
     description: 'Digital branding, academic visibility, and content management systems.',
     items: [
       'Digital Branding Strategy',
       'Online Presence Management',
       'Knowledge Portals & Libraries',
       'Content Management Systems',
     ],
     gradient: 'from-fuchsia-500 to-pink-500',
   },
   {
     icon: Handshake,
     title: 'Global Collaboration',
     description: 'International partnerships, licensing, and technology transfer services.',
     items: [
       'Academic Collaborations',
       'Industry Partnerships',
       'Licensing & Franchising',
       'Technology Transfer',
     ],
     gradient: 'from-green-500 to-emerald-500',
   },
   {
     icon: Layers,
     title: 'Allied Activities',
     description: 'Multidisciplinary services supporting innovation and knowledge development.',
     items: [
       'IT-Enabled Services',
       'Research-Based Solutions',
       'Educational Support',
       'Innovation Services',
     ],
     gradient: 'from-slate-500 to-gray-600',
   },
 ];
 
 export const ServicesSection = () => {
   return (
     <section className="section-padding bg-background">
       <div className="container-custom">
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="text-center max-w-3xl mx-auto mb-16"
         >
           <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-semibold mb-4">
             Our Expertise
           </span>
           <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
             Registered Across{' '}
             <span className="text-gradient">10 Major Domains</span>
           </h2>
           <p className="text-muted-foreground text-lg">
             As a premier U.S.-based enterprise, we're officially registered to deliver excellence across diverse fields of technology, research, education, and innovation.
           </p>
         </motion.div>
 
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
           {services.map((service, index) => (
             <motion.div
               key={service.title}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: index * 0.1 }}
               className="group"
             >
               <div className="h-full p-6 rounded-2xl bg-card border border-border hover:border-secondary/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                 <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                   <service.icon className="w-6 h-6 text-white" />
                 </div>
                 <h3 className="font-display text-lg font-bold text-foreground mb-2">
                   {service.title}
                 </h3>
                 <p className="text-sm text-muted-foreground mb-4">
                   {service.description}
                 </p>
                 <ul className="space-y-2">
                   {service.items.slice(0, 3).map((item, i) => (
                     <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                       <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 flex-shrink-0" />
                       {item}
                     </li>
                   ))}
                 </ul>
               </div>
             </motion.div>
           ))}
         </div>
       </div>
     </section>
   );
 };