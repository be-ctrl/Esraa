'use client'

import { motion } from 'framer-motion'
import confetti from 'canvas-confetti'
import { useEffect } from 'react'

export default function Component() {
  useEffect(() => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    })
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl w-full bg-white rounded-lg shadow-2xl overflow-hidden"
      >
        <div className="p-8 text-center">
          <motion.h1
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
            className="text-4xl font-bold text-purple-600 mb-4"
          >
            عيد ميلاد سعيد يا إسراء أسامة!
          </motion.h1>
          <motion.div
            className="w-48 h-48 mx-auto mb-6 rounded-full shadow-lg overflow-hidden"
            initial={{ rotate: -180, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20241017_153330_573-ww3AI2I1EM9GTDxdUM2w13jBwJQyDG.jpg"
              alt="Esraa's Portrait"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="text-lg text-gray-700 mb-6 leading-relaxed"
          >
            في هذا اليوم المميز، نحتفل بوجودك في حياتنا يا إسراء. أنتِ نور يضيء أيامنا وابتسامة تملأ قلوبنا بالفرح. جمالك الداخلي ينعكس في عينيكِ اللتين تشعان بالحياة والأمل. كل عام وأنتِ بألف خير، مليئة بالحب والسعادة والنجاح. أتمنى لكِ عامًا مليئًا بالإنجازات والذكريات الجميلة.
          </motion.p>
          <motion.div
            className="flex justify-center space-x-4"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          >
            {['🎉', '🎂', '🎁', '🎈'].map((emoji, index) => (
              <motion.span
                key={index}
                className="text-4xl"
                animate={{ y: [0, -20, 0] }}
                transition={{ repeat: Infinity, duration: 1, delay: index * 0.2 }}
              >
                {emoji}
              </motion.span>
            ))}
          </motion.div>
        </div>
        <motion.div
          className="bg-purple-100 p-6 text-center"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
        >
          <p className="text-purple-600 font-semibold">نتمنى لكِ يومًا رائعًا مليئًا بالحب والفرح، يا إسراء!</p>
        </motion.div>
      </motion.div>
    </div>
  )
                               }
