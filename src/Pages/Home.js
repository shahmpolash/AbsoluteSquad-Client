import React from "react";
import Banner from "../components/Banner";
import AboutUs from "../components/HomePage/AboutUs";
import OurSpeciality from "../components/HomePage/OurSpeciality";
import Portfolio from "../components/HomePage/Portfolio";
import RoadMap from "../components/HomePage/RoadMap";
import Team from "../components/HomePage/Team";
import Testimonials from "../components/HomePage/Testimonials";
import FeaturesPage from "./FeaturesPage";
import ServicesList from "../components/HomePage/ServicesList";
import ContactPage from "./ContactPage";
import CounterSection from "../components/HomePage/CounterSection";
import VideoSection from "../components/HomePage/VideoSection";
import CtaSection from "../components/HomePage/CtaSection";
import PricePage from "./PricePage";
import HomeServicesList from "../components/HomePage/HomeServicesList";
import PricePageForMonthly from "./PricePageForMonthly";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <ServicesList></ServicesList>
      <AboutUs></AboutUs>
      <HomeServicesList></HomeServicesList>
      <CounterSection></CounterSection>
      <VideoSection></VideoSection>
      <FeaturesPage></FeaturesPage>
      <PricePage></PricePage>
      <PricePageForMonthly></PricePageForMonthly>

      <Testimonials></Testimonials>
      <ContactPage></ContactPage>
      <CtaSection></CtaSection>
    </div>
  );
};

export default Home;
