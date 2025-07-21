import { dataApi } from '@/config/api';
import { SiteData } from '@/types';

export const revalidate = 60;

export const getSiteData = async () => {
  const { data } = await dataApi.get<SiteData>('site/v1/data');
  console.log(data);
  return data;
};
