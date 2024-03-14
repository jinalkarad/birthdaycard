"use client";
import React, { useState } from 'react';

const CardSelection: React.FC = () => {

    return (
        <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                    <img src='/back.png' style={{width: "30px", height: "30px"}} />
                </div>
                <div>
                    <img src='/profile.png' style={{width: "60px"}}  />
                </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0px"}}>
                <div style={{width: "17%", height: "3px", background: "#6FB6F7", borderRadius: "3px"}}></div>
                <div style={{width: "17%", height: "3px", background: "#C7C5C5" , borderRadius: "3px"}}></div>
                <div style={{width: "17%", height: "3px", background: "#C7C5C5" , borderRadius: "3px"}}></div>
                <div style={{width: "17%", height: "3px", background: "#C7C5C5" , borderRadius: "3px"}}></div>
                <div style={{width: "17%", height: "3px", background: "#C7C5C5" , borderRadius: "3px"}}></div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0px 20px 0px" }}>
                <h1 style={{ fontSize: "22px", color: "#5FA8F6", fontWeight: "100", }}>Please choose a card.</h1>
                <div>
                    <img src='/menu.png' style={{width: "35px"}} />
                </div>
            </div>
            <div>
                <div>
                    <img src="/birthday_img.jpg" width={"100%"} style={{borderRadius: "20pxc 20px 0px 0px", boxShadow: "2px 4px 10px 4px #0000001C"}} />
                </div>

            </div>
            <button style={{ fontSize: "18px", textAlign: "center", width: "100%", border: "none", color: "#fff", background:"linear-gradient(91.63deg, #FE72AC 0.03%, #BB81F5 99.97%)", borderRadius: "50px", padding: "12px 15px", marginTop: "40px", fontWeight: "500", fontFamily:"Poppins" }}>Create Card</button>
        </div>
    );
};

export default CardSelection;
