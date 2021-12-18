export class Annonce {
  id!:          number;
  title!:       string;
  price!:       number;
  sector!:      string;
  room!:        number;
  description!: string;
  picture!:     string;
  User!:        User;
  Type!:        Type;
  Advantages!:  Advantage[];
  Tags!:        Tag[];
}

export class Advantage {
  id!:                     number;
  name!:                   string;
  AdvertisementAdvantage!: Advertisement;
}

export class Advertisement {
  createdAt!:       Date;
  updatedAt!:       Date;
  AdvantageId?:    number;
  AdvertisementId!: number;
  TagId?:          number;
}

export class Tag {
  id!:               number;
  name!:             string;
  AdvertisementTag!: Advertisement;
}

export class Type {
  id!:   number;
  name!: string;
}

export class User {
  id!:      number;
  name!:    string;
  age!:     null;
  email!:   string;
  phone!:   string;
  picture!: string;
}
