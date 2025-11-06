export default function Testimonials() {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
  {/* Background Elements */}
  <div className="absolute inset-0 opacity-30">
    <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
    <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
    <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
  </div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section Header */}
    <div className="text-center mb-16">
      <div className="inline-flex items-center justify-center px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-semibold shadow-lg">
        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        Client Success Stories
      </div>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
        Trusted by Industry Leaders
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        See how we've helped businesses transform their operations and achieve measurable results
      </p>
    </div>

    {/* Testimonials Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
      {/* Testimonial 1 */}
      <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200 hover:-translate-y-2">
        <div className="flex items-center mb-6">
          <img 
            src="https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg"
            alt="Michael Chen"
            className="w-16 h-16 rounded-full object-cover ring-4 ring-blue-100 group-hover:ring-blue-200 transition-all duration-300"
          />
          <div className="ml-4">
            <h4 className="font-bold text-gray-900 text-lg">Michael Chen</h4>
            <p className="text-sm text-gray-600">Operations Director</p>
            <p className="text-sm text-gray-500">TechFlow Solutions</p>
          </div>
        </div>
        <div className="flex mb-4 text-yellow-400 text-lg">
          ⭐⭐⭐⭐⭐
        </div>
        <p className="text-gray-700 leading-relaxed italic">
          "We implemented their workflow automation system and reduced our processing time by 65%. What used to take our team 8 hours now takes less than 3. The ROI was evident within the first month, and our team can now focus on strategic initiatives instead of repetitive tasks."
        </p>
      </div>

      {/* Testimonial 2 */}
      <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-indigo-200 hover:-translate-y-2">
        <div className="flex items-center mb-6">
          <img 
            src="https://cdn.pixabay.com/photo/2017/08/06/12/52/woman-2592247_1280.jpg"
            alt="Sarah Martinez"
            className="w-16 h-16 rounded-full object-cover ring-4 ring-indigo-100 group-hover:ring-indigo-200 transition-all duration-300"
          />
          <div className="ml-4">
            <h4 className="font-bold text-gray-900 text-lg">Sarah Martinez</h4>
            <p className="text-sm text-gray-600">CEO & Founder</p>
            <p className="text-sm text-gray-500">GrowthMetrics Inc</p>
          </div>
        </div>
        <div className="flex mb-4 text-yellow-400 text-lg">
          ⭐⭐⭐⭐⭐
        </div>
        <p className="text-gray-700 leading-relaxed italic">
          "Their data analytics platform helped us identify a $2.3M revenue opportunity we were completely missing. The insights dashboard is intuitive, and their team trained our staff in just two days. We've increased our conversion rate by 42% in the last quarter alone."
        </p>
      </div>

      {/* Testimonial 3 */}
      <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-purple-200 hover:-translate-y-2">
        <div className="flex items-center mb-6">
          <img 
            src="https://cdn.pixabay.com/photo/2016/11/29/03/35/man-1867175_1280.jpg"
            alt="David Thompson"
            className="w-16 h-16 rounded-full object-cover ring-4 ring-purple-100 group-hover:ring-purple-200 transition-all duration-300"
          />
          <div className="ml-4">
            <h4 className="font-bold text-gray-900 text-lg">David Thompson</h4>
            <p className="text-sm text-gray-600">VP of Technology</p>
            <p className="text-sm text-gray-500">Nexus Enterprises</p>
          </div>
        </div>
        <div className="flex mb-4 text-yellow-400 text-lg">
          ⭐⭐⭐⭐⭐
        </div>
        <p className="text-gray-700 leading-relaxed italic">
          "We were struggling with system integration across 5 different platforms. Their custom API solution unified everything seamlessly. Our customer support team now has real-time access to all data, reducing ticket resolution time from 48 hours to just 4 hours."
        </p>
      </div>

      {/* Testimonial 4 */}
      <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200 hover:-translate-y-2">
        <div className="flex items-center mb-6">
          <img 
            src="https://cdn.pixabay.com/photo/2017/08/01/08/29/woman-2563491_1280.jpg"
            alt="Jennifer Park"
            className="w-16 h-16 rounded-full object-cover ring-4 ring-blue-100 group-hover:ring-blue-200 transition-all duration-300"
          />
          <div className="ml-4">
            <h4 className="font-bold text-gray-900 text-lg">Jennifer Park</h4>
            <p className="text-sm text-gray-600">Marketing Director</p>
            <p className="text-sm text-gray-500">BrightPath Digital</p>
          </div>
        </div>
        <div className="flex mb-4 text-yellow-400 text-lg">
          ⭐⭐⭐⭐⭐
        </div>
        <p className="text-gray-700 leading-relaxed italic">
          "Their marketing automation platform transformed our lead generation process. We went from manually tracking 200 leads per month to automatically nurturing 2,000+ qualified prospects. Our sales team's productivity increased by 180%, and we closed 3 major deals in the first 60 days."
        </p>
      </div>

      {/* Testimonial 5 */}
      <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-indigo-200 hover:-translate-y-2">
        <div className="flex items-center mb-6">
          <img 
            src="https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445_1280.jpg"
            alt="Robert Williams"
            className="w-16 h-16 rounded-full object-cover ring-4 ring-indigo-100 group-hover:ring-indigo-200 transition-all duration-300"
          />
          <div className="ml-4">
            <h4 className="font-bold text-gray-900 text-lg">Robert Williams</h4>
            <p className="text-sm text-gray-600">CFO</p>
            <p className="text-sm text-gray-500">Summit Financial Group</p>
          </div>
        </div>
        <div className="flex mb-4 text-yellow-400 text-lg">
          ⭐⭐⭐⭐⭐
        </div>
        <p className="text-gray-700 leading-relaxed italic">
          "The financial reporting system they built cut our month-end close process from 12 days to just 3 days. Real-time dashboards give our executives instant visibility into key metrics. We've eliminated countless spreadsheet errors and saved over $150K annually in accounting costs."
        </p>
      </div>

      {/* Testimonial 6 */}
      <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-purple-200 hover:-translate-y-2">
        <div className="flex items-center mb-6">
          <img 
            src="https://cdn.pixabay.com/photo/2017/05/31/04/59/beautiful-2359121_1280.jpg"
            alt="Emily Rodriguez"
            className="w-16 h-16 rounded-full object-cover ring-4 ring-purple-100 group-hover:ring-purple-200 transition-all duration-300"
          />
          <div className="ml-4">
            <h4 className="font-bold text-gray-900 text-lg">Emily Rodriguez</h4>
            <p className="text-sm text-gray-600">Head of Customer Success</p>
            <p className="text-sm text-gray-500">CloudSync Technologies</p>
          </div>
        </div>
        <div className="flex mb-4 text-yellow-400 text-lg">
          ⭐⭐⭐⭐⭐
        </div>
        <p className="text-gray-700 leading-relaxed italic">
          "Their customer portal solution revolutionized how we interact with clients. Self-service features reduced support tickets by 58%, and our NPS score jumped from 42 to 78 in just 4 months. The implementation was smooth, and their ongoing support has been exceptional."
        </p>
      </div>
    </div>

    {/* Trust Indicators */}
    <div className="flex flex-wrap justify-center items-center gap-8 pt-12 border-t border-gray-200">
      <div className="text-center">
        <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">500+</div>
        <div className="text-sm text-gray-600 font-medium">Projects Delivered</div>
      </div>
      <div className="hidden md:block w-px h-12 bg-gray-300"></div>
      <div className="text-center">
        <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">98%</div>
        <div className="text-sm text-gray-600 font-medium">Client Satisfaction</div>
      </div>
      <div className="hidden md:block w-px h-12 bg-gray-300"></div>
      <div className="text-center">
        <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">4.9/5</div>
        <div className="text-sm text-gray-600 font-medium">Average Rating</div>
      </div>
      <div className="hidden md:block w-px h-12 bg-gray-300"></div>
      <div className="text-center">
        <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">15+</div>
        <div className="text-sm text-gray-600 font-medium">Years Experience</div>
      </div>
    </div>
  </div>
</section>
  );
}