import React from 'react';
import Banner from '../Banner/Banner';
import TagSection from '../../TagSection/TagSection';
import AllPost from '../AllPosts/AllPost/AllPost';
import SortPopularity from '../Banner/SortPopularity';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TagSection></TagSection>
            <AllPost></AllPost>
        </div>
    );
};

export default Home;