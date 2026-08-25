import {
  SiPython,
  SiC,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiNodedotjs,
  SiMysql,
  SiMongodb,
} from "react-icons/si";

import {
  SiScikitlearn,
  SiPytorch,
  SiTensorflow,
  SiPandas,
  SiNumpy,
  SiMlflow,
} from "react-icons/si";

import {
  FaBrain,
  FaLanguage,
  FaAws,
  FaPlug
} from "react-icons/fa";

import { FaJava } from "react-icons/fa";
import { FaCodeBranch } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { FaNetworkWired } from "react-icons/fa";
import { FaCloud } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import SkillGroup from "@/components/skillgroup";

export default function SkillsPage() {
  return (
    <main className="min-h-screen bg-black px-6 pt-28 text-white">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold">
          Skills
        </h1>

        <p className="mt-4 max-w-2xl text-gray-400">
          Technologies, tools, and knowledge I use across software development,
          machine learning, and cloud computing.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
            <SkillGroup
                title="Programming Languages"
                skills={[
                    {
                        name: "Python",
                        icon: SiPython,
                    },
                    {
                        name: "Java",
                        icon: FaJava,
                    },
                    {
                        name: "C",
                        icon: SiC,
                    },
                ]}
            />

            <SkillGroup
                title="Full Stack Web Development"
                skills={[
                    {
                        name: "JavaScript",
                        icon: SiJavascript,
                    },
                    {
                        name: "Next.js",
                        icon: SiNextdotjs,
                    },
                    {
                        name: "Node.js",
                        icon: SiNodedotjs,
                    },
                    {
                        name: "React",
                        icon: SiReact,
                    },
                    {
                        name: "Tailwind CSS",
                        icon: SiTailwindcss,
                    },
                    {
                        name: "HTML",
                        icon: SiHtml5,
                    },
                    {
                        name: "CSS",
                        icon: SiCss,
                    },
                    {
                        name: "SQL",
                        icon: SiMysql,
                    },
                    {
                        name: "MongoDB",
                        icon: SiMongodb,
                    },
                    {
                        name: "CI/CD Pipeline",
                        icon: FaCodeBranch,
                    },
                    {
                        name: "API Development",
                        icon: FaPlug,
                    },
                ]}
            />

            <SkillGroup
                title="Artificial Intelligence/ Machine Learning"
                skills={[
                    {
                        name: "LLM Fine-tuning",
                        icon: FaBrain,
                    },
                    {
                        name: "Natural Language Processing",
                        icon: FaLanguage,
                    },
                    {
                        name: "PyTorch",
                        icon: SiPytorch,
                    },
                    {
                        name: "TensorFlow",
                        icon: SiTensorflow,
                    },
                    {
                        name: "MLFlow",
                        icon: SiMlflow,
                    },
                ]}
                
            />

            <SkillGroup
                title="Cloud Tools"
                skills={[
                    {
                        name: "AWS",
                        icon: FaAws,
                    },
                    {
                        name: "API Gateway",
                        icon: FaNetworkWired,
                    },
                    {
                        name: "Content Delivery Networks",
                        icon: TbWorldWww,
                    },
                    {
                        name: "VPC",
                        icon: FaCloud,
                    },
                ]}
            />
        </div>

        <div className="rounded-xl border border-white/10 p-6 md:col-span-2">
            <h2 className="text-2xl font-semibold">
                Certifications
            </h2>

            <div className="flex items-center gap-4 py-4">
                <FaAws className="shrink-0 text-3xl text-gray-300" />

            <div>
                <h3 className="font-medium text-white">
                    AWS Certified Machine Learning Engineer – Associate (in-progress)
                </h3>

                <p className="mt-1 text-sm text-gray-400">
                    Amazon Web Services
                </p>
            </div>
            </div>

            <div className="flex items-center gap-4 py-4">
                <FaAws className="shrink-0 text-3xl text-gray-300" />

            <div>
                <h3 className="font-medium text-white">
                    AWS Certified AI Practitioner
                </h3>

                <p className="mt-1 text-sm text-gray-400">
                    Amazon Web Services
                </p>
            </div>
            </div>

            <div className="flex items-center gap-4 py-4">
                <FaAws className="shrink-0 text-3xl text-gray-300" />

            <div>
                <h3 className="font-medium text-white">
                    AWS Certified Cloud Practitioner
                </h3>

                <p className="mt-1 text-sm text-gray-400">
                    Amazon Web Services
                </p>
            </div>
            </div>

            <div className="flex items-center gap-4 py-4">
                <FaCode className="shrink-0 text-2xl text-gray-300" />

            <div>
                <h3 className="font-medium text-white">
                    CodePath Technical Interview Prep
                </h3>

                <p className="mt-1 text-sm text-gray-400">
                    CodePath
                </p>
            </div>
        </div>

        <div className="-ml-6 rounded-xl border border-white/10 p-6 md:col-span-2">
            <h2 className="text-2xl font-semibold">
                Relevant Coursework
            </h2>

            <ul className="mt-6 list-disc space-y-3 pl-5 text-left text-gray-300">
                <li>Artificial Intelligence</li>
                <li>Data Structures and Analysis of Algorithms</li>
                <li>Data Mining (Theory/Application)</li>
                <li>Machine Learning</li>
                <li>Deep Learning</li>
                <li>Software Engineering</li>
                <li>Databases</li>
                <li>Mobile Application Development</li>
                <li>Web Application Development</li>
                <li>Computer Communications & Networking</li>
                <li>Systems Programming</li>
                <li>Secure Programming & Systems</li>
                <li>Operating Systems</li>
                <li>Formal Methods & Models</li>
            </ul>
        </div>
  
        </div>
      </div>
    </main>
  );
}