import { Link } from 'react-router-dom'

const Services = () => {
  const services = [
    {
      title: 'Custom Web Application Development',
      description: 'Full-stack web applications built with modern technologies including React, Node.js, and cloud services. Perfect for businesses needing tailored solutions.',
      price: 'LKR 50,000',
      priceNote: 'Starting from',
      features: [
        'Responsive design for all devices',
        'Modern UI/UX implementation',
        'Database design and integration',
        'API development',
        'Security best practices',
        '30 days post-launch support',
      ],
      popular: false,
    },
    {
      title: 'E-Commerce Website Development',
      description: 'Complete online store solutions with payment gateway integration, inventory management, and customer management features.',
      price: 'LKR 75,000',
      priceNote: 'Starting from',
      features: [
        'Product catalog management',
        'Shopping cart & checkout',
        'Payment gateway integration (PayHere)',
        'Order management system',
        'Customer accounts & dashboard',
        'SEO optimization',
        '60 days post-launch support',
      ],
      popular: true,
    },
    {
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android using React Native and Flutter.',
      price: 'LKR 100,000',
      priceNote: 'Starting from',
      features: [
        'iOS and Android compatible',
        'Push notifications',
        'Offline functionality',
        'App store submission',
        'Backend API integration',
        '90 days post-launch support',
      ],
      popular: false,
    },
    {
      title: 'Enterprise Resource Planning (ERP)',
      description: 'Comprehensive ERP solutions to streamline your business operations including inventory, HR, finance, and more.',
      price: 'LKR 250,000',
      priceNote: 'Starting from',
      features: [
        'Customized modules',
        'Multi-user access control',
        'Real-time reporting & analytics',
        'Data migration support',
        'Employee training',
        '6 months support & maintenance',
      ],
      popular: false,
    },
    {
      title: 'Website Maintenance & Support',
      description: 'Ongoing maintenance, updates, and technical support for your existing websites and applications.',
      price: 'LKR 15,000',
      priceNote: 'Per month',
      features: [
        'Regular security updates',
        'Content updates',
        'Performance monitoring',
        'Backup management',
        'Bug fixes',
        '24/7 emergency support',
      ],
      popular: false,
    },
    {
      title: 'UI/UX Design Services',
      description: 'Professional user interface and user experience design for web and mobile applications.',
      price: 'LKR 25,000',
      priceNote: 'Starting from',
      features: [
        'User research & analysis',
        'Wireframing & prototyping',
        'Visual design',
        'Interactive prototypes',
        'Design system creation',
        'Unlimited revisions',
      ],
      popular: false,
    },
  ]

  const addons = [
    { name: 'Domain Registration (.lk)', price: 'LKR 3,500/year' },
    { name: 'Domain Registration (.com)', price: 'LKR 2,500/year' },
    { name: 'Web Hosting (Shared)', price: 'LKR 5,000/year' },
    { name: 'Web Hosting (VPS)', price: 'LKR 15,000/year' },
    { name: 'SSL Certificate', price: 'LKR 5,000/year' },
    { name: 'Email Hosting (5 accounts)', price: 'LKR 8,000/year' },
    { name: 'Additional Design Revisions', price: 'LKR 5,000/revision' },
    { name: 'Priority Support', price: 'LKR 10,000/month' },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="gradient-bg text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services & Pricing</h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Transparent pricing for professional software development services. 
              Choose the solution that fits your business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-xl shadow-lg overflow-hidden ${
                  service.popular ? 'ring-2 ring-primary-600' : 'border border-gray-200'
                }`}
              >
                {service.popular && (
                  <div className="absolute top-0 right-0 bg-primary-600 text-white px-4 py-1 text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
                  
                  <div className="mb-6">
                    <p className="text-sm text-gray-500">{service.priceNote}</p>
                    <p className="text-3xl font-bold text-primary-600">{service.price}</p>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className={`block text-center py-3 px-4 rounded-lg font-semibold transition-colors duration-200 ${
                      service.popular
                        ? 'bg-primary-600 text-white hover:bg-primary-700'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Additional Services & Add-ons
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Enhance your project with these additional services.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Service</th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900">Price</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {addons.map((addon, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-900">{addon.name}</td>
                    <td className="px-6 py-4 text-right text-primary-600 font-semibold">{addon.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A structured approach to delivering quality software solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'Understanding your requirements and business goals.' },
              { step: '02', title: 'Planning', description: 'Creating detailed project roadmap and timeline.' },
              { step: '03', title: 'Development', description: 'Building your solution with regular updates.' },
              { step: '04', title: 'Delivery', description: 'Testing, deployment, and ongoing support.' },
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                  {phase.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{phase.title}</h3>
                <p className="text-gray-600">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Terms Notice */}
      <section className="py-12 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Payment Terms</h3>
            <div className="grid md:grid-cols-2 gap-6 text-gray-600">
              <div>
                <p className="mb-2"><strong>Standard Payment Schedule:</strong></p>
                <ul className="list-disc list-inside space-y-1">
                  <li>50% advance payment upon project confirmation</li>
                  <li>25% upon milestone completion (mid-project review)</li>
                  <li>25% upon project delivery and acceptance</li>
                </ul>
              </div>
              <div>
                <p className="mb-2"><strong>Accepted Payment Methods:</strong></p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Bank transfer (Commercial Bank, BOC, Sampath)</li>
                  <li>PayHere (Credit/Debit Cards, Mobile Wallets)</li>
                  <li>Cheque payments</li>
                </ul>
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              * All prices are in Sri Lankan Rupees (LKR) and inclusive of applicable taxes. 
              Final pricing may vary based on specific project requirements. 
              Please <Link to="/contact" className="text-primary-600 hover:underline">contact us</Link> for a detailed quotation.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Every business is unique. Contact us for a personalized quotation tailored to your specific requirements.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200"
          >
            Request a Free Quote
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Services
