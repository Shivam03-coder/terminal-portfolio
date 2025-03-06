import { Mail, Github, Linkedin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <div className="text-gray-300">
      <div className="mb-4 flex items-center gap-2">
        <Mail className="text-red-400" size={20} />
        <span className="font-bold text-red-400 text-lg">Contact Information</span>
      </div>
      <div className="space-y-3">
        <p className="flex items-center gap-2">
          <Mail size={16} className="text-gray-400" />
          <a href="mailto:shivam850anand@gmail.com" className="hover:underline">
            shivam850anand@gmail.com
          </a>
        </p>
        <p className="flex items-center gap-2">
          <Github size={16} className="text-gray-400" />
          <a
            href="https://github.com/Shivam03-coder"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            github.com/Shivam03-coder
          </a>
        </p>
        <p className="flex items-center gap-2">
          <Linkedin size={16} className="text-gray-400" />
          <a
            href="https://www.linkedin.com/in/shivam-anand-developer/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            linkedin.com/in/shivam-anand-developer
          </a>
        </p>
        <p className="flex items-center gap-2">
          <Phone size={16} className="text-gray-400" />
          <span>+91 7827709325</span>
        </p>
      </div>
    </div>
  );
};

export default Contact;
