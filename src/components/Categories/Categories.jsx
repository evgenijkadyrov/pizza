import React from 'react';

export const Categories = React.memo(({items, onClickItem, activeItem}) => {
    const onSelectItem = (index) => {
        onClickItem(index)
    }
    return (
        <div className="categories">
            <ul>
                <li className={activeItem === null ? "active" : ''}
                    onClick={() => onSelectItem(null)}>Все
                </li>
                {items.map((item, index) => <li onClick={() => onSelectItem(index)}
                                                key={`${item}_${index}`}
                                                className={activeItem === index ? 'active' : ''}
                    >{item}
                    </li>
                )}
            </ul>
        </div>
    );
});

