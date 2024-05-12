import n1 from './images/n1.png'
import n2 from './images/n2.png'
import n3 from './images/n3.png'
import n4 from './images/n4.png'
import n5 from './images/n5.png'
import n6 from './images/n6.png'
import n7 from './images/n7.png'
import n8 from './images/n8.png'
import {useState} from 'react';
import { generate } from "random-words";
import './hangman.css';

function Hangman(){
    const [img,setimg]=useState(n1)
    const [word,setword]=useState(['h', 'a', 'n', 'g', 'm', 'a', 'n'])
    const [disp,setdisp]=useState(['h', '_', 'n', 'g', 'm', '_', 'n'])
    const [len,setlen]=useState("hangman".length)
    const [fail,setfail]=useState(8)
    const [status,setstatus]=useState('😁')
    const [won,setwon]=useState(0)
    const a =()=>{
        setwon(0)
        setstatus('😁')
        setimg(n1)
        setfail(8)
        let v=generate()
        setlen(v.length)
        setword([...v]);
        let vr=[...v]
        let p = Array(Math.floor(v.length/2)).fill().map(() => Math.round(Math.random() * (v.length-1)))
        for (let i = 0; i < p.length; i++) {
            vr[p[i]]='_'
        }
        setdisp(vr)
    }
    function handleChange(b){
        if(won===0){
        let f = disp;
        let flg = 0;

        for (let i = 0; i < word.length; i++) {
        if(b===word[i]){
            console.log("present : @ ",i)
            f[i]=b
            flg=1
         }
      
        }
        if(flg===0){
            setfail(fail-1)
            console.log(fail)
            switch (fail){
                case 8:
                    setimg(n2);
                    break;
                case 7:
                    setimg(n3);
                    break;
                case 6:
                    setimg(n4);
                    break;
                case 5:
                    setimg(n5);
                    break;
                case 4:
                    setimg(n6);
                    break;
                case 3:
                    setimg(n7);
                    break;
                case 2:
                    setimg(n8);
                    setwon(1)
                    break;

            }
        }
        if (f.indexOf("_")===-1){
            console.log("Completed")
            setwon(1)
            setstatus('🔥')
        }
        setdisp([...f])
    }}
    return(
        <div>
           
            <div className='parent'>
                <h3 className='shortcut'><a href='/'>⇦ Home</a></h3>
            <div id="space"></div>
                <div className='left'>
                    <h2 className="disp">{disp}</h2>
                    <button onClick={a} id="hn_reset_web">Reset</button>
                    <table id="hn_tb_web">
                    <tr>
                        <td><button onClick={(e)=>handleChange(e.target.value)} id="letter" value={'a'}>A</button></td>
                        <td><button onClick={(e)=>handleChange(e.target.value)} id="letter" value={'b'}>B</button></td>
                        <td><button onClick={(e)=>handleChange(e.target.value)} id="letter" value={'c'}>C</button></td>
                        <td><button onClick={(e)=>handleChange(e.target.value)} id="letter" value={'d'}>D</button></td>
                        <td><button onClick={(e)=>handleChange(e.target.value)} id="letter" value={'e'}>E</button></td>
                        </tr>
                        <tr>
                        <td><button onClick={(e)=>handleChange(e.target.value)} id="letter" value={'f'}>F</button></td>
                        <td><button onClick={(e)=>handleChange(e.target.value)} id="letter" value={'g'}>G</button></td>
                        <td><button onClick={(e)=>handleChange(e.target.value)} id="letter" value={'h'}>H</button></td>
                        <td><button onClick={(e)=>handleChange(e.target.value)} id="letter" value={'i'}>I</button></td>
                        <td><button onClick={(e)=>handleChange(e.target.value)} id="letter" value={'j'}>J</button></td>
                        </tr>
                        <tr>
                        <td><button onClick={(e)=>handleChange(e.target.value)} id="letter" value={'k'}>K</button></td>
                        <td><button onClick={(e)=>handleChange(e.target.value)} id="letter" value={'l'}>L</button></td>
                        <td><button onClick={(e)=>handleChange(e.target.value)} id="letter" value={'m'}>M</button></td>
                        <td><button onClick={(e)=>handleChange(e.target.value)} id="letter" value={'n'}>N</button></td>
                        <td><button onClick={(e)=>handleChange(e.target.value)} id="letter" value={'o'}>O</button></td>
                        </tr>
                        <tr>
                        <td><button onClick={(e)=>handleChange(e.target.value)} id="letter" value={'p'}>P</button></td>
                        <td><button onClick={(e)=>handleChange(e.target.value)} id="letter" value={'q'}>Q</button></td>
                        <td><button onClick={(e)=>handleChange(e.target.value)} id="letter" value={'r'}>R</button></td>
                        <td><button onClick={(e)=>handleChange(e.target.value)} id="letter" value={'s'}>S</button></td>
                        <td><button onClick={(e)=>handleChange(e.target.value)} id="letter" value={'t'}>T</button></td>
                        </tr>
                        <tr>
                        <td><button onClick={(e)=>handleChange(e.target.value)} id="letter" value={'u'}>U</button></td>
                        <td><button onClick={(e)=>handleChange(e.target.value)} id="letter" value={'v'}>V</button></td>
                        <td><button onClick={(e)=>handleChange(e.target.value)} id="letter" value={'w'}>W</button></td>
                        <td><button onClick={(e)=>handleChange(e.target.value)} id="letter" value={'x'}>X</button></td>
                        <td><button onClick={(e)=>handleChange(e.target.value)} id="letter" value={'y'}>Y</button></td>
                        </tr>
                        <tr>
                        <td><button onClick={(e)=>handleChange(e.target.value)} id="letter" value={'z'}>Z</button></td>
                        </tr>
                    </table>
                </div>
                <div id="space"></div>
                <div className='right'>
                <img src={img}></img>
                <h2 className='length'>no of letters : {len}</h2>
                <h2 className='status'>{status}</h2>
                <button onClick={a} id="hn_reset_mob">Reset</button>
                    
                </div>
                <div id="space"></div>
                <table id="hn_tb_mob">
                    <tr>
                        <td><button onClick={(e)=>handleChange(e.target.value)} id="letter" value={'a'}>A</button></td>
                        <td><button onClick={(e)=>handleChange(e.target.value)} id="letter" value={'b'}>B</button></td>
                        <td><button onClick={(e)=>handleChange(e.target.value)} id="letter" value={'c'}>C</button></td>
                        <td><button onClick={(e)=>handleChange(e.target.value)} id="letter" value={'d'}>D</button></td>
                        <td><button onClick={(e)=>handleChange(e.target.value)} id="letter" value={'e'}>E</button></td>
                        </tr>
                        <tr>
                        <td><button onClick={(e)=>handleChange(e.target.value)} id="letter" value={'f'}>F</button></td>
                        <td><button onClick={(e)=>handleChange(e.target.value)} id="letter" value={'g'}>G</button></td>
                        <td><button onClick={(e)=>handleChange(e.target.value)} id="letter" value={'h'}>H</button></td>
                        <td><button onClick={(e)=>handleChange(e.target.value)} id="letter" value={'i'}>I</button></td>
                        <td><button onClick={(e)=>handleChange(e.target.value)} id="letter" value={'j'}>J</button></td>
                        </tr>
                        <tr>
                        <td><button onClick={(e)=>handleChange(e.target.value)} id="letter" value={'k'}>K</button></td>
                        <td><button onClick={(e)=>handleChange(e.target.value)} id="letter" value={'l'}>L</button></td>
                        <td><button onClick={(e)=>handleChange(e.target.value)} id="letter" value={'m'}>M</button></td>
                        <td><button onClick={(e)=>handleChange(e.target.value)} id="letter" value={'n'}>N</button></td>
                        <td><button onClick={(e)=>handleChange(e.target.value)} id="letter" value={'o'}>O</button></td>
                        </tr>
                        <tr>
                        <td><button onClick={(e)=>handleChange(e.target.value)} id="letter" value={'p'}>P</button></td>
                        <td><button onClick={(e)=>handleChange(e.target.value)} id="letter" value={'q'}>Q</button></td>
                        <td><button onClick={(e)=>handleChange(e.target.value)} id="letter" value={'r'}>R</button></td>
                        <td><button onClick={(e)=>handleChange(e.target.value)} id="letter" value={'s'}>S</button></td>
                        <td><button onClick={(e)=>handleChange(e.target.value)} id="letter" value={'t'}>T</button></td>
                        </tr>
                        <tr>
                        <td><button onClick={(e)=>handleChange(e.target.value)} id="letter" value={'u'}>U</button></td>
                        <td><button onClick={(e)=>handleChange(e.target.value)} id="letter" value={'v'}>V</button></td>
                        <td><button onClick={(e)=>handleChange(e.target.value)} id="letter" value={'w'}>W</button></td>
                        <td><button onClick={(e)=>handleChange(e.target.value)} id="letter" value={'x'}>X</button></td>
                        <td><button onClick={(e)=>handleChange(e.target.value)} id="letter" value={'y'}>Y</button></td>
                        </tr>
                        <tr>
                        <td><button onClick={(e)=>handleChange(e.target.value)} id="letter" value={'z'}>Z</button></td>
                        </tr>
                    </table>
 
            </div>
        </div>
    )
}


export default Hangman;