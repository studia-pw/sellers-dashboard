import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "@/app/lib/store";
import Button from "@mui/material/Button";
import { Icon } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { StyledMenu } from "@/app/components/styled-menu";

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

  const chartTimeRanges = {
    day: {
      id: 0,
      nativeName: t("salesChart.timeRanges.day"),
    },
    week: {
      id: 1,
      nativeName: t("salesChart.timeRanges.week"),
    },
    lastWeek: {
      id: 2,
      nativeName: t("salesChart.timeRanges.lastWeek"),
    },
  };
  let chosenTimeRange = chartTimeRanges["day"];
  const changeTimeRange = (timeRange) => {
    chosenTimeRange = timeRange;
  };

  const measurementsPresentedOnChart = {
    unitsSoldNumber: {
      id: 0,
      nativeName: t("salesChart.measurements.unitsSoldNumber"),
    },
    turnover: {
      id: 1,
      nativeName: t("salesChart.measurements.turnover"),
    },
  };
  let chosenMeasurement = measurementsPresentedOnChart["unitsSoldNumber"];

  // const language = useSelector((state) => {
  //   return state.languageState.usedLanguage;
  // });

  const changeMeasurementAndCloseMenu = (language) => {
    // dispatch(changeLanguage(language));
    handleClose();
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="card">
      <div className="flex flex-row flex items-center gap-[20px]">
        <h3 className="font-medium flex items-center justify-center">
          {t("salesChart.header")}
        </h3>
        <div className="border-solid border-l-2 border-[#D9D9D9] h-[15px] w-[2px]"></div>

        {Object.keys(chartTimeRanges).map((timeRange) => (
          <React.Fragment>
            <button
              key={"chartTimeRange" + chartTimeRanges[timeRange].id}
              onClick={() => changeTimeRange(chartTimeRanges[timeRange])}
              className="text-black text-[12px] font-normal font-lexend"
            >
              {chartTimeRanges[timeRange].nativeName}
            </button>
            <div className="border-solid border-l-2 border-[#D9D9D9] h-[15px] w-[2px]"></div>
          </React.Fragment>
        ))}

        <div>
          <Button
            className="rounded-full bg-[#F5F5F5] px-[10px] py-[9px] text-black text-[12px] font-normal font-lexend"
            id="measurement-switch-button"
            aria-controls={open ? "measurement-switch-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            variant="contained"
            disableElevation
            sx={{
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#D8D8D8",
              },
            }}
            onClick={handleClick}
          >
            {chosenMeasurement.nativeName}
          </Button>
          <StyledMenu
            id="measurement-switch-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            {Object.keys(measurementsPresentedOnChart).map((measurement) => (
              <MenuItem
                type="submit"
                key={measurement}
                onClick={() => changeMeasurementAndCloseMenu(measurement)}
                disabled={chosenMeasurement.id === measurement.id}
                disableRipple
                className="text-black text-[12px] font-normal font-lexend"
              >
                {measurementsPresentedOnChart[measurement].nativeName}
              </MenuItem>
            ))}
          </StyledMenu>
        </div>
      </div>
      <LineChart
        series={[{ curve: "linear", data: [10, 30, 10, 30, 60, 35, 30] }]}
        yAxis={[{ min: 0 }]}
        xAxis={[{ scaleType: "point", data: weekDaysLabels }]}
        width={1060}
        height={412}
      />
    </div>
  );
}
