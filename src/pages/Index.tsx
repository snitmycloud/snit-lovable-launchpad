
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Cloud, Settings, Users, Award, CheckCircle, Menu, X } from "lucide-react";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-teal-600 to-teal-700 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/6f5645be-6c02-4fa3-8e49-6db5da1623ba.png" 
                alt="SNIT Solutions Logo" 
                className="w-12 h-12"
              />
              <div>
                <h1 className="text-2xl font-bold">SNIT Solutions</h1>
                <p className="text-sm text-teal-100">Cloud & DevOps Experts</p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('about')} className="hover:text-orange-300 transition-colors">About</button>
              <button onClick={() => scrollToSection('services')} className="hover:text-orange-300 transition-colors">Services</button>
              <button onClick={() => scrollToSection('why-us')} className="hover:text-orange-300 transition-colors">Why Us</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-orange-300 transition-colors">Contact</button>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 py-4 border-t border-teal-500">
              <div className="flex flex-col space-y-2">
                <button onClick={() => scrollToSection('about')} className="text-left py-2 hover:text-orange-300 transition-colors">About</button>
                <button onClick={() => scrollToSection('services')} className="text-left py-2 hover:text-orange-300 transition-colors">Services</button>
                <button onClick={() => scrollToSection('why-us')} className="text-left py-2 hover:text-orange-300 transition-colors">Why Us</button>
                <button onClick={() => scrollToSection('contact')} className="text-left py-2 hover:text-orange-300 transition-colors">Contact</button>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 to-orange-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Empowering IT Careers with 
            <span className="text-teal-600"> Real-Time </span>
            <span className="text-orange-500">Training</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Master Cloud Computing, DevOps, and Full Stack Development through practical, 
            industry-focused training with 100% placement support.
          </p>
          <Button 
            onClick={() => scrollToSection('contact')} 
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            Start Your Journey
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About SNIT Solutions</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-orange-500 mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We are a team of industry experts dedicated to providing high-quality training and 
                consulting in Cloud Computing, DevOps, and Full Stack Development.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At SNIT, we believe in practical learning through real-time projects that prepare 
                individuals for job success in today's competitive tech landscape.
              </p>
              <div className="flex items-center space-x-4">
                <Award className="text-orange-500 w-8 h-8" />
                <span className="text-gray-700 font-semibold">Industry Certified Trainers</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center p-6 border-l-4 border-teal-500">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-teal-600 mb-2">500+</div>
                  <div className="text-gray-600">Students Trained</div>
                </CardContent>
              </Card>
              <Card className="text-center p-6 border-l-4 border-orange-500">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-orange-500 mb-2">95%</div>
                  <div className="text-gray-600">Placement Rate</div>
                </CardContent>
              </Card>
              <Card className="text-center p-6 border-l-4 border-teal-500">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-teal-600 mb-2">50+</div>
                  <div className="text-gray-600">Partner Companies</div>
                </CardContent>
              </Card>
              <Card className="text-center p-6 border-l-4 border-orange-500">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-orange-500 mb-2">5+</div>
                  <div className="text-gray-600">Years Experience</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Services</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-orange-500 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive training and consulting services designed to accelerate your career in technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Cloud className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-4">Cloud Services</h4>
                <p className="text-gray-600 mb-4">
                  End-to-end solutions on AWS, Azure & GCP with real-time project exposure.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• AWS/Azure/GCP Certification</li>
                  <li>• Infrastructure as Code</li>
                  <li>• Cloud Migration</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Settings className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-4">DevOps Consulting</h4>
                <p className="text-gray-600 mb-4">
                  CI/CD pipelines, Docker, Kubernetes & automation consulting for teams.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Jenkins/GitLab CI/CD</li>
                  <li>• Docker & Kubernetes</li>
                  <li>• Infrastructure Automation</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-4">Corporate Training</h4>
                <p className="text-gray-600 mb-4">
                  Customized technical workshops for enterprises and upskilling teams.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Custom Curriculum</li>
                  <li>• On-site Training</li>
                  <li>• Team Assessments</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-4">Placement Support</h4>
                <p className="text-gray-600 mb-4">
                  We assist students with resume building, interview prep & job connections.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Resume Building</li>
                  <li>• Mock Interviews</li>
                  <li>• Job Referrals</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why Choose SNIT Solutions</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-orange-500 mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Real-Time Project Guidance",
              "Experienced Industry Trainers", 
              "Flexible Online & Offline Classes",
              "100% Placement Support"
            ].map((feature, index) => (
              <Card key={index} className="text-center p-6 border-2 border-gray-100 hover:border-teal-300 transition-all duration-300">
                <CardContent className="p-4">
                  <CheckCircle className="w-12 h-12 text-teal-600 mx-auto mb-4" />
                  <p className="font-semibold text-gray-800">{feature}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-teal-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Get In Touch</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-orange-500 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600">Ready to start your tech career journey? Contact us today!</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h4>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Email</p>
                    <p className="text-gray-600">info@snitsolutions.in</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Phone</p>
                    <p className="text-gray-600">+91 12345 67890</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Location</p>
                    <p className="text-gray-600">Hyderabad, Telangana</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="p-8 shadow-xl border-0">
              <CardContent className="p-0">
                <h4 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h4>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name
                    </label>
                    <Input 
                      id="name" 
                      placeholder="Enter your name" 
                      className="border-gray-300 focus:border-teal-500 focus:ring-teal-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="Enter your email" 
                      className="border-gray-300 focus:border-teal-500 focus:ring-teal-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <Textarea 
                      id="message" 
                      rows={4} 
                      placeholder="Type your message" 
                      className="border-gray-300 focus:border-teal-500 focus:ring-teal-500"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-teal-600 to-orange-500 hover:from-teal-700 hover:to-orange-600 text-white py-3 rounded-lg font-semibold transition-all duration-200"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-teal-700 to-teal-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <img 
              src="/lovable-uploads/6f5645be-6c02-4fa3-8e49-6db5da1623ba.png" 
              alt="SNIT Solutions Logo" 
              className="w-8 h-8"
            />
            <span className="font-bold text-lg">SNIT Solutions</span>
          </div>
          <p className="text-teal-100">
            &copy; 2025 SNIT Solutions. All rights reserved. | Empowering IT Careers Since 2020
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
