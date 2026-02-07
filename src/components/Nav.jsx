import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Experience", id: "experience" },
  { name: "Projects", id: "projects" },
  { name: "Testimonials", id: "testimonials" },
  { name: "Contact", id: "contact" },
];

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  /* 🌗 SYSTEM THEME DETECT */
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) {
      document.documentElement.classList.toggle("dark", saved === "dark");
      setDarkMode(saved === "dark");
    } else {
      const systemDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      document.documentElement.classList.toggle("dark", systemDark);
      setDarkMode(systemDark);
    }
  }, []);

  /* 🌗 TOGGLE THEME */
  const toggleTheme = () => {
    const next = darkMode ? "light" : "dark";
    document.documentElement.classList.toggle("dark", next === "dark");
    localStorage.setItem("theme", next);
    setDarkMode(!darkMode);
  };

  /* 📌 STICKY */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* 🎯 ACTIVE SECTION */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { threshold: 0.6 }
    );

    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      el && observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      {/* ================= HEADER ================= */}
<header
  className={`fixed top-0 w-full z-50 transition-all duration-300
    ${
      scrolled
        ? "bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl shadow-sm border-b border-black/5 dark:border-white/5"
        : "bg-transparent"
    }`}
>
  <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-center relative">

    {/* 📱 MOBILE MENU TOGGLE */}
    <button
      onClick={() => setMenuOpen(!menuOpen)}
      className="md:hidden flex items-center gap-2 px-6 py-2 rounded-full
        border border-black/10 dark:border-white/10
        bg-white/80 dark:bg-zinc-900/80
        text-sm font-medium text-gray-800 dark:text-gray-100
        backdrop-blur transition hover:bg-white dark:hover:bg-zinc-800"
    >
      Menu
      <motion.span
        animate={{ rotate: menuOpen ? 180 : 0 }}
        transition={{ duration: 0.25 }}
        className="opacity-70"
      >
        ⌄
      </motion.span>
    </button>

    {/* 📱 RIGHT CONTROLS */}
    <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-5">

      <a
        href="/blogs"
        className="
          inline-flex items-center
          px-4 py-2 rounded-xl text-sm font-semibold
          border border-black/20 dark:border-white/20

          bg-black text-white
          dark:bg-white dark:text-black

          hover:opacity-90
          transition
        "
      >
        Blogs
      </a>

      {/* 🌗 THEME TOGGLE */}
      <button
        onClick={toggleTheme}
        className="w-10 h-10 rounded-xl flex items-center justify-center
          border border-black/10 dark:border-white/10
          bg-white/80 dark:bg-zinc-900/80
          text-gray-800 dark:text-gray-100
          backdrop-blur
          transition hover:bg-white dark:hover:bg-zinc-800"
      >
        <AnimatePresence mode="wait">
          {darkMode ? (
            <motion.div
              key="sun"
              initial={{ rotate: -90, scale: 0.5, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: 90, scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <Sun size={18} />
            </motion.div>
          ) : (
            <motion.div
              key="moon"
              initial={{ rotate: 90, scale: 0.5, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: -90, scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <Moon size={18} />
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </div>

    {/* 🖥️ DESKTOP NAV */}
    <nav className="hidden md:block">
      <ul
        className="flex items-center gap-2 px-2 py-1 rounded-full
          bg-white/80 dark:bg-zinc-900/80
          border border-black/10 dark:border-white/10
          backdrop-blur"
      >
        {navItems.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => scrollToSection(item.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition
                ${
                  active === item.id
                    ? "bg-black text-white dark:bg-white dark:text-black"
                    : "text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
                }`}
            >
              {item.name}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  </div>
</header>


      {/* ================= MOBILE FULLSCREEN MENU ================= */}
      <AnimatePresence>
  {menuOpen && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-40
        bg-white/90 dark:bg-zinc-950/90
        backdrop-blur-xl
        flex items-center justify-center"
    >
      <ul className="flex flex-col gap-8 text-center">
        {navItems.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => scrollToSection(item.id)}
              className={`text-2xl font-semibold transition
                ${
                  active === item.id
                    ? "text-black dark:text-white"
                    : "text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
                }`}
            >
              {item.name}
            </button>
          </li>
        ))}
      </ul>
    </motion.div>
  )}
</AnimatePresence>

    </>
  );
};

export default Navbar;
