const kmax = document.querySelectorAll(".kmax");
// const kmaxCart = document.querySelector(".kmax-cart");

// const kmaxWhiteLink = "https://www.1shoppingcart.com/SecureCart/SecureCart.aspx?mid=8C3A2643-E313-4991-9BB0-2D46596FC53F&pid=1e99aeaef8244888a83b5451719f37ba";
// const kmaxSteelLink = "https://www.1shoppingcart.com/SecureCart/SecureCart.aspx?mid=8C3A2643-E313-4991-9BB0-2D46596FC53F&pid=786c59a779a84c3fb49490d3a3e5851d";
// const kmaxBlackLink = "https://www.1shoppingcart.com/SecureCart/SecureCart.aspx?mid=8C3A2643-E313-4991-9BB0-2D46596FC53F&pid=bc64082aae4b4c1e8bf84860ad7e28e8";

const handleLinkChange = () => {
  
//   console.log(kmax[1 - 1]);

  // kmaxCart.setAttribute("href", kmaxWhiteLink);
};

kmax.forEach((el) => el.addEventListener("click", handleLinkChange));
