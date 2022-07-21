import Card from 'common/components/Card';
import { Separator } from 'common/components/List';
import styles from 'common/styles';
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const chartLabels = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const History = () => {
  const { width } = useWindowDimensions();
  const chartData = [
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
  ];

  return (
    <View style={style.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Card>
          <View style={[styles.rowBetween]}>
            <View>
              <Text style={style.title}>15 June 022</Text>
              <Text style={style.smallGray}>10:20 pm</Text>
            </View>
            <Text style={[style.status, { color: 'rgba(37, 196, 12,1)' }]}>
              Completed
            </Text>
          </View>
          <Separator style={{ marginVertical: 15 }} />
          <View style={style.textContainer}>
            <Text style={style.title}>KCC Charging Station</Text>
            <Text style={style.smallGray}>KG 2, Roundabout Kigali</Text>
          </View>
          <View style={[styles.rowBetween, style.bottomBanner]}>
            <Text style={style.smallGray}>2h 00min</Text>
            <Text style={style.smallGray}>4.8kWh</Text>
            <Text style={{}}>100,000</Text>
          </View>
        </Card>
        <Card containerStyle={{ marginVertical: 12 }}>
          <ScrollView
            // style={{ borderRadius: 5, backgroundColor: 'gray' }}
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            <LineChart
              data={{
                labels: chartLabels,
                datasets: [{ data: chartData }],
              }}
              width={width}
              height={180}
              yAxisLabel="$"
              yAxisSuffix="k"
              yAxisInterval={1}
              chartConfig={{
                backgroundColor: 'white',
                backgroundGradientFrom: 'white',
                backgroundGradientTo: 'white',
                propsForBackgroundLines: { stroke: 'none' },
                decimalPlaces: 0,
                color: () => 'black',
                labelColor: () => 'black',
                propsForDots: { r: '5', strokeWidth: '2', stroke: 'white' },
              }}
              bezier
            />
          </ScrollView>
        </Card>
        <Card>
          <View style={[styles.rowBetween]}>
            <View>
              <Text style={style.title}>12 February 2022</Text>
              <Text style={style.smallGray}>05:30 pm</Text>
            </View>
            <Text style={[style.status, { color: 'rgba(220, 99, 93,1)' }]}>
              Canceled
            </Text>
          </View>
          <Separator style={{ marginVertical: 15 }} />
          <View style={{ justifyContent: 'center' }}>
            <Text style={style.title}>KCT Charging Station</Text>
            <Text style={style.smallGray}>KN 1</Text>
          </View>
          <View style={[styles.rowBetween, style.bottomBanner]}>
            <Text style={style.smallGray}>- min</Text>
            <Text style={style.smallGray}>- kWh</Text>
            <Text style={{ color: 'rgba(47,104,239,1)' }}>$-</Text>
          </View>
        </Card>
      </ScrollView>
    </View>
  );
};

export default History;

const style = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'rgba(200, 200, 200, 1)',
    padding: 10,
    maxHeight: 480,
  },
  title: { fontWeight: '600', fontSize: 12, marginBottom: 8 },
  status: { fontSize: 11, fontWeight: '600' },
  smallGray: { color: 'gray', fontSize: 11 },
  textContainer: { justifyContent: 'center', marginBottom: 12 },
  bottomBanner: {
    backgroundColor: 'rgba(242,242,242,1)',
    borderRadius: 5,
    padding: 12,
  },
});
