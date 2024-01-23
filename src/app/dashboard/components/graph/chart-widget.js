import * as React from "react";
import { useEffect, useState } from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { StyledMenu } from "@/app/components/styled-menu";
import { MeasurementsPresentedOnChart } from "@/app/models/sales-chart/measurements-presented-on-chart";
import { ChartTimeRanges } from "@/app/models/sales-chart/chart-time-ranges";
import { changeChartType, changeSalesChart } from "@/app/lib/store";
import { ChartTypes } from "@/app/lib/models/chart-types";
import { BarChart } from "@mui/x-charts";

export default function ChartWidget() {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const weekDaysLabels = [
    t("salesChart.days.monday"),
    t("salesChart.days.tuesday"),
    t("salesChart.days.wednesday"),
    t("salesChart.days.thursday"),
    t("salesChart.days.friday"),
    t("salesChart.days.saturday"),
    t("salesChart.days.sunday"),
  ];

  const hoursLabels = [
    "00",
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
  ];

  const salesChart = useSelector((state) => {
    return state.salesChartState.salesChart;
  });

  const salesChartState = useSelector((state) => {
    return state.salesChartState;
  });

  let [xLabels, setXLabels] = useState(hoursLabels);
  const updateChartLabels = () => {
    switch (salesChart.timeRange.id) {
      case 0:
        setXLabels(hoursLabels);
        break;
      case 1:
        setXLabels(weekDaysLabels);
        break;
      case 2:
        setXLabels(weekDaysLabels);
        break;
      default:
        setXLabels(hoursLabels);
    }
  };
  useEffect(() => {
    updateChartLabels();
  }, [salesChart.timeRange.id]);
  useEffect(() => {
    updateChartLabels();
  }, []);

  const changeTimeRange = (timeRange) => {
    salesChart.timeRange = timeRange;
    let newData = [];
    switch (salesChart.timeRange.id) {
      case 0:
        newData = [
          10, 4, 43, 45, 10, 54, 1, 42, 20, 22, 25, 10, 4, 43, 45, 10, 54, 1,
          42, 20, 22, 25,
        ];
        break;
      case 1:
        newData = [1, 2, 5, 3, 3, 5, 7];
        break;
      case 2:
        newData = [8, 1, 6, 6, 12, 5];
        break;
      default:
    }
    salesChart.dataForCurrentPeriod.data = newData;
    dispatch(changeSalesChart(salesChart));
    updateChartLabels();
  };

  const changeMeasurementAndCloseMenu = (measurement) => {
    salesChart.measurementPresentedOnChart = measurement;
    let newData = [];
    switch (salesChart.timeRange.id) {
      case 0:
        newData = [244, 133, 97, 84, 13, 5, 98, 43, 23, 53, 98, 12];
        break;
      case 1:
        newData = [100, 423, 643, 893, 124, 764, 120];
        break;
      case 2:
        newData = [12, 5345, 523, 6443, 2987, 5331];
        break;
      default:
    }
    salesChart.dataForCurrentPeriod.data = newData;
    dispatch(changeSalesChart(salesChart));
    handleCloseMeasurement();
  };

  const changeChartTypeAndCloseMenu = (chartType) => {
    console.log(chartType);
    dispatch(changeChartType(chartType));
    handleCloseChartType();
  };

  const [anchorElMeasurement, setAnchorElMeasurement] = React.useState(null);
  const openMeasurement = Boolean(anchorElMeasurement);
  const handleClickMeasurement = (event) => {
    setAnchorElMeasurement(event.currentTarget);
  };
  const handleCloseMeasurement = () => {
    setAnchorElMeasurement(null);
  };

  const [anchorElChartType, setAnchorElChartType] = React.useState(null);
  const openChartType = Boolean(anchorElChartType);
  const handleClickChartType = (event) => {
    setAnchorElChartType(event.currentTarget);
  };
  const handleCloseChartType = () => {
    setAnchorElChartType(null);
  };

  return (
    <div className="card">
      <div className="flex flex-row flex items-center gap-[20px]">
        <h3 className="font-medium flex items-center justify-center">
          {t("salesChart.header")}
        </h3>
        <div className="border-solid border-l-2 border-[#D9D9D9] h-[15px] w-[2px]"></div>

        {Object.keys(ChartTimeRanges).map((timeRangeName) => (
          <React.Fragment>
            <button
              key={timeRangeName}
              onClick={() => changeTimeRange(ChartTimeRanges[timeRangeName])}
              className="text-black text-[12px] font-normal font-lexend"
            >
              {t(ChartTimeRanges[timeRangeName].translationKey)}
            </button>
            <div className="border-solid border-l-2 border-[#D9D9D9] h-[15px] w-[2px]"></div>
          </React.Fragment>
        ))}

        <div>
          <Button
            className="rounded-full bg-[#F5F5F5] px-[10px] py-[9px] text-black text-[12px] font-normal font-lexend"
            id="measurement-switch-button"
            aria-controls={
              openMeasurement ? "measurement-switch-menu" : undefined
            }
            aria-haspopup="true"
            aria-expanded={openMeasurement ? "true" : undefined}
            variant="contained"
            disableElevation
            sx={{
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#D8D8D8",
              },
            }}
            onClick={handleClickMeasurement}
          >
            {t(salesChart.measurementPresentedOnChart.translationKey)}
          </Button>
          <StyledMenu
            id="measurement-switch-menu"
            anchorEl={anchorElMeasurement}
            open={openMeasurement}
            onClose={handleCloseMeasurement}
          >
            {Object.keys(MeasurementsPresentedOnChart).map(
              (measurementName) => (
                <MenuItem
                  type="submit"
                  key={measurementName}
                  onClick={() =>
                    changeMeasurementAndCloseMenu(
                      MeasurementsPresentedOnChart[measurementName],
                    )
                  }
                  disabled={
                    salesChart.measurementPresentedOnChart.id ===
                    MeasurementsPresentedOnChart[measurementName].id
                  }
                  disableRipple
                  className="text-black text-[12px] font-normal font-lexend"
                >
                  {t(
                    MeasurementsPresentedOnChart[measurementName]
                      .translationKey,
                  )}
                </MenuItem>
              ),
            )}
          </StyledMenu>
        </div>

        <div className="border-solid border-l-2 border-[#D9D9D9] h-[15px] w-[2px]"></div>

        <div>
          <Button
            className="rounded-full bg-[#F5F5F5] px-[10px] py-[9px] text-black text-[12px] font-normal font-lexend"
            id="chart-type-switch-button"
            aria-controls={openChartType ? "chart-type-switch-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={openChartType ? "true" : undefined}
            variant="contained"
            disableElevation
            sx={{
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#D8D8D8",
              },
            }}
            onClick={handleClickChartType}
          >
            {t(salesChartState.chartType.translationKey)}
          </Button>
          <StyledMenu
            id="chart-type-switch-menu"
            anchorEl={anchorElChartType}
            open={openChartType}
            onClose={handleCloseChartType}
          >
            {Object.keys(ChartTypes).map((chartTypeName) => (
              <MenuItem
                type="submit"
                key={chartTypeName}
                onClick={() =>
                  changeChartTypeAndCloseMenu(ChartTypes[chartTypeName])
                }
                disabled={
                  salesChartState.chartType.id === ChartTypes[chartTypeName].id
                }
                disableRipple
                className="text-black text-[12px] font-normal font-lexend"
              >
                {t(ChartTypes[chartTypeName].translationKey)}
              </MenuItem>
            ))}
          </StyledMenu>
        </div>
      </div>
      {salesChartState.chartType === ChartTypes.LINE && (
        <LineChart
          series={[
            { curve: "linear", data: salesChart.dataForCurrentPeriod.data },
          ]}
          yAxis={[{ min: 0 }]}
          xAxis={[{ scaleType: "point", data: xLabels }]}
          width={1060}
          height={412}
        />
      )}
      {salesChartState.chartType === ChartTypes.BAR && (
        <BarChart
          series={[{ data: salesChart.dataForCurrentPeriod.data }]}
          yAxis={[{ min: 0 }]}
          xAxis={[{ scaleType: "band", data: xLabels }]}
          width={1060}
          height={412}
        />
      )}
    </div>
  );
}
