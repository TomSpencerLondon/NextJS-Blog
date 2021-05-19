import AppContainer from '@/components/AppContainer';
import Emoji from '@/components/Emoji';
import CustomLink from '@/components/Link';
import Image from 'next/image';

export default function Custom404() {
  return (
    <AppContainer>
      <div className="flex flex-col items-center justify-center max-w-4xl mx-auto px-0 md:px-4 my-24">
        <h1 className="text-5xl font-bold text-center mx-auto mb-8">
          Well this is awkward... <Emoji emoji="😬" label="Awkward smile emoji" />
        </h1>
        <div className="relative w-80 h-80 cursor-pointer">
          <Image
            src="/img/404.png"
            alt="Tom Spencer Headshot"
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>
        <div className="max-w-lg mx-auto text-center space-y-2 prose prose-indigo prose-xl leading-snug">
          <p className="">
            The content you're trying to reach doesn't actually exist yet and it's probably my fault
          </p>
          <p className="">
            In the meantime, feel free to{' '}
            <CustomLink href="/posts">
              <a>view or search other blog posts</a>
            </CustomLink>{' '}
            or go to the{' '}
            <CustomLink href="/">
              <a>homepage</a>
            </CustomLink>
            ?
          </p>
        </div>
      </div>
    </AppContainer>
  );
}
