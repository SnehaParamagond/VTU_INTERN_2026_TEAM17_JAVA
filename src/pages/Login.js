import React from "react";

function Login() {
  return (
    <div>

      {/* Header */}
      <div style={{
        backgroundColor:"orange",
        height:"60px",
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        padding:"0 20px"
      }}>

        <div style={{fontWeight:"bold"}}>🛒</div>

        <div>
          <a href="#" style={{marginRight:"20px", color:"white"}}>SignUp</a>
          <a href="#" style={{color:"white"}}>Login</a>
        </div>

      </div>


      {/* Login Form */}

      <div style={{textAlign:"center", marginTop:"120px"}}>

        <h2>Login</h2>

        <input
        type="email"
        placeholder="enter email"
        style={{display:"block", margin:"10px auto", padding:"10px", width:"250px"}}
        />

        <input
        type="password"
        placeholder="enter password"
        style={{display:"block", margin:"10px auto", padding:"10px", width:"250px"}}
        />

        <button
        style={{background:"blue", color:"white", padding:"10px 20px", border:"none"}}
        >
        Login
        </button>

      </div>


      {/* Footer */}

      <div style={{
        position:"fixed",
        bottom:"0",
        width:"100%",
        background:"orange",
        textAlign:"center",
        padding:"15px"
      }}>
        E-comm Dashboard
      </div>

    </div>
  );
}

export default Login;