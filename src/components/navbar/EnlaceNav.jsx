import Link from "next/link";

const EnlaceNav = ({ nombre, LinkTo, target }) => {
  return (
    <Link
      href={LinkTo}
      target={target}
      className="mx-4 lg:my-0 md:my-0 sm:my-4 dark:hover:text-blue-500 hover:text-blue-800 cursor-pointer font-semibold"
    >
      {nombre}
    </Link>
  );
};

export default EnlaceNav;
