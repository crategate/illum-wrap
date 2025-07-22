import Link from 'next/link';
import type { ReactNode } from 'react';

type INavbarProps = {
  logo: ReactNode;
  children: ReactNode;
};

const NavbarTwoColumns = (props: INavbarProps) => (
  <div className="flex flex-col justify-center">
    <div className="logoMain flex justify-center">
      <Link href="/">{props.logo}</Link>
    </div>
    <div className="flex flex-wrap items-center justify-center">
      <nav>
        <ul className="navbar space-x-* w-100 flex items-center text-xl font-medium text-gray-800">
          {props.children}
        </ul>
      </nav>

      <style jsx>
        {`
          .navbar :global(li:not(:first-child)) {
            @apply mt-0;
          }
          .navbar :global {
          }

          .navbar :global(li:not(:last-child)) {
            @apply mr-5;
          }
        `}
      </style>
    </div>
  </div>
);

export { NavbarTwoColumns };
