import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

function TVShows() {
    const API_key = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYTNmMGRmMDRlMWE3MTBiZmYyNDE0YjJjNjk5ZGI5NSIsInN1YiI6IjY0ZmJmYzc4ZWZlYTdhMDBmZDE5NGQ1OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vjITkPseRhTMClOK1gPcW1AfAK7LGcbDQXbuv-n0FO8";
    const url = `https://api.themoviedb.org/3/discover/tv?api_key=${API_key}&language=en-US&sort_by=popularity.desc`;
    
    const [tvShows, setTvShows] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchTvShows();
    }, []);

    const fetchTvShows = async () => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            setTvShows(data.results);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching TV shows:', error);
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <View style={styles.centered}>
                <Text>Loading TV Shows...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>TV Shows Section</Text>
            <FlatList
                data={tvShows}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                          <Image style={styles.image} source={{ uri: 'https://image.tmdb.org/t/p/original/' + item.poster_path }} />
                        <Text style={styles.title}>{item.name}</Text>
                    </View>
                )}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    header: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    item: {
        marginBottom: 10,
        padding: 10,
        backgroundColor: '#f0f0f0',
    },
    title: {
        fontSize: 18,
    },
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default TVShows;
