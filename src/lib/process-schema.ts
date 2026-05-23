const BASE_URL = "https://solverdeck.com";

export const processSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Proven 5-Phase Process",
  description: "From discovery to continuous optimization — a structured, transparent approach that delivers measurable results with minimal disruption.",
  step: [
    { "@type": "HowToStep", position: 1, name: "DISCOVERY", url: `${BASE_URL}/#phase-01`, text: "Store any valid JSON document, with schemas living in your Solverdeck Studio configuration, not as database constraints." },
    { "@type": "HowToStep", position: 2, name: "STRATEGY", url: `${BASE_URL}/#phase-02`, text: "Using insights from discovery, we craft a tailored technology strategy and phased roadmap that prioritizes quick wins, scalability, and ROI." },
    { "@type": "HowToStep", position: 3, name: "IMPLEMENTATION", url: `${BASE_URL}/#phase-03`, text: "Enable creative freedom with infinitely customizable workflows. Our agile execution includes regular sprints, transparent updates, and rigorous testing." },
    { "@type": "HowToStep", position: 4, name: "TESTING", url: `${BASE_URL}/#phase-04`, text: "We don't just launch — we validate. Through comprehensive testing (functional, performance, security, and user acceptance), we optimize solutions for launch." },
    { "@type": "HowToStep", position: 5, name: "SUPPORT", url: `${BASE_URL}/#phase-05`, text: "Technology doesn't stand still. We provide active monitoring, regular upgrades, security audits, and continuous improvement so you stay ahead." },
  ],
};
