import React, { useState } from "react";
import { ChevronDown, Search, MessageSquare, Phone, Mail } from "lucide-react";
import { Helmet } from "react-helmet-async";
import SEO from "./SEO";

// ----------------- Accordion Item -----------------
const AccordionItem = ({ que, ans, isOpen, onToggle, isLast }) => (
    <div className={`cursor-pointer ${!isLast ? "border-b border-gray-200" : ""}`}>
        <button
            onClick={onToggle}
            className="flex justify-between items-center w-full py-4 px-6 text-left hover:bg-gray-50 transition-all"
        >
            <span className="text-lg font-medium text-gray-800">{que}</span>
            <ChevronDown
                className={`w-5 h-5 text-red-500 transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                    }`}
            />
        </button>

        <div
            className={`overflow-hidden transition-all duration-500 ${isOpen ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0"
                }`}
        >
            <p className="px-6 pb-4 text-gray-600 leading-relaxed">{ans}</p>
        </div>
    </div>
);

// ----------------- Main FAQ Component -----------------
const FAQ = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [openIndex, setOpenIndex] = useState(null);

    const faqData = [
        {
            category: "Orders & Shipping",
            questions: [
                {
                    que: "How long does shipping take?",
                    ans: "We typically ship within 1-2 business days. Standard delivery takes 3–5 days, while express delivery takes 1–2 days. Free shipping is available on orders above ₹1500.",
                },
                {
                    que: "Do you ship pan India?",
                    ans: "Yes, we ship across India. We use reliable courier partners to ensure your pickles reach you fresh and safely packed.",
                },
                {
                    que: "Can I track my order?",
                    ans: "Absolutely! Once your order is shipped, you'll receive a tracking number via SMS and email. You can track your order status in your account dashboard.",
                },
                {
                    que: "What if my order arrives damaged?",
                    ans: "We pack our products very carefully, but if you receive a damaged item, please contact us within 24 hours with photos. We'll replace it immediately at no cost.",
                },
            ],
        },
        {
            category: "Product & Quality",
            questions: [
                {
                    que: "How long do your pickles last?",
                    ans: "Our pickles have a shelf life of 6 months when unopened and stored in a cool, dry place. Once opened, store in the refrigerator and consume within 1 month for best quality.",
                },
                {
                    que: "Do you use any preservatives?",
                    ans: "No, we don't use any artificial preservatives. Our pickles are preserved naturally using traditional methods with salt, oil, and spices.",
                },
                {
                    que: "Are your products vegetarian-friendly?",
                    ans: "We specialize in authentic non-vegetarian pickles including chicken, mutton, and seafood varieties. All our products are clearly labeled with ingredients.",
                },
                {
                    que: "What makes your pickles authentic Telangana style?",
                    ans: "Our recipes are passed down through generations, using traditional Telangana spice blends, cold-pressed sesame oil, and time-honored preparation methods that give our pickles their distinctive taste.",
                },
            ],
        },
        {
            category: "Storage and Usage",
            questions: [
                {
                    que: "How should I store the pickles?",
                    ans: "Store unopened jars in a cool, dry place away from direct sunlight. After opening, always use a clean, dry spoon and store in the refrigerator. Ensure the lid is tightly closed.",
                },
                {
                    que: "Can I freeze the pickles?",
                    ans: "We don't recommend freezing as it can affect the texture and taste. Proper refrigeration after opening is the best storage method.",
                },
                {
                    que: "What's the best way to serve your pickles?",
                    ans: "Our pickles pair beautifully with hot rice and ghee, rotis, or as a side with any Indian meal. They're also great for enhancing the flavor of plain yogurt or buttermilk.",
                },
            ],
        },
        {
            category: "Bulk Orders & Events",
            questions: [
                {
                    que: "Do you offer bulk discounts?",
                    ans: "Yes! We offer volume discounts for bulk orders starting from 10kg. Perfect for weddings, corporate events, or festivals. Contact us for custom pricing.",
                },
                {
                    que: "Can you customize packaging for events?",
                    ans: "Absolutely! We offer custom labeling and gift packaging for special occasions. Minimum order quantities apply. Contact us at least 2 weeks in advance.",
                },
                {
                    que: "Do you cater to corporate events?",
                    ans: "Yes, we work with many companies for their events and employee gifting programs. We offer special corporate rates and can arrange bulk deliveries.",
                },
            ],
        },
        {
            category: "Payments & Returns",
            questions: [
                {
                    que: "What payment methods do you accept?",
                    ans: "We accept all major payment methods including UPI, net banking, credit/debit cards, and cash on delivery (COD) for orders above ₹500.",
                },
                {
                    que: "Is cash on delivery available?",
                    ans: "Yes, COD is available for orders above ₹500. A small COD fee of ₹25 applies for this service.",
                },
                {
                    que: "What's your return policy?",
                    ans: "We offer a 100% satisfaction guarantee. If you're not happy with your order, contact us within 7 days for a full refund or replacement.",
                },
            ],
        },
    ];

    const handleToggle = (index) => setOpenIndex(openIndex === index ? null : index);

    const filteredData = faqData
        .map((category) => ({
            ...category,
            questions: category.questions.filter(
                (q) =>
                    q.que.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    q.ans.toLowerCase().includes(searchTerm.toLowerCase())
            ),
        }))
        .filter((cat) => cat.questions.length > 0);

    return (
        <>
            {/*  SEO Tags */}

            <SEO
                title="FAQs | Entho Ruchira – Authentic Handmade Pickles"
                description="Find answers to frequently asked questions about Entho Ruchira’s handmade non-veg pickles, shipping, storage, quality, bulk orders, and more."
                keywords="Entho Ruchira FAQs, pickle questions, shipping policy, handmade pickles, Telangana pickles, bulk pickle orders, non-veg pickles India"
                canonical="https://enthoruchira.com/faq"
            />

            {/*  Main Section */}
            <section id="faq" className="py-16 bg-[#282561]">
                <div className="max-w-4xl mx-auto px-4">
                    {/* Section Title */}
                    <div className="text-center mb-10">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-3">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-lg text-[#fdc58a] max-w-2xl mx-auto">
                            Find answers about our pickles, shipping, and quality. Still need
                            help? Contact us anytime!
                        </p>
                    </div>

                    {/* Search Bar */}
                    <div className="relative mb-12">
                        <input
                            type="text"
                            placeholder="Search for questions..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="text-white w-full py-4 pl-12 pr-6 border border-gray-300 rounded-xl shadow-lg focus:ring-2 focus:ring-[#fdc58a] bg-[#282561]"
                        />
                        <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
                    </div>

                    {/* FAQ List */}
                    {filteredData.length > 0 ? (
                        filteredData.map((group, groupIndex) => (
                            <div key={groupIndex} className="mb-10">
                                <div className="bg-gradient-to-r from-[#282561] to-[#fdc58a] text-white p-4 rounded-t-2xl shadow-lg">
                                    <h3 className="text-xl font-bold">{group.category}</h3>
                                </div>

                                <div className="bg-white rounded-b-2xl shadow-xl border border-t-0">
                                    {group.questions.map((item, itemIndex) => {
                                        const globalIndex = `${groupIndex}-${itemIndex}`;
                                        return (
                                            <AccordionItem
                                                key={globalIndex}
                                                que={item.que}
                                                ans={item.ans}
                                                isOpen={openIndex === globalIndex}
                                                onToggle={() => handleToggle(globalIndex)}
                                                isLast={itemIndex === group.questions.length - 1}
                                            />
                                        );
                                    })}
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-center py-12 bg-white rounded-xl shadow-lg">
                            <p className="text-xl text-gray-500">
                                No questions found matching "{searchTerm}".
                            </p>
                        </div>
                    )}

                    {/* Contact Section */}
                    <div className="container mx-auto px-4 max-w-4xl py-8">
                        <div className="bg-[#fdc58a] text-white p-10 md:p-12 rounded-3xl shadow-2xl text-center">
                            <MessageSquare className="w-12 h-12 mx-auto mb-4 text-white" strokeWidth={1.5} />
                            <h3 className="text-4xl font-extrabold mb-3">Still Have Questions?</h3>
                            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                                Our customer service team is here to help you with any questions about our products or services.
                            </p>

                            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                                <a
                                    href="tel:+919032717675"
                                    className="inline-flex items-center justify-center py-3 px-8 rounded-full md:font-bold md:text-lg text-white border-2 border-white transition-colors duration-300 hover:bg-white hover:text-[#282561]"
                                >
                                    <Phone className="w-5 h-5 mr-2" /> +91 90327 17675
                                </a>

                                <a
                                    href="mailto:info@enthoruchira.com"
                                    className="inline-flex items-center justify-center py-3 px-8 rounded-full md:font-bold md:text-lg text-white border-2 border-white transition-colors duration-300 hover:bg-white hover:text-[#282561]"
                                >
                                    <Mail className="w-5 h-5 mr-2" /> info@enthoruchira.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FAQ;
