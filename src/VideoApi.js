import qwest from 'qwest';

export const getVideos = (url) =>{

     return qwest.get(url, {}, {
              cache:true
          })
          .then(function(xhr, resp) {
              return resp;
          });

};


export const getMovieUrl = (playUrl,referredUrl) =>{

    var request = new Request('http://spsenthil.com:8080/movie/tamil/source', {
	method: 'POST', 
	mode: 'cors',
    headers: new Headers({'content-type': 'application/json'}),
    body: JSON.stringify({playUrl:playUrl,referredUrl:referredUrl})
});

    return fetch(request).then(function(resp) { 
        return (resp.text());
     });
     /*return qwest.post("http://localhost:8080/tamil/movie",{
         playUrl:playUrl,
         referredUrl:referredUrl
     })
          .then(function(xhr, resp) {
              return resp;
          })*/

};
