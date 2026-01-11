import { Leaf, ShoppingBag } from "lucide-react";

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
      <div className="container mx-auto flex items-center justify-around">
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
        <div className="flex gap-15 p-5">
          {linkInfo.map((items) => (
            <ul key={items.id}>
              <li>
                <a className="text-charcoal" href={items.path}>
                  {items.label}
                </a>
              </li>
            </ul>
          ))}
        </div>

        {/* Shop */}
        <div className="hover:bg-warm-beige/50 flex h-10 w-10 items-center justify-center rounded-full transition-all">
          <ShoppingBag className="text-olive w-2xl" />
        </div>
      </div>
    </nav>
  );
}
