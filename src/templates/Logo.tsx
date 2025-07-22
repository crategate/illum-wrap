import Image from 'next/image';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  // const size = props.xl ? '44' : '32';
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  return (
    <span className={`inline-flex items-center text-gray-900 ${fontStyle}`}>
      <Image
        alt={'illumicon logo'}
        height={200}
        width={300}
        src="/assets/images/image.png"
      ></Image>
    </span>
  );
};

export { Logo };
