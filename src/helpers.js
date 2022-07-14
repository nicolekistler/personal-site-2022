import { breakpoints } from './styles/breakpoints';

export const checkIsMobile = (viewportWidth) => {
    return viewportWidth < breakpoints.l;
};
