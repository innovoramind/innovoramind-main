 import { motion } from 'framer-motion';
 import { Layout } from '@/components/layout/Layout';
 import { Button } from '@/components/ui/button';
 import { Input } from '@/components/ui/input';
 import { Label } from '@/components/ui/label';
 import { Textarea } from '@/components/ui/textarea';
 import { MessageSquare, Users, Award, Heart, ArrowRight, Quote } from 'lucide-react';
 
 const testimonials = [
   {
     quote: "The AI Innovation Summit completely transformed my perspective on machine learning. The connections I made there led to a $2M research grant.",
     author: "Dr. Amanda Foster",
     role: "Research Director",
     company: "Tech Innovation Labs",
     image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
   },
   {
     quote: "As a first-time speaker, I was nervous, but the team made me feel incredibly supported. The feedback I received was invaluable for my career.",
     author: "Marcus Chen",
     role: "Senior Engineer",
     company: "DataFlow Inc.",
     image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
   },
   {
     quote: "The networking opportunities at these conferences are unparalleled. I've built partnerships that have generated millions in business value.",
     author: "Jennifer Walsh",
     role: "VP of Partnerships",
     company: "Global Tech Solutions",
     image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80",
   },
 ];
 
 const ShareYourStory = () => {
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
               Share Your <span className="text-gradient">Story</span>
             </h1>
             <p className="text-xl text-primary-foreground/70">
               Your experience matters. Tell us how our conferences, publications, or services have impacted your journey.
             </p>
           </motion.div>
         </div>
       </section>
 
       {/* Why Share */}
       <section className="section-padding">
         <div className="container-custom">
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-center mb-12"
           >
             <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
               Why Share Your Experience?
             </h2>
           </motion.div>
 
           <div className="grid md:grid-cols-4 gap-8 mb-16">
             {[
               { icon: Users, title: 'Inspire Others', description: 'Your story can motivate fellow professionals and researchers.' },
               { icon: Award, title: 'Get Featured', description: 'Selected stories are featured in our publications and website.' },
               { icon: MessageSquare, title: 'Build Connections', description: 'Connect with others who share similar experiences.' },
               { icon: Heart, title: 'Give Back', description: 'Help us improve and create better experiences for everyone.' },
             ].map((item, index) => (
               <motion.div
                 key={item.title}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: index * 0.1 }}
                 className="text-center"
               >
                 <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center mx-auto mb-4">
                   <item.icon className="w-8 h-8 text-secondary" />
                 </div>
                 <h3 className="font-display text-lg font-bold text-foreground mb-2">{item.title}</h3>
                 <p className="text-sm text-muted-foreground">{item.description}</p>
               </motion.div>
             ))}
           </div>
         </div>
       </section>
 
       {/* Featured Stories */}
       <section className="section-padding bg-muted/50">
         <div className="container-custom">
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-center mb-12"
           >
             <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
               Featured Stories
             </h2>
             <p className="text-muted-foreground text-lg">
               Hear from our community members
             </p>
           </motion.div>
 
           <div className="grid md:grid-cols-3 gap-8">
             {testimonials.map((testimonial, index) => (
               <motion.div
                 key={testimonial.author}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: index * 0.1 }}
                 className="group"
               >
                 <div className="h-full p-6 rounded-2xl bg-card border border-border hover:border-secondary/50 hover:shadow-lg transition-all duration-300">
                   <Quote className="w-10 h-10 text-secondary/30 mb-4" />
                   <p className="text-foreground mb-6 italic">"{testimonial.quote}"</p>
                   <div className="flex items-center gap-4">
                     <img
                       src={testimonial.image}
                       alt={testimonial.author}
                       className="w-12 h-12 rounded-full object-cover"
                     />
                     <div>
                       <div className="font-semibold text-foreground">{testimonial.author}</div>
                       <div className="text-sm text-muted-foreground">{testimonial.role}, {testimonial.company}</div>
                     </div>
                   </div>
                 </div>
               </motion.div>
             ))}
           </div>
         </div>
       </section>
 
       {/* Submission Form */}
       <section className="section-padding">
         <div className="container-custom">
           <div className="max-w-2xl mx-auto">
             <motion.div
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-center mb-12"
             >
               <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
                 Tell Us Your Story
               </h2>
               <p className="text-muted-foreground text-lg">
                 We'd love to hear about your experience
               </p>
             </motion.div>
 
             <motion.div
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1 }}
               className="p-8 rounded-2xl bg-card border border-border"
             >
               <form className="space-y-6">
                 <div className="grid sm:grid-cols-2 gap-4">
                   <div className="space-y-2">
                     <Label htmlFor="name">Full Name</Label>
                     <Input id="name" placeholder="Your name" />
                   </div>
                   <div className="space-y-2">
                     <Label htmlFor="email">Email Address</Label>
                     <Input id="email" type="email" placeholder="you@example.com" />
                   </div>
                 </div>
                 <div className="grid sm:grid-cols-2 gap-4">
                   <div className="space-y-2">
                     <Label htmlFor="role">Your Role</Label>
                     <Input id="role" placeholder="e.g., Research Scientist" />
                   </div>
                   <div className="space-y-2">
                     <Label htmlFor="organization">Organization</Label>
                     <Input id="organization" placeholder="Company or University" />
                   </div>
                 </div>
                 <div className="space-y-2">
                   <Label htmlFor="conference">Which conference/event did you attend?</Label>
                   <Input id="conference" placeholder="e.g., AI Innovation Summit 2025" />
                 </div>
                 <div className="space-y-2">
                   <Label htmlFor="story">Your Story</Label>
                   <Textarea
                     id="story"
                     placeholder="Tell us about your experience, what you learned, connections you made, or how it impacted your career..."
                     rows={6}
                   />
                 </div>
                 <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-secondary to-accent hover:opacity-90">
                   Submit Your Story
                   <ArrowRight className="ml-2 w-5 h-5" />
                 </Button>
               </form>
             </motion.div>
           </div>
         </div>
       </section>
     </Layout>
   );
 };
 
 export default ShareYourStory;