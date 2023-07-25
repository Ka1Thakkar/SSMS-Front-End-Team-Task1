"use client"
import { Navbar, Button, Link, Text } from "@nextui-org/react";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsYelp } from "react-icons/bs";
import Image from "next/image";
import Logo from "../public/Assets/Logo.png"
import { DM_Serif_Display } from "next/font/google";

const dm = DM_Serif_Display({subsets:["latin"], weight:["400"]})

export default function Nav3() {
  const collapseItems = [
    ["MENU",""],
    ["DRINKS",""],
    ["CATERING",""],
    ["EVENTS",""],
    ["PARTIES",''],
    ["RESERVE",""],
    ["JOBS",""],
  ];

  return (
      <Navbar disableBlur="true" variant="sticky">
        <Navbar.Content>
          <Image src={Logo} height={130} width={130} alt="Restaurant logo" quality={100} />
        </Navbar.Content>
        <div className={dm.className}>
          <Navbar.Content>
            <Navbar.Content hideIn="xs">
              <div className=" text-buttonbgblue">
                <Navbar.Link href="#">Features</Navbar.Link>
              </div>
              <div className=" text-buttonbgblue">
                <Navbar.Link href="#">
                  Customers
                </Navbar.Link>
              </div>
              <div className=" text-buttonbgblue">
                <Navbar.Link href="#">Pricing</Navbar.Link>
              </div>
              <div className=" text-buttonbgblue">
                <Navbar.Link href="#">Company</Navbar.Link>
              </div>
            </Navbar.Content>
            <Navbar.Link color="inherit" href="#">
              <div className=""><AiOutlineInstagram/></div>
            </Navbar.Link>
            <Navbar.Link color="inherit" href="#">
              <BsYelp/>
            </Navbar.Link>
            <Navbar.Brand showIn="xs">
              <Navbar.Toggle aria-label="toggle navigation" />
            </Navbar.Brand>
          </Navbar.Content>
          </div>
        <Navbar.Collapse>
        {collapseItems.map((item, index) => (
          <Navbar.CollapseItem key={item}>
            <Link
              color="inherit"
              css={{
                minWidth: "100%",
              }}
              href="#"
            >
              <div className={dm.className}><div className="text-buttonbgblue">{item}</div></div>
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
      </Navbar>
  )
}