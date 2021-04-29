import { Head } from '../Head'
import styles from './style.module.scss'

export const Contato = () => {
    return (
        <section className={`${styles.contact} ${styles.animeLeft}`}>
            <Head title="Ranek | Contato" description="Entre em contato"/>
            <div className={styles.imgBox}>
                <img className={styles.contatoImg} src="contato.jpg" alt='Fale Conosco'></img>
            </div>
            <div className={styles.content}>
                <h2>Entre em contato.</h2>
                <p>nicolasbarcellos95@gmail.com </p>
                <p>9999-9999</p>
                <p>Rua Logo Ali, 999</p>
            </div>
        </section>
        
    )
}