import { FaDiscord, FaGithub, FaMapPin } from "react-icons/fa";
import { HiCode, HiCube, HiDatabase, HiMail } from "react-icons/hi";

export const config = {
    developer: {
        name: "Vivekanand",
    },
    social: {
        github: "Vvkswami7",
        discord: "" // You can add your Discord ID here later
    },
    NAV_ITEMS: [
        { href: '/projects', label: 'Projects' },
        { href: '/contact', label: 'Contact' }
    ],
    recentTracks: false, 
    projects: [
        {
            id: 1,
            title: "Sentinel-X",
            description: "An AI-powered accident detection system developed for the IBM Dev Day AI Demystified Hackathon. Focuses on real-time analysis and rapid emergency response.",
            image: "", 
            technologies: ["AI", "Python", "Computer Vision"],
            github: "https://github.com/Vvkswami7",
            demo: ""
        },
        {
            id: 2,
            title: "CityShield",
            description: "A distributed car tracking architecture built for the Microsoft Imagine Cup, designed to enhance urban vehicle monitoring and security.",
            image: "",
            technologies: ["IoT", "Distributed Systems", "Cloud"],
            github: "https://github.com/Vvkswami7",
            demo: ""
        },
        {
            id: 3,
            title: "ACRE (Aadhaar Cohort Engine)",
            description: "A specialized data engine developed during the Aadhaar Hackathon to process and manage specific cohort data efficiently.",
            image: "",
            technologies: ["Data Processing", "Backend Architecture"],
            github: "https://github.com/Vvkswami7",
            demo: ""
        },
        {
            id: 4,
            title: "Autonomous Self-Balancing Robot",
            description: "Engineered a two-wheeled balancing robot from scratch. Wrote the Arduino control logic and successfully calibrated motor friction and Bluetooth connectivity.",
            image: "",
            technologies: ["Arduino", "C / C++", "Hardware Integration", "Robotics"],
            github: "https://github.com/Vvkswami7",
            demo: ""
        }
    ],
    skills: [
        {
            title: "Hardware & Embedded",
            icon: <HiCode />,
            description: "Core ENTC skills",
            bgClass: "bg-blue-500/10",
            iconClass: "text-blue-500",
            skills: [
                { name: "VLSI / Chip Design", level: "Advanced", hot: true },
                { name: "Microcontrollers", level: "Advanced" },
                { name: "IoT Systems", level: "Expert" },
                { name: "Robotics", level: "Advanced" }
            ]
        },
        {
            title: "AI & Software",
            icon: <HiDatabase />,
            description: "Programming & Intelligence",
            bgClass: "bg-emerald-500/10",
            iconClass: "text-emerald-500",
            skills: [
                { name: "C / C++", level: "Advanced", hot: true },
                { name: "Edge AI", level: "Advanced" },
                { name: "Embedded ML", level: "Advanced", hot: true },
                { name: "Agentic AI", level: "Intermediate" }
            ]
        },
        {
            title: "Programs & Tools",
            icon: <HiCube />,
            description: "Development Workflow",
            bgClass: "bg-orange-500/10",
            iconClass: "text-orange-500",
            skills: [
                { name: "VS Code", level: "Expert", hot: true },
                { name: "Git & GitHub", level: "Advanced" },
                { name: "Linux", level: "Intermediate" }
            ]
        }
    ],
    contactInfo: [
        {
            icon: <FaGithub className="w-5 h-5" />,
            label: "GitHub",
            value: "@Vvkswami7",
            link: `https://github.com/Vvkswami7`
        },
        {
            icon: <HiMail className="w-5 h-5" />,
            label: "Email",
            value: "Contact Me", // Change to your actual email later if you want
            link: "#"
        },
        {
            icon: <FaMapPin className="w-5 h-5" />,
            label: "Location",
            value: "Maharashtra, India",
            link: null
        }
    ]
}