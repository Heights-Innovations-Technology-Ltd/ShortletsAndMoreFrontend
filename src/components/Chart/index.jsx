import React from "react";
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
  useGetAllReservationsQuery,
} from "../../store/Services/staffService";
import { ChartContainer, TopContent } from "./style";

const CheckInBarChart = () => {
  //endpoints
  const allApartments = useGetAllApartmentsQuery();
  const getAllReservations = useGetAllReservationsQuery();
  const getAllBookings = useGetAllBookingsQuery();

  console.log(getAllReservations?.data);
  const data = [
    {
      name: "Mon",
      Reservation: 400,
      Bookings: 240,
      Apartment: 230,
    },
    {
      name: "Tue",
      Reservation: 300,
      Bookings: 139,
      Apartment: 230,
    },
    {
      name: "Wed",
      Reservation: 200,
      Bookings: 800,
      Apartment: 230,
    },
    {
      name: "Thur",
      Reservation: 278,
      Bookings: 600,
      Apartment: 230,
    },
    {
      name: "Fri",
      Reservation: 189,
      Bookings: 700,
      Apartment: 230,
    },
    {
      name: "Sat",
      Reservation: 239,
      Bookings: 380,
      Apartment: 230,
    },
    {
      name: "Sun",
      Reservation: 349,
      Bookings: 430,
      Apartment: 230,
    },
  ];

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
          //   onChange={(event) => setFilter(event.target.value)}
          //   value={filterBy}
        >
          {options.map((option, index) => (
            <option value={option.value} key={index}>
              {option.name}
            </option>
          ))}
        </select>
      </TopContent>

      <ResponsiveContainer width="100%" height="75%">
        <BarChart width={730} height={250} data={data}>
          <XAxis
            dataKey="name"
            tickLine={{ stroke: "none" }}
            axisLine={{ stroke: "none" }}
          />
          <YAxis tickLine={{ stroke: "none" }} axisLine={{ stroke: "none" }} />
          <Tooltip />
          <Legend />
          <Bar dataKey="Bookings" fill="#8BA00D" barSize={6} radius={20} />
          <Bar dataKey="Reservation" fill="#FFCA2A" barSize={6} radius={20} />
          <Bar dataKey="Apartment" fill="#C43C20" barSize={6} radius={20} />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};

export default CheckInBarChart;
