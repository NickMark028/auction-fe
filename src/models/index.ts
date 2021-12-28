import { type } from "os";

export type TState<T> = {
    status: 'idle' | 'pending' | 'reject' | 'success';
    data?: T;
    errorMsg?: string;
}

/**********************************************************************************/

export type TCategory = {
    id: number;
    name: string;
    path: string;
}

export type TSection = {
    section: string;
    categories: TCategory[]
}

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
}

export type TProduct = {
    "id": number,
    "sellerId": number,
    "name": string,
    "description": string,
    "reservedPrice": number,
    "priceStep": number,
    "instantPrice": number,
    "isRenewal": boolean,
    "coverimageURL": string,
    "timeExpired": string,
    "createdAt": string,
    "topBidderId"?: number,
    "currentPrice": number,
    "auctionLogCount": number,
    "bidderCount": number,
    "seller": {
        "lastName": string,
        "firstName": string
    },
    "section": string,
    "categoryName": string,
    "categoryPath": string,
    "topBidder"?: {
        "lastName": string,
        "firstName": string
    }
}

export type TProductSearchList = TProduct[];
// *****************************************
export type TProductDetailsList = {
"auctionLogCount": Number,
"bidderCount": Number,
"bidderFirst": string,
"bidderLast": string,
"bidderNEVCount": Number,
"bidderPOSCount": Number,
"coverImageURL": string,
"createdAt": string,
"currentPrice": Number,
"description": string,
"firstname": string
"id": Number,
"instantPrice": Number,
"isDeleted": Number,
"isRenewal": Number,
"lastname": string,
"name": string,
"negativeCount": Number,
"positiveCount": Number,
"priceStep": Number,
"productimgNumber": string,
"productimg0": string,
"productimg1": string,
"productimg2": string,
"reservedPrice": Number,
"section": string,
"sellerId": Number,
"timeExpired":string ,
"topBidderId":Number,
    
}
