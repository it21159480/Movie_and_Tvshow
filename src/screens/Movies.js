import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

function Movies({ navigation }) {
    const API_key = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYTNmMGRmMDRlMWE3MTBiZmYyNDE0YjJjNjk5ZGI5NSIsInN1YiI6IjY0ZmJmYzc4ZWZlYTdhMDBmZDE5NGQ1OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vjITkPseRhTMClOK1gPcW1AfAK7LGcbDQXbuv-n0FO8"; // Insert your actual API Key here
    
    const [movieData, setMovieData] = useState([]);

    useEffect(() => {
        getMovieList();
    }, []);

    const getMovieList = async () => {
        const url = 'https://api.themoviedb.org/3/discover/movie?language=en-US&sort_by=popularity.desc&page=1&include_adult=false&include_video=false';
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Authorization': API_key,  // Replace YOUR_API_KEY with your actual API key
                    'Accept': 'application/json'
                }
            });
            const responseJson = await response.json();
            if (response.ok) {
                setMovieData(responseJson.results);  // Assumes setMovieData is a useState setter function
            } else {
                console.error('API error:', responseJson.status_message);
            }
        } catch (error) {
            console.error('Fetch error:', error);
        }
    };
    
    

    const handleMovie = (movie) => {
        // Assuming you have a 'MovieDetails' screen in your navigation stack
        navigation.navigate('MovieDetails', { movieId: movie.id });
    };

    const renderMovie = ({ item }) => (
        <TouchableOpacity style={styles.movieContainer} onPress={() => handleMovie(item)}>
           <Image style={styles.image} source={{ uri: 'https://image.tmdb.org/t/p/original/' + item.poster_path }} />
            <Text style={styles.title}>{item.title}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Movies Section</Text>
            <FlatList
                data={movieData}
                renderItem={renderMovie}
                keyExtractor={item => item.id.toString()}
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
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color:'black'
    }
});

export default Movies;
