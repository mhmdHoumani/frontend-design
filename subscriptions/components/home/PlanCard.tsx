import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { currentLevel, ISubscriptionsStrapi } from "helper/interfaces";
import { changeCurrentLevel } from "helper/pricing-helpers";
import ColorWrapper from "../ColorWrapper";

const PlanCard = ({
  sub,
  currentLevel,
  setCurrentLevel,
  width,
  convertDescription,
  descriptions,
}: {
  sub: ISubscriptionsStrapi;
  currentLevel: currentLevel;
  setCurrentLevel: React.Dispatch<React.SetStateAction<currentLevel>>;
  width: number;
  convertDescription: (description: string) => string[];
  descriptions: {
    [x: number]: {
      description: string;
    };
  };
}) => {
  return (
    <ColorWrapper toBottom={true} classes="my-6 xl:mx-2 xl:my-0">
      <div
        className={`${
          sub.attributes.tier === "professional"
            ? "bg-transparent text-white-primary"
            : "bg-white-primary text-black-primary"
        } flex min-h-[680px] w-72 flex-col items-center rounded-4xl p-8 ss:w-96`}
      >
        <div className="flex flex-col items-center justify-end">
          <h2 className="text-body uppercase">{sub.attributes.title}</h2>
        </div>
        {sub.attributes.tier !== "enterprise" &&
          sub.attributes.tier !== "free_tier" && (
            <>
              <p className="font-600 mb-8 mt-5 text-3xl font-bold">
                €
                <span
                  className={`${
                    currentLevel[sub.id]?.discount !== undefined &&
                    "line-through"
                  }`}
                >
                  {currentLevel[sub.id]?.price}
                </span>
                {currentLevel[sub.id]?.discount &&
                  " " +
                    Math.round(
                      (currentLevel[sub.id]?.price! -
                        currentLevel[sub.id]?.price! *
                          currentLevel[sub.id]?.discount!) *
                        10
                    ) /
                      10}
                {currentLevel[sub.id]?.isYearlyPlan
                  ? " / yearly"
                  : " / monthly"}
              </p>
              <div
                className={`${
                  sub.attributes.tier === "professional"
                    ? "bg-white-primary"
                    : "bg-primaryBlue"
                } relative h-1 w-52 ss:w-64`}
              >
                <div
                  className={`${
                    sub.attributes.tier === "professional"
                      ? "bg-white-primary"
                      : "bg-primaryBlue"
                  } absolute top-1/2 left-0 h-3 w-3 -translate-x-full -translate-y-1/2 rounded-l-[100px] rounded-r-[80px]`}
                />
                <div
                  className={`${
                    sub.attributes.tier === "professional"
                      ? "bg-white-primary"
                      : "bg-primaryBlue"
                  } absolute top-1/2 right-0 h-3 w-3 translate-x-full -translate-y-1/2 rounded-r-[100px] rounded-l-[80px]`}
                />
                <div
                  className={`${
                    sub.attributes.tier === "professional"
                      ? "border-white-primary"
                      : "border-primaryBlue"
                  } absolute top-1/2 left-0 z-10 h-4 w-4 cursor-pointer rounded-full border-[3px] bg-primaryPink p-1 transition-all ease-linear`}
                  style={{
                    transform: `translate(${
                      currentLevel[sub.id]?.level! * (width >= 380 ? 60 : 48)
                    }px, -50%)`,
                  }}
                />
                <input
                  type="range"
                  step="0.001"
                  min="0"
                  max="4"
                  value={currentLevel[sub.id]?.level!}
                  className="subscription-input-range absolute top-0 z-20 h-1 w-full cursor-pointer appearance-none bg-transparent outline-none"
                  onChange={(e) => {
                    changeCurrentLevel(currentLevel, setCurrentLevel, sub, e);
                  }}
                  onMouseUp={() => {
                    setCurrentLevel({
                      ...currentLevel,
                      [sub.id]: {
                        ...currentLevel![sub.id]!,
                        level: Math.round(currentLevel![sub.id]?.level!),
                      },
                    });
                  }}
                  onTouchEnd={() => {
                    setCurrentLevel({
                      ...currentLevel,
                      [sub.id]: {
                        level: Math.round(currentLevel![sub.id]?.level!),
                        price: currentLevel[sub.id]?.price,
                        price_id: currentLevel[sub.id]?.price_id,
                        quota: currentLevel[sub.id]?.quota,
                        discount: currentLevel[sub.id]?.discount,
                        isYearlyPlan: currentLevel[sub.id]?.isYearlyPlan,
                      },
                    });
                  }}
                />
              </div>
              <p
                className={`${
                  sub.attributes.tier === "professional"
                    ? "border-white-primary"
                    : "border-black-primary"
                } mt-8 mb-11 rounded border-2 p-2 text-base`}
              >
                {currentLevel[sub.id]?.quota + " words"}
              </p>
            </>
          )}
        {sub.attributes.tier === "enterprise" && (
          <h2 className="linear-gradient-color mb-28 mt-16 text-3xl font-bold">
            Custom Pricing
          </h2>
        )}
        <div className="mx-5 self-start text-mini">
          {convertDescription(descriptions[sub!.id]?.description as string).map(
            (desc, index) => (
              <div key={index} className="mb-4 flex items-center justify-start">
                {sub.attributes.tier !== "enterprise" && (
                  <BsCheckCircleFill
                    className={`${
                      sub.attributes.tier === "professional"
                        ? "text-white-primary"
                        : "text-primaryBlue"
                    }`}
                  />
                )}
                <p className="ml-2">{desc}</p>
              </div>
            )
          )}
        </div>
        {/* <Link
                        href={{
                          pathname: `/plans/${subscriptions[index]?.attributes.tier}`,
                          query: {
                            plan_id: subscriptions[index]?.id,
                            price:
                              currentLevel[subscriptions[index]?.id!]?.price,
                            discount:
                              currentLevel[subscriptions[index]?.id!]?.discount,
                            quota:
                              currentLevel[subscriptions[index]?.id!]?.quota,
                            price_id:
                              currentLevel[subscriptions[index]?.id!]?.price_id,
                            period:
                              subscriptions[index]?.attributes.tier !==
                              "free_tier"
                                ? currentLevel[subscriptions[index]?.id!]
                                    ?.isYearlyPlan
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
        <button
          className={`${
            sub.attributes.tier === "professional"
              ? "border-white-primary text-white-primary hover:bg-white-primary hover:text-primaryBlue"
              : "border-primaryBlue text-primaryBlue hover:bg-primaryBlue hover:text-white-primary"
          } mt-auto rounded-full border-2 py-1 px-4 text-body uppercase transition-all`}
          onClick={() => {
            if (
              sub.attributes.tier !== "enterprise" &&
              sub.attributes.tier !== "free_tier"
            ) {
              console.log(currentLevel[sub.id]!);
            }
          }}
        >
          {sub.attributes.tier === "enterprise" ? "Contact Us" : "Choose plan"}
        </button>
      </div>
    </ColorWrapper>
  );
};

export default PlanCard;
