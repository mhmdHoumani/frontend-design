import Head from "next/head";
import Pricing from "components/home/Pricing";
import { ISubscriptionsStrapi } from "helper/interfaces";
import { getSubscriptions } from "lib/api";

const Home = ({ subscriptions }: { subscriptions: ISubscriptionsStrapi[] }) => {
  return (
    <>
      <Head>
        <title>Brainstorm | Home</title>
        <meta name="description" content="Homepage" />
        <link rel="icon" href="public/favicon.ico" />
      </Head>

      {/* SUBSCRIPTION PLANS SECTION */}
      <Pricing subscriptions={subscriptions} />
    </>
  );
};

Home.disablePageHeader = true;

export default Home;

export const getServerSideProps = async () => {
  let subscriptions: ISubscriptionsStrapi[] = (await getSubscriptions()).data;
  let free_tier: ISubscriptionsStrapi | undefined = subscriptions.find(
    (sub: ISubscriptionsStrapi) => sub.attributes.tier === "free_tier"
  );
  subscriptions = subscriptions.filter(
    (sub: ISubscriptionsStrapi) => sub.attributes.tier !== "free_tier"
  );
  subscriptions.unshift(free_tier as ISubscriptionsStrapi);

  return {
    props: {
      subscriptions: subscriptions,
    },
  };
};
