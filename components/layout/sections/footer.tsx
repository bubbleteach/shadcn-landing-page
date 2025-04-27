import Image from "next/image";
import XIcon from "@/components/icons/x-icon";
import { Icon } from "@/components/ui/icon";
import Link from "next/link";

export const FooterSection = () => {
  return (
    <footer id="footer" className=" py-24 sm:py-7 border-t border-sidebar-border bg-accent">
      {/* <Separator className="my-9" /> */}
      <div className=" container py-10">
        <div className=" flex flex-col md:flex-row">
          <div className="flex-1 flex flex-col gap-6 pt-1 pb-8">
            <Image
              width={48}
              height={48}
              // className="mx-auto rounded-lg relative rouded-lg leading-none flex items-center  border-secondary  border-t-primary/30"
              src="/grimo/grimo_logo.png"
              alt="grimo"
              loading="eager"
            />
            <ul className="flex flex-row items-end gap-4">
              <li>
                <Link
                  href="https://www.linkedin.com/company/grimo-ai/"
                  className="opacity-60 hover:opacity-100"
                  aria-label="Grimo LinkedIn"
                >
                  <Icon
                    name="Linkedin"
                    size={20}
                    color="hsl(var(--foreground))"
                  />
                </Link>
              </li>
              <li>
                <Link
                  href="https://x.com/GrimoAI/"
                  className="opacity-60 hover:opacity-100"
                  aria-label="Grimo X (Twitter)"
                >
                  <XIcon />
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col md:flex-row justify-end gap-x-20 gap-y-8">
            {/* <div className="col-span-full sm:col-span-1">
            <Link href="#" className="flex font-medium items-center">
              <Image
                width={72}
                height={72}
                // className="mx-auto rounded-lg relative rouded-lg leading-none flex items-center  border-secondary  border-t-primary/30"
                src="/grimo/grimo_logo.svg"
                alt="grimo"
              />
            </Link>
          </div> */}

            <div className="flex flex-col gap-4">
              <h3 className="font-medium text-lg">Company</h3>
              <div>
                <Link href="/about/" className="opacity-60 hover:opacity-100">
                  About
                </Link>
              </div>
              <div>
                <Link
                  href="/#features/"
                  className="opacity-60 hover:opacity-100"
                >
                  Features
                </Link>
              </div>

              <div>
                <Link href="/#pricing/" className="opacity-60 hover:opacity-100">
                  Pricing
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="font-medium text-lg">Docs</h3>
              <div>
                <Link
                  href="/releases/"
                  className="opacity-60 hover:opacity-100"
                >
                  Releases
                </Link>
              </div>
              <div>
                <Link
                  href="/blog/"
                  className="opacity-60 hover:opacity-100"
                >
                  Blog
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="font-medium text-lg">Terms & Policies</h3>
              <div>
                <Link
                  href="/terms-of-service/"
                  className="opacity-60 hover:opacity-100"
                >
                  Terms of Service
                </Link>
              </div>
              <div>
                <Link
                  href="/acceptable-use-policy/"
                  className="opacity-60 hover:opacity-100"
                >
                  Acceptable Use Policy
                </Link>
              </div>
              <div>
                <Link
                  href="/privacy-policy/"
                  className="opacity-60 hover:opacity-100"
                >
                  Privacy Policy
                </Link>
              </div>

              <div>
                <Link
                  href="/refund-policy/"
                  className="opacity-60 hover:opacity-100"
                >
                  Refund Policy
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="font-medium text-lg">Help</h3>
              <div>
                <Link
                  href="mailto:dev@grimo.ai"
                  className="opacity-60 hover:opacity-100"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>

        <p className=" text-sm opacity-60 mt-8">
          Copyright © 2024 GrimoAI Pte. Ltd. <br />
          All rights reserved.
        </p>
      </div>
    </footer>
  );
};
