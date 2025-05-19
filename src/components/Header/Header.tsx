"use client";

import Link from "next/link";
import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Button from "../Button/Button";
import { useAuth } from "@/context/GlobalContect";
import { ProfileDropdown } from "../ProfileDropdown/ProfileDropdown";
import { HeaderWrapper } from "../wrapper/header-wrapper";
import { LoginButton } from "../Button/login-button";
import { RegisterButton } from "../Button/register-button";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isUserLoggedIn } = useAuth() || {};

  return (
    <>
      <div className="max-w-[1920px] overflow-hidden mx-auto bg-[#05111A]">
        <HeaderWrapper>
          <div className="container">
            <div className="grid grid-cols-9 xl:grid-cols-2 gap-1 xl:gap-5 relative h-[90px] items-center">
              <div className="col-span-4 md:col-span-4 xl:col-span-1">
                <Link href={"/"}>
                  <span className="sr-only">AIAD</span>
                  <h2 className="font-extrabold text-2xl text-white">
                    Ads Video AI
                  </h2>
                </Link>
              </div>
              <div className="col-span-5 md:col-span-5 xl:col-span-1 flex justify-end gap-[10px]">
                {isUserLoggedIn ? (
                  <ProfileDropdown />
                ) : (
                  <>
                    <LoginButton />
                    <RegisterButton />
                  </>
                )}
              </div>
            </div>
            {!isUserLoggedIn && (
              <div className="flex lg:hidden">
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(true)}
                  className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                >
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon aria-hidden="true" className="size-6" />
                </button>
              </div>
            )}
          </div>

          {!isUserLoggedIn && (
            <Dialog
              open={mobileMenuOpen}
              onClose={setMobileMenuOpen}
              className="lg:hidden"
            >
              <div className="fixed inset-0 z-10" />
              <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div className="flex items-center gap-x-6">
                  <Link href="#" className="-m-1.5 p-1.5">
                    <span className="sr-only">AIAD</span>
                    <h2 className="text-black font-extrabold text-2xl">
                      Ads Video AI
                    </h2>
                  </Link>
                  <Link
                    href="/register"
                    className="ml-auto rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Sign up
                  </Link>
                  <button
                    type="button"
                    onClick={() => setMobileMenuOpen(false)}
                    className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon aria-hidden="true" className="size-6" />
                  </button>
                </div>
                <div className="mt-6 flow-root">
                  <div className="-my-6 divide-y divide-gray-500/10">
                    <div className="py-6">
                      <Link
                        href="/login"
                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                      >
                        Log in
                      </Link>
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </Dialog>
          )}
        </HeaderWrapper>
      </div>
    </>
  );
}
