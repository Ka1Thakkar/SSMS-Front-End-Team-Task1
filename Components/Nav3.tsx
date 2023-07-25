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
    ["MENU","https://americanalasvegas.com/las-vegas-americana-restaurant-food-menu"],
    ["DRINKS","https://americanalasvegas.com/las-vegas-americana-restaurant-drink-menu"],
    ["CATERING","https://tmt.spotapps.co/catering?spot_id=77510&callback_url=http%3A%2F%2Famericanalasvegas.com%2F#&source=footer"],
    ["EVENTS","https://americanalasvegas.com/las-vegas-americana-restaurant-events"],
    ["PARTIES",'https://tmt.spotapps.co/private-parties?spot_id=77510&callback_url=http%3A%2F%2Famericanalasvegas.com%2F#&source=footer'],
    ["RESERVE","https://www.opentable.com/restref/client/?restref=269260&rid=269260&datetime=2021-12-08T16%3A00&covers=2&searchdatetime=2021-12-08T16%3A00&partysize=2&corrid=f14ad166-eef5-4429-a767-52c24734e15d"],
    ["JOBS","https://tmt.spotapps.co/job-listings?spot_id=77510&callback_url=http%3A%2F%2Famericanalasvegas.com%2F#&source=footer"],
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
            <Navbar.Link color="inherit" href="https://www.instagram.com/americanalv/">
              <div className=""><AiOutlineInstagram/></div>
            </Navbar.Link>
            <Navbar.Link color="inherit" href="https://www.yelp.com/biz/americana-las-vegas-2">
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
              href={item[1]}
              target="_blank"
            >
              <div className={dm.className}><div className="text-buttonbgblue">{item[0]}</div></div>
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
      </Navbar>
  )
}