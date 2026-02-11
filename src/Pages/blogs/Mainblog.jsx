import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import img from "../../assets/profile.jpeg";

const Mainblog = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const blogs = [
    {
      id: 1,
      title: "Redis Setup & Caching in MERN Stack",
      description:
        "Learn how to install Redis, integrate it with Express.js and improve API performance in production-level applications.",
      image:
        "https://i.pinimg.com/1200x/a7/2d/8d/a72d8d789c59e4b0cdb9a515a54730b7.jpg",
    },
    
  ];

  return (
    <div className="bg-gray-100 min-h-screen">

      <div className="max-w-7xl mx-auto flex relative">

        {/* ================= MOBILE HEADER ================= */}
        <div className="lg:hidden fixed top-0 left-0 right-0 bg-white shadow-sm flex items-center justify-between px-4 py-3 z-40">
          <button onClick={() => setOpen(true)} className="text-2xl">
            ☰
          </button>
          <h2 className="font-semibold">My Blogs</h2>
          <div />
        </div>

        {/* ================= SIDEBAR ================= */}
        <div
          className={`fixed lg:sticky top-0 left-0 h-screen w-72 bg-white shadow-lg lg:shadow-none p-8 transform transition-transform duration-300 z-50
          ${open ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
        >
          {/* Close button mobile */}
          <button
            onClick={() => setOpen(false)}
            className="lg:hidden absolute top-4 right-4 text-xl"
          >
            ✕
          </button>

          <div className="flex flex-col items-center mt-8 lg:mt-0">
            <img
              src={img}
              alt="profile"
              className="w-24 h-24 rounded-full object-cover shadow-md"
            />

            <h2 className="text-xl font-bold mt-4">
              Zeyaul Haque
            </h2>

            <p className="text-gray-500 text-center text-sm mt-2 leading-relaxed">
              MERN Stack Developer passionate about building scalable,
              high-performance web applications.
            </p>
          </div>

          {/* Navigation */}
          <div className="mt-10 space-y-3">
            <button
              onClick={() => {
                navigate("/");
                setOpen(false);
              }}
              className="w-full py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition font-medium"
            >
              Home
            </button>

            <button className="w-full py-2 rounded-lg bg-blue-50 text-blue-600 font-medium">
              All Blogs
            </button>

            <button
              onClick={() => {
                navigate("/projects");
                setOpen(false);
              }}
              className="w-full py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition font-medium"
            >
              Projects
            </button>

            <button className="w-full py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition font-medium">
              Get in Touch
            </button>
          </div>
        </div>

        {/* ================= OVERLAY (Mobile) ================= */}
        {open && (
          <div
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black/40 lg:hidden z-40"
          />
        )}

        {/* ================= MAIN CONTENT ================= */}
        <div className="flex-1 pt-20 lg:pt-12 px-6 sm:px-10 pb-12">

          <h1 className="text-3xl font-bold mb-3">
            My Blogs
          </h1>

          <p className="text-gray-600 mb-10 max-w-2xl">
            Insights, tutorials and real-world development experiences.
            Explore backend scaling, Redis caching, Docker deployments,
            and advanced frontend architecture.
          </p>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                onClick={() => navigate(`/blogs/${blog.id}`)}
                className="cursor-pointer bg-white rounded-2xl shadow-sm hover:shadow-xl transition duration-300 overflow-hidden group"
              >
                <div className="overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-52 object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>

                <div className="p-6">
                  <h2 className="text-lg font-bold mb-2 group-hover:text-blue-600 transition">
                    {blog.title}
                  </h2>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {blog.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
};

export default Mainblog;
