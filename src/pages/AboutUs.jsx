const AboutUs = () => {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative h-[600px] bg-gradient-to-r from-blue-800 to-purple-900">
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="text-center text-white max-w-3xl mx-auto">
              <h1 className="text-5xl font-bold mb-6 animate-fade-in-down">
                Revolutionizing Marathon Management
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Empowering runners and organizers through innovative technology
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-gray-50"></div>
        </section>
  
        {/* Mission Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-gray-800 mb-6">
                  Our Mission
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  At MarathonHub, we're dedicated to creating seamless experiences 
                  for both marathon organizers and participants. Our platform bridges 
                  the gap between event planning and participation, offering 
                  cutting-edge tools for management and engagement.
                </p>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5" 
                  alt="Marathon runners"
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </section>
  
        {/* Team Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
              Meet Our Core Team
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {name: "Sarah Johnson", role: "CEO", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956"},
                {name: "Michael Chen", role: "CTO", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d"},
                {name: "Emma Wilson", role: "COO", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2"},
              ].map((member, idx) => (
                <div key={idx} className="group relative text-center">
                  <div className="relative overflow-hidden rounded-2xl mb-6">
                    <img 
                      src={member.img}
                      alt={member.name}
                      className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-gray-600">{member.role}</p>
                  <div className="flex justify-center space-x-4 mt-4">
                    {['linkedin', 'twitter', 'github'].map((icon, i) => (
                      <a key={i} href="#" className="text-gray-400 hover:text-blue-600">
                        <i className={`fab fa-${icon} text-xl`} />
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
  
        {/* Values Section */}
        <section className="py-20 bg-blue-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
              Our Core Values
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {icon: 'rocket', title: 'Innovation', 
                 text: 'Pushing boundaries in race management technology'},
                {icon: 'users', title: 'Community', 
                 text: 'Building strong connections between runners and organizers'},
                {icon: 'medal', title: 'Excellence', 
                 text: 'Delivering world-class event experiences'},
              ].map((value, idx) => (
                <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg text-center">
                  <div className="text-6xl text-blue-600 mb-6">
                    <i className={`fas fa-${value.icon}`} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
  
        {/* CTA Section */}
        <section className="relative py-32 bg-gray-800 text-white text-center">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552674605-db6ffd4facb5')] bg-cover opacity-20" />
          <div className="container mx-auto px-4 relative">
            <h2 className="text-4xl font-bold mb-8">
              Ready to Run Your Next Marathon?
            </h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto">
              Join thousands of runners and organizers already revolutionizing their 
              marathon experiences with our platform
            </p>
            <button className="bg-primary hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all">
              Get Started Now
            </button>
          </div>
        </section>
  
        {/* Footer */}
        {/* <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">MarathonHub</h3>
                <p className="text-gray-400">
                  Empowering runners and organizers since 2024
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  {['About Us', 'Marathons', 'Contact', 'FAQs'].map((link, i) => (
                    <li key={i}><a href="#" className="text-gray-400 hover:text-white">{link}</a></li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Legal</h4>
                <ul className="space-y-2">
                  {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link, i) => (
                    <li key={i}><a href="#" className="text-gray-400 hover:text-white">{link}</a></li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Connect</h4>
                <div className="flex space-x-4">
                  {['facebook', 'twitter', 'instagram', 'linkedin'].map((icon, i) => (
                    <a key={i} href="#" className="text-2xl text-gray-400 hover:text-white">
                      <i className={`fab fa-${icon}`} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
              © 2024 MarathonHub. All rights reserved.
            </div>
          </div>
        </footer> */}
      </div>
    );
  };
  
  export default AboutUs;