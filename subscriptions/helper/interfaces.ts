export interface IUser {
  uid: string;
  email: string;
  provider: string | null;
  last_name?: string | null;
  full_name?: string | null;
  user_name?: string | null;
  first_name?: string | null;
  settings: {
    output_limit: number;
    output_language: {
      language: string;
      cost: number;
    };
    language: string;
  };
}

type Tick = {
  price: number;
  price_id: string;
  discount: number;
};

export interface ISubscriptionsStrapi {
  id: number;
  attributes: {
    title: string;
    description: string;
    monthly_price: {
      base: Tick;
      tick2: Tick;
      tick3: Tick;
      tick4: Tick;
      tick5: Tick;
    };
    yearly_price: {
      base: Tick;
      tick2: Tick;
      tick3: Tick;
      tick4: Tick;
      tick5: Tick;
    };
    quota: {
      base: number;
      tick2: number;
      tick3: number;
      tick4: number;
      tick5: number;
    };
    tier: string;
    image: {
      data: {
        id: number;
        attributes: any;
      };
    };
  };
};

export type currentLevel = {
  [id: number]: {
    level: number | undefined;
    price: number | undefined;
    price_id: string | undefined;
    discount: number | undefined;
    quota: number | string | undefined;
    isYearlyPlan: boolean | undefined;
  };
};