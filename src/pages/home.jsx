import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Share2,
  Play,
  Heart,
  MapPin,
  ArrowRight,
  Search,
  MousePointer2,
  Mail,
  BarChart3,
  FileText,
  Facebook,
  Linkedin,
  Twitter,
} from "lucide-react";
import Accordion from '../components/Accordion'
import Testimonials from "../components/testimonials";

export default function LandingPage() {
  const navigation = [
    { name: "About us", href: "/" },
    { name: "Services", href: "#" },
    { name: "Use Cases", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "Blog", href: "#" },
  ];

  const services = [
    {
      title: "Search engine optimization",
      icon: Search,
      bgColor: "bg-white",
      image: "/img/s1.png", 
    },
    {
      title: "Pay-per-click advertising",
      icon: MousePointer2,
      bgColor: "bg-[#C4F934]",
      image: "/img/s2.png",
    },
    {
      title: "Social Media Marketing",
      icon: Heart,
      bgColor: "bg-black",
      textColor: "text-white",
      image: "/img/s3.png",
    },
    {
      title: "Email Marketing",
      icon: Mail,
      bgColor: "bg-white",
      image: "/img/s4.png",
    },
    {
      title: "Content Creation",
      icon: FileText,
      bgColor: "bg-[#C4F934]",
      image: "/img/s5.png",
    },
    {
      title: "Analytics and Tracking",
      icon: BarChart3,
      bgColor: "bg-black",
      textColor: "text-white",
      image: "/img/s6.png",
    },
  ];


  
  const team = [
    {
      name: "John Smith",
      role: "CEO and Founder",
      image: "/placeholder.svg?height=100&width=100",
      description:
        "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
    },
    {
      name: "Jane Doe",
      role: "Director of Operations",
      image: "/placeholder.svg?height=100&width=100",
      description:
        "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
    },
    {
      name: "Michael Brown",
      role: "Senior SEO Specialist",
      image: "/placeholder.svg?height=100&width=100",
      description:
        "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
    },
    {
      name: "Emily Johnson",
      role: "PPC Manager",
      image: "/placeholder.svg?height=100&width=100",
      description:
        "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
    },
    {
      name: "Brian Williams",
      role: "Social Media Specialist",
      image: "/placeholder.svg?height=100&width=100",
      description:
        "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
    },
    {
      name: "Sarah Kim",
      role: "Content Creator",
      image: "/placeholder.svg?height=100&width=100",
      description:
        "2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries",
    },
  ];

  

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Testimonials.length);
  };

  const previousSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + Testimonials.length) % Testimonials.length
    );
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter submission
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="px-6 py-8">
        <div className="flex items-center justify-between max-w-[1400px] mx-auto">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 bg-black" />
            <span className="text-xl font-bold">Positivus</span>
          </div>
          <nav className="hidden lg:flex items-center justify-center flex-1 mx-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="px-5 py-2 text-sm font-medium text-gray-900 hover:text-gray-600"
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <button className="px-6 py-2 rounded-md border border-gray-300 text-sm font-medium hover:bg-gray-100">
            Request a quote
          </button>
        </div>
      </header>

      <main>
        <div className="max-w-[1400px] mx-auto px-6">
          {/* Hero Section */}
          <section className="py-16">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              {/* Left side content */}
              <div className="lg:w-1/2 space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Navigating the digital landscape for success.
                 </h1>
                 <p className="text-lg text-gray-600 max-w-lg">
                      Our digital marketing agency helps businesses grow and succeed
                      online through a range of services including SEO, PPC, social
                       media marketing, and content creation.
                   </p>
                   <button className="px-8 py-4 bg-black text-white rounded-md text-lg font-medium hover:bg-gray-800">
                      Book a consultation
                   </button>
             </div>

             {/* Right side content */}
             <div className="lg:w-1/2 relative flex justify-center">
             <img
                src="/img/1.png" // Path to your image
               alt="Hero Image"
               className="w-full h-auto max-w-lg mx-auto" // Adjust size as needed
             />
            </div>
        </div>
       </section>

          {/* Logos Section */}
          <section className="py-16">
            <div className="flex flex-wrap gap-12 justify-center">            
                {/* Logos to scroll */}
                {[
                  { src: "/img/amazon.png", alt: "Amazon" },
                  { src: "/img/dribble.png", alt: "Dribbble" },
                  { src: "/img/hubspot.png", alt: "HubSpot" },
                  { src: "/img/notion.png", alt: "Motion" },
                  { src: "/img/netflix.png", alt: "Netflix" },
                  { src: "/img/zoom.png", alt: "Zoom" },
                ].map((logo, index) => (
                  <img
                    key={index}
                    src={logo.src}
                    alt={logo.alt}
                    className="h-12 md:h-16"
                  />
                ))}
              </div>
          </section>

          {/* Services Section */}
          <section className="py-24">
            <div className="space-y-16">
              {/* Header Section */}
              <div className="space-y-4">
                <div className="inline-block px-4 py-2 bg-[#C4F934] rounded-md ">
                  <h2 className="text-2xl font-bold">Services</h2>
                </div>
                <p className="text-lg max-w-2xl">
                  At our digital marketing agency, we offer a range of services
                  to help businesses grow and succeed online. These services
                  include:
                </p>
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className={`flex flex-col md:flex-row items-center md:items-start gap-6 p-6 ${
                      service.bgColor
                    } ${
                      service.textColor || "text-black"
                    } rounded-3xl border-black border-2 border-b-8`}
                  >
                    {/* Text Section */}
                    <div className="flex-1 space-y-4">
                      <h3 className="text-2xl font-bold">{service.title}</h3>
                      <service.icon className="w-12 h-12" />
                      <Link
                        to="#"
                        className="inline-flex items-center gap-2 text-lg font-medium hover:opacity-80"
                      >
                        Learn more <ArrowRight className="w-5 h-5" />
                      </Link>
                    </div>

                    {/* Image Section */}
                    {service.image && (
                      <div className="flex-shrink-0 w-full md:w-1/3">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full  object-cover rounded-lg"
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* info section */}
          <section className="relative overflow-hidden bg-gray-200 rounded-2xl">
            <div className="container px-4 md:px-6 py-12 md:py-16 lg:py-20">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex-1 space-y-4 text-center md:text-left">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text3xl md:text-4xl">
                    Let's make things happen
                  </h2>
                  <p className="mx-auto md:mx-0 max-w-[600px] text-gray-500  md:text-xl">
                    Contact us today to learn more about how our digital
                    marketing services can help your business grow and succeed
                    online.
                  </p>
                  <div className="flex justify-center md:justify-start">
                    <button
                      size="lg"
                      className="bg-gray-900 text-white hover:bg-gray-800 rounded-md p-3"
                    >
                      Get your free proposal
                    </button>
                  </div>
                </div>
                <div className="relative w-full max-w-[240px] md:w-[280px] aspect-square">
                  <div>
                    <img src="/img/7.png" alt="404" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Case Studies Section */}
          <section className="py-24">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-block px-4 py-2 bg-[#C4F934] rounded-md">
                  <h2 className="text-2xl font-bold">Case Studies</h2>
                </div>
                <p className="text-lg">
                  Explore Real-Life Examples of Our Proven Digital Marketing
                  Success through Our Case Studies
                </p>
              </div>

              <div className="bg-black text-white rounded-3xl p-12">
                <div className="grid md:grid-cols-3 gap-8 divide-x divide-gray-800">
                  <div className="space-y-4 pr-8">
                    <p className="text-lg">
                      For a local restaurant, we implemented a targeted PPC
                      campaign that resulted in a 50% increase in website
                      traffic and a 65% increase in sales.
                    </p>
                    <Link
                      to="#"
                      className="inline-flex items-center gap-2 text-[#C4F934] hover:opacity-80"
                    >
                      Learn more <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>

                  <div className="space-y-4 px-8">
                    <p className="text-lg">
                      For a B2B software company, we developed an SEO strategy
                      that resulted in a first page ranking for key keywords and
                      a 200% increase in organic traffic.
                    </p>
                    <Link
                      to="#"
                      className="inline-flex items-center gap-2 text-[#C4F934] hover:opacity-80"
                    >
                      Learn more <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>

                  <div className="space-y-4 pl-8">
                    <p className="text-lg">
                      For a national retail chain, we created a social media
                      marketing campaign that increased followers by 25% and
                      generated a 20% increase in online sales.
                    </p>
                    <Link
                      to="#"
                      className="inline-flex items-center gap-2 text-[#C4F934] hover:opacity-80"
                    >
                      Learn more <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Working Process Section */}
          <Accordion></Accordion>

          {/* Team Section */}
          <section className="py-24">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-block px-4 py-2 bg-[#C4F934] rounded-md">
                  <h2 className="text-2xl font-bold">Team</h2>
                </div>
                <p className="text-lg">
                  Meet the skilled and experienced team behind our successful
                  digital marketing strategies
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {team.map((member, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-3xl border border-gray-200"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="relative">
                            <div className="w-16 h-16 bg-[#C4F934] rounded-md absolute -top-1 -left-1 -z-10" />
                          </div>
                          <div>
                            <h3 className="font-bold">{member.name}</h3>
                            <p className="text-sm text-gray-600">
                              {member.role}
                            </p>
                          </div>
                        </div>
                        <Link
                          to="#"
                          className="p-2 hover:bg-gray-100 rounded-md transition-colors"
                        >
                         {/* LinkedIn Icon in Black Circle with Green 'in' */}
                         <div className="w-10 h-10 flex items-center justify-center bg-black rounded-full">
                         <span className="text-[#C4F934] text-sm font-bold">in</span>
                         </div>
                        </Link>
                      </div>
                      <p className="text-sm text-gray-600">
                        {member.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-center">
                <button className="px-8 py-2 rounded-md border border-gray-300 text-sm font-medium hover:bg-gray-100">
                  See all team
                </button>
              </div>
            </div>
          </section>

          {/* Testimonials Section */}

          <Testimonials></Testimonials>

          {/* Contact Section */}
          <section className="py-24">
            <div className="space-y-8">
              <div className="space-y-4 ">
                <div className="inline-block px-4 py-2 bg-[#C4F934] rounded-md ">
                  <h2 className="text-2xl font-bold">Contact Us</h2>
                </div>
                <p className="text-lg ">
                  Connect with Us: Let's Discuss Your Digital Marketing Needs
                </p>
              </div>

              <div className="bg-gray-100 rounded-3xl p-8 md:p-12">
                <div className="grid lg:grid-cols-2 gap-12">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="flex gap-4">
                      <label className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name="contact-type"
                          value="say-hi"
                          defaultChecked
                          className="form-radio"
                        />
                        <span>Say Hi</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name="contact-type"
                          value="get-quote"
                          className="form-radio"
                        />
                        <span>Get a Quote</span>
                      </label>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Name
                        </label>
                        <input
                          id="name"
                          type="text"
                          required
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Email*
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Message*
                        </label>
                        <textarea
                          id="message"
                          required
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 min-h-[150px]"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors"
                    >
                      Send Message
                    </button>
                  </form>
                   <div className="relative hidden lg:block">
                     <div className="absolute inset-0 flex items-end justify-end pr-8 pb-8">
                      <img
                         src="/img/8.png" 
                         alt="Contact Logo"
                         className="absolute top-0 right-0 w-[32rem] h-[28rem] object-contain transform translate-x-1/2"
                       />
                     </div>
                   </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

     {/* Footer Section */}
<footer className="bg-black text-white">
  <div className="max-w-[1400px] mx-auto px-6 py-12">
    <div className="grid gap-12">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Left Section - Positivus Logo */}
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 bg-white" />
          <span className="text-xl font-bold">Positivus</span>
        </div>

        {/* Middle Section - Navigation Links */}
        <nav className="flex flex-col md:flex-row gap-6 justify-center md:justify-center">
          <Link to="/about-us" className="text-sm text-gray-400 hover:text-white">
            About us
          </Link>
          <Link to="/services" className="text-sm text-gray-400 hover:text-white">
            Services
          </Link>
          <Link to="/use-cases" className="text-sm text-gray-400 hover:text-white">
            Use Cases
          </Link>
          <Link to="/pricing" className="text-sm text-gray-400 hover:text-white">
            Pricing
          </Link>
          <Link to="/blog" className="text-sm text-gray-400 hover:text-white">
            Blog
          </Link>
        </nav>

        {/* Right Section - Social Media Logos */}
        <div className="flex gap-6 justify-center md:justify-end">
          <Link to="https://www.linkedin.com" className="text-gray-400 hover:text-white">
            <Linkedin className="w-6 h-6" />
          </Link>
          <Link to="https://www.facebook.com" className="text-gray-400 hover:text-white">
            <Facebook className="w-6 h-6" />
          </Link>
          <Link to="https://www.twitter.com" className="text-gray-400 hover:text-white">
            <Twitter className="w-6 h-6" />
          </Link>
        </div>
      </div>

      {/* Middle Section - Contact Info */}
      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-4">
          <div className="inline-block px-4 py-2 bg-[#C4F934] rounded-md">
            <span className="text-black font-bold">Contact us:</span>
          </div>
          <div className="space-y-2 text-gray-300">
            <p>Email: info@positivus.com</p>
            <p>Phone: 555-567-8901</p>
            <p>Address: 1234 Main St</p>
            <p>Moonstone City, Stardust State 12345</p>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="space-y-4">
          <form
            onSubmit={handleNewsletterSubmit}
            className="flex flex-col sm:flex-row gap-4"
          >
            <input
              type="email"
              placeholder="Email"
              required
              className="flex-grow px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-[#C4F934] text-black rounded-md hover:bg-[#b3e92f] transition-colors"
            >
              Subscribe to news
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-gray-800">
        <p className="text-sm text-gray-400 text-center md:text-left">
          © 2023 Positivus. All Rights Reserved.
        </p>
        <Link
          to="/privacy-policy"
          className="text-sm text-gray-400 hover:text-white"
        >
          Privacy Policy
        </Link>
      </div>
    </div>
  </div>
</footer>

    </div>
  );
}