export default function Pricing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20 px-4">
  {/* Background Elements */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
    <div className="absolute bottom-20 left-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
  </div>

  <div className="relative z-10 max-w-6xl mx-auto">
    {/* Header Section */}
    <div className="text-center mb-16">
      <div className="inline-block mb-4">
        <span className="px-4 py-2 bg-blue-500/20 border border-blue-400/50 rounded-full text-blue-300 text-sm font-semibold">IMAGINARY SPACE</span>
      </div>
      <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
        Transform Your Vision Into Reality
      </h1>
      <p className="text-xl text-blue-100/80 max-w-2xl mx-auto leading-relaxed">
        Enterprise-grade AI/ML solutions designed to elevate your business. One investment. Unlimited possibilities.
      </p>
    </div>

    {/* Pricing Card */}
    <div className="flex justify-center mb-12">
      <div className="w-full max-w-md">
        <div className="relative group">
          {/* Glow Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
          
          {/* Card */}
          <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-blue-600">
            {/* Top Accent */}
            <div className="h-1 bg-gradient-to-r from-blue-600 to-cyan-500"></div>
            
            <div className="p-8 md:p-10">
              {/* Badge */}
              <div className="inline-block mb-6">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full">COMPLETE SOLUTION</span>
              </div>

              {/* Title */}
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Full-Stack AI Development
              </h2>
              <p className="text-gray-600 text-sm mb-8">Everything you need to launch your AI-powered future</p>

              {/* Price */}
              <div className="mb-8 pb-8 border-b border-gray-200">
                <div className="text-5xl font-bold text-gray-900">$29</div>
                <p className="text-gray-600 mt-2 font-medium">One-time payment</p>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-10">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-gray-700 font-medium">Custom AI/ML model development and training</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-gray-700 font-medium">Enterprise software integration and automation</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-gray-700 font-medium">AI consulting and strategy development</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-gray-700 font-medium">Proven track record with measurable results</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-gray-700 font-medium">Transparent team with deep technical expertise</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-gray-700 font-medium">End-to-end development from concept to deployment</span>
                </li>
              </ul>

              {/* CTA Button */}
              <button 
                onClick={() => window.location.href = 'https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00?client_reference_id=01db3a27-1c5c-46fe-96d7-10cdae7dec7e'}
                className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl active:scale-95"
              >
                Get Your Website - $29
              </button>

              {/* Footer Text */}
              <p className="text-center text-gray-500 text-sm mt-6">
                Secure payment. Instant access. No hidden fees.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Trust Indicators */}
    <div className="text-center mt-16">
      <p className="text-gray-400 text-sm mb-6 font-medium">TRUSTED BY FORWARD-THINKING COMPANIES</p>
      <div className="flex justify-center items-center gap-8 flex-wrap">
        <div className="text-gray-500 font-semibold text-sm">Enterprise Grade</div>
        <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
        <div className="text-gray-500 font-semibold text-sm">24/7 Support</div>
        <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
        <div className="text-gray-500 font-semibold text-sm">Money-Back Guarantee</div>
      </div>
    </div>
  </div>
</div>
  );
}