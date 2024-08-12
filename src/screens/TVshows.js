import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

function TVShows() {
    const API_key = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYTNmMGRmMDRlMWE3MTBiZmYyNDE0YjJjNjk5ZGI5NSIsInN1YiI6IjY0ZmJmYzc4ZWZlYTdhMDBmZDE5NGQ1OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vjITkPseRhTMClOK1gPcW1AfAK7LGcbDQXbuv-n0FO8"; // Insert your actual API Key here


    const [tvShows, setTvShows] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getTvShowsList();
    }, []);

    const getTvShowsList = async () => {
        const url = 'https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc';
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + API_key // Ensure the correct API key is concatenated
                }
            });
            const responseJson = await response.json();
            if (response.ok) {
                setTvShows(responseJson.results); // Update state with response data
            } else {
                console.error('API error:', responseJson.status_message);
            }
        } catch (error) {
            console.error('Fetch error:', error);
        }
    };

    // if (loading) {
    //     return (
    //         <View style={styles.centered}>
    //             <Text>Loading TV Shows...</Text>
    //         </View>
    //     );
    // }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>TV Shows Section</Text>
            <FlatList
                data={tvShows}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.movieContainer} onPress={() => handleMovie(item)}>
                        <Image style={styles.image} source={{ uri: 'https://image.tmdb.org/t/p/original/' + item.poster_path }} />
                        <Text style={styles.title}>{item.name}</Text>
                    </TouchableOpacity>
                )}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    movieContainer: {
        
        flexDirection: 'column',
        padding: 10,
        alignItems: 'center'
    },
    image: {
        width: 100,
        height: 150,
        marginRight: 20
    },
    title: {
        fontSize: 18
    },
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
