import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";
import { Link, matchPath, useLocation } from "react-router-dom";

import { ACCOUNT_TYPE } from "../../../utils/constants";
import ProfileDropdown from "../../core/Auth/ProfileDropDown";

const User = () => {
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const { totalItems } = useSelector((state) => state.cart);
  return (
    <div className="relative group">
      <div className="hidden items-center gap-x-4 md:flex">
        {user && user?.accountType !== ACCOUNT_TYPE.INSTRUCTOR && (
          <Link to="/dashboard/cart" className="relative">
            <AiOutlineShoppingCart className="text-2xl text-richblack-100" />
            {totalItems > 0 && (
              <span className="absolute -bottom-2 -right-2 grid h-5 w-5 place-items-center overflow-hidden rounded-full bg-richblack-600 text-center text-xs font-bold text-yellow-100">
                {totalItems}
              </span>
            )}
          </Link>
        )}
        {/* bg-[#ff0088] hover:bg-[#ff48a9] */}
        {token === null && (
          <Link to="/login">
            <button className="rounded-[20px] bg-[#ff0088] px-[22px] py-[8px] text-white hover:bg-[#ff48a9]">
              Log in
            </button>
          </Link>
        )}
        {token === null && (
          <Link to="/signup">
            <button className="rounded-[20px] bg-[#ff0088] px-[22px] py-[8px] text-white hover:bg-[#ff48a9]">
              Sign up
            </button>
          </Link>
        )}
        {/* {token !== null && <ProfileDropdown />} */}
        {token !== null && <ProfileDropdown />}
      </div>
    </div>
  );
};

export default User;