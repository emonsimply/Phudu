import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Doctors from '../Doctors/Doctors';
import { useLoaderData } from 'react-router';
import SuccessSection from '../../Components/SuccessSection/SuccessSection';

const Home = () => {
  const data = useLoaderData();
  // console.log(data);
  return (
    <div>
      <Banner></Banner>
      <Doctors data={data}></Doctors>
      <SuccessSection></SuccessSection>
    </div>
  );
};

export default Home;