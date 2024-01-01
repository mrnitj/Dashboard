import React from "react";
import "./Styles/Card1.css";
import { LuUser2 } from "react-icons/lu";
import { TiCloudStorageOutline } from "react-icons/ti";
import { AiOutlineMail } from "react-icons/ai";
import { BiSolidRightArrow } from "react-icons/bi";
import { MdArrowRightAlt } from "react-icons/md";
import { cardData } from "../datas";

export const Card1 = () => {
    return (
        <div className="Card1Main">
            {cardData.map((data) => (
                <div className="card">
                    <h1>{data.title}</h1>
                    <div className="price-wraper">
                        <div class="price-slash"></div>
                        <p>$ {data.price}/mo</p>
                    </div>
                    <p>$ {data.discount}/mo</p>
                    <button style={{ backgroundColor: `${data.bgcolor}` }}>
                        Get Started{" "}
                        <span>
                            <MdArrowRightAlt style={{ fontSize: "30px" }} />
                        </span>
                    </button>
                    <hr />
                    <div className="card-bottom">
                        <p>what you'll get :</p>
                        <ul>
                            <li>
                                <LuUser2 />
                                <span>Upto {data.upto} users</span>
                            </li>
                            <li>
                                <TiCloudStorageOutline />
                                <span>upto {data.upto2}gb storage</span>
                            </li>
                            <li>
                                <AiOutlineMail />
                                {data.support}
                            </li>
                        </ul>
                        <a href="">
                            EXPLORE FEATURES{" "}
                            <span>
                                <BiSolidRightArrow style={{ color: `${data.bgcolor}` }} />
                            </span>
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
};
