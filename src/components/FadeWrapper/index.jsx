import React, { 
    memo,
    useEffect,
    useRef,
    useState
} from 'react';

const FadeWrapper = ({ contentToFade, customStyle }) => {
    const [isVisible, setVisible] = useState(false);
    
    const domRef = useRef();
    
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
          if (entries[0].isIntersecting) {
            setVisible(true);
            
            observer.unobserve(domRef.current);
          }
        });
    
        observer.observe(domRef.current);
    
        return () => observer.unobserve(domRef.current);
      }, []);

    return (
            <div
                className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
                ref={domRef}
                style={customStyle}
            >
                {contentToFade}
            </div>
    );
};

export default memo(FadeWrapper);
