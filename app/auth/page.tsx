"use client"

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Mail, Lock, User, Phone, CreditCard, Calendar } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    phone: '',
    childName: '',
    childAge: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    billingZip: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [currentStep, setCurrentStep] = useState(1) // For registration steps

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    if (isLogin) {
      // Handle login
      console.log('Login:', formData.email, formData.password)
      // Redirect to course page
      window.location.href = '/course'
    } else {
      if (currentStep < 3) {
        setCurrentStep(prev => prev + 1)
      } else {
        // Handle registration completion
        console.log('Registration:', formData)
        // Redirect to success page
        window.location.href = '/auth/success'
      }
    }
    
    setIsLoading(false)
  }

  const validateStep = () => {
    if (currentStep === 1) {
      return formData.firstName && formData.lastName && formData.email && formData.password && formData.confirmPassword
    }
    if (currentStep === 2) {
      return formData.childName && formData.childAge && formData.phone
    }
    if (currentStep === 3) {
      return formData.cardNumber && formData.expiryDate && formData.cvv && formData.billingZip
    }
    return true
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-bright-green-50 via-bright-yellow-50 to-bright-pink-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <Link href="/" className="flex items-center justify-center space-x-3 mb-8">
            <Image 
              src="/images/ivysprout_smile_wide.png" 
              alt="Ivy Sprouts Logo" 
              width={40} 
              height={40}
              className="w-10 h-10"
            />
            <span className="text-2xl font-bold text-gray-800">Ivy Sprouts</span>
          </Link>
          <h2 className="text-3xl font-bold text-gray-900">
            {isLogin ? 'Welcome Back!' : 'Join Mrs. Jeni\'s Class'}
          </h2>
          <p className="mt-2 text-gray-600">
            {isLogin 
              ? 'Sign in to access your learning dashboard'
              : 'Start your child\'s journey to excellence today!'
            }
          </p>
        </div>

        <Card className="lesson-card shadow-lg">
          <CardHeader>
            <CardTitle className="text-bright-purple-600">
              {isLogin ? 'Sign In' : `Step ${currentStep} of 3`}
            </CardTitle>
            <CardDescription>
              {isLogin 
                ? 'Enter your credentials to continue'
                : currentStep === 1 
                  ? 'Create your account' 
                  : currentStep === 2 
                    ? 'Tell us about your child'
                    : 'Complete your subscription'
              }
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {isLogin ? (
                // Login Form
                <>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={handleInputChange}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-bright-purple-500 hover:bg-bright-purple-600"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Signing In...' : 'Sign In'}
                  </Button>
                </>
              ) : (
                // Registration Form - Step by Step
                <>
                  {currentStep === 1 && (
                    <>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name</Label>
                          <div className="relative">
                            <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                            <Input
                              id="firstName"
                              name="firstName"
                              placeholder="First name"
                              value={formData.firstName}
                              onChange={handleInputChange}
                              className="pl-10"
                              required
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input
                            id="lastName"
                            name="lastName"
                            placeholder="Last name"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="pl-10"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Create a password"
                            value={formData.password}
                            onChange={handleInputChange}
                            className="pl-10"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="confirmPassword">Confirm Password</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            id="confirmPassword"
                            name="confirmPassword"
                            type="password"
                            placeholder="Confirm your password"
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                            className="pl-10"
                            required
                          />
                        </div>
                      </div>
                    </>
                  )}

                  {currentStep === 2 && (
                    <>
                      <div className="space-y-2">
                        <Label htmlFor="childName">Child's Name</Label>
                        <div className="relative">
                          <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            id="childName"
                            name="childName"
                            placeholder="Your child's first name"
                            value={formData.childName}
                            onChange={handleInputChange}
                            className="pl-10"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="childAge">Child's Age</Label>
                        <select
                          id="childAge"
                          name="childAge"
                          value={formData.childAge}
                          onChange={(e) => setFormData(prev => ({ ...prev, childAge: e.target.value }))}
                          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-bright-purple-500 focus:border-transparent"
                          required
                        >
                          <option value="">Select age</option>
                          <option value="2">2 years old</option>
                          <option value="3">3 years old</option>
                          <option value="4">4 years old</option>
                          <option value="5">5 years old</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="(555) 123-4567"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="pl-10"
                            required
                          />
                        </div>
                      </div>
                    </>
                  )}

                  {currentStep === 3 && (
                    <>
                      <div className="bg-bright-green-50 p-4 rounded-lg border border-bright-green-200 mb-4">
                        <h3 className="font-semibold text-bright-green-700 mb-2">Subscription Summary</h3>
                        <p className="text-sm text-bright-green-600">
                          Mrs. Jeni's PreK Class - $50/month
                        </p>
                        <p className="text-xs text-bright-green-500 mt-1">
                          7-day free trial • Cancel anytime
                        </p>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="cardNumber">Card Number</Label>
                        <div className="relative">
                          <CreditCard className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            id="cardNumber"
                            name="cardNumber"
                            placeholder="1234 5678 9012 3456"
                            value={formData.cardNumber}
                            onChange={handleInputChange}
                            className="pl-10"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="expiryDate">Expiry Date</Label>
                          <div className="relative">
                            <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                            <Input
                              id="expiryDate"
                              name="expiryDate"
                              placeholder="MM/YY"
                              value={formData.expiryDate}
                              onChange={handleInputChange}
                              className="pl-10"
                              required
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cvv">CVV</Label>
                          <Input
                            id="cvv"
                            name="cvv"
                            placeholder="123"
                            value={formData.cvv}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="billingZip">Billing ZIP Code</Label>
                        <Input
                          id="billingZip"
                          name="billingZip"
                          placeholder="12345"
                          value={formData.billingZip}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </>
                  )}

                  <div className="flex gap-2">
                    {!isLogin && currentStep > 1 && (
                      <Button 
                        type="button"
                        variant="outline" 
                        onClick={() => setCurrentStep(prev => prev - 1)}
                        className="flex-1"
                      >
                        Back
                      </Button>
                    )}
                    <Button 
                      type="submit" 
                      className={`${currentStep === 1 || isLogin ? 'w-full' : 'flex-1'} ${
                        currentStep === 3 
                          ? 'bg-bright-green-500 hover:bg-bright-green-600' 
                          : 'bg-bright-purple-500 hover:bg-bright-purple-600'
                      }`}
                      disabled={isLoading || !validateStep()}
                    >
                      {isLoading 
                        ? 'Processing...' 
                        : currentStep === 3 
                          ? 'Start 7-Day Free Trial' 
                          : 'Continue'
                      }
                    </Button>
                  </div>
                </>
              )}
            </form>

            {isLogin && (
              <div className="mt-4 text-center">
                <Link href="/forgot-password" className="text-sm text-bright-purple-600 hover:underline">
                  Forgot your password?
                </Link>
              </div>
            )}

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
                <button
                  type="button"
                  onClick={() => {
                    setIsLogin(!isLogin)
                    setCurrentStep(1)
                    setFormData({
                      email: '',
                      password: '',
                      confirmPassword: '',
                      firstName: '',
                      lastName: '',
                      phone: '',
                      childName: '',
                      childAge: '',
                      cardNumber: '',
                      expiryDate: '',
                      cvv: '',
                      billingZip: ''
                    })
                  }}
                  className="text-bright-purple-600 hover:underline font-medium"
                >
                  {isLogin ? 'Sign up here' : 'Sign in here'}
                </button>
              </p>
            </div>

            <p className="text-xs text-gray-500 text-center mt-4">
              By continuing, you agree to our{' '}
              <Link href="/terms" className="text-bright-purple-600 hover:underline">
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link href="/privacy" className="text-bright-purple-600 hover:underline">
                Privacy Policy
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 