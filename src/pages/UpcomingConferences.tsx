 import { motion } from 'framer-motion';
 import { Layout } from '@/components/layout/Layout';
 import { Button } from '@/components/ui/button';
 import { Link } from 'react-router-dom';
 import { Calendar, MapPin, Users, Clock, ArrowRight } from 'lucide-react';
 
 const conferences = [
   {
     title: 'Global AI Innovation Summit 2026',
     date: 'March 15-17, 2026',
     location: 'San Francisco, CA, USA',
     venue: 'Moscone Center',
     attendees: '5,000+',
     image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
     category: 'Artificial Intelligence',
     description: 'Join the world\'s leading AI researchers and practitioners for three days of groundbreaking sessions.',
     tracks: ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision'],
   },
   {
     title: 'International Research Conference',
     date: 'April 8-10, 2026',
     location: 'Boston, MA, USA',
     venue: 'Boston Convention Center',
     attendees: '3,500+',
     image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&q=80',
     category: 'Research & Development',
     description: 'A premier forum for researchers across disciplines to share findings and collaborate.',
     tracks: ['Engineering', 'Sciences', 'Medicine', 'Technology'],
   },
   {
     title: 'Digital Transformation Forum',
     date: 'May 22-24, 2026',
     location: 'Austin, TX, USA',
     venue: 'Austin Convention Center',
     attendees: '4,200+',
     image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80',
     category: 'Digital Innovation',
     description: 'Explore the latest trends in digital transformation and enterprise technology.',
     tracks: ['Cloud Computing', 'IoT', 'Blockchain', 'Cybersecurity'],
   },
   {
     title: 'Future of Education Summit',
     date: 'June 12-14, 2026',
     location: 'Chicago, IL, USA',
     venue: 'McCormick Place',
     attendees: '2,800+',
     image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80',
     category: 'Education Technology',
     description: 'Reimagining education through technology, innovation, and new pedagogical approaches.',
     tracks: ['E-Learning', 'EdTech', 'Curriculum Design', 'Assessment'],
   },
   {
     title: 'Healthcare Innovation Conference',
     date: 'July 18-20, 2026',
     location: 'New York, NY, USA',
     venue: 'Javits Center',
     attendees: '3,800+',
     image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
     category: 'Healthcare Technology',
     description: 'Advancing healthcare through technology, research, and collaborative innovation.',
     tracks: ['Telemedicine', 'AI in Healthcare', 'Medical Devices', 'Biotech'],
   },
   {
     title: 'Sustainable Technology Summit',
     date: 'August 25-27, 2026',
     location: 'Seattle, WA, USA',
     venue: 'Washington State Convention Center',
     attendees: '2,500+',
     image: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=800&q=80',
     category: 'Sustainability',
     description: 'Technology solutions for a sustainable future and environmental conservation.',
     tracks: ['Clean Energy', 'Green Tech', 'Climate Solutions', 'Circular Economy'],
   },
 ];
 
 const UpcomingConferences = () => {
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
               Upcoming <span className="text-gradient">Conferences</span>
             </h1>
             <p className="text-xl text-primary-foreground/70">
               Discover and register for our upcoming world-class conferences, summits, and symposiums across diverse domains.
             </p>
           </motion.div>
         </div>
       </section>
 
       {/* Conferences Grid */}
       <section className="section-padding">
         <div className="container-custom">
           <div className="space-y-8">
             {conferences.map((conf, index) => (
               <motion.div
                 key={conf.title}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: index * 0.1 }}
                 className="group"
               >
                 <div className="grid lg:grid-cols-3 gap-6 p-6 rounded-2xl bg-card border border-border hover:border-secondary/50 hover:shadow-xl transition-all duration-300">
                   <div className="relative h-64 lg:h-auto rounded-xl overflow-hidden">
                     <img
                       src={conf.image}
                       alt={conf.title}
                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                     />
                     <div className="absolute top-4 left-4">
                       <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold">
                         {conf.category}
                       </span>
                     </div>
                   </div>
                   <div className="lg:col-span-2 flex flex-col">
                     <h3 className="font-display text-2xl font-bold text-foreground mb-3 group-hover:text-secondary transition-colors">
                       {conf.title}
                     </h3>
                     <p className="text-muted-foreground mb-4">{conf.description}</p>
                     <div className="grid sm:grid-cols-2 gap-3 mb-4">
                       <div className="flex items-center gap-2 text-sm text-muted-foreground">
                         <Calendar className="w-4 h-4 text-secondary" />
                         {conf.date}
                       </div>
                       <div className="flex items-center gap-2 text-sm text-muted-foreground">
                         <MapPin className="w-4 h-4 text-secondary" />
                         {conf.location}
                       </div>
                       <div className="flex items-center gap-2 text-sm text-muted-foreground">
                         <Clock className="w-4 h-4 text-secondary" />
                         {conf.venue}
                       </div>
                       <div className="flex items-center gap-2 text-sm text-muted-foreground">
                         <Users className="w-4 h-4 text-secondary" />
                         {conf.attendees} Expected
                       </div>
                     </div>
                     <div className="flex flex-wrap gap-2 mb-6">
                       {conf.tracks.map((track) => (
                         <span key={track} className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs">
                           {track}
                         </span>
                       ))}
                     </div>
                     <div className="mt-auto flex gap-4">
                       <Button asChild className="bg-gradient-to-r from-secondary to-accent hover:opacity-90 group">
                         <Link to="/registrations">
                           Register Now
                           <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                         </Link>
                       </Button>
                       <Button variant="outline">Learn More</Button>
                     </div>
                   </div>
                 </div>
               </motion.div>
             ))}
           </div>
         </div>
       </section>
     </Layout>
   );
 };
 
 export default UpcomingConferences;