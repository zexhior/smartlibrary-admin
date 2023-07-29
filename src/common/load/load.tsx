import './load.scss';

const Load = ()=>{
    return (<div className='loading-container'>
                <div className="load">
                    <div className="load__bar load__bar--1"></div>
                    <div className="load__bar load__bar--2"></div>
                    <div className="load__bar load__bar--3"></div>
                    <div className="load__bar load__bar--4"></div>
                    <div className="load__bar load__bar--5"></div>
                </div>
            </div>);
}

export default Load;