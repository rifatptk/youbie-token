import React from "react";
import Banner from "../../components/Banner/Banner";
// import Betting from "../../components/Betting/Betting";
import Featured from "../../components/Featured/Featured";
import Footer from "../../components/Footer/Footer";
import Introduction from "../../components/Introduction/Introduction";
import NewsFeed from "../../components/NewsFeed/NewsFeed";
import NFT from "../../components/NFT/NFT";
import Premium from "../../components/Premium/Premium";
import Timeline from "../../components/RoadMap/Timeline";
import Stramer from "../../components/Streamer/Stramer";
import Testimonial from "../../components/Testimonial/Testimonial";
import Tokenomic from "../../components/Tokenomic/Tokenomic";
import Tournament from "../../components/Tournament/Tournament";
import Why from "../../components/Why/Why";

const Home = () => {
  return (
    <div id="home">
      <Banner />
      <Introduction />
      <Why />
      <Premium />
      <Timeline />
      <NFT />
      <Featured />
      <Stramer />
      <Tokenomic />
      <Tournament />
      {/* <Betting /> */}
      <NewsFeed />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Home;
