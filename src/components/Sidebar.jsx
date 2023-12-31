import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import ContactForm from '../ContactForm';
import ContactCard from "../ContactCard";

const SideBar = () => {
    return (
        <section className="flex gap-6">
            <div className="bg-[#0e0e0e] min-h-screen w-72 text-white">
                <div className="py-10 flex justify-center">
                    Home
                </div>
                <Link to={"/contact"}>
                    <div className="py-10 flex justify-center">
                        Contact
                    </div>
                </Link>
                <div className="py-10 flex justify-center">
                    Map
                </div>
            </div>
            <div className="w-3/4 p-6">
                <Routes>
                    <Route path="/contact" element={<ContactForm/>} />
                </Routes>
                <div>
                    <ContactCard/>
                </div>
            </div>
        </section>
    )
}

export default SideBar;