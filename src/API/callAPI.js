const axios = require('axios')

export const getGenres = async () => {
    let listGenres
    await axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=1e2d3e04a46a4b641682a83ebd1b0bf1&language=en-US')
        .then(res => {
            listGenres = res.data
        }).catch(err => console.log(err))

    return listGenres
}

export const getBanners = async () => {
    let listBanners
    await axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=1e2d3e04a46a4b641682a83ebd1b0bf1&language=en-US&page=1')
        .then(res => {
            listBanners = res.data
        }).catch(err => console.log(err))

    return listBanners
}