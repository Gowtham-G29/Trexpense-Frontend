import { Card, Divider } from "@mui/material";

function AccountMenuPopUp() {
  return (
    <div className="relative">
      <Card
        sx={{
          position: 'absolute',
          bottom: '2rem',
          left: '6.25rem', // left-25 ≈ 100px = 6.25rem
          width: '12rem',
          boxShadow: 6,
          zIndex: 10,
        }}
      >
        <div className="flex flex-col items-center p-4 gap-3 bg-slate-100 rounded-lg">
          <p className="text-gray-600 hover:text-black cursor-pointer">Profile</p>
          <Divider className="w-[60%]" />
          <p className="text-gray-600 hover:text-black cursor-pointer">Logout</p>
        </div>
      </Card>
    </div>
  );
}

export default AccountMenuPopUp;
