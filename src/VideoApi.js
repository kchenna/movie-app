import qwest from 'qwest';

const api = {
    baseUrl: 'https://chennakk.herokuapp.com/tamil/movies'
};


export const getVideos = (pageno) =>{

     return qwest.get(api.baseUrl, {
              page: pageno,
              ts : new Date().getTime()
          }, {
              cache:true
          })
          .then(function(xhr, resp) {
              return resp;
          });

};


export const getVideo = (url) =>{

     return qwest.get("https://chennakk.herokuapp.com/tamil/movie",{
         url:url
     },{
         cache:true
     })
          .then(function(xhr, resp) {
              return resp;
          });

};