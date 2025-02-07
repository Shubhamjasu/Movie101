export default async function fetchMovieData ( url ){
    let result  = []
    try {
        const response = await fetch(url)
        if(response.status == 200) {
            result = await response.json()
        } else{
            result = {
                status: response.status,
                data: [],
                error: `(${response.status}) ${response.statusText}`
            }
        }
    } catch( err){
        throw err;
    }
    return result
}