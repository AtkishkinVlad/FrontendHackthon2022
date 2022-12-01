import React from "react";

import EmptyLayout from "../../components/Layouts/EmptyLayout";
import { SignCard } from "../../components/SignCard/SignCard";
import { NextPageWithLayout } from "../_app";
import style from './'

const SignPage: NextPageWithLayout = () => {
  return (
    <section>
      <SignCard />
    </section>
  )
};

SignPage.getLayout = EmptyLayout;

export default SignPage;