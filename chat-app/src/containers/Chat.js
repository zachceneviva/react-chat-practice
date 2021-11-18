import ChatList from "../components/ChatList";
import styles from "../styles/Chat.module.scss"


export default function Chat () {
    return (
        <div className={styles.chatBody}>
            <ChatList/>
        </div>
    )
}