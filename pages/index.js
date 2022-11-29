import { client } from "./../lib/client";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import css from '../styles/Home.module.css';
import Services from "../components/Services";
import Menu from "../components/Menu";
import Title from "../components/Title";

export default function Home({pizzas}) {
    console.log(pizzas);
    return (<Layout>
        <div className={css.container}>
            <Title/>
            {/* body */}
            <main>
                <Hero/>
                <Services/>
                <Menu pizzas={pizzas}/>
            </main>
        </div>
    </Layout>);
}


export const getServerSideProps = async()=> {
    const query = '*[_type == "pizza"]';
    const pizzas  = await client.fetch(query);
    return{
        props:{
            pizzas
        }
    }
}