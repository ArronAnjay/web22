import React from "react";
import Home from "./Home";
import Carousel from "./Gallery";
import FullWidthTabs from "./Tabs";
import Footer from "./Footer";
import SplitScreen from "./Vidio";
import Chat from "../components/ChatAnonim";

function HomePage() {
return (
    <>
    <Home />
    <Carousel />
    <section id="SplitScreen">
        <SplitScreen />
    </section>
    <FullWidthTabs />
    <div id="Mesh1"></div>
    <div
        className="lg:mx-[12%] lg:mt-[-5rem] lg:mb-20 hidden lg:block"
        id="ChatAnonim_lg"
        data-aos="fade-up"
        data-aos-duration="1200"
    >
        <Chat />
    </div>
<Footer />
    </>
);
}

export default HomePage;