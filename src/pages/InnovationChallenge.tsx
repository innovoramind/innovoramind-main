 import { motion } from 'framer-motion';
 import { Layout } from '@/components/layout/Layout';
 import { Button } from '@/components/ui/button';
 import { Link } from 'react-router-dom';
 import { Trophy, Lightbulb, Users, Clock, DollarSign, Award, ArrowRight, CheckCircle } from 'lucide-react';
 
 const challenges = [
   {
     title: 'AI for Social Good',
     prize: '$50,000',
     deadline: 'March 1, 2026',
     participants: '2,500+',
     description: 'Develop AI solutions that address pressing social challenges.',
   },
   {
     title: 'Sustainable Tech Innovation',
     prize: '$40,000',
     deadline: 'April 15, 2026',
     participants: '1,800+',
     description: 'Create technology solutions for environmental sustainability.',
   },
   {
     title: 'Healthcare Transformation',
     prize: '$45,000',
     deadline: 'May 30, 2026',
     participants: '2,100+',
     description: 'Innovate healthcare delivery through technology.',
   },
 ];
 
 const benefits = [
   'Cash prizes up to $50,000',
   'Mentorship from industry experts',
   'Networking with investors',
   'Media exposure',
   'Incubation opportunities',
   'Global recognition',
 ];
 
 const InnovationChallenge = () => {
   return (
     <Layout>
       {/* Hero */}
       <section className="hero-gradient py-20 lg:py-32 relative overflow-hidden">
         <div className="absolute inset-0">
           <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" />
         </div>
         <div className="container-custom relative z-10">
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
             className="text-center max-w-4xl mx-auto"
           >
             <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-primary-foreground/90 mb-6">
               <Trophy className="w-4 h-4 text-accent" />
               Global Innovation Challenge 2026
             </span>
             <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
               Transform Ideas Into{' '}
               <span className="text-gradient">Impact</span>
             </h1>
             <p className="text-xl text-primary-foreground/70 mb-8">
               Compete with innovators worldwide, win prestigious prizes, and gain access to exclusive resources to bring your vision to life.
             </p>
             <Button asChild size="lg" className="bg-gradient-to-r from-secondary to-accent hover:opacity-90 text-primary-foreground font-semibold px-8 group">
               <Link to="/registrations">
                 Submit Your Innovation
                 <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
               </Link>
             </Button>
           </motion.div>
         </div>
       </section>
 
       {/* Active Challenges */}
       <section className="section-padding">
         <div className="container-custom">
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-center mb-12"
           >
             <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
               Active Challenges
             </h2>
             <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
               Choose your challenge and start innovating today
             </p>
           </motion.div>
 
           <div className="grid md:grid-cols-3 gap-8">
             {challenges.map((challenge, index) => (
               <motion.div
                 key={challenge.title}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: index * 0.1 }}
                 className="group"
               >
                 <div className="h-full p-8 rounded-2xl bg-card border border-border hover:border-secondary/50 hover:shadow-xl transition-all duration-300">
                   <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center mb-6">
                     <Lightbulb className="w-7 h-7 text-primary-foreground" />
                   </div>
                   <h3 className="font-display text-xl font-bold text-foreground mb-3">{challenge.title}</h3>
                   <p className="text-muted-foreground mb-6">{challenge.description}</p>
                   <div className="space-y-3 mb-6">
                     <div className="flex items-center gap-2 text-sm">
                       <DollarSign className="w-4 h-4 text-secondary" />
                       <span className="font-semibold text-foreground">{challenge.prize}</span>
                       <span className="text-muted-foreground">Prize Pool</span>
                     </div>
                     <div className="flex items-center gap-2 text-sm">
                       <Clock className="w-4 h-4 text-secondary" />
                       <span className="text-muted-foreground">Deadline: {challenge.deadline}</span>
                     </div>
                     <div className="flex items-center gap-2 text-sm">
                       <Users className="w-4 h-4 text-secondary" />
                       <span className="text-muted-foreground">{challenge.participants} Participants</span>
                     </div>
                   </div>
                   <Button className="w-full bg-gradient-to-r from-secondary to-accent hover:opacity-90">
                     Join Challenge
                   </Button>
                 </div>
               </motion.div>
             ))}
           </div>
         </div>
       </section>
 
       {/* Benefits */}
       <section className="section-padding bg-muted/50">
         <div className="container-custom">
           <div className="grid lg:grid-cols-2 gap-12 items-center">
             <motion.div
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
             >
               <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
                 Why Participate?
               </span>
               <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
                 Benefits of Joining Our Challenge
               </h2>
               <p className="text-muted-foreground text-lg mb-8">
                 Beyond the prize money, our innovation challenges offer unparalleled opportunities for growth, networking, and recognition.
               </p>
               <div className="grid sm:grid-cols-2 gap-4">
                 {benefits.map((benefit, index) => (
                   <div key={index} className="flex items-center gap-3">
                     <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                     <span className="text-foreground">{benefit}</span>
                   </div>
                 ))}
               </div>
             </motion.div>
             <motion.div
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="relative"
             >
               <div className="aspect-square max-w-md mx-auto relative">
                 <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-3xl" />
                 <div className="absolute inset-4 glass rounded-2xl flex items-center justify-center">
                   <Award className="w-32 h-32 text-secondary/50" />
                 </div>
               </div>
             </motion.div>
           </div>
         </div>
       </section>
     </Layout>
   );
 };
 
 export default InnovationChallenge;