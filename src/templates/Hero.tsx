import React, { useState } from 'react';

import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => {
  const [light, setLight] = useState(false);
  const [color, setColor] = useState(false);
  const [photo, setPhoto] = useState(false);
  const allFalse = () => {
    setLight(false);
    setColor(false);
    setPhoto(false);
  };
  const bendClick = () => {
    allFalse();
    setLight(true);
  };
  const colorClick = () => {
    allFalse();
    setColor(true);
  };
  const photoClick = () => {
    allFalse();
    setPhoto(true);
  };
  

  return (
    <Background color="bg-gray-100">
      <Section yPadding="py-6">
        <NavbarTwoColumns logo={<Logo xl />}>
          <button
            onClick={bend}
            className="rounded-full bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
          >
            Bending Light
          </button>
          <button
            onClick={color}
            className="rounded-full bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
          >
            Color Vision
          </button>
          <button
            onClick={photo}
            className="rounded-full bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
          >
            PhotoLectric
          </button>
          <button>{simi}</button>{' '}
        </NavbarTwoColumns>
        <iframe src="https://phet.colorado.edu/sims/cheerpj/photoelectric/latest/photoelectric.html?simulation=photoelectric"
          width="999"
          height="600"
          className={}
          allowfullscreen>
        </iframe>
      </Section>
    </Background>
  );
};

export { Hero };
