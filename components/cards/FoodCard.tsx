import { Image, StyleSheet, Text, View } from "react-native";

type Props = { meal: { idMeal: string; strMeal: string; strCategory: any; strMealThumb: string; dateModified: string }; };

export const FoodCard = ({ meal }: Props) => {
    return (
        <View style={styles.card}>
            <Image
                testID="meal-image"
                source={{ uri: meal.strMealThumb }}
                style={styles.image}
            />
            <View style={styles.content}>
                <Text style={styles.mealName} numberOfLines={1}>
                    {meal.strMeal || 'Unknown Meal'}
                </Text>
                <Text style={styles.category}>
                    {meal.strCategory || 'Unknown Category'}
                </Text>
                <Text style={styles.date}>
                    {meal.dateModified || 'Unknown Date'}
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        overflow: 'hidden',
        marginBottom: 12,
        shadowRadius: 4,
        elevation: 3,
    },
    image: {
        width: '100%',
        height: 150,
        backgroundColor: '#f0f0f0',
    },
    content: {
        padding: 10,
    },
    mealName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
        marginBottom: 4,
    },
    category: {
        fontSize: 12,
        color: '#666',
        marginBottom: 6,
    },
    date: {
        fontSize: 10,
        color: '#999',
    },
});