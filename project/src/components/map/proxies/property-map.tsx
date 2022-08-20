import { Map } from '../map';
import { MapProps } from '../../../types/types';

export const PropertyMap = (props: MapProps): JSX.Element => (
  <Map className='property__map map' style={{ maxWidth: '60%', marginRight: 'auto', marginLeft: 'auto' }} {...props} />
);
