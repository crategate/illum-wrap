import type { ReactNode } from 'react';

type INavbarProps = {
  logo: ReactNode;
  children: ReactNode;
};

const NavbarTwoColumns = (props: INavbarProps) => (
  <div className="flex flex-col justify-center">
    {/**
    <div className="logoMain flex justify-center">
      <Link href="/">{props.logo}</Link>
   </div>
    */}
    <div className="items-center justify-center">
      <nav className="navbar w-100 flex justify-between text-xl font-medium text-gray-800">
        {props.children}
      </nav>
    </div>
  </div>
);

export { NavbarTwoColumns };
