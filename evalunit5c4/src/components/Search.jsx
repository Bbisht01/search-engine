import React, { useEffect, useState } from 'react'
import { useParams } from "react-router"
import { createStore } from 'redux';
import { SearchDiv } from './Search Style';
function Search() {

    const [data, setData] = useState([]);
    const reducer = (state = [], action) => {
        switch (action.type) {
            case 'STORE_DATA':
                return action.payload;
            default:
                return state;
        }
    };

    const store = createStore(reducer);

    store.subscribe(() => {
        console.log('current state', store.getState());
        setData(store.getState())
    });

    var params = useParams();
    params = params.q;
    useEffect(() => {
        fetch(`https://fast-reef-22226.herokuapp.com/data`).then(res => res.json()).then(data => {
            var data = data.slice(0, 20);

            var output = params.toLowerCase();

            var dataArray = [];
            data.forEach(item => {
                if (item.title.toLowerCase().indexOf(output) != -1)
                    dataArray.push(item);
            })
            //    data = dataArray;
            console.log(dataArray)
            store.dispatch({type:"STORE_DATA", payload:dataArray})
        })
    })
    return (
        <SearchDiv>
            <div id="navbar">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png" />
                <input type="text" placeholder={params} />
                <button className='search'>Search</button>
            </div>
            <div id="detailed-result">
            {data.map((el) => {
                var date = new Date(el.creation_date);
                return(
                    <div>
                    <p className='title'>{el.url}</p>
                    <a href='' >{el.title}</a> | <span className='author'>{el.author}</span>
                    <p className='desc'>{el.description}</p>
                    <p className='creation-date'>Creattion date : {el.creation_date}</p>
                    <p className='explicit'>Explicit {el.explicit ? "Yes" : "No"} | Quality %: <span className='quality'>{el.quality}</span></p>

                    </div>
                )
                 
            })}
            </div>
        </SearchDiv>
    )
}

export default Search
