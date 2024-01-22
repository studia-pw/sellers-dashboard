import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import {useTranslation} from "react-i18next";

export default function GraphWidget() {
  const { t } = useTranslation();

  const weekDaysLabels = [
    t("salesGraph.days.monday"),
    t("salesGraph.days.tuesday"),
    t("salesGraph.days.wednesday"),
    t("salesGraph.days.thursday"),
    t("salesGraph.days.friday"),
    t("salesGraph.days.saturday"),
    t("salesGraph.days.sunday"),
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

  return (
    <div>
      <LineChart
        series={[
          { curve: "linear", data: [10, 30, 10, 30, 60, 35, 30] },
        ]}
        yAxis={[{min: 0}]}
        xAxis={[{ scaleType: 'point', data: weekDaysLabels }]}
        width={1060}
        height={412}
      />
    </div>
  );
}
