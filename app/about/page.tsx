'use client'

import { motion } from 'framer-motion'
import { FiAward, FiUsers, FiLayers, FiCode, FiMail, FiPhone, FiBriefcase, FiChevronRight } from 'react-icons/fi'
import Image from 'next/image'

const AboutPage = () => {
  // Premium statistics data
  const stats = [
    { 
      value: '50+', 
      label: 'Successful Projects', 
      icon: <FiBriefcase className="text-3xl" />,
      description: 'Global clients served'
    },
    { 
      value: '3+', 
      label: 'Years Excellence', 
      icon: <FiAward className="text-3xl" />,
      description: 'Award-winning designs'
    },
    { 
      value: '390+', 
      label: 'Client Testimonials', 
      icon: <FiUsers className="text-3xl" />,
      description: '5-star rated experiences'
    },
    { 
      value: '98%', 
      label: 'Retention Rate', 
      icon: <FiCode className="text-3xl" />,
      description: 'Repeat business'
    }
  ]

  // Premium CEO/Founder section
  const ceo = {
    name: 'Mosabbir Hossain',
    title: 'Founder & Creative Director',
    image: '/developer.png',
    bio: 'Visionary leader with a decade of experience transforming brands through strategic design. Our studio was founded on the principle that exceptional design should be both beautiful and functional, delivering measurable business results.',
    achievements: [
      'Forbes 30 Under 30 Design',
      'Awwwards Hall of Fame',
      '500+ successful projects',
      'Keynote speaker at Design Summit'
    ],
    contact: {
      email: 'saidee@premiumdesign.co',
      phone: '+1 (555) 123-4567'
    }
  }

  const approachItems = [
    {
      title: "Bespoke Design Solutions",
      description: "Tailored interfaces crafted for your unique business objectives and audience needs, ensuring perfect alignment with your brand identity.",
      icon: <FiUsers className="text-gold-500 text-3xl" />
    },
    {
      title: "Strategic Innovation",
      description: "Data-driven design decisions that deliver measurable business impact through rigorous user research and testing methodologies.",
      icon: <FiLayers className="text-gold-500 text-3xl" />
    },
    {
      title: "Technical Mastery",
      description: "Flawless execution across all platforms and devices with pixel-perfect attention to detail and cutting-edge technologies.",
      icon: <FiCode className="text-gold-500 text-3xl" />
    }
  ]

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* CEO Spotlight - Premium Redesign */}
      <section className="py-28 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* CEO Portrait - Enhanced */}
            <motion.div 
              className="lg:w-1/2 relative"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl group">
                <Image
                  src={ceo.image}
                  alt={`Professional portrait of ${ceo.name}`}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
                <div className="absolute inset-0 border-8 border-white/10 rounded-3xl pointer-events-none" />
              </div>
              
              {/* Enhanced Name Tag */}
              <motion.div 
                className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-700 z-10"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-8 bg-gold-500 rounded-full"></div>
                  <div>
                    <h3 className="text-2xl font-bold dark:text-white">{ceo.name}</h3>
                    <p className="text-gold-500 font-medium">{ceo.title}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* CEO Bio - Premium Styling */}
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="mb-10">
                <span className="text-gold-500 font-medium uppercase tracking-widest text-sm">Leadership</span>
                <h2 className="text-4xl font-bold mb-6 dark:text-white font-serif mt-2">Founder&apos;s Vision</h2>
                <div className="h-1 w-20 bg-gold-500 mb-8"></div>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  {ceo.bio}
                </p>
              </div>
              
              <div className="mb-10 bg-gray-50 dark:bg-gray-800 p-8 rounded-xl border border-gray-100 dark:border-gray-700">
                <h4 className="text-xl font-semibold mb-4 dark:text-white flex items-center gap-2">
                  <FiAward className="text-gold-500" /> Notable Achievements
                </h4>
                <ul className="space-y-3">
                  {ceo.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-gold-500 mr-3 mt-1">✦</span>
                      <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-lg font-medium hover:opacity-90 transition-all flex items-center gap-3 shadow-lg"
                >
                  <FiMail className="text-lg" /> 
                  <span>Email {ceo.name.split(' ')[0]}</span>
                </motion.button>
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="border-2 border-gray-200 dark:border-gray-600 px-8 py-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all flex items-center gap-3"
                >
                  <FiPhone className="text-lg" />
                  <span>Call Our Studio</span>
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Design Philosophy - Premium Section */}
      <section className="py-28 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-gold-500 font-medium uppercase tracking-widest text-sm">Methodology</span>
            <h2 className="text-4xl font-bold mb-4 dark:text-white font-serif mt-3">Our Design Philosophy</h2>
            <div className="flex justify-center">
              <div className="h-1 w-20 bg-gold-500"></div>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mt-6">
              The principles that guide our creative process
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {approachItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-gray-800 p-10 rounded-2xl hover:shadow-xl transition-all border border-gray-100 dark:border-gray-700 group"
              >
                <div className="text-gold-500 mb-6 flex items-center justify-center w-16 h-16 bg-white dark:bg-gray-700 rounded-full shadow-sm group-hover:bg-gold-500 group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 dark:text-white">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                <div className="mt-6">
                  <button className="text-gold-500 hover:text-gold-600 font-medium flex items-center gap-2 transition-colors">
                    Learn more <FiChevronRight />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics - Premium Display */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100 dark:border-gray-700 group"
              >
                <div className="text-gold-500 mb-4 flex justify-center">
                  <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-full group-hover:bg-gold-500 group-hover:text-white transition-colors">
                    {stat.icon}
                  </div>
                </div>
                <h3 className="text-5xl font-bold mb-3 text-gray-900 dark:text-white font-serif">
                  {stat.value}
                </h3>
                <p className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {stat.label}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage