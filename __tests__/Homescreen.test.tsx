import {screen, render, waitFor} from '@testing-library/react-native';
import HomeScreen from '../screens/HomeScreen';

const mockNavigation = { navigate: jest.fn() } as any;
const mockRoute = {} as any;

describe('HomeScreen - useApi Hook Integration', () => {
    test('POSITIVE CASE 1: API call succeeds - should show loading state initially', () => {
        render(<HomeScreen navigation={mockNavigation} route={mockRoute} />);
        expect(screen.getByTestId('loading-indicator')).toBeTruthy();
    });

    test('POSITIVE CASE 1: API call succeeds - should fetch and render food cards after API call', async () => {
        render(<HomeScreen navigation={mockNavigation} route={mockRoute} />);
        
        await waitFor(() => {
            expect(screen.queryByTestId('loading-indicator')).toBeFalsy();
        }, { timeout: 5000 });
        
        expect(screen.getAllByTestId('food-card')).toBeTruthy();
    });

    test('POSITIVE CASE 1: API call succeeds - should display FlatList with data', async () => {
        render(<HomeScreen navigation={mockNavigation} route={mockRoute} />);
        
        await waitFor(() => {
            expect(screen.getByTestId('food-list')).toBeTruthy();
        }, { timeout: 5000 });
    });
});
