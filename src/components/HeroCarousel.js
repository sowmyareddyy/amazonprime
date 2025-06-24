import React, { useState, useRef, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { IoClose } from "react-icons/io5";

const heroItems = [
 {
    id: 3,
    type: "video",
    src: "https://res.cloudinary.com/dw0aiyq1u/video/upload/v1750592584/643b2b2478af2a95f9d4396153bdad66_juvafg.mp4",
    poster:
      "https://cinemachaat.com/wp-content/uploads/2019/08/dear-comrade-14.png",
    title: "Dear Comrade",
    description:
      "“Dear Comrade” is a Telugu romantic drama about Bobby, a hot-headed student union leader, and Lily, a state-level cricketer, whose love story is tested by Bobby's anger management issues and their clashing personalities. Bobby, a firm believer in Marxist philosophy and his role as a “comrade,” fights for justice and reforms.",
    genre: "Drama",
    imdb: "8.0",
    duration: "2h 26m",
    year: "2019",
  },

  {
    id: 4,
    type: "video",
    src: "https://res.cloudinary.com/dw0aiyq1u/video/upload/v1750584808/joker.mp4_srbo8g.mp4",
    poster: "https://d32qys9a6wm9no.cloudfront.net/images/movies/backdrop/b7/56dcda5df91da617c81c7e8c9e944478_1280x720.jpg?t=1636109773",
    title: "500 Days of Summer",
    description: "Tom revisits the approximate one year he shared with Summer, the girl he thought he could spend the rest of his life with. She, on the other hand, does not believe in relationships or boyfriends.",
    genre: "Romance, Comedy",
    imdb: "9.0",
    duration: "2h 2m",
    year: "2019",
  },
{
    id: 1,
    type: "video",
    src: "https://res.cloudinary.com/dw0aiyq1u/video/upload/v1750592809/1718013b9d522738bc532f588de4b7fe_bduxks.mp4",
    poster: "https://filmysasi.com/wp-content/uploads/2022/01/Hridayam.jpg",
    title: "Hridayam",
    description: "Arun, a young man, enrols in an engineering college but falls prey to bad habits. As he grows up, he decides to turn over a new leaf and become a responsible adult.",
    genre: "Romance",
    imdb: "8.2",
    duration: "2h 51m",
    year: "2022",
  },

  {
    id: 2,
    type: "video",
    src: "https://res.cloudinary.com/dw0aiyq1u/video/upload/v1750592311/49ced296d051216149ddbf062d114063_720w_igsng7.mp4",
    poster:
      "https://img1.hotstarext.com/image/upload/f_auto/sources/r1/cms/prod/7999/1748785967999-h",
    title: "The Tourist Family",
    description:
      "“Tourist Family” is a Tamil movie about a Sri Lankan Tamil family who immigrate to India as refugees, seeking a better life after fleeing an economic crisis. The family, consisting of Dharmadas, Vasanthi, Nithushan, and Mulli, tries to assimilate into a Chennai colony while keeping their refugee status a secret.",
    genre: "Thriller",
    imdb: "8.5",
    duration: "2h 13m",
    year: "2025",
  },
  
];

const HeroCarousel = () => {
  const [playingIndex, setPlayingIndex] = useState(null);
  const [infoItem, setInfoItem] = useState(null);
  const videoRefs = useRef([]);

  const handlePlayClick = (index) => {
    const videoEl = videoRefs.current[index];
    if (videoEl) {
      videoEl.muted = false;
      videoEl.play();
      setPlayingIndex(index);

      if (videoEl.requestFullscreen) videoEl.requestFullscreen();
      else if (videoEl.webkitRequestFullscreen) videoEl.webkitRequestFullscreen();
      else if (videoEl.msRequestFullscreen) videoEl.msRequestFullscreen();
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      const isFullscreen = document.fullscreenElement !== null;

      if (!isFullscreen && playingIndex !== null) {
        const currentVideo = videoRefs.current[playingIndex];
        if (currentVideo) {
          currentVideo.pause();
          currentVideo.currentTime = 0;
        }
        setPlayingIndex(null);
      }
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, [playingIndex]);

  return (
    <div className="mb-10">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={8000}
        transitionTime={800}
      >
        {heroItems.map((item, index) => (
          <div key={item.id} className="relative group">
            <video
              ref={(el) => (videoRefs.current[index] = el)}
              src={item.src}
              poster={item.poster}
              muted
              autoPlay={playingIndex === index}
              loop
              className="w-full max-h-[500px] object-cover transition duration-300"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent p-6">
              <h2 className="text-2xl md:text-4xl font-semibold text-white">{item.title}</h2>
              <p className="text-sm md:text-lg mt-2 text-gray-300">{item.description}</p>

              <div className="flex gap-3 mt-4">
                <button
                  className="bg-white text-black px-5 py-2 rounded-md hover:bg-gray-300 flex items-center gap-2"
                  onClick={() => handlePlayClick(index)}
                >
                  <FaPlay />
                  Play Now
                </button>
                <button
                  className="bg-gray-800 text-white px-3 py-2 rounded-md hover:bg-gray-700"
                  onClick={() => setInfoItem(item)}
                >
                  <AiOutlineInfoCircle className="text-xl" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </Carousel>

      {infoItem && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <div className="relative w-full h-full">
            <video
              src={infoItem.src}
              autoPlay
              muted
              loop
              className="absolute w-full h-full object-cover z-0"
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-black via-transparent to-black z-10 p-8 flex flex-col justify-end text-white">
              <IoClose
                className="absolute top-6 right-6 text-white text-3xl cursor-pointer"
                onClick={() => setInfoItem(null)}
              />
              <h1 className="text-4xl font-bold mb-3">{infoItem.title}</h1>
              <p className="text-lg text-gray-300 mb-4">{infoItem.description}</p>

              <div className="flex flex-wrap gap-6 text-sm text-gray-300">
                <span>🎬 {infoItem.genre}</span>
                <span>⭐ {infoItem.imdb} IMDb</span>
                <span>🕒 {infoItem.duration}</span>
                <span>📅 {infoItem.year}</span>
              </div>

              <button
                onClick={() => handlePlayClick(heroItems.indexOf(infoItem))}
                className="mt-6 bg-white text-black px-6 py-2 rounded-md w-fit hover:bg-gray-300 flex items-center gap-2"
              >
                <FaPlay />
                Play Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroCarousel;
