"use client";

import { useState } from "react";

const TermsOfService = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const sections = [
    {
      id: "introduction",
      title: "1. INTRODUCTION",
      content: (
        <div>
          <p className="mb-4">
            These Terms of Service govern your access to and use of the services, including our website
            <a href="https://www.solverdeck.com/" className="underline text-white ml-1">solverdeck</a>, features, content, applications, and products provided by SolverDeck Company.
          </p>
          <p className="mb-4">
            Please read these Terms carefully before you start to use the Services. By using the Services, you accept and agree to be bound and abide by these Terms and our Privacy Policy, incorporated herein by reference. If you do not agree to these Terms, you must not access or use the Services.
          </p>
        </div>
      ),
    },
    {
      id: "eligibility",
      title: "2. ELIGIBILITY",
      content: (
        <div>
          <p className="mb-4">
            The Services are offered and available to users who are 18 years of age or older. By using the Services, you represent and warrant that you meet the foregoing eligibility requirement. If you do not meet this requirement, you must not access or use the Services.
          </p>
        </div>
      ),
    },
    {
      id: "changes",
      title: "3. CHANGES TO THE TERMS",
      content: (
        <div>
          <p className="mb-4">
            We may revise and update these Terms from time to time in our sole discretion. All changes are effective immediately when we post them, and apply to all access to and use of the Services thereafter.
          </p>
          <p className="mb-4">
            Your continued use of the Services following the posting of revised Terms means that you accept and agree to the changes. You are expected to check this page frequently so you are aware of any changes, as they are binding on you.
          </p>
        </div>
      ),
    },
    {
      id: "services",
      title: "4. SERVICES DESCRIPTION",
      content: (
        <div>
          <p className="mb-4">
            We provide IT consulting and artificial intelligence (AI) integration services as described on our website and in any service agreement or statement of work agreed between you and us. Our Services may include, but are not limited to:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>IT strategy and planning</li>
            <li>System design and implementation</li>
            <li>AI solution development and integration</li>
            <li>Data analysis and management</li>
            <li>Technical support and maintenance</li>
            <li>Training and knowledge transfer</li>
          </ul>
          <p className="mb-2">Our Services are subject to the following limitations:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>We do not guarantee specific outcomes or results from the use of our Services.</li>
            <li>The performance of AI systems depends on various factors, including the quality and quantity of data provided.</li>
            <li>We cannot guarantee that AI systems will be free from errors, biases, or inaccuracies.</li>
            <li>Our Services are not intended for use in high-risk applications where failure could lead to death, personal injury, or severe environmental damage without additional safeguards and explicit agreements.</li>
          </ul>
        </div>
      ),
    },
    {
      id: "user-accounts",
      title: "5. USER ACCOUNTS",
      content: (
        <div>
          <p className="mb-4">
            When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account.
          </p>
          <p className="mb-4">
            You are responsible for safeguarding the password that you use to access the Services and for any activities or actions under your password. You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorised use of your account.
          </p>
          <p className="mb-4">
            We reserve the right to terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
          </p>
        </div>
      ),
    },
    {
      id: "ip",
      title: "6. INTELLECTUAL PROPERTY RIGHTS",
      content: (
        <div>
          <p className="mb-4">
            The Services and their entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are owned by the Company, its licensors, or other providers of such material and are protected by United Kingdom and international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
          </p>
          <p className="mb-4">
            Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, non-sublicensable license to access and use the Services for your internal business purposes.
          </p>
          <p className="mb-2">You must not:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Modify, copy, or create derivative works based on the Services.</li>
            <li>Frame or mirror any part of the Services.</li>
            <li>Reverse engineer, decompile, or disassemble the Services.</li>
            <li>Access the Services to build a competitive product or service.</li>
            <li>Copy any features, functions, or graphics of the Services.</li>
            <li>Exploit the Services in any unauthorised way, including by automated means.</li>
            <li>Use the Services in any way that could damage, disable, overburden, or impair the Services.</li>
          </ul>
          <p className="mb-2">Unless explicitly agreed otherwise in writing:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>We retain ownership of all AI models, algorithms, and systems developed or customised by us.</li>
            <li>You retain ownership of your data used to train or operate AI systems.</li>
            <li>You receive a license to use outputs generated by AI systems for your business purposes.</li>
            <li>We may use anonymised learnings from AI system development to improve our services.</li>
          </ul>
        </div>
      ),
    },
    {
      id: "user-responsibilities",
      title: "7. USER RESPONSIBILITIES",
      content: (
        <div>
          <p className="mb-2">You may use the Services only for lawful purposes and in accordance with these Terms. You agree not to use the Services:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>In any way that violates any applicable federal, state, local, or international law or regulation.</li>
            <li>To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail," "chain letter," "spam," or any other similar solicitation.</li>
            <li>To impersonate or attempt to impersonate the Company, a Company employee, another user, or any other person or entity.</li>
            <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Services, or which may harm the Company or users of the Services.</li>
            <li>In any manner that could disable, overburden, damage, or impair the Services or interfere with any other party's use of the Services.</li>
          </ul>
          <p className="mb-2">When using our Services, particularly AI integration services, you are responsible for:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Ensuring you have the right to use, process, and share any data provided to us.</li>
            <li>Obtaining necessary consents from data subjects, where required.</li>
            <li>Ensuring data is accurate, complete, and lawfully obtained.</li>
            <li>Implementing appropriate security measures to protect your data.</li>
            <li>Reviewing and validating outputs from AI systems before relying on them for business decisions.</li>
          </ul>
          <p className="mb-4">
            You are responsible for ensuring your use of the Services complies with all applicable laws and regulations, including but not limited to data protection, privacy, intellectual property, and export control laws.
          </p>
        </div>
      ),
    },
    {
      id: "fees",
      title: "8. FEES AND PAYMENT",
      content: (
        <div>
          <p className="mb-2">You agree to pay all fees specified in the service agreement or statement of work. Except as otherwise specified:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Fees are quoted and payable in GBP.</li>
            <li>Payment obligations are non-cancelable.</li>
            <li>Fees paid are non-refundable.</li>
            <li>Quantities purchased cannot be decreased during the relevant subscription term.</li>
          </ul>
          <p className="mb-2">Unless otherwise stated in the service agreement or statement of work:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Invoices are issued monthly/quarterly/annually in advance.</li>
            <li>Payment terms are net 30 days from the invoice date.</li>
            <li>You are responsible for providing complete and accurate billing and contact information.</li>
            <li>We reserve the right to suspend or terminate the Services if fees are not paid when due.</li>
          </ul>
          <p className="mb-4">
            Our fees do not include any taxes, levies, duties, or similar governmental assessments, including value-added, sales, use, or withholding taxes, assessable by any jurisdiction (collectively, "Taxes"). You are responsible for paying all Taxes associated with your purchases.
          </p>
        </div>
      ),
    },
    {
      id: "confidentiality",
      title: "9. CONFIDENTIALITY",
      content: (
        <div>
          <p className="mb-4">
            "Confidential Information" means all information disclosed by a party ("Disclosing Party") to the other party ("Receiving Party"), whether orally or in writing, that is designated as confidential or that reasonably should be understood to be confidential given the nature of the information and the circumstances of disclosure. Confidential Information includes, but is not limited to, business plans, technology and technical information, product designs, and business processes.
          </p>
          <p className="mb-2">The Receiving Party agrees to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Take reasonable precautions to protect such Confidential Information.</li>
            <li>Not use any Confidential Information for any purpose outside the scope of these Terms.</li>
            <li>Not disclose such Confidential Information to any third party without written consent.</li>
          </ul>
          <p className="mb-2">Confidential Information does not include information that:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Is or becomes generally known to the public without breach of any obligation owed to the Disclosing Party.</li>
            <li>Was known to the Receiving Party prior to its disclosure by the Disclosing Party without breach of any obligation.</li>
            <li>Is received from a third party without breach of any obligation owed to the Disclosing Party.</li>
            <li>Was independently developed by the Receiving Party.</li>
          </ul>
        </div>
      ),
    },
    {
      id: "data-protection",
      title: "10. DATA PROTECTION",
      content: (
        <div>
          <p className="mb-4">
            We will process personal data in accordance with our Privacy Policy and applicable data protection laws. Where we process personal data on your behalf, the terms of our Data Processing Agreement shall apply.
          </p>
          <p className="mb-4">
            We implement appropriate technical and organisational measures to protect personal data processed through our Services. However, no electronic transmission or storage of information can be entirely secure, and we cannot guarantee absolute security.
          </p>
          <p className="mb-2">When providing AI integration services, we will:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Implement appropriate safeguards for AI systems processing personal data.</li>
            <li>Provide information about how AI systems use personal data.</li>
            <li>Assist you in fulfilling your obligations under data protection laws.</li>
            <li>Implement measures to prevent discriminatory outcomes where possible.</li>
          </ul>
        </div>
      ),
    },
    {
      id: "warranties",
      title: "11. WARRANTIES AND DISCLAIMERS",
      content: (
        <div>
          <p className="mb-2">We warrant that we will:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Provide the Services using reasonable skill and care.</li>
            <li>Comply with applicable laws in providing the Services.</li>
            <li>Have the right to provide the Services to you.</li>
          </ul>
          <p className="mb-4">
            EXCEPT AS EXPRESSLY PROVIDED HEREIN, THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
          </p>
          <p className="mb-4">
            WE DO NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED OR ERROR-FREE, THAT DEFECTS WILL BE CORRECTED, OR THAT THE SERVICES OR THE SERVERS THAT MAKE THEM AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.
          </p>
          <p className="mb-2">With respect to AI systems and services:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>We do not guarantee that AI systems will be free from errors, biases, or inaccuracies.</li>
            <li>We do not warrant that AI systems will produce specific results or outcomes.</li>
            <li>We do not guarantee that AI systems will be suitable for any specific purpose.</li>
            <li>You acknowledge that AI systems may produce unexpected or unintended outputs.</li>
          </ul>
          <p className="mb-4">
            IN NO EVENT WILL WE BE LIABLE FOR ANY INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM: (i) YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SERVICES; (ii) ANY CONDUCT OR CONTENT OF ANY THIRD PARTY ON THE SERVICES; (iii) ANY CONTENT OBTAINED FROM THE SERVICES; OR (iv) UNAUTHORISED ACCESS, USE, OR ALTERATION OF YOUR TRANSMISSIONS OR CONTENT.
          </p>
          <p className="mb-4">
            OUR AGGREGATE LIABILITY ARISING OUT OF OR RELATED TO THESE TERMS OR THE SERVICES, WHETHER IN CONTRACT, TORT, OR UNDER ANY OTHER THEORY OF LIABILITY, SHALL NOT EXCEED THE TOTAL AMOUNT PAID BY YOU FOR THE SERVICES DURING THE 12 MONTHS PRECEDING THE EVENT GIVING RISE TO THE LIABILITY.
          </p>
          <p className="mb-2">The limitations of liability in this section do not apply to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Liability arising from our wilful misconduct or gross negligence.</li>
            <li>Death or personal injury caused by our negligence.</li>
            <li>Fraud or fraudulent misrepresentation.</li>
            <li>Any other liability that cannot be excluded or limited by English law.</li>
          </ul>
        </div>
      ),
    },
    {
      id: "indemnification",
      title: "12. INDEMNIFICATION",
      content: (
        <div>
          <p className="mb-2">You agree to defend, indemnify, and hold harmless the Company, its affiliates, licensors, and service providers, and its and their respective officers, directors, employees, contractors, agents, licensors, suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Your violation of these Terms.</li>
            <li>Your User Content.</li>
            <li>Your use of the Services.</li>
            <li>Your violation of any third party right, including without limitation any intellectual property right, publicity, confidentiality, property, or privacy right.</li>
          </ul>
        </div>
      ),
    },
    {
      id: "term-termination",
      title: "13. TERM AND TERMINATION",
      content: (
        <div>
          <p className="mb-4">These Terms shall remain in full force and effect while you use the Services or maintain an account with us.</p>
          <p className="mb-2">You may terminate these Terms at any time by:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Ceasing all use of the Services.</li>
            <li>Cancelling your account (if applicable).</li>
            <li>Notifying us that you wish to terminate.</li>
          </ul>
          <p className="mb-4">
            We may terminate or suspend your account and access to the Services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
          </p>
          <p className="mb-2">Upon termination:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Your right to use the Services will immediately cease.</li>
            <li>You must cease all use of the Services.</li>
            <li>Any provisions of these Terms that by their nature should survive termination shall survive termination.</li>
            <li>We may delete your account and any data associated with it.</li>
          </ul>
        </div>
      ),
    },
    {
      id: "law",
      title: "14. GOVERNING LAW AND JURISDICTION",
      content: (
        <div>
          <p className="mb-4">These Terms and any dispute or claim arising out of or in connection with them or their subject matter or formation (including non-contractual disputes or claims) shall be governed by and construed in accordance with the law of England and Wales.</p>
          <p className="mb-4">Each party irrevocably agrees that the courts of England and Wales shall have exclusive jurisdiction to settle any dispute or claim arising out of or in connection with these Terms or their subject matter or formation (including non-contractual disputes or claims).</p>
        </div>
      ),
    },
    {
      id: "general",
      title: "15. GENERAL PROVISIONS",
      content: (
        <div>
          <p className="mb-4">These Terms, together with the Privacy Policy and any other agreements expressly incorporated by reference herein, constitute the entire agreement between you and us concerning the Services.</p>
          <p className="mb-4">No waiver of any term of these Terms shall be deemed a further or continuing waiver of such term or any other term, and our failure to assert any right or provision under these Terms shall not constitute a waiver of such right or provision.</p>
          <p className="mb-4">If any provision of these Terms is held by a court or other tribunal of competent jurisdiction to be invalid, illegal, or unenforceable for any reason, such provision shall be eliminated or limited to the minimum extent such that the remaining provisions of the Terms will continue in full force and effect.</p>
          <p className="mb-4">You may not assign or transfer these Terms, by operation of law or otherwise, without our prior written consent. We may assign or transfer these Terms, at our sole discretion, without restriction.</p>
          <p className="mb-4">Any notices or other communications provided by us under these Terms will be given by posting to the Services or by email to the address you provide to us.</p>
          <p className="mb-4">We will not be liable or responsible for any failure to perform, or delay in performance of, any of our obligations under these Terms that is caused by events outside our reasonable control.</p>
          <p className="mb-4">Nothing in these Terms is intended to, or shall be deemed to, establish any partnership or joint venture between you and us, constitute either of us as the agent of the other, or authorise either of us to make or enter into any commitments for or on behalf of the other.</p>
        </div>
      ),
    },
    {
      id: "contact",
      title: "16. CONTACT INFORMATION",
      content: (
        <div>
          <p className="mb-4">If you have any questions about these Terms, please contact us at:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Email: <a href="mailto:info@solverdeck.com" className="underline text-white">info@solverdeck.com</a></li>
            <li>Phone:</li>
            <li>Address:</li>
          </ul>
        </div>
      ),
    },
  ];

  const toggleSection = (id: string) => {
    setActiveSection((prev) => (prev === id ? null : id));
  };

  return (
    <div className="min-h-screen py-16 bg-black text-white">
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-white">SolverDeck</h1>
          <div className="mt-2 flex items-center">
            <div className="w-4 h-4 rounded-full bg-white mr-2"></div>
            <h2 className="text-xl text-white">Terms of Service</h2>
          </div>
          <p className="text-white mt-1">Last Updated: 1 May 2025</p>
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
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
                          if (element) element.scrollIntoView({ behavior: "smooth" });
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

          {/* Content */}
          <div className="md:w-3/4">
            <div className="bg-neutral-900 p-6 rounded-lg shadow-md">
              {/* Intro Note */}
              <div className="mb-8 p-4 bg-neutral-800 rounded-lg border-l-4 border-gray-600">
                <p className="text-white">
                  These Terms of Service outline the rules and conditions for using SolverDeck's products and services. Please review them carefully.
                </p>
              </div>

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

export default TermsOfService;
