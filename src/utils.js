const ID_POSITION_IN_URL = 2;
export const getIdUrl = () => +document.location.pathname.split(`/`)[ID_POSITION_IN_URL];
