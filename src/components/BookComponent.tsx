import styles from "../styles/BookComponent.module.css";

interface BookProps {
    name: string;
    author: string;
    description: string;
    imageLink: string;
}

const BookComponent = ({ name, author, description, imageLink }: BookProps) => {

    return (
        <div className={styles.Book}>
            <div className={styles.Info}>
                <div className={styles.Header}>
                    <div className={styles.BookName}>
                        {name}
                    </div>
                    <div className={styles.BookAuthor}>
                        {author}
                    </div>
                </div>
                <div className={styles.BookBody}>
                    {description}
                </div>
            </div>
            <div className={styles.Image}>
                <img src={imageLink} />
            </div>
        </div>
    )
}

export default BookComponent;