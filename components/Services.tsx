export default function Services() {
  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50 overflow-hidden">
  {/* Background Elements */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
    <div className="absolute bottom-20 left-10 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl"></div>
  </div>

  <div className="container mx-auto px-6 relative z-10">
    {/* Section Header */}
    <div className="max-w-3xl mx-auto text-center mb-20">
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
        </svg>
        AI-Powered Solutions
      </div>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
        Transform Your Business with
        <span className="block mt-2 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
          Intelligent Technology
        </span>
      </h2>
      <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
        We build cutting-edge AI solutions that drive measurable results and unlock new possibilities for your organization
      </p>
    </div>

    {/* Services Grid - Creative Staggered Layout */}
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
      
      {/* Featured Service - Large Card */}
      <div className="md:col-span-7 group">
        <div className="relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden h-full border border-gray-100 hover:scale-[1.02] hover:-translate-y-2">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-teal-500/10 rounded-full blur-3xl transform translate-x-32 -translate-y-32"></div>
          
          <div className="relative">
            <div className="relative h-80 overflow-hidden">
              <Image 
                src="https://picsum.photos/seed/imaginary-space-ai-ml-dev/1200/800" 
                alt="Custom AI/ML Development"
                width={1200}
                height={800}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent"></div>
              <div className="absolute top-6 left-6">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-semibold shadow-lg">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
                  </svg>
                  Featured Service
                </span>
              </div>
            </div>

            <div className="p-10 md:p-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-600 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight">
                    Custom AI/ML Model Development
                  </h3>
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                    We design, train, and deploy bespoke machine learning models tailored to your unique business challenges. From predictive analytics to computer vision, our models deliver actionable insights and automation at scale.
                  </p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-base text-gray-700 leading-relaxed">
                    <span className="font-semibold text-slate-900">End-to-end development:</span> From data collection and preprocessing to model training, validation, and production deployment
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-base text-gray-700 leading-relaxed">
                    <span className="font-semibold text-slate-900">Advanced techniques:</span> Deep learning, neural networks, NLP, computer vision, and reinforcement learning
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-base text-gray-700 leading-relaxed">
                    <span className="font-semibold text-slate-900">Scalable infrastructure:</span> Cloud-native deployment with monitoring, versioning, and continuous improvement
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 border-2 border-white"></div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-500 to-teal-600 border-2 border-white"></div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 border-2 border-white"></div>
                </div>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold text-slate-900">50+ models</span> deployed in production
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column - Two Stacked Cards */}
      <div className="md:col-span-5 space-y-8 md:space-y-12">
        
        {/* Service Card 2 */}
        <div className="group">
          <div className="relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:scale-[1.02] hover:-translate-y-2 h-full">
            <div className="absolute top-0 left-0 w-48 h-48 bg-gradient-to-br from-teal-500/10 to-blue-500/10 rounded-full blur-3xl transform -translate-x-24 -translate-y-24"></div>
            
            <div className="relative">
              <div className="relative h-56 overflow-hidden">
                <Image 
                  src="https://picsum.photos/seed/imaginary-space-integration/800/600" 
                  alt="Enterprise Integration"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
              </div>

              <div className="p-8 md:p-10">
                <div className="flex items-start gap-3 mb-5">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-teal-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3 leading-tight">
                      Enterprise Software Integration
                    </h3>
                  </div>
                </div>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Seamlessly connect AI capabilities with your existing enterprise systems. We build robust integrations that enhance workflows without disrupting operations.
                </p>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-base text-gray-700">API development and microservices architecture</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-base text-gray-700">Legacy system modernization with AI</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-base text-gray-700">Real-time data pipelines and ETL automation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service Card 3 */}
        <div className="group">
          <div className="relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:scale-[1.02] hover:-translate-y-2 h-full">
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-br from-purple-500/10 to-teal-500/10 rounded-full blur-3xl transform translate-x-24 translate-y-24"></div>
            
            <div className="relative">
              <div className="relative h-56 overflow-hidden">
                <Image 
                  src="https://picsum.photos/seed/imaginary-space-consulting/800/600" 
                  alt="AI Strategy Consulting"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
              </div>

              <div className="p-8 md:p-10">
                <div className="flex items-start gap-3 mb-5">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-600 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3 leading-tight">
                      AI Strategy & Consulting
                    </h3>
                  </div>
                </div>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Navigate your AI transformation with confidence. We provide strategic guidance to identify high-impact opportunities and build a roadmap for sustainable AI adoption.
                </p>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-base text-gray-700">AI readiness assessment and opportunity mapping</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-base text-gray-700">ROI-focused implementation roadmaps</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-base text-gray-700">Team training and change management support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Row - Two Equal Cards */}
      <div className="md:col-span-6 group">
        <div className="relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:scale-[1.02] hover:-translate-y-2 h-full">
          <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl transform translate-x-24 -translate-y-24"></div>
          
          <div className="relative">
            <div className="relative h-64 overflow-hidden">
              <Image 
                src="https://picsum.photos/seed/imaginary-space-automation/800/600" 
                alt="Intelligent Process Automation"
                width={800}
                height={600}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
            </div>

            <div className="p-10">
              <div className="flex items-start gap-3 mb-5">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3 leading-tight">
                    Intelligent Process Automation
                  </h3>
                </div>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Eliminate repetitive tasks and accelerate workflows with AI-powered automation. We identify bottlenecks and implement intelligent systems that learn and improve over time.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="text-3xl font-bold text-blue-600 mb-1">85%</div>
                  <div className="text-sm text-gray-700">Time saved on average</div>
                </div>
                <div className="bg-teal-50 rounded-lg p-4">
                  <div className="text-3xl font-bold text-teal-600 mb-1">99.9%</div>
                  <div className="text-sm text-gray-700">Accuracy rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:col-span-6 group">
        <div className="relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:scale-[1.02] hover:-translate-y-2 h-full">
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-br from-teal-500/10 to-blue-500/10 rounded-full blur-3xl transform -translate-x-24 translate-y-24"></div>
          
          <div className="relative">
            <div className="relative h-64 overflow-hidden">
              <Image 
                src="https://picsum.photos/seed/imaginary-space-analytics/800/600" 
                alt="Predictive Analytics"
                width={800}
                height={600}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
            </div>

            <div className="p-10">
              <div className="flex items-start gap-3 mb-5">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-teal-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3 leading-tight">
                    Predictive Analytics & Insights
                  </h3>
                </div>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Turn data into foresight. Our predictive models analyze patterns, forecast trends, and provide actionable recommendations that drive strategic decision-making.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-gray-700">
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  <span>Demand forecasting and inventory optimization</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-700">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Customer behavior prediction and churn analysis</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-700">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>Risk assessment and anomaly detection</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

    {/* Bottom CTA */}
    <div className="mt-20 text-center">
      <div className="inline-flex flex-col sm:flex-row items-center gap-4">
        <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
          <span className="relative z-10 flex items-center gap-2">
            Start Your AI Journey
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </button>
        <button className="px-8 py-4 bg-white text-slate-900 font-semibold rounded-xl border-2 border-gray-200 hover:border-blue-600 hover:text-blue-600 transition-all duration-300 hover:scale-105">
          View Case Studies
        </button>
      </div>
      <p className="mt-6 text-gray-600">
        Join <span className="font-semibold text-slate-900">200+ companies</span> transforming their business with AI
      </p>
    </div>
  </div>
</section>
  );
}