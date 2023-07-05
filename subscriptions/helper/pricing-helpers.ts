import React, { Key } from "react";
import { currentLevel, ISubscriptionsStrapi } from "./interfaces";

export const formatter = new Intl.NumberFormat("en-US");

export const initLevel = (
  subscriptions: ISubscriptionsStrapi[],
  tier: string
) => {
  return {
    level: 0,
    price: subscriptions.find((sub) => sub.attributes.tier === tier)?.attributes
      .monthly_price.base.price,
    price_id: subscriptions.find((sub) => sub.attributes.tier === tier)
      ?.attributes.monthly_price.base.price_id,
    discount: subscriptions.find((sub) => sub.attributes.tier === tier)
      ?.attributes.monthly_price.base.discount,
    quota: formatter.format(
      (subscriptions as any).find((sub: any) => sub.attributes.tier === tier)
        ?.attributes.quota.base
    ),
    isYearlyPlan: false,
  };
};

export const changeCurrentLevel = (
  currentLevel: currentLevel,
  setCurrentLevel: React.Dispatch<React.SetStateAction<currentLevel>>,
  sub: ISubscriptionsStrapi,
  e: React.ChangeEvent<HTMLInputElement>
) => {
  const value = parseFloat(e.target.value);

  setCurrentLevel({
    ...currentLevel,
    [sub.id]: {
      level: value,
      price:
        value < 4.5 && value >= 3.5
          ? currentLevel[sub.id]?.isYearlyPlan!
            ? sub.attributes.yearly_price.tick5.price
            : sub.attributes.monthly_price.tick5.price
          : value < 3.5 && value >= 2.5
          ? currentLevel[sub.id]?.isYearlyPlan!
            ? sub.attributes.yearly_price.tick4.price
            : sub.attributes.monthly_price.tick4.price
          : value < 2.5 && value >= 1.5
          ? currentLevel[sub.id]?.isYearlyPlan!
            ? sub.attributes.yearly_price.tick3.price
            : sub.attributes.monthly_price.tick3.price
          : value < 1.5 && value >= 0.5
          ? currentLevel[sub.id]?.isYearlyPlan!
            ? sub.attributes.yearly_price.tick2.price
            : sub.attributes.monthly_price.tick2.price
          : currentLevel[sub.id]?.isYearlyPlan!
          ? sub.attributes.yearly_price.base.price
          : sub.attributes.monthly_price.base.price,
      price_id:
        value < 4.5 && value >= 3.5
          ? currentLevel[sub.id]?.isYearlyPlan!
            ? sub.attributes.yearly_price.tick5.price_id
            : sub.attributes.monthly_price.tick5.price_id
          : value < 3.5 && value >= 2.5
          ? currentLevel[sub.id]?.isYearlyPlan!
            ? sub.attributes.yearly_price.tick4.price_id
            : sub.attributes.monthly_price.tick4.price_id
          : value < 2.5 && value >= 1.5
          ? currentLevel[sub.id]?.isYearlyPlan!
            ? sub.attributes.yearly_price.tick3.price_id
            : sub.attributes.monthly_price.tick3.price_id
          : value < 1.5 && value >= 0.5
          ? currentLevel[sub.id]?.isYearlyPlan!
            ? sub.attributes.yearly_price.tick2.price_id
            : sub.attributes.monthly_price.tick2.price_id
          : currentLevel[sub.id]?.isYearlyPlan!
          ? sub.attributes.yearly_price.base.price_id
          : sub.attributes.monthly_price.base.price_id,
      quota:
        value < 4.5 && value >= 3.5
          ? currentLevel[sub.id]?.isYearlyPlan!
            ? formatter.format(sub.attributes.quota.tick5 * 12)
            : formatter.format(sub.attributes.quota.tick5)
          : value < 3.5 && value >= 2.5
          ? currentLevel[sub.id]?.isYearlyPlan!
            ? formatter.format(sub.attributes.quota.tick4 * 12)
            : formatter.format(sub.attributes.quota.tick4)
          : value < 2.5 && value >= 1.5
          ? currentLevel[sub.id]?.isYearlyPlan!
            ? formatter.format(sub.attributes.quota.tick3 * 12)
            : formatter.format(sub.attributes.quota.tick3)
          : value < 1.5 && value >= 0.5
          ? currentLevel[sub.id]?.isYearlyPlan!
            ? formatter.format(sub.attributes.quota.tick2 * 12)
            : formatter.format(sub.attributes.quota.tick2)
          : currentLevel[sub.id]?.isYearlyPlan!
          ? formatter.format(sub.attributes.quota.base * 12)
          : formatter.format(sub.attributes.quota.base),
      discount:
        value < 4.5 && value >= 3.5
          ? currentLevel[sub.id]?.isYearlyPlan!
            ? sub.attributes.yearly_price.tick5.discount
            : sub.attributes.monthly_price.tick5.discount
          : value < 3.5 && value >= 2.5
          ? currentLevel[sub.id]?.isYearlyPlan!
            ? sub.attributes.yearly_price.tick4.discount
            : sub.attributes.monthly_price.tick4.discount
          : value < 2.5 && value >= 1.5
          ? currentLevel[sub.id]?.isYearlyPlan!
            ? sub.attributes.yearly_price.tick3.discount
            : sub.attributes.monthly_price.tick3.discount
          : value < 1.5 && value >= 0.5
          ? currentLevel[sub.id]?.isYearlyPlan!
            ? sub.attributes.yearly_price.tick2.discount
            : sub.attributes.monthly_price.tick2.discount
          : currentLevel[sub.id]?.isYearlyPlan!
          ? sub.attributes.yearly_price.base.discount
          : sub.attributes.monthly_price.base.discount,
      isYearlyPlan: currentLevel[sub.id]?.isYearlyPlan!,
    },
  });
};

