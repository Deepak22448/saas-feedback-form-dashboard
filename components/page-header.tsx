import { SignInButton, SignUpButton, SignedOut } from "@clerk/nextjs";
import { MaxWidthWrapper } from "./max-width-wrapper";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { HeaderMenu } from "./header-menu";

export const PageHeader = async () => {
  return (
    <header className="sticky inset-x-0 top-0 z-30 w-full transition-all bg-white">
      <MaxWidthWrapper className="border-b">
        <div className="flex h-14 items-center justify-between">
          <Logo />
          <div className="flex space-x-2 items-center">
            <SignedOut>
              <SignInButton>
                <Button size="sm">Sign In</Button>
              </SignInButton>
              <SignUpButton>
                <Button size="sm" className="ml-2">
                  Sign Up
                </Button>
              </SignUpButton>
            </SignedOut>
            <HeaderMenu />
          </div>
        </div>
      </MaxWidthWrapper>
    </header>
  );
};

const Logo = () => {
  return (
    <Link className="relative h-full aspect-video" href="/">
      <Image src="/logo.png" alt="logo" fill className="object-contain" />
    </Link>
  );
};
