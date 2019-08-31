import { Moment } from 'moment';
import { ICountry } from 'app/shared/model/country.model';

export interface ICustomer {
  id?: number;
  name?: string;
  email?: string;
  contactNumber?: string;
  address?: string;
  postal?: string;
  isAgreeTerms?: boolean;
  createdDate?: Moment;
  updatedDate?: Moment;
  activatedDate?: Moment;
  status?: boolean;
  country?: ICountry;
}

export class Customer implements ICustomer {
  constructor(
    public id?: number,
    public name?: string,
    public email?: string,
    public contactNumber?: string,
    public address?: string,
    public postal?: string,
    public isAgreeTerms?: boolean,
    public createdDate?: Moment,
    public updatedDate?: Moment,
    public activatedDate?: Moment,
    public status?: boolean,
    public country?: ICountry
  ) {
    this.isAgreeTerms = this.isAgreeTerms || false;
    this.status = this.status || false;
  }
}
