 import { motion } from 'framer-motion';
 import { Link } from 'react-router-dom';
 import { Calendar, MapPin, ArrowRight, Users } from 'lucide-react';
 import { Button } from '@/components/ui/button';
 
 const upcomingEvents = [
   {
     title: 'Global AI Innovation Summit 2026',
     date: 'March 15-17, 2026',
     location: 'San Francisco, CA',
     attendees: '5,000+',
     image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80',
     category: 'Artificial Intelligence',
   },
   {
     title: 'International Research Conference',
     date: 'April 8-10, 2026',
     location: 'Boston, MA',
     attendees: '3,500+',
     image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=600&q=80',
     category: 'Research & Development',
   },
   {
     title: 'Digital Transformation Forum',
     date: 'May 22-24, 2026',
     location: 'Austin, TX',
     attendees: '4,200+',
     image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&q=80',
     category: 'Digital Innovation',
   },
 ];
 
 export const UpcomingEventsSection = () => {
   return (
     <section className="section-padding bg-muted/50">
       <div className="container-custom">
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12"
         >
           <div>
             <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
               Don't Miss Out
             </span>
             <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
               Upcoming Conferences
             </h2>
           </div>
           <Button asChild variant="outline" className="group">
             <Link to="/upcoming-conferences">
               View All Events
               <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
             </Link>
           </Button>
         </motion.div>
 
         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
           {upcomingEvents.map((event, index) => (
             <motion.div
               key={event.title}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: index * 0.1 }}
               className="group"
             >
               <div className="h-full rounded-2xl overflow-hidden bg-card border border-border hover:border-secondary/50 hover:shadow-2xl transition-all duration-300">
                 <div className="relative h-48 overflow-hidden">
                   <img
                     src={event.image}
                     alt={event.title}
                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                   />
                   <div className="absolute top-4 left-4">
                     <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold">
                       {event.category}
                     </span>
                   </div>
                 </div>
                 <div className="p-6">
                   <h3 className="font-display text-xl font-bold text-foreground mb-4 group-hover:text-secondary transition-colors">
                     {event.title}
                   </h3>
                   <div className="space-y-2 mb-4">
                     <div className="flex items-center gap-2 text-sm text-muted-foreground">
                       <Calendar className="w-4 h-4 text-secondary" />
                       {event.date}
                     </div>
                     <div className="flex items-center gap-2 text-sm text-muted-foreground">
                       <MapPin className="w-4 h-4 text-secondary" />
                       {event.location}
                     </div>
                     <div className="flex items-center gap-2 text-sm text-muted-foreground">
                       <Users className="w-4 h-4 text-secondary" />
                       {event.attendees} Expected Attendees
                     </div>
                   </div>
                   <Button asChild className="w-full bg-gradient-to-r from-secondary to-accent hover:opacity-90 text-secondary-foreground font-semibold">
                     <Link to="/registrations">Register Now</Link>
                   </Button>
                 </div>
               </div>
             </motion.div>
           ))}
         </div>
       </div>
     </section>
   );
 };