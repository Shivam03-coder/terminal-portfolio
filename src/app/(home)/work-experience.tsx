import { Briefcase } from "lucide-react";

const WorkExperience = () => {
  return (
    <div className="text-gray-300">
      <div className="mb-4 flex items-center gap-2">
        <Briefcase className="text-green-400" size={20} />
        <span className="font-bold text-green-400 text-lg">Work Experience</span>
      </div>
      <div className="space-y-4">
        {/* Backend Developer at Plixipy */}
        <div>
          <p className="text-yellow-400 text-lg font-semibold">Plixipy</p>
          <p>Position: Backend Developer (intern) </p>
          <p>Duration: February 2025 - Present</p>
        </div>
        {/* Freelancer */}
        <div>
          <p className="text-yellow-400 text-lg font-semibold">Freelancer</p>
          <p>Position: Full-Stack Developer</p>
          <p>Duration: August 2024 - Present</p>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
