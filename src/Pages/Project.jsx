import { useState } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Chatify - Real-Time Chat",
    description:
      "A real-time chat application built with the MERN stack featuring user authentication, private messaging, group chats, and a sleek responsive design using Socket.io for instant message delivery.",
    image: "/app.png",
    tags: ["React.js", "Node.js", "Express", "MongoDB", "Socket.io", "zustand", "Resend"],
    link: "https://chatify-vcl0.onrender.com/",
    github: "https://github.com/zeyaul98/chatify",
    cardBg: "bg-blue-50",
    accentColor: "text-blue-600",
    emoji: "💬",
  },
  {
    id: 2,
    title: "Bihar Railway FIR Management System",
    description:
      "A comprehensive Railway FIR Management System developed for Bihar Railway Police to streamline FIR registration, case tracking, accused management, bail management, and report generation. The platform provides role-based access, advanced search functionality, real-time dashboards, and secure data management to improve efficiency and transparency in criminal case handling.",
    image: "/FIR_Management.png",
    tags: [
      "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Tailwind CSS",
    "JWT Authentication",
    "Role-Based Access",
    "FIR Management",
    "Case Tracking",
    "Dashboard Analytics",
    "CSV Upload",
    "REST API"
  ],
  link: "https://fir-managment-system-two.vercel.app",
  github: "https://github.com/zeyaul98/FIR-MANAGMENT-SYSTEM",
    cardBg: "bg-red-50",
    accentColor: "text-blue-600",
    emoji: "🚂",
},
   {
    id: 3,
    title: "Pixora - Image Downloader",
    description:
      "A Pinterest-style media search platform where users can explore and download high-quality images, videos, and GIFs instantly. Built using React and Redux Toolkit to practice advanced state management, API handling, infinite scrolling, and responsive UI design.",
    image: "/pixora.png",
    tags: ["React.js",
    "Redux Toolkit",
    "Tailwind CSS",
    "Framer Motion",
    "Unsplash API",
    "Pexels API",
    "Tenor API",
    "Masonry Layout",
    "Infinite Scroll",
    "Responsive UI",],
    link: "https://pixora-rosy.vercel.app/",
    github: "https://github.com/zeyaul98/pixora",
    cardBg: "bg-blue-50",
    accentColor: "text-blue-600",
    emoji: "🖼️",
  },
  {
    id: 4,
    title: "CyberHub - Online Cafe",
    description:
      "A modern online cyber cafe platform where users can access digital services, explore government-related facilities, and easily connect for online form submissions and document services.",
    image: "/cyberhub.png",
    tags: ["React.js", "Tailwind CSS", "framer-motion", "contact-form", "Aceternity UI"],
    link: "https://cyber-hub-gaya.vercel.app/",
    github: "https://github.com/zeyaul98/CyberHub",
    cardBg: "bg-green-50",
    accentColor: "text-green-600",
    emoji: "🖥️",
  },
  {
    id: 5,
    title: "MSG 24X7 - Whatsapp API Business Offer - FreeLancer",
    description:
      "Developed a modern freelancer business platform for WhatsApp API services with responsive design, smooth animations, and user-friendly sections for client engagement and service promotion.",
    image: "/msg24x7.png",
    tags: ["React.js", "Tailwind CSS", "framer-motion", "contact-form", "Aceternity UI"],
    link: "https://msg-24x7-m72j-5nxveez3j-zeyaul-haques-projects.vercel.app/?",
    github: "https://github.com/zeyaul98/MSG24x7",
    cardBg: "bg-green-50",
    accentColor: "text-green-600",
    emoji: "🖥️",
  },
];

// ── Icons ──
const GitHubIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LiveIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

// ── Animation variants ──
const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const navVariants = {
  hidden: { opacity: 0, y: -12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const heroVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14 } },
};

const heroItem = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

