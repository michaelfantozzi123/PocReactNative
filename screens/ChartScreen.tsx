import React from 'react';
import { PieChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

type Props = {}

const ChartScreen = (props: Props) => {
  const screenWidth = Dimensions.get('window').width;

  const chartConfig = {
    backgroundGradientFrom: '#1E2923',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#08130D',
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2,
    barPercentage: 0.5,
  };

  const data = [
    { name: 'Seoul', population: 21500000, color: 'rgba(131, 167, 234, 1)', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Toronto', population: 2800000, color: '#F00', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Beijing', population: 527612, color: 'red', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'New Delhi', population: 1050000000, color: 'rgba(0, 0, 255, 1)', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'London', population: 93000000, color: 'rgba(0, 255, 0, 1)', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'New York', population: 8337000, color: 'rgba(255, 0, 0, 1)', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  ];

  return (
    <PieChart
      data={data}
      width={screenWidth}
      height={220}
      chartConfig={chartConfig}
      accessor="population"
      backgroundColor="transparent"
      paddingLeft="15"
      absolute
    />
  );
}

export default ChartScreen
