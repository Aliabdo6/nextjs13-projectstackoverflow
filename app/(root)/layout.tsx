import Navbar from "@/constants/shared/navBar/Navbar";
import React from "react";

const layout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <main className="background-light850_dark100 relative  ">
      <Navbar />
      <div className=" flex  ">
        leftSideBar
        <section className=" flex min-h-screen flex-1 flex-col px-6 pb-6 pt-36 max-md:pd-14 sm:px-14  ">
          <div className=" mx-auto w-full max-w-5xl  ">
            {children}
          </div>
        </section>
        RightSideBar
      </div>
      toaster
    </main>
  );
};

export default layout;
