import Link from "next/link";

const EnlaceNav = ({ nombre, LinkTo, target }) => {
  return (
    <Link
      href={LinkTo}
      target={target}
      className="mx-4 lg:my-0 md:my-0 sm:my-4 cursor-pointer font-semibold text-zinc-500 hover:text-zinc-600"
    >
      {nombre}
    </Link>
  );
};

export default EnlaceNav;
