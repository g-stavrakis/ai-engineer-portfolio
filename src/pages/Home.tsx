import React, { useEffect, useState } from 'react';
import Container from '../components/Container';
import Card from '../components/Card';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import Player from 'lottie-react';
import scrollDownLottie from '../assets/scroll-down-hint.json';
import emailjs from '@emailjs/browser';

interface NavCard {
  label: string;
  desc: string;
  to: string;
  bg: string;
  border: string;
  iconBg: string;
  tags: { label: string; color: string }[];
  phoneImg: string;
}

interface HomeData {
  intro: {
    avatar: string;
    headline: string;
    tagline: string;
  };
  navigation: NavCard[];
  about: {
    image: string;
    headline: string;
    subheadline: string;
    bio: string;
  };
  contact: {
    headline: string;
    phone?: string;
    email: string;
    location: string;
  };
}

const getImageUrl = (filename: string) => {
  try {
    return new URL(`../assets/images/${filename}`, import.meta.url).href;
  } catch {
    return '';
  }
};

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<HomeData | null>(null);

  // Contact form state
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    import('../data/home.json').then((d) => setData(d.default || d));
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);
    try {
      // Use Vite environment variables for EmailJS credentials
      const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      // The template params must match your EmailJS template fields
      const templateParams = {
        from_name: form.name,
        from_email: form.email,
        subject: form.subject,
        message: form.message,
      };

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      setSuccess('Thank you! Your message has been sent.');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setError('Sorry, there was a problem sending your message. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  if (!data) return null;

  // Social media links and icons
  const iconFiles = import.meta.glob('../assets/icons/*.svg', { eager: true, query: '?url', import: 'default' });
  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/george-stavrakis/',
      icon: iconFiles['../assets/icons/linkedin.svg'] as string,
      label: 'LinkedIn',
    },
    {
      name: 'Medium',
      href: 'https://medium.com/@george.stavrakis.1996',
      icon: iconFiles['../assets/icons/medium.svg'] as string,
      label: 'Medium',
    },
    {
      name: 'GitHub',
      href: 'https://github.com/g-stavrakis',
      icon: iconFiles['../assets/icons/github.svg'] as string,
      label: 'GitHub',
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/george_stv',
      icon: iconFiles['../assets/icons/instagram.svg'] as string,
      label: 'Instagram',
    },
  ];

  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory bg-gradient-to-br from-slate-50 to-blue-50 relative">
      {/* Social Media Bar */}
      <div className="absolute top-12 left-[10%] flex flex-row gap-3 z-50">
        {socialLinks.map((item) => (
          <a
            key={item.name}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.label}
            className="hover:scale-110 transition-transform duration-150"
          >
            <img
              src={item.icon}
              alt={item.label}
              className="w-8 h-8 text-gray-500 hover:text-teal-500"
              style={{ filter: 'grayscale(1)', opacity: 0.7 }}
            />
          </a>
        ))}
      </div>
      {/* Intro Section */}
      <section className="h-screen snap-start flex flex-col justify-center items-center px-4 py-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-6">
            <img
              src={getImageUrl(data.intro.avatar)}
              alt="Avatar"
              className="w-48 h-48 md:w-60 md:h-60 rounded-full mx-auto mb-6 object-cover shadow-lg"
            />
            <h1 className="text-xl md:text-3xl font-light italic text-gray-800 mb-4 leading-tight">
              {data.intro.headline}
            </h1>
            <p className="text-xl md:text-2xl italic text-gray-600 max-w-2xl mx-auto leading-relaxed">
              {data.intro.tagline}
            </p>
          </div>
          
          <div className="mt-6 flex justify-center">
            <Player
              autoplay
              loop
              animationData={scrollDownLottie}
              style={{ height: 60, width: 60 }}
              aria-label="Scroll down animation"
            />
          </div>
        </div>
      </section>

      {/* Navigation Cards Section */}
      <section className="h-screen snap-start flex flex-col justify-center py-12 px-4 bg-white/30">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1600px] mx-auto">
            {data.navigation.map((card, index) => {
              // Assign pastel backgrounds and tag colors by card type
              const cardBg = index === 0 ? 'bg-[#d6ece7]' : index === 1 ? 'bg-[#fbe6ea]' : 'bg-[#e6f2fb]';
              const arrowBg = index === 0 ? 'bg-[#c2e9e0]' : index === 1 ? 'bg-[#f8cfd7]' : 'bg-[#cbe3f6]';
              const tagColor = index === 0 ? 'bg-[#c2e9e0] text-[#1a6c5b]' : index === 1 ? 'bg-[#f8cfd7] text-[#b94a6c]' : 'bg-[#cbe3f6] text-[#2176ae]';
              return (
                <Card
                  key={index}
                  className={`relative flex flex-col justify-between w-full max-w-[500px] h-[520px] sm:h-[560px] md:h-[580px] p-8 rounded-3xl border border-[#e0e0e0] shadow-md ${cardBg} transition-all group focus:outline-none overflow-visible cursor-pointer mx-auto`}
                  onClick={() => navigate(card.to)}
                  tabIndex={0}
                  role="button"
                  aria-label={`Go to ${card.label}`}
                  style={{ minWidth: 0 }}
                >
                  {/* Top right arrow icon */}
                  <div className={`absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full ${arrowBg} group-hover:bg-opacity-80 transition z-10`}>
                    <ArrowUpRight className="w-6 h-6 text-black" />
                  </div>
                  {/* Title and desc */}
                  <div>
                    <h2 className="text-2xl font-bold mb-2 text-black">{card.label}</h2>
                    <p className="text-gray-700 text-base mb-4">{card.desc}</p>
                    <div className="flex gap-2 mb-6 flex-row flex-nowrap w-full">
                      {card.tags.map((tag, idx) => (
                        <span key={idx} className={`px-3 py-1 rounded-full text-xs font-semibold ${tagColor} whitespace-nowrap`}>{tag.label}</span>
                      ))}
                    </div>
                  </div>
                  {/* Phone mockup image - always below tags */}
                  <div className="flex-1 flex items-end justify-center relative mt-2">
                    <div className="w-48 h-72 sm:w-56 sm:h-80 md:w-64 md:h-88 rounded-2xl flex items-center justify-center overflow-visible z-0">
                      <img src={getImageUrl(card.phoneImg)} alt={card.label + ' preview'} className="object-contain w-full h-full drop-shadow-xl" style={{ marginBottom: '-40px' }} />
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>

      {/* About Me Section */}
      <section className="h-screen snap-start flex flex-col justify-center py-12 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
              About Me
            </h2>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-72 h-96 bg-white flex items-center justify-center text-lg rounded-xl mb-6 md:mb-0 shrink-0 overflow-hidden shadow-lg">
                {data.about.image ? (
                  <img src={getImageUrl(data.about.image)} alt="About Me" className="object-cover w-full h-full" />
                ) : (
                  <span>&lt;My Image&gt;</span>
                )}
              </div>
              <div className="flex-1 text-left">
                <h3 className="text-lg font-semibold mb-2">{data.about.subheadline}</h3>
                {data.about.bio.split('\n').map((line, idx) => (
                  <p key={idx} className="text-zinc-700 dark:text-zinc-300 max-w-xl text-base">{line}</p>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="h-screen snap-start flex flex-col justify-center py-12 px-4 bg-gradient-to-br from-slate-100 to-gray-200">
        <div className="max-w-4xl mx-auto w-full">
          <div className="mb-8">
            <div className="tracking-[0.4em] text-center text-gray-400 text-lg mb-6 font-medium">CONTACT</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              {data.contact.headline}
            </h2>
            <div className="flex flex-col items-center gap-3 mb-10">
              <div className="flex items-center gap-2 text-gray-600 text-lg">
                <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5.75C3 4.784 3.784 4 4.75 4h14.5c.966 0 1.75.784 1.75 1.75v12.5c0 .966-.784 1.75-1.75 1.75H4.75A1.75 1.75 0 013 18.25V5.75z" /><path strokeLinecap="round" strokeLinejoin="round" d="M3 6l9 6 9-6" /></svg>
                <span>{data.contact.email}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 text-lg">
                <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657A8 8 0 013.343 2.343a8 8 0 0011.314 11.314z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span>{data.contact.location}</span>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                id="name"
                name="name"
                required
                className="flex-1 px-4 py-3 bg-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-lg"
                placeholder="Name"
                value={form.name}
                onChange={handleInputChange}
                disabled={loading}
              />
              <input
                type="email"
                id="email"
                name="email"
                required
                className="flex-1 px-4 py-3 bg-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-lg"
                placeholder="Email"
                value={form.email}
                onChange={handleInputChange}
                disabled={loading}
              />
            </div>
            <input
              type="text"
              id="subject"
              name="subject"
              className="px-4 py-3 bg-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-lg"
              placeholder="Subject"
              value={form.subject}
              onChange={handleInputChange}
              disabled={loading}
            />
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="px-4 py-3 bg-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-lg resize-none"
              placeholder="Message"
              value={form.message}
              onChange={handleInputChange}
              disabled={loading}
            />
            <button
              type="submit"
              className="w-full bg-teal-400 text-white py-4 px-8 rounded-lg font-semibold hover:bg-teal-500 transition-colors duration-200 text-lg mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Submit'}
            </button>
            {success && <div className="text-green-600 text-center mt-2">{success}</div>}
            {error && <div className="text-red-600 text-center mt-2">{error}</div>}
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home; 