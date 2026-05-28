import {screen, render, fireEvent} from '@testing-library/react-native';
import HomeScreen from '../screens/HomeScreen';

// Testing if the HomeScreen renders correctly
test('renders correctly', () => {
    const navigation = {} as any;
    const route = {} as any;

    render(<HomeScreen navigation={navigation} route={route} />);
})

// 