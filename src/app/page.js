import Image from "next/image";
import styles from "./page.module.css";
import UserLayout from "@/layouts/UserLayout";
import Products from "@/screens/products/products"
import Header from "@/components/header/Header"
import './page.css'
export default function Home() {
  return (
    <UserLayout>
      <div className="page-content">
        <Products />
      </div>
    </UserLayout>
  );
}
