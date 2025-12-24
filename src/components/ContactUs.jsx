import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';
import emailjs from "@emailjs/browser";
import { toast } from 'react-toastify';


// Define the core color palette for consistency
const PRIMARY_COLOR = '#282561'; // Dark Blue
const ACCENT_COLOR = '#fdc58a'; // Warm Orange

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    name: formData.name,
                    email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            .then(() => {
                toast.success("Message sent successfully!");
                setFormData({
                    name: "",
                    email: "",
                    subject: "",
                    message: "",
                });
            })
    .catch((error) => {
        toast.error("Failed to send message");
        console.error(error);
    });
        
    };

const contactInfo = [
    { icon: Phone, title: 'Call Us', detail: '+91 90327 17675', href: 'tel:+91 90327 17675' },
    {
        icon: Mail, title: 'Email Us', detail: 'info@enthoruchira.com', href: 'mailto:info@enthoruchira.com'
    },
    { icon: MapPin, title: 'Our Office', detail: 'Hyderabad, Telangana, India', href: '#' },
    { icon: Clock, title: 'Business Hours', detail: 'Mon - Fri: 9:00 AM - 5:00 PM EST', href: '#' },
];

const InfoCard = ({ icon: Icon, title, detail, href }) => (
    <a
        href={href}
        className="flex items-start p-4 space-x-4 bg-gray-50 rounded-xl shadow-inner hover:bg-white hover:shadow-lg transition-all duration-300"
    >
        <div className="flex-shrink-0 p-3 rounded-full text-white" style={{ backgroundColor: PRIMARY_COLOR }}>
            <Icon className="w-6 h-6" />
        </div>
        <div>
            <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
            <p className="text-sm text-gray-600 mt-1">{detail}</p>
        </div>
    </a>
);

return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-[#282561]" >
        <div className="max-w-6xl mx-auto">

            {/* Header Section */}
            <div className="text-center mb-12">
                <h1
                    className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#ffffff]"
                >
                    Get In Touch
                </h1>
                <p className="mt-6 text-xl text-[#fdc58a] max-w-2xl mx-auto">
                    We're here to answer your questions and help you with anything you need. Send us a message!
                </p>
            </div>

            {/* Main Content Grid: Form (left) and Info (right) */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                {/* Contact Form (2/3 width on large screens) */}
                <div className="lg:col-span-2 bg-white p-6 sm:p-10 rounded-2xl shadow-xl border border-gray-100">
                    <h2 className="text-3xl font-bold mb-8" style={{ color: PRIMARY_COLOR }}>
                        Send Us a Message
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-6">

                        {/* Name & Email (side-by-side on desktop) */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Jane Doe"
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-opacity-50 transition duration-150"
                                    style={{ focusBorderColor: PRIMARY_COLOR }}
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="jane.doe@example.com"
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-opacity-50 transition duration-150"
                                    style={{ focusBorderColor: PRIMARY_COLOR }}
                                />
                            </div>
                        </div>

                        {/* Subject */}
                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                            <input
                                type="text"
                                name="subject"
                                id="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="Inquiry about product features"
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-opacity-50 transition duration-150"
                                style={{ focusBorderColor: PRIMARY_COLOR }}
                            />
                        </div>

                        {/* Message */}
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                            <textarea
                                name="message"
                                id="message"
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Tell us how we can help..."
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-opacity-50 transition duration-150 resize-none"
                                style={{ focusBorderColor: PRIMARY_COLOR }}
                            />
                        </div>

                        {/* Submit Button - Uses the accent color */}
                        <button
                            type="submit"

                            className="bg-[#fdc58a] w-full md:w-auto flex items-center justify-center space-x-2 px-8 py-3 text-lg font-semibold text-white rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:scale-[1.01] cursor-pointer"
                        >
                            <Send className="w-5 h-5" />
                            <span>Submit Inquiry</span>
                        </button>
                    </form>
                </div>

                {/* Contact Information (1/3 width on large screens) */}
                <div className="lg:col-span-1 space-y-6">
                    {contactInfo.map((item, index) => (
                        <InfoCard key={index} {...item} />
                    ))}
                </div>
            </div>

            {/* Map Placeholder (Optional: If you want a full-width section below) */}
            <div className="mt-16 bg-gray-200 h-80 rounded-2xl overflow-hidden shadow-xl flex items-center justify-center">
                <p className="text-xl font-medium text-gray-600">Map Integration Placeholder</p>
            </div>

        </div>
    </div>
);
};

export default ContactUs;