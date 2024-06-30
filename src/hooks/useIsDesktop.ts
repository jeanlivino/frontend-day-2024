import { useMediaQuery } from '@uidotdev/usehooks';

const useIsDesktop = () => useMediaQuery('(min-width: 1024px)');

export default useIsDesktop;
