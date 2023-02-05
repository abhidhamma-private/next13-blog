import Link from "next/link";
import kebabCase from "@/util/kebabCase";

const Tag = ({ text }: { text: string }) => {
  return (
    <Link
      className="className='mr-3 text-inlineTitle text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400'"
      href={`/tags/${kebabCase(text)}`}
    >
      {text.split(" ").join("-")}
    </Link>
  );
};

export default Tag;
