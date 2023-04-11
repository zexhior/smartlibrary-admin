import { useEffect, useLayoutEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { Title } from '../../../../styles/title';
import { Api } from '../../../../utils/api';
import Onglet from '../../../../widgets/onglet/onglet';
import Stars from '../../../../widgets/stars/stars';
import GetOneElement from '../../../controllers/GetOneElement';
import { Authors } from '../../../models/authors';
import './infoauthor.scss';

const InfoAuthor = ()=>{
    const {id} = useParams();
    const {element} = GetOneElement<Authors>('authors/',id);

    if(element){
      return (<div className='infoauthor-container'>
                <div className="infoauthor-header">
                      <div className="infoauthor-background">

                      </div>
                      <div className="infoauthor-header-content">
                          <div className='infoauthor-cover'>
                              <img src={element?.photo} alt='book'/>
                          </div>
                          <div className="infoauthor-info">
                              <Title>{element?.last_name}</Title>
                              <Title>{element?.first_name}</Title>
                              <p>
                                {
                                  element?.description
                                }
                              </p>
                              <Stars star={element?.star as number}/>
                          </div>
                      </div>
                  </div>
                  <Onglet options={[{text:'Livres',link:`/authors/${element?._id}`},
                              {text:'Mise a jour', link:`/authors/${element?._id}/update`}]} />
              </div>);
    }
    else{
      return (<div>

      </div>);
    }
}

export default InfoAuthor;