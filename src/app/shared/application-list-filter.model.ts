import { EventEmitter } from '@angular/core';

export interface ApplicationListFilterInterface {
  name: string;
  position: string;
  dateFrom: string;
  dateTo: string;
  experience: number;
  availability: number;
  sortOption: SortOption;
}

export type SortOption = 'experience' | 'availability';

export class ApplicationListFilter implements ApplicationListFilterInterface {

  private _name: string;
  private _position: string;
  private _dateFrom: string;
  private _dateTo: string;
  private _experience: number;
  private _availability: number;
  private _sortOption: SortOption;

  constructor() {}

  public get name(): string {
    return this._name;
  }

  public set name(name: string) {
    this._name = name;
  }

  public get position(): string {
    return this._position;
  }

  public set position(position: string) {
    this._position = position;
  }

  public get dateFrom(): string {
    return this._dateFrom;
  }

  public set dateFrom(dateFrom: string) {
    this._dateFrom = dateFrom;
  }

  public get dateTo(): string {
    return this._dateTo;
  }

  public set dateTo(dateTo: string) {
    this._dateTo = dateTo;
  }

  public get experience(): number {
    return this._experience;
  }

  public set experience(experience: number) {
    this._experience = experience;
  }

  public get availability(): number {
    return this._availability;
  }

  public set availability(availability: number) {
    this._availability = availability;
  }

  public get sortOption(): SortOption {
    return this._sortOption;
  }

  public set sortOption(sortOption: SortOption) {
    this._sortOption = sortOption;
  }

}
