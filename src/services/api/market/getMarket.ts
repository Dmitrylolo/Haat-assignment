import { marketSchema } from '@schemas/market';
import { instance } from '@api/instance';

export default async () => {
    console.log('getMarket');

    const response = await instance.get('user/main-page/by-area/1', { searchParams: { type: 'Market' } }).json();
    // console.log(response);
    return marketSchema.parse(response);
};
