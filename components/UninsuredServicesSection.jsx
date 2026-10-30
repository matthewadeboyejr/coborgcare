"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  RiSearchLine,
  RiQuestionLine,
  RiWallet3Line,
  RiFileTextLine,
  RiInformationLine,
  RiCheckDoubleLine,
  RiPhoneLine,
  RiShieldCrossLine,
  RiArrowDownSLine,
  RiMoneyDollarCircleLine,
  RiBankCardLine,
  RiDraftLine,
} from "react-icons/ri";

const feeScheduleData = [
  {
    id: "sick-note",
    service: "Sick Note / Fit-to-Return-to-Work or School Note",
    fee: "$35",
    category: "Notes & Forms",
    description: "Standard note verifying medical absence or fitness to return to work/school.",
  },
  {
    id: "forms-daycare-school",
    service: "Completion of Medical Forms – daycare, school, camp, etc.",
    fee: "$35",
    category: "Notes & Forms",
    description: "Administrative form completion for educational institutions, daycare, or youth camps. (Note: TB test & report for school purposes is free).",
  },
  {
    id: "immunization-form",
    service: "Immunization Form Completion",
    fee: "$35",
    category: "Immunizations & Tests",
    description: "Verification and completion of official immunization history records.",
  },
  {
    id: "extended-sick-note",
    service: "Extended Sick Note / School Excuse Note Beyond 3 Days",
    fee: "$50",
    category: "Notes & Forms",
    description: "Detailed medical note for prolonged illness requiring extended leave beyond 3 consecutive days.",
  },
  {
    id: "adoption-parental-forms",
    service: "Adoption / Parental Leave Forms",
    fee: "$50",
    category: "Notes & Forms",
    description: "Medical evaluation and documentation required for adoption or specialized parental leave applications.",
  },
  {
    id: "travel-consultation",
    service: "Travel Consultation",
    fee: "$50",
    category: "Consultations & Exams",
    description: "Pre-travel health risk assessment, advice, and vaccine recommendations.",
  },
  {
    id: "disability-tax-credit",
    service: "Disability Tax Credit Certificate (T2201)",
    fee: "$100",
    category: "Reports & Certificates",
    description: "Detailed CRA medical form completion for disability tax credit eligibility assessment.",
  },
  {
    id: "drivers-medical-exam",
    service: "Driver's Medical Examination (when not OHIP-covered)",
    fee: "$150",
    category: "Consultations & Exams",
    description: "Comprehensive driver's licensing medical assessment when administrative/non-insured.",
  },
  {
    id: "attending-physician-statement",
    service: "Attending Physician's Statement (APS)",
    fee: "$150",
    category: "Reports & Certificates",
    description: "Comprehensive physician statement for insurance claims, disability, or legal purposes.",
  },
  {
    id: "third-party-report",
    service: "Third-Party Medical Report – insurance, employment or legal",
    fee: "$160",
    category: "Reports & Certificates",
    description: "In-depth medical status report requested by third parties including insurers, employers, or legal representatives.",
  },
  {
    id: "medical-records-copy",
    service: "Copy of Medical Records",
    fee: "$30 admin + $0.30/page",
    category: "Administrative & Records",
    description: "Processing, retrieval, and printing/copying of personal medical health records.",
  },
  {
    id: "ear-wax-one",
    service: "Ear Wax Removal – One Ear",
    fee: "$25",
    category: "Clinical Procedures",
    description: "Clinical ear irrigation or manual wax removal procedure for one ear.",
  },
  {
    id: "ear-wax-both",
    service: "Ear Wax Removal – Both Ears",
    fee: "$50",
    category: "Clinical Procedures",
    description: "Clinical ear irrigation or manual wax removal procedure for both ears.",
  },
  {
    id: "firefighter-physical",
    service: "Firefighter's Physical Examination",
    fee: "$150",
    category: "Consultations & Exams",
    description: "Specialized occupational physical fitness examination for active or applicant firefighters.",
  },
  {
    id: "tb-test-school",
    service: "TB Skin Test & Report (School / Education)",
    fee: "Free",
    category: "Immunizations & Tests",
    description: "Tuberculin skin test (1-step or 2-step) and official report for school entry or educational programs.",
  },
  {
    id: "tb-test-1step",
    service: "1-Step TB Skin Test (Employment)",
    fee: "$70",
    category: "Immunizations & Tests",
    description: "Single-step Mantoux tuberculin skin test and report required for employment or occupational purposes. (Free for school purposes).",
  },
  {
    id: "tb-test-2step",
    service: "2-Step TB Skin Test (Employment)",
    fee: "$100",
    category: "Immunizations & Tests",
    description: "Two-step baseline Mantoux tuberculin skin test and report for healthcare or specialized employment requirements. (Free for school purposes).",
  },
];

