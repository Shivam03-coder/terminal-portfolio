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
import Education from "./education";
import Contact from "./contacts";
import WorkExperience from "./work-experience";
import Projects from "./projects";
import Help from "./help";
import Header from "./header";
import { commands } from "./command";

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
        <div className="font-semibold text-red-400">
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
    <div className="min-h-screen font-mono text-gray-300">
      <div className="h-full w-full">
        <div className="min-h-screen overflow-hidden rounded-lg bg-gray-900 shadow-xl">
          {/* Terminal Header */}
          <Header />

          {/* Terminal Content */}
          <div className="h-full space-y-4 overflow-y-auto p-4">
            {history.map((entry, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center gap-2 font-semibold">
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
              className="flex items-center gap-2 font-semibold"
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
