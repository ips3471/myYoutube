import React, { useEffect, useState } from 'react';
import styles from './app.module.css';
import VideoDetail from './components/video_detail/video_detail';
import VideoList from './components/video_list/video_list';
import VideoSearch from './components/video_search/video_search';


function App({youtube}) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState();
  
  const selectVideo = video => {
    setSelectedVideo(video);
  }
  const search = query => {
    youtube.search(query)
    .then(videos => setVideos(videos))
  }

  useEffect(() => {
    youtube.mostPopular()
    .then(videos => setVideos(videos))
  }, [])


  return (
  <div className={styles.app}>
    <VideoSearch onSearch={search}/>
    <div className={styles.content}>
    { selectedVideo && <section className={styles.detail}>
      <VideoDetail video={selectedVideo}/></section> }
    <section className={styles.list}>
      <VideoList videos={videos} onVideoClick={selectVideo} display={selectedVideo ? 'list' : 'grid'} /></section>
    </div>
  </div>
  )
}

export default App;
