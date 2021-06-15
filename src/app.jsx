import React, { useEffect, useState } from 'react';
import './app.css';
import VideoList from './components/video_list/video_list';
import VideoSearch from './components/video_search/video_search';


function App() {
  const [videos, setVideos] = useState([]);
  const search = query => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
  };
  
  fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=AIzaSyC9LrWrMYN4z95E7FPKSqtfifM5d6u9oY0&key=AIzaSyC9LrWrMYN4z95E7FPKSqtfifM5d6u9oY0`, requestOptions)
      .then(response => response.json())
      .then(result => result.items.map(item => ({...item, id: item.id.videoId})) )
      .then(items => setVideos(items))
      .catch(error => console.log('error', error));
  }

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
  };
  
  fetch("https://youtube.googleapis.com/youtube/v3/videos?key=AIzaSyC9LrWrMYN4z95E7FPKSqtfifM5d6u9oY0&part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyC9LrWrMYN4z95E7FPKSqtfifM5d6u9oY0", requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  }, [])


  return (
  <>
    <VideoSearch onSearch={search}/>
    <VideoList videos={videos} />
  </>
  )
}

export default App;
