"use client";

import { MoonIcon, SunMoon } from "lucide-react";
import { useTheme } from "next-themes";
import React, { useState, useEffect } from "react";

const ThemeToggle: React.FC = () => {
    const { theme, setTheme, systemTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Ensure hydration matches the server theme
    const currentTheme = theme === "system" ? systemTheme : theme;

    const switchTheme = () => {
        setTheme(currentTheme === "light" ? "dark" : "light");
    };

    const toggleTheme = () => {
        if (typeof document.startViewTransition === "function") {
            document.startViewTransition(() => switchTheme());
        } else {
            switchTheme();
        }
    };

    // Prevent SSR mismatch by only rendering after hydration
    if (!mounted) return null;

    return (
        <button onClick={toggleTheme}>
            {currentTheme === "light" ? (
                <span className="icon-sun">
                    <SunMoon />
                </span>
            ) : (
                <span className="icon-moon">
                    <MoonIcon />
                </span>
            )}
        </button>
    );
};

export default ThemeToggle;
