import styles from "../styles/ChatList.module.scss"

export default function ChatList () {
    return (
        <div className={styles.allChats}>
            <h1>All Chats</h1>
            <div className={styles.chatCard}>
                <div className={styles.chatUserImage}>
                    <img src="https://iupac.org/wp-content/uploads/2018/05/default-avatar.png" alt="user" />
                </div>
                <div className={styles.chatUserName}>
                    <h4>Zach Ceneviva</h4>
                    <p>Last Messaged 10/31/21</p>
                </div>
            </div>
            <div className={styles.chatCard}>
                <div className={styles.chatUserImage}>
                    <img src="https://iupac.org/wp-content/uploads/2018/05/default-avatar.png" alt="user" />
                </div>
                <div className={styles.chatUserName}>
                    <h4>Nicholas Ceneviva</h4>
                    <p>Last Messaged 10/31/21</p>
                </div>
            </div>
        </div>
    )
}