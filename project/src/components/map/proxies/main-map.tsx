import { MapProps } from '../../../types/types';
import { Map } from '../map';

export const MainMap = (props: MapProps): JSX.Element => (
  <Map className='cities__map map' {...props} />
);
