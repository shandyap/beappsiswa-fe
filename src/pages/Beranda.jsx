import React from "react";
import HeroBeranda from "../components/beranda/HeroBeranda";
import SectionBeasiswaTerbaru from "../components/beranda/SectionBeasiswaTerbaru";
import SectionPerlombaanTerbaru from "../components/beranda/SectionPerlombaanTerbaru";
import { Container } from "react-bootstrap";

const Beranda = () => {
  return (
    <>
      <HeroBeranda />
      <Container className="my-5">
        <SectionBeasiswaTerbaru />
        <SectionPerlombaanTerbaru />
      </Container>
    </>
  );
};

export default Beranda;
