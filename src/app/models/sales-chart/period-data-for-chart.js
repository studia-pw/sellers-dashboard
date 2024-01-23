export class PeriodDataForChart {
  constructor(data) {
    this._data = data;
    this._maxData = Math.max(data);
  }

  get data() {
    return this._data;
  }

  get maxData() {
    return this._maxData;
  }

  set data(newData) {
    this._data = newData;
  }
}
