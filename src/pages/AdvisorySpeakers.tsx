import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { GraduationCap } from 'lucide-react';

import advisor1 from '@/assets/advisors/advisor-1.png';
import advisor2 from '@/assets/advisors/advisor-2.png';
import advisor3 from '@/assets/advisors/advisor-3.png';
import advisor4 from '@/assets/advisors/advisor-4.png';
import advisor5 from '@/assets/advisors/advisor-5.png';

const advisors = [
  {
    name: 'Dr. Joe Perez',
    affiliation: 'Senior Systems Specialist/Team Leader, NC Dept of Health & Human Services, United States',
    image: advisor2,
  },
  {
    name: 'Dr. Firas Zeidan',
    affiliation: 'Researcher and Professor, Lebanon',
    image: advisor3,
  },
  {
    name: 'Mr. Rakesh Ramakrishna Pai',
    affiliation: 'Independent Researcher, Franklin, TN, USA',
    image: advisor5,
  },
  {
    name: 'Dr. Walida Ounruean',
    affiliation: 'Curriculum and Instruction, Faculty of Education, Uttaradit Rajabhat University, Thailand',
    image: advisor1,
  },
  {
    name: 'Yesha Patel',
    affiliation: 'Senior Solution Architect, United States',
    image: advisor4,
  },
];

const AdvisorySpeakers = () => {
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
              Advisory <span className="text-gradient">Members</span>
            </h1>
            <p className="text-xl text-primary-foreground/70">
              Dedication. Expertise. Passion.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Advisors Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {advisors.map((advisor, index) => (
              <motion.div
                key={advisor.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="h-full rounded-2xl bg-card border border-border hover:border-secondary/50 hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="relative w-full aspect-square overflow-hidden">
                    <img
                      src={advisor.image}
                      alt={advisor.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-display text-base font-bold text-foreground group-hover:text-secondary transition-colors mb-1">
                      {advisor.name}
                    </h3>
                    <div className="flex items-start gap-1.5 text-xs text-muted-foreground">
                      <GraduationCap className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-secondary" />
                      <span>{advisor.affiliation}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Join Our Advisory Board
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Are you an industry leader or renowned academic? We're always looking for exceptional advisors to guide our programs.
            </p>
            <Button asChild size="lg" className="bg-gradient-to-r from-secondary to-accent hover:opacity-90">
              <Link to="/contact">Apply to Join</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default AdvisorySpeakers;
