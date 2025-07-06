import { useAuthStore } from "@/store/auth";
import Link from "next/link";

const NavLinks = () => {
  const { user } = useAuthStore();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about-us" },
    { label: "Products", href: "/products" },
    { label: "Teams", href: "/teams" },
    { label: "Blog List", href: "/blogs" },
    ...(user ? [{ label: "Create Blog", href: "/write" }] : []),
  ];
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
