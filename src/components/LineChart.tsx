import React from 'react';
import { ResponsiveLine } from '@nivo/line';

const LineChart = ({ data }:any) => {

  return (
    <div style={{ height: '400px' }}>
      <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'time', format: '%Y-%m-%d' }}
        yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: false, reverse: false }}
        curve="linear"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          format: '%b %d',
          tickValues: 'every 1 month',
        }}
        axisLeft={{
          
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
        }}
        colors={{ scheme: 'category10' }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabel="y"
        pointLabelYOffset={-12}
        enableArea={true}
        enablePoints={false}
        useMesh={true}
        legends={[
          {
            anchor: 'top',
            direction: 'row',
            justify: false,
            translateX: 100,
            translateY: -50,
            itemsSpacing: 0,
            itemDirection: 'left-to-right',
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: 'square',
            symbolBorderColor: 'rgba(0, 0, 0, .5)',
            effects: [
              {
                on: 'hover',
                style: {
                  itemBackground: 'rgba(0, 0, 0, .03)',
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
};

export default LineChart;
