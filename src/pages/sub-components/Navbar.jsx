import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [activeComponent, setActiveComponent] = useState("hero");

    // Smooth scrolling function
    const scrollToSection = (id) => {
        document.getElementById(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
        setActiveComponent(id);
    };
    return (
        <nav className="hidden py-5 bg- flex-col justify-center sticky top-0 gap-6 font-medium sm:flex sm:flex-row sm:items-center sm:gap-5 sm:text-lg lg:gap-8 z-10"
            style={{
                background: "hsl(222.2 84% 4.9%)",
            }} >
            <Link
                to="/" // Replace '/' with '#home'
                className={`${activeComponent === "hero" ? "text-foreground" : "text-muted-foreground"} transition-colors hover:text-foreground`}
                onClick={() => scrollToSection("hero")} // Update setActiveComponent argument
            >
                Home
            </Link>

            <Link
                to="#about"
                className={`${activeComponent === "about" ? "text-foreground" : "text-muted-foreground"} transition-colors hover:text-foreground`}
                onClick={() => scrollToSection("about")}
            >
                About
            </Link>

            <Link
                to="#skills"
                className={`${activeComponent === "skills" ? "text-foreground" : "text-muted-foreground"} transition-colors hover:text-foreground`}
                onClick={() => scrollToSection("skills")}
            >
                Skills
            </Link>

            <Link
                to="#projects"
                className={`${activeComponent === "projects" ? "text-foreground" : "text-muted-foreground"} transition-colors hover:text-foreground`}
                onClick={() => scrollToSection("projects")}
            >
                Projects
            </Link>

            <Link
                to="#timeline"
                className={`${activeComponent === "timeline" ? "text-foreground" : "text-muted-foreground"} transition-colors hover:text-foreground`}
                onClick={() => scrollToSection("timeline")}
            >
                Timeline
            </Link>

            <Link
                to="#contact"
                className={`${activeComponent === "contact" ? "text-foreground" : "text-muted-foreground"} transition-colors hover:text-foreground`}
                onClick={() => scrollToSection("contact")}
            >
                Contact
            </Link>
        </nav>
    );
};

export default Navbar;



// className="hidden mt-5 flex-col justify-center gap-6 font-medium sm:flex sm:flex-row sm:items-center sm:gap-5 sm:text-lg lg:gap-8"