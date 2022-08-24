import Image from "next/image";
import styles from "../styles/About.module.css";

export default function About(){
    return(
        <div className={styles.about}>
            <h1>Sobre o projeto</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet fermentum enim ac sagittis. Sed feugiat ornare tempus. Donec placerat vehicula nisl, a sollicitudin tellus viverra ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tristique nunc in congue tincidunt. Duis molestie 
                sapien eget iaculis luctus. Nullam tempor lorem ac sapien aliquet dignissim.</p>
            <Image src="/images/charizard.png" width="300" height="300" alt="Carizard" />
        </div>
    )
}