export const switchMonthlyYearlyToggle = (
  currentLevel: currentLevel,
  setCurrentLevel: React.Dispatch<React.SetStateAction<currentLevel>>,
  subscriptions: ISubscriptionsStrapi[],
  e: React.ChangeEvent<HTMLInputElement>
) => {
  let newLevels = currentLevel;
  subscriptions.forEach((sub) => {
    if (currentLevel.hasOwnProperty(sub.id)) {
      newLevels = {
        ...newLevels,
        [sub.id]: {
          level: currentLevel[sub.id]?.level,
          price:
            currentLevel[sub.id]?.level! < 4.5 &&
            currentLevel[sub.id]?.level! > 3.5
              ? e.target.checked
                ? sub.attributes.yearly_price.tick5.price
                : sub.attributes.monthly_price.tick5.price
              : currentLevel[sub.id]?.level! < 3.5 &&
                currentLevel[sub.id]?.level! > 2.5
              ? e.target.checked
                ? sub.attributes.yearly_price.tick4.price
                : sub.attributes.monthly_price.tick4.price
              : currentLevel[sub.id]?.level! < 2.5 &&
                currentLevel[sub.id]?.level! > 1.5
              ? e.target.checked
                ? sub.attributes.yearly_price.tick3.price
                : sub.attributes.monthly_price.tick3.price
              : currentLevel[sub.id]?.level! < 1.5 &&
                currentLevel[sub.id]?.level! > 0.5
              ? e.target.checked
                ? sub.attributes.yearly_price.tick2.price
                : sub.attributes.monthly_price.tick2.price
              : e.target.checked
              ? sub.attributes.yearly_price.base.price
              : sub.attributes.monthly_price.base.price,
          price_id:
            currentLevel[sub.id]?.level! < 4.5 &&
            currentLevel[sub.id]?.level! > 3.5
              ? e.target.checked
                ? sub.attributes.yearly_price.tick5.price_id
                : sub.attributes.monthly_price.tick5.price_id
              : currentLevel[sub.id]?.level! < 3.5 &&
                currentLevel[sub.id]?.level! > 2.5
              ? e.target.checked
                ? sub.attributes.yearly_price.tick4.price_id
                : sub.attributes.monthly_price.tick4.price_id
              : currentLevel[sub.id]?.level! < 2.5 &&
                currentLevel[sub.id]?.level! > 1.5
              ? e.target.checked
                ? sub.attributes.yearly_price.tick3.price_id
                : sub.attributes.monthly_price.tick3.price_id
              : currentLevel[sub.id]?.level! < 1.5 &&
                currentLevel[sub.id]?.level! > 0.5
              ? e.target.checked
                ? sub.attributes.yearly_price.tick2.price_id
                : sub.attributes.monthly_price.tick2.price_id
              : e.target.checked
              ? sub.attributes.yearly_price.base.price_id
              : sub.attributes.monthly_price.base.price_id,
          quota:
            currentLevel[sub.id]?.level! < 4.5 &&
            currentLevel[sub.id]?.level! > 3.5
              ? e.target.checked
                ? formatter.format(sub.attributes.quota.tick5 * 12)
                : formatter.format(sub.attributes.quota.tick5)
              : currentLevel[sub.id]?.level! < 3.5 &&
                currentLevel[sub.id]?.level! > 2.5
              ? e.target.checked
                ? formatter.format(sub.attributes.quota.tick4 * 12)
                : formatter.format(sub.attributes.quota.tick4)
              : currentLevel[sub.id]?.level! < 2.5 &&
                currentLevel[sub.id]?.level! > 1.5
              ? e.target.checked
                ? formatter.format(sub.attributes.quota.tick3 * 12)
                : formatter.format(sub.attributes.quota.tick3)
              : currentLevel[sub.id]?.level! < 1.5 &&
                currentLevel[sub.id]?.level! > 0.5
              ? e.target.checked
                ? formatter.format(sub.attributes.quota.tick2 * 12)
                : formatter.format(sub.attributes.quota.tick2)
              : e.target.checked
              ? formatter.format(sub.attributes.quota.base * 12)
              : formatter.format(sub.attributes.quota.base),
          discount:
            currentLevel[sub.id]?.level! < 4.5 &&
            currentLevel[sub.id]?.level! > 3.5
              ? e.target.checked
                ? sub.attributes.yearly_price.tick5.discount
                : sub.attributes.monthly_price.tick5.discount
              : currentLevel[sub.id]?.level! < 3.5 &&
                currentLevel[sub.id]?.level! > 2.5
              ? e.target.checked
                ? sub.attributes.yearly_price.tick4.discount
                : sub.attributes.monthly_price.tick4.discount
              : currentLevel[sub.id]?.level! < 2.5 &&
                currentLevel[sub.id]?.level! > 1.5
              ? e.target.checked
                ? sub.attributes.yearly_price.tick3.discount
                : sub.attributes.monthly_price.tick3.discount
              : currentLevel[sub.id]?.level! < 1.5 &&
                currentLevel[sub.id]?.level! > 0.5
              ? e.target.checked
                ? sub.attributes.yearly_price.tick2.discount
                : sub.attributes.monthly_price.tick2.discount
              : e.target.checked
              ? sub.attributes.yearly_price.base.discount
              : sub.attributes.monthly_price.base.discount,
          isYearlyPlan: e.target.checked,
        },
      };
    }
  });
  setCurrentLevel(newLevels);
};
