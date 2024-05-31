import React, { useRef, useEffect, useState } from 'react';
import styles from '../../styles/scrollitemSlug.module.css'
import Image from 'next/image'; 

const dataIcon = [
    { title: 'Application Process', icon: '/images/search.gif' },
    { title: 'Application Review', icon: '/images/user.gif' },
    { title: 'Provisional Offers', icon: '/images/black-friday.gif' },
    { title: 'Monetization On', icon: '/images/dollar.gif' },
    { title: 'Disbursement', icon: '/images/accounting.gif' },
];

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
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className={styles.mainbox}>
                <div className={`${isVisible ? styles.timeline_animation : ''}`} ref={elementRef}>
                    {dataIcon.map((item, index) => (
                        <div key={index} className={`${styles.container} ${index % 2 ? styles.right_container : styles.left_container} ${isVisible ? styles.container_animation : ''}`}>
                            <div className={styles.text_box}>
                                <Image src={item.icon} alt={item.title} className={styles.icon_large} width={90} height={90} />
                                <h5>{isVisible ? item.title : ''}</h5>
                                <span className={index % 2 ? styles.right_container_arrow : styles.left_container_arrow}></span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default Index;
