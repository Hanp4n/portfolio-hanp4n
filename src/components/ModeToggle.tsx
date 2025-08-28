import { Moon, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"

import { useTheme } from "./Themeprovider"
import { useEffect, useState } from "react"

export function ModeToggle() {
    const { setTheme, theme } = useTheme()
    let [isDark, setIsDark] = useState(false);
    useEffect(() => {
        setTheme("system");
        if (theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
            setIsDark(true);
        } else {
            setIsDark(false);
        }
    }, [])

    function toggleTheme() {
        if (isDark) {
            setTheme("light")
            setIsDark(false);
        } else {
            setTheme("dark")
            setIsDark(true);
        }
    }
    return (
        <Button className="text-black dark:text-white bg-white dark:bg-[#0A0A0A] hover:bg-gray-100 dark:hover:bg-gray-800 duration-300
        w-7 h-7 p-2 rounded-[100%]
        cursor-pointer" size="icon" onClick={() => toggleTheme()} >
            <Sun className="h-3 w-3 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
            <Moon className="absolute h-2 w-2 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
            <span className="sr-only">Toggle theme</span>
        </Button>
    )
}