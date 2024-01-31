import { Link } from 'react-router-dom'
import './Modal.css'
import {useContext} from 'react'
import UserContext from '../context/UserContext'

export default function Modal() {
    const{setModal, modal} = useContext(UserContext)
    
    const handleNo =()=>{
        setModal(!modal)
    }
    const handleOk = ()=>{
        setModal(!modal)
    }
  return (
    <div className='modal'>
        <p>Are you sure you want to logout?</p>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <p style={{margin:'10px'}} onClick={handleOk}><Link to = '/' style={{border: '2px solid white'}}>OK</Link></p>
        
        <p style={{margin:'10px'}} onClick={handleNo}><Link to = '/profile' style={{border: '2px solid red'}}>No</Link></p>
        </div>
    </div>
  )
}