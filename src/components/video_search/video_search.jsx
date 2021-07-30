import React, { useRef } from 'react';
import { memo } from 'react';
import styles from './video_search.module.css';

const VideoSearch = memo(({onSearch, onLogoClick}) => {
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
            <button 
            className={styles.logo}
            onClick={onLogoClick}>
                <img 
                src={process.env.PUBLIC_URL + '/images/logo.png'}
                alt="search-logo"
                className={styles.logoImage} />
                <h1 className={styles.logoName}>Youtube</h1>
            </button>
            <input 
            className={styles.input} 
            type="search"
            ref={inputRef}
            />
            <button className={styles.searchButton}>
                <img 
                src={process.env.PUBLIC_URL + '/images/search.png'}
                alt="search-icon"
                className={styles.buttonImage} />
            </button>
        </form>
    )
});




export default VideoSearch;