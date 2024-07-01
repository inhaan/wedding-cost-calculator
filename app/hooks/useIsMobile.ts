import { useState, useEffect } from "react";

export function useIsMobile(mobileBreakpoint = 768) {
    const [width, setWidth] = useState(typeof window === "undefined" ? 0 : window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return width <= mobileBreakpoint;
}
