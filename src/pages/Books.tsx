 import { motion } from 'framer-motion';
 import { Layout } from '@/components/layout/Layout';
 import { Button } from '@/components/ui/button';
 import { ShoppingCart, BookOpen, Star, ExternalLink } from 'lucide-react';
 
 const books = [
   {
     title: 'The Future of AI: A Comprehensive Guide',
     author: 'Dr. Sarah Chen & Prof. Michael Roberts',
     cover: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&q=80',
     price: '$49.99',
     rating: 4.9,
     reviews: 234,
     category: 'Artificial Intelligence',
     description: 'An in-depth exploration of AI technologies and their impact on society, business, and the future of work.',
   },
   {
     title: 'Digital Transformation Playbook',
     author: 'James Anderson',
     cover: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400&q=80',
     price: '$39.99',
     rating: 4.7,
     reviews: 189,
     category: 'Business Technology',
     description: 'A practical guide to leading digital transformation initiatives in modern enterprises.',
   },
   {
     title: 'Research Methods in the Digital Age',
     author: 'Prof. David Lee',
     cover: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&q=80',
     price: '$54.99',
     rating: 4.8,
     reviews: 156,
     category: 'Research',
     description: 'Modern approaches to research methodology leveraging technology and data analytics.',
   },
   {
     title: 'Cloud Architecture Patterns',
     author: 'Dr. Lisa Wang',
     cover: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&q=80',
     price: '$44.99',
     rating: 4.6,
     reviews: 142,
     category: 'Cloud Computing',
     description: 'Essential patterns and best practices for building scalable cloud-native applications.',
   },
   {
     title: 'Innovation Management',
     author: 'Dr. Emily Johnson',
     cover: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&q=80',
     price: '$42.99',
     rating: 4.8,
     reviews: 178,
     category: 'Innovation',
     description: 'Strategies for fostering innovation culture and managing R&D in competitive markets.',
   },
   {
     title: 'Cybersecurity Fundamentals',
     author: 'Robert Martinez',
     cover: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&q=80',
     price: '$47.99',
     rating: 4.7,
     reviews: 201,
     category: 'Security',
     description: 'A comprehensive guide to protecting digital assets and building secure systems.',
   },
 ];
 
 const Books = () => {
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
               Our <span className="text-gradient">Publications</span>
             </h1>
             <p className="text-xl text-primary-foreground/70">
               Explore our collection of books, guides, and educational materials authored by world-renowned experts.
             </p>
           </motion.div>
         </div>
       </section>
 
       {/* Books Grid */}
       <section className="section-padding">
         <div className="container-custom">
           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
             {books.map((book, index) => (
               <motion.div
                 key={book.title}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: index * 0.1 }}
                 className="group"
               >
                 <div className="h-full rounded-2xl overflow-hidden bg-card border border-border hover:border-secondary/50 hover:shadow-xl transition-all duration-300">
                   <div className="relative h-64 overflow-hidden bg-muted p-8 flex items-center justify-center">
                     <img
                       src={book.cover}
                       alt={book.title}
                       className="h-full w-auto object-contain rounded-lg shadow-xl group-hover:scale-105 transition-transform duration-500"
                     />
                     <div className="absolute top-4 left-4">
                       <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold">
                         {book.category}
                       </span>
                     </div>
                   </div>
                   <div className="p-6">
                     <h3 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-secondary transition-colors">
                       {book.title}
                     </h3>
                     <p className="text-sm text-muted-foreground mb-2">{book.author}</p>
                     <div className="flex items-center gap-2 mb-3">
                       <div className="flex items-center gap-1">
                         <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                         <span className="text-sm font-medium text-foreground">{book.rating}</span>
                       </div>
                       <span className="text-sm text-muted-foreground">({book.reviews} reviews)</span>
                     </div>
                     <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{book.description}</p>
                     <div className="flex items-center justify-between">
                       <span className="font-display text-2xl font-bold text-foreground">{book.price}</span>
                       <div className="flex gap-2">
                         <Button variant="outline" size="sm">
                           <BookOpen className="w-4 h-4 mr-1" />
                           Preview
                         </Button>
                         <Button size="sm" className="bg-gradient-to-r from-secondary to-accent hover:opacity-90">
                           <ShoppingCart className="w-4 h-4 mr-1" />
                           Buy
                         </Button>
                       </div>
                     </div>
                   </div>
                 </div>
               </motion.div>
             ))}
           </div>
         </div>
       </section>
 
       {/* Author Submission CTA */}
       <section className="section-padding bg-muted/50">
         <div className="container-custom">
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-center max-w-3xl mx-auto"
           >
             <BookOpen className="w-16 h-16 text-secondary mx-auto mb-6" />
             <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
               Become a Published Author
             </h2>
             <p className="text-muted-foreground text-lg mb-8">
               Have expertise to share? Submit your manuscript for consideration and join our network of published authors.
             </p>
             <Button size="lg" className="bg-gradient-to-r from-secondary to-accent hover:opacity-90">
               Submit Manuscript
               <ExternalLink className="ml-2 w-5 h-5" />
             </Button>
           </motion.div>
         </div>
       </section>
     </Layout>
   );
 };
 
 export default Books;