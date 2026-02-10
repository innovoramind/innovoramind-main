 import { motion } from 'framer-motion';
 import { Layout } from '@/components/layout/Layout';
 import { Button } from '@/components/ui/button';
 import { Link } from 'react-router-dom';
 import { Calendar, MapPin, Users, PlayCircle, FileText } from 'lucide-react';
 
 const recentConferences = [
   {
     title: 'AI & Machine Learning Summit 2025',
     date: 'November 12-14, 2025',
     location: 'Las Vegas, NV',
     attendees: '4,800',
     image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80',
     category: 'AI/ML',
     hasRecording: true,
     hasProceedings: true,
   },
   {
     title: 'International Data Science Conference',
     date: 'October 5-7, 2025',
     location: 'Miami, FL',
     attendees: '3,200',
     image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
     category: 'Data Science',
     hasRecording: true,
     hasProceedings: true,
   },
   {
     title: 'Cloud Computing Forum 2025',
     date: 'September 18-20, 2025',
     location: 'Denver, CO',
     attendees: '2,900',
     image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
     category: 'Cloud Computing',
     hasRecording: true,
     hasProceedings: true,
   },
   {
     title: 'Cybersecurity Excellence Conference',
     date: 'August 22-24, 2025',
     location: 'Washington, DC',
     attendees: '2,500',
     image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80',
     category: 'Cybersecurity',
     hasRecording: true,
     hasProceedings: false,
   },
   {
     title: 'Future Tech Innovation Summit',
     date: 'July 10-12, 2025',
     location: 'San Jose, CA',
     attendees: '3,600',
     image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
     category: 'Technology',
     hasRecording: true,
     hasProceedings: true,
   },
   {
     title: 'Research & Innovation Forum',
     date: 'June 5-7, 2025',
     location: 'Philadelphia, PA',
     attendees: '2,100',
     image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80',
     category: 'Research',
     hasRecording: false,
     hasProceedings: true,
   },
 ];
 
 const RecentConferences = () => {
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
               Recent <span className="text-gradient">Conferences</span>
             </h1>
             <p className="text-xl text-primary-foreground/70">
               Explore our past conferences, access recordings, and download proceedings from our successful events.
             </p>
           </motion.div>
         </div>
       </section>
 
       {/* Conferences Grid */}
       <section className="section-padding">
         <div className="container-custom">
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
             {recentConferences.map((conf, index) => (
               <motion.div
                 key={conf.title}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: index * 0.1 }}
                 className="group"
               >
                 <div className="h-full rounded-2xl overflow-hidden bg-card border border-border hover:border-secondary/50 hover:shadow-xl transition-all duration-300">
                   <div className="relative h-48 overflow-hidden">
                     <img
                       src={conf.image}
                       alt={conf.title}
                       className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                     />
                     <div className="absolute top-4 left-4">
                       <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold">
                         {conf.category}
                       </span>
                     </div>
                     <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                       {conf.hasRecording && (
                         <PlayCircle className="w-16 h-16 text-primary-foreground" />
                       )}
                     </div>
                   </div>
                   <div className="p-6">
                     <h3 className="font-display text-lg font-bold text-foreground mb-3 group-hover:text-secondary transition-colors">
                       {conf.title}
                     </h3>
                     <div className="space-y-2 mb-4">
                       <div className="flex items-center gap-2 text-sm text-muted-foreground">
                         <Calendar className="w-4 h-4 text-secondary" />
                         {conf.date}
                       </div>
                       <div className="flex items-center gap-2 text-sm text-muted-foreground">
                         <MapPin className="w-4 h-4 text-secondary" />
                         {conf.location}
                       </div>
                       <div className="flex items-center gap-2 text-sm text-muted-foreground">
                         <Users className="w-4 h-4 text-secondary" />
                         {conf.attendees} Attendees
                       </div>
                     </div>
                     <div className="flex gap-2">
                       {conf.hasRecording && (
                         <Button variant="outline" size="sm" className="flex-1">
                           <PlayCircle className="w-4 h-4 mr-1" />
                           Watch
                         </Button>
                       )}
                       {conf.hasProceedings && (
                         <Button variant="outline" size="sm" className="flex-1" asChild>
                           <Link to="/proceedings">
                             <FileText className="w-4 h-4 mr-1" />
                             Papers
                           </Link>
                         </Button>
                       )}
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
 
 export default RecentConferences;