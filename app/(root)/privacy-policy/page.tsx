"use client";

import { useState } from 'react';

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const sections = [
    {
      id: 'introduction',
      title: '1. INTRODUCTION',
      content: (
        <div>
          <p className="mb-4">
            SolverDeck ("we", "our", "us") is committed to protecting and respecting your privacy. 
            This Privacy Policy explains how we collect, use, and safeguard your personal data when 
            you use our services, visit our website at <a href="https://www.solverdeck.com" className="underline text-white">solverdeck</a>, or otherwise interact with us.
          </p>
          <p className="mb-4">
            We are a data controller for the purposes of the UK General Data Protection Regulation
            (UK GDPR) and the Data Protection Act 2018. This means we determine the purposes
            and means of processing your personal data.
          </p>
          <p className="mb-4">
            Please read this Privacy Policy carefully to understand our practices regarding
            your personal data.
          </p>
        </div>
      )
    },
    {
      id: 'personal-data',
      title: '2. PERSONAL DATA WE COLLECT',
      content: (
        <div>
          <p className="mb-4">We may collect and process the following categories of personal data:</p>
          <h4 className="font-semibold mt-4 mb-2">2.1 Information you provide to us:</h4>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-1">Identity Data: including first name, last name, username or similar identifier, title</li>
            <li className="mb-1">Contact Data: including billing address, delivery address, email address, and telephone numbers</li>
            <li className="mb-1">Financial Data: including bank account and payment card details</li>
            <li className="mb-1">Transaction Data: including details about payments to and from you and other details of services you have purchased from us</li>
            <li className="mb-1">Profile Data: including your username and password, purchases or orders made by you, your interests, preferences, feedback, and survey responses</li>
            <li className="mb-1">Marketing and Communications Data: including your preferences in receiving marketing from us and our third parties and your communication preferences</li>
          </ul>

          <h4 className="font-semibold mt-4 mb-2">2.2 Information we collect automatically:</h4>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-1">Technical Data: including internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access our website</li>
            <li className="mb-1">Usage Data: including information about how you use our website and services</li>
          </ul>

          <h4 className="font-semibold mt-4 mb-2">2.3 Information we receive from other sources:</h4>
          <p className="mb-4">
            We may receive personal data about you from various third parties and public sources,
            such as analytics providers, advertising networks, search information providers, and
            business partners.
          </p>

          <h4 className="font-semibold mt-4 mb-2">2.4 Special Categories of Personal Data:</h4>
          <p className="mb-4">
            We do not collect any Special Categories of Personal Data about you (this includes
            details about your race or ethnicity, religious or philosophical beliefs, sex life, sexual
            orientation, political opinions, trade union membership, information about your health,
            and genetic and biometric data).
          </p>
          <p className="mb-4">
            If our AI systems process any special category data, we will do so only with your
            explicit consent or as otherwise permitted by law.
          </p>
        </div>
      )
    },
    {
      id: 'how-we-use',
      title: '3. HOW WE USE YOUR PERSONAL DATA',
      content: (
        <div>
          <p className="mb-4">
            We will only use your personal data when the law allows us to. Most commonly, we
            will use your personal data in the following circumstances:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-1">Where we need to perform the contract we are about to enter into or have entered into with you</li>
            <li className="mb-1">Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests</li>
            <li className="mb-1">Where we need to comply with a legal obligation</li>
            <li className="mb-1">Where you have given consent</li>
          </ul>

          <h4 className="font-semibold mt-4 mb-2">3.1 Purposes for which we will use your personal data:</h4>
          <div className="mb-4 overflow-x-auto">
            <table className="min-w-full bg-neutral-900 border border-gray-700">
              <thead className="bg-neutral-800">
                <tr>
                  <th className="border border-gray-700 px-4 py-2 text-left">Purpose/Activity</th>
                  <th className="border border-gray-700 px-4 py-2 text-left">Type of data</th>
                  <th className="border border-gray-700 px-4 py-2 text-left">Lawful basis for processing</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-700 px-4 py-2">To register you as a new customer</td>
                  <td className="border border-gray-700 px-4 py-2">Identity, Contact</td>
                  <td className="border border-gray-700 px-4 py-2">Performance of a contract with you</td>
                </tr>
                <tr>
                  <td className="border border-gray-700 px-4 py-2">To process and deliver your order including: (a) Manage payments, fees and charges (b) Collect and recover money owed to us</td>
                  <td className="border border-gray-700 px-4 py-2">Identity, Contact, Financial, Transaction, Marketing and Communications</td>
                  <td className="border border-gray-700 px-4 py-2">(a) Performance of a contract with you (b) Necessary for our legitimate interests (to recover debts due to us)</td>
                </tr>
                <tr>
                  <td className="border border-gray-700 px-4 py-2">To manage our relationship with you including: (a) Notifying you about changes to our terms or privacy policy (b) Asking you to leave a review or take a survey</td>
                  <td className="border border-gray-700 px-4 py-2">Identity, Contact, Profile, Marketing and Communications</td>
                  <td className="border border-gray-700 px-4 py-2">(a) Performance of a contract with you (b) Necessary to comply with a legal obligation (c) Necessary for our legitimate interests</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h4 className="font-semibold mt-4 mb-2">3.2 AI-Specific Processing:</h4>
          <p className="mb-4">When providing AI integration services, we may process your personal data to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-1">Train, test, or improve AI models (only with your explicit consent)</li>
            <li className="mb-1">Provide AI-powered analytics or insights</li>
            <li className="mb-1">Customise AI solutions to your specific needs</li>
            <li className="mb-1">Monitor AI system performance and accuracy</li>
          </ul>

          <h4 className="font-semibold mt-4 mb-2">3.3 Marketing:</h4>
          <p className="mb-4">
            We strive to provide you with choices regarding certain personal data uses,
            particularly around marketing and advertising.
          </p>
          <p className="mb-4">
            You will receive marketing communications from us if you have requested
            information from us or purchased services from us and you have not opted out of
            receiving that marketing.
          </p>
          <p className="mb-4">
            You can ask us to stop sending you marketing messages at any time by following the
            opt out links on any marketing message sent to you or by contacting us at any time.
          </p>

          <h4 className="font-semibold mt-4 mb-2">3.4 Cookies:</h4>
          <p className="mb-4">
            Our website uses cookies to distinguish you from other users of our website. This
            helps us to provide you with a good experience when you browse our website and also
            allows us to improve our site. For detailed information on the cookies we use and the
            purposes for which we use them, see our Cookie Policy.
          </p>
        </div>
      )
    },
    {
      id: 'disclosure',
      title: '4. DISCLOSURE OF YOUR PERSONAL DATA',
      content: (
        <div>
          <p className="mb-4">We may share your personal data with the following categories of recipients:</p>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-1">Service Providers: IT and system administration services, cloud service providers, payment processors, and other service providers who help us deliver our services</li>
            <li className="mb-1">Professional Advisers: including lawyers, bankers, auditors, and insurers who provide consultancy, banking, legal, insurance, and accounting services</li>
            <li className="mb-1">HM Revenue & Customs, Regulators and Other Authorities: who require reporting of processing activities in certain circumstances</li>
            <li className="mb-1">Business Partners: third parties with whom we partner to offer certain products, services, or promotions</li>
            <li className="mb-1">Third Parties: to whom we may choose to sell, transfer, or merge parts of our business or our assets. Alternatively, we may seek to acquire other businesses or merge with them.</li>
          </ul>
          <p className="mb-4">
            We require all third parties to respect the security of your personal data and to treat it
            in accordance with the law. We do not allow our third-party service providers to use
            your personal data for their own purposes and only permit them to process your
            personal data for specified purposes and in accordance with our instructions.
          </p>
        </div>
      )
    },
    {
      id: 'international',
      title: '5. INTERNATIONAL TRANSFERS',
      content: (
        <div>
          <p className="mb-4">
            We may transfer your personal data outside the UK to service providers, advisers, or
            business partners operating outside the UK. Whenever we transfer your personal
            data out of the UK, we ensure a similar degree of protection is afforded to it by
            ensuring at least one of the following safeguards is implemented:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-1">We will only transfer your personal data to countries that have been deemed to provide an adequate level of protection for personal data by the UK government.</li>
            <li className="mb-1">Where we use certain service providers, we may use specific contracts approved by the UK government which give personal data the same protection it has in the UK.</li>
            <li className="mb-1">Where we use providers based in the US, we may transfer data to them if they are part of a framework that ensures they provide similar protection to personal data shared between the UK and the US.</li>
          </ul>
          <p className="mb-4">
            Please contact us if you want further information on the specific mechanism used by
            us when transferring your personal data out of the UK.
          </p>
        </div>
      )
    },
    {
      id: 'security',
      title: '6. DATA SECURITY',
      content: (
        <div>
          <p className="mb-4">
            We have put in place appropriate security measures to prevent your personal data from
            being accidentally lost, used or accessed in an unauthorised way, altered or disclosed.
            In addition, we limit access to your personal data to those employees, agents,
            contractors and other third parties who have a business need to know. They will only
            process your personal data on our instructions and they are subject to a duty of
            confidentiality.
          </p>
          <p className="mb-4">
            We have put in place procedures to deal with any suspected personal data breach and
            will notify you and any applicable regulator of a breach where we are legally required
            to do so.
          </p>
        </div>
      )
    },
    {
      id: 'retention',
      title: '7. DATA RETENTION',
      content: (
        <div>
          <p className="mb-4">
            We will only retain your personal data for as long as necessary to fulfil the purposes
            we collected it for, including for the purposes of satisfying any legal, accounting, or
            reporting requirements.
          </p>
          <p className="mb-4">
            To determine the appropriate retention period for personal data, we consider the
            amount, nature, and sensitivity of the personal data, the potential risk of harm from
            unauthorised use or disclosure of your personal data, the purposes for which we
            process your personal data and whether we can achieve those purposes through other
            means, and the applicable legal requirements.
          </p>
          <p className="mb-4">
            Details of retention periods for different aspects of your personal data are available
            upon request.
          </p>
        </div>
      )
    },
    {
      id: 'rights',
      title: '8. YOUR LEGAL RIGHTS',
      content: (
        <div>
          <p className="mb-4">
            Under certain circumstances, you have rights under data protection laws in relation
            to your personal data:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-1">Request access to your personal data (commonly known as a "data subject access request").</li>
            <li className="mb-1">Request correction of the personal data that we hold about you.</li>
            <li className="mb-1">Request erasure of your personal data.</li>
            <li className="mb-1">Object to processing of your personal data.</li>
            <li className="mb-1">Request restriction of processing your personal data.</li>
            <li className="mb-1">Request transfer of your personal data.</li>
            <li className="mb-1">Right to withdraw consent where we are relying on consent to process your personal data.</li>
          </ul>
          <p className="mb-4">
            If you wish to exercise any of these rights, please contact us using the details
            provided below.
          </p>
          <p className="mb-4">
            You will not have to pay a fee to access your personal data (or to exercise any of the
            other rights). However, we may charge a reasonable fee if your request is clearly
            unfounded, repetitive or excessive. Alternatively, we could refuse to comply with your
            request in these circumstances.
          </p>
          <p className="mb-4">
            We may need to request specific information from you to help us confirm your
            identity and ensure your right to access your personal data (or to exercise any of
            your other rights). This is a security measure to ensure that personal data is not
            disclosed to any person who has no right to receive it. We may also contact you to
            ask you for further information in relation to your request to speed up our response.
          </p>
          <p className="mb-4">
            We try to respond to all legitimate requests within one month. Occasionally it could
            take us longer than a month if your request is particularly complex or you have made a
            number of requests. In this case, we will notify you and keep you updated.
          </p>
        </div>
      )
    },
    {
      id: 'ai-considerations',
      title: '9. AI-SPECIFIC PRIVACY CONSIDERATIONS',
      content: (
        <div>
          <h4 className="font-semibold mt-4 mb-2">9.1 AI Training and Development:</h4>
          <p className="mb-4">If we use personal data to train or develop AI systems, we will:</p>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-1">Obtain appropriate consent where required</li>
            <li className="mb-1">Implement data minimisation principles</li>
            <li className="mb-1">Anonymise or pseudonymise data where possible</li>
            <li className="mb-1">Ensure transparency about how data is used</li>
          </ul>

          <h4 className="font-semibold mt-4 mb-2">9.2 Automated Decision-Making:</h4>
          <p className="mb-4">Some of our services may involve automated decision-making, including profiling. Where this occurs:</p>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-1">We will provide meaningful information about the logic involved</li>
            <li className="mb-1">We will explain the significance and envisaged consequences</li>
            <li className="mb-1">We will implement suitable safeguards</li>
            <li className="mb-1">We will enable you to obtain human intervention, express your point of view, and contest the decision</li>
          </ul>

          <h4 className="font-semibold mt-4 mb-2">9.3 AI Ethics:</h4>
          <p className="mb-4">We are committed to developing and using AI systems ethically. This includes:</p>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-1">Regularly testing for bias and discrimination</li>
            <li className="mb-1">Ensuring AI systems are explainable and transparent where possible</li>
            <li className="mb-1">Maintaining human oversight of AI systems</li>
            <li className="mb-1">Regularly reviewing and updating our AI governance framework</li>
          </ul>
        </div>
      )
    },
    {
      id: 'changes',
      title: '10. CHANGES TO THE PRIVACY POLICY',
      content: (
        <div>
          <p className="mb-4">
            We may update this Privacy Policy from time to time. We will notify you of any
            changes by posting the new Privacy Policy on this page and updating the "Last
            Updated" date at the top of this Privacy Policy.
          </p>
          <p className="mb-4">
            You are advised to review this Privacy Policy periodically for any changes. Changes
            to this Privacy Policy are effective when they are posted on this page.
          </p>
        </div>
      )
    },
    {
      id: 'contact',
      title: '11. CONTACT US',
      content: (
        <div>
          <p className="mb-4">
            If you have any questions about this Privacy Policy or our privacy practices,
            please contact us:
          </p>
          <ul className="list-none mb-4">
            <li className="mb-1">• By email: <a href="mailto:info@solverdeck.com" className="underline text-white">info@solverdeck.com</a></li>
            <li className="mb-1">• By phone: [PHONE NUMBER]</li>
            <li className="mb-1">• By post: [POSTAL ADDRESS]</li>
          </ul>
          <p className="mb-4">
            You have the right to make a complaint at any time to the Information
            Commissioner's Office (ICO), the UK supervisory authority for data protection issues
            (<a href="https://www.ico.org.uk" target="_blank" rel="noopener noreferrer" className="underline text-white">www.ico.org.uk</a>).
            We would, however, appreciate the chance to deal with your concerns before you approach the ICO so please contact us in the first instance.
          </p>
        </div>
      )
    }
  ];

  // Toggle section visibility
  const toggleSection = (id: string) => {
    if (activeSection === id) {
      setActiveSection(null);
    } else {
      setActiveSection(id);
    }
  };

  return (
    <div className="min-h-screen py-16 bg-black text-white">
      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-white">SolverDeck</h1>
          <div className="mt-2 flex items-center">
            <div className="w-4 h-4 rounded-full bg-white mr-2"></div>
            <h2 className="text-xl text-white">Privacy Policy</h2>
          </div>
          <p className="text-white mt-1">Last Updated: 1 May 2025</p>
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Navigation Sidebar */}
          <aside className="md:w-1/4">
            <div className="bg-neutral-900 p-4 rounded-lg shadow-md sticky top-4">
              <h3 className="text-lg font-semibold mb-4 pb-2 border-b border-gray-700">Table of Contents</h3>
              <nav>
                <ul className="space-y-2">
                  {sections.map((section) => (
                    <li key={section.id}>
                      <a 
                        href={`#${section.id}`}
                        className="block text-white hover:text-white hover:bg-neutral-800 px-2 py-1 rounded transition-colors"
                        onClick={(e) => {
                          e.preventDefault();
                          const element = document.getElementById(section.id);
                          if (element) {
                            element.scrollIntoView({ behavior: 'smooth' });
                          }
                        }}
                      >
                        {section.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </aside>

          {/* Content Area */}
          <div className="md:w-3/4">
            <div className="bg-neutral-900 p-6 rounded-lg shadow-md">
              {/* Introduction Note */}
              <div className="mb-8 p-4 bg-neutral-800 rounded-lg border-l-4 border-gray-600">
                <p className="text-white">
                  This Privacy Policy outlines how SolverDeck collects, uses, and protects your personal information.
                  Please read it carefully to understand our practices regarding your personal data and how we will treat it.
                </p>
              </div>

              {/* Policy Sections */}
              <div className="space-y-8">
                {sections.map((section) => (
                  <section key={section.id} id={section.id} className="scroll-mt-4">
                    <div 
                      className="flex justify-between items-center cursor-pointer py-3 border-b border-gray-700"
                      onClick={() => toggleSection(section.id)}
                    >
                      <h3 className="text-xl font-bold text-white">{section.title}</h3>
                      <span className="text-white">
                        {activeSection === section.id ? (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                          </svg>
                        ) : (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        )}
                      </span>
                    </div>
                    <div className={`mt-4 leading-relaxed ${activeSection === section.id ? 'block' : 'hidden'}`}>
                      {section.content}
                    </div>
                  </section>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
