export type TStatus = 'idle' | 'pending' | 'reject' | 'success';

export type TState<T> = {
  status: TStatus;
  data?: T;
  errorMsg?: string;
};

/**********************************************************************************/

export type TCategory = {
  id: number;
  name: string;
  path: string;
};

export type TSection = {
  section: string;
  categories: TCategory[];
};

export type TCategoryList = TSection[];

/**********************************************************************************/

export type TProductQuery = {
  // Filter
  keyword: string;
  page?: string;
  category?: string;

  // Sorting
  time?: 'asc' | 'desc';
  pricing?: 'asc' | 'desc';
};

export type TProduct = {
  id: number;
  sellerId: number;
  name: string;
  description: string;
  reservedPrice: number;
  priceStep: number;
  instantPrice: number;
  isRenewal: boolean;
  coverImageUrl: string;
  timeExpired: string;
  createdAt: string;
  topBidderId?: number;
  currentPrice: number;
  auctionLogCount: number;
  bidderCount: number;
  seller: {
    lastName: string;
    firstName: string;
  };
  section: string;
  categoryName: string;
  categoryPath: string;
  topBidder?: {
    lastName: string;
    firstName: string;
  };
};

export type TProductSearchList = TProduct[];

/**********************************************************************************/

export type TProductDetailsList = {
  id: number;
  sellerId: number;
  name: string;
  description: string;
  reservedPrice: number;
  priceStep: number;
  instantPrice: number;
  isRenewal: boolean;
  coverImageUrl: string;
  timeExpired: string;
  createdAt: string;
  topBidderId?: number;
  currentPrice: number;
  auctionLogCount: number;
  bidderCount: number;
  seller: {
    lastName: string;
    firstName: string;
  };
  section: string;
  categoryName: string;
  categoryPath: string;
  topBidder?: {
    lastName: string;
    firstName: string;
  };
  urls: {};
  positiveCount: Number;
  negativeCount: Number;
};

export type TRelatedProduct = {
  name: string,
  currentPrice: number,
  timeExpired: string,
  createdAt: string,
  auctionLogCount: 0,
  coverImageUrl: string
}
