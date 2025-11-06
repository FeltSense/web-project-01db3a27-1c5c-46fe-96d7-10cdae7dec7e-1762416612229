export default function Hero() {
  return (
    <section className="relative min-h-screen bg-slate-900 overflow-hidden">
  {/* Animated background grid */}
  <div className="absolute inset-0 opacity-20">
    <div className="absolute inset-0" style={{
      backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                       linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
      backgroundSize: '50px 50px'
    }}></div>
  </div>

  {/* Gradient orbs for depth */}
  <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
  <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      {/* Content Column */}
      <div className="space-y-8 animate-fade-in">
        {/* Trust Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full backdrop-blur-sm">
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
          <span className="text-sm text-blue-300 font-medium">Trusted by 500+ Enterprise Clients</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight max-w-3xl">
          Build the Future with
          <span className="block mt-2 bg-gradient-to-r from-blue-400 via-teal-400 to-blue-500 bg-clip-text text-transparent">
            AI-Powered Solutions
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl leading-relaxed">
          Transform your business operations with custom AI models, intelligent automation, and enterprise-grade machine learning solutions.
        </p>

        {/* Key Benefits */}
        <div className="space-y-3">
          {[
            'Custom AI/ML model development & training',
            'Enterprise software integration & automation',
            'Strategic AI consulting & implementation'
          ].map((benefit, index) => (
            <div key={index} className="flex items-center gap-3 text-gray-200">
              <div className="flex-shrink-0 w-6 h-6 bg-teal-500/20 rounded-full flex items-center justify-center border border-teal-500/30">
                <svg className="w-4 h-4 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-lg">{benefit}</span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <button className="group px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2">
            Start Your AI Journey
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
          <button className="px-8 py-4 border-2 border-white/20 text-white text-lg font-semibold rounded-xl hover:bg-white/10 backdrop-blur-sm transition-all duration-200">
            View Case Studies
          </button>
        </div>

        {/* Social Proof Stats */}
        <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
          {[
            { value: '500+', label: 'Clients' },
            { value: '98%', label: 'Satisfaction' },
            { value: '50M+', label: 'Data Points' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Visual Column */}
      <div className="relative lg:h-[700px] animate-fade-in" style={{ animationDelay: '0.2s' }}>
        {/* Main Image Card */}
        <div className="relative h-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900">
          <img 
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1600&h=900&fit=crop" 
            alt="AI-powered workspace with modern technology"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
          
          {/* Floating Stats Cards */}
          <div className="absolute bottom-8 left-8 right-8 space-y-4">
            {/* Performance Card */}
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-4 transform hover:scale-105 transition-all duration-200">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-gray-300 mb-1">Model Accuracy</div>
                  <div className="text-2xl font-bold text-white">99.7%</div>
                </div>
                <div className="w-12 h-12 bg-teal-500/20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Processing Card */}
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-4 transform hover:scale-105 transition-all duration-200">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-gray-300 mb-1">Processing Speed</div>
                  <div className="text-2xl font-bold text-white">2.3ms</div>
                </div>
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl"></div>
        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-teal-500/20 rounded-full blur-2xl"></div>
      </div>
    </div>

    {/* Trusted By Section */}
    <div className="mt-24 pt-12 border-t border-white/10 animate-fade-in" style={{ animationDelay: '0.4s' }}>
      <p className="text-center text-gray-400 text-sm uppercase tracking-wider mb-8">Trusted by Industry Leaders</p>
      <div className="flex flex-wrap justify-center items-center gap-12 opacity-50">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="text-white/60 font-bold text-2xl">LOGO</div>
        ))}
      </div>
    </div>
  </div>
</section>
  );
}