import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import type {
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

import type {
  RootStackParamList,
} from '../navigation/RootNavigator';

import { useApi } from '../hooks/useApi';

import { FoodCard } from '../components/cards/FoodCard';

type Props = NativeStackScreenProps<
  RootStackParamList,
  'Home'
>;

export default function HomeScreen({
  navigation,
}: Props) {

  const {
    loading,
    data,
    error,
  } = useApi();

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator
          testID="loading-indicator"
          size="large"
        />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text>
          Something went wrong
        </Text>
      </View>
    );
  }

  if (data.length === 0) {
    return (
      <View style={styles.center}>
        <Text>
          No food items found
        </Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>

      <FlatList
        testID="food-list"
        data={data}
        keyExtractor={(item) => item.idMeal}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (

          <View testID="food-card">
            <FoodCard meal={item} />
          </View>

        )}
      />

    </SafeAreaView>
  );

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },

  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

});

