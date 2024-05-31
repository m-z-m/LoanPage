import React, { useRef, useEffect, useState } from 'react';
import styles from '../styles/ABC.module.css'

const Index = () => {

    const elementRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (elementRef.current) {
                const rect = elementRef.current.getBoundingClientRect();
                const isVisible = rect.top < window.innerHeight;
                setIsVisible(isVisible);
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Initial check on component mount
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isVisible]);

    const timelineData = [
        { title: 'Amazon Comp', src: '/image/amazon.png', cnt: 'bjczgkj cnsldhlik sefjiux sevhiou; lfsehijo; fwljusdoiuowdks;l osoidih kjhwdiush jkgsuiygj jscgugkj mnwgu7tiub jhgeusugb sdguytuy uyteuygf...' },
        { title: 'Flipkart Comp', src: '/image/flipkart.png', cnt: 'bjczgkj cnsldhlik sefjiux sevhiou; lfsehijo; fwljusdoiuowdks;l osoidih kjhwdiush jkgsuiygj jscgugkj mnwgu7tiub jhgeusugb sdguytuy uyteuygf...' },
        { title: 'Google Comp', src: '/image/google.png', cnt: 'bjczgkj cnsldhlik sefjiux sevhiou; lfsehijo; fwljusdoiuowdks;l osoidih kjhwdiush jkgsuiygj jscgugkj mnwgu7tiub jhgeusugb sdguytuy uyteuygf...' },
        { title: 'Tesla Comp', src: '/image/tesla.png', cnt: 'bjczgkj cnsldhlik sefjiux sevhiou; lfsehijo; fwljusdoiuowdks;l osoidih kjhwdiush jkgsuiygj jscgugkj mnwgu7tiub jhgeusugb sdguytuy uyteuygf...' },
        { title: 'Toyota Comp', src: '/image/toyota.png', cnt: 'bjczgkj cnsldhlik sefjiux sevhiou; lfsehijo; fwljusdoiuowdks;l osoidih kjhwdiush jkgsuiygj jscgugkj mnwgu7tiub jhgeusugb sdguytuy uyteuygf...' },
    ]
    return (
        <>
            <div className={styles.mainbox}>
                <div className={`${isVisible ? styles.timeline_animation : ''}`} ref={elementRef}>
                    {timelineData.map((e, i) => (
                        <div key={i} className={`${styles.container} ${i % 2 ? styles.right_container : styles.left_container} ${isVisible ? styles.container_animation : ''}`}>
                            <div className={styles.image} style={{ backgroundImage: `url(${e.src})` }}></div>
                            <div className={styles.text_box}>
                                <h2><b>{e.title}</b></h2>
                                <p>{isVisible ? e.cnt : ''}</p>
                                <span className={i % 2 ? styles.right_container_arrow : styles.left_container_arrow}></span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>  
        </>
    )
}

export default Index