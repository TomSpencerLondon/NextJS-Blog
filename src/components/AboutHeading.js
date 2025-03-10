import Image from 'next/image';
import CustomLink from './Link';
import Emoji from './Emoji';

export default function AboutHeading({ imgSrc }) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:justify-between my-12 max-w-4xl mx-auto px-4 md:px-0">
      <Image
          src={imgSrc}
          width={200}
          height={200}
          alt="Profile picture"
          style={{ borderRadius: '9999px', margin: 'auto' }} // Replace Tailwind class with inline styles
      />
      <div className="prose prose-indigo prose-lg mx-auto pt-6 md:pt-0 text-center md:text-left">
        <p className="text-xl text-gray-600 dark:text-gray-200 max-w-2xl">
          I'm Tom Spencer, a Software Engineer.{' '}
          <CustomLink href="https://www.linkedin.com/in/tom-spencer/">
            For 7 years,
          </CustomLink>{' '}
          I've been helping SMEs build their businesses online.
        </p>
        <p className="text-xl text-gray-600 dark:text-gray-200 max-w-2xl">
          I am a self-taught engineer {' '}
          <Emoji emoji="👨‍💻" label="Man working behind a laptop screen" /> and a lifelong learner <Emoji emoji="👨‍🎓" label="A man who is engaged in education" /> with a growth mindset.
        </p>
      </div>
    </div>
  );
}
