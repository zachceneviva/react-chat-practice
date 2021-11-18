import styles from "../styles/ChatArea.module.scss"
import ChatInput from "./ChatInput"

export default function ChatArea () {
    return (
        <div className={styles.chatAreaBody}>
            <div className={styles.messagesContainer}>
                <ul className={styles.messageList}>
                    <li className={styles.messageListItem}>
                        <div className={styles.textCard}>
                            <div className={styles.messengerImage}>
                                <img src="https://iupac.org/wp-content/uploads/2018/05/default-avatar.png" alt="messenger" />
                            </div>
                            <div className={styles.messageText}>
                                <p>Text content</p>
                            </div>
                        </div>
                    </li>
                    <li className={styles.messageListItem}>
                        <div className={styles.userTextCard}>
                            <div className={styles.userMessageText}>
                                <p>Text content text content text content Text content text content text content Text content text content text content Text content text content text content Text content text content text content Text content text content text content Text content text content text content Text content text content text content Text content text content text content Text content text content text content</p>
                            </div>
                            <div className={styles.userMessengerImage}>
                                <img src="https://iupac.org/wp-content/uploads/2018/05/default-avatar.png" alt="messenger" />
                            </div>
                        </div>
                    </li>
                    <li className={styles.messageListItem}>
                        <div className={styles.textCard}>
                            <div className={styles.messengerImage}>
                                <img src="https://iupac.org/wp-content/uploads/2018/05/default-avatar.png" alt="messenger" />
                            </div>
                            <div className={styles.messageText}>
                                <p>Text content</p>
                            </div>
                        </div>
                    </li>
                    <li className={styles.messageListItem}>
                        <div className={styles.userTextCard}>
                            <div className={styles.userMessageText}>
                                <p>Text content text content text content Text content text content text content Text content text content text content Text content text content text content Text content text content text content Text content text content text content Text content text content text content Text content text content text content Text content text content text content Text content text content text content</p>
                            </div>
                            <div className={styles.userMessengerImage}>
                                <img src="https://iupac.org/wp-content/uploads/2018/05/default-avatar.png" alt="messenger" />
                            </div>
                        </div>
                    </li>
                    <li className={styles.messageListItem}>
                        <div className={styles.textCard}>
                            <div className={styles.messengerImage}>
                                <img src="https://iupac.org/wp-content/uploads/2018/05/default-avatar.png" alt="messenger" />
                            </div>
                            <div className={styles.messageText}>
                                <p>Text content</p>
                            </div>
                        </div>
                    </li>
                    <li className={styles.messageListItem}>
                        <div className={styles.userTextCard}>
                            <div className={styles.userMessageText}>
                                <p>Text content text content text content Text content text content text content Text content text content text content Text content text content text content Text content text content text content Text content text content text content Text content text content text content Text content text content text content Text content text content text content Text content text content text content</p>
                            </div>
                            <div className={styles.userMessengerImage}>
                                <img src="https://iupac.org/wp-content/uploads/2018/05/default-avatar.png" alt="messenger" />
                            </div>
                        </div>
                    </li>
                    <li className={styles.messageListItem}>
                        <div className={styles.textCard}>
                            <div className={styles.messengerImage}>
                                <img src="https://iupac.org/wp-content/uploads/2018/05/default-avatar.png" alt="messenger" />
                            </div>
                            <div className={styles.messageText}>
                                <p>Text content Text content Text content</p>
                            </div>
                        </div>
                    </li>
                    <li className={styles.messageListItem}>
                        <div className={styles.userTextCard}>
                            <div className={styles.userMessageText}>
                                <p>Text content text content text content Text content text content text content Text content text content text content Text content text content text content Text content text content text content Text content text content text content Text content text content text content Text content text content text content Text content text content text content Text content text content text content</p>
                            </div>
                            <div className={styles.userMessengerImage}>
                                <img src="https://iupac.org/wp-content/uploads/2018/05/default-avatar.png" alt="messenger" />
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div className={styles.messageInput}>
                <ChatInput />
            </div>
        </div>
    )
}