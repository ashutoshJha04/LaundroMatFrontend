import React , {useState , useEffect} from 'react'
import styled from 'styled-components'
import hero from '../assets/hero.svg'
import {NavLink} from 'react-router-dom';
import { Button } from '../Styled/Button';
import Footer from '../Styled/Footer';
import '../App.css';

const Services = () => {
  const Wrapper = styled.section`
  padding:6rem 0;
  .card{
    border:2px solid ${({theme})=>theme.colors.border};
    border-radius:12px;
    // min-width:300px;
    
    .m-auto{
      border-radius:13px;
    }
    .img{
        
      border-radius:12px;
      
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-item:center;
      width:100%;
      margin:auto;
      margin-top:4rem;
      margin-bottom:2rem;
      img{
       border-radius:12px;
       height:100%;
       width:80%;

      }
    }
    .desc{
      padding-right:2rem;
      padding-left:2rem;
    }
  }
  @media only screen and (max-width: 900px){
  
    .grid{
        display:flex;
        flex-direction:column;
        width:70%;

    }  
    h1{
      font-size:2.8rem;
    }
   

}


  
  
  `;
 
  return (
    <Wrapper>

   <center> <h1 style={{marginTop:'9rem',marginBottom:'9rem'}}>Our Services</h1> </center>

   
    <div className="container mar grid grid-three-column">
      
      
          
         
  
        <div className="card" >
     <div className="img">
     
     <center>
     <img src="data:image/png;base64,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"  alt="Error" className='img-1'/></center>
     <figcaption className='title' style={{textAlign:"center",fontSize:"2rem",fontWeight:'900',paddingBottom:'2px'}}>Wet clean</figcaption>
     </div> 
     <div className="desc" style={{textAlign:"center",fontSize:"2rem",fontWeight:'300',color:"black"}}>
     "Fast, reliable online dry cleaning service for clothing and fabrics, ensuring impeccable cleanliness and convenient doorstep pickup and delivery."
     </div>
   ;
    <Button className="btn sec hireme-btn center m-auto"><NavLink to="/contact" style={{color:"white"}}>Know more</NavLink></Button>

     
     </div> 
        <div className="card" >
     <div className="img">
     
     <center>
     <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIcAAACHCAMAAAALObo4AAAAllBMVEX///8AAAB/jpT19fVgfYs3R09UXGDMzMzP2Nz4+Pienp4rOD7S29/JycklKSupsLN0gYY4P0Jra2tmc3dxcXEZISTb4ONNZHDm5ubT09Ncd4VkgpGqqqq3t7dFTE8OExVAQEA/UlsiLDEZGRkvLy+AgICTk5MxQEcyODogICBSUlJJSUlWcHxaZWlHXGYMDAxdXV27wcQlkiBJAAAJg0lEQVR4nO2cZ3uqaBCGRY2KbYmFgAQbYov1//+5ZWbeRlHwlSy759r5kBOl3cw8UyBwarX3zPFHgRGMfOfN/bxp34FBFnxXiREa0sLqMCaGapOqMNp4+E3YDTf4W7sijhF6oRH91kDPjKrBcNRjI1M1STOAQ7vsgwsfBpVwfMOhxSf4UE3u+v8SjsbNCHz+ocK4RAqRwqxQp4pVmrfc3KrrGNmg8rpOxptMhX0ODRVqHCrt+5xj8115qiBHxdJAm1TA4fjdMAwnMYOc3cS/itbp/tbEara3S+M1228HjZIh7PBVCLJlaJvlYfg3LQiym59/gEJ2Pyh7DZbHUb4dl4GyzeFeAoVzFAg/oe86TqOIOY7rh8sr3/T4tmi7fFebrhtF2ixEAQYrt+vCld23KBpcnSP3FQbBYjp3Lq2fN1LH3XAK00wc4InFWfqcZOPmHzDb7kxmfsIVUa9P1DLFttFwGFvb7vOLYE25+rT1NukLGtSf2Hec2+n32XWwVgb73BmJmDuTJwhkE8eMbdGxu4EuCF28Bm4Co+YWKazL+GZOp+8TyMujo0PaaiT1KWMyzTIZm1g0I5AOpfCLhaTxg6dlJzDUmHxk2aPY2J3+fQ9fv5i+KKxr3LtmzWZ53IMfuwyMnVga+dJW5dqPQLC8vjTGkkZjGGbN2bKAnGbwzzqDYw0LZqcFrbh1FJJOBPKyVpG8q2LUnC6r0b2ZNwMdTDM48PtoOXPJYSuD40QgeCLX4hjYVG6m4gtzO2RxXzUjg+MsMjjAET1YYcXWHm5N5hOzH4H80PkVNMyVQJyKjEhkFy86irfKFgjKY4VrXMQWIjodLpGiOYMi7ZqpiIB9wdk2TxigFAeG44RrfMlNoujUKGc6/foLUnXwsDXujO3GMJIcTSNTIFg+mkkOIEGXdDodGz8WcwgG4Zs4anc+y1z3c8nhrTMFAvJYe5Jjvhdb32vkEJTethAHVOA9jV2810UUrZbKAQK5JgWyu3J5MI6x1RIkUZ+KUqbTAe8GRTBcIqb6yXYyP7diHHSYpEB6yRXG9fp4vmf7cEwTAoPiKzKKhLQR+gNHmOs82l2CA0tVspJhsE5xDtiSfHKDxsuKWQGlYme5kUbRNQernuZoTjMEAmzTZoKjHrlyjgXWNTEwMHcX6DKODAsptlXP4PCwVCQ44Kudl8HR2rOdQi0jf+dy+ISOHFj+hlkcTaxTcaEi2iXpDyvasoXDx08NM+ZOqi0kD1bDaOQZZ3FgJYsLBJvcKckhtjSWKJBOv5hAIHxLyhab6ugncy5xML9ntDpqcixugiPa8Ey96RB5GTIGgnTMwzCXSIsc7A5cYClntWAHakIUFmpgdiDGHVs6WzAODAurIQMTBGLDLLXMu/p2oM5QxxdzeYtOi6K8PslKFhOIbHJR1DBGB+bIT7afbxIqqH+TJ1SMxbcp04UrVexvPcuuZEoVmyGGcVb5ZcLAbg92Dod7JQcCh7jbYLH8IxAKjWckBIJNzpNBQQyp0shulDB/GThyPre2ITkgRAvgmtfTHvGSlQyrmCe90YoVD9jNRnLkXkCoHOj5NQ+MAgIjlwdlS2l12OQ+PDasMQxRPAL0lh6HicJbMeHHQL7SAunFvsegKGFZo49MHQ5qtl848uzrYrfo5Uu61YkmdxHeIJVi8SBMx9ThwPLxRSMPKhWifd6LtIgLBLw/FRV/LrixeCwoqwdaHNhpTp48PytWzBKtDj5gkxMlTFFpjzh8LQ4c4U5Uwa98t3gQqlYXVSA9Hi5W4YYWcZ/JHcTRrWlwYBmLzpzOm9V2nJnXGa1ObXJrFhmh0ilLp60WB3ReKBV4vE8ZFWOW0erUJoeXndexVOmO6SfU4TAn/NRJqaJTsB7CWp1SxXiTo8icRYubctCJjj5wOO3J3QqOi6cebpdqcuxi7jzmGwiH3bTq2FGcIny3kXE5qbNfT8qUycPDQBqYtDjBzLiAjlocMIlgoUalXq0xDzefyZWrOuVKjgqc8YkqveK5cI6lo8HhBJyDTryFeXtVEkZpdaLJ8XQJLFE8vgTHQYODyjoLOZ4ulWn0eQ+/lq1ONjm65IzyHIsHOqwpOAxtDhq/8YBRCbFEo8O7ILKSySrG7nycqaYbhLfiq+hw2ORTWbLOSqOjeVm0OtHkaD6GIibS6xQlFudwNTjaSgpgz5izzoVavZ7UVieu5ChVPpXeAhVZcLQ1OO4qx5RxIAjmw0JtdfAPNjlcFPAJCLrAmnFQw3Ve5/AVDpyxPvlIQVWkxwvWTl7J4UlfLc4xpNWaF87hv85BF5jNFIcEiQTIWh1rciRnavkpjg9dDrx68dIcMmku/AYmu115YamS4vjiHN8aHNsHHCARdqV48vAGJl7J9Typ0RTHjnFsNTjCRxwyaRazFSoFfqxoDmOT7AOOsFQOOZitsVxgtWWXklbpHDB+LLI5pFYxC0i1+JNjxDlOnGOiwQHPU0wfcEiQuJ3rjznAgSMNjtszDksUeNXm9RyOm0YdgzFo/YhDalWxff03OH6ecmD2LmIYQf0Rx2zHRqWjRn/J4ajzcUtgWPkcPxrzGIyFuyccVkKr49TSNMfyFziUAh9PlQyOj9/kwGNxrWZBZnD09Tg+nnJgXaWbX8MsxjjHWo/DgfKwes6BB1skU6Vkjk1BjuHzRTGOTedVDvPP5mi/zGEPy+PACxi88Th4neNQMgfs4nDvv8rhPuCwxsKsBEfmorc5oDBcUhyW0lIW4xhH9qIYR6DL0UxyyEIOsotxxBYNS+NY/Ks53ovLVZPjK8Xxnk51/HHN5ngrb3X88Ssc/v8cfwhH+4/meD1f8JeyOYy//uMcHrM3OGDziz4H/pVQ/Fl0qs2BfwfordfrqR6Hqz4Jj6bHEbPX+0vDTL1LUALHTef++qZ0jo2t9ffsSckcE62/Z+ObAfzriTaHeFUI30rQ4VBt9PhgMC8NrYcco9h+focDhj96lunx9f4/wAEYfCZd/HMcOIIrNt/v9/IJ2WF64T4om8NUX9RP2ejZwtAsk8N9ciRfPKWaZW6ZHI3aY4d0aw351lDaHYmXUN7kaJh++jY22HEAB6oNjplL935iT4U5lOfHEh55YOzp9KdL0xy5z4/hbY9tLc1RjvEHUHOfp8PnHI3kS06lWYSBz33mPudIf5Zb5uFqmm3bd2zj+U+O01P0h1v3F2wbhkccr4o8Sf+sGJRlhd49yXsd7H0r+MbHQO8d16K2LPzfL5j+JDkUlmWbiZ+ZKn8DmrQ9yH+rdP4AAAAASUVORK5CYII="  alt="Error" className='img-1'/></center>
     <figcaption className='title' style={{textAlign:"center",fontSize:"2rem",fontWeight:'900',paddingBottom:'2px'}}>Wet clean</figcaption>
     </div> 
     <div className="desc" style={{textAlign:"center",fontSize:"2rem",fontWeight:'300',color:"black"}}>
     "Fast, reliable online dry cleaning service for clothing and fabrics, ensuring impeccable cleanliness and convenient doorstep pickup and delivery."
     </div>
   ;
    <Button className="btn sec hireme-btn center m-auto"><NavLink to="/contact" style={{color:"white"}}>Know more</NavLink></Button>

     
     </div> 
        <div className="card" >
     <div className="img">
     
     <center>
     <img src="data:image/png;base64,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"  alt="Error" className='img-1'/></center>
     <figcaption className='title' style={{textAlign:"center",fontSize:"2rem",fontWeight:'900',paddingBottom:'2px'}}>Wet clean</figcaption>
     </div> 
     <div className="desc" style={{textAlign:"center",fontSize:"2rem",fontWeight:'300',color:"black"}}>
     "Fast, reliable online dry cleaning service for clothing and fabrics, ensuring impeccable cleanliness and convenient doorstep pickup and delivery."
     </div>
   ;
    <Button className="btn sec hireme-btn center m-auto"><NavLink to="/contact" style={{color:"white"}}>Know more</NavLink></Button>

     
     </div> 
        <div className="card" >
     <div className="img">
     
     <center>
     <img src="data:image/png;base64,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"  alt="Error" className='img-1'/></center>
     <figcaption className='title' style={{textAlign:"center",fontSize:"2rem",fontWeight:'900',paddingBottom:'2px'}}>Wet clean</figcaption>
     </div> 
     <div className="desc" style={{textAlign:"center",fontSize:"2rem",fontWeight:'300',color:"black"}}>
     "Fast, reliable online dry cleaning service for clothing and fabrics, ensuring impeccable cleanliness and convenient doorstep pickup and delivery."
     </div>
   ;
    <Button className="btn sec hireme-btn center m-auto"><NavLink to="/contact" style={{color:"white"}}>Know more</NavLink></Button>

     
     </div> 
        <div className="card" >
     <div className="img">
     
     <center>
     <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIcAAACHCAMAAAALObo4AAAAllBMVEX///8AAAB/jpT19fVgfYs3R09UXGDMzMzP2Nz4+Pienp4rOD7S29/JycklKSupsLN0gYY4P0Jra2tmc3dxcXEZISTb4ONNZHDm5ubT09Ncd4VkgpGqqqq3t7dFTE8OExVAQEA/UlsiLDEZGRkvLy+AgICTk5MxQEcyODogICBSUlJJSUlWcHxaZWlHXGYMDAxdXV27wcQlkiBJAAAJg0lEQVR4nO2cZ3uqaBCGRY2KbYmFgAQbYov1//+5ZWbeRlHwlSy759r5kBOl3cw8UyBwarX3zPFHgRGMfOfN/bxp34FBFnxXiREa0sLqMCaGapOqMNp4+E3YDTf4W7sijhF6oRH91kDPjKrBcNRjI1M1STOAQ7vsgwsfBpVwfMOhxSf4UE3u+v8SjsbNCHz+ocK4RAqRwqxQp4pVmrfc3KrrGNmg8rpOxptMhX0ODRVqHCrt+5xj8115qiBHxdJAm1TA4fjdMAwnMYOc3cS/itbp/tbEara3S+M1228HjZIh7PBVCLJlaJvlYfg3LQiym59/gEJ2Pyh7DZbHUb4dl4GyzeFeAoVzFAg/oe86TqOIOY7rh8sr3/T4tmi7fFebrhtF2ixEAQYrt+vCld23KBpcnSP3FQbBYjp3Lq2fN1LH3XAK00wc4InFWfqcZOPmHzDb7kxmfsIVUa9P1DLFttFwGFvb7vOLYE25+rT1NukLGtSf2Hec2+n32XWwVgb73BmJmDuTJwhkE8eMbdGxu4EuCF28Bm4Co+YWKazL+GZOp+8TyMujo0PaaiT1KWMyzTIZm1g0I5AOpfCLhaTxg6dlJzDUmHxk2aPY2J3+fQ9fv5i+KKxr3LtmzWZ53IMfuwyMnVga+dJW5dqPQLC8vjTGkkZjGGbN2bKAnGbwzzqDYw0LZqcFrbh1FJJOBPKyVpG8q2LUnC6r0b2ZNwMdTDM48PtoOXPJYSuD40QgeCLX4hjYVG6m4gtzO2RxXzUjg+MsMjjAET1YYcXWHm5N5hOzH4H80PkVNMyVQJyKjEhkFy86irfKFgjKY4VrXMQWIjodLpGiOYMi7ZqpiIB9wdk2TxigFAeG44RrfMlNoujUKGc6/foLUnXwsDXujO3GMJIcTSNTIFg+mkkOIEGXdDodGz8WcwgG4Zs4anc+y1z3c8nhrTMFAvJYe5Jjvhdb32vkEJTethAHVOA9jV2810UUrZbKAQK5JgWyu3J5MI6x1RIkUZ+KUqbTAe8GRTBcIqb6yXYyP7diHHSYpEB6yRXG9fp4vmf7cEwTAoPiKzKKhLQR+gNHmOs82l2CA0tVspJhsE5xDtiSfHKDxsuKWQGlYme5kUbRNQernuZoTjMEAmzTZoKjHrlyjgXWNTEwMHcX6DKODAsptlXP4PCwVCQ44Kudl8HR2rOdQi0jf+dy+ISOHFj+hlkcTaxTcaEi2iXpDyvasoXDx08NM+ZOqi0kD1bDaOQZZ3FgJYsLBJvcKckhtjSWKJBOv5hAIHxLyhab6ugncy5xML9ntDpqcixugiPa8Ey96RB5GTIGgnTMwzCXSIsc7A5cYClntWAHakIUFmpgdiDGHVs6WzAODAurIQMTBGLDLLXMu/p2oM5QxxdzeYtOi6K8PslKFhOIbHJR1DBGB+bIT7afbxIqqH+TJ1SMxbcp04UrVexvPcuuZEoVmyGGcVb5ZcLAbg92Dod7JQcCh7jbYLH8IxAKjWckBIJNzpNBQQyp0shulDB/GThyPre2ITkgRAvgmtfTHvGSlQyrmCe90YoVD9jNRnLkXkCoHOj5NQ+MAgIjlwdlS2l12OQ+PDasMQxRPAL0lh6HicJbMeHHQL7SAunFvsegKGFZo49MHQ5qtl848uzrYrfo5Uu61YkmdxHeIJVi8SBMx9ThwPLxRSMPKhWifd6LtIgLBLw/FRV/LrixeCwoqwdaHNhpTp48PytWzBKtDj5gkxMlTFFpjzh8LQ4c4U5Uwa98t3gQqlYXVSA9Hi5W4YYWcZ/JHcTRrWlwYBmLzpzOm9V2nJnXGa1ObXJrFhmh0ilLp60WB3ReKBV4vE8ZFWOW0erUJoeXndexVOmO6SfU4TAn/NRJqaJTsB7CWp1SxXiTo8icRYubctCJjj5wOO3J3QqOi6cebpdqcuxi7jzmGwiH3bTq2FGcIny3kXE5qbNfT8qUycPDQBqYtDjBzLiAjlocMIlgoUalXq0xDzefyZWrOuVKjgqc8YkqveK5cI6lo8HhBJyDTryFeXtVEkZpdaLJ8XQJLFE8vgTHQYODyjoLOZ4ulWn0eQ+/lq1ONjm65IzyHIsHOqwpOAxtDhq/8YBRCbFEo8O7ILKSySrG7nycqaYbhLfiq+hw2ORTWbLOSqOjeVm0OtHkaD6GIibS6xQlFudwNTjaSgpgz5izzoVavZ7UVieu5ChVPpXeAhVZcLQ1OO4qx5RxIAjmw0JtdfAPNjlcFPAJCLrAmnFQw3Ve5/AVDpyxPvlIQVWkxwvWTl7J4UlfLc4xpNWaF87hv85BF5jNFIcEiQTIWh1rciRnavkpjg9dDrx68dIcMmku/AYmu115YamS4vjiHN8aHNsHHCARdqV48vAGJl7J9Typ0RTHjnFsNTjCRxwyaRazFSoFfqxoDmOT7AOOsFQOOZitsVxgtWWXklbpHDB+LLI5pFYxC0i1+JNjxDlOnGOiwQHPU0wfcEiQuJ3rjznAgSMNjtszDksUeNXm9RyOm0YdgzFo/YhDalWxff03OH6ecmD2LmIYQf0Rx2zHRqWjRn/J4ajzcUtgWPkcPxrzGIyFuyccVkKr49TSNMfyFziUAh9PlQyOj9/kwGNxrWZBZnD09Tg+nnJgXaWbX8MsxjjHWo/DgfKwes6BB1skU6Vkjk1BjuHzRTGOTedVDvPP5mi/zGEPy+PACxi88Th4neNQMgfs4nDvv8rhPuCwxsKsBEfmorc5oDBcUhyW0lIW4xhH9qIYR6DL0UxyyEIOsotxxBYNS+NY/Ks53ovLVZPjK8Xxnk51/HHN5ngrb3X88Ssc/v8cfwhH+4/meD1f8JeyOYy//uMcHrM3OGDziz4H/pVQ/Fl0qs2BfwfordfrqR6Hqz4Jj6bHEbPX+0vDTL1LUALHTef++qZ0jo2t9ffsSckcE62/Z+ObAfzriTaHeFUI30rQ4VBt9PhgMC8NrYcco9h+focDhj96lunx9f4/wAEYfCZd/HMcOIIrNt/v9/IJ2WF64T4om8NUX9RP2ejZwtAsk8N9ciRfPKWaZW6ZHI3aY4d0aw351lDaHYmXUN7kaJh++jY22HEAB6oNjplL935iT4U5lOfHEh55YOzp9KdL0xy5z4/hbY9tLc1RjvEHUHOfp8PnHI3kS06lWYSBz33mPudIf5Zb5uFqmm3bd2zj+U+O01P0h1v3F2wbhkccr4o8Sf+sGJRlhd49yXsd7H0r+MbHQO8d16K2LPzfL5j+JDkUlmWbiZ+ZKn8DmrQ9yH+rdP4AAAAASUVORK5CYII="  alt="Error" className='img-1'/></center>
     <figcaption className='title' style={{textAlign:"center",fontSize:"2rem",fontWeight:'900',paddingBottom:'2px'}}>Wet clean</figcaption>
     </div> 
     <div className="desc" style={{textAlign:"center",fontSize:"2rem",fontWeight:'300',color:"black"}}>
     "Fast, reliable online dry cleaning service for clothing and fabrics, ensuring impeccable cleanliness and convenient doorstep pickup and delivery."
     </div>
   ;
    <Button className="btn sec hireme-btn center m-auto"><NavLink to="/contact" style={{color:"white"}}>Know more</NavLink></Button>

     
     </div> 
        <div className="card" >
     <div className="img">
     
     <center>
     <img src="data:image/png;base64,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"  alt="Error" className='img-1'/></center>
     <figcaption className='title' style={{textAlign:"center",fontSize:"2rem",fontWeight:'900',paddingBottom:'2px'}}>Wet clean</figcaption>
     </div> 
     <div className="desc" style={{textAlign:"center",fontSize:"2rem",fontWeight:'300',color:"black"}}>
     "Fast, reliable online dry cleaning service for clothing and fabrics, ensuring impeccable cleanliness and convenient doorstep pickup and delivery."
     </div>
   ;
    <Button className="btn sec hireme-btn center m-auto"><NavLink to="/contact" style={{color:"white"}}>Know more</NavLink></Button>

     
     </div> 


     
          
         
         
      </div>
      
      
    </Wrapper>
  )
}

export default Services