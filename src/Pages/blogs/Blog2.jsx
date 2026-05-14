import React from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const Blog2 = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-50 min-h-screen">

      <Helmet>
        <title>What is MERN Stack | Complete Guide</title>

        <meta
          name="description"
          content="Learn what MERN stack means and how MongoDB, Express.js, React.js and Node.js work together to build modern full stack web applications."
        />

        <meta
          name="keywords"
          content="MERN stack tutorial, MongoDB Express React Node guide, what is MERN stack, full stack javascript"
        />

        <meta name="author" content="Zeyaul Haque" />

        <link
          rel="canonical"
          href="https://www.zeyaulhaque.in/blogs/mern-stack"
        />

        <meta property="og:type" content="article" />
        <meta property="og:title" content="Understanding the MERN Stack" />
        <meta
          property="og:description"
          content="Complete guide explaining MongoDB, Express, React and Node in modern full stack development."
        />
        <meta
          property="og:image"
          content="https://www.zeyaulhaque.in/mern.jpg"
        />
        <meta
          property="og:url"
          content="https://www.zeyaulhaque.in/blogs/mern-stack"
        />
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
            src="https://i.pinimg.com/1200x/b2/7a/e0/b27ae09634ece49118b68e4dd128a900.jpg"
            alt="MERN Stack"
            className="w-full rounded-2xl mb-8"
          />

          <h1 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
            Understanding the MERN Stack (Complete Guide)
          </h1>

          <p className="text-gray-700 text-lg mb-8 leading-relaxed">
            The MERN stack is one of the most popular technologies used to
            build modern web applications. It combines four powerful
            technologies — MongoDB, Express.js, React.js, and Node.js — to
            create full stack applications using JavaScript across the entire
            development process.
          </p>

          <Section
            title="1️⃣ What is the MERN Stack?"
            content={[
              "MERN stands for MongoDB, Express.js, React.js and Node.js.",
              "It is a full stack JavaScript solution used to build modern web applications.",
              "Developers can write both frontend and backend code using JavaScript.",
            ]}
          />

          <Section
            title="2️⃣ MongoDB – Database Layer"
            content={[
              "MongoDB is a NoSQL database used to store application data.",
              "It stores data in JSON-like documents which are easy to use with JavaScript.",
              "MongoDB is highly scalable and widely used in modern cloud applications.",
            ]}
          />

          <img
            src="https://i.pinimg.com/736x/39/29/81/39298130a307f337f2bc9fe2285d2950.jpg"
            alt="MongoDB"
            className="rounded-xl shadow-md my-8"
          />

          <Section
            title="3️⃣ Express.js – Backend Framework"
            content={[
              "Express.js is a lightweight Node.js framework used to build APIs.",
              "It handles routing, middleware, and server-side logic.",
              "Most MERN applications use Express to build REST APIs.",
            ]}
          />

          <CodeBlock
            text={`const express = require("express");
const app = express();

app.get("/api", (req,res)=>{
  res.send("API running");
});

app.listen(5000);`}
          />

          <Section
            title="4️⃣ React.js – Frontend Library"
            content={[
              "React.js is a JavaScript library used to build user interfaces.",
              "It uses reusable components to create dynamic applications.",
              "React makes it easy to build fast and interactive single page applications.",
            ]}
          />

          <img
            src="https://i.pinimg.com/736x/db/07/2e/db072e159e7097cce86de7071c50f99c.jpg"
            alt="React"
            className="rounded-xl shadow-md my-8"
          />

          <Section
            title="5️⃣ Node.js – Server Runtime"
            content={[
              "Node.js allows JavaScript to run on the server side.",
              "It is built on Chrome's V8 engine and supports asynchronous programming.",
              "Node powers the backend logic in MERN applications.",
            ]}
          />

          <img
            src="https://i.pinimg.com/1200x/25/f0/f5/25f0f58d8f643a80335e5360f5ae3fc9.jpg"
            alt="Node JS"
            className="rounded-xl shadow-md my-8"
          />

          <Section
            title="6️⃣ How MERN Works Together"
            content={[
              "React builds the frontend interface.",
              "Node.js and Express handle backend APIs.",
              "MongoDB stores the application data.",
              "The frontend communicates with backend APIs using HTTP requests.",
            ]}
          />

          <CodeBlock text={`React → Express API → Node Server → MongoDB`} />

          <Section
            title="7️⃣ Advantages of MERN Stack"
            content={[
              "Single programming language across the stack",
              "Highly scalable architecture",
              "Large developer community",
              "Reusable UI components",
              "Fast development for startups and SaaS apps",
            ]}
          />

          <h2 className="text-2xl font-semibold mt-10 mb-4">
            🚀 Final Thoughts
          </h2>

          <p className="text-gray-700 mb-16 leading-relaxed">
            The MERN stack has become a standard choice for developers who
            want to build scalable full stack applications using JavaScript.
            With its powerful ecosystem and flexibility, it is widely used in
            startups, SaaS platforms, and enterprise applications.
          </p>
        </div>

        {/* ================= RIGHT SIDEBAR ================= */}
        <div className="w-full lg:w-[30%] bg-white border-t lg:border-t-0 p-8 lg:sticky lg:top-0 lg:h-screen flex flex-col">

          <div className="flex flex-col items-center text-center">
            <img
              src="/profile.jpeg"
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover shadow-md mb-4"
            />

            <h3 className="text-lg font-bold">Zeyaul Haque</h3>

            <p className="text-gray-500 text-sm mt-2 leading-relaxed">
              MERN Stack Developer passionate about scalable web applications.
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

          <div className="my-8 border-t"></div>

          <div>
            <h4 className="text-lg font-semibold mb-3">Blog Summary</h4>

            <p className="text-gray-600 text-sm leading-relaxed">
              This blog explains the MERN stack and how MongoDB, Express,
              React and Node work together to build full stack JavaScript
              applications.
            </p>
          </div>

          <div className="mt-8 p-4 bg-gray-100 rounded-xl">
            <h4 className="font-semibold mb-2">Tech Stack</h4>
            <p className="text-sm text-gray-600">
              MongoDB, Express.js, React.js, Node.js
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog2;


/* ================= Reusable Components ================= */

const Section = ({ title, content }) => (
  <>
    <h2 className="text-2xl font-semibold mt-10 mb-4">{title}</h2>

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
