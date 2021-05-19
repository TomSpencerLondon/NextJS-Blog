import Image from 'next/image';

export default function Header({ title, subTitle }) {
  return (
    <div className="max-w-4xl mx-auto my-12">
      <div className="">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-4">
          {title}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-200 max-w-xl">{subTitle}</p>
      </div>
    </div>
  );
}
