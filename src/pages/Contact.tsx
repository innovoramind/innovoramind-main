 import { motion } from 'framer-motion';
 import { Layout } from '@/components/layout/Layout';
 import { Button } from '@/components/ui/button';
 import { Input } from '@/components/ui/input';
 import { Label } from '@/components/ui/label';
 import { Textarea } from '@/components/ui/textarea';
 import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
 
 const Contact = () => {
   return (
     <Layout>
       <section className="hero-gradient py-20 lg:py-28">
         <div className="container-custom">
           <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-4xl mx-auto">
             <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
               Contact <span className="text-gradient">Us</span>
             </h1>
             <p className="text-xl text-primary-foreground/70">Get in touch with our team</p>
           </motion.div>
         </div>
       </section>
       <section className="section-padding">
         <div className="container-custom">
           <div className="grid lg:grid-cols-2 gap-12">
             <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
               <h2 className="font-display text-3xl font-bold text-foreground mb-6">Get In Touch</h2>
               <div className="space-y-6">
                 <div className="flex items-start gap-4"><MapPin className="w-6 h-6 text-secondary mt-1" /><div><h3 className="font-semibold text-foreground">Address</h3><p className="text-muted-foreground">123 Innovation Drive, Suite 500<br/>San Francisco, CA 94105, USA</p></div></div>
                 <div className="flex items-start gap-4"><Mail className="w-6 h-6 text-secondary mt-1" /><div><h3 className="font-semibold text-foreground">Email</h3><p className="text-muted-foreground"><div className="flex items-start gap-4"><Mail className="w-6 h-6 text-secondary mt-1" /><div><h3 className="font-semibold text-foreground">Email</h3><p className="text-muted-foreground">info@innovoramind.com</p></div></div></p></div></div>
                 <div className="flex items-start gap-4"><Phone className="w-6 h-6 text-secondary mt-1" /><div><h3 className="font-semibold text-foreground">Phone</h3><p className="text-muted-foreground">+1 (415) 555-1234</p></div></div>
               </div>
             </motion.div>
             <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="p-8 rounded-2xl bg-card border border-border">
               <form className="space-y-6">
                 <div className="grid sm:grid-cols-2 gap-4"><div className="space-y-2"><Label>Name</Label><Input placeholder="Your name" /></div><div className="space-y-2"><Label>Email</Label><Input type="email" placeholder="you@example.com" /></div></div>
                 <div className="space-y-2"><Label>Subject</Label><Input placeholder="How can we help?" /></div>
                 <div className="space-y-2"><Label>Message</Label><Textarea rows={5} placeholder="Your message..." /></div>
                 <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-secondary to-accent hover:opacity-90">Send Message<ArrowRight className="ml-2 w-5 h-5" /></Button>
               </form>
             </motion.div>
           </div>
         </div>
       </section>
     </Layout>
   );
 };
 
 export default Contact;