import { Link } from 'react-router-dom'

const RefundPolicy = () => {
  const lastUpdated = 'January 18, 2026'

  return (
    <div>
      {/* Hero Section */}
      <section className="gradient-bg text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Refund & Cancellation Policy</h1>
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
                This Refund and Cancellation Policy outlines the terms and conditions under which 
                Lakkaru Soft Technologies ("Company," "we," "us," or "our") provides refunds 
                for our software development and related services.
              </p>
              <p className="text-gray-600">
                We understand that circumstances may change, and we aim to be fair and transparent 
                in our refund process while also protecting the time and resources invested in your project.
              </p>
            </div>

            {/* Overview */}
            <div className="mb-10 bg-yellow-50 p-6 rounded-xl border border-yellow-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">⚠️ Important Notice</h2>
              <p className="text-gray-600">
                Software development is a service-based industry where significant work is performed 
                from the project's inception. Unlike physical products, the time, expertise, and resources 
                invested in planning, designing, and developing software cannot be returned or resold. 
                This policy reflects these unique characteristics while still providing fair terms for our clients.
              </p>
            </div>

            {/* Refund Eligibility */}
            <div className="mb-10 bg-green-50 p-6 rounded-xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. When You May Be Eligible for a Refund</h2>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-2">2.1 Full Refund (100%)</h3>
              <p className="text-gray-600 mb-2">You may be eligible for a full refund of your advance payment if:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                <li>You cancel within <strong>48 hours</strong> of making the initial payment AND before any work has commenced</li>
                <li>We are unable to start the project within the agreed timeframe due to our own capacity issues</li>
                <li>We determine that we cannot deliver the agreed scope of work</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">2.2 Partial Refund</h3>
              <p className="text-gray-600 mb-2">Partial refunds are calculated based on work completed:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                <li><strong>Before Requirements Phase Completion:</strong> Up to 75% refund of advance payment</li>
                <li><strong>After Requirements, Before Development:</strong> Up to 50% refund of advance payment</li>
                <li><strong>During Active Development:</strong> Refund calculated as (Advance Paid - Value of Work Completed)</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">2.3 No Refund Situations</h3>
              <p className="text-gray-600 mb-2">Refunds will NOT be provided in the following circumstances:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Project has been delivered and accepted by the client</li>
                <li>Work completed exceeds the value of payments made</li>
                <li>Cancellation due to client's failure to provide required materials, feedback, or approvals</li>
                <li>Client's change of mind after significant development work has been completed</li>
                <li>Delays caused by the client's unavailability or late responses</li>
              </ul>
            </div>

            {/* Cancellation Process */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Project Cancellation Process</h2>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-2">3.1 How to Cancel</h3>
              <p className="text-gray-600 mb-4">To cancel a project, you must:</p>
              <ol className="list-decimal list-inside text-gray-600 space-y-2 mb-4">
                <li>Submit a written cancellation request via email to projects@lakkarusoft.lk</li>
                <li>Include your project name/reference number</li>
                <li>State the reason for cancellation</li>
                <li>Allow up to 5 business days for acknowledgment</li>
              </ol>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">3.2 What Happens After Cancellation</h3>
              <p className="text-gray-600 mb-2">Upon receiving your cancellation request:</p>
              <ol className="list-decimal list-inside text-gray-600 space-y-2">
                <li>We will stop all work on your project</li>
                <li>We will prepare a Work Completion Report detailing all work done</li>
                <li>We will calculate any applicable refund based on this policy</li>
                <li>You will receive partial deliverables for the work completed (upon final settlement)</li>
                <li>Refund (if applicable) will be processed within 14 business days</li>
              </ol>
            </div>

            {/* Refund Calculation */}
            <div className="mb-10 bg-blue-50 p-6 rounded-xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Refund Calculation Method</h2>
              
              <p className="text-gray-600 mb-4">
                Refunds are calculated using the following formula:
              </p>
              
              <div className="bg-white p-4 rounded-lg mb-4 font-mono text-center">
                <strong>Refund Amount = Total Payments Made - Value of Work Completed</strong>
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">Work Valuation</h3>
              <p className="text-gray-600 mb-2">Work completed is valued based on:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                <li><strong>Requirements & Planning Phase:</strong> 20% of total project value</li>
                <li><strong>UI/UX Design Phase:</strong> 15% of total project value</li>
                <li><strong>Development Phase:</strong> 50% of total project value (prorated by completion %)</li>
                <li><strong>Testing Phase:</strong> 10% of total project value</li>
                <li><strong>Deployment & Documentation:</strong> 5% of total project value</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">Example Calculation</h3>
              <div className="bg-white p-4 rounded-lg text-gray-600">
                <p><strong>Project Value:</strong> LKR 100,000</p>
                <p><strong>Advance Paid:</strong> LKR 50,000 (50%)</p>
                <p><strong>Work Completed:</strong> Requirements (20%) + Design (15%) + 50% of Development (25%)</p>
                <p><strong>Total Work Value:</strong> LKR 60,000</p>
                <p><strong>Balance Due to Company:</strong> LKR 60,000 - 50,000 = LKR 10,000</p>
                <p className="mt-2"><em>In this case, no refund is due; client owes LKR 10,000 for work completed.</em></p>
              </div>
            </div>

            {/* Specific Service Policies */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Service-Specific Policies</h2>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-2">5.1 Custom Development Projects</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                <li>Standard refund policy applies as described above</li>
                <li>Milestone-based projects: No refund for completed and approved milestones</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">5.2 Maintenance & Support Plans</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                <li>Monthly plans: Can be cancelled with 30 days notice; no refund for current month</li>
                <li>Annual plans: Prorated refund for unused complete months (minus 15% early termination fee)</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">5.3 Hosting & Domain Services</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                <li>Domain registrations: Non-refundable (domains cannot be cancelled once registered)</li>
                <li>Hosting: Prorated refund for unused complete months within first 30 days only</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">5.4 UI/UX Design Services</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>No refund after design concepts have been presented</li>
                <li>50% refund if cancelled before first design presentation</li>
              </ul>
            </div>

            {/* Non-Refundable Items */}
            <div className="mb-10 bg-red-50 p-6 rounded-xl border border-red-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Non-Refundable Items</h2>
              <p className="text-gray-600 mb-2">The following are strictly non-refundable:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Third-party software licenses purchased on your behalf</li>
                <li>Domain name registrations</li>
                <li>SSL certificates</li>
                <li>Third-party API subscriptions or credits</li>
                <li>Rush/expedited service fees</li>
                <li>Consultation fees for delivered consultations</li>
                <li>Training sessions that have been conducted</li>
              </ul>
            </div>

            {/* Refund Process */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Refund Processing</h2>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-2">7.1 Processing Time</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                <li>Refund requests are processed within 14 business days of approval</li>
                <li>Bank transfers may take an additional 3-5 business days</li>
                <li>Credit/debit card refunds may take 5-10 business days to reflect</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">7.2 Refund Methods</h3>
              <p className="text-gray-600 mb-2">Refunds will be issued via the original payment method:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Bank transfer payments → Refund to same bank account</li>
                <li>Card payments (via PayHere) → Refund to same card</li>
                <li>Cheque payments → Bank transfer to client's account</li>
              </ul>
            </div>

            {/* Dispute Resolution */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Dispute Resolution</h2>
              <p className="text-gray-600 mb-4">
                If you disagree with a refund decision:
              </p>
              <ol className="list-decimal list-inside text-gray-600 space-y-2 mb-4">
                <li>First, discuss the matter with your project manager</li>
                <li>If unresolved, submit a formal dispute to management@lakkarusoft.lk</li>
                <li>Management will review and respond within 10 business days</li>
                <li>If still unresolved, disputes will be handled as per the arbitration clause in our Terms and Conditions</li>
              </ol>
            </div>

            {/* Client Responsibilities */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Client Responsibilities</h2>
              <p className="text-gray-600 mb-2">
                To maintain eligibility for refunds, clients must:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Respond to communications within reasonable timeframes (typically 5 business days)</li>
                <li>Provide required materials, content, and feedback as requested</li>
                <li>Attend scheduled meetings and provide timely approvals</li>
                <li>Communicate any concerns promptly rather than at project end</li>
              </ul>
              <p className="text-gray-600 mt-4">
                Failure to meet these responsibilities may result in reduced refund eligibility or project delays 
                being attributed to the client.
              </p>
            </div>

            {/* Force Majeure */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Force Majeure</h2>
              <p className="text-gray-600">
                In the event of circumstances beyond our control (natural disasters, pandemics, government 
                actions, etc.) that prevent project completion, we will work with you to either reschedule 
                the project or provide a fair partial refund based on work completed. Neither party will 
                be liable for delays caused by such events.
              </p>
            </div>

            {/* Contact for Refunds */}
            <div className="bg-gray-100 p-6 rounded-xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact Us for Refund Requests</h2>
              <p className="text-gray-600 mb-4">
                For all refund and cancellation requests, please contact:
              </p>
              <div className="text-gray-600">
                <p><strong>Accounts Department</strong></p>
                <p>Lakkaru Soft Technologies</p>
                <p>No. 54/1, Wilbagedara, Bandarakoswaththa, Sri Lanka</p>
                <p>Email: hello@lakkaru.com</p>
                <p>Phone: +94 37 433 1659</p>
                <p className="mt-4 text-sm">
                  Please include your project reference number in all communications.
                </p>
              </div>
            </div>

            {/* Policy Updates */}
            <div className="mt-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Policy Updates</h2>
              <p className="text-gray-600">
                This Refund and Cancellation Policy may be updated from time to time. The policy in effect 
                at the time of your project agreement will govern your refund rights for that specific project.
                Current clients will be notified of any significant changes via email.
              </p>
            </div>

          </div>

          {/* Related Links */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Policies</h3>
            <div className="flex flex-wrap gap-4">
              <Link to="/terms-and-conditions" className="text-primary-600 hover:underline">Terms and Conditions</Link>
              <Link to="/privacy-policy" className="text-primary-600 hover:underline">Privacy Policy</Link>
              <Link to="/contact" className="text-primary-600 hover:underline">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default RefundPolicy
