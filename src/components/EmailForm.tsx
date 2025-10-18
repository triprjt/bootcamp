'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Mail, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';

interface FormData {
  email: string;
}

interface EmailFormProps {
  onSuccess: () => void;
  variant?: 'default' | 'hero' | 'cta';
}

export default function EmailForm({ onSuccess, variant = 'default' }: EmailFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        reset();
        onSuccess();
      } else {
        setError(result.error || 'Something went wrong');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getVariantStyles = () => {
    switch (variant) {
      case 'hero':
        return {
          container: 'w-full max-w-lg mx-auto',
          card: 'bg-white/10 backdrop-blur-sm border-white/20',
          input: 'bg-white/20 border-white/30 text-white placeholder:text-white/70',
          button: 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white'
        };
      case 'cta':
        return {
          container: 'w-full max-w-md mx-auto',
          card: 'bg-white shadow-xl',
          input: 'bg-white border-gray-300',
          button: 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white'
        };
      default:
        return {
          container: 'w-full max-w-md mx-auto',
          card: 'bg-white shadow-lg',
          input: 'bg-white border-gray-300',
          button: 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white'
        };
    }
  };

  const styles = getVariantStyles();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={styles.container}
    >
      <Card className={styles.card}>
        <CardContent className="p-6">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className={variant === 'hero' ? 'text-white' : 'text-gray-700'}>
                Email Address
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })}
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  className={`pl-10 ${styles.input}`}
                  disabled={isSubmitting}
                />
              </div>
            </div>
            
            {errors.email && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center text-red-600 text-sm"
              >
                <AlertCircle className="h-4 w-4 mr-2" />
                {errors.email.message}
              </motion.div>
            )}

            {error && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center text-red-600 text-sm"
              >
                <AlertCircle className="h-4 w-4 mr-2" />
                {error}
              </motion.div>
            )}

            <Button
              type="submit"
              disabled={isSubmitting}
              className={`w-full ${styles.button} h-12 text-lg font-semibold`}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Subscribing...
                </>
              ) : (
                'Reserve Your Spot Now'
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
}
