import ventrie from "../src/ventrie.png"
import { useState } from "react";
import { NavLink } from "react-router";
import { RiCheckboxBlankCircleLine, RiCloseLine, RiFileListLine , RiMenuLine, RiArrowDownLine, RiArrowRightLine} from "@remixicon/react";
import { icons } from "../components/navbaricons/icons"
import type { JSX } from "react";

interface NavigationItemInterface {
  text: string;
  link: string;
  icon?: JSX.Element | string;
  items?: NavigationItemInterface[];
  hasDivider?: boolean;
}

const navigationList: NavigationItemInterface[] = [
  { text: "Dashboard", link: "/dashboard", icon: icons.Home , hasDivider: true },
  {
    text: "Orders", link: "/orders", icon: icons.Orders,
    items: [
      { text: "Orders List", link: "/orders/list", icon: <RiCheckboxBlankCircleLine size={18} /> },
      { text: "Creadit & Refunds", link: "/orders/credit&Refunds", icon: <RiCheckboxBlankCircleLine size={18} /> },
      { text: "Add Order", link: "/orders/addorder", icon: <RiCheckboxBlankCircleLine size={18} /> },
    ]
  },
  {
    text: "Customers", link: "/customers", icon: icons.Customers,
    items: [
      { text: "Customer List", link: "/customers/CustomerList", icon: <RiCheckboxBlankCircleLine size={18} /> },
      { text: "Add Customer", link: "/customers/AddCustomer", icon: <RiCheckboxBlankCircleLine size={18} /> },
    ]
  },
  {
    text: "Inventory", link: "/inventory", icon: icons.Inventory,
    items: [
      { text: "Inventory List", link: "/inventory/Ilist", icon: <RiCheckboxBlankCircleLine size={18} /> },
      { text: "Add Inventory", link: "/inventory/Addinventory", icon: <RiCheckboxBlankCircleLine size={18} /> },
      { text: "Product", link: "/invnetory/product", icon: <RiCheckboxBlankCircleLine size={18} /> },
      { text: "Parts & Material", link: "/invnetory/parts&material", icon: <RiCheckboxBlankCircleLine size={18} /> },
      { text: "Machinary", link: "/invnetory/machinary", icon: <RiCheckboxBlankCircleLine size={18} /> },
    ]
  },
  {
    text: "Suppliers", link: "/supplier", icon: icons.Suppliers,
    items: [
      { text: "supplier List", link: "/supplier/Slist", icon: <RiCheckboxBlankCircleLine size={18} /> },
      { text: "Add Supplier", link: "/supplier/AddSupplier", icon: <RiCheckboxBlankCircleLine size={18} /> },
    ]
  },
  {
    text: "Staff", link: "/supplier", icon: icons.Staff, hasDivider: true,
    items: [
      { text: "staff List", link: "/supplier/Slist", icon: <RiCheckboxBlankCircleLine size={18} /> },
      { text: "Add Staff", link: "/supplier/Addstaff", icon: <RiCheckboxBlankCircleLine size={18} /> },
    ]
  },
  { text: "Ledger", link: "/ledger", icon: <RiFileListLine size={20} /> },
  { text: "Setting", link: "/setting", icon: icons.Settings,
    items: [
      {text: "Roles", link:"/setting/roles", icon: <RiCheckboxBlankCircleLine size={18} />},
    ]
  },
  { text: "Tools", link: "/tools", icon: icons.Tool,
    items:[
      {text: "Stages", link:"/tools/stages", icon: <RiCheckboxBlankCircleLine size={18} />},
      {text: "Add Stage", link:"/tools/stages/addstage", icon: <RiCheckboxBlankCircleLine size={16} className="ml-5"/>},
      {text: "Production Line", link:"/tools/productionline", icon: <RiCheckboxBlankCircleLine size={18} />},
      {text: "Add Production Line", link:"/tools/productionline/addproductionline", icon: <RiCheckboxBlankCircleLine size={16} className="ml-5" />},
    ]
  },



]

export default function SideNav() {
  const [expended, setexpended] = useState<string | null>(null);
  const [mobileMenuopen, setMobileMenuopen] = useState<boolean>(false);

  const toggleExpend = (text: string) => {
    setexpended(expended === text ? null : text);
  };

  const toggleMobileMenu = () => {
    setMobileMenuopen(!mobileMenuopen);
  }

  return (
    <>
      {/* Mobile Menu Button */}
      <button className="md:hidden fixed top-5 left-5 z-50 cursor-pointer bg-gray-800 text-white p-3 rounded-lg" onClick={toggleMobileMenu}>
        <RiMenuLine />
      </button>

      {/* Sidebar */}
      <aside className={`fixed top-0 left-0 h-screen bg-white border-r border-gray-400 md:relative md:block transition-transform md:translate-x-0 ${mobileMenuopen ? "w-full translate-x-0" : "-translate-x-full"} md:w-64 md:flex flex-col z-50`}>

        {/* Close Button for Mobile */}
        <button className="md:hidden absolute cursor-pointer top-4 right-4 " onClick={toggleMobileMenu}>
          <RiCloseLine />
        </button>

        <div className="pt-7 pl-5 mb-8">
          <img src={ventrie} alt="not found" />
        </div>

        <ul>
          {navigationList.map((item, index) => (
            <li key={index} className="relative">
              {item.items ? (
                <button
                  onClick={() => toggleExpend(item.text)}
                  className="w-[95%] flex justify-between items-center ml-2 mb-1 px-4 py-3 text-left cursor-pointer hover:bg-gray-200 focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    {item.icon && <span>{item.icon}</span>}
                    {item.text}
                  </div>
                  {expended === item.text ? ( <RiArrowDownLine className="w-4 h-4" /> ) : ( <RiArrowRightLine className="w-4 h-4" /> )} 
                </button>
              ) : (
                <NavLink
                  to={item.link}
                  end
                  className={({ isActive }) => `w-[95%] ml-2 mb-1 rounded flex items-center px-4 py-3 hover:bg-gray-200 ${isActive ? 'bg-gray-700' : 'bg-white'}`}
                >
                  {item.icon && <span className="mr-3">{item.icon}</span>}
                  {item.text}
                </NavLink>
              )}

              {item.items && expended === item.text && (
                <ul className="ml-3 w-[95%]">
                  {item.items.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <NavLink
                        to={subItem.link}
                        end
                        className={({ isActive }) => `flex rounded px-4 py-2 w-[98%] mb-1 hover:bg-gray-700 hover:text-white ${isActive ? 'bg-gray-300' : 'bg-white'}`}
                      >
                        {subItem.icon && <span className="flex items-center mr-2">{subItem.icon}</span>}
                        {subItem.text}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
              {item.hasDivider && <hr className="pb-1 border-t-2 border-gray-300" />}
            </li>
          ))}
        </ul>
      </aside>

      {/* Overlay for Mobile */}
      {mobileMenuopen && <div className="fixed inset-0 bg-white bg-opacity-50 z-40 md:hidden" onClick={toggleMobileMenu}></div>}

    </>
  );
}

