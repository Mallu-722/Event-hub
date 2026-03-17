import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you for contacting us! We'll get back to you shortly.");
    };

    return (
        <div className="min-h-screen bg-gray-50 py-16">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Get in Touch</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm">
                            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Contact Information</h2>
                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="bg-primary/10 p-3 rounded-lg mr-4">
                                        <Phone className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-800">Phone</h3>
                                        <p className="text-gray-600">+91 98765 43210</p>
                                        <p className="text-gray-600">+91 12345 67890</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-primary/10 p-3 rounded-lg mr-4">
                                        <Mail className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-800">Email</h3>
                                        <p className="text-gray-600">hello@eventhub.com</p>
                                        <p className="text-gray-600">support@eventhub.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-primary/10 p-3 rounded-lg mr-4">
                                        <MapPin className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-800">Office</h3>
                                        <p className="text-gray-600">
                                            123 Event Street, Tech Park,<br />
                                            Bangalore, Karnataka 560001
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm">
                            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Business Hours</h2>
                            <ul className="space-y-2 text-gray-600">
                                <li className="flex justify-between">
                                    <span>Monday - Friday</span>
                                    <span>9:00 AM - 7:00 PM</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>Saturday</span>
                                    <span>10:00 AM - 5:00 PM</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>Sunday</span>
                                    <span>Closed</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm">
                        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Send us a Message</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                        placeholder="John"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                        placeholder="Doe"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                    placeholder="john@example.com"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                                <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all">
                                    <option>General Inquiry</option>
                                    <option>Wedding Planning</option>
                                    <option>Corporate Event</option>
                                    <option>Birthday Party</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                <textarea
                                    rows="4"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                    placeholder="Tell us about your event..."
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-primary-dark transition-all shadow-lg hover:shadow-xl flex items-center justify-center group"
                            >
                                Send Message
                                <Send className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
