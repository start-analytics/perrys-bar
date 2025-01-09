import React from "react";
import pdfmenu from "../../assets/img/pdfmenu.pdf";

const MenuPage = () => {
  return (
      <main style={{padding: "100px 20px", textAlign: "center", height:"100vh", paddingBottom:'0'}}>
        <iframe src={pdfmenu} width="100%" height="100%" />
      </main>
  );
};

export default MenuPage;
