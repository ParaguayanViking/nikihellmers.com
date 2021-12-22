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
  return (
    <div className={styles.wrapper}>
      <div>
        <h2>{props.title}</h2>
      </div>
      <div>
        <p>{props.info}</p>
      </div>
    </div>
  )
}

export default SimpleBoxInfo