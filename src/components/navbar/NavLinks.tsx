import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Services", href: "/products" },
  { label: "Teams", href: "/teams" },
  { label: "Blog List", href: "/blogs" },
  { label: "Create Blog", href: "/write" },
];

const NavLinks = () => {
  return (
    <>
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="text-[#24272B] hover:border-b-2 hover:border-green-500 hover:text-green-500 transition duration-150"
        >
          {item.label}
        </Link>
      ))}
    </>
  );
};

export default NavLinks;
