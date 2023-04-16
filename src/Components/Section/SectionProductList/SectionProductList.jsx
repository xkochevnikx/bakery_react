import React, { useState } from 'react';
import { useEffect, useContext } from 'react';
import './SectionProductList.css';
import { productContext } from '../../../context/ProductContextProvider';
import ProductCard from '../../Product/ProductCard/ProductCard';
import { useSearchParams } from 'react-router-dom';
import Filter from '../../Filter/Filter';

//? это компонент отображения всех продуктов, он подставляется в середину между хэдером и футером в компоненте страницы PageProducts
const SectionProductList = () => {
    //? тут вызываем контекст и вытягиваем массив продуктов с бэка и функцию отображения ложим в useEffect что бы она отработала только один раз в начале
    const { productsBakery, readProduct, pageTotalCount } =
        useContext(productContext);

    const [paramsSearch, setParamsSearch] = useSearchParams();

    //? изначально стейт равен all
    const [category, setCategory] = useState('all');

    //? стейт на пагинацию
    const [page, setPage] = useState(1);

    //? тут он следит за стейтом и при изнениии стейта сравнивает значения если оно равно all то вызывается setParamsSearch и передаёт в адресную строку ключ q , а в главном контексте location вытянет данные адресной строки и подставит в функцию запроса отображения продуктов

    useEffect(() => {
        if (category === 'all') {
            //? вызываем setParamsSearch и с помощью метода get передаёт в адресную строку ключ q , то есть ничего не предаём
            setParamsSearch({
                q: paramsSearch.get('q') || '',
                _page: page,
                _limit: 3,
            });
        } else {
            setParamsSearch({
                category: category,
                _page: page,
                _limit: 3,
            });
        }
    }, [paramsSearch, category, page]);

    useEffect(() => {
        readProduct();
    }, [paramsSearch]);

    function pageMimus() {
        if (page <= 1) return;
        setPage(page - 1);
    }

    function pagePlus() {
        if (page >= pageTotalCount) return;
        setPage(page + 1);
    }

    //? ниже основной контейнер компонента отображения продуктов, в нем условный рендеринг который в случае наличия данных начинает их перебирать и вызываем компонет карточки продукта передаёт в него каждый продукт по отдельности
    return (
        <>
            <div className='prevNextBtn'>
                <button
                    onClick={pageMimus}
                    id='btnPrev'>
                    назад
                </button>
                <button
                    onClick={pagePlus}
                    id='btnNext'>
                    {' '}
                    следующая страница
                </button>
            </div>
            <Filter
                category={category}
                setCategory={setCategory}
            />
            <section>
                <div class='section__box_product'>
                    {productsBakery
                        ? productsBakery.map((item) => (
                              <ProductCard
                                  obj={item}
                                  key={item.id}
                              />
                          ))
                        : 'LOADING...'}
                </div>
            </section>
        </>
    );
};

export default SectionProductList;
