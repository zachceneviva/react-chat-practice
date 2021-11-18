import ChatList from "../components/ChatList";
import ChatArea from "../components/ChatArea";
import styles from "../styles/Chat.module.scss";



export default function Chat () {
    return (
        <div className={styles.chatBody}>
            <ChatList/>
            <ChatArea />
        </div>
    )
}