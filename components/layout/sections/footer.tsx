import { Separator } from "@/components/ui/separator";
import { ChevronsDownIcon } from "lucide-react";
import Image from "next/image";
import { icons } from "lucide-react";
import { Icon } from "@/components/ui/icon";
import Link from "next/link";

export const FooterSection = () => {
  return (
    <footer id="footer" className="container py-24 sm:py-7">
      <div className="p-10 bg-card border border-border rounded-2xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-8">
          {/* <div className="col-span-full sm:col-span-1">
            <Link href="#" className="flex font-medium items-center">
              

              <h3 className="text-2xl">Grimo</h3>
            </Link>
          </div> */}

          <div className="flex flex-col gap-4">
            <h3 className="font-medium text-lg">Company</h3>
            <div>
              <Link href="/about" className="opacity-60 hover:opacity-100">
                About
              </Link>
            </div>
            <div>
              <Link href="/#features" className="opacity-60 hover:opacity-100">
                Features
              </Link>
            </div>

            <div>
              <Link href="/#pricing" className="opacity-60 hover:opacity-100">
                Pricing
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-medium text-lg">Terms & Policies</h3>
            <div>
              <Link
                href="/terms-of-service"
                className="opacity-60 hover:opacity-100"
              >
                Terms of Service
              </Link>
            </div>
            <div>
              <Link
                href="/acceptable-use-policy"
                className="opacity-60 hover:opacity-100"
              >
                Acceptable Use Policy
              </Link>
            </div>
            <div>
              <Link
                href="/privacy-policy"
                className="opacity-60 hover:opacity-100"
              >
                Privacy Policy
              </Link>
            </div>

            <div>
              <Link
                href="/refund-policy"
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
                href="mailto:dev@gmail.com"
                className="opacity-60 hover:opacity-100"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        <Separator className="my-9" />
        <section className="flex flex-row">
          <h3 className="opacity-60 flex-1">
            &copy; Copyright © 2024 GrimoAI Pte. Ltd. All rights reserved.
          </h3>
          <ul className="flex flex-row gap-4">
            <li>
              <Link
                href="https://x.com/GrimoAI"
                className="opacity-60 hover:opacity-100"
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
                href="https://x.com/GrimoAI"
                className="opacity-60 hover:opacity-100"
              >
                <Icon
                  name="Twitter"
                  size={20}
                  color="hsl(var(--foreground))"
                />
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </footer>
  );
};
