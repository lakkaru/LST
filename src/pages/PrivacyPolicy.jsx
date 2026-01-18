import { Link } from 'react-router-dom'

const PrivacyPolicy = () => {
  const lastUpdated = 'January 18, 2026'

  return (
    <div>
      {/* Hero Section */}
      <section className="gradient-bg text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-primary-100">Last Updated: {lastUpdated}</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            {/* Introduction */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-600 mb-4">
                Lakkaru Soft Technologies ("Company," "we," "us," or "our") is committed 
                to protecting your privacy and personal data. This Privacy Policy explains how we collect, 
                use, store, and protect your information when you use our website, services, or interact with us.
              </p>
              <p className="text-gray-600 mb-4">
                This policy complies with the Personal Data Protection Act No. 9 of 2022 of Sri Lanka 
                and applicable data protection regulations.
              </p>
              <p className="text-gray-600">
                <strong>Data Controller:</strong><br />
                Lakkaru Soft Technologies<br />
                No. 54/1, Wilbagedara, Bandarakoswaththa, Sri Lanka<br />
                Email: info@lakkaru.com<br />
                Phone: +94 37 433 1659
              </p>
            </div>

            {/* Information We Collect */}
            <div className="mb-10 bg-blue-50 p-6 rounded-xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-2">2.1 Personal Information</h3>
              <p className="text-gray-600 mb-2">
                We collect the following personal information when you engage with our services:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                <li><strong>Name:</strong> Your full name for identification and communication</li>
                <li><strong>Email Address:</strong> For project communication, updates, and support</li>
                <li><strong>Phone Number:</strong> For direct communication and urgent matters</li>
                <li><strong>Company/Organization Name:</strong> For business identification</li>
                <li><strong>Business Address:</strong> For invoicing and official correspondence</li>
                <li><strong>National ID/Passport Number:</strong> For contract verification (business clients)</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">2.2 Technical Information</h3>
              <p className="text-gray-600 mb-2">
                When you visit our website, we automatically collect:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                <li>IP address and browser type</li>
                <li>Device information and operating system</li>
                <li>Pages visited and time spent on our website</li>
                <li>Referring website and search terms used</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">2.3 Project-Related Information</h3>
              <p className="text-gray-600">
                During the course of our services, we may collect business information, technical 
                requirements, and other data necessary to complete your project.
              </p>
            </div>

            {/* How We Use Your Information */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-600 mb-2">We use your personal information for the following purposes:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>To provide and deliver our software development services</li>
                <li>To communicate with you about your project and our services</li>
                <li>To process payments and maintain financial records</li>
                <li>To send project updates, invoices, and important notifications</li>
                <li>To provide technical support and customer service</li>
                <li>To improve our website and services</li>
                <li>To comply with legal obligations</li>
                <li>To send marketing communications (with your consent)</li>
              </ul>
            </div>

            {/* Payment Data Security */}
            <div className="mb-10 bg-green-50 p-6 rounded-xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Payment Data Security</h2>
              
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure Payment Processing</h3>
                  <p className="text-gray-600">
                    <strong>We do not store your payment card details.</strong> All online payments 
                    are processed securely through PayHere, a leading payment gateway in Sri Lanka.
                  </p>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">PayHere Security Standards</h3>
              <p className="text-gray-600 mb-4">
                PayHere is a <strong>PCI DSS (Payment Card Industry Data Security Standard) compliant</strong> 
                payment service provider. This means:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                <li>Your credit/debit card information is encrypted using industry-standard SSL/TLS encryption</li>
                <li>Card data is stored in secure, PCI-compliant environments</li>
                <li>PayHere undergoes regular security audits and assessments</li>
                <li>We never have access to your full card number or CVV</li>
              </ul>

              <p className="text-gray-600">
                For more information about PayHere's security measures, please visit{' '}
                <a href="https://www.payhere.lk" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">
                  www.payhere.lk
                </a>
              </p>
            </div>

            {/* Legal Basis for Processing */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Legal Basis for Processing</h2>
              <p className="text-gray-600 mb-2">We process your personal data based on the following legal grounds:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li><strong>Contract Performance:</strong> Processing necessary to fulfill our service agreement with you</li>
                <li><strong>Legitimate Interests:</strong> For business operations, security, and service improvement</li>
                <li><strong>Legal Obligation:</strong> To comply with tax laws, business regulations, and court orders</li>
                <li><strong>Consent:</strong> For marketing communications and non-essential cookies</li>
              </ul>
            </div>

            {/* Data Sharing */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Data Sharing and Disclosure</h2>
              <p className="text-gray-600 mb-4">
                We do not sell your personal information. We may share your data with:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                <li><strong>Payment Processors:</strong> PayHere for processing online payments</li>
                <li><strong>Cloud Service Providers:</strong> For secure data storage and hosting</li>
                <li><strong>Professional Advisors:</strong> Accountants, auditors, and legal counsel</li>
                <li><strong>Government Authorities:</strong> When required by Sri Lankan law</li>
              </ul>
              <p className="text-gray-600">
                All third-party service providers are contractually obligated to protect your data 
                and use it only for the specified purposes.
              </p>
            </div>

            {/* Data Retention */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Data Retention</h2>
              <p className="text-gray-600 mb-2">We retain your personal data for the following periods:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li><strong>Project Data:</strong> 7 years after project completion (for legal and tax purposes)</li>
                <li><strong>Financial Records:</strong> 10 years as required by Sri Lankan tax law</li>
                <li><strong>Marketing Contacts:</strong> Until you unsubscribe or withdraw consent</li>
                <li><strong>Website Analytics:</strong> 26 months</li>
              </ul>
            </div>

            {/* Your Rights */}
            <div className="mb-10 bg-purple-50 p-6 rounded-xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Your Rights</h2>
              <p className="text-gray-600 mb-4">
                Under the Personal Data Protection Act of Sri Lanka, you have the following rights:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li><strong>Right of Access:</strong> Request a copy of your personal data we hold</li>
                <li><strong>Right to Rectification:</strong> Request correction of inaccurate data</li>
                <li><strong>Right to Erasure:</strong> Request deletion of your data (subject to legal obligations)</li>
                <li><strong>Right to Restrict Processing:</strong> Request limitation on how we use your data</li>
                <li><strong>Right to Data Portability:</strong> Receive your data in a structured format</li>
                <li><strong>Right to Object:</strong> Object to processing for direct marketing</li>
                <li><strong>Right to Withdraw Consent:</strong> Withdraw previously given consent at any time</li>
              </ul>
              <p className="text-gray-600 mt-4">
                To exercise any of these rights, please contact us at privacy@lakkarusoft.lk. 
                We will respond to your request within 30 days.
              </p>
            </div>

            {/* Data Security */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Data Security</h2>
              <p className="text-gray-600 mb-4">
                We implement appropriate technical and organizational measures to protect your personal data:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>SSL/TLS encryption for data transmission</li>
                <li>Secure servers with access controls</li>
                <li>Regular security assessments and updates</li>
                <li>Employee training on data protection</li>
                <li>Incident response procedures</li>
              </ul>
            </div>

            {/* Cookies */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Cookies</h2>
              <p className="text-gray-600 mb-4">
                Our website uses cookies to enhance your browsing experience. Types of cookies we use:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                <li><strong>Essential Cookies:</strong> Required for website functionality</li>
                <li><strong>Analytics Cookies:</strong> Help us understand website usage</li>
                <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements (with consent)</li>
              </ul>
              <p className="text-gray-600">
                You can manage cookie preferences through your browser settings.
              </p>
            </div>

            {/* International Transfers */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. International Data Transfers</h2>
              <p className="text-gray-600">
                Your data is primarily stored in Sri Lanka. If we need to transfer data internationally 
                (e.g., for cloud services), we ensure appropriate safeguards are in place, including 
                standard contractual clauses and adequacy decisions where applicable.
              </p>
            </div>

            {/* Children's Privacy */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Children's Privacy</h2>
              <p className="text-gray-600">
                Our services are not directed to individuals under 18 years of age. We do not knowingly 
                collect personal information from children. If you believe we have collected data from 
                a child, please contact us immediately.
              </p>
            </div>

            {/* Changes to Policy */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Changes to This Policy</h2>
              <p className="text-gray-600">
                We may update this Privacy Policy from time to time. Significant changes will be 
                communicated via email or through a notice on our website. The "Last Updated" date 
                at the top of this policy indicates when it was last revised.
              </p>
            </div>

            {/* Complaints */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Complaints</h2>
              <p className="text-gray-600 mb-4">
                If you have concerns about how we handle your personal data, please contact us first. 
                If you are not satisfied with our response, you have the right to lodge a complaint 
                with the Data Protection Authority of Sri Lanka.
              </p>
            </div>

            {/* Contact */}
            <div className="bg-gray-100 p-6 rounded-xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">15. Contact Us</h2>
              <p className="text-gray-600 mb-4">
                For any questions or requests regarding this Privacy Policy or your personal data:
              </p>
              <div className="text-gray-600">
                <p><strong>Data Protection Officer</strong></p>
                <p>Lakkaru Soft Technologies</p>
                <p>No. 54/1, Wilbagedara, Bandarakoswaththa, Sri Lanka</p>
                <p>Email: info@lakkaru.com</p>
                <p>Phone: +94 37 433 1659</p>
              </div>
            </div>

          </div>

          {/* Related Links */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Policies</h3>
            <div className="flex flex-wrap gap-4">
              <Link to="/terms-and-conditions" className="text-primary-600 hover:underline">Terms and Conditions</Link>
              <Link to="/refund-policy" className="text-primary-600 hover:underline">Refund & Cancellation Policy</Link>
              <Link to="/contact" className="text-primary-600 hover:underline">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PrivacyPolicy
