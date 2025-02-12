import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl md:text-2xl mb-8">
            We're here to help you with your marathon journey
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Send us a message
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea
                  rows="5"
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Write your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white py-3 px-6 rounded-lg hover:bg-primary transition-colors font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">
                Contact Information
              </h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <FaMapMarkerAlt className="text-primary mt-1 text-xl" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      Office Address
                    </h3>
                    <p className="text-gray-600">
                      123 Marathon Street
                      <br />
                      Runner's Plaza, Floor 5<br />
                      Sports City, SC 12345
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <FaPhone className="text-primary mt-1 text-xl" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      Phone Number
                    </h3>
                    <p className="text-gray-600">
                      +1 (555) 123-4567
                      <br />
                      +1 (555) 765-4321
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <FaEnvelope className="text-primary mt-1 text-xl" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      Email Address
                    </h3>
                    <p className="text-gray-600">
                      support@marathonhub.com
                      <br />
                      info@marathonhub.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <FaClock className="text-primary mt-1 text-xl" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      Working Hours
                    </h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9 AM - 6 PM
                      <br />
                      Saturday: 10 AM - 4 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">
                Follow Us
              </h3>
              <div className="flex space-x-6">
                <a
                  href="https://www.facebook.com/MarathonHubOfficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                  aria-label="Facebook"
                >
                  <FaFacebookF className="text-2xl" />
                </a>

                <a
                  href="https://twitter.com/MarathonHub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-500 transition-colors"
                  aria-label="Twitter"
                >
                  <FaTwitter className="text-2xl" />
                </a>

                <a
                  href="https://www.linkedin.com/company/marathonhub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-700 transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn className="text-2xl" />
                </a>

                <a
                  href="https://www.instagram.com/MarathonHubOfficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-pink-600 transition-colors"
                  aria-label="Instagram"
                >
                  <FaInstagram className="text-2xl" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg overflow-hidden">
          <iframe
            title="Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.565259038661!2d-122.41941558468502!3d37.77492997975931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1623456789012!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            className="rounded-2xl"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
