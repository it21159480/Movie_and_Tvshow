import React, { useEffect, useState } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
// import Feather from 'react-native-vector-icons/Feather'
function Movies({ navigation }) {
    const API_key = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYTNmMGRmMDRlMWE3MTBiZmYyNDE0YjJjNjk5ZGI5NSIsInN1YiI6IjY0ZmJmYzc4ZWZlYTdhMDBmZDE5NGQ1OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vjITkPseRhTMClOK1gPcW1AfAK7LGcbDQXbuv-n0FO8";

    const [movieData, setMovieData] = useState([]);
    const [numColumns, setNumColumns] = useState(2); // Default number of columns

    useEffect(() => {
        async function getMovieList() {
            const url = 'https://api.themoviedb.org/3/discover/movie?language=en-US&sort_by=popularity.desc&page=1&include_adult=false&include_video=false';
            try {
                const response = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${API_key}`,
                        'Accept': 'application/json'
                    }
                });
                const responseJson = await response.json();
                // console.log("API Response:", responseJson); // Debugging API response
                if (response.ok) {
                    setMovieData(responseJson.results);
                    // console.log("Updated State:", responseJson.results); // Debugging state update
                } else {
                    console.error('API error:', responseJson.status_message);
                }
            } catch (error) {
                console.error('Fetch error:', error);
            }
        }

        getMovieList();
    }, []);

    const handleMovie = (movie) => {
        navigation.navigate('MovieDetails', { movieId: movie.id });
    };

    const renderMovie = ({ item }) => (
        <TouchableOpacity style={styles.movieContainer} onPress={() => handleMovie(item)}>
            <ImageBackground style={styles.image} source={{ uri: 'https://image.tmdb.org/t/p/original/' + item.poster_path }}>
                <Text style={styles.title}>{item.title}</Text>
            </ImageBackground>
        </TouchableOpacity>
    );

    if (!movieData.length) {
        return (
            <View style={styles.centered}>
                <Text>Loading Movies...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            {/* <Feather name='film' color={'#980808'} size={35} /> */}
            <Text style={styles.header}>Movies Section</Text>
            <FlatList
                data={movieData}
                renderItem={renderMovie}
                keyExtractor={item => item.id.toString()}
                numColumns={numColumns}
                key={numColumns} // Ensure key prop is added for proper re-rendering
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    movieContainer: {
        width: '45%', // Ensure this to display two columns properly
        margin: 10,
        height: 250,
        borderRadius: 10,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
    },
    title: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'left',
        backgroundColor: 'rgba(0,0,0,0.5)', // Adding background for readability
        padding: 10,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 20,
    },
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default Movies;
