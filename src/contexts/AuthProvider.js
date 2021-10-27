import { createContext } from "react";
import useCart from "../hooks/useCart.js";
import useFirebase from "../hooks/useFirebase.js";
import useCourses from "./../hooks/useCourses.js";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // hooks
  const AllContexts = useFirebase();
  const { courses, totalPage, currentPage, setCurrentPage } = useCourses();
  const { addToCart, selectedCourse, remove, setSelectedCourse } = useCart();

  const data = {
    currentPage,
    setCurrentPage,
    AllContexts,
    totalPage,
    courses,
    addToCart,
    selectedCourse,
    remove,
    setSelectedCourse,
  };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
