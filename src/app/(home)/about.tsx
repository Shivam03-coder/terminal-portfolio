import { ArrowRight, User } from "lucide-react";
import React from "react";

const About = () => {
  return (
    <div className="rounded-lg border border-green-500 bg-transparent p-4 text-gray-300">
      <div className="mb-3 flex items-center gap-2 hover:translate-x-2 transition-all duration-300">
        <User className="text-blue-400" size={20} />
        <span className="text-lg font-bold text-blue-400">About Me</span>
      </div>

      <ul className="space-y-2 pl-4">
        <li className="flex items-center gap-2 hover:translate-x-2 transition-all duration-300 text-pink-400">
          <ArrowRight className="text-white" size={16} />
          Hi! I'm <span className="font-semibold text-white">Shivam Anand</span>
          , a passionate software developer and SaaS enthusiast based in India.
        </li>
        <li className="flex items-center gap-2 hover:translate-x-2 transition-all duration-300 text-yellow-400">
          <ArrowRight className="text-white" size={16} />
          Specializing in full-stack development, I build highly scalable,
          high-performance applications that drive business growth.
        </li>
        <li className="flex items-center gap-2 hover:translate-x-2 transition-all duration-300 text-green-400">
          <ArrowRight className="text-white" size={16} />
          My tech stack includes React Js , Next.js, TypeScript, Redux ,
          Node.js, Prisma, PostgreSQL, MongoDB, and AI integration.
        </li>
        <li className="flex items-center gap-2 hover:translate-x-2 transition-all duration-300 text-blue-400">
          <ArrowRight className="text-white" size={16} />
          Expertise in system design, database management, and cloud deployment
          to ensure robust and scalable applications.
        </li>
        <li className="flex items-center gap-2 hover:translate-x-2 transition-all duration-300 text-purple-400">
          <ArrowRight className="text-white" size={16} />
          Experienced in freelance SaaS development, building AI-powered
          solutions, CRM tools, legal management platforms, and more.
        </li>
        <li className="flex items-center gap-2 hover:translate-x-2 transition-all duration-300 text-indigo-400">
          <ArrowRight className="text-white" size={16} />
          Focused on automation, optimization, and user-centric design to create
          seamless digital experiences.
        </li>
        <li className="flex items-center gap-2 hover:translate-x-2 transition-all duration-300 text-orange-400">
          <ArrowRight className="text-white" size={16} />
          Additional expertise in Smart contract development, mobile app
          development (React Native + Expo), and AI-driven analytics**.
        </li>
        <li className="flex items-center gap-2 hover:translate-x-2 transition-all duration-300 text-red-400">
          <ArrowRight className="text-white" size={16} />
          Projects often integrate Redis, WebSockets, server actions, and
          chatbot AI for real-time interactions.
        </li>
        <li className="flex items-center gap-2 hover:translate-x-2 transition-all duration-300 text-teal-400">
          <ArrowRight className="text-white" size={16} />
          Currently interning as a Backend Developer at Plixipy, contributing to
          cutting-edge projects.
        </li>
        <li className="flex items-center gap-2 hover:translate-x-2 transition-all duration-300 text-white">
          <ArrowRight className="text-white" size={16} />
          Always eager to learn, innovate, and push technological boundaries to
          build the next big thing. 🚀
        </li>
      </ul>
    </div>
  );
};

export default About;
