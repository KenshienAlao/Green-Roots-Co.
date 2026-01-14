import { Facebook, Instagram, Leaf, Mail, Twitter } from "lucide-react";

const links = [
  {
    id: 1,
    icon: Facebook,
  },
  {
    id: 2,
    icon: Instagram,
  },
  {
    id: 3,
    icon: Twitter,
  },
  {
    id: 4,
    icon: Mail,
  },
];

const company_link = [
  {
    id: 1,
    label: "About Us",
  },
  {
    id: 2,
    label: "Our Story",
  },
  {
    id: 3,
    label: "Careers",
  },
  {
    id: 4,
    label: "Blog",
  },
];

const shop_link = [
  {
    id: 1,
    label: "All plants",
  },
  {
    id: 2,
    label: "Begginer Plants",
  },
  {
    id: 3,
    label: "Low Light",
  },
  {
    id: 4,
    label: "Air Purifying",
  },
];

const supper_link = [
  {
    id: 1,
    lable: "Care Guides",
  },
  {
    id: 2,
    lable: "FAQs",
  },
  {
    id: 3,
    lable: "Shipping",
  },
  {
    id: 4,
    lable: "Returns",
  },
];

export default function Footer() {
  return (
    <footer className="bg-olive px-8 py-16">
      <div className="mx-auto max-w-7xl">
        {/* grid */}
        <div className="mb-20 grid grid-cols-3 gap-10 lg:grid-cols-5 lg:gap-30 2xl:gap-10">
          {/* grid 1 */}
          <div className="col-span-3 lg:col-span-2">
            {/* logo */}
            <div className="mb-5 flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-full bg-white p-2">
                <Leaf className="text-olive size-8" />
              </div>
              <span className="font-heading text-2xl text-white">
                GreenRoot Co.
              </span>
            </div>
            {/* description */}
            <p className="font-body text-md mb-10 text-white/80 sm:text-xl 2xl:w-sm">
              Making sustainable, affordable plant ownership accessible to
              everyone. Because every home deserves a tounch of nature.
            </p>
            {/* links */}
            <div className="flex gap-5">
              {links.map((i) => (
                <div className="rounded-full bg-white/10 p-2" key={i.id}>
                  <i.icon className="size-5 text-white" />
                </div>
              ))}
            </div>
          </div>

          {/* grid 2 */}
          <div>
            <h3 className="font-heading mb-5 text-xl text-white xl:text-3xl">
              Company
            </h3>
            <ul className="">
              {company_link.map((i) => (
                <li
                  className="font-body mb-2 text-sm text-white/60 lg:text-[15px] xl:text-xl"
                  key={i.id}
                >
                  {i.label}
                </li>
              ))}
            </ul>
          </div>

          {/* grid 3 */}
          <div>
            <h3 className="font-heading mb-5 text-xl text-white xl:text-3xl">
              Shop
            </h3>
            <ul>
              {shop_link.map((i) => (
                <li
                  className="font-body mb-2 text-sm text-white/60 lg:text-[15px] xl:text-xl"
                  key={i.id}
                >
                  {i.label}
                </li>
              ))}
            </ul>
          </div>

          {/* grid 4 */}
          <div>
            <h3 className="font-heading mb-5 text-xl text-white xl:text-3xl">
              Support
            </h3>
            <ul>
              {supper_link.map((i) => (
                <li
                  className="font-body mb-2 text-sm text-white/60 lg:text-[15px] xl:text-xl"
                  key={i.id}
                >
                  {i.lable}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* bottom watermark */}
        <div className="border-t border-white/40 pt-8">
          <div className="flex items-center justify-between">
            <p className="font-body text-sm text-white/30">
              © 2026 GreenLeaf. All rights reserved.
            </p>
            <div className="flex gap-5 p-5 2xl:gap-15">
              <p className="font-body text-sm text-white/40">Privacy Policy</p>
              <p className="font-body text-sm text-white/40">
                Terms of Service
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
