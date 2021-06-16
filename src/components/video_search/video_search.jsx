import React, { useRef } from 'react';
import styles from './video_search.module.css';

const VideoSearch = ({onSearch}) => {
    const inputRef = useRef();
    const formRef = useRef();
    const onSubmit = (e) => {
        e.preventDefault();
        const value = inputRef.current.value;
        onSearch(value);
        formRef.current.reset();
}

    return (
        <form 
        className={styles.header}
        onSubmit={onSubmit}
        ref={formRef}>
            <span className={styles.logo}>
                <img 
                src="./images/logo.png"
                alt="search-logo"
                className={styles.logoImage} />
                <h1 className={styles.logoName}>Youtube</h1>
            </span>
            <input 
            className={styles.input} 
            type="search"
            ref={inputRef}
            />
            <button className={styles.searchButton}>
                <img 
                src="./images/search.png" 
                alt="search-icon"
                className={styles.buttonImage}/>
            </button>
        </form>
    )
}




export default VideoSearch;