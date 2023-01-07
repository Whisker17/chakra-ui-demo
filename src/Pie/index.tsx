import { Box, Flex, HStack, Text, VStack, Link } from "@chakra-ui/layout";
import { useTheme } from "@emotion/react";
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from "chart.js";
import type { FC } from "react";
import { Pie } from "react-chartjs-2";
import { borderColors, colors } from "../../utils/colors";
import { data } from "./data";
import autocolors from "chartjs-plugin-autocolors";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(ArcElement, Tooltip, Legend, autocolors, ChartDataLabels);

const PiePaper: FC = () => {
  const theme = useTheme();

  return (
    <Flex height={700} mt={100}>
      <Pie
        options={{
          responsive: true,
          maintainAspectRatio: false,
          elements: {
            point: {
              radius: 0,
            },
          },
          hover: {
            mode: "nearest",
            intersect: true,
          },
          plugins: {
            tooltip: {
              mode: "index",
              intersect: false,
            },
            filler: {
              propagate: true,
            },
            legend: {
              display: false,
            },
            autocolors: {
              mode: "data",
              offset: 5,
            },
            datalabels: {
              color: "#FFCE56",
              anchor: "end",
            },
          },
        }}
        data={{
          labels: data.map((markets) => markets.tag),
          datasets: [
            {
              data: data.map((markets) => markets.count),
              hoverOffset: 20,
            },
          ],
        }}
      />
    </Flex>
  );
};

export default PiePaper;
