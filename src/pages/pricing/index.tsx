import Link from "next/link";
import { NextPageWithLayout } from "../_app";
import { MainLayout } from "@/components/layouts/MainLayout";
import DarkLayout from "@/components/layouts/DarkLayout";

const PricingPage: NextPageWithLayout = () => {
  return (
    <>
      <h1 className="title">Pricing Page</h1>
      <h1>
        ir a <Link href={"/"}>Home</Link>
      </h1>
    </>
  );
};

PricingPage.getLayout = function getLayout(page: JSX.Element) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};

export default PricingPage;
