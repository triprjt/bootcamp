'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import {
  CheckCircle,
  Star,
  Users,
  Code,
  Rocket,
  Award,
  ArrowRight,
  Clock,
  Calendar,
  Zap,
  Check
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import EmailForm from '@/components/EmailForm';
import HeroSVG from '@/components/HeroSVG';
import Hero from '@/components/Hero';
import CTASection from '@/components/CTASection';
import BootcampCard from '@/components/BootcampCard';
import connectDB from '@/app/config/db';
import { useEffect } from 'react';

export default function Home() {
  const [showSuccess, setShowSuccess] = useState(false);
  const router = useRouter();

  useEffect(() => {
    
    const checkDBConnection = async () => {
      const db = await connectDB();
      if (db) {
        setShowSuccess(true);
      }
    }
    checkDBConnection();
  }, []);


  if (showSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="text-center"
        >
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
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Success!</h2>
          <p className="text-gray-600">Redirecting to confirmation page...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-white">
      {/* Hero Section */}
      <Hero/>
      <BootcampCard/>
      <CTASection/>  
    </div>
  );
}