const faqsData = [
  {
    q: "Why am I being charged for a service at my doctor's office?",
    a: "OHIP covers medically necessary insured physician services. It does not pay for every service a physician may be asked to provide. Examples of uninsured services include certain sick notes, employment and insurance forms, medical reports, copying of medical records, and some examinations requested for administrative rather than medically necessary purposes. Where OHIP or another third party does not cover the service, the patient is responsible for the fee.",
    category: "General & OHIP",
  },
  {
    q: "Are Cobourg Care Clinic's fees approved by the Ontario Medical Association?",
    a: "The Ontario Medical Association (OMA) provides physicians with guidance and suggested fees for uninsured services. The OMA does not individually approve a clinic's fee schedule. Cobourg Care Clinic establishes reasonable fees for uninsured services with reference to applicable professional requirements and OMA guidance.",
    category: "General & OHIP",
  },
  {
    q: "Do I have to pay for a WSIB Functional Abilities Form?",
    a: "Generally, no—not when it is the official WSIB Functional Abilities Form (FAF) and the applicable WSIB requirements are met. The WSIB fee schedule provides for the healthcare professional to bill WSIB directly for completion of an official Functional Abilities Form rather than charging the worker for the form (WSIB's current physician fee schedule lists the FAF fee as $45). Accordingly, Cobourg Care Clinic will not routinely charge a patient our uninsured-form fee for an eligible official WSIB Functional Abilities Form.",
    category: "WSIB Forms",
  },
  {
    q: "Who pays for my WSIB Functional Abilities Form?",
    a: "For an eligible official WSIB Functional Abilities Form, WSIB pays the healthcare professional directly according to its applicable fee schedule. The patient should therefore not normally have to pay the clinic and seek reimbursement afterward.",
    category: "WSIB Forms",
  },
  {
    q: "What if my employer gives me its own Functional Abilities Form?",
    a: "This is different from the official WSIB Functional Abilities Form. WSIB advises that when an employer requests completion of its own functional abilities form, the employer is responsible for paying the healthcare professional's fee for completing that form. If you have been given a form by your employer, please bring it to the clinic. Our staff can determine whether it is an official WSIB form or an employer-specific form and advise you of any applicable fee.",
    category: "WSIB Forms",
  },
  {
    q: "What if I am asked to pay for a WSIB form?",
    a: "Please speak with our reception staff before making payment. We will determine:\n1. Whether the document is an official WSIB form;\n2. Whether it is eligible to be billed directly to WSIB; or\n3. Whether it is an employer, insurance company, or other third-party form for which a separate fee applies.\nOur goal is to ensure that the appropriate party is billed whenever possible.",
    category: "WSIB Forms",
  },
  {
    q: "Does OHIP cover driver's medical examinations?",
    a: "It depends on the circumstances. Some driver's medical assessments may qualify for OHIP coverage, while others are uninsured. Our listed $150 fee applies when the driver's medical examination is not insured by OHIP. Reception can confirm whether a fee applies to your particular request.",
    category: "Coverage & Fees",
  },
  {
    q: "Does OHIP cover completion of the Disability Tax Credit Certificate (T2201)?",
    a: "Completion of forms for tax, insurance, employment, and similar administrative purposes is generally not an OHIP-insured physician service. Our fee for completion of the Disability Tax Credit Certificate (T2201) is $100.",
    category: "Coverage & Fees",
  },
  {
    q: "Can my insurance company or employer pay the fee instead?",
    a: "Sometimes. If an employer, insurance company, lawyer, or another organization has requested a report or form, please provide the clinic with the complete request and any billing instructions. Where appropriate, the requesting organization may be billed directly. Otherwise, the patient may be responsible for payment.",
    category: "Payment & Billing",
  },
  {
    q: "Why can the cost of some forms be different?",
    a: "Forms vary considerably in complexity. A simple form may take only a few minutes, while an insurance or legal report may require the physician to review a substantial medical record, provide a detailed medical opinion, and prepare a comprehensive report. If your request requires substantially more work than normally expected, we will endeavour to advise you of the applicable fee before completing it.",
    category: "Payment & Billing",
  },
  {
    q: "Is a TB (tuberculosis) skin test and report free for school?",
    a: "Yes! TB skin tests (1-step and 2-step) and the accompanying completion of school/educational forms and reports are completely FREE (OHIP-covered) for school, college, university, or training program entry.\n\nHowever, when a TB skin test is required for employment, pre-employment screening, or occupational clearance, uninsured charges apply ($70 for 1-step, $100 for 2-step).",
    category: "Coverage & Fees",
  },
];

