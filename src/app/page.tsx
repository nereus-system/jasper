import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, Target } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="section-padding relative overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 gradient-primary opacity-5"></div>
        <div className="absolute top-0 right-0 w-96 h-96 gradient-indigo-blue opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 gradient-blue-magenta opacity-10 rounded-full blur-3xl"></div>
        
        <div className="grid-canvas relative z-10">
          <div className="col-span-12 text-center">
            {/* Logo */}
            <div className="mb-8">
              <div className="inline-flex items-center gap-3 px-6 py-3 glass rounded-2xl">
                <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="text-h3 gradient-text">Jasper</span>
              </div>
            </div>
            
            {/* Main Headline */}
            <h1 className="text-display gradient-text mb-6">
              AI-Powered Creative
              <br />
              <span className="text-neutral-black">Canvas</span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-main text-neutral-black/70 max-w-3xl mx-auto mb-12">
              Transform your creative workflow with intelligent automation. 
              Built for marketers and enterprise users who demand innovation, 
              efficiency, and breakthrough results.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button 
                size="lg" 
                className="gradient-primary text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-bold hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Start Creating
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="px-8 py-4 rounded-2xl text-lg font-semibold border-2 border-neutral-black/20 hover:border-primary-indigo hover:text-primary-indigo transition-all duration-300"
              >
                Watch Demo
              </Button>
            </div>
            
            {/* Feature Pills */}
            <div className="flex flex-wrap justify-center gap-3 mb-16">
              <div className="glass px-4 py-2 rounded-full text-small font-medium">
                <Zap className="inline w-4 h-4 mr-2 text-primary-blue" />
                Lightning Fast
              </div>
              <div className="glass px-4 py-2 rounded-full text-small font-medium">
                <Target className="inline w-4 h-4 mr-2 text-primary-magenta" />
                Enterprise Ready
              </div>
              <div className="glass px-4 py-2 rounded-full text-small font-medium">
                <Sparkles className="inline w-4 h-4 mr-2 text-primary-indigo" />
                AI-Powered
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="section-padding bg-neutral-gray/30">
        <div className="grid-canvas">
          <div className="col-span-12 text-center mb-16">
            <h2 className="text-h2 text-neutral-black mb-6">
              Built for the Future of
              <span className="gradient-text"> Creative Work</span>
            </h2>
            <p className="text-main text-neutral-black/70 max-w-2xl mx-auto">
              Experience the next generation of creative tools designed for 
              modern teams and ambitious individuals.
            </p>
          </div>
          
          <div className="col-span-12 md:col-span-4 mb-8">
            <div className="glass rounded-2xl p-8 h-full hover:shadow-medium transition-all duration-300">
              <div className="w-12 h-12 gradient-indigo-blue rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-h3 text-neutral-black mb-4">Lightning Speed</h3>
              <p className="text-small text-neutral-black/70">
                Generate high-quality content in seconds, not hours. 
                Our AI engine delivers results at unprecedented speed.
              </p>
            </div>
          </div>
          
          <div className="col-span-12 md:col-span-4 mb-8">
            <div className="glass rounded-2xl p-8 h-full hover:shadow-medium transition-all duration-300">
              <div className="w-12 h-12 gradient-blue-magenta rounded-xl flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-h3 text-neutral-black mb-4">Enterprise Grade</h3>
              <p className="text-small text-neutral-black/70">
                Built with security, scalability, and compliance in mind. 
                Trusted by Fortune 500 companies worldwide.
              </p>
            </div>
          </div>
          
          <div className="col-span-12 md:col-span-4 mb-8">
            <div className="glass rounded-2xl p-8 h-full hover:shadow-medium transition-all duration-300">
              <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-h3 text-neutral-black mb-4">AI Innovation</h3>
              <p className="text-small text-neutral-black/70">
                Cutting-edge AI technology that understands context, 
                brand voice, and creative intent like never before.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="section-padding bg-neutral-black text-white">
        <div className="grid-canvas">
          <div className="col-span-12 text-center">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-h3 text-white">Jasper</span>
            </div>
            <p className="text-small text-white/70 mb-8">
              © 2024 Jasper. All rights reserved. Built with Next.js, TypeScript, and Tailwind CSS.
            </p>
            <div className="flex justify-center gap-6">
              <a href="#" className="text-small text-white/70 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-small text-white/70 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-small text-white/70 hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
