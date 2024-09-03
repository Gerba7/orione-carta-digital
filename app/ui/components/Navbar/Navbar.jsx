'use client'

import Link from 'next/link';
import styles from './navbar.module.css';
import { useEffect, useRef, useState } from 'react';

const Navbar = ({ categories }) => {
  const componentRef = useRef(null);

  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const componentTop = componentRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (componentTop < 0) {
        setSticky(true);
      } else if (window.scrollY < windowHeight) {
        setSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`${styles.container} 
 ${sticky && styles.sticky}`} ref={componentRef}>
      {categories?.map((category) => {
        return (
          <Link key={category?._id} href={`#${category?.name}`} className={styles.link}>
            {category?.name}
          </Link>
        );
      })}
    </div>
  );
};

export default Navbar;
