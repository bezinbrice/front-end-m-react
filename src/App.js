import './App.css';
import { useMediaQuery } from 'react-responsive'
import Header from './containers/Header/Header';
import Filters from './containers/Filters/Filters';
import Products from './containers/Products/Products';
import Aside from './containers/Aside/Aside';

function App() {
    const showAside = useMediaQuery({
        query: '(min-device-width: 1024px)'
      })
  return (
    <div className="App">
    <Header />
    <main>
        <div className="category__header">
            <ol itemScope itemType="https://schema.org/BreadcrumbList" className="breadcrumb">
                <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                    <p>Accueil</p>
                    <a itemProp="item" href="#">
                        <span itemProp="name">/ E-shop</span></a>
                    <meta itemProp="position" content="1" />
                </li>
            </ol>
            <div className="products-filters">
                <h2 className="all-products">Tous les produits</h2>
                <Filters />
            </div>
        </div>
        <div className="main-page">
            {showAside && <Aside />}
            <div>
                
                <Products />
            </div>
        </div>
        

    </main>
    </div>
  );
}

export default App;
