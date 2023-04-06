import styled from 'styled-components';
import { Table } from '../../styles/table';
import './table.scss';

const TRLightGray = styled.tr`
    background-color: rgb(247, 247, 247);
`
const TRGray = styled.tr`
    background-color: rgb(226, 226, 226);
`
const TRColored = styled.tr`
    background-color: #00001A;
    color: rgb(226, 226, 226);
    font-weight: 500;
`
const TDTitle = styled.td`
    padding: 10px;
`


const TableComponent = ({titles=[""], users = new Array<Object>(), keys = ['']})=>{

    return (<Table className='table-window'>
                <TRColored>
                    {
                        titles.map((element,i)=>{
                            return (<TDTitle key={i}>{element}</TDTitle>)
                        })
                    }
                </TRColored>
                {
                    users.map((element:Object,i:number)=>{
                        if(i%2!==0){
                            return(<TRLightGray>
                                {
                                    keys.map((cle:string,i:number)=>{
                                        return Object.entries(element).map(([key, value])=>{
                                            if(key === cle){
                                                if(cle === 'img' || cle === 'image' || cle === 'photo' || cle === 'cover'){
                                                    return (<td key={i}><img src={value} alt='user' width="50px" height="50px"/></td>);
                                                }else{
                                                    return(<td key={i}>{value}</td>);
                                                }
                                            }
                                            else{
                                                return (<></>);
                                            }
                                        })
                                    })
                                }
                            </TRLightGray>)
                        }else{
                            return(<TRGray>
                                {
                                    keys.map((cle:string,i:number)=>{
                                        return Object.entries(element).map(([key, value])=>{
                                            if(key === cle){
                                                if(cle === 'img' || cle === 'image' || cle === 'photo' || cle === 'cover'){
                                                    return (<td key={i}><img src={value} alt='user' width="50px" height="50px"/></td>);
                                                }else{
                                                    return(<td key={i}>{value}</td>);
                                                }
                                            }
                                        })
                                    })
                                }
                            </TRGray>)
                        }
                        
                    })
                }
            </Table>);
}

export default TableComponent;

