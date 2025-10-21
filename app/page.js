"use client"
import { useEffect, useState } from "react";
import { Mail, Globe, Code, Cloud, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleScrollTo = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  const fadeInVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const caseStudies = [
  {
    industry: "Fintech",
    challenge: "Onboarding lambat & drop-off tinggi.",
    solution: "Refactor front-end, validasi realtime, dan caching API.",
    impact: [{ k: "Lead → Sign-up", v: "+34%" }, { k: "TTFB", v: "-42%" }],
    tags: ["Next.js", "Edge Cache", "Analytics"],
  },
  {
    industry: "Healthcare SaaS",
    challenge: "Query lambat pada dashboard dokter.",
    solution: "Indexing + pagination, job async untuk laporan berat.",
    impact: [{ k: "Load dashboard", v: "-68%" }, { k: "Crash rate", v: "-91%" }],
    tags: ["Nest.js", "Postgres", "Job Queue"],
  },
  {
    industry: "Retail",
    challenge: "Skalabilitas saat flash sale.",
    solution: "CDN, SSR streaming, dan autoscaling.",
    impact: [{ k: "Peak RPS", v: "3.2×" }, { k: "Error 5xx", v: "-87%" }],
    tags: ["Vercel", "GCP", "Observability"],
  },
];

  const onFormChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleMailto = (e) => {
    e.preventDefault();
    const to = "helloworld.id.tech@gmail.com";
    const subject = `Project Inquiry from ${form.name || "Website Visitor"}`;
    const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`;
    const href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
  };

  return (
    <div className="min-h-screen font-sans">
      {/* Header */}
      <header
        className={[
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-[#0A192F]/90 backdrop-blur border-b border-gray-700 shadow-sm"
            : "bg-transparent"
        ].join(" ")}
      >
        <div className="w-full flex justify-between items-center px-3 md:px-6 py-3">
          <div className="flex items-center pl-2">
            <img src="/logo-hw.png" alt="Hello World Logo" className="h-20 w-auto object-contain" />
          </div>
          <nav className="hidden md:flex space-x-8 text-gray-300">
            <a href="#about" onClick={(e)=>{e.preventDefault();handleScrollTo('about')}} className="hover:text-[#00BFFF]">About</a>
            <a href="#services" onClick={(e)=>{e.preventDefault();handleScrollTo('services')}} className="hover:text-[#00BFFF]">Services</a>
            <a href="#work" onClick={(e)=>{e.preventDefault();handleScrollTo('work')}} className="hover:text-[#00BFFF]">Work</a>
            <a href="#team" onClick={(e)=>{e.preventDefault();handleScrollTo('team')}} className="hover:text-[#00BFFF]">Team</a>
            <a href="#contact" onClick={(e)=>{e.preventDefault();handleScrollTo('contact')}} className="hover:text-[#00BFFF]">Contact</a>
          </nav>
        </div>
      </header>
      <div className="h-20" />

      {/* Hero */}
      <section className="text-center py-28 md:py-32 px-6 bg-gradient-to-b from-[#0A192F] to-[#112B3C]">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold mb-6 text-[#00BFFF]"
        >
          We Build. We Code. We Transform.
        </motion.h2>
        <p className="max-w-2xl mx-auto text-gray-300 mb-8">
          Hello World Corp. is an IT consulting and web development company helping
          businesses turn ideas into powerful digital experiences.
        </p>
        <button
          onClick={() => handleScrollTo('services')}
          className="bg-[#00BFFF] text-[#0A192F] font-semibold px-6 py-3 rounded-xl hover:scale-105 transition"
        >
          Get Started
        </button>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-6 md:px-10 bg-[#0A192F]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <motion.div variants={fadeInVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
            <h3 className="text-3xl font-bold text-[#00BFFF] mb-4">About Us</h3>
            <p className="text-gray-300 mb-6">
              We are a technology partner for modern businesses. Our team blends clean design,
              efficient code, and strategic consulting to build scalable products that deliver real value.
            </p>
            <ul className="space-y-3 text-gray-200">
              <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-[#00BFFF]" /> Modern stacks: React.js, Nest.js, Supabase, GCP/Vercel</li>
              <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-[#00BFFF]" /> Performance & security first development</li>
              <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-[#00BFFF]" /> Consulting that aligns tech with business goals</li>
            </ul>
            <div className="mt-8 flex gap-3">
              <button onClick={()=>handleScrollTo('services')} className="bg-[#00BFFF] text-[#0A192F] rounded-xl px-4 py-2">Explore Services</button>
              <button onClick={()=>handleScrollTo('contact')} className="border border-[#00BFFF] text-[#00BFFF] hover:bg-[#0F2236] rounded-xl px-4 py-2">Contact Us</button>
            </div>
          </motion.div>

          <motion.div variants={fadeInVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
            <div className="bg-[#112B3C] rounded-2xl border border-gray-700 p-6 shadow-lg">
  <img
    src="/team-photo.png"
    alt="Our Team"
    className="aspect-video w-full rounded-xl object-cover border border-[#0F2236]"
  />
  <p className="text-gray-400 text-sm mt-4">
    Trusted partner for startups and enterprises in digital transformation.
  </p>
</div>

          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-[#0A192F] py-20 px-6 md:px-10">
        <h3 className="text-3xl font-bold text-center mb-12 text-[#00BFFF]">Our Services</h3>
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            { icon: <Code className="mx-auto text-[#00BFFF] mb-4" size={40} />, title: "Web Development", desc: "Responsive, scalable, and modern websites built with React.js, Nest.js, and Supabase." },
            { icon: <Globe className="mx-auto text-[#00BFFF] mb-4" size={40} />, title: "IT Consulting", desc: "Strategic guidance to help your business grow with secure and efficient IT solutions." },
            { icon: <Cloud className="mx-auto text-[#00BFFF] mb-4" size={40} />, title: "Cloud Integration", desc: "Deploy faster and scale smarter with Google Cloud and Vercel hosting solutions." },
          ].map((service, i) => (
            <motion.div key={i} variants={fadeInVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
              <motion.div whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 300 }}>
                <div className="rounded-2xl border border-gray-700 bg-[#112B3C] hover:border-[#00BFFF] hover:shadow-lg hover:shadow-[#00BFFF]/20 transition">
                  <div className="p-6 text-center">
                    {service.icon}
                    <h4 className="text-xl font-semibold mb-2 text-white">{service.title}</h4>
                    <p className="text-gray-300">{service.desc}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="start" className="py-16 px-6 md:px-10 bg-gradient-to-r from-[#0F2236] to-[#0A192F] border-y border-gray-700">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white">Ready to Start a Project?</h3>
            <p className="text-gray-300 mt-2 max-w-2xl">Tell us your goals—our team will craft a fast, secure, and scalable solution tailored to your business.</p>
          </div>
          <div className="flex gap-3">
            <button onClick={()=>handleScrollTo('contact')} className="bg-[#00BFFF] text-[#0A192F] rounded-xl px-4 py-2">Start a Project</button>
            <button onClick={()=>handleScrollTo('services')} className="border border-[#00BFFF] text-[#00BFFF] hover:bg-[#0F2236] rounded-xl px-4 py-2">See Services</button>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-20 px-6 md:px-10 text-center bg-[#112B3C]">
        <h3 className="text-3xl font-bold text-[#00BFFF] mb-8">Our Team</h3>
        <p className="max-w-3xl mx-auto text-gray-300 mb-12">
          Behind every innovation is a team that cares. We collaborate, create, and code to build digital solutions that matter.
        </p>
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-8">
          {['Project Manager', 'Full-stack Developer', 'UI/UX Designer'].map((role, i) => (
            <motion.div key={i} variants={fadeInVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
              <motion.div whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 300 }}>
                <div className="bg-[#0A192F] border border-gray-700 w-64 rounded-2xl hover:border-[#00BFFF] hover:shadow-lg hover:shadow-[#00BFFF]/20 transition">
                  <div className="p-6">
                    <Users className="mx-auto text-[#00BFFF] mb-3" size={36} />
                    <h4 className="font-semibold text-white">{role}</h4>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-[#0A192F] py-20 px-6 md:px-10">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-[#00BFFF] mb-6 text-center">Contact Us</h3>
          <p className="text-gray-300 mb-10 max-w-xl mx-auto text-center">
            Have a project in mind? Let’s discuss how Hello World Corp. can bring your ideas to life.
          </p>
          <form onSubmit={handleMailto} className="grid grid-cols-1 gap-5">
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-sm text-gray-300 mb-2">Name</label>
                <input id="name" name="name" value={form.name} onChange={onFormChange} placeholder="Your name" className="w-full rounded-xl bg-[#112B3C] border border-gray-700 px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#00BFFF]" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-gray-300 mb-2">Email</label>
                <input id="email" type="email" name="email" value={form.email} onChange={onFormChange} placeholder="your@email.com" className="w-full rounded-xl bg-[#112B3C] border border-gray-700 px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#00BFFF]" required />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm text-gray-300 mb-2">Message</label>
              <textarea id="message" name="message" value={form.message} onChange={onFormChange} placeholder="Tell us about your project, timeline, and goals..." rows={6} className="w-full rounded-xl bg-[#112B3C] border border-gray-700 px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#00BFFF]" required />
            </div>
            <div className="flex items-center justify-center gap-3">
              <button type="submit" className="bg-[#00BFFF] text-[#0A192F] rounded-xl px-6 py-3">Send Message</button>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Mail className="text-[#00BFFF]" size={18} />
                <span>or email us at <span className="text-white">helloworld.id.tech@gmail.com</span></span>
              </div>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 border-t border-gray-700 text-gray-400 text-sm">
        © 2025 Hello World Corp. — From Ideas to the World
      </footer>
    </div>
  );
}
