export enum AppRoutes {
  Index = '/',
  Login = '/login',
  Favorites = '/favorites',
  Property = '/offer/:id',
}

export enum APIRoutes {
  Offers = '/hotels',
  CurrentOffer = '/hotels/{hotelId}',
  Nearby = '/hotels/{hotelId}/nearby',
  Reviews = '/comments/{hotelId}',
  Favorites = '/favorite',
  Login = '/login',
  Logout = '/logout',
}