export default function UninsuredServicesSection({ titleTag = "h2", isFullPage = false }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const categories = [
    "All",
    "Notes & Forms",
    "Consultations & Exams",
    "Reports & Certificates",
    "Clinical Procedures",
    "Immunizations & Tests",
    "Administrative & Records",
  ];

  const filteredServices = useMemo(() => {
    return feeScheduleData.filter((item) => {
      const matchesSearch =
        item.service.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.fee.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || item.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const filteredFaqs = useMemo(() => {
    if (!searchTerm.trim()) return faqsData;
    return faqsData.filter(
      (faq) =>
        faq.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.a.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const TitleComponent = titleTag;

  return (
    <section className="mb-24 space-y-16 max-w-7xl mx-auto px-2 sm:px-4" id="uninsured-services">
      {/* Title Header */}
      <div className="text-center space-y-4 pt-4">
        <div className="flex justify-center">
          <span className="bg-white border border-[#0E31AC]/20 text-[#0E31AC] text-sm font-semibold py-2 px-5 rounded-full shadow-sm flex items-center gap-2">
            <RiShieldCrossLine className="text-lg text-[#0E31AC]" />
            Cobourg Care Clinic Fee Schedule
          </span>
        </div>
        <TitleComponent className="text-4xl sm:text-6xl md:text-[80px] lg:text-[100px] font-bold text-[#050660] tracking-tight leading-tight">
          Uninsured Services & Fees
        </TitleComponent>
        <p className="max-w-3xl mx-auto text-[#595959] text-base sm:text-lg md:text-xl leading-relaxed">
          At Cobourg Care Clinic, many medically necessary physician services are covered by the Ontario Health Insurance Plan (OHIP). However, administrative services, medical forms, reports, and specific examinations are non-insured and billed directly to the patient or third party.
        </p>
      </div>

      {/* Quick Highlights Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4">
          <div className="p-3 bg-[#0E31AC]/10 text-[#0E31AC] rounded-xl text-2xl">
            <RiMoneyDollarCircleLine />
          </div>
          <div>
            <h3 className="font-bold text-[#050660] text-lg">Clear & Transparent</h3>
            <p className="text-sm text-[#595959] mt-1">
              Established with reference to Ontario Medical Association (OMA) guidelines.
            </p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4">
          <div className="p-3 bg-[#0E31AC]/10 text-[#0E31AC] rounded-xl text-2xl">
            <RiBankCardLine />
          </div>
          <div>
            <h3 className="font-bold text-[#050660] text-lg">Accepted Payment</h3>
            <p className="text-sm text-[#595959] mt-1">
              Convenient payment via <strong>Cash</strong> and <strong>e-Transfer</strong> at time of service.
            </p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4">
          <div className="p-3 bg-[#0E31AC]/10 text-[#0E31AC] rounded-xl text-2xl">
            <RiDraftLine />
          </div>
          <div>
            <h3 className="font-bold text-[#050660] text-lg">WSIB Direct Billing</h3>
            <p className="text-sm text-[#595959] mt-1">
              Official WSIB Functional Abilities Forms (FAF) are billed directly to WSIB without patient fee.
            </p>
          </div>
        </div>
      </div>

      {/* Search & Category Filter Section */}
      <div className="bg-[#EDEEF1] p-6 sm:p-8 rounded-3xl space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#050660]">
              Uninsured Services Fee Schedule
            </h3>
            <p className="text-sm sm:text-base text-[#595959] mt-1">
              Effective & updated for Cobourg Care Clinic patients.
            </p>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <RiSearchLine className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search services or FAQs (e.g. sick note, TB test)..."
              className="w-full bg-white text-[#050660] pl-11 pr-4 py-3 rounded-full text-sm font-medium border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0E31AC]/30 transition-all placeholder:text-gray-400 shadow-sm"
            />
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 pt-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${selectedCategory === cat
                ? "bg-[#0E31AC] text-white shadow-md"
                : "bg-white text-[#595959] hover:bg-gray-100"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Desktop & Tablet Table */}
        <div className="hidden sm:block overflow-hidden bg-white rounded-2xl border border-gray-200/80 shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#050660] text-white text-sm font-semibold">
                <th className="py-4 px-6">Service</th>
                <th className="py-4 px-6">Category</th>
                <th className="py-4 px-6 text-right">Fee (CAD)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm">
              {filteredServices.length > 0 ? (
                filteredServices.map((item) => (
                  <tr
                    key={item.id}
                    className="hover:bg-blue-50/40 transition-colors group"
                  >
                    <td className="py-4 px-6 font-semibold text-[#050660] group-hover:text-[#0E31AC]">
                      <div>{item.service}</div>
                      <div className="text-xs text-[#595959] font-normal mt-0.5">
                        {item.description}
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className="inline-block bg-[#0E31AC]/10 text-[#0E31AC] text-xs font-semibold px-3 py-1 rounded-full">
                        {item.category}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-right font-bold text-lg text-[#0E31AC] whitespace-nowrap">
                      {item.fee.toLowerCase().includes("free") ? (
                        <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs sm:text-sm font-bold px-3 py-1 rounded-full inline-block shadow-xs">
                          Free
                        </span>
                      ) : (
                        item.fee
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={3} className="py-12 text-center text-[#595959]">
                    No uninsured services found matching &ldquo;{searchTerm}&rdquo;
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Mobile View Cards */}
        <div className="sm:hidden space-y-3">
          {filteredServices.length > 0 ? (
            filteredServices.map((item) => (
              <div
                key={item.id}
                className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm space-y-2"
              >
                <div className="flex justify-between items-start gap-2">
                  <span className="bg-[#0E31AC]/10 text-[#0E31AC] text-xs font-semibold px-2.5 py-0.5 rounded-full">
                    {item.category}
                  </span>
                  {item.fee.toLowerCase().includes("free") ? (
                    <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold px-2.5 py-1 rounded-full shadow-xs">
                      Free                     </span>
                  ) : (
                    <span className="font-bold text-xl text-[#0E31AC]">
                      {item.fee}
                    </span>
                  )}
                </div>
                <h4 className="font-bold text-[#050660] text-base">
                  {item.service}
                </h4>
                <p className="text-xs text-[#595959] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))
          ) : (
            <div className="bg-white p-8 rounded-2xl text-center text-[#595959] text-sm">
              No uninsured services found matching &ldquo;{searchTerm}&rdquo;
            </div>
          )}
        </div>
      </div>

      {/* Payment Details & Policies Card */}
      <div className="bg-gradient-to-br from-[#050660] to-[#0E31AC] text-white p-8 sm:p-12 rounded-3xl shadow-lg relative overflow-hidden">
        <div className="relative z-10 max-w-4xl space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-white/10 rounded-xl text-2xl text-[#01bbf8]">
              <RiWallet3Line />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold">
              Payment Terms & Guidelines
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6 text-sm sm:text-base leading-relaxed">
            <div className="bg-white/10 p-5 rounded-2xl backdrop-blur-sm border border-white/10 space-y-2">
              <h4 className="font-bold text-[#01bbf8] text-lg flex items-center gap-2">
                <RiCheckDoubleLine /> Due Date & Accepted Methods
              </h4>
              <p className="text-white/90">
                Payment for uninsured services is generally required at the time the service is provided or when the completed document is collected.
              </p>
              <div className="pt-2 flex items-center gap-4 text-xs font-bold uppercase tracking-wider text-white">
                <span className="bg-white/20 px-3 py-1.5 rounded-lg">💵 Cash</span>
                <span className="bg-white/20 px-3 py-1.5 rounded-lg">📲 e-Transfer</span>
              </div>
            </div>

            <div className="bg-white/10 p-5 rounded-2xl backdrop-blur-sm border border-white/10 space-y-2">
              <h4 className="font-bold text-[#01bbf8] text-lg flex items-center gap-2">
                <RiInformationLine /> Complex Requests & Confirmation
              </h4>
              <p className="text-white/90">
                Patients are encouraged to confirm the applicable fee with our reception team prior to requesting a form, report, or exam.
              </p>
              <p className="text-xs text-white/80 italic">
                Fees may vary for unusually complex requests requiring significant extra physician time. You will be advised before work is completed.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Frequently Asked Questions (FAQ) Section */}
      <div className="space-y-8">
        <div className="text-center space-y-3">
          <div className="flex justify-center">
            <span className="bg-[#0E31AC]/10 text-[#0E31AC] text-xs font-semibold py-1.5 px-4 rounded-full flex items-center gap-1.5">
              <RiQuestionLine className="text-base" /> Patient Guidance
            </span>
          </div>
          <h3 className="text-3xl sm:text-5xl font-bold text-[#050660]">
            Frequently Asked Questions
          </h3>
          <p className="text-[#595959] max-w-2xl mx-auto text-sm sm:text-base">
            Everything you need to know about OHIP coverage, WSIB forms, driver&apos;s physicals, and third-party billings.
          </p>
        </div>

        <div className="space-y-4 max-w-4xl mx-auto">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={faq.q}
                className="bg-white rounded-2xl border border-gray-200/80 shadow-sm overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-semibold text-[#050660] text-base sm:text-lg hover:text-[#0E31AC] transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-[#0E31AC] font-bold text-sm bg-[#0E31AC]/10 w-7 h-7 rounded-full flex items-center justify-center shrink-0">
                      Q
                    </span>
                    {faq.q}
                  </span>
                  <RiArrowDownSLine
                    className={`text-2xl text-[#0E31AC] shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                      }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 pt-0 text-sm sm:text-base text-[#595959] leading-relaxed border-t border-gray-100/80 mt-1">
                    <div className="pt-4 whitespace-pre-line space-y-2">
                      {faq.a}
                    </div>
                    {faq.category === "WSIB Forms" && (
                      <div className="mt-4 p-3 bg-[#0B95C7]/10 rounded-xl text-xs text-[#050660] font-medium flex items-center gap-2">
                        <RiFileTextLine className="text-base text-[#0E31AC] shrink-0" />
                        Need help confirming your WSIB form type? Bring it to reception before completing your appointment.
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Important Notice & Reception Contact CTA */}
      <div className="bg-[#EDEEF1] p-8 sm:p-12 rounded-3xl text-center space-y-6">
        <div className="max-w-3xl mx-auto space-y-4">
          <h3 className="text-2xl sm:text-3xl font-bold text-[#050660]">
            Important Notice
          </h3>
          <p className="text-sm sm:text-base text-[#595959] leading-relaxed">
            The fees listed above apply to uninsured services and are subject to change. Cobourg Care Clinic&apos;s uninsured-service fees are established with reference to applicable professional requirements and recommendations from the Ontario Medical Association (OMA). Where a service is insured by OHIP, WSIB, or another responsible payer, Cobourg Care Clinic will not charge the patient an uninsured-service fee for the same insured service.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact-us"
              className="w-full sm:w-auto bg-[#0E31AC] hover:bg-[#050660] text-white px-8 py-3.5 rounded-full font-semibold transition-colors flex items-center justify-center gap-2 shadow-md"
            >
              <RiPhoneLine className="text-lg" /> Contact Reception
            </Link>
            <Link
              href="/appointments"
              className="w-full sm:w-auto bg-white border border-[#0E31AC] text-[#0E31AC] hover:bg-blue-50 px-8 py-3.5 rounded-full font-semibold transition-colors flex items-center justify-center gap-2"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
