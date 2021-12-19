/*
  INFOBOX:

    THIS COMPONENT HOUSES A SIMPLE BOX WITH TITLE + INFORMATION

*/

// Styling for the component
const styles={
  textAlign: 'center',
}

interface SimpleInformation {
  title: string;
  info: string;
}
  
function SimpleBoxInfo(props: SimpleInformation) {
  return (
    <div className='styles'>
      <h2>{props.title}</h2>
      <p>{props.info}</p>
    </div>
  )
}

export default SimpleBoxInfo