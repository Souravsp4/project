import React from 'react'

const Home = () => {
  return (


<>
 {/* <head>
     <title>Centered Dropdown Buttons with CSS Styling</title> 
    <link rel="stylesheet" type="text/css" href="styles.css"/>
</head>  */}
<body>
   
    <div class="center-container" > 
    <h2>Choose your device</h2>
                <div class="dropdown-wrapper">
            <div class="dropdown">
                <button class="dropdown-btn">Laptops+</button>
                <div class="dropdown-content">
                    <a href="#">Casual laptops</a>
                    <a href="#">Gaming laptops</a>
                    <a href="#">Business laptops</a>
                </div>
            </div>

            <div class="dropdown">
                <button class="dropdown-btn">Desktops+</button>
                <div class="dropdown-content">
                    <a href="#">Casual desktops</a>
                    <a href="#">Gaming desktops</a>
                    <a href="#">business desktops </a>
                </div>
            </div>
        </div>
    </div>
</body>


</>
  )
}

export default Home