export default function Projects() {
  const [imgErrors, setImgErrors] = useState({});
  const onError = (id) => setImgErrors((prev) => ({ ...prev, [id]: true }));

  return (
    <div className="min-h-screen bg-[#f7f7f5]" style={{ fontFamily: "'Outfit', 'Segoe UI', sans-serif" }}>

      {/* Google Fonts */}
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Outfit:wght@400;500;600;700&display=swap');`}</style>

      {/* ── NAV ── */}
      <motion.nav
        variants={navVariants}
        initial="hidden"
        animate="show"
        className="bg-white border-b border-gray-200 px-6 sm:px-12 py-4 flex items-center gap-2 text-sm text-gray-400"
      >
        <a href="/" className="hover:text-gray-700 transition-colors duration-150">Home</a>
        <span className="text-gray-300">›</span>
        <a href="#" className="hover:text-gray-700 transition-colors duration-150">Portfolio</a>
        <span className="text-gray-300">›</span>
        <span className="font-semibold text-gray-800">Projects</span>
      </motion.nav>

      {/* ── HERO ── */}
      <motion.div
        variants={heroVariants}
        initial="hidden"
        animate="show"
        className="text-center px-6 pt-20 pb-16"
      >
        <motion.h1
          variants={heroItem}
          className="text-5xl sm:text-6xl lg:text-7xl font-normal leading-[1.05] tracking-tight text-gray-900 mb-4"
          style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
        >
          My{" "}
          <em
            style={{
              fontStyle: "italic",
              background: "linear-gradient(135deg, #16a34a 0%, #2563eb 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Projects
          </em>
        </motion.h1>

        <motion.p
          variants={heroItem}
          className="text-[15.5px] text-gray-500 max-w-md mx-auto leading-relaxed"
        >
          Projects I worked on — each one built with care, shipped live, and ready to explore.
        </motion.p>
      </motion.div>

      {/* ── DIVIDER ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="max-w-5xl mx-auto px-8 sm:px-12 mb-12 flex items-center gap-4"
      >
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.45, duration: 0.7, ease: "easeOut" }}
          style={{ transformOrigin: "left" }}
          className="flex-1 h-px bg-gray-200"
        />
        <span className="text-xs font-semibold text-gray-400 tracking-widest uppercase whitespace-nowrap">
          {projects.length} Projects
        </span>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.45, duration: 0.7, ease: "easeOut" }}
          style={{ transformOrigin: "right" }}
          className="flex-1 h-px bg-gray-200"
        />
      </motion.div>

      {/* ── CARDS GRID ── */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="max-w-5xl mx-auto px-6 sm:px-10 pb-24 grid grid-cols-1 sm:grid-cols-2 gap-7"
      >
        {projects.map((p) => (
          <motion.article
            key={p.id}
            variants={cardVariants}
            whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
            className="bg-white border border-gray-200 rounded-2xl overflow-hidden flex flex-col shadow-sm hover:shadow-xl hover:border-gray-300 transition-shadow duration-300 cursor-default"
          >
            {/* ── THUMBNAIL ── */}
            <div className="w-full aspect-video overflow-hidden relative bg-gray-100">
              {!imgErrors[p.id] ? (
                <>
                  <motion.img
                    src={p.image}
                    alt={p.title}
                    onError={() => onError(p.id)}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                  />
                  {/* Browser chrome bar */}
                  <div className="absolute top-0 left-0 right-0 h-6 bg-white/90 backdrop-blur-sm flex items-center px-3 gap-1.5 border-b border-black/5 z-10">
                    <span className="w-2 h-2 rounded-full bg-[#ff5f57]" />
                    <span className="w-2 h-2 rounded-full bg-[#febc2e]" />
                    <span className="w-2 h-2 rounded-full bg-[#28c840]" />
                    <div className="flex-1 mx-2 h-2.5 bg-gray-100 rounded-full" />
                  </div>
                </>
              ) : (
                /* Fallback when image is missing */
                <div className={`w-full h-full flex flex-col items-center justify-center gap-3 ${p.cardBg}`}>
                  <motion.span
                    initial={{ scale: 0.7, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.4, ease: "backOut" }}
                    className="text-5xl leading-none"
                  >
                    {p.emoji}
                  </motion.span>
                  <span className={`text-xs font-bold tracking-widest uppercase ${p.accentColor}`}>
                    {p.title.split(" - ")[0]}
                  </span>
                </div>
              )}
            </div>

            {/* ── BODY ── */}
            <div className="px-6 pt-6 flex flex-col flex-1">
              <h2 className="text-[1.3rem] font-bold text-gray-900 tracking-tight leading-snug mb-2">
                {p.title}
              </h2>
              <p className="text-sm text-gray-500 leading-[1.75] mb-5 flex-1">
                {p.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                {p.tags.map((tag) => (
                  <motion.span
                    key={tag}
                    whileHover={{ scale: 1.07, y: -1 }}
                    transition={{ duration: 0.15 }}
                    className="text-[11.5px] font-medium px-3 py-1 rounded-full border border-gray-200 bg-gray-50 text-gray-600 cursor-default"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* ── ACTIONS ── */}
            <div className="px-6 pb-6 pt-4 border-t border-gray-100 flex gap-3">
              <motion.a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex-1 flex items-center justify-center gap-2 text-sm font-semibold text-gray-700 border border-gray-300 bg-white rounded-full py-2.5 px-5 hover:bg-gray-50 hover:border-gray-400 transition-colors duration-200"
              >
                <GitHubIcon />
                GitHub
              </motion.a>

              <motion.a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex-1 flex items-center justify-center gap-2 text-sm font-semibold text-white bg-gray-900 rounded-full py-2.5 px-5 hover:bg-gray-700 transition-colors duration-200"
              >
                <LiveIcon />
                Live Visit
              </motion.a>
            </div>
          </motion.article>
        ))}
      </motion.div>

      {/* ── PAGE FOOTER ── */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="text-center pb-20"
      >
        <div className="w-10 h-px bg-gray-300 mx-auto mb-5" />
        <p className="text-sm text-gray-400">
          <span className="text-gray-600 font-semibold">{projects.length} projects</span>
          {" · "}
          {projects.reduce((a, p) => a + p.tags.length, 0)} technologies used
        </p>
      </motion.div>

    </div>
  );
}