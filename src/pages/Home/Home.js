import React from 'react';
import Banner from '../../components/Banner/Banner';
import Introduction from '../../components/Introduction/Introduction';
import RoadMap from '../../components/RoadMap/RoadMap';
import Stramer from '../../components/Streamer/Stramer';

const Home = () => {
    return (
        <div id='home'>
            <Banner/>
            <Introduction/>
            <Stramer/>
            <RoadMap/>
        </div>
    );
};

export default Home;