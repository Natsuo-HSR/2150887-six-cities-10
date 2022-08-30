import { createAction } from '@reduxjs/toolkit';
import { AppRoutes } from '../constants/routes';

export const redirectToRoute = createAction<AppRoutes>('data/redirectToRoute');
