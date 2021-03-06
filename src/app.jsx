import React, { useEffect, useState } from 'react';
import { useCallback } from 'react';
import styles from './app.module.css';
import VideoDetail from './components/video_detail/video_detail';
import VideoList from './components/video_list/video_list';
import VideoSearch from './components/video_search/video_search';


function App({youtube}) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState();
  
  const toHome = () => {
    setSelectedVideo(null);
  }

  const selectVideo = video => {
    setSelectedVideo(video);
    window.scrollTo(0, 0);
  }
  const search = useCallback(query => {
    youtube.search(query)
    .then(videos => setVideos(videos))
    setSelectedVideo(); //search버튼을 누르면 selectedVideo를 false(빈공간)로 만들어서 처리;
  }, [youtube])

  useEffect(() => {
    youtube.mostPopular()
    .then(videos => setVideos(videos))
  }, [youtube])


  return (
  <div className={styles.app}>
    <div className={styles.header}><VideoSearch onSearch={search} onLogoClick={toHome} /></div>
    <div className={styles.content}>
    { selectedVideo && <section className={styles.detail}>
      <VideoDetail video={selectedVideo}/></section> }
    <section className={styles.list}>
      <VideoList 
      videos={videos} 
      onVideoClick={selectVideo} 
      display={selectedVideo ? 'list' : 'grid'} /></section>
    </div>
  </div>
  )
}

export default App;
