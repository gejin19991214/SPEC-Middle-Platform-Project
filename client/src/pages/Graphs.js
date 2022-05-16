import React from "react";
// import CircularProgress from "@mui/material/CircularProgress";
// import Box from "@mui/material/Box";
import { ResponsiveTreeMap } from "@nivo/treemap";
import { ResponsivePie } from "@nivo/pie";
import "./Graphs.css";

const data1 = {
  name: "jbb2015 Critical-jOPS",
  color: "hsl(292, 70%, 50%)",
  children: [
    {
      name: "China",
      color: "hsl(171, 70%, 50%)",
      children: [
        {
          name: "Huawei",
          color: "hsl(239, 70%, 50%)",
          children: [
            {
              name: "Huawei1",
              color: "hsl(281, 70%, 50%)",
              loc: 348700,
            },
            {
              name: "Huawei2",
              color: "hsl(87, 70%, 50%)",
              loc: 220422,
            },
            {
              name: "Huawei3",
              color: "hsl(245, 70%, 50%)",
              loc: 213248,
            },
            {
              name: "Huawei4",
              color: "hsl(248, 70%, 50%)",
              loc: 203519,
            },
          ],
        },
        {
          name: "Inspur",
          color: "hsl(17, 70%, 50%)",
          children: [
            {
              name: "Inspur1",
              color: "hsl(233, 70%, 50%)",
              loc: 251613,
            },
            {
              name: "Inspur2",
              color: "hsl(2, 70%, 50%)",
              loc: 217954,
            },
          ],
        },
        {
          name: "H3C",
          color: "hsl(117, 70%, 50%)",
          children: [
            {
              name: "H3C1",
              color: "hsl(203, 70%, 50%)",
              loc: 230175,
            },
            {
              name: "H3C2",
              color: "hsl(29, 70%, 50%)",
              loc: 228957,
            },
          ],
        },
        {
          name: "Gigabyte",
          color: "hsl(7, 70%, 50%)",
          children: [
            {
              name: "Gigabyte1",
              color: "hsl(3, 70%, 50%)",
              loc: 329073,
            },
            {
              name: "Gigabyte2",
              color: "hsl(17, 70%, 50%)",
              loc: 309726,
            },
          ],
        },
        {
          name: "Taiwan Province",
          color: "hsl(221, 70%, 50%)",
          children: [
            {
              name: "ASUS",
              color: "hsl(309, 70%, 50%)",
              children: [
                {
                  name: "ASUS1",
                  color: "hsl(51, 70%, 50%)",
                  loc: 357221,
                },
                {
                  name: "ASUS2",
                  color: "hsl(233, 70%, 50%)",
                  loc: 329839,
                },
                {
                  name: "ASUS3",
                  color: "hsl(267, 70%, 50%)",
                  loc: 313824,
                },
              ],
            },
            {
              name: "QCT",
              color: "hsl(177, 70%, 50%)",
              children: [
                {
                  name: "QCT1",
                  color: "hsl(188, 70%, 50%)",
                  loc: 301364,
                },
                {
                  name: "QCT2",
                  color: "hsl(199, 70%, 50%)",
                  loc: 201364,
                },
                {
                  name: "QCT1",
                  color: "hsl(208, 70%, 50%)",
                  loc: 153139,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Japan",
      color: "hsl(307, 70%, 50%)",
      children: [
        {
          name: "Fujitsu",
          color: "hsl(107, 70%, 50%)",
          children: [
            {
              name: "Fujitsu1",
              color: "hsl(107, 70%, 50%)",
              loc: 278958,
            },
            {
              name: "Fujitsu2",
              color: "hsl(67, 70%, 50%)",
              loc: 267858,
            },
            {
              name: "Fujitsu3",
              color: "hsl(32, 70%, 50%)",
              loc: 224535,
            },
            {
              name: "Fujitsu4",
              color: "hsl(277, 70%, 50%)",
              loc: 207097,
            },
          ],
        },
      ],
    },
    {
      name: "USA",
      color: "hsl(188, 70%, 50%)",
      children: [
        {
          name: "HP",
          color: "hsl(47, 70%, 50%)",
          children: [
            {
              name: "HP1",
              color: "hsl(64, 70%, 50%)",
              loc: 579234,
            },
            {
              name: "HP2",
              color: "hsl(29, 70%, 50%)",
              loc: 557903,
            },
            {
              name: "HP3",
              color: "hsl(92, 70%, 50%)",
              loc: 549657,
            },
            {
              name: "HP4",
              color: "hsl(9, 70%, 50%)",
              loc: 529205,
            },
          ],
        },
        {
          name: "IBM",
          color: "hsl(29, 70%, 50%)",
          loc: 151131,
        },
        {
          name: "Inspur",
          color: "hsl(10, 70%, 50%)",
          children: [
            {
              name: "Inspur1",
              color: "hsl(207, 70%, 50%)",
              loc: 251613,
            },
            {
              name: "Inspur2",
              color: "hsl(72, 70%, 50%)",
              loc: 217954,
            },
            {
              name: "Inspur3",
              color: "hsl(29, 70%, 50%)",
              loc: 213260,
            },
            {
              name: "Inspur4",
              color: "hsl(348, 70%, 50%)",
              loc: 208197,
            },
          ],
        },
        {
          name: "Dell",
          color: "hsl(67, 70%, 50%)",
          children: [
            {
              name: "Dell1",
              color: "hsl(322, 70%, 50%)",
              loc: 334509,
            },
            {
              name: "Dell2",
              color: "hsl(152, 70%, 50%)",
              loc: 296508,
            },
            {
              name: "Dell3",
              color: "hsl(42, 70%, 50%)",
              loc: 220821,
            },
            {
              name: "Dell4",
              color: "hsl(184, 70%, 50%)",
              loc: 211780,
            },
          ],
        },
        {
          name: "Super Micro",
          color: "hsl(233, 70%, 50%)",
          children: [
            {
              name: "Super Micro1",
              color: "hsl(302, 70%, 50%)",
              loc: 2996420,
            },
            {
              name: "Super Micro2",
              color: "hsl(212, 70%, 50%)",
              loc: 2561040,
            },
          ],
        },
      ],
    },
  ],
};

const data2 = [
  {
    id: "ThinkSystem",
    label: "ThinkSystem",
    value: 958,
    color: "hsl(298, 70%, 50%)",
  },
  {
    id: "Cisco",
    label: "Cisco",
    value: 774,
    color: "hsl(43, 70%, 50%)",
  },
  {
    id: "Lenovo",
    label: "Lenovo",
    value: 595,
    color: "hsl(114, 70%, 50%)",
  },
  {
    id: "ProLiant",
    label: "ProLiant",
    value: 968,
    color: "hsl(3, 70%, 50%)",
  },
  {
    id: "MotherBoard",
    label: "MotherBoard",
    value: 1070,
    color: "hsl(38, 10%, 50%)",
  },
  {
    id: "PowerEdge",
    label: "PowerEdge",
    value: 2353,
    color: "hsl(36, 70%, 50%)",
  },
  {
    id: "ASUS",
    label: "ASUS",
    value: 404,
    color: "hsl(96, 70%, 50%)",
  },
  {
    id: "Synergy",
    label: "Synergy",
    value: 53,
    color: "hsl(164, 70%, 50%)",
  },
  {
    id: "Huawei",
    label: "Huawei",
    value: 2225,
    color: "hsl(109, 10%, 50%)",
  },
  {
    id: "IBM",
    label: "IBM",
    value: 1070,
    color: "hsl(59, 10%, 50%)",
  },
  {
    id: "NovaScale",
    label: "NovaScale",
    value: 1070,
    color: "hsl(199, 10%, 50%)",
  },
  {
    id: "Acer",
    label: "Acer",
    value: 1070,
    color: "hsl(139, 10%, 50%)",
  },
];

const Graphs = () => {
  // const [isTimerRunning, setIsTimerRunning] = useState(true);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsTimerRunning(false);
  //   }, 1500);
  // }, []);
  return (
    <div className="graphs">
      {/* {isTimerRunning ? (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      ) : (
        <ResponsiveTreeMap
          data={data1}
          identity="name"
          value="loc"
          valueFormat=".02s"
          margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
          labelSkipSize={12}
          labelTextColor={{
            from: "color",
            modifiers: [["darker", 1.2]],
          }}
          parentLabelPosition="left"
          parentLabelTextColor={{
            from: "color",
            modifiers: [["darker", 2]],
          }}
          borderColor={{
            from: "color",
            modifiers: [["darker", 0.1]],
          }}
        />
      )} */}
        <ResponsiveTreeMap
          data={data1}
          identity="name"
          value="loc"
          valueFormat=".02s"
          margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
          labelSkipSize={12}
          labelTextColor={{
            from: "color",
            modifiers: [["darker", 1.2]],
          }}
          parentLabelPosition="left"
          parentLabelTextColor={{
            from: "color",
            modifiers: [["darker", 2]],
          }}
          borderColor={{
            from: "color",
            modifiers: [["darker", 0.1]],
          }}
        />
        <ResponsivePie
          data={data2}
          margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
          innerRadius={0.5}
          padAngle={0.7}
          cornerRadius={3}
          activeOuterRadiusOffset={8}
          borderWidth={1}
          borderColor={{
            from: "color",
            modifiers: [["darker", 0.2]],
          }}
          arcLinkLabelsSkipAngle={10}
          arcLinkLabelsTextColor="#333333"
          arcLinkLabelsThickness={2}
          arcLinkLabelsColor={{ from: "color" }}
          arcLabelsSkipAngle={10}
          arcLabelsTextColor={{
            from: "color",
            modifiers: [["darker", 2]],
          }}
          defs={[
            {
              id: "dots",
              type: "patternDots",
              background: "inherit",
              color: "rgba(255, 255, 255, 0.3)",
              size: 4,
              padding: 1,
              stagger: true,
            },
            {
              id: "lines",
              type: "patternLines",
              background: "inherit",
              color: "rgba(255, 255, 255, 0.3)",
              rotation: -45,
              lineWidth: 6,
              spacing: 10,
            },
          ]}
          fill={[
            {
              match: {
                id: "NovaScale",
              },
              id: "dots",
            },
            {
              match: {
                id: "IBM",
              },
              id: "dots",
            },
            {
              match: {
                id: "Huawei",
              },
              id: "dots",
            },
            {
              match: {
                id: "ASUS",
              },
              id: "dots",
            },
            {
              match: {
                id: "ProLiant",
              },
              id: "lines",
            },
            {
              match: {
                id: "Lenovo",
              },
              id: "lines",
            },
            {
              match: {
                id: "ThinkSystem",
              },
              id: "lines",
            },
            {
              match: {
                id: "Synergy",
              },
              id: "lines",
            },
          ]}
          legends={[
            {
              anchor: "bottom",
              direction: "row",
              justify: false,
              translateX: 0,
              translateY: 56,
              itemsSpacing: 0,
              itemWidth: 100,
              itemHeight: 18,
              itemTextColor: "#999",
              itemDirection: "left-to-right",
              itemOpacity: 1,
              symbolSize: 18,
              symbolShape: "circle",
              effects: [
                {
                  on: "hover",
                  style: {
                    itemTextColor: "#000",
                  },
                },
              ],
            },
          ]}
        />
    </div>
  );
};

export default Graphs;
