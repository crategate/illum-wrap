import React, { useState } from 'react';

import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => {
  const [home, setHome] = useState(true);
  const [light, setLight] = useState(false);
  const [color, setColor] = useState(false);
  const [photo, setPhoto] = useState(false);
  const allFalse = () => {
    setLight(false);
    setColor(false);
    setPhoto(false);
    setHome(false);
  };
  const goHome = () => {
    allFalse();
    setHome(true);
  }
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
            onClick={bendClick}
            className="rounded-full bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
          >
            Bending Light
          </button>
          <button
            onClick={colorClick}
            className="rounded-full bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
          >
            Color Vision
          </button>
          <button
            onClick={photoClick}
            className="rounded-full bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
          >
            PhotoLectric
          </button>
        </NavbarTwoColumns>
        <div className="flex justify-center">
          <p className={"text-center text-[40px] " + (home ? "mt-40" : "mt-9")}>
            The Buttons Above Load Neat Simulations!
          </p>
        </div>
        {light && (
          <iframe
            src="https://phet.colorado.edu/sims/html/bending-light/latest/bending-light_en.html"
            width="999"
            height="600"
          ></iframe>
        )}
        {color && (
          <iframe
            src="https://phet.colorado.edu/sims/html/color-vision/latest/color-vision_en.html"
            width="999"
            height="600"
          ></iframe>
        )}
        {photo && (
          <iframe
            src="https://phet.colorado.edu/sims/cheerpj/photoelectric/latest/photoelectric.html?simulation=photoelectric"
            width="999"
            height="600"
          ></iframe>
        )}
      </Section>
    </Background>
  );
};

export { Hero };
