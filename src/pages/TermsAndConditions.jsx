import { Link } from 'react-router-dom'

const TermsAndConditions = () => {
  const lastUpdated = 'January 18, 2026'

  return (
    <div>
      {/* Hero Section */}
      <section className="gradient-bg text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms and Conditions</h1>
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
                Welcome to Lakkaru Soft Technologies (Pvt) Ltd ("Company," "we," "us," or "our"). 
                These Terms and Conditions ("Terms") govern your use of our software development services, 
                website, and any related products or services offered by us.
              </p>
              <p className="text-gray-600 mb-4">
                By engaging our services or using our website, you ("Client," "you," or "your") agree to 
                be bound by these Terms. If you do not agree with any part of these Terms, please do not 
                use our services.
              </p>
              <p className="text-gray-600">
                <strong>Company Information:</strong><br />
                Lakkaru Soft Technologies<br />
                Business Registration No: 39/862<br />
                No. 54/1, Wilbagedara, Bandarakoswaththa, Sri Lanka<br />
                Email: info@lakkaru.com | Phone: +94 37 433 1659
              </p>
            </div>

            {/* Definitions */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Definitions</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li><strong>"Services"</strong> refers to software development, web development, mobile app development, and any other IT services provided by the Company.</li>
                <li><strong>"Deliverables"</strong> refers to all work products, software, code, designs, and documentation produced as part of the Services.</li>
                <li><strong>"Project"</strong> refers to the specific scope of work agreed upon between the Company and the Client.</li>
                <li><strong>"Agreement"</strong> refers to the contract formed between the Company and Client, including these Terms and any project-specific proposals or contracts.</li>
              </ul>
            </div>

            {/* Services */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Services</h2>
              <p className="text-gray-600 mb-4">
                Lakkaru Soft Technologies provides the following services:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                <li>Custom Web Application Development</li>
                <li>E-Commerce Website Development</li>
                <li>Mobile Application Development (iOS & Android)</li>
                <li>Enterprise Resource Planning (ERP) Solutions</li>
                <li>UI/UX Design Services</li>
                <li>Website Maintenance and Support</li>
                <li>Cloud Solutions and Hosting</li>
              </ul>
              <p className="text-gray-600">
                The specific scope, features, and deliverables for each project will be detailed in a 
                separate project proposal or statement of work (SOW) agreed upon by both parties.
              </p>
            </div>

            {/* Service Level Agreement (SLA) */}
            <div className="mb-10 bg-blue-50 p-6 rounded-xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Service Level Agreement (SLA)</h2>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-2">4.1 Project Timeline</h3>
              <p className="text-gray-600 mb-4">
                Project timelines will be established in the project proposal. We commit to:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                <li>Providing regular progress updates (weekly or as agreed)</li>
                <li>Notifying the Client of any delays within 48 hours of identification</li>
                <li>Delivering milestone reviews as per the agreed schedule</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">4.2 Response Times</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                <li><strong>Critical Issues (System Down):</strong> Response within 4 hours, resolution within 24 hours</li>
                <li><strong>High Priority Issues:</strong> Response within 8 hours, resolution within 48 hours</li>
                <li><strong>Medium Priority Issues:</strong> Response within 24 hours, resolution within 5 business days</li>
                <li><strong>Low Priority Issues:</strong> Response within 48 hours, resolution within 10 business days</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">4.3 Availability</h3>
              <p className="text-gray-600 mb-4">
                For hosted solutions and maintenance contracts:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Target uptime: 99.5% monthly availability</li>
                <li>Scheduled maintenance will be communicated 72 hours in advance</li>
                <li>Emergency maintenance may be performed with 4-hour notice</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2">4.4 Support Hours</h3>
              <p className="text-gray-600">
                Standard support is available Monday to Friday, 9:00 AM to 6:00 PM (Sri Lanka Standard Time). 
                24/7 emergency support is available for clients with Priority Support agreements.
              </p>
            </div>

            {/* Payment Terms */}
            <div className="mb-10 bg-green-50 p-6 rounded-xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Payment Terms</h2>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-2">5.1 Pricing</h3>
              <p className="text-gray-600 mb-4">
                All prices are quoted in Sri Lankan Rupees (LKR) unless otherwise specified. 
                Prices are inclusive of applicable government taxes. A detailed quotation will be 
                provided before project commencement.
              </p>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">5.2 Payment Schedule</h3>
              <p className="text-gray-600 mb-2">Standard payment terms:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                <li><strong>50% Advance Payment:</strong> Due upon project confirmation and before work begins</li>
                <li><strong>25% Milestone Payment:</strong> Due upon completion of mid-project milestone (as defined in SOW)</li>
                <li><strong>25% Final Payment:</strong> Due upon project delivery and client acceptance</li>
              </ul>
              <p className="text-gray-600 mb-4">
                For maintenance and ongoing services, payments are due monthly in advance.
              </p>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">5.3 Payment Methods</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                <li>Bank Transfer (Commercial Bank of Ceylon, Bank of Ceylon, Sampath Bank)</li>
                <li>Online Payment via PayHere (Credit/Debit Cards, Mobile Wallets)</li>
                <li>Cheque (Crossed cheque in favor of "Lakkaru Soft Technologies (Pvt) Ltd")</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">5.4 Late Payments</h3>
              <p className="text-gray-600">
                Payments not received within 14 days of the due date will incur a late fee of 2% per month 
                on the outstanding amount. The Company reserves the right to suspend services until 
                outstanding payments are cleared.
              </p>
            </div>

            {/* Intellectual Property */}
            <div className="mb-10 bg-purple-50 p-6 rounded-xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Intellectual Property Rights</h2>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-2">6.1 Ownership of Deliverables</h3>
              <p className="text-gray-600 mb-4">
                Upon receipt of full payment, all intellectual property rights in the custom-developed 
                Deliverables created specifically for the Client shall be transferred to the Client, except for:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                <li>Pre-existing materials owned by the Company</li>
                <li>Third-party components and libraries (which remain under their respective licenses)</li>
                <li>Generic code, frameworks, and tools developed by the Company that may be reused in other projects</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">6.2 Company's Rights</h3>
              <p className="text-gray-600 mb-4">
                The Company retains the right to:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                <li>Display completed work in its portfolio (unless confidentiality is agreed)</li>
                <li>Use general knowledge and skills acquired during the project</li>
                <li>Reuse generic components and methodologies</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">6.3 Client's Responsibility</h3>
              <p className="text-gray-600">
                The Client warrants that all materials, content, and information provided to the Company 
                do not infringe upon any third-party intellectual property rights. The Client shall 
                indemnify the Company against any claims arising from such infringement.
              </p>
            </div>

            {/* Confidentiality */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Confidentiality</h2>
              <p className="text-gray-600 mb-4">
                Both parties agree to maintain the confidentiality of all proprietary information 
                shared during the course of the project. Confidential information includes, but is not limited to:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                <li>Business strategies and plans</li>
                <li>Technical specifications and source code</li>
                <li>Financial information</li>
                <li>Customer data and databases</li>
              </ul>
              <p className="text-gray-600">
                This confidentiality obligation shall survive the termination of the Agreement for a 
                period of three (3) years.
              </p>
            </div>

            {/* Warranties and Liability */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Warranties and Limitation of Liability</h2>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-2">8.1 Warranty Period</h3>
              <p className="text-gray-600 mb-4">
                The Company provides a warranty period of 30 days from project delivery, during which 
                bugs and defects in the Deliverables will be fixed at no additional cost. This warranty 
                covers defects in workmanship but does not cover:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                <li>Issues arising from client modifications</li>
                <li>Third-party software or hosting issues</li>
                <li>New feature requests or enhancements</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">8.2 Limitation of Liability</h3>
              <p className="text-gray-600">
                To the maximum extent permitted by Sri Lankan law, the Company's total liability 
                shall not exceed the total fees paid by the Client for the specific project giving 
                rise to the claim. The Company shall not be liable for any indirect, incidental, 
                consequential, or punitive damages.
              </p>
            </div>

            {/* Termination */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Termination</h2>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-2">9.1 Termination by Client</h3>
              <p className="text-gray-600 mb-4">
                The Client may terminate the Agreement by providing 14 days written notice. Upon termination:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                <li>Client shall pay for all work completed up to the termination date</li>
                <li>Any advance payments for uncompleted work will be refunded as per the Refund Policy</li>
                <li>Partial Deliverables will be provided upon payment</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">9.2 Termination by Company</h3>
              <p className="text-gray-600">
                The Company may terminate the Agreement if the Client fails to make payments when due 
                (after 30 days notice), breaches these Terms, or becomes insolvent.
              </p>
            </div>

            {/* Dispute Resolution */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Dispute Resolution and Governing Law</h2>
              <p className="text-gray-600 mb-4">
                These Terms shall be governed by and construed in accordance with the laws of the 
                Democratic Socialist Republic of Sri Lanka.
              </p>
              <p className="text-gray-600 mb-4">
                In the event of any dispute, the parties agree to first attempt resolution through 
                good faith negotiation. If negotiation fails, disputes shall be resolved through 
                arbitration under the Arbitration Act No. 11 of 1995 of Sri Lanka.
              </p>
              <p className="text-gray-600">
                The courts of Colombo, Sri Lanka shall have exclusive jurisdiction over any 
                matters arising from these Terms.
              </p>
            </div>

            {/* Amendments */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Amendments</h2>
              <p className="text-gray-600">
                The Company reserves the right to modify these Terms at any time. Significant changes 
                will be communicated to existing clients via email. Continued use of our services 
                after such modifications constitutes acceptance of the updated Terms.
              </p>
            </div>

            {/* Contact */}
            <div className="bg-gray-100 p-6 rounded-xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact Information</h2>
              <p className="text-gray-600 mb-4">
                For any questions regarding these Terms and Conditions, please contact us:
              </p>
              <div className="text-gray-600">
                <p><strong>Lakkaru Soft Technologies</strong></p>
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
              <Link to="/privacy-policy" className="text-primary-600 hover:underline">Privacy Policy</Link>
              <Link to="/refund-policy" className="text-primary-600 hover:underline">Refund & Cancellation Policy</Link>
              <Link to="/contact" className="text-primary-600 hover:underline">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TermsAndConditions
