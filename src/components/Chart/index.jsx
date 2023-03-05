import {
  eachWeekOfInterval,
  isSameDay,
  isSameWeek,
  parseJSON,
  subMonths,
  subWeeks,
} from "date-fns";
import { eachDayOfInterval, format } from "date-fns/esm";
import React, { useEffect, useState } from "react";
import { useCallback } from "react";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  Bar,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  useGetAllApartmentsQuery,
  useGetAllBookingsQuery,
  useGetAllCheckInsQuery,
  useGetAllReservationsQuery,
} from "../../store/Services/staffService";
import {
  getLastMonthData,
  getLastWeekData,
  getUniqueListBy,
  mergedChartData,
} from "../../utils/helper";
import { ChartContainer, TopContent } from "./style";

const CheckInBarChart = () => {
  //endpoints

  const getAllBookings = useGetAllBookingsQuery();
  const [filterBy, setFilter] = useState("week");
  const [chartData, setChartData] = useState([]);

  const [checkInWeek, setCheckInWeek] = useState([]);

  const [reserveWeek, setReserveWeek] = useState([]);

  const [checkInMonth, setCheckInMonth] = useState([]);

  const [reserveMonth, setReserveMonth] = useState([]);

  const getAllCheckIns = useGetAllCheckInsQuery();

  const options = [
    {
      value: "week",
      name: "Last Week",
    },
    {
      value: "month",
      name: "Last Month",
    },
  ];
  const getWeekData = useCallback(() => {
    const today = new Date();
    const lastWeek = subWeeks(today, 1);
    const lastWeekData = getLastWeekData(getAllCheckIns?.data?.data[0]);
    const everyday = eachDayOfInterval({ start: lastWeek, end: today });
    return everyday.map((date) => {
      return {
        name: format(date, "E"),
        checkin: lastWeekData.filter((data) =>
          isSameDay(parseJSON(data.checkinDate), date)
        ).length,
      };
    });
  }, [getAllCheckIns]);

  const getMonthData = useCallback(() => {
    const today = new Date();
    const lastMonth = subMonths(today, 1);
    const lastMonthData = getLastMonthData(getAllCheckIns?.data?.data[0]);
    const everyweek = eachWeekOfInterval({ start: lastMonth, end: today });
    return everyweek.map((date) => {
      return {
        name: format(date, "MMM do"),
        checkin: lastMonthData.filter((data) =>
          isSameWeek(parseJSON(data.checkinDate), date)
        ).length,
      };
    });
  }, [getAllCheckIns]);

  const getBookingWeekData = useCallback(() => {
    const today = new Date();
    const lastWeek = subWeeks(today, 1);
    const lastWeekData = getLastWeekData(getAllBookings?.data?.data);
    const everyday = eachDayOfInterval({ start: lastWeek, end: today });
    return everyday.map((date) => {
      return {
        name: format(date, "E"),
        booking: lastWeekData.filter((data) =>
          isSameDay(parseJSON(data.datecreated), date)
        ).length,
      };
    });
  }, [getAllBookings]);

  const getBookingMonthData = useCallback(() => {
    const today = new Date();
    const lastMonth = subMonths(today, 1);
    const lastMonthData = getLastMonthData(getAllBookings?.data?.data);
    const everyweek = eachWeekOfInterval({ start: lastMonth, end: today });
    return everyweek.map((date) => {
      return {
        name: format(date, "MMM do"),
        booking: lastMonthData.filter((data) =>
          isSameWeek(parseJSON(data.datecreated), date)
        ).length,
      };
    });
  }, [getAllBookings]);

  // const modify = () => {

  // };
  useEffect(() => {
    setReserveWeek(getBookingWeekData);
    setCheckInWeek(getWeekData);
    setReserveMonth(getMonthData);
    setCheckInMonth(getBookingMonthData);
  }, [getWeekData, getMonthData, getBookingWeekData, getBookingMonthData]);

  useEffect(() => {
    if (filterBy === "week") {
      let removecheckDuplicate = getUniqueListBy(checkInWeek, "name");
      let removeReserveDuplicate = getUniqueListBy(reserveWeek, "name");
      const merge = mergedChartData(
        removecheckDuplicate,
        removeReserveDuplicate
      );
      setChartData(merge);
    } else {
      const merge = mergedChartData(checkInMonth, reserveMonth);
      setChartData(merge);
    }
  }, [filterBy, checkInWeek, reserveWeek, checkInMonth, reserveMonth]);

  return (
    <ChartContainer
      key="chart"
      animate={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: 200 }}
      exit={{ opacity: 0, x: 200 }}
    >
      <TopContent>
        <h3>Check-Ins</h3>
        <select
          name="time"
          onChange={(event) => setFilter(event.target.value)}
          value={filterBy}
        >
          {options.map((option, index) => (
            <option value={option.value} key={index}>
              {option.name}
            </option>
          ))}
        </select>
      </TopContent>

      <ResponsiveContainer width="100%" height="75%">
        <BarChart width={730} height={250} data={chartData}>
          <XAxis
            dataKey="name"
            tickLine={{ stroke: "none" }}
            axisLine={{ stroke: "none" }}
          />
          <YAxis tickLine={{ stroke: "none" }} axisLine={{ stroke: "none" }} />
          <Tooltip />
          <Legend />
          <Bar dataKey="checkin" fill="#8BA00D" barSize={6} radius={20} />
          <Bar dataKey="booking" fill="#FFCA2A" barSize={6} radius={20} />
          {/* <Bar dataKey="Apartment" fill="#C43C20" barSize={6} radius={20} /> */}
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};

export default CheckInBarChart;
