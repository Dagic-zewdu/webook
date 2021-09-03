const path = require("path");

module.exports = {
  entry: {
    index: ["./src/index.ts"],
    registerCompany: ["./src/registerCompany.ts"],
    addAdmin: ["./src/addAdmin.ts"],
    login: ["./src/login.ts"],
    admin: ["./src/admin/admin.ts"],
    /**employee */
    employees: ["./src/admin/Employee/employees.ts"],
    createEmployee: ["./src/admin/Employee/createEmployee"],
    /**department */
    department: ["./src/admin/department.ts"],
    createDepartment: ["./src/admin/createDepartent.ts"],
    editDepartment: ["./src/admin/editDepartment.ts"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        include: [path.resolve(__dirname, "src")],
        use: "ts-loader",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
    fallback: { crypto: false },
  },
  mode: "development",
  devServer: {
    contentBase: path.resolve(__dirname, "public"),
    publicPath: "/assets/",
    port: 9000,
    open: true,
    liveReload: true,
    watchContentBase: true,
  },

  devtool: "eval-source-map",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "public/assets"),
  },
};
