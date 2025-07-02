'use client'


import { motion } from 'framer-motion'
import { FiAward, FiUsers, FiLayers, FiCode, FiMail, FiPhone } from 'react-icons/fi'
import Image from 'next/image'

const AboutPage = () => {
  // Statistics data
  const stats = [
    { value: '75+', label: 'Projects Delivered', icon: <FiLayers className="text-2xl" /> },
    { value: '6+', label: 'Years Experience', icon: <FiAward className="text-2xl" /> },
    { value: '98%', label: 'Client Retention', icon: <FiUsers className="text-2xl" /> },
    { value: '40+', label: 'Technologies', icon: <FiCode className="text-2xl" /> }
  ]

  // Team members data with placeholder images
  const team = [
    { 
      name: 'Saidee Hasan', 
      role: 'Founder & Creative Director', 
      image: '/developer.png', // Changed to local path - you should add these images to your public folder
      contact: {
        email: 'info@gmail.com',
        phone: '+1 (555) 123-4567'
      }
    },
    { 
      name: 'Alex Johnson', 
      role: 'Lead UX Designer', 
      image: '/team/alex.jpg',
      contact: {
        email: 'alex@example.com',
        phone: '+1 (555) 234-5678'
      }
    },
    { 
      name: 'Sarah Williams', 
      role: 'UI Developer', 
      image: '/team/sarah.jpg',
      contact: {
        email: 'sarah@example.com',
        phone: '+1 (555) 345-6789'
      }
    },
    { 
      name: 'Michael Chen', 
      role: 'Motion Designer', 
      image: '/team/michael.jpg',
      contact: {
        email: 'michael@example.com',
        phone: '+1 (555) 456-7890'
      }
    }
  ]

  const approachItems = [
    {
      title: "Human-Centered Design",
      description: "We start with deep user research to understand behaviors, needs, and motivations, ensuring our solutions resonate with real people.",
      icon: <FiUsers className="text-primary dark:text-purple-400 text-2xl mb-4" />
    },
    {
      title: "Strategic Thinking",
      description: "Every design decision serves a purpose. We align aesthetics with business objectives to create meaningful impact.",
      icon: <FiLayers className="text-primary dark:text-purple-400 text-2xl mb-4" />
    },
    {
      title: "Technical Excellence",
      description: "Our designs are built to perform. We combine cutting-edge technology with robust architecture for seamless experiences.",
      icon: <FiCode className="text-primary dark:text-purple-400 text-2xl mb-4" />
    }
  ]

  return (
    <section className="section-container py-16 md:py-24 w-9/12 mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-20">
     
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300"
        >
          We are a collective of passionate designers, developers, and strategists dedicated to crafting 
          exceptional digital experiences that drive results. Since our founding in 2018, we`&apos`ve partnered 
          with forward-thinking brands to transform visions into impactful digital solutions.
        </motion.p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.4, duration: 0.5 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md border border-gray-100 dark:border-gray-700 text-center transition-all"
            aria-label={`${stat.value} ${stat.label}`}
          >
            <div className="text-primary dark:text-purple-400 mb-3 flex justify-center" aria-hidden="true">
              {stat.icon}
            </div>
            <h3 className="text-3xl font-bold mb-1 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              {stat.value}
            </h3>
            <p className="text-gray-500 dark:text-gray-400">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Our Story */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-6 dark:text-white">Our Journey</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Founded in 2018 by Tasmina Akter, our agency began as a boutique studio with a simple mission: 
            to create digital experiences that combine aesthetic excellence with functional perfection. 
            What started as a one-person operation has flourished into a multidisciplinary team of 
            award-winning creatives.
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            We`&apos`ve had the privilege of working with startups, Fortune 500 companies, and everything in between, 
            helping them navigate the digital landscape with confidence and creativity.
          </p>
          <div className="flex gap-4">
            <button 
              className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors focus:ring-2 focus:ring-primary focus:ring-offset-2"
              aria-label="View our portfolio"
            >
              Our Portfolio
            </button>
            <button 
              className="border border-gray-300 dark:border-gray-600 px-6 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors focus:ring-2 focus:ring-primary focus:ring-offset-2"
              aria-label="Read client stories"
            >
              Client Stories
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-lg"
        >
          <Image
            src="/about/team-working.jpg" // Changed to local path
            alt="Our team working together in the office"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent" aria-hidden="true" />
        </motion.div>
      </div>

      {/* Our Approach */}
      <div className="bg-gray-50 dark:bg-gray-800/50 rounded-3xl p-8 md:p-12 mb-20 border border-gray-100 dark:border-gray-700">
        <h2 className="text-3xl font-bold mb-8 text-center dark:text-white">Our Design Philosophy</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {approachItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.2, duration: 0.5 }}
              className="bg-white dark:bg-gray-700/30 p-8 rounded-xl border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all"
            >
              <div className="flex justify-center" aria-hidden="true">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center dark:text-white">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Meet the Team */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold mb-12 text-center dark:text-white">Leadership Team</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
              className="group text-center"
            >
              <div className="relative h-72 w-full mb-4 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={member.image}
                  alt={`Portrait of ${member.name}, ${member.role}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  priority={index < 2} // Only prioritize first 2 images
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="text-white text-left">
                    <div className="flex items-center gap-2 mb-1">
                      <FiMail className="w-4 h-4" />
                      <span className="text-sm">{member.contact.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FiPhone className="w-4 h-4" />
                      <span className="text-sm">{member.contact.phone}</span>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold dark:text-white">{member.name}</h3>
              <p className="text-gray-500 dark:text-gray-400">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="bg-gradient-to-r from-primary to-purple-600 rounded-3xl p-12 text-center text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat"></div>
        </div>
        <div className="relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to elevate your digital presence?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-white/90">
            Let`&apos`s collaborate to create something extraordinary. Our team is ready to bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="bg-white text-primary px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
              aria-label="Schedule a consultation"
            >
              Schedule a Consultation
            </button>
            <button 
              className="border border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white/10 transition-colors focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
              aria-label="View case studies"
            >
              View Case Studies
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default AboutPage