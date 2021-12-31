/*
  INFOBOX:

    THIS COMPONENT HOUSES A SIMPLE BOX WITH TITLE + INFORMATION

*/
import styles from './SimpleBoxInfo.module.css'
// Styling for the component

interface SimpleInformation {
  title: string;
  info: string;
}
  
function SimpleBoxInfo(props: SimpleInformation) {
  
  if(props.title) {
    return (
      <div className={styles.wrapper}>
          <h2>{props.title}</h2>
          <p>{props.info}</p>
      </div>
    )
  } else {
    return (
      <div className={styles.wrapper}>
          <p>{props.info}</p>
      </div>
    )
  }
}

export default SimpleBoxInfo