import { type NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";

import { api } from "~/utils/api";
import BaseLayout from "~/components/BaseLayout";

const Home: NextPage = () => {

  const { data } = api.posts.getAll.useQuery()

  console.log("data", data);

  return (
    <>
      <BaseLayout >
      </BaseLayout>
    </>
  );
};

export default Home;