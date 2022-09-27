import { useEffect, useRef, useState } from "react"

interface OptionProps {
    rootMargin : string,
    threshold : number
}

export const UseInView = (option : OptionProps) => {
    const [isInView, setIsInView] = useState(false);

    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const intersection = new IntersectionObserver((entries) => {
            const entry = entries[0];
            
            if(!entry.isIntersecting) return setIsInView(true);
            
            return setIsInView(false);
        },option);
        
        intersection.observe(elementRef?.current!);
    }, [isInView])

    return {isInView, elementRef}
}