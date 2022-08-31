import { AuthorizationStatus } from '../../constants/api';
import { NameSpace } from '../../constants/namespaces';
import { State } from '../../types/state';

export const getAuthorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.User].authorizationStatus;
