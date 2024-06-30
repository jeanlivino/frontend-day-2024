import { dataApi } from '@/config/api';
import { SiteData } from '@/types';

export const getSiteData = async () => {
  const { data } = await dataApi.get<SiteData>('site/v1/data');

  return data;
};
