export enum AppRoutes {
  Index = '/',
  Login = '/login',
  Favorites = '/favorites',
  Property = '/offer/:id',
}

export enum APIRoutes {
  Offers = '/hotels',
  OfferById = '/hotels/{offerId}',
  Nearby = '/hotels/{offerId}/nearby',
  Reviews = '/comments/{offerId}',
  Favorites = '/favorite',
  PutFavorite = '/favorite/{offerId}/{status}',
  Login = '/login',
  Logout = '/logout',
}
