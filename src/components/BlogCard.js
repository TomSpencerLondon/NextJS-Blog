import { CgArrowLongRight } from 'react-icons/cg';
import dayjs from 'dayjs';
import CustomLink from './Link';

export default function BlogCard({ title, summary, slug, date, readingTime }) {
  return (
    <>
      <div className="flex flex-col md:flex-row items-start md:items-baseline justify-start mb-12 max-w-4xl mx-auto px-0 md:px-4">
        <div className="md:w-1/3 mb-4 md:mb-0">
          <p className="text-gray-500 dark:text-gray-300">{dayjs(date).format('MMM D, YYYY')}</p>
        </div>
        <div className="md:w-full ">
          <div>
            <CustomLink href={`/posts/${slug}`} className="hover:no-underline">
              <h3 className="text-gray-800 dark:text-gray-50 font-semibold text-2xl leading-tight">
                {title}
              </h3>
            </CustomLink>
            {/* <div className="space-x-4 mb-4">
              {[{ tag: 'SEO' }, { tag: 'Design' }, { tag: 'Dev' }].map((tags) => (
                <CustomLink href="#" key={tags.tag} className="uppercase text-sm font-semibold link-underline text-indigo-500 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-gray-200">
                  {tags.tag}
                </CustomLink>
              ))}
            </div> */}
          </div>
          <div className="mb-6">
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-snug">{summary}</p>
          </div>
          <CustomLink href={`/posts/${slug}`} className="inline-flex items-center link-underline text-lg">
            Read more
            <CgArrowLongRight className="ml-2 text-xl" />
          </CustomLink>
        </div>
      </div>
    </>
  );
}
