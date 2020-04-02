import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
//import Nav from '../components/nav'
import styles from "./checkout.module.css";


const Checkout = () => (
    <>
  <div>
    <Head>
      <title>Checkout</title>
    </Head>

    

    <h1 className={styles.title}>Checkout</h1>
    <p>Please click the button below to complete your order</p>
    <Link href="/order-confirmation/123-yourorder-456">
      <a>Complete order</a>
     </Link> 
      </div>
      <style jsx>
      {`
        p {
          color: green;
        }
      `}
    </style>

     </>
)

export default Checkout