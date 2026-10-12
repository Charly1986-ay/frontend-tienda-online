import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className='admin-layout-container'>
      <main className='admin-main-content'>
        <Outlet />
      </main>
    </div>
  )
}

export default AdminLayout;