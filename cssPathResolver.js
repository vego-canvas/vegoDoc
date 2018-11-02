module.exports = function (source) {

  if (process.env.NODE_ENV === 'production') {
    //console.log(source)
   /* if(/_static\./.test(source)){
      console.log(`_static: ${source}`);
      return source
    }
    return source.replace('__webpack_public_path__ + "img', '"../img')*/
    return source
  } else {
    return source
  }

}
