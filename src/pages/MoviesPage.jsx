import React from "react";
import Section from "../components/Section";

const movieData = {
  featured: [
    {
      title: "Inception",
      thumbnail: "https://m.media-amazon.com/images/M/MV5BMTM0MjUzNjkwMl5BMl5BanBnXkFtZTcwNjY0OTk1Mw@@._V1_.jpg",
      badge: "TOP RATED",
description:"Cobb steals information from his targets by entering their dreams. He is wanted for his alleged role in his wife's murder and his only chance at redemption is to perform a nearly impossible task.",
    },
    {
      title: "Interstellar",
      thumbnail: "https://i.cdn.newsbytesapp.com/images/l42220240415122808.jpeg",
      badge: "IMAX",
description:"When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
    },
    {
      title: "Anyone But You",
      thumbnail: "https://westsidewired.net/wp-content/uploads/2024/05/IMG_0596.webp",
      badge: "BLOCKBUSTER",
description:"Despite having an amazing first date, Bea and Ben's initial attraction quickly turns sour. When they unexpectedly find themselves at a destination wedding in Australia, the pair pretend to be the perfect couple to keep up appearances.",
    },
    {
      title: "Mahanati",
      thumbnail: "https://miro.medium.com/v2/resize:fit:1200/1*5kqzZFLkcaBsFyI2RoN21g.jpeg",
      badge: "BLOCKBUSTER",
description:"Savitri, the most admired actress from South Indian cinema, goes through various tragic incidents in her personal life. Unable to cope with depression, she eventually becomes an alcoholic.",
    },
  ],
  Romcom: [
    {
      title: "Ye Maya Chesave",
      thumbnail: "https://www.idlebrain.com/images4/wp-5yemayachesave1280.jpg",
      badge: "AWARD WINNER",
description:"Karthik, an engineering graduate, wants to make films. He falls in love with Jessie, his neighbour, but her father opposes their relationship due to religious differences.",
    },
    {
      title: "Tholiprema",
      thumbnail: "https://sund-images.sunnxt.com/72211/1600x1200_TholiPrema_72211_6011dad3-ef28-4ee8-92d9-3ca8bc7c9ffe.jpg",
description:"Aditya, an outgoing young man, falls in love with Varsha, an introvert. Varsha has feelings for him but is reluctant to profess them and they both part ways only to meet again after a few years.",
    },
    {
      title: "Jab We Met",
      thumbnail: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/jab-we-met-et00000182-1681714389.jpg",
description:"Aditya, a heartbroken tycoon on the verge of committing suicide, aimlessly boards a train. He meets Geet, a bubbly girl who plans to elope with her lover, and finds himself pulled into her crazy life.",
    },
    {
      title: "Ok Jaanu",
      thumbnail: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/ok-jaanu-et00039399-22-08-2016-08-09-03.jpg",
description:"Adi and Tara are ambitious people who fall in love after meeting at a wedding. They decide on a no-strings-attached live-in relationship but doubt their decision when their careers pull them apart.",
    },
  ],
  action: [
    {
      title: "Sully: Miracle on the Hudson",
      thumbnail: "https://ntvb.tmsimg.com/assets/p12465613_v_h10_aa.jpg?w=1280&h=720",
      badge: "AWARD WINNER",
      description:
        "The story of Captain Chesley 'Sully' Sullenberger, who landed a damaged plane on the Hudson River and saved everyone on board.",
    },
    {
      title: "Spider-Man: No Way Home",
      thumbnail:
        "https://occ-0-8407-92.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABSupDUyOmqxuXJNdzbLSCVdHpDn_wrLRKVkQqmrHVk76c_fhPO1OLt2abpbgvlZFJk728Y_U_NGaZnl5grt-0m2_OgCLnq4KiYtd.jpg?r=12d",
      description:
        "Peter Parker seeks help from Doctor Strange to make the world forget his identity as Spider-Man, but things go dangerously wrong.",
    },
    {
      title: "Pride & Prejudice",
      thumbnail:
        "https://ntvb.tmsimg.com/assets/p159494_v_h8_ad.jpg?w=1280&h=720",
      description:
        "A spirited young woman navigates love, society, and family expectations in this classic romantic drama based on Jane Austen's novel.",
    },
    {
      title: "Titanic",
      thumbnail:
        "https://c4.wallpaperflare.com/wallpaper/652/295/578/titanic-in-3d-titanic-poster-wallpaper-thumb.jpg",
      description:
        "Rose, who is being forced to marry a wealthy man, falls in love with Jack, a talented artist, aboard the unsinkable Titanic. Unfortunately, the ship hits an iceberg, endangering their lives.",
    },
  ],
};

const MoviesPage = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      <Section title="Top Movies" items={movieData.featured} />
      <Section title="Romantic Comedies" items={movieData.Romcom} />
      <Section title="Oscar® nominees and winners" items={movieData.action} />
    </div>
  );
};

export default MoviesPage;
