"use client";
import React, { useState, useRef, useEffect } from "react";
import {
  Terminal,
  User,
  Mail,
  Github,
  Linkedin,
  FileCode,
  Briefcase,
  GraduationCap,
} from "lucide-react";
import About from "./about";
import Skills from "./skills";

interface Command {
  command: string;
  output: React.ReactNode;
}

function HomePage() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<Command[]>([
    {
      command: "welcome",
      output: (
        <div className="text-green-400">
          <p className="font-semibold">
            Welcome to my terminal portfolio! Type 'help' to see available
            commands.
          </p>
        </div>
      ),
    },
  ]);
  const [currentPath] = useState("~/portfolio");
  const bottomRef = useRef<HTMLDivElement>(null);

  const commands = {
    help: (
      <div className="font-spaceGrotesk text-gray-300">
        <p className="mb-2 text-yellow-400">Available commands:</p>
        <p>
          <span className="text-green-400">about</span> - Learn about me
        </p>
        <p>
          <span className="text-green-400">skills</span> - View my technical
          skills
        </p>
        <p>
          <span className="text-green-400">projects</span> - See my projects
        </p>
        <p>
          <span className="text-green-400">contact</span> - Get my contact
          information
        </p>
        <p>
          <span className="text-green-400">education</span> - View my
          educational background
        </p>
        <p>
          <span className="text-green-400">experience</span> - View my work
          experience
        </p>
        <p>
          <span className="text-green-400">clear</span> - Clear the terminal
        </p>
      </div>
    ),
    about: <About />,
    skills: <Skills/>,
    projects: (
      <div className="text-gray-300">
        <div className="mb-2 flex items-center gap-2">
          <Briefcase className="text-orange-400" size={20} />
          <span className="font-bold text-orange-400">Projects</span>
        </div>
        <div className="space-y-2">
          <div>
            <p className="text-yellow-400">Project 1</p>
            <p>A description of your first project</p>
          </div>
          <div>
            <p className="text-yellow-400">Project 2</p>
            <p>A description of your second project</p>
          </div>
        </div>
      </div>
    ),
    contact: (
      <div className="text-gray-300">
        <div className="mb-2 flex items-center gap-2">
          <Mail className="text-red-400" size={20} />
          <span className="font-bold text-red-400">Contact Information</span>
        </div>
        <div className="space-y-2">
          <p className="flex items-center gap-2">
            <Mail size={16} /> email@example.com
          </p>
          <p className="flex items-center gap-2">
            <Github size={16} /> github.com/yourusername
          </p>
          <p className="flex items-center gap-2">
            <Linkedin size={16} /> linkedin.com/in/yourusername
          </p>
        </div>
      </div>
    ),
    education: (
      <div className="text-gray-300">
        <div className="mb-2 flex items-center gap-2">
          <GraduationCap className="text-cyan-400" size={20} />
          <span className="font-bold text-cyan-400">Education</span>
        </div>
        <div className="space-y-2">
          <p className="text-yellow-400">University Name</p>
          <p>Degree in Mechanical Engineering</p>
          <p>Graduation Year: 2027</p>
        </div>
      </div>
    ),
    experience: (
      <div className="text-gray-300">
        <div className="mb-2 flex items-center gap-2">
          <Briefcase className="text-green-400" size={20} />
          <span className="font-bold text-green-400">Work Experience</span>
        </div>
        <div className="space-y-4">
          <div>
            <p className="text-yellow-400">Company Name 1</p>
            <p>Position: Senior Developer</p>
            <p>Duration: 20XX - Present</p>
          </div>
          <div>
            <p className="text-yellow-400">Company Name 2</p>
            <p>Position: Software Engineer</p>
            <p>Duration: 20XX - 20XX</p>
          </div>
        </div>
      </div>
    ),
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    let output: React.ReactNode;

    if (trimmedCmd === "clear") {
      setHistory([]);
      return;
    }

    if (trimmedCmd in commands) {
      output = commands[trimmedCmd as keyof typeof commands];
    } else if (trimmedCmd === "") {
      output = null;
    } else {
      output = (
        <div className="text-red-400">
          Command not found. Type 'help' to see available commands.
        </div>
      );
    }

    if (output !== null) {
      setHistory((prev) => [...prev, { command: cmd, output }]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommand(input);
    setInput("");
  };

  return (
    <div className="min-h-screen bg-gray-900 font-mono text-gray-300">
      <div className="h-full w-full">
        <div className="min-h-screen overflow-hidden rounded-lg bg-gray-900 shadow-xl">
          {/* Terminal Header */}
          <div className="sticky left-0 top-0 flex h-full w-full items-center gap-2 bg-gray-800 p-2">
            <div className="flex gap-1.5">
              <div className="h-3 w-3 rounded-full bg-red-500" />
              <div className="h-3 w-3 rounded-full bg-yellow-500" />
              <div className="h-3 w-3 rounded-full bg-green-500" />
            </div>
            <div className="mx-auto flex items-center gap-2">
              <Terminal size={18} />
              <span className="font-spaceGrotesk text-sm text-blue-400">
                Terminal Portfolio Shivam Anand
              </span>
            </div>
          </div>

          {/* Terminal Content */}
          <div className="h-full space-y-4 overflow-y-auto p-4">
            {history.map((entry, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center gap-2 font-spaceGrotesk">
                  <span className="text-green-400">shivam@portfolio</span>
                  <span className="text-gray-400">:</span>
                  <span className="text-blue-400">{currentPath}</span>
                  <span className="text-gray-400">$</span>
                  <span>{entry.command}</span>
                </div>
                <div>{entry.output}</div>
              </div>
            ))}
            <form
              onSubmit={handleSubmit}
              className="flex items-center gap-2 font-spaceGrotesk"
            >
              <span className="text-green-400">visitor@portfolio</span>
              <span className="text-gray-400">:</span>
              <span className="text-blue-400">{currentPath}</span>
              <span className="text-gray-400">$</span>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent outline-none"
                autoFocus
              />
            </form>
            <div ref={bottomRef} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
