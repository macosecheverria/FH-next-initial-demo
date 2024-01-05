import Link from "next/link";
import { NextPageWithLayout } from "../_app";
import { ReactElement } from "react";
import { MainLayout } from "@/components/layouts/MainLayout";
import DarkLayout from "@/components/layouts/DarkLayout";

 const AboutPage: NextPageWithLayout = () => {
  return (
    <>
      <h1 className="title">About Page</h1>
      <h1>
        Ir a <Link href="/">Home</Link>
      </h1>
    </>
  );
}

AboutPage.getLayout = function getLayout(page: ReactElement){
  return(
    <MainLayout>
      <DarkLayout>
        {page}
      </DarkLayout>
    </MainLayout>
  )
}

export default AboutPage;
