import * as React from "react";
import Stack from "@mui/material/Stack";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import { BarChart } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts/ChartsAxis";
import { colors } from "@mui/material";

// type TickParamsSelectorProps = {
//   tickPlacement: "end" | "start" | "middle" | "extremities";
//   tickLabelPlacement: "tick" | "middle";
//   setTickPlacement: React.Dispatch<
//     React.SetStateAction<"end" | "start" | "middle" | "extremities">
//   >;
//   setTickLabelPlacement: React.Dispatch<
//     React.SetStateAction<"tick" | "middle">
//   >;
// };

// function TickParamsSelector({
//   tickPlacement,
//   tickLabelPlacement,
//   setTickPlacement,
//   setTickLabelPlacement,
// }: TickParamsSelectorProps) {
//   return (
//     <Stack
//       direction="column"
//       justifyContent="space-between"
//       sx={{ width: "100%" }}
//     >
//       <FormControl>
//         <FormLabel id="tick-placement-radio-buttons-group-label">
//           tickPlacement
//         </FormLabel>
//         <RadioGroup
//           row
//           aria-labelledby="tick-placement-radio-buttons-group-label"
//           name="tick-placement"
//           value={tickPlacement}
//           onChange={(event) =>
//             setTickPlacement(
//               event.target.value as "start" | "end" | "middle" | "extremities"
//             )
//           }
//         >
//           <FormControlLabel value="start" control={<Radio />} label="start" />
//           <FormControlLabel value="end" control={<Radio />} label="end" />
//           <FormControlLabel value="middle" control={<Radio />} label="middle" />
//           <FormControlLabel
//             value="extremities"
//             control={<Radio />}
//             label="extremities"
//           />
//         </RadioGroup>
//       </FormControl>
//       <FormControl>
//         <FormLabel id="label-placement-radio-buttons-group-label">
//           tickLabelPlacement
//         </FormLabel>
//         <RadioGroup
//           row
//           aria-labelledby="label-placement-radio-buttons-group-label"
//           name="label-placement"
//           value={tickLabelPlacement}
//           onChange={(event) =>
//             setTickLabelPlacement(event.target.value as "tick" | "middle")
//           }
//         >
//           <FormControlLabel value="tick" control={<Radio />} label="tick" />
//           <FormControlLabel value="middle" control={<Radio />} label="middle" />
//         </RadioGroup>
//       </FormControl>
//     </Stack>
//   );
// }

const dataset = [
  {
    london: 59,
    paris: 57,
    newYork: 86,
    seoul: 200,
    month: "Jan",
  },
  {
    london: 50,
    paris: 52,
    newYork: 78,
    seoul: 280,
    month: "Fev",
  },
  {
    london: 47,
    paris: 53,
    newYork: 106,
    seoul: 310,
    month: "Mar",
  },
  {
    london: 54,
    paris: 56,
    newYork: 22,
    seoul: 200,
    month: "Apr",
  },
  {
    london: 57,
    paris: 69,
    newYork: 92,
    seoul: 280,
    month: "May",
  },
  {
    london: 60,
    paris: 63,
    newYork: 103,
    seoul: 150,
    month: "June",
  },
  {
    london: 59,
    paris: 60,
    newYork: 105,
    seoul: 280,
    month: "July",
  },
  {
    london: 65,
    paris: 60,
    newYork: 106,
    seoul: 220,
    month: "Aug",
  },
  {
    london: 51,
    paris: 51,
    newYork: 95,
    seoul: 400,
    month: "Sept",
  },
  {
    london: 60,
    paris: 65,
    newYork: 97,
    seoul: 50,
    month: "Oct",
  },
  {
    london: 67,
    paris: 64,
    newYork: 76,
    seoul: 290,
    month: "Nov",
  },
  {
    london: 61,
    paris: 70,
    newYork: 103,
    seoul: 350,
    month: "Dec",
  },
];

const valueFormatter = (value: number | null) => `${value}mm`;

const chartSetting = {
  yAxis: [
    {
      label: "",
    },
  ],
  series: [{ dataKey: "seoul", valueFormatter }],
  height: 270,
  sx: {
    [`& .${axisClasses.directionY} .${axisClasses.label}`]: {
      transform: "translateX(-10px)",
    },
  },
};

export default function ApplicationInfoBarChart() {
  const [tickPlacement, setTickPlacement] = React.useState<
    "start" | "end" | "middle" | "extremities"
  >("middle");
  const [tickLabelPlacement, setTickLabelPlacement] = React.useState<
    "middle" | "tick"
  >("middle");

  return (
    <div>
      {/* <TickParamsSelector
        tickPlacement={tickPlacement}
        tickLabelPlacement={tickLabelPlacement}
        setTickPlacement={setTickPlacement}
        setTickLabelPlacement={setTickLabelPlacement}
      /> */}
      <BarChart
        dataset={dataset}
        // width={900}
        slotProps={{
          bar: {
            clipPath: `inset(0px round 5px 5px 0px 0px)`,
          },
        }}
        colors={["#277acc"]}
        xAxis={[
          {
            scaleType: "band",
            dataKey: "month",
            tickPlacement,
            tickLabelPlacement,
          },
        ]}
        {...chartSetting}
      />
    </div>
  );
}
