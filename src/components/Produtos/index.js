import styles from './style.module.scss'
import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { Head } from '../Head';

export const Produtos = () => {
    const [response, setReponse] = useState([]);

    React.useEffect(() => {
        fetch('https://ranekapi.origamid.dev/json/api/produto')
        .then((data) => data.json())
        .then((data) => setReponse(data));
    }, [])
        

    if (!response) return;
    
    return (
        <section className={styles.container + ' ' + styles.animeLeft}>
           {response.map((produto) =>
           <Link to={`produto/${produto.id}`} className={styles.produto} key={produto.id}>
               <div className={styles.boxProduto}>
                   <img src={produto.fotos[0].src} alt={produto.fotos[0].titulo}></img>
               </div>
             <h1>{produto.nome}</h1>
           </Link> 
           )}
            <Head title="Ranek | Produtos" description="Nossos Produtos"/>
        </section>
        
    )
}