import { MoonIcon, SunMoon } from 'lucide-react';
import { useTheme } from 'next-themes';
import React, { useState, useEffect } from 'react';

const ThemeToggle: React.FC = () => {
    const { theme, setTheme } = useTheme();
    const [currentTheme, setCurrentTheme] = useState(theme);

    useEffect(() => {
        setCurrentTheme(theme);
    }, [theme]);

    const switchTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    const toggleTheme = () => {
        if (!document.startViewTransition) {
            switchTheme();
        } else {
            document.startViewTransition(switchTheme);
        }
    };

    return (
        <button onClick={toggleTheme}>
            {currentTheme === 'light' ? (
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