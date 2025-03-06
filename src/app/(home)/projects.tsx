import { Briefcase } from "lucide-react";

const Projects = () => {
  return (
    <div className="text-gray-300">
      <div className="mb-4 flex items-center gap-2">
        <Briefcase className="text-orange-400" size={20} />
        <span className="text-lg font-bold text-orange-400">Projects</span>
      </div>
      <div className="space-y-4">
        {/* KISSAN-MITRA */}
        <div>
          <p className="text-lg font-semibold text-yellow-400">
            KISSAN-MITRA |{" "}
            <span className="text-pink-400">Sept 2024 - Oct 2024</span>
          </p>
          <p>
            A hackathon project that integrates real-time chat (Socket.io),
            machine learning models for crop yield prediction, disease
            detection, and fertilizer recommendations, along with real-time
            market rate data for farmers.
          </p>
          <p>
            <a
              href="https://github.com/YOUR_GITHUB_LINK"
              className="text-cyan-400"
            >
              GitHub
            </a>{" "}
            |
            <a href="https://demo-link.com" className="text-cyan-400">
              {" "}
              Demo
            </a>
          </p>
        </div>

        {/* MIRAJ-AI-MAILING-SAAS */}
        <div>
          <p className="text-lg font-semibold text-yellow-400">
            MIRAJ-AI-MAILING-SAAS |{" "}
            <span className="text-pink-400">Nov 2024 - Jan 2025</span>
          </p>
          <p>
            AI-powered bulk mailing system with multi-account management,
            real-time search, and AI-optimized email customization. Features
            Next.js SSR, Tailwind CSS, Redux Toolkit, and RTK Query.
          </p>
          <p>
            <a
              href="https://github.com/YOUR_GITHUB_LINK"
              className="text-cyan-400"
            >
              GitHub
            </a>{" "}
            |
            <a href="https://demo-link.com" className="text-cyan-400">
              {" "}
              Demo
            </a>
          </p>
        </div>

        {/* AIRBNB RESPONSIVE UI */}
        <div>
          <p className="text-lg font-semibold text-yellow-400">
            AIRBNB-RESPONSIVE-UI |{" "}
            <span className="text-pink-400">July 2024 - July 2024</span>
          </p>
          <p>
            A fully responsive Airbnb-inspired UI built with React.js, Tailwind
            CSS, and DaisyUI, optimized for performance with smooth animations
            and interactive components.
          </p>
          <p>
            <a
              href="https://github.com/YOUR_GITHUB_LINK"
              className="text-cyan-400"
            >
              GitHub
            </a>{" "}
            |
            <a href="https://demo-link.com" className="text-cyan-400">
              {" "}
              Demo
            </a>
          </p>
        </div>

        {/* GS-NOTES-APP */}
        <div>
          <p className="text-lg font-semibold text-yellow-400">
            GS-NOTES-APP |{" "}
            <span className="text-pink-400">Nov 2023 - Dec 2023</span>
          </p>
          <p>
            A web platform providing first-year college students with notes,
            previous year questions (PYQs), and educational resources. Currently
            expanding to include all engineering branches.
          </p>
          <p>
            <a
              href="https://github.com/YOUR_GITHUB_LINK"
              className="text-cyan-400"
            >
              GitHub
            </a>{" "}
            |
            <a href="https://demo-link.com" className="text-cyan-400">
              {" "}
              Demo
            </a>
          </p>
        </div>

        {/* NOVA-X */}
        <div>
          <p className="text-lg font-semibold text-yellow-400">
            NOVA-X |{" "} <span className="text-pink-400">Nov 2024 - Nov 2024</span>
          </p>
          <p>An text Editor like eraser.io</p>
        </div>

        {/* Social Media Management App */}
        <div>
          <p className="text-lg font-semibold text-yellow-400">
            DigiLab - Social Media Management App |{" "}
            <span className="text-pink-400">Feb 2025 - persent</span>
          </p>
          <p>
            Developing a SaaS platform that helps businesses and influencers
            manage their social media presence, automate scheduling, track
            engagement, and optimize content strategies.
          </p>
        </div>

        {/* Law & Taxation Management App */}
        <div>
          <p className="text-lg font-semibold text-yellow-400">
            Law & Taxation Management App |{" "}
            <span className="text-pink-400">Dec 2024 - persent</span>
          </p>
          <p>
            Building a comprehensive solution for law firms and tax
            professionals, integrating document automation, case tracking,
            taxation management, and AI-powered legal research tools.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
