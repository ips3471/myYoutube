import React, { useEffect, useState } from 'react';
import './app.css';
import VideoList from './components/video_list/video_list';


function App() {
  const [videos, setVideos] = useState([]);

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
  // console.log(videos);

  return <VideoList videos={videos} />
}

export default App;
