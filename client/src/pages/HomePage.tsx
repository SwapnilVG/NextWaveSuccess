import React, { lazy, Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import John_Smith from '../assets/1.jpg'
import Sarah_Johnson from '../assets/2.jpg'
import Michael_Patel from '../assets/3.jpg'
import { ArrowRight, CheckCircle, Award, TrendingUp, Users } from 'lucide-react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from '../components/ui/carousel';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const HomePage = () => {
  const navigate = useNavigate();
  
  return (
    <Layout fullWidth hideHeader>
      {/* Hero Section - Optimized for performance */}
      <section className="relative bg-gradient-to-br from-blue-900 via-indigo-800 to-blue-800 text-white min-h-[100vh] flex items-center py-20 px-4 overflow-hidden">
        <div className="absolute w-full h-full top-0 left-0 overflow-hidden z-0">
          {/* Background elements with optimized animations */}
          <div className="w-[30rem] h-[30rem] rounded-full bg-blue-400/20 absolute -top-32 -left-32 blur-2xl"></div>
          <div className="w-[25rem] h-[25rem] rounded-full bg-indigo-500/20 absolute bottom-0 right-0 blur-2xl"></div>
          <div className="w-[20rem] h-[20rem] rounded-full bg-purple-500/10 absolute top-1/3 right-1/4 blur-2xl"></div>
          
          {/* Subtle grid pattern overlay with reduced opacity */}
          <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiNmZmZmZmYiIGQ9Ik0zNiAxOGMxLjIgMCAyLjMuNCAzLjIgMS4yLjkuOCAxLjMgMS45IDEuMyAzLjIgMCAxLjItLjQgMi4zLTEuMyAzLjItLjkuOC0yIDEuMi0zLjIgMS4ycy0yLjMtLjQtMy4yLTEuMmMtLjktLjgtMS4zLTEuOS0xLjMtMy4yIDAtMS4yLjQtMi4zIDEuMy0zLjIuOS0uOCAyLTEuMiAzLjItMS4yTTI0IDMwYzEuMiAwIDIuMy40IDMuMiAxLjIuOS44IDEuMyAxLjkgMS4zIDMuMiAwIDEuMi0uNCAyLjMtMS4zIDMuMi0uOS44LTIgMS4yLTMuMiAxLjJzLTIuMy0uNC0zLjItMS4yYy0uOS0uOC0xLjMtMS45LTEuMy0zLjIgMC0xLjIuNC0yLjMgMS4zLTMuMi45LS44IDItMS4yIDMuMi0xLjIiLz48L2c+PC9zdmc+')]"></div>
        </div>
        
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100 leading-tight">
            Build Your <span className="text-amber-400">Financial Freedom</span><br className="hidden sm:block" />With NextWaveSuccess
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-10 max-w-3xl mx-auto text-blue-100">
            Strategic network marketing solutions designed to grow your business and expand your reach.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <Button 
              onClick={() => navigate('/dashboard')} 
              variant="gold"
              size="xl"
              className="flex items-center font-semibold"
            >
              Get Started <ArrowRight size={20} className="ml-2" />
            </Button>
            <Button
              variant="outline"
              size="xl"
              className="border-2 border-white text-black hover:bg-white hover:text-blue-800 font-semibold"
            >
              Learn More
            </Button>
          </div>
          
          <div className="mt-16 sm:mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 text-center">
            <Card className="p-6 bg-white/10 border-white/20 shadow-lg hover:shadow-xl hover:bg-white/15 transition-all duration-300">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-amber-400/20 flex items-center justify-center">
                  <Award size={36} className="text-amber-400" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Premium Quality</h3>
              <p className="text-white/80">Only the best products and services for our partners</p>
            </Card>
            <Card className="p-6 bg-white/10 border-white/20 shadow-lg hover:shadow-xl hover:bg-white/15 transition-all duration-300">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-green-400/20 flex items-center justify-center">
                  <TrendingUp size={36} className="text-green-400" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Growing Community</h3>
              <p className="text-white/80">Join thousands of successful entrepreneurs</p>
            </Card>
            <Card className="p-6 bg-white/10 border-white/20 shadow-lg hover:shadow-xl hover:bg-white/15 transition-all duration-300">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-purple-400/20 flex items-center justify-center">
                  <Users size={36} className="text-purple-400" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Strong Network</h3>
              <p className="text-white/80">Build lasting relationships in our community</p>
            </Card>
          </div>
        </div>
      </section>

      {/* About Us Section - Enhanced with simplified layout */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-4">About Us</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-mlm-navy">About <span className="text-mlm-gold">NextWaveSuccess</span></h2>
              <p className="text-gray-700 mb-6">
                Founded in 2020, NextWaveSuccess has quickly grown to become a leading network marketing 
                company, helping thousands of individuals achieve financial freedom through our 
                innovative business model and premium products.
              </p>
              <p className="text-gray-700 mb-6">
                Our mission is to empower entrepreneurs with the tools, training, and support they need 
                to build successful businesses that generate residual income and create lasting impact.
              </p>
              <div className="space-y-4">
                <div className="flex items-start p-3 rounded-lg hover:bg-gray-50 transition-all duration-300">
                  <CheckCircle className="text-green-500 mr-3 flex-shrink-0 mt-1" size={22} />
                  <div>
                    <h4 className="font-medium text-gray-900">Transparent Compensation</h4>
                    <p className="text-gray-600">Fair and generous payouts with clear advancement paths</p>
                  </div>
                </div>
                <div className="flex items-start p-3 rounded-lg hover:bg-gray-50 transition-all duration-300">
                  <CheckCircle className="text-green-500 mr-3 flex-shrink-0 mt-1" size={22} />
                  <div>
                    <h4 className="font-medium text-gray-900">Comprehensive Training</h4>
                    <p className="text-gray-600">Ongoing support for partners at every experience level</p>
                  </div>
                </div>
                <div className="flex items-start p-3 rounded-lg hover:bg-gray-50 transition-all duration-300">
                  <CheckCircle className="text-green-500 mr-3 flex-shrink-0 mt-1" size={22} />
                  <div>
                    <h4 className="font-medium text-gray-900">Effective Marketing Tools</h4>
                    <p className="text-gray-600">Resources designed to boost your sales and recruitment</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative flex justify-center">
              <div className="w-full max-w-lg h-96 rounded-xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/60 to-purple-600/60 mix-blend-multiply"></div>
                <img 
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216" 
                  alt="Business team collaborating" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width="600"
                  height="400"
                />
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <div className="text-white text-center bg-black/20 p-6 rounded-lg border border-white/10">
                    <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                    <p className="text-lg">Creating opportunities for financial freedom and personal growth through innovative network marketing solutions.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Enhanced */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-4">Our Services</div>
            <h2 className="text-3xl md:text-4xl font-bold text-mlm-navy mb-4">How We <span className="text-mlm-gold">Help You Succeed</span></h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Discover how NextWaveSuccess provides the tools and support you need to build a successful network marketing business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:-translate-y-1 transition-transform duration-300 border-t-4 border-blue-500">
              <div className="h-16 w-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-mlm-navy mb-3">Business Development</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive strategies for building and scaling your network marketing business with proven methods and support.
              </p>
              <a href="#" className="group inline-flex items-center font-medium text-blue-600 hover:text-blue-800">
                Learn More <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
            
            {/* Service 2 */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:-translate-y-1 transition-transform duration-300 border-t-4 border-green-500">
              <div className="h-16 w-16 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-mlm-navy mb-3">Training & Mentorship</h3>
              <p className="text-gray-600 mb-4">
                Personalized coaching and ongoing training programs designed to enhance your skills and boost your confidence.
              </p>
              <a href="#" className="group inline-flex items-center font-medium text-green-600 hover:text-green-800">
                Learn More <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
            
            {/* Service 3 */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:-translate-y-1 transition-transform duration-300 border-t-4 border-purple-500">
              <div className="h-16 w-16 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-mlm-navy mb-3">Marketing Resources</h3>
              <p className="text-gray-600 mb-4">
                Access to cutting-edge marketing tools, templates, and strategies to reach more potential customers and partners.
              </p>
              <a href="#" className="group inline-flex items-center font-medium text-purple-600 hover:text-purple-800">
                Learn More <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section - Enhanced */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-4">Success Stories</div>
            <h2 className="text-3xl md:text-4xl font-bold text-mlm-navy mb-4">Our <span className="text-mlm-gold">Success Stories</span></h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              See how our partners have transformed their lives and businesses with NextWaveSuccess.
            </p>
          </div>
          
          <Carousel className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}>
            <CarouselContent>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                    <img 
                      src={John_Smith}
                      alt="Success story 1" 
                      className="w-full h-64 object-cover"
                      loading="lazy"
                      width="400"
                      height="250"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-mlm-navy">John Smith</h3>
                      <p className="text-sm text-gray-500 mb-4">Joined in 2021</p>
                      <p className="text-gray-600 mb-4">
                        "NextWaveSuccess transformed my financial situation. Within 6 months, I built a team 
                        of over 50 members and now enjoy a passive income that has allowed me to quit my 9-5 job."
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
              
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                    <img 
                      src={Sarah_Johnson}
                      alt="Success story 2" 
                      className="w-full h-64 object-cover"
                      loading="lazy"
                      width="400"
                      height="250"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-mlm-navy">Sarah Johnson</h3>
                      <p className="text-sm text-gray-500 mb-4">Joined in 2020</p>
                      <p className="text-gray-600 mb-4">
                        "As a single mother, I was looking for a flexible business opportunity. With NextWaveSuccess,
                        I've been able to build a sustainable income while being present for my children."
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
              
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                    <img 
                      src={Michael_Patel}
                      alt="Success story 3" 
                      className="w-full h-64 object-cover"
                      loading="lazy"
                      width="400"
                      height="250"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-mlm-navy">Michael Patel</h3>
                      <p className="text-sm text-gray-500 mb-4">Joined in 2022</p>
                      <p className="text-gray-600 mb-4">
                        "I was skeptical at first, but the support system at NextWaveSuccess is unmatched.
                        Within a year, I achieved the Diamond rank and now mentor my own team of successful partners."
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
