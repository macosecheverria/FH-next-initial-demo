import Link from "next/link";
import { NextPageWithLayout } from "../_app";
import { MainLayout } from "@/components/layouts/MainLayout";
import DarkLayout from "@/components/layouts/DarkLayout";

const  ContactPage: NextPageWithLayout = ()  => {
  return (
    <>
      <h1 className="title">Contact Page</h1>
      <h1>
        Ir a <Link href="/">Home</Link>
      </h1>
    </>
  );
}

ContactPage.getLayout = function getLayout(page: JSX.Element){
  return (
    <MainLayout>
      <DarkLayout>
        {page}
      </DarkLayout>
    </MainLayout>
  )
}


export default ContactPage;