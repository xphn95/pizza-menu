import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import pizzaData from './data'

const App = () => (
  <div className="container">
    <Header />
    <Menu />
    <Footer />
  </div>
)

const Header = () => {
  /* const style = {
    color: 'red',
    fontSize: '48px',
    textTransform: 'uppercase'
    } */
  return (
    // <h1 style={style}>
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  )
}

const Menu = () => {
  const pizzas = pizzaData
  return (
    <main className="menu">
      <h2>Our menu</h2>
      {/* 在JSX中，false不会渲染任何内容，而是会渲染为0，
      要避免这种情况发生就写清楚条件不要靠隐式转换 */}
      {/* {pizzas.length > 0 && (
        <ul className="pizzas">
          {pizzas.map(pizza => (
            <Pizza
              pizzaOptions={pizza}
              key={pizza.name}
            />
          ))}
        </ul>
      )} */}
      {/* 三元运算这样写 */}
      {pizzas.length > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzas.map(pizza => (
              <Pizza
                pizzaOptions={pizza}
                key={pizza.name}
              />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later :)</p>
      )}
    </main>
  )
}

const Pizza = ({
  pizzaOptions: { name, ingredients, price, photoName, soldOut }
}) => {
  return (
    <li className={`pizza ${soldOut ? 'sold-out' : ''}`}>
      <img
        // style={{ width: '60px', height: '60px' }}
        src={photoName}
        alt={name}
      />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{soldOut ? 'Sold out' : price}</span>
      </div>
    </li>
  )
}

// 不使用 jsx 就是这样写
// const Footer = () => React.createElement('footer', null, "We're currently open!")
const Footer = () => {
  const hour = new Date().getHours()
  const OPENHOUR = 18,
    CLOSEHOUR = 22
  const isOpen = hour >= OPENHOUR && hour < CLOSEHOUR

  return (
    <footer className="footer">
      {isOpen ? (
        <div className="order">
          <p>
            We're open until until {CLOSEHOUR}:00. Come visit us or order
            online.
          </p>
          <button className="btn">Order</button>
        </div>
      ) : (
        <p>
          We're happy to welcome you between {OPENHOUR}:00 and {CLOSEHOUR}:00.
        </p>
      )}
    </footer>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
// after v18 有了/client
root.render(
  // useEffect()

  // 严格模式没什么大不了， 就是呈现组件两次以便发现BUG还有检查是否使用了过时的API
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// before v18
// React.render(<App />, document.getElementById('root'))
