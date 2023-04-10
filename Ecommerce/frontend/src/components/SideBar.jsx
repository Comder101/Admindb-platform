import { NavLink, Outlet } from "react-router-dom";
import { FaBars, FaHome, FaUser } from "react-icons/fa";
import { MdProductionQuantityLimits } from "react-icons/md";
import { BsCartCheck } from "react-icons/bs";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
import { VscPreview } from "react-icons/vsc";
import { GrAddCircle } from "react-icons/gr";
import { MdDeliveryDining } from "react-icons/md";
import { MdOutlineInventory2 } from "react-icons/md";
import { BiSearch } from "react-icons/bi";



const routes = [
  {
    path: "/dashboard/home",
    name: "Home",
    icon: <FaHome />,
  },
  {
    path: "/products",
    name: "Products",
    icon: <MdProductionQuantityLimits />,
    subRoutes: [
      {
        path: "/dashboard/addcategory",
        name: "Add Category ",
        icon: <GrAddCircle />,
      },
      {
        path: "/dashboard/addsubcategory",
        name: "Add SubCategory",
        icon: <GrAddCircle />,
      },
      {
        path: "/dashboard/addproduct",
        name: "Add Product",
        icon: <GrAddCircle />,
      },
    ],
  },
  {
    path: "/dashboard/viewproducts",
    name: "View Products",
    icon: <VscPreview />,
  },
  {
    path: "/delivery",
    name: "Delivery Agent",
    icon: <MdDeliveryDining />,
    subRoutes: [
      {
        path: "/dashboard/adddeliveryagent",
        name: "Add Delivery Agent ",
        icon: <GrAddCircle />,
      },
      {
        path: "/dashboard/viewdeliveryagents",
        name: "View Delivery Agents",
        icon: <VscPreview />,
      },
    ],
  },
  {
    path: "/inventory",
    name: "Inventory Manager",
    icon: <MdOutlineInventory2 />,
    subRoutes: [
      {
        path: "/dashboard/addinventorymanager",
        name: "Add Inventory Manager",
        icon: <GrAddCircle />,
      },
      {
        path: "/dashboard/viewinventorymanagers",
        name: "View Inventory Manager",
        icon: <VscPreview />,
      },
    ],
  },
  {
    path: "/dashboard/vieworders",
    name: "Order",
    icon: <BsCartCheck />,
  },
];





const SideBar = ({ children }) => {

  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);

  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "165px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };


  // return components
  return (
    <>

    <div className="bg-white text-black">
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "230px" : "45px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          <div className="top_section">

            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                  <h2 className='text-xl font-bold text-center flex justify-center'>Groccery</h2>
                </motion.h1>
              )}
            </AnimatePresence>

            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>


          {/* search bar */}
          <div className="search">
            <div className="search_icon">
              <BiSearch />
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.input
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  variants={inputAnimation}
                  type="text"
                  placeholder="Search"
                />
              )}
            </AnimatePresence>
          </div>


          {/* routes */}
          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link transition duration-300 ease-in-out hover:scale-110 ml-1"
                  activeClassName="active"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>

        <main>{children}</main>
      </div>
    </div>
    <Outlet/>
    </>
  );
};


export default SideBar;
