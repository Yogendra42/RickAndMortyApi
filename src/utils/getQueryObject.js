export var query = function(currentQuery) {
    const queryArray = currentQuery.split('&');
    let queryObj = {};
    for(const element of queryArray){
      const filterArray = element.split('=');
      if(filterArray.length === 2) queryObj[filterArray[0]] = filterArray[1];
    }
    return queryObj;
  };
 
export const getQueryText = (currentQuery) => {
  let queryText ='';
  let counter = 0;
  for(const [key,value] of Object.entries(currentQuery)){
      queryText +=`${counter === 0 ? '':'&'}${key}=${value}`;
      counter += 1;
  }
  return queryText;
};