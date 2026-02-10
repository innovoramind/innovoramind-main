 import { motion } from 'framer-motion';
 import { Layout } from '@/components/layout/Layout';
 import { Globe, Award, Users, Target } from 'lucide-react';
 
 const About = () => {
   return (
     <Layout>
       <section className="hero-gradient py-20 lg:py-28">
         <div className="container-custom">
           <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-4xl mx-auto">
             <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
               About <span className="text-gradient">Us</span>
             </h1>
             <p className="text-xl text-primary-foreground/70">
               A premier U.S.-based enterprise delivering excellence across technology, research, and innovation.
             </p>
           </motion.div>
         </div>
       </section>
       <section className="section-padding">
         <div className="container-custom">
           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
             {[
               { icon: Globe, value: '45+', label: 'Countries Reached' },
               { icon: Users, value: '100K+', label: 'Community Members' },
               { icon: Award, value: '500+', label: 'Conferences Hosted' },
               { icon: Target, value: '10', label: 'Business Domains' },
             ].map((stat, i) => (
               <motion.div key={stat.label} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center p-6 rounded-2xl bg-card border border-border">
                 <stat.icon className="w-10 h-10 text-secondary mx-auto mb-4" />
                 <div className="font-display text-3xl font-bold text-foreground">{stat.value}</div>
                 <div className="text-muted-foreground">{stat.label}</div>
               </motion.div>
             ))}
           </div>
         </div>
       </section>
     </Layout>
   );
 };
 
 export default About;