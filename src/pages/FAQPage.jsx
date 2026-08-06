import React, { useState } from "react";
import "../style/FAQPage.css";

const faqData = [
  {
    question: "What is FlowSense AI?",
    answer:
      "FlowSense AI is an AI-powered Process Mining Platform that automatically discovers, analyzes, and improves business processes using operational data.",
  },
  {
    question: "How is it different from BPM software?",
    answer:
      "Traditional BPM software requires businesses to manually design workflows. FlowSense AI automatically discovers the real workflows from system activity logs.",
  },
  {
    question: "Which systems can it connect to?",
    answer:
      "ERP, CRM, HRMS, databases, APIs, spreadsheets, workflow systems, and custom enterprise applications.",
  },
  {
    question: "Can it identify process delays?",
    answer:
      "Yes. It automatically detects bottlenecks, waiting times, repetitive activities, and approval delays.",
  },
  {
    question: "Does it support compliance monitoring?",
    answer:
      "Yes. The platform compares actual processes with expected workflows and highlights deviations.",
  },
  {
    question: "Which industries can use FlowSense AI?",
    answer:
      "Manufacturing, healthcare, banking, logistics, insurance, government, IT services, retail, and enterprise organizations.",
  },
];

const FAQPage = () => {
  // Pehla FAQ default open rahega
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-page-wrapper">
      <div className="faq-container">
        {/* Header */}
        <section className="faq-hero">
          <span className="faq-badge">Help Center</span>
          <h1 className="faq-title">Frequently Asked Questions</h1>
          <p className="faq-subtitle">
            Everything you need to know about FlowSense AI, process discovery,
            and enterprise integration.
          </p>
        </section>

        {/* FAQ Accordion List */}
        <section className="faq-list">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className={`faq-item ${isOpen ? "open" : ""}`}>
                <button
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <span className="faq-icon">▼</span>
                </button>

                {isOpen && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </section>

        {/* Support Section */}
        <section className="faq-support-box">
          <h3>Still have questions?</h3>
          <p>
            Can't find the answer you're looking for? Reach out to our team.
          </p>
          <button className="support-btn">Contact Support</button>
        </section>
      </div>
    </div>
  );
};

export default FAQPage;
