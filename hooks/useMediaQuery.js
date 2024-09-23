import { useEffect, useState } from 'react';

const useMediaQuery = () => {
    const [viewport, setViewport] = useState({
        isMobile: false,
        isTab: false,
        isDesktop: true, // Default to desktop
    });

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            setViewport({
                isMobile: width < 768,    // Mobile: less than 768px
                isTab: width >= 768 && width < 1024, // Tablet: between 768px and 1024px
                isDesktop: width >= 1024, // Desktop: 1024px and above
            });
        };

        handleResize(); // Initial check
        window.addEventListener('resize', handleResize); // Update on resize

        return () => {
            window.removeEventListener('resize', handleResize); // Cleanup
        };
    }, []);

    return viewport;
};

export default useMediaQuery;
