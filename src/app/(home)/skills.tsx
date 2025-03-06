import { FileCode } from "lucide-react";

const Skills = () => {
  return (
    <div className="text-gray-300">
      <div className="mb-4 flex items-center gap-2">
        <FileCode className="text-purple-400" size={20} />
        <span className="text-lg font-bold text-purple-400">
          Technical Skills
        </span>
      </div>
      <div className="grid grid-cols-2 gap-6">
        {/* Frontend */}
        <div>
          <p className="text-lg font-semibold text-yellow-400">Frontend:</p>
          <ul className="list-inside list-disc text-gray-200">
            <li>React.js & Next.js</li>
            <li>TypeScript</li>
            <li>Tailwind CSS</li>
            <li>Shadcn UI</li>
            <li>Redux Toolkit</li>
            <li>React Query</li>
          </ul>
        </div>
        {/* Backend */}
        <div>
          <p className="text-lg font-semibold text-yellow-400">Backend:</p>
          <ul className="list-inside list-disc text-gray-200">
            <li>Node.js & Express.js</li>
            <li>tRPC</li>
            <li>Prisma ORM</li>
            <li>PostgreSQL & MongoDB</li>
            <li>Redis</li>
          </ul>
        </div>
        {/* DevOps & Cloud */}
        <div>
          <p className="text-lg font-semibold text-yellow-400">
            DevOps & Cloud:
          </p>
          <ul className="list-inside list-disc text-gray-200">
            <li>Docker & Kubernetes</li>
            <li>Vercel & AWS</li>
            <li>Hostinger Cloud</li>
            <li>Nginx</li>
          </ul>
        </div>

        {/* DBMS & System Design */}
        <div>
          <p className="text-lg font-semibold text-yellow-400">
            DBMS & System Design:
          </p>
          <ul className="list-inside list-disc text-gray-200">
            <li>Database Schema Design</li>
            <li>SQL & NoSQL Optimization</li>
            <li>Scalability & Microservices</li>
            <li>High Availability & Load Balancing</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
