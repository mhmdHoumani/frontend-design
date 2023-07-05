import React, { useEffect, useState } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { currentLevel, ISubscriptionsStrapi } from "helper/interfaces";
import {
  changeCurrentLevel,
  initLevel,
  switchMonthlyYearlyToggle,
} from "helper/pricing-helpers";
import ColorWrapper from "../ColorWrapper";
import PlanCard from "./PlanCard";
import bgPlans from "@Logo/home/Background plans.png";
import bgPeople from "@Logo/home/Suscription image.png";
import Image from "next/image";

const Pricing = ({
  subscriptions,
}: {
  subscriptions: ISubscriptionsStrapi[];
}) => {
  const [currentLevel, setCurrentLevel] = useState<currentLevel>({
    [subscriptions.find((sub) => sub.attributes.tier === "enthusiast")?.id!]: {
      ...initLevel(subscriptions, "enthusiast"),
    },
    [subscriptions.find((sub) => sub.attributes.tier === "professional")?.id!]:
      {
        ...initLevel(subscriptions, "professional"),
      },
  });
  const [width, setWidth] = useState<number>(0);

  const descriptions = {
    [subscriptions.find((sub) => sub.attributes.tier === "free_tier")?.id!]: {
      description: "10,000 words\nValid for 14 days\nFree of charge",
    },
    [subscriptions.find((sub) => sub.attributes.tier === "enthusiast")?.id!]: {
      description:
        "Browser extension\nInfinite content types\n25+ languages\nAdjust existing content\nCompose & command features\nBuilt-in plagiarism checker\nEmail support\nMobile app (coming soon)\n1 seat",
    },
    [subscriptions.find((sub) => sub.attributes.tier === "professional")?.id!]:
      {
        description:
          "Additional features, next to Enthusiast\n50K - Unlimited words (slider/brackets)\nGoogle docs integration\nSuggestive text\nExpanded responses\nAlign text passages\nCall back history\nPlagiarism checker full stack\nCollaboration (5 seats)\nMS Word integration (coming soon)\nPriority chat support",
      },
    [subscriptions.find((sub) => sub.attributes.tier === "enterprise")?.id!]: {
      description:
        "Additional features/services beyond Professional\nUnlimited words\nAccess to Brainstorm API\nCustomized AI models\nPremium support\nDedicated account manager\nCollaboration with predefined # seats\nEmployee onboarding\nComplete data encapsulation (coming soon)\nYearly contract",
    },
  };
  const free_tier = subscriptions.find(
    (sub) => sub.attributes.tier === "free_tier"
  );

  useEffect(() => {
    if (window !== undefined) {
      setWidth(window.innerWidth);
    }
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
  }, [width]);

  const bgPlansAspectRatio = bgPlans.height / bgPlans.width;
  const bgPlansHeight = width * bgPlansAspectRatio;

  const bgPeopleAspectRatio = bgPeople.height / bgPeople.width;
  const bgPeopleHeight = 1240 * bgPeopleAspectRatio;

  const convertDescription = (description: string): string[] => {
    return description.split("\n");
  };
  if (!subscriptions.length) return null;

  return (
    <div
      className="relative flex min-h-[300vh] flex-col items-center justify-start overflow-hidden bg-cover bg-center bg-no-repeat pt-10 text-black-primary"
      style={{ backgroundImage: `url('${bgPlans.src}'` }}
    >
      <h1 className="w-fit text-5xl font-semibold text-black-primary">
        Our Plans
      </h1>

      {/* <div
        className="absolute top-0 -z-20 w-full"
      >
        <Image src={bgPlans.src} height={bgPlansHeight} width={width} />
      </div> */}
      <ColorWrapper classes="my-20" toBottom={false}>
        <label
          title="click, don't swipe"
          className="relative block h-10 w-52 cursor-pointer rounded-4xl bg-white-primary text-center"
        >
          <input
            type="checkbox"
            className="peer sr-only"
            onChange={(e) => {
              switchMonthlyYearlyToggle(
                currentLevel,
                setCurrentLevel,
                subscriptions,
                e
              );
            }}
          />
          <div className="absolute left-0 h-12 w-1/2 translate-y-[-4px] translate-x-[-4px] rounded-full bg-gradient-to-r from-primaryPink to-primaryBlue transition-all peer-checked:translate-x-[calc(100%+4px)]" />
          <span className="text-body absolute top-1/2 left-0 w-1/2 translate-x-[-4px] translate-y-[-50%] text-white-primary transition-all peer-checked:text-black-primary">
            Monthly
          </span>
          <span className="text-body absolute right-0 top-1/2 w-1/2 translate-y-[-50%] translate-x-[4px] text-black-primary transition-all peer-checked:text-white-primary">
            Yearly
          </span>
        </label>
      </ColorWrapper>
      <div className="flex h-fit w-full flex-col items-center xl:flex-row xl:items-start xl:justify-center">
        {subscriptions &&
          subscriptions.map(
            (sub, index) =>
              sub.attributes.tier !== "free_tier" && (
                <PlanCard
                  key={index}
                  sub={sub}
                  currentLevel={currentLevel}
                  setCurrentLevel={setCurrentLevel}
                  width={width}
                  convertDescription={convertDescription}
                  descriptions={descriptions}
                />
              )
          )}
      </div>
      <ColorWrapper toBottom={true} classes="my-6 xl:mt-44 xl:my-0">
        <div className="flex h-96 w-72 transform flex-col items-center rounded-4xl bg-white-primary p-8 text-black-primary ss:w-96">
          <h2 className="linear-gradient-color mt-14 mb-8 text-3xl font-bold uppercase">
            {free_tier!.attributes.title}
          </h2>
          <div className="mx-auto self-start">
            {convertDescription(
              descriptions[free_tier!.id]!.description as string
            ).map((desc, index) => (
              <div key={index} className="flex items-center justify-start">
                {free_tier!.attributes.tier !== "enterprise" && (
                  <BsCheckCircleFill className="text-body text-primaryBlue" />
                )}
                <p className="ml-2 text-subTitle font-semibold">{desc}</p>
              </div>
            ))}
          </div>

          <button className="text-body mt-auto rounded-full border-2 border-primaryBlue py-1 px-4 uppercase text-primaryBlue transition-all hover:bg-primaryBlue hover:text-white-primary">
            Get the free trial
          </button>
          {/* <Link
            href={{
              pathname: `/plans/${subscriptions[index]?.attributes.tier}`,
              query: {
                plan_id: subscriptions[index]?.id,
                price: currentLevel[subscriptions[index]?.id!]?.price,
                discount: currentLevel[subscriptions[index]?.id!]?.discount,
                quota: currentLevel[subscriptions[index]?.id!]?.quota,
                price_id: currentLevel[subscriptions[index]?.id!]?.price_id,
                period:
                  subscriptions[index]?.attributes.tier !== "free_tier"
                    ? currentLevel[subscriptions[index]?.id!]?.isYearlyPlan
                      ? "yearly"
                      : "monthly"
                    : "2 weeks",
              },
            }}
            as={`/plans/${subscriptions[index]?.attributes.tier}`}
          >
            <a
              className={`${
                sub.attributes.tier === "professional"
                  ? "border-white-primary text-white-primary hover:bg-white-primary hover:text-primaryBlue"
                  : "border-primaryBlue text-primaryBlue hover:bg-primaryBlue hover:text-white-primary"
              } mt-auto rounded-full border-2 py-1 px-4 text-body uppercase transition-all`}
              // onClick={() => {
              //   if (
              //     sub.attributes.tier !== "enterprise" &&
              //     sub.attributes.tier !== "free_tier"
              //   ) {
              //     console.log(currentLevel[sub.id]!);
              //   }
              // }}
            >
              {sub.attributes.tier === "enterprise"
                ? "Contact Us"
                : "Choose plan"}
            </a>
          </Link> */}
        </div>
      </ColorWrapper>

      <div className="self-end mt-auto -bottom-1 relative">
        <Image src={bgPeople.src} height={bgPeopleHeight} width={1240} />
      </div>
      {/* <Link
        href={{
          pathname: `/plans/${clickedPlan?.attributes.tier}`,
          query: {
            plan_id: clickedPlan?.id,
            price: currentLevel[clickedPlan?.id!]?.price,
            discount: currentLevel[clickedPlan?.id!]?.discount,
            quota: currentLevel[clickedPlan?.id!]?.quota,
            price_id: currentLevel[clickedPlan?.id!]?.price_id,
            period:
              clickedPlan?.attributes.tier !== "free_tier"
                ? currentLevel[clickedPlan?.id!]?.isYearlyPlan
                  ? "yearly"
                  : "monthly"
                : "2 weeks",
          },
        }}
        as={`/plans/${clickedPlan?.attributes.tier}`}
      >
        <button
          disabled={!clickedPlan}
          className={`mx-auto mt-10 w-fit rounded-lg bg-[#201fb1aa] px-5 py-2 text-sm text-white-primary transition-all ${
            clickedPlan && "cursor-pointer hover:bg-[#201fb1]"
          } sm:mx-0 sm:text-base`}
        >
          lang.plans.button
        </button>
      </Link> */}
    </div>
  );
};

export default Pricing;
