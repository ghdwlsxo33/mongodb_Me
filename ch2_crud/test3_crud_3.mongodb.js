use("testMember");
db.users.insertMany([
    { name: "먹고싶은점심", lunchMenuList: ["국수", "된장찌개", "국밥"], age : 30, comment : {title : "메뉴글1", writer : "홍진태"}}, 
    { name: "먹고싶은점심1", lunchMenuList: ["국수1", "된장찌개1", "국밥1"], age : 30, comment : {title : "메뉴글2", writer : "홍진태"}},
    { name: "먹고싶은점심2", lunchMenuList: ["국수2", "된장찌개2", "국밥2"], age : 30, comment : {title : "메뉴글3", writer : "홍진태"}},
  ]);
  
  //조회
  db.users.find();
  
  // 수정 예
   use("testMember");
  db.users.update(
    {},
    {
      $set: {"lunchMenuList.$[lunchElm]": "칼국수" },
    },
    { arrayFilters: [{ lunchElm: "국수" }] }
  );
  
  // 복수개 수정.
//   db.users.updateMany(
//     {},
//     {
//       $set: { "inventory.$[penElm]": "lunch" },
//     },
//     { arrayFilters: [{ penElm: "먹고싶은점심" }] }
//   );

  db.users.deleteOne({name:"lunch"})
  db.users.deleteMany({})
  db.users.drop()