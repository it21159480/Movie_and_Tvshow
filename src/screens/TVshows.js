// import React, { useEffect, useState } from 'react';
// import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

// function TVShows() {
//     const API_key = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYTNmMGRmMDRlMWE3MTBiZmYyNDE0YjJjNjk5ZGI5NSIsInN1YiI6IjY0ZmJmYzc4ZWZlYTdhMDBmZDE5NGQ1OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vjITkPseRhTMClOK1gPcW1AfAK7LGcbDQXbuv-n0FO8"; // Insert your actual API Key here


//     const [tvShows, setTvShows] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         getTvShowsList();
//     }, []);

//     const getTvShowsList = async () => {
//         const url = 'https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc';
//         try {
//             const response = await fetch(url, {
//                 method: 'GET',
//                 headers: {
//                     'Accept': 'application/json',
//                     'Authorization': 'Bearer ' + API_key // Ensure the correct API key is concatenated
//                 }
//             });
//             const responseJson = await response.json();
//             if (response.ok) {
//                 setTvShows(responseJson.results); // Update state with response data
//             } else {
//                 console.error('API error:', responseJson.status_message);
//             }
//         } catch (error) {
//             console.error('Fetch error:', error);
//         }
//     };

//     // if (loading) {
//     //     return (
//     //         <View style={styles.centered}>
//     //             <Text>Loading TV Shows...</Text>
//     //         </View>
//     //     );
//     // }

//     return (
//         <View style={styles.container}>
//             <Text style={styles.header}>TV Shows Section</Text>
//             <FlatList
//                 data={tvShows}
//                 renderItem={({ item }) => (
//                     <TouchableOpacity style={styles.movieContainer} onPress={() => handleMovie(item)}>
//                         <Image style={styles.image} source={{ uri: 'https://image.tmdb.org/t/p/original/' + item.poster_path }} />
//                         <Text style={styles.title}>{item.name}</Text>
//                     </TouchableOpacity>
//                 )}
//                 keyExtractor={item => item.id.toString()}
//             />
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     movieContainer: {

//         flexDirection: 'column',
//         padding: 10,
//         alignItems: 'center'
//     },
//     image: {
//         width: 100,
//         height: 150,
//         marginRight: 20
//     },
//     title: {
//         fontSize: 18
//     },
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     header: {
//         fontSize: 24,
//         fontWeight: 'bold',
//         marginBottom: 20,
//         color:'black'
//     },
//     item: {
//         marginBottom: 10,
//         padding: 10,
//         backgroundColor: '#f0f0f0',
//     },
//     title: {
//         fontSize: 18,
//     },
//     centered: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     }
// });

// export default TVShows;
import React, { useEffect, useState } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

function TVShows() {
    const API_key = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYTNmMGRmMDRlMWE3MTBiZmYyNDE0YjJjNjk5ZGI5NSIsInN1YiI6IjY0ZmJmYzc4ZWZlYTdhMDBmZDE5NGQ1OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vjITkPseRhTMClOK1gPcW1AfAK7LGcbDQXbuv-n0FO8"; // Insert your actual API Key here

    const [tvShows, setTvShows] = useState([]);
    const [numColumns, setNumColumns] = useState(2); // Default number of columns

    useEffect(() => {
        getTvShowsList();
    }, []);

    const getTvShowsList = async () => {
        const url = 'https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc';
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${API_key}`,
                    'Accept': 'application/json'
                }
            });
            const responseJson = await response.json();
            if (response.ok) {
                setTvShows(responseJson.results);
            } else {
                console.error('API error:', responseJson.status_message);
            }
        } catch (error) {
            console.error('Fetch error:', error);
        }
    };
    const handleTVShow = (tvShow) => {
        // Assume you have a 'TVShowDetails' screen in your navigation stack
        navigation.navigate('TVShowDetails', { tvShowId: tvShow.id });
    };

    const renderTVShow = ({ item }) => (
        <TouchableOpacity style={styles.movieContainer} onPress={() => handleTVShow(item)}>
            <ImageBackground style={styles.image} source={{ uri: 'https://image.tmdb.org/t/p/original/' + item.poster_path }}>
                <Text style={styles.title}>{item.name}</Text>
            </ImageBackground>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <View style={{alignItems:'center'}}>
                <Text style={styles.header}>TV Shows Section</Text>
            </View>

            <FlatList
                data={tvShows}
                renderItem={renderTVShow}
                numColumns={numColumns}
                key={numColumns} // Adding key prop to ensure re-rendering when changing columns
                keyExtractor={item => item.id.toString()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    movieContainer: {
        flex: 1,
        margin: 10,
        height: 250,
        overflow: 'hidden',
        borderRadius: 10,
    },
    image: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end', // Positions the title at the bottom of the image
    },
    title: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'left',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background for better readability
        padding: 10,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
    }
});

export default TVShows;
