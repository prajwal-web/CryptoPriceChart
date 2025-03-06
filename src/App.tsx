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
  Rectangle,
} from "recharts";

function App() {
  const { data } = useFetchApi();
  console.log(data);

  return (
    <>
      <Container maxWidth="lg">
        <Typography variant="h5" component="h2" gutterBottom align="center">
          Volume and Rate Overview
        </Typography>

        <ResponsiveContainer width={"100%"} height={300}>
          <LineChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <XAxis dataKey="code" padding={{ left: 30, right: 30 }} />
            <YAxis />
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
              dataKey="volume"
              stroke="#82ca9d"
              name="Volume"
            />
          </LineChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={data}
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
              dataKey="cap"
              fill="#8884d8"
              activeBar={<Rectangle fill="pink" stroke="blue" />}
            />
            <Bar
              dataKey="volume"
              fill="#82ca9d"
              name="Volume"
              activeBar={<Rectangle fill="gold" stroke="purple" />}
            />
          </BarChart>
        </ResponsiveContainer>
      </Container>
    </>
  );
}

export default App;
