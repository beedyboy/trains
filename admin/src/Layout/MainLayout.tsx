import * as React from "react";
import SideBar from "./SideBar";

const MainLayout = ({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement => {
  return (
    <>
      <div className="topbar">Admin</div>
      {/* <div className="grid"> */}
        <aside>
          <SideBar />
        </aside>
        <main>{children}</main>
      {/* </div> */}
    </>
  );
};

export default MainLayout;
