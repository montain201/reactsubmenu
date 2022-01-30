import React,{useState} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';
import { variables} from './Variables';
;


const Nav = styled.div`
background: #15171c;
height:80px;
display:flex;
justify-content:flex-start;
align-items:center;
`;
const NavIcon = styled(Link)`
    margin-left:2rem;
    font-size:2rem;
    height:80px;
    display:flex;
    justify-content:flex-start;
    align-items:center;
`;
const SidebarNav = styled.nav`
background:#15171c;
width:250px;
height:100vh;
display:flex;
justify-content:center;
position:fixed;
top:0;
left:${({sidebar})=>(sidebar ? '0':'-100%')};
transition:350ms;
z-index:10;
`;

const SidebarWrap = styled.div`
width:100%
`;
const Sidebar= (props: {username:string , setUserName:(username:string)=>void}) =>  {

    const logout = async()=>{
        await fetch(variables.API_AUTH+'logout',{
           
            method:'POST',
            headers:{'Content-Type':'application/json'},
            credentials:'include',
            
        });

        props.setUserName('');

    }

    let menu;
  
      if(typeof props.username == "undefined"){
     menu=(
        <NavIcon to="#" style={{zIndex:100}}>
          
            <Link to="/login">
            <AiIcons.AiOutlineLogin />
            </Link> 

            <Link to="/register">
                <AiIcons.AiOutlineFileAdd />
            </Link>
    </NavIcon>
     )
    }
    else{
        menu = (
            <NavIcon to="#">
          
            <Link to="/login" onClick={logout}>
               <AiIcons.AiOutlineLogout />
            </Link>
          </NavIcon>
        )
    }
    ////////////////
    const[sidebar,setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar)
    return (
    <>
    <IconContext.Provider value={{color:'#fff'}}>

    <Nav>
        <NavIcon to="#">
            <FaIcons.FaBars  onClick={showSidebar}/>
        </NavIcon>
        {menu}
    </Nav>
    <SidebarNav sidebar={sidebar}>
        <SidebarWrap>
        <NavIcon to="#">
            <AiIcons.AiOutlineClose  onClick={showSidebar}/>
        </NavIcon>
        {SidebarData.map((item,index) => {
            return <SubMenu item={item} key= {index} />;
        })}
        </SidebarWrap>
        
    </SidebarNav>
    </IconContext.Provider>
   </>
    );
};

export default Sidebar


