import React from "react";
import TextFooter from "../atoms/TextFooter";
import Button from "../atoms/Button";
import Logo from "../atoms/Logo";
import MenuListFooter from "../molecules/MenuListFooter";

function Footer() {
  return (
    <div className={"bg-bg-button-green"}>
      <div className="p-5 2xl:p-6 flex items-center justify-center flex-col lg:flex-row-reverse lg:justify-between gap-y-6 container m-auto">
        <div className="w-full lg:w-fit flex items-center justify-between">
          <Logo />
          <div className="lg:hidden">
            <Button
              text="محیط برنامه "
              variant="buttonBlue"
              type="link"
              href="/"
            />
          </div>
        </div>
        <hr className="w-full h-1 bg-border-grey lg:hidden" />
        <MenuListFooter />
        <div className="w-full lg:w-fit flex items-center justify-center">
          <TextFooter />
        </div>
      </div>
    </div>
  );
}

export default Footer;
