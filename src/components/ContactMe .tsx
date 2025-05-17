const ContactMe = () => {
    return (
        <div className="w-full bg-rose-50 py-16 px-4 sm:px-6 lg:px-8 border-t border-rose-100">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-rose-900 mb-4">Get In Touch</h2>
                    <div className="w-20 h-1.5 bg-rose-500 mx-auto rounded-full mb-6"></div>
                    <p className="text-xl text-rose-700 max-w-3xl mx-auto">
                        Feel free to reach out for collaborations or just to say hello!
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Email */}
                    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 text-center">
                        <div className="bg-rose-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-6 h-6 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-semibold text-rose-800 mb-2">Email</h3>
                        <a 
                            href="mailto:yaduvanshiprince2007@gmail.com" 
                            className="text-rose-600 hover:text-rose-700 transition duration-200 break-all"
                        >
                            yaduvanshiprince2007@gmail.com
                        </a>
                    </div>

                    {/* Phone */}
                    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 text-center">
                        <div className="bg-rose-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-6 h-6 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-semibold text-rose-800 mb-2">Phone</h3>
                        <a 
                            href="tel:+917004571707" 
                            className="text-rose-600 hover:text-rose-700 transition duration-200"
                        >
                            +91 7004571707
                        </a>
                    </div>

                    {/* LinkedIn */}
                    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 text-center">
                        <div className="bg-rose-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-6 h-6 text-rose-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"/>
                            </svg>
                        </div>
                        <h3 className="text-lg font-semibold text-rose-800 mb-2">LinkedIn</h3>
                        <a 
                            href="https://www.linkedin.com/in/prince-yadav-340b99134/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-rose-600 hover:text-rose-700 transition duration-200 break-all"
                        >
                            Prince Yadav
                        </a>
                    </div>
                </div>

                {/* Contact Form (Optional) */}
                {/*
                <div className="mt-16 bg-white rounded-xl shadow-lg p-8 max-w-3xl mx-auto">
                    <h3 className="text-2xl font-bold text-rose-800 mb-6 text-center">Send Me a Message</h3>
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-rose-700 mb-1">Name</label>
                                <input type="text" id="name" className="w-full px-4 py-2 border border-rose-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-rose-700 mb-1">Email</label>
                                <input type="email" id="email" className="w-full px-4 py-2 border border-rose-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-rose-700 mb-1">Subject</label>
                            <input type="text" id="subject" className="w-full px-4 py-2 border border-rose-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500" />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-rose-700 mb-1">Message</label>
                            <textarea id="message" rows={4} className="w-full px-4 py-2 border border-rose-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500"></textarea>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="px-8 py-3 bg-rose-600 text-white font-medium rounded-lg hover:bg-rose-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2">
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
                */}
            </div>
        </div>
    );
};

export default ContactMe;
