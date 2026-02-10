 import { motion } from 'framer-motion';
 import { Layout } from '@/components/layout/Layout';
 import { Button } from '@/components/ui/button';
 import { Input } from '@/components/ui/input';
 import { FileText, Download, Search, BookOpen, Calendar, User } from 'lucide-react';
 
 const proceedings = [
   {
     title: 'Advances in Deep Learning: A Comprehensive Survey',
     authors: 'Dr. Sarah Chen, Prof. Michael Roberts',
     conference: 'AI & Machine Learning Summit 2025',
     year: '2025',
     pages: '45',
     doi: '10.1234/aiml.2025.001',
   },
   {
     title: 'Quantum Computing Applications in Cryptography',
     authors: 'Dr. Emily Johnson, James Anderson',
     conference: 'Cybersecurity Excellence Conference 2025',
     year: '2025',
     pages: '32',
     doi: '10.1234/cyber.2025.015',
   },
   {
     title: 'Edge Computing: Challenges and Opportunities',
     authors: 'Prof. David Lee, Dr. Lisa Wang',
     conference: 'Cloud Computing Forum 2025',
     year: '2025',
     pages: '28',
     doi: '10.1234/cloud.2025.008',
   },
   {
     title: 'Natural Language Processing in Healthcare',
     authors: 'Dr. Robert Martinez, Dr. Jennifer Kim',
     conference: 'Healthcare Innovation Conference 2024',
     year: '2024',
     pages: '38',
     doi: '10.1234/health.2024.022',
   },
   {
     title: 'Sustainable AI: Green Computing Paradigms',
     authors: 'Prof. Mark Thompson, Dr. Anna Wilson',
     conference: 'Sustainable Technology Summit 2024',
     year: '2024',
     pages: '41',
     doi: '10.1234/sustain.2024.003',
   },
   {
     title: 'Federated Learning: Privacy-Preserving ML',
     authors: 'Dr. Kevin Brown, Prof. Michelle Davis',
     conference: 'International Data Science Conference 2025',
     year: '2025',
     pages: '35',
     doi: '10.1234/data.2025.011',
   },
 ];
 
 const Proceedings = () => {
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
               Conference <span className="text-gradient">Proceedings</span>
             </h1>
             <p className="text-xl text-primary-foreground/70 mb-8">
               Access peer-reviewed research papers, technical reports, and academic publications from our conferences.
             </p>
             <div className="max-w-xl mx-auto relative">
               <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
               <Input
                 placeholder="Search proceedings by title, author, or keyword..."
                 className="pl-12 h-14 bg-primary-foreground text-foreground rounded-xl"
               />
             </div>
           </motion.div>
         </div>
       </section>
 
       {/* Stats */}
       <section className="py-12 bg-muted/50">
         <div className="container-custom">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
             {[
               { value: '2,500+', label: 'Published Papers' },
               { value: '850+', label: 'Contributing Authors' },
               { value: '45+', label: 'Conference Volumes' },
               { value: '120K+', label: 'Downloads' },
             ].map((stat, index) => (
               <motion.div
                 key={stat.label}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: index * 0.1 }}
                 className="text-center"
               >
                 <div className="font-display text-3xl font-bold text-foreground">{stat.value}</div>
                 <div className="text-sm text-muted-foreground">{stat.label}</div>
               </motion.div>
             ))}
           </div>
         </div>
       </section>
 
       {/* Proceedings List */}
       <section className="section-padding">
         <div className="container-custom">
           <div className="space-y-4">
             {proceedings.map((paper, index) => (
               <motion.div
                 key={paper.title}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: index * 0.05 }}
                 className="group"
               >
                 <div className="p-6 rounded-xl bg-card border border-border hover:border-secondary/50 hover:shadow-lg transition-all duration-300">
                   <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                     <div className="flex-1">
                       <div className="flex items-start gap-4">
                         <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                           <FileText className="w-6 h-6 text-secondary" />
                         </div>
                         <div>
                           <h3 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-secondary transition-colors">
                             {paper.title}
                           </h3>
                           <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                             <span className="flex items-center gap-1">
                               <User className="w-4 h-4" />
                               {paper.authors}
                             </span>
                             <span className="flex items-center gap-1">
                               <BookOpen className="w-4 h-4" />
                               {paper.conference}
                             </span>
                             <span className="flex items-center gap-1">
                               <Calendar className="w-4 h-4" />
                               {paper.year}
                             </span>
                           </div>
                           <div className="mt-2 text-xs text-muted-foreground">
                             DOI: {paper.doi} • {paper.pages} pages
                           </div>
                         </div>
                       </div>
                     </div>
                     <div className="flex gap-2 lg:flex-shrink-0">
                       <Button variant="outline" size="sm">
                         View
                       </Button>
                       <Button size="sm" className="bg-gradient-to-r from-secondary to-accent hover:opacity-90">
                         <Download className="w-4 h-4 mr-1" />
                         PDF
                       </Button>
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
 
 export default Proceedings;