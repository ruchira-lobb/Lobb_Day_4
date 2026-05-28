import { renderHook, waitFor } from '@testing-library/react';
import { useApi } from '../hooks/useApi';

describe('useApi Hook', () => {
    beforeEach(() => {
        global.fetch = jest.fn(() => Promise.resolve({
            json: () => Promise.resolve({
                meals: [{ idMeal: '1', strMeal: 'Pizza' }],
            }),
        })) as jest.Mock;
    });

    test('initiate with loading state', async () => {
        const { result } = renderHook(() => useApi());
        expect(result.current.loading).toBe(true);
        await waitFor(() => expect(result.current.loading).toBe(false));
    });
    test('fetch data correctly', async () => {
        const { result } = renderHook(() => useApi());
        await waitFor(() => {
            expect(result.current.loading).toBe(false);
            expect(result.current.data.length).toBe(1);
            expect(result.current.data[0].strMeal).toBe('Pizza');
        });
    });
    test('handles error fetch correctly', async () => {
        (global.fetch as jest.Mock).mockImplementationOnce(() => Promise.reject(new Error('Network error')));
        const { result } = renderHook(() => useApi());
        await waitFor(() => {
            expect(result.current.loading).toBe(false);
            expect(result.current.error).toBe(true);
        })
    });
});
