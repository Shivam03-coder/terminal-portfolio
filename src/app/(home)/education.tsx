import { GraduationCap } from "lucide-react";

const Education = () => {
  return (
    <div className="text-gray-300">
      <div className="mb-4 flex items-center gap-2">
        <GraduationCap className="text-cyan-400" size={20} />
        <span className="font-bold text-cyan-400 text-lg">Education</span>
      </div>
      <div className="space-y-4">
        {/* B.Tech */}
        <div>
          <p className="text-yellow-400 text-lg font-semibold">Shri Govindram Seksaria Institute of Technology and Science (SGSITS), Indore</p>
          <p>Bachelor of Technology (B.Tech) in Mechanical Engineering</p>
          <p>Expected Graduation: 2027</p>
        </div>
        {/* 12th */}
        <div>
          <p className="text-yellow-400 text-lg font-semibold">Saraswati Vidya Mandir, Darbhanga, Bihar</p>
          <p>Higher Secondary Education (Class 12)</p>
        </div>
        {/* 10th */}
        <div>
          <p className="text-yellow-400 text-lg font-semibold">Saraswati Vidya Mandir, Darbhanga, Bihar</p>
          <p>Secondary Education (Class 10)</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
