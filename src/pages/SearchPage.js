import React from 'react'
import './SearchPage.css';

import { useStateValue } from '../StateProvider';
import useGoogleSearch from '../useGoogleSearch';
import Search from './Search';
import { Link } from 'react-router-dom';

function SearchPage() {
const [{ term }, dispatch] = useStateValue();
const { data } = useGoogleSearch(term);
const { searchInformation: searchInfo, items } = data ? data : '';

console.log("items",items);

return (
    <div className='searchPage'>
        <div className='searchPage_header'>
            <Link to ='/' >
                <img className='searchPage_logo' src=' https://www.google.com/logos/doodles/2020/stay-and-play-at-home-with-popular-past-google-doodles-loteria-2019-6753651837108772.2-2xa.gif' alt="Google Img"/>  
            </Link>
            <div className='searchPage_headerBody'>
                <Search hideButtons/>
            </div>            
        </div>
        {data && <div className='searchPage_results'>
            <div className='searchResult_about'>About {searchInfo.formattedTotalResults} results ({searchInfo.formattedSearchTime}) </div>
            <div className='searchResult_list'>
                <div className='result_left'>
                    <ul>{items?.map( item => (
                        <li className='searchResult_block' key={item.title}>
                            <a className='thumb'>
                                {item?.pagemap?.cse_image ? <img src={item?.pagemap?.cse_image[0].src} alt="thumb image" /> 
                                : <span className='noimg'></span>
                                }
                                <p>
                                <span className='title'>{item.title}</span>
                                {item.link}</p>
                            </a>
                            <a className='hrefLink' href={item.link}>{item.title}</a>
                            <p>{item.snippet}</p>
                        </li>
                    ))}</ul>
                </div>
                <div className='result_right'>
                
                </div>
            </div>
        </div>}
    </div>
  )
}

export default SearchPage