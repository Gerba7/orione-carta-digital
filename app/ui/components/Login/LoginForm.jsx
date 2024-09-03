'use client'

import { useState } from 'react';
import styles from './loginForm.module.css';
import { useRouter } from 'next/navigation';


const LoginForm = () => {

    const [credentials, setCredentials] = useState({
        email: undefined,
        password: undefined
    });

    const router = useRouter();


    const handleChange = (e) => {
        setCredentials((prev) => ({...prev, [e.target.id]: e.target.value}))
    }



  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <h3 className={styles.title}>Ingresar</h3>
            <div className={styles.body}>
                <div className={styles.form}>
                    <div className={styles.inputContainer}>
                        <label className={styles.label}>Email:</label>
                        <input className={styles.input} id='email' type='email' placeholder='Enter your email' onChange={handleChange} />
                    </div>
                    <div className={styles.inputContainer}>
                        <label className={styles.label}>Password:</label>
                        <input className={styles.input} id='password' type='password' placeholder='Enter your password' onChange={handleChange} />
                    </div>
                    <button className={styles.formButton}>Ingresar</button>
                    {/* {error ? <span style={{color: 'crimson', fontSize: '12px', justifySelf: 'center'}}>{error.error}</span> : <></>} */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default LoginForm
