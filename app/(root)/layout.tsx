import SideBar from "@/components/SideBar";
import MobileNav from "@/components/MobileNav";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const loggedInc = { firstName: 'Asif', lastName: 'Ibrahim' };
  return (
    <>
      <main className="flex h-screen w-full font-inter">
        <SideBar user={loggedInc} />

        {/* //mobile bar */}
        <div className="flex size-full flex-col">
          <div className="root-layout">
            <Image height={30} width={30} alt="logo" src='/icons/logo.svg' />
            <div>
              <MobileNav user={loggedInc} />
            </div>
          </div>
          {children}
        </div>
      </main>
    </>
  );
}
