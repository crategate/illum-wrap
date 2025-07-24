import React, { useState } from 'react';

import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => {
  const [simi, setSimi] = useState(0);
  const bend = () => {
    setSimi(1);
  };
  const color = () => {
    setSimi(2);
  };
  const photo = () => {
    setSimi(3);
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
        allowfullscreen>
</iframe>
      </Section>
    </Background>
  );
};

export { Hero };
