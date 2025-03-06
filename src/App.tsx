import { Container, Typography } from "@mui/material";
import useFetchApi from "./Components/UseFetchApi";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

function App() {
  const { data1, data2 } = useFetchApi();
  const data3 = data2.slice(0, 22);
  console.log(data1);
  console.log(data3);

  return (
    <>
      <Container maxWidth="lg">
        <Typography variant="h5" component="h2" gutterBottom align="center">
          Volume and Rate Overview
        </Typography>

        <ResponsiveContainer width={"100%"} height={300}>
          <LineChart
            data={data1}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <XAxis dataKey="localDate" padding={{ left: 30, right: 30 }} />
            <YAxis dataKey="rate" />
            <Tooltip
              contentStyle={{
                backgroundColor: "black",
                color: "white",
                borderRadius: 8,
                borderColor: "#8884d8",
              }}
            />
            <Line
              type="monotone"
              dataKey="rate"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line
              type="monotone"
              dataKey="localDate"
              stroke="#82ca9d"
              name="Date"
            />
          </LineChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={data3}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <XAxis dataKey="code" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="volume"
              fill="#8884d8"
              name="Volume"
              isAnimationActive={true}
              radius={[8, 8, 0, 0]}
            />
            <Bar
              dataKey="liquidity"
              fill="#82ca9d"
              name="Liquidity"
              isAnimationActive={true}
              radius={[8, 8, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </Container>
    </>
  );
}

export default App;
