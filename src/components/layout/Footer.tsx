import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Youtube, Facebook } from 'lucide-react';
import logo from '@/assets/logo.png';
import seal from '@/assets/seal.png';

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
      <footer className="hero-gradient text-primary-foreground">
        <div className="container-custom py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="space-y-6">
              <Link to="/" className="flex items-center gap-2">
                <img src={logo} alt="InnovoraMind Logo" className="w-10 h-10 rounded-full object-cover" />
                <span className="font-display font-bold text-xl">
                   InnovoraMind
                </span>
              </Link>
              <p className="text-primary-foreground/70 text-sm leading-relaxed">
                A premier New Mexico-based enterprise delivering world-class conferences, research innovations, and technology solutions across 10 major business domains.
              </p>
              {/* Company Seal */}
              <div className="flex items-center gap-3 pt-2">
                <img src={seal} alt="InnovoraMind LLC - New Mexico LLC Formation, ISO 9001:2015 | ISO/IEC 27001:2022" className="w-20 h-20 object-contain rounded-lg bg-white/10 p-1" />
                <div className="text-xs text-primary-foreground/60 leading-relaxed">
                  <p className="font-semibold text-primary-foreground/80">InnovoraMind LLC</p>
                  <p>ISO 9001:2015 | ISO/IEC 27001:2022</p>
                  <p>New Mexico LLC Formation</p>
                </div>
              </div>
              <div className="flex gap-4">
               <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-secondary flex items-center justify-center transition-colors">
                 <Linkedin className="w-5 h-5" />
               </a>
               <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-secondary flex items-center justify-center transition-colors">
                 <Twitter className="w-5 h-5" />
               </a>
               <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-secondary flex items-center justify-center transition-colors">
                 <Youtube className="w-5 h-5" />
               </a>
               <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-secondary flex items-center justify-center transition-colors">
                 <Facebook className="w-5 h-5" />
               </a>
             </div>
           </div>
 
           {/* Quick Links */}
           <div>
             <h4 className="font-display font-semibold text-lg mb-6">Quick Links</h4>
             <ul className="space-y-3">
               {['Upcoming Conferences', 'Past Speakers', 'Proceedings', 'Registrations', 'Innovation Challenge'].map((item) => (
                 <li key={item}>
                   <Link 
                     to={`/${item.toLowerCase().replace(/ /g, '-')}`}
                     className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm"
                   >
                     {item}
                   </Link>
                 </li>
               ))}
             </ul>
           </div>
 
           {/* Resources */}
           <div>
             <h4 className="font-display font-semibold text-lg mb-6">Resources</h4>
             <ul className="space-y-3">
               {['Books', 'Share Your Story', 'About Us', 'Contact', 'Advisory Speakers'].map((item) => (
                 <li key={item}>
                   <Link 
                     to={`/${item.toLowerCase().replace(/ /g, '-')}`}
                     className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm"
                   >
                     {item}
                   </Link>
                 </li>
               ))}
             </ul>
           </div>
 
           {/* Contact */}
           <div>
             <h4 className="font-display font-semibold text-lg mb-6">Contact Us</h4>
             <ul className="space-y-4">
               <li className="flex items-start gap-3">
                 <MapPin className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                 <span className="text-primary-foreground/70 text-sm">
                   123 Innovation Drive, Suite 500<br />
                   San Francisco, CA 94105, USA
                 </span>
               </li>
               <li className="flex items-center gap-3">
                 <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
                  <a href="mailto:info@innovoramind.com" className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm">
                    info@innovoramind.com
                 </a>
               </li>
               <li className="flex items-center gap-3">
                 <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                 <a href="tel:+14155551234" className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm">
                   +1 (415) 555-1234
                 </a>
               </li>
             </ul>
           </div>
         </div>
 
         {/* Bottom Bar */}
         <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
           <p className="text-primary-foreground/60 text-sm">
             © {currentYear} InnovoraMind. All rights reserved.
           </p>
           <div className="flex gap-6">
             <a href="#" className="text-primary-foreground/60 hover:text-secondary transition-colors text-sm">
               Privacy Policy
             </a>
             <a href="#" className="text-primary-foreground/60 hover:text-secondary transition-colors text-sm">
               Terms of Service
             </a>
             <a href="#" className="text-primary-foreground/60 hover:text-secondary transition-colors text-sm">
               Cookie Policy
             </a>
           </div>
         </div>
       </div>
     </footer>
   );
 };