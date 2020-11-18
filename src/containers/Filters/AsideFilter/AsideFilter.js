import React, {useState} from 'react';
import Backdrop from '../../UI/Backdrop/Backdrop';
import './AsideFilter.css';
import minus from '../../../assets/icons/minus.png'
import plus from '../../../assets/icons/plus.png'

const AsideFilter = props => {
    const [checkedProduct, setCheckedProduct] = useState(true);
    const [checkedSize, setCheckedSize] = useState(true);
    const [checkedColor, setCheckedColor] = useState(true);

    const onCheckHandler = (menu) => {
        if (menu === 'PRODUCT') {
            setCheckedProduct(!checkedProduct)
        } else if (menu === 'SIZE') {
            setCheckedSize(!checkedSize)
        } else if (menu === 'COLOR') {
            setCheckedColor(!checkedColor)
        }
        
    }

    return (
        <>
        <Backdrop show= {props.show} click={props.click} />
        <div className="aside-filter">
            <div className="aside-content">
                <div className="aside-close" onClick={props.click}>
                    <div className="aside-cross"></div>
                    <p>Fermer</p>
                </div>
                <div>
                    <label htmlFor="menu-toggle">
                        <div className="aside-label-title">
                            <h3 className="aside-title">Ligne de produit</h3>
                            <img src={checkedProduct ? plus : minus} className="plus-minus" alt="plus"/>
                        </div>
                    </label>
                    <input type="checkbox" id="menu-toggle" onClick={() => onCheckHandler('PRODUCT')} className="menu-toggle" checked={checkedProduct}/>
                    <ul className="menu">
                        <li>
                            <input type="checkbox" name="first-camo" id="first-camo" />
                            <label htmlFor="first-camo">1st camo</label>
                        </li>
                        <li>
                            <input type="checkbox" name="mix-camo" id="mix-camo" />
                            <label htmlFor="mix-camo">Mix camo</label>
                        </li>
                        <li>
                            <input type="checkbox" name="color-camo" id="color-camo" />
                            <label htmlFor="color-camo">Color camo</label>
                        </li>
                        <li>
                            <input type="checkbox" name="abc-camo" id="abc-camo" />
                            <label htmlFor="abc-camo">ABC camo</label>
                        </li>
                    </ul>
                </div>
                
                <div className="category__size">
                    <label htmlFor="size">
                        <div className="aside-label-title">
                            <h3 className="aside-title">Tailles</h3>
                            <img src={checkedSize ? plus : minus} className="plus-minus" alt="plus"/>
                        </div>
                    </label>
                    <input type="checkbox" id="size" className="menu-toggle" onClick={() => onCheckHandler('SIZE')} checked={checkedSize}/>
                    <h4>Vêtements</h4>
                    <ul className="menu menu__size">
                        <li>
                            <input type="checkbox" name="xxs" id="xxs" className="size-option"/>
                            <label htmlFor="xxs">XXS</label>
                        </li>
                        <li>
                            <input type="checkbox" name="xs" id="xs" className="size-option"/>
                            <label htmlFor="xs">XS</label>
                        </li>
                        <li>
                            <input type="checkbox" name="s" id="s" className="size-option"/>
                            <label htmlFor="s">S</label>
                        </li>
                        <li>
                            <input type="checkbox" name="m" id="m" className="size-option"/>
                            <label htmlFor="m">M</label>
                        </li>
                        <li>
                            <input type="checkbox" name="l" id="l" className="size-option"/>
                            <label htmlFor="l">L</label>
                        </li>
                        <li>
                            <input type="checkbox" name="xl" id="xl" className="size-option"/>
                            <label htmlFor="xl">XL</label>
                        </li>
                        <li>
                            <input type="checkbox" name="2xl" id="2xl" className="size-option"/>
                            <label htmlFor="2xl">2XL</label>
                        </li>
                        <li>
                            <input type="checkbox" name="3xl" id="3xl" className="size-option"/>
                            <label htmlFor="3xl">3XL</label>
                        </li>
                    </ul>

                    <h4>Chaussures</h4>
                    <ul className="menu menu__size">
                        <li>
                            <input type="checkbox" name="shoes-5" id="shoes-5" className="size-option"/>
                            <label htmlFor="shoes-5">5</label>
                        </li>
                        <li>
                            <input type="checkbox" name="shoes-5-5" id="shoes-5-5" className="size-option"/>
                            <label htmlFor="shoes-5-5">5.5</label>
                        </li>
                        <li>
                            <input type="checkbox" name="shoes-6" id="shoes-6" className="size-option"/>
                            <label htmlFor="shoes-6">6</label>
                        </li>
                        <li>
                            <input type="checkbox" name="shoes-6-5" id="shoes-6-5" className="size-option"/>
                            <label htmlFor="shoes-6-5">6.5</label>
                        </li>
                        <li>
                            <input type="checkbox" name="shoes-7" id="shoes-7" className="size-option"/>
                            <label htmlFor="shoes-7">7</label>
                        </li>
                        <li>
                            <input type="checkbox" name="xshoes-7-5" id="xshoes-7-5" className="size-option"/>
                            <label htmlFor="xshoes-7-5">7.5</label>
                        </li>
                        <li>
                            <input type="checkbox" name="shoes-8" id="shoes-8" className="size-option"/>
                            <label htmlFor="shoes-8">8</label>
                        </li>
                        <li>
                            <input type="checkbox" name="shoes-8-5" id="shoes-8-5" className="size-option"/>
                            <label htmlFor="shoes-8-5">8.5</label>
                        </li>
                        <li>
                            <input type="checkbox" name="shoes-9" id="shoes-9" className="size-option"/>
                            <label htmlFor="shoes-9">9</label>
                        </li>
                        <li>
                            <input type="checkbox" name="shoes-9-5" id="shoes-9-5" className="size-option"/>
                            <label htmlFor="shoes-9-5">9.5</label>
                        </li>
                        <li>
                            <input type="checkbox" name="shoes-10" id="shoes-10" className="size-option"/>
                            <label htmlFor="shoes-10">10</label>
                        </li>
                        <li>
                            <input type="checkbox" name="shoes-10-5" id="shoes-10-5" className="size-option"/>
                            <label htmlFor="shoes-10-5">10.5</label>
                        </li>
                        <li>
                            <input type="checkbox" name="shoes-11" id="shoes-11" className="size-option"/>
                            <label htmlFor="shoes-11">11</label>
                        </li>
                        <li>
                            <input type="checkbox" name="shoes-12" id="shoes-12" className="size-option"/>
                            <label htmlFor="shoes-12">12</label>
                        </li>
                    </ul>
                </div>
                <div className="category__size">
                    <label htmlFor="menu-color">
                        <div className="aside-label-title">
                            <h3 className="aside-title">Couleurs</h3>
                            <img src={checkedColor ? plus : minus} className="plus-minus" alt="plus"/>
                        </div>
                    </label>
                    <input type="checkbox" id="menu-color" onClick={() => onCheckHandler('COLOR')} className="menu-toggle" checked={checkedColor}/>
                    <ul className="menu menu-color-box">
                        <li>
                            <input type="checkbox" name="color1" id="color1" className="color-option" />
                            <label htmlFor="color1" className="color-black"></label>
                        </li>
                        <li>
                            <input type="checkbox" name="color2" id="color2" className="color-option"/>
                            <label htmlFor="color2" className="color-grey"></label>
                        </li>
                        <li>
                            <input type="checkbox" name="cocolor3" id="cocolor3" className="color-option"/>
                            <label htmlFor="cocolor3" className="color-white"></label>
                        </li>
                        <li>
                            <input type="checkbox" name="color4" id="color4" className="color-option"/>
                            <label htmlFor="color4" className="color-red"></label>
                        </li>
                    </ul>
                </div>
                <button>Appliquer</button>
            </div>
        </div>
        </>
    );
}

export default AsideFilter;