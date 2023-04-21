import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import clientAxios from '../../config/axios'

const ShowProd = () => {
  const [product, setProduct] = useState()
  const { id } = useParams()

  useEffect(() => {
    const loadProduct = async () => {
      try {
        setProduct(await clientAxios.get(`/product/find/${id}`))
      } catch (error) {
        console.log(error)
      }
    }
    loadProduct()
  }, [id])

  return (
    <>{product &&
      <>
        <section style={{ backgroundColor: '#b9c0c7', width: 'fit-content', height: '30%' }}>
          <h2>{product.productname}</h2>
          <img alt="product_"
            style={{
              width: '500px',
              height: '600px',
              border: '5px black solid',
              justifyContent: 'center',
              alignItems: "center"
            }}
            src={product.imgurl} />
        </section>
        <section>
          <h2>Descripcion</h2>
          <article style={{ textAlign: 'justify' }}>
            {product.description}
          </article>
          <div>
            Precio: {product.price}
          </div>
        </section>

      </>
    }
    </>
  )
}

export default ShowProd