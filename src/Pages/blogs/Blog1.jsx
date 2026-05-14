import React from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";


const Blog1 = () => {
  const navigate = useNavigate();

  return (

    
    <div className="bg-gray-50 min-h-screen">

        <Helmet>
  {/* Basic SEO */}
  <title>Redis Setup & Caching in MERN Stack | Zeyaul Haque</title>

  <meta
    name="description"
    content="Complete guide on using Redis with Docker in Node.js. Learn Redis setup, caching strategies, RedisInsight usage, and production best practices in MERN stack."
  />

  <meta
    name="keywords"
    content="Redis Docker Node.js tutorial, Redis caching MERN stack, ioredis setup guide, RedisInsight usage"
  />

  <meta name="author" content="Zeyaul Haque" />

  <link
    rel="canonical"
    href="https://www.zeyaulhaque.in/blogs/1"
  />

  {/* Open Graph (LinkedIn Compatible) */}
  <meta property="og:type" content="article" />
  <meta property="og:title" content="Redis Setup & Caching in MERN Stack" />
  <meta
    property="og:description"
    content="Learn how to use Redis with Docker and Node.js in production-level MERN applications."
  />
  <meta
    property="og:image"
    content="https://www.zeyaulhaque.in/redis.jpg"
  />
  <meta
    property="og:url"
    content="https://www.zeyaulhaque.in/blogs/1"
  />
  <meta property="og:site_name" content="Zeyaul Haque Portfolio" />

  {/* JSON-LD Structured Data */}
  <script type="application/ld+json">
    {`
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "Redis Setup & Caching in MERN Stack",
      "description": "Complete guide on using Redis with Docker in Node.js for production-level MERN applications.",
      "image": "https://www.zeyaulhaque.in/redis.jpg",
      "author": {
        "@type": "Person",
        "name": "Zeyaul Haque",
        "url": "https://www.zeyaulhaque.in/",
        "sameAs": [
          "https://www.linkedin.com/in/zeyaul-haque-6929b828a/,
          "https://github.com/zeyaul98"
        ]
      },
      "publisher": {
        "@type": "Organization",
        "name": "Zeyaul Haque",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.zeyaulhaque.in/profile.jpeg"
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.zeyaulhaque.in/blogs/redis-setup-caching"
      },
      "datePublished": "2026-02-11",
      "dateModified": "2026-02-11"
    }
    `}
  </script>
</Helmet>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row">

        {/* ================= LEFT BLOG CONTENT ================= */}
        <div className="w-full lg:w-[70%] px-6 sm:px-10 py-10">

          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="mb-6 bg-white shadow-md px-4 py-2 rounded-lg hover:bg-gray-100 transition font-medium"
          >
            ← Back
          </button>

          {/* Hero Image */}
          <img
            src="/redis.jpg"
            alt="Redis Node"
            className="w-full rounded-2xl mb-8"
          />

          <h1 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
            Using Redis with Docker in Node.js (Complete Practical Guide)
          </h1>

          <p className="text-gray-700 text-lg mb-8 leading-relaxed">
            In this guide, we will deeply understand how to use Redis inside Docker
            and connect it with a Node.js application using ioredis.
            This is a production-level workflow every backend developer should know.
          </p>

          {/* Sections */}
          <Section
            title="1️⃣ Why Use Redis with Docker?"
            content={[
              "Redis is an in-memory data store used for caching, pub/sub messaging, session storage and job queues.",
              "Docker removes dependency issues by containerizing Redis.",
            ]}
          />

          <Section
            title="2️⃣ Running Redis using Docker"
            content={[
              "Run Redis container using the official Docker image.",
            ]}
          />

          <CodeBlock text="docker run -d --name redis -p 6379:6379 redis" />

          <img
            src="/docker.png"
            alt="Docker Containers"
            className="rounded-xl shadow-md my-8"
          />

          <Section
            title="3️⃣ Connecting Redis to Node.js"
            content={[
              "Install ioredis package and connect to the running Redis container.",
            ]}
          />

          <CodeBlock text="npm install ioredis" />

          <img
            src="/radis1.png"
            alt="Redis Code"
            className="rounded-xl shadow-md my-8"
          />

          <Section
            title="4️⃣ Inspecting Data using RedisInsight"
            content={[
              "RedisInsight allows you to visualize keys and confirm data insertion.",
            ]}
          />

          <img
            src="/dashboard.png"
            alt="RedisInsight"
            className="rounded-xl shadow-md my-8"
          />

          <Section
            title="5️⃣ Real World Use Cases"
            content={[
              "Caching API responses",
              "Rate limiting",
              "Background jobs",
              "Session storage",
              "Pub/Sub messaging",
            ]}
          />

          <Section
            title="6️⃣ Production Best Practices"
            content={[
              "Use environment variables",
              "Enable persistence",
              "Secure Redis with password",
              "Monitor memory usage",
            ]}
          />

          <h2 className="text-2xl font-semibold mt-10 mb-4">
            🚀 Final Thoughts
          </h2>

          <p className="text-gray-700 mb-16 leading-relaxed">
            Combining Redis, Docker, and Node.js ensures a scalable,
            high-performance backend architecture suitable for production systems.
          </p>
        </div>

        {/* ================= RIGHT SIDEBAR ================= */}
        <div className="w-full lg:w-[30%] bg-white border-t lg:border-t-0  p-8 lg:sticky lg:top-0 lg:h-screen flex flex-col">

          {/* Profile */}
          <div className="flex flex-col items-center text-center">
            <img
              src="/profile.jpeg"
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover shadow-md mb-4"
            />

            <h3 className="text-lg font-bold">Zeyaul Haque</h3>

            <p className="text-gray-500 text-sm mt-2 leading-relaxed">
              MERN Stack Developer passionate about scalable backend systems.
            </p>

            <a
              href="https://www.zeyaulhaque.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-lg font-medium hover:bg-blue-100 transition"
            >
              🌐 Visit Portfolio
            </a>
          </div>

          {/* Divider */}
          <div className="my-8 border-t"></div>

          {/* Blog Summary */}
          <div>
            <h4 className="text-lg font-semibold mb-3">
              Blog Summary
            </h4>

            <p className="text-gray-600 text-sm leading-relaxed">
              This blog explains how to run Redis using Docker, connect it with
              Node.js, inspect data using RedisInsight, and implement
              real-world caching strategies.
            </p>
          </div>

          {/* Tech Stack */}
          <div className="mt-8 p-4 bg-gray-100 rounded-xl">
            <h4 className="font-semibold mb-2">Tech Stack</h4>
            <p className="text-sm text-gray-600">
              Node.js, Docker, Redis, ioredis, RedisInsight
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog1;


/* ================= Reusable Components ================= */

const Section = ({ title, content }) => (
  <>
    <h2 className="text-2xl font-semibold mt-10 mb-4">
      {title}
    </h2>
    {content.map((text, index) => (
      <p key={index} className="text-gray-700 mb-6 leading-relaxed">
        {text}
      </p>
    ))}
  </>
);

const CodeBlock = ({ text }) => (
  <div className="bg-gray-900 text-green-400 p-4 rounded-lg my-6 text-sm overflow-x-auto">
    {text}
  </div>
);
