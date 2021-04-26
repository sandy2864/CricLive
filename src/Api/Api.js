const API_KEY="bP69ZOJzxITV2gm8BAE09blZCz43"

export const getMatches=()=>{
   const url=`https://cricapi.com/api/matches?apikey=${API_KEY}`;
   
   return fetch(url)
   .then((response) =>response.json())
   .catch((error) =>console.log("Error",error));
};

export const getMatchDetail=(id)=>{
   const url=`https://cricapi.com/api/cricketScore?apikey=${API_KEY}&unique_id=${id}`;
   return fetch(url)
   .then((response)=>response.json())
   .catch(error=>console.log(error));
};