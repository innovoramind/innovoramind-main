import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import seal from '@/assets/seal.png';
const mainNavItems = [{
  label: 'Home',
  path: '/'
}, {
  label: 'Innovation Challenge',
  path: '/innovation-challenge'
}, {
  label: 'Upcoming Conferences',
  path: '/upcoming-conferences'
}, {
  label: 'Recent Conferences',
  path: '/recent-conferences'
}, {
  label: 'Proceedings',
  path: '/proceedings'
}, {
  label: 'Past Speakers',
  path: '/past-speakers'
}, {
  label: 'Advisory Speakers',
  path: '/advisory-speakers'
}, {
  label: 'Registrations',
  path: '/registrations'
}];
const moreNavItems = [{
  label: 'Books',
  path: '/books'
}, {
  label: 'Share Your Story',
  path: '/share-your-story'
}, {
  label: 'About Us',
  path: '/about'
}, {
  label: 'Contact',
  path: '/contact'
}];
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  return <motion.header initial={{
    y: -100
  }} animate={{
    y: 0
  }} transition={{
    duration: 0.6,
    ease: 'easeOut'
  }} className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
    <nav className="container-custom">
      <div className="flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <img src={seal} alt="Logo" className="h-10 w-auto object-contain" />
          <span className="font-display font-bold text-lg text-foreground hidden sm:block">
            Innovora<span className="text-gradient">Mind</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden xl:flex items-center gap-1">
          {mainNavItems.map(item => <Link key={item.path} to={item.path} className={`nav-link ${isActive(item.path) ? 'text-secondary font-semibold' : 'text-foreground/80 hover:text-foreground'}`}>
            {item.label}
          </Link>)}

          {/* More Dropdown */}
          <div className="relative" onMouseEnter={() => setMoreOpen(true)} onMouseLeave={() => setMoreOpen(false)}>
            <button className="nav-link flex items-center gap-1 text-foreground/80 hover:text-foreground">
              More
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${moreOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {moreOpen && <motion.div initial={{
                opacity: 0,
                y: 10,
                scale: 0.95
              }} animate={{
                opacity: 1,
                y: 0,
                scale: 1
              }} exit={{
                opacity: 0,
                y: 10,
                scale: 0.95
              }} transition={{
                duration: 0.2
              }} className="absolute top-full right-0 mt-2 w-48 glass rounded-xl shadow-xl border border-border/50 overflow-hidden">
                {moreNavItems.map(item => <Link key={item.path} to={item.path} className={`block px-4 py-3 text-sm transition-colors ${isActive(item.path) ? 'bg-secondary/10 text-secondary font-medium' : 'text-foreground/80 hover:bg-muted hover:text-foreground'}`}>
                  {item.label}
                </Link>)}
              </motion.div>}
            </AnimatePresence>
          </div>
        </div>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-4">
          <Button asChild variant="default" className="bg-gradient-to-r from-secondary to-accent hover:opacity-90 text-primary-foreground font-semibold px-6">
            <Link to="/registrations">Register Now</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="xl:hidden p-2 rounded-lg hover:bg-muted transition-colors">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && <motion.div initial={{
          opacity: 0,
          height: 0
        }} animate={{
          opacity: 1,
          height: 'auto'
        }} exit={{
          opacity: 0,
          height: 0
        }} transition={{
          duration: 0.3
        }} className="xl:hidden overflow-hidden border-t border-border/50">
          <div className="py-4 space-y-1">
            {[...mainNavItems, ...moreNavItems].map((item, index) => <motion.div key={item.path} initial={{
              opacity: 0,
              x: -20
            }} animate={{
              opacity: 1,
              x: 0
            }} transition={{
              delay: index * 0.05
            }}>
              <Link to={item.path} onClick={() => setIsOpen(false)} className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${isActive(item.path) ? 'bg-secondary/10 text-secondary' : 'text-foreground/80 hover:bg-muted hover:text-foreground'}`}>
                {item.label}
              </Link>
            </motion.div>)}
            <motion.div initial={{
              opacity: 0,
              x: -20
            }} animate={{
              opacity: 1,
              x: 0
            }} transition={{
              delay: 0.6
            }} className="pt-4 px-4">
              <Button asChild className="w-full bg-gradient-to-r from-secondary to-accent hover:opacity-90 text-primary-foreground font-semibold">
                <Link to="/registrations" onClick={() => setIsOpen(false)}>Register Now</Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>}
      </AnimatePresence>
    </nav>
  </motion.header>;
};