import styles from './VideoEmbed.module.css';

function extractYouTubeId(url) {
  const match = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/))([a-zA-Z0-9_-]{11})/
  );
  return match ? match[1] : null;
}

export default function VideoEmbed({ video }) {
  if (!video || !video.url) return null;

  if (video.type === 'youtube') {
    const videoId = extractYouTubeId(video.url);
    if (!videoId) return null;

    return (
      <div className={styles.wrapper}>
        {video.title && <p className={styles.title}>{video.title}</p>}
        <div className={styles.responsive}>
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${videoId}`}
            title={video.title || 'YouTube video'}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        {video.date && <p className={styles.date}>{video.date}</p>}
      </div>
    );
  }

  if (video.type === 'recording') {
    return (
      <div className={styles.wrapper}>
        {video.title && <p className={styles.title}>{video.title}</p>}
        <audio controls className={styles.audio}>
          <source src={video.url} />
          Your browser does not support the audio element.
        </audio>
        {video.date && <p className={styles.date}>{video.date}</p>}
      </div>
    );
  }

  return null;
}
