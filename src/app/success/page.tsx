'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Calendar, Clock, Users, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto text-center"
      >
        {/* Success Animation */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ 
            type: "spring", 
            stiffness: 200, 
            damping: 15,
            delay: 0.2 
          }}
          className="mb-8"
        >
          <div className="relative">
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3
              }}
              className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <CheckCircle className="w-12 h-12 text-green-600" />
            </motion.div>
            
            {/* Confetti Animation */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ 
                  opacity: 0,
                  scale: 0,
                  x: 0,
                  y: 0
                }}
                animate={{ 
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                  x: Math.cos(i * 60 * Math.PI / 180) * 100,
                  y: Math.sin(i * 60 * Math.PI / 180) * 100
                }}
                transition={{ 
                  duration: 1.5,
                  delay: 0.5 + i * 0.1,
                  ease: "easeOut"
                }}
                className="absolute w-2 h-2 bg-yellow-400 rounded-full"
                style={{
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)'
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Success Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            🎉 You're In!
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Welcome to the AI Bootcamp! You've successfully reserved your spot for our FREE webinar.
          </p>
        </motion.div>

        {/* Webinar Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <Card className="mb-8 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-gray-900">
                📅 Webinar Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-center text-lg text-gray-700">
                  <Calendar className="w-5 h-5 mr-3 text-blue-600" />
                  <span className="font-semibold">This Sunday</span>
                </div>
                
                <div className="flex items-center justify-center text-lg text-gray-700">
                  <Clock className="w-5 h-5 mr-3 text-blue-600" />
                  <span className="font-semibold">11:00 AM IST</span>
                </div>
                
                <div className="flex items-center justify-center text-lg text-gray-700">
                  <Users className="w-5 h-5 mr-3 text-blue-600" />
                  <span className="font-semibold">Live Zoom Session</span>
                </div>
              </div>

              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-4">
                  <p className="text-sm text-blue-800">
                    <strong>What's Next:</strong> You'll receive a confirmation email with the Zoom link and calendar invite within the next few minutes. 
                    We'll also send you a reminder 24 hours before the webinar.
                  </p>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="space-y-4"
        >
          <Button asChild className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl">
            <Link href="/">
              <ArrowRight className="w-5 h-5 mr-2" />
              Back to Landing Page
            </Link>
          </Button>
          
          <p className="text-sm text-gray-500">
            Questions? Reply to the confirmation email or contact us directly.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
