import styles from "../styles/UserChatInformation.module.scss"

export default function UserChatInformation () {
    return (
        <div className={styles.userChatInfo} >
            <div className={styles.userNamePhoto} >
                <div className={styles.userPhoto}>
                    <img src="https://iupac.org/wp-content/uploads/2018/05/default-avatar.png" alt="user" />
                </div>
                <h4>Nicholas Ceneviva</h4>
                <h6>Philadelphia, PA</h6>
            </div>
            <div className={styles.contactInfo}>
                <hr/>
                <p>Role:<span>Customer Success Engineer</span></p>
                <hr/>
                <p>Company:<span>Databricks</span></p>
                <hr/>
                <p>School:<span>Penn State</span></p>
                <hr/>
                <p>Pronouns:<span>He/Him</span></p>
                <hr/>
                <p>Language:<span>English</span></p>
            </div>
        </div>
    )
}