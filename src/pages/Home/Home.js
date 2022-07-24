import React from 'react';
import Banner from '../../components/Banner/Banner';
import Featured from '../../components/Featured/Featured';
import Footer from '../../components/Footer/Footer';
import Introduction from '../../components/Introduction/Introduction';
import NFT from '../../components/NFT/NFT';
import Premium from '../../components/Premium/Premium';
import RoadMap from '../../components/RoadMap/RoadMap';
import Stramer from '../../components/Streamer/Stramer';
import Testimonial from '../../components/Testimonial/Testimonial';
import Tokenomic from '../../components/Tokenomic/Tokenomic';
import TopTeam from '../../components/TopTeam/TopTeam';
import Tournament from '../../components/Tournament/Tournament';

const Home = () => {
    return (
        <div id='home'>
            <Banner/>
            <Introduction/>
            <Stramer/>
            <RoadMap/>
            <NFT/>
            <Featured/>
            <Premium/>
            <Tokenomic/>
            <Tournament/>
            <TopTeam/>

            <Testimonial/>
            <Footer/>
        </div>
    );
};

export default Home;