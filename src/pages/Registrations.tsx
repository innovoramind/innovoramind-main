 import { motion } from 'framer-motion';
 import { Layout } from '@/components/layout/Layout';
 import { Button } from '@/components/ui/button';
 import { Input } from '@/components/ui/input';
 import { Label } from '@/components/ui/label';
 import { Check, Star, Zap, Crown, ArrowRight } from 'lucide-react';
 
 const plans = [
   {
     name: 'Basic',
     price: '$299',
     period: 'per conference',
     icon: Star,
     description: 'Perfect for individual attendees',
     features: [
       'Full conference access',
       'Session recordings',
       'Digital materials',
       'Networking app access',
       'Certificate of attendance',
     ],
     popular: false,
   },
   {
     name: 'Professional',
     price: '$599',
     period: 'per conference',
     icon: Zap,
     description: 'Best for active participants',
     features: [
       'Everything in Basic',
       'VIP seating',
       'Speaker meet & greet',
       'Workshop access',
       'Exclusive networking dinner',
       '1-year proceedings access',
     ],
     popular: true,
   },
   {
     name: 'Enterprise',
     price: '$1,999',
     period: 'per team of 5',
     icon: Crown,
     description: 'For organizations & teams',
     features: [
       'Everything in Professional',
       '5 team member passes',
       'Private meeting room',
       'Exhibition booth discount',
       'Custom branding options',
       'Dedicated account manager',
       'Priority support',
     ],
     popular: false,
   },
 ];
 
 const Registrations = () => {
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
             <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-primary-foreground/90 mb-6">
               <Zap className="w-4 h-4 text-accent" />
               Early Bird: Save up to 30%
             </span>
             <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
               Register <span className="text-gradient">Now</span>
             </h1>
             <p className="text-xl text-primary-foreground/70">
               Secure your spot at our upcoming conferences and unlock exclusive benefits, networking opportunities, and world-class content.
             </p>
           </motion.div>
         </div>
       </section>
 
       {/* Pricing Plans */}
       <section className="section-padding">
         <div className="container-custom">
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-center mb-12"
           >
             <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
               Choose Your Pass
             </h2>
             <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
               Select the registration tier that best fits your needs
             </p>
           </motion.div>
 
           <div className="grid md:grid-cols-3 gap-8">
             {plans.map((plan, index) => (
               <motion.div
                 key={plan.name}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: index * 0.1 }}
                 className="relative group"
               >
                 {plan.popular && (
                   <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-secondary to-accent text-secondary-foreground text-sm font-semibold rounded-full z-10">
                     Most Popular
                   </div>
                 )}
                 <div className={`h-full p-8 rounded-2xl border-2 transition-all duration-300 ${
                   plan.popular 
                     ? 'bg-card border-secondary shadow-xl scale-105' 
                     : 'bg-card border-border hover:border-secondary/50 hover:shadow-lg'
                 }`}>
                   <div className="flex items-center gap-3 mb-4">
                     <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                       plan.popular 
                         ? 'bg-gradient-to-br from-secondary to-accent' 
                         : 'bg-muted'
                     }`}>
                       <plan.icon className={`w-6 h-6 ${plan.popular ? 'text-secondary-foreground' : 'text-foreground'}`} />
                     </div>
                     <div>
                       <h3 className="font-display text-xl font-bold text-foreground">{plan.name}</h3>
                       <p className="text-sm text-muted-foreground">{plan.description}</p>
                     </div>
                   </div>
 
                   <div className="mb-6">
                     <span className="font-display text-4xl font-bold text-foreground">{plan.price}</span>
                     <span className="text-muted-foreground ml-2">{plan.period}</span>
                   </div>
 
                   <ul className="space-y-3 mb-8">
                     {plan.features.map((feature, i) => (
                       <li key={i} className="flex items-start gap-2">
                         <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                         <span className="text-sm text-foreground">{feature}</span>
                       </li>
                     ))}
                   </ul>
 
                   <Button 
                     className={`w-full ${
                       plan.popular 
                         ? 'bg-gradient-to-r from-secondary to-accent hover:opacity-90' 
                         : ''
                     }`}
                     variant={plan.popular ? 'default' : 'outline'}
                   >
                     Get Started
                     <ArrowRight className="ml-2 w-4 h-4" />
                   </Button>
                 </div>
               </motion.div>
             ))}
           </div>
         </div>
       </section>
 
       {/* Registration Form */}
       <section className="section-padding bg-muted/50">
         <div className="container-custom">
           <div className="max-w-2xl mx-auto">
             <motion.div
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-center mb-12"
             >
               <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
                 Quick Registration
               </h2>
               <p className="text-muted-foreground text-lg">
                 Fill out the form below and our team will contact you
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
                     <Label htmlFor="firstName">First Name</Label>
                     <Input id="firstName" placeholder="John" />
                   </div>
                   <div className="space-y-2">
                     <Label htmlFor="lastName">Last Name</Label>
                     <Input id="lastName" placeholder="Doe" />
                   </div>
                 </div>
                 <div className="space-y-2">
                   <Label htmlFor="email">Email Address</Label>
                   <Input id="email" type="email" placeholder="john@example.com" />
                 </div>
                 <div className="space-y-2">
                   <Label htmlFor="organization">Organization</Label>
                   <Input id="organization" placeholder="Company or University" />
                 </div>
                 <div className="space-y-2">
                   <Label htmlFor="phone">Phone Number</Label>
                   <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" />
                 </div>
                 <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-secondary to-accent hover:opacity-90">
                   Submit Registration
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
 
 export default Registrations;