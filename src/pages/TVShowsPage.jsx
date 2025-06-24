import React from "react";
import Section from "../components/Section";

const tvShowData = {
  drama: [
    {
      title: "Friends",
      thumbnail:
        "https://m.media-amazon.com/images/S/pv-target-images/e56c18e08e0a07c8d4ee65f45be64cefe6b070992a84182dd5ba35eb7cfc6510.jpg",
      badge: "HD",
      description:
        "Follow the lives of six reckless adults living in Manhattan, as they indulge in adventures which make their lives both troublesome and happening.",
    },
    {
      title: "How i met your mother",
      thumbnail:
        "https://preview.redd.it/people-who-watched-how-i-met-your-mother-as-it-aired-how-v0-g1evju1wlb3b1.jpg?width=1080&crop=smart&auto=webp&s=f9652ea4fe93844a3648ee2f0d116d10e4c8bf2b",
      badge: "FEATURED",
      description:
        "Ted Mosby, an architect, recounts to his children the events that led him to meet their mother. His journey is made more eventful by the presence of his friends Lily, Marshall, Robin and Barney.",
    },
    {
      title: "The Office",
      thumbnail:
        "https://ca-times.brightspotcdn.com/dims4/default/d0dd73f/2147483647/strip/true/crop/4680x3240+0+0/resize/1200x831!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F5e%2F51%2F08e2ace149ff9067e7b5bf86e8c5%2Fthe-office-20th-copy.jpg",
      badge: "HD",
      description:
        "The show documents the exploits of a paper supply company in Scranton, Pennsylvania. With an office including the likes of various peers, this series takes a look at the lives of its co-workers.",
    },
 {
      title: "Modern Family",
      thumbnail:
        "https://s.yimg.com/ny/api/res/1.2/Fiv3bL.9KjyDP_vHXOpVeA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyNDI7aD02OTk-/https://media.zenfs.com/en/comingsoon_net_477/ff88161d10d64c1ff26556ae3cb6ac1c",
      badge: "HD",
      description:
        "Three modern-day families from California try to deal with their kids, quirky spouses and jobs in their own unique ways, often falling into hilarious situations.",
    },
  ],
  trending: [
{
      title: "The Traitors",
      thumbnail:
        "https://d3lzcn6mbbadaf.cloudfront.net/media/details/ANI-20250530110138.jpg",
      description:
        "A look at the reign of Queen Elizabeth II and the events that shaped the second half of the 20th century.",
    },

    {
      title: "Citadel: Honey Bunny",
      thumbnail: "https://assets.aboutamazon.com/dims4/default/770bab6/2147483647/strip/true/crop/1279x720+0+0/resize/1240x698!/quality/90/?url=https%3A%2F%2Famazon-blogs-brightspot.s3.amazonaws.com%2Fa3%2F52%2F38040a894b989e151f6a00391e6d%2F1jcp6053-cc.jpg",
      badge: "TOP RATED",
description:"Two spies, Honey and Bunny, navigate the duties and missions of Citadel, a clandestine spy agency, in the early 1990s.",
    },
    {
      title: "Kumari Srimathi",
      thumbnail:
        "https://m.media-amazon.com/images/S/pv-target-images/1b49c234c8ed90cb3ed05b98e53c9a2b95b6b1fc100a945d47daf640570d36da.jpg",
description:"Srimathi plans to start a bar in her village in order to raise money to buy her ancestral home. The 30-year-old unmarried woman must overcome several difficulties to achieve her goal.",
    },
    {
      title: "The Rana Daggubati Show",
      thumbnail:
        "https://m.media-amazon.com/images/S/pv-target-images/91e9f932580a471087d28178ee2f9e990207f386de70238be94524bcc02cb36e.jpg",
      description:
        "Indian actor Rana Daggubati gets candid with celebrity guests and discusses different topics revolving their personal and professional lives.",
    },
  ],
};

const TVShowsPage = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      <Section title="Top Sitcoms" items={tvShowData.drama} />
      <Section title="Trending TV Shows" items={tvShowData.trending} />
    </div>
  );
};

export default TVShowsPage;
