import { Leaf, ShoppingCart } from "lucide-react";

const linkInfo = [
  {
    id: 1,
    label: "Home",
    path: "#",
  },
  {
    id: 2,
    label: "Shop",
    path: "#",
  },
  {
    id: 3,
    label: "About Us",
    path: "#",
  },
  {
    id: 4,
    label: "Blog",
    path: "#",
  },
  {
    id: 5,
    label: "Contact",
    path: "#",
  },
];

export default function Navbar() {
  return (
    <nav className="border-olive/10 sticky top-0 z-50 border-b shadow-sm backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between md:justify-around">
        {/* logo */}
        <div className="flex items-center gap-2 p-5">
          <div className="bg-sage flex h-10 w-10 items-center justify-center rounded-full">
            <Leaf className="w-2xl" color="white" />
          </div>
          <span className="text-olive font-heading text-2xl">
            GreenRoot Co.
          </span>
        </div>

        {/* links */}
        <div className="hidden gap-2 md:flex">
          {linkInfo.map((items) => (
            <div
              className="p-2 text-[18px] lg:p-4 lg:text-[20px] xl:p-6 xl:text-2xl"
              key={items.id}
            >
              <a
                className="text-charcoal hover:text-olive font-body"
                href={items.path}
              >
                {items.label}
              </a>
            </div>
          ))}
        </div>

        {/* Shop */}
        <div className="hover:bg-warm-beige/50 fit-w flex items-center justify-center rounded-full p-5 transition-all">
          <ShoppingCart className="text-olive" />
        </div>
      </div>
    </nav>
  );
}


// responsiveness 
// hamburger menu need todo 