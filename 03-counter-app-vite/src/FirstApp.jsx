import PropTypes from "prop-types";


export const FirstApp = ( {title, subTitle, name} ) => {

 // console.log (props);
 if (!title) {
  throw new Error ('El title no existe');
 }

  return (
      <> 
      <h1>{title}</h1>
      {/* <code> {JSON.stringify (newMessage)} </code> */}
      <p> {subTitle}</p>
      <p> {name} </p>
      </>
      
    )
  }

  FirstApp.propTypes = { 
     title: PropTypes.string.isRequired,
     subTitle: PropTypes.number,
  }; 

  FirstApp.defaultProps = {
    title: 'No hay Titulo',
    subTitle: 'No hay subtitulo',
    name: 'Yoisy'
  }