export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img src={params.row.img} alt="" className="cellImg" />
          {params.row.username}
        </div>
      );
    },
  },
  { field: "email", headerName: "Email", width: 230 },
  { field: "age", headerName: "Age", width: 130 },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

export const userRows = [
  {
    id: 1,
    username: "John",
    img: "https://creazilla-store.fra1.digitaloceanspaces.com/icons/7912768/avatar-icon-md.png",
    status: "active",
    email: "john@gmail.com",
    age: 30,
  },
  {
    id: 2,
    username: "Joe",
    img: "https://www.svgrepo.com/show/384674/account-avatar-profile-user-11.svg",
    status: "passive",
    email: "joe@gmail.com",
    age: 27,
  },
  {
    id: 3,
    username: "Cersei",
    img: "https://www.vhv.rs/dpng/d/426-4264903_user-avatar-png-picture-avatar-profile-dummy-transparent.png",
    status: "active",
    email: "cersei@gmail.com",
    age: 25,
  },
  {
    id: 4,
    username: "Jaime",
    img: "https://cdn-icons-png.flaticon.com/512/5556/5556499.png",
    status: "pending",
    email: "jaime@gmail.com",
    age: 35,
  },
  {
    id: 5,
    username: "Ferrara",
    img: "https://freepngimg.com/save/168291-woman-vector-png-download-free/512x512",
    status: "active",
    email: "ferrara@gmail.com",
    age: 25,
  },
  {
    id: 6,
    username: "Harvey",
    img: "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-No-Background.png",
    status: "active",
    email: "harvey@gmail.com",
    age: 33,
  },
];
