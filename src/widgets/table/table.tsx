import User from '../../common/images/profil.jpg';
import './table.scss';

const TableComponent = ({titles=[""], users = new Array<Object>(), keys = ['']})=>{
    return (<div className='table-window'>
                {
                    keys.map((cle:string,i:number)=>{
                        return (<div className='table'>
                            <div className='td text-color-white title'>{titles[i]}</div>
                            {
                                users.map((element,index)=>{
                                    return Object.entries(element).map(([key, value])=>{
                                        if(key === cle){
                                            if(index%2 !== 0){
                                                if(cle === 'img' || cle === 'image' || cle === 'photo' || cle === 'cover'){
                                                    return (<div className='td' key={index}><img src={value==='default.jpg'?User:value} alt='user' width="50px" height="50px"/></div>);
                                                }else{
                                                    return(<div className='td' key={index}>{value}</div>);
                                                }
                                            }
                                            else{
                                                if(cle === 'img' || cle === 'image' || cle === 'photo' || cle === 'cover'){
                                                    return (<div className='td' key={index}><img src={value==='default.jpg'?User:value} alt='user' width="50px" height="50px"/></div>);
                                                }else{
                                                    return(<div className='td' key={index}>{value}</div>);
                                                }
                                            }
                                        }
                                        else{
                                            return (<></>);
                                        }
                                    })
                                })
                            }
                        </div>)
                    })
                }
            </div>);
}

export default TableComponent;

