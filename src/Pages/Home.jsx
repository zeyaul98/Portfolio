import { motion } from "framer-motion";
import profile from "../assets/profile.jpeg";
import { Briefcase, Calendar } from "lucide-react";
import {  AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import cyberimg from "../assets/cyberhub.png";
import {
  ArrowRight,
  Download,
  Linkedin,
  Github,
  Instagram,
  Twitter,
  ExternalLink
} from "lucide-react";




const Home = () => {

const techs = [
  { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "Vue", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
];


const experiences = [
  {
    company: "Qmize, Gaya, India",
    role: "MERN Stack Developer (Intern)",
    date: "45 days, Jan 2026",
    description:
      "At Digintra.com, I created multi-country Bulk SMS pages and developed a custom admin panel (frontend & backend) for SEO meta data management.",
    skills: ["React", "JavaScript", "HTML", "CSS", "Motion Design", "Tailwind CSS", "MongoDB", "Node.js", "Express", "MERN Stack", "RESTful API", "PHP", "MySQL","Redux"],
  },
  {
    company: "Wilson Wings, Bangalore, India",
    role: "Full Stack Developer (Intern)",
    date: "45 days, June 2025",
    description:
      "Worked as a Full Stack developer at Dragon Sino Group. Created fully functional MERN Stack Web Applications with responsive behavior, smooth touch UI, and API Integration.",
    skills: [
      "TypeScript",
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "API Integration",
      "MERN Stack",
      "RESTful API",
      "PHP",
      "MySQL",
    ],
  },
];

const projects = [
  {
    seen: "Calm Llama - AI Chatbot",
    title: "CyberHub - Onine Cafe",
    description:
      "A modern web platform that enables users to discover and book premium wellness experiences such as saunas, yoga, massages, and float tanks. Features include real-time availability, secure payments, and instant booking confirmations.",
    image:{cyberimg},
    tags: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "Supabase",
      "AI",
    ],
    link: "https://cyber-hub-gaya.vercel.app/",
  },
  {
    title: "Mini Otio - AI Research Assistant",
    description:
      "An AI-powered research assistant combining real-time web search with intelligent response generation. Supports step-by-step answers, bullet points, and ELI5 explanations with real-time streaming.",
    image:
      "https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?q=80&w=1200",
    tags: [
      "AI Agent",
      "TypeScript",
      "Shadcn UI",
      "React.js",
      "Tailwind CSS",
      "Zustand",
      "OpenRouter API",
    ],
    link: "#",
  },
];

const testimonials = [
  {
  text: "I had a very smooth and fast experience with the Cyber Hub website. Services like Aadhaar updates, PAN corrections, and online government forms were completed without any hassle. The staff is professional and provides clear, step-by-step guidance throughout the process.",
  name: "Aman",
  role: "CyberHub Business Owner",
  location: "Gaya, Bihar",
  img: "https://media.istockphoto.com/id/2160830783/photo/positive-handsome-young-indian-man-head-shot-front-portrait.jpg?s=612x612&w=0&k=20&c=q8jNuQWO35W2-7luXuLdWGP2KKwKpdEUiVICJDjjku8=",
},
  {
  text: `I have worked closely with him and can confidently say that he is a dedicated and skilled developer. He has a strong understanding of React and modern web development practices, approaches problems logically, and is always eager to learn and improve. He takes feedback positively and consistently delivers quality work on time.`,
  name: "Hemant Kumar",
  role: "Senior Software Developer at Qmize",
  location: "Gaya, Bihar",
  img: "https://images.picxy.com/cache/2019/7/25/4198814b08704ac16236022005c9288a.jpg",
},
{
  text: `I had the opportunity to manage him closely and was consistently impressed by his professionalism and technical skills. He takes ownership of his work, communicates clearly, and delivers high-quality solutions within deadlines. His positive attitude and ability to adapt quickly make him a dependable and valuable member of any team.`,
  name: "Shafdar Khan",
  role: "Project Manager , Qmize",
  location: "Gaya, India",
  img: "https://static.vecteezy.com/system/resources/thumbnails/044/453/319/small/professional-indian-businessman-in-a-modern-office-working-intently-on-a-laptop-portraying-confidence-and-dedication-photo.jpg",
}


];

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "I offer frontend and backend development services including building responsive websites, REST APIs, full-stack MERN applications, bug fixing, and performance optimization.",
  },
  {
    question: "How much experience do you have?",
    answer:
      "I am a fresher MERN Stack Developer with strong hands-on experience through personal projects, internships, and real-world practice applications.",
  },
  {
    question: "Do you work remotely?",
    answer:
      "Yes, I am comfortable working remotely and collaborating with teams using tools like Git, GitHub, Slack, and Zoom.",
  },
  {
    question: "What technologies do you specialize in?",
    answer:
      "I specialize in MongoDB, Express.js, React.js, Node.js, along with Tailwind CSS, Git, and basic DevOps workflows.",
  },
  {
    question: "Can you help with existing projects?",
    answer:
      "Yes, I can help improve, debug, or add new features to existing MERN stack projects and codebases.",
  },
];
 const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((index - 1 + testimonials.length) % testimonials.length);
  const next = () => setIndex((index + 1) % testimonials.length);



  // for contact section
   const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const phoneNumber = "919801140323"; 
    const text = `Hello Zeyaul 👋%0A
Name: ${name}%0A
Email: ${email}%0A
Message: ${message}`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURI(text)}`;
    window.open(whatsappURL, "_blank");

    setName("");
    setEmail("");
    setMessage("");
  };




  return (
    <>

    <Helmet>
        <title>Zeyaul Haque | MERN Stack Developer</title>
        <meta
          name="description"
          content="Fresher MERN Stack Developer skilled in MongoDB, Express, React, and Node.js."
        />
        <meta
          name="keywords"
          content="MERN Developer, React Developer, Node Developer"
        />
        <link
          rel="canonical"
          href="https://zeyaulhaque.in/"
        />
         <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Zeyaul Haque",
            "jobTitle": "MERN Stack Developer",
            "url": "https://zeyaulhaque.in",
            "sameAs": [
              "https://github.com/zeyaul98",
              "https://www.linkedin.com/in/zeyaul-haque-6929b828a/"
            ]
          })}
        </script>
      </Helmet>


    {/* Home section */}
    <section
  id="home"
  className="min-h-screen flex items-center justify-center pt-32 px-4
    bg-gradient-to-b from-white to-gray-50
    dark:from-zinc-950 dark:to-zinc-950"
>
  <div className="max-w-4xl w-full text-center">

    {/* Profile Image */}
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="flex justify-center mb-6"
    >
      <img
        src={profile}
        alt="Profile"
        className="w-32 h-32 rounded-full object-cover
          border border-black/10 dark:border-white/10
          shadow-lg dark:shadow-black/40"
      />
    </motion.div>

    {/* Availability Badge */}
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="flex justify-center mb-4"
    >
      <span
        className="flex items-center gap-2 px-4 py-1.5 rounded-full text-sm
          bg-white/80 dark:bg-zinc-900/80
          border border-black/10 dark:border-white/10
          text-gray-700 dark:text-gray-200
          backdrop-blur"
      >
        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
        Available for work!
      </span>
    </motion.div>

    {/* Location */}
    <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
      Currently Intern in Qmize — open to relocate
    </p>

    {/* Heading */}
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="text-4xl md:text-5xl font-extrabold leading-tight mb-6
        text-gray-900 dark:text-white"
    >
      Hi I'm{" "}
      <span className="text-pink-600 dark:text-pink-500">
        Zeyaul Haque
      </span>{" "}
      – MERN Stack Developer with Full-Stack Expertise.
    </motion.h1>

    {/* Description */}
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="max-w-2xl mx-auto mb-10
        text-gray-600 dark:text-gray-400 leading-relaxed"
    >
      I build fast, accessible, and SEO-friendly web applications using
      React.js, Tailwind CSS, and Framer Motion. With 1+ years of
      experience and strong full-stack skills in JavaScript,
      I focus on clean UI/UX and scalable integrations.
    </motion.p>

    {/* Buttons */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="flex flex-wrap justify-center gap-4 mb-10"
    >
      <a
        href="#contact"
        className="flex items-center gap-2 px-6 py-3 rounded-full
          bg-black text-white
          dark:bg-white dark:text-black
          hover:opacity-90 transition"
      >
        Get in touch <ArrowRight size={16} />
      </a>

      <button
        className="flex items-center gap-2 px-6 py-3 rounded-full
          bg-gray-100 dark:bg-zinc-900
          border border-black/10 dark:border-white/10
          text-gray-800 dark:text-gray-200
          hover:bg-gray-200 dark:hover:bg-zinc-800 transition"
      >
       <Link to="/projects" className="flex items-center gap-2">View Projects <ArrowRight  size={16} /> </Link>
      </button>

      <button
        className="flex items-center gap-2 px-6 py-3 rounded-full
          border border-black/10 dark:border-white/10
          text-gray-800 dark:text-gray-200
          hover:bg-gray-100 dark:hover:bg-zinc-900 transition"
      >
        Download CV <Download size={16} />
      </button>
    </motion.div>

    {/* Social Icons */}
    <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.6 }}
  className="flex justify-center gap-4"
>
  {[
    { Icon: Linkedin, url: "https://www.linkedin.com/in/zeyaul-haque-6929b828a/" },
    { Icon: Github, url: "https://github.com/zeyaul98" },
    { Icon: Instagram, url: "https://instagram.com/yourusername" },
    { Icon: Twitter, url: "https://twitter.com/yourusername" },
  ].map(({ Icon, url }, i) => (
    <a
      key={i}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="
        w-11 h-11 flex items-center justify-center rounded-full
        border border-black/10 dark:border-white/10
        text-gray-600 dark:text-gray-300
        hover:bg-gray-100 dark:hover:bg-zinc-900
        transition
      "
    >
      <Icon size={18} />
    </a>
  ))}
</motion.div>


  </div>
</section>


    {/* About section */}
     <section
  id="about"
  className="
    relative py-32 px-4 overflow-hidden
    bg-gradient-to-b 
    from-gray-50 to-white
    dark:from-zinc-950 dark:to-zinc-950
    transition-colors
  "
>
      {/* ================= TEXT CONTENT ================= */}
      <div className="max-w-4xl mx-auto text-center mb-20">
        <h2 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">
          About Me
        </h2>

        <div className="space-y-6 text-gray-600 dark:text-gray-400 leading-relaxed">
          <p>
            My name is Zeyaul Haque, and I am a Frontend Engineer
            of real-world experience designing fast, usable, and SEO-friendly
            web applications. My specialty is crafting smooth-looking UIs with
            React.js, Tailwind CSS, UI Libraries and bringing things to
            life with Framer Motion.
          </p>

          <p>
            Alongside my frontend experience, I possess good full-stack skills
            in JavaScript with experience in Node.js, Express,
            and databases like MongoDB and MySQL. This allows me to manage
            projects end-to-end, from UI design to scalable backends.
          </p>

          <p>
            I’ve built software for product companies, clinics, and startups,
            delivering performance-focused and scalable solutions.
          </p>

          <p>
            Outside of work, I enjoy cricket and a good cup of tea—now mostly
            coffee. I’m always excited about learning, experimenting, and
            building impactful products with strong teams.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto overflow-hidden py-10 
  bg-white dark:bg-zinc-950 transition-colors"
>
  <motion.div
    className="flex gap-14 w-max"
    animate={{ x: ["0%", "-50%"] }}
    transition={{
      repeat: Infinity,
      duration: 20,
      ease: "linear",
    }}
    whileHover={{ animationPlayState: "paused" }}
  >
    {[...techs, ...techs].map((tech, i) => (
      <div
        key={i}
        className="group relative flex items-center justify-center w-16 h-16"
      >
        {/* Icon */}
        <img
          src={tech.icon}
          alt={tech.name}
          className="
            w-full h-full object-contain
            grayscale-100 dark:invert
            group-hover:grayscale-0 dark:group-hover:invert-0
            transition duration-300
          "
        />

        {/* Badge */}
        <span
          className="
            absolute -top-10 scale-0 group-hover:scale-100 transition
            bg-black text-white 
            dark:bg-white dark:text-black
            text-xs px-3 py-1 rounded-full shadow-lg
          "
        >
          {tech.name}
        </span>
      </div>
    ))}
  </motion.div>
</div>

     
    </section>


    {/* experience section */}
     <section
  id="experience"
  className="py-24 bg-white dark:bg-zinc-950 transition-colors"
>
  <div className="max-w-5xl mx-auto px-6">

    {/* Heading */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-20"
    >
      <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
        My Experience
      </h2>
      <p className="text-gray-500 dark:text-gray-400 mt-3">
        Professional experience that I have accumulated over several years.
      </p>
    </motion.div>

    {/* Timeline Wrapper */}
    <div className="relative">

      {/* Vertical Line */}
      <div className="absolute left-8 top-2 h-full w-px bg-gray-200 dark:bg-zinc-700" />

      <div className="space-y-20">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="relative pl-20"
          >
            {/* Dot */}
            <span className="absolute left-8 top-2 -translate-x-1/2 w-4 h-4 rounded-full 
              bg-white dark:bg-zinc-950 
              border-2 border-black dark:border-white" 
            />

            {/* Content */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full border 
                  border-gray-300 dark:border-zinc-700 
                  flex items-center justify-center
                  text-gray-900 dark:text-white"
                >
                  <Briefcase size={18} />
                </div>
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                  {exp.company}
                </h3>
              </div>

              <h4 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                {exp.role}
              </h4>

              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
                <Calendar size={16} />
                {exp.date}
              </div>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-sm border rounded-full
                      border-gray-300 dark:border-zinc-700
                      text-gray-700 dark:text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
    </section>


    {/* projects section */}
    <section
      id="projects"
      className="py-24 bg-white dark:bg-zinc-950 transition-colors"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            My Projects
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-3">
            Projects I worked on. Each of them containing its own case study.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 max-w-5xl mx-auto gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="rounded-2xl border border-gray-200 dark:border-zinc-600 
              bg-white dark:bg-zinc-800 overflow-hidden"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs rounded-full border
                      border-gray-300 dark:border-zinc-600
                      text-gray-700 dark:text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Preview Button */}
                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 text-sm font-medium
                  text-gray-900 dark:text-white
                  border px-4 py-2 rounded-full
                  border-gray-300 dark:border-zinc-700
                  hover:bg-gray-100 dark:hover:bg-zinc-800 transition"
                >
                  <ExternalLink size={16} />
                  Preview
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <Link
          to="/projects"
          className="
            inline-flex items-center gap-2
            mt-6 px-4 py-2 ml-10
            text-sm font-medium
            rounded-full
            border border-gray-300 dark:border-white/20
            text-gray-800 dark:text-gray-200
            hover:bg-gray-100 dark:hover:bg-zinc-900
            hover:border-gray-400 dark:hover:border-white/40
            transition-all duration-200
          "
        >
          View All Projects
          <ArrowRight size={16} />
        </Link>
            </div>
          </section>

    {/* Testimonials Section */}
     <section
      id="testimonials"
      className="py-32 px-4
        bg-gray-50 text-gray-900
        dark:bg-zinc-950 dark:text-white
        transition-colors duration-300"
    >
      {/* Heading */}
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold mb-3">
          Testimonials
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          What clients and colleagues say about my work
        </p>
      </div>

      {/* Card */}
      <div className="max-w-5xl mx-auto relative">
       <AnimatePresence mode="wait">
  <motion.div
    key={index}
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -30 }}
    transition={{ duration: 0.45 }}
    className="
      relative rounded-2xl p-10 text-center
      transition-colors duration-300

      /* LIGHT MODE */
      bg-white
      border border-black/10
      shadow-lg

      /* DARK MODE */
      dark:bg-zinc-950
      dark:border-white/10
      dark:shadow-[0_0_0_1px_rgba(255,255,255,0.05)]
    "
  >
    {/* ⭐ Stars */}
    <div className="flex justify-center mb-6">
      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          className="text-yellow-400 text-xl"
        >
          ★
        </span>
      ))}
    </div>

    {/* 💬 Quote */}
    <p
      className="
        text-lg leading-relaxed
        max-w-3xl mx-auto mb-10

        text-gray-700
        dark:text-gray-200
      "
    >
      “{testimonials[index].text}”
    </p>

    {/* 👤 Profile */}
    <div className="flex flex-col items-center gap-3">
      <img
        src={testimonials[index].img}
        alt={testimonials[index].name}
        className="
          w-16 h-16 rounded-full
          border border-black/10
          dark:border-white/20
        "
      />

      <h4 className="font-semibold text-gray-900 dark:text-white">
        {testimonials[index].name}
      </h4>

      <p className="text-sm text-gray-600 dark:text-gray-400">
        {testimonials[index].role}
      </p>

      <p className="text-xs text-gray-500 dark:text-gray-500">
        {testimonials[index].location}
      </p>
    </div>

    {/* ⬅️➡️ Arrows */}
    <button
      onClick={prev}
      className="
        absolute left-6 top-1/2 -translate-y-1/2
        transition

        text-gray-500 hover:text-black
        dark:text-gray-400 dark:hover:text-white
      "
    >
      <ChevronLeft size={28} />
    </button>

    <button
      onClick={next}
      className="
        absolute right-6 top-1/2 -translate-y-1/2
        transition

        text-gray-500 hover:text-black
        dark:text-gray-400 dark:hover:text-white
      "
    >
      <ChevronRight size={28} />
    </button>
  </motion.div>
</AnimatePresence>


        {/* Dots */}
        <div className="flex justify-center mt-8 gap-3">
          {testimonials.map((_, i) => (
            <span
              key={i}
              className={`w-2.5 h-2.5 rounded-full transition
                ${
                  i === index
                    ? "bg-black dark:bg-white"
                    : "bg-black/30 dark:bg-white/30"
                }
              `}
            />
          ))}
        </div>
      </div>
    </section>

      {/* FAQ Section */}
      <section
      id="testimonials"
      className="
        py-28 px-4
        bg-white text-gray-900
        dark:bg-zinc-950 dark:text-white
        transition-colors duration-300
      "
    >
      {/* Heading */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Get answers to common questions about my services and expertise
        </p>
      </div>

      {/* FAQ List */}
      <div className="max-w-3xl mx-auto space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="
              border-b border-black/10
              dark:border-white/10
            "
          >
            <button
              onClick={() => toggle(index)}
              className="
                w-full flex justify-between items-center
                py-5 text-left font-medium
                focus:outline-none
              "
            >
              <span>{faq.question}</span>

              <ChevronDown
                className={`transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Answer */}
            <div
              className={`grid transition-all duration-300 ease-in-out ${
                openIndex === index
                  ? "grid-rows-[1fr] opacity-100 pb-5"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden text-gray-600 dark:text-gray-400">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>


    {/* contact section */}
    <section
      id="contact"
      className="
        py-28 px-4
        bg-white text-gray-900
        dark:bg-zinc-950 dark:text-white
        transition-colors duration-300
      "
    >
      {/* Heading */}
      <div className="max-w-2xl mx-auto text-center mb-14">
        <h2 className="text-4xl font-bold mb-4">
          Get In Touch
        </h2>

        <p className="text-gray-600 dark:text-gray-400">
          Please contact me directly at{" "}
          <a
            href="mailto:zeyaul445@gmail.com"
            className="underline underline-offset-4 hover:text-black dark:hover:text-white"
          >
            zeyaul445@gmail.com
          </a>{" "}
          or through this form.
        </p>
      </div>

      {/* Form */}
      <form
        className="max-w-2xl mx-auto space-y-6"
        onSubmit={handleSubmit}
      >
        {/* Name */}
        <div>
          <label className="block mb-2 font-medium">
            Name
          </label>
          <input
            type="text"
            placeholder="Your Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="
              w-full rounded-lg px-4 py-3
              border border-black/10
              bg-white text-gray-900
              focus:outline-none focus:ring-2 focus:ring-black/10
              dark:bg-black dark:border-white/15
              dark:text-white dark:focus:ring-white/20
            "
          />
        </div>

        {/* Email */}
        <div>
          <label className="block mb-2 font-medium">
            Whatsapp Number
          </label>
          <input
            type="email"
            placeholder="hello@gmail.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="
              w-full rounded-lg px-4 py-3
              border border-black/10
              bg-white text-gray-900
              focus:outline-none focus:ring-2 focus:ring-black/10
              dark:bg-black dark:border-white/15
              dark:text-white dark:focus:ring-white/20
            "
          />
        </div>

        {/* Message */}
        <div>
          <label className="block mb-2 font-medium">
            Message
          </label>
          <textarea
            rows="6"
            placeholder="Hello! What's up?"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="
              w-full rounded-lg px-4 py-3
              border border-black/10
              bg-white text-gray-900 resize-none
              focus:outline-none focus:ring-2 focus:ring-black/10
              dark:bg-black dark:border-white/15
              dark:text-white dark:focus:ring-white/20
            "
          />
        </div>

        {/* Submit */}
        <div className="flex justify-center pt-6">
          <button
            type="submit"
            className="
              inline-flex items-center gap-2
              px-8 py-3 rounded-full
              bg-black text-white font-medium
              hover:bg-black/90 transition
              dark:bg-white dark:text-black dark:hover:bg-white/90
            "
          >
            Send on WhatsApp
            <span className="text-lg">→</span>
          </button>
        </div>
      </form>

      {/* Footer */}
      <p className="mt-20 text-center text-sm text-gray-500">
        © 2026 Zeyaul Haque. All rights reserved.
      </p>
    </section>



        
    </>
  )
}

export default Home
