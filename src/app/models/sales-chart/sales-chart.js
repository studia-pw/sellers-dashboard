export class SalesChart {
  constructor(
    dataForCurrentPeriod,
    dataForPreviousPeriod,
    measurementPresentedOnChart,
    timeRange
  ) {
    this._dataForCurrentPeriod = dataForCurrentPeriod;
    this._dataForPreviousPeriod = dataForPreviousPeriod;
    this._measurementPresentedOnChart = measurementPresentedOnChart;
    this._timeRange = timeRange;
  }

  get dataForCurrentPeriod() {
    return this._dataForCurrentPeriod;
  }

  get dataForPreviousPeriod() {
    return this._dataForPreviousPeriod;
  }

  get measurementPresentedOnChart() {
    return this._measurementPresentedOnChart;
  }

  get timeRange() {
    return this._timeRange;
  }

  set dataForCurrentPeriod(newData) {
    this._dataForCurrentPeriod = newData;
  }

  set dataForPreviousPeriod(newData) {
    this._dataForPreviousPeriod = newData;
  }

  set measurementPresentedOnChart(newMeasurement) {
    this._measurementPresentedOnChart = newMeasurement;
  }

  set timeRange(newTimeRange) {
    this._timeRange = newTimeRange;
  }
